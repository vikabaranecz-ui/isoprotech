#!/usr/bin/env python3
import json
import os
import re
import socket
import subprocess
import time
import urllib.error
import urllib.request

TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "").strip()
CHAT_ID = os.getenv("TELEGRAM_CHAT_ID", "").strip()
REPO = os.getenv("GITHUB_REPOSITORY", "").strip()


def tg(method, payload=None, retries=2):
    url = "https://api.telegram.org/bot" + TOKEN + "/" + method
    data = None
    headers = {}
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
        headers["Content-Type"] = "application/json"
    request = urllib.request.Request(url, data=data, headers=headers)

    last_error = None
    for attempt in range(retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=10) as response:
                return json.load(response)
        except (TimeoutError, socket.timeout, urllib.error.URLError) as exc:
            last_error = exc
            if attempt < retries:
                time.sleep(2 * (attempt + 1))
                continue
            raise last_error


def gh(args):
    return subprocess.run(["gh", *args], capture_output=True, text=True, check=False)


def gh_json(args):
    result = gh(args)
    if result.returncode != 0:
        return None
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return None


def answer_callback(callback_id, text):
    try:
        tg("answerCallbackQuery", {"callback_query_id": callback_id, "text": text[:180], "show_alert": False})
    except Exception:
        pass


def clear_buttons(message):
    try:
        tg("editMessageReplyMarkup", {
            "chat_id": message["chat"]["id"],
            "message_id": message["message_id"],
            "reply_markup": {"inline_keyboard": []},
        })
    except Exception:
        pass


def send(text):
    tg("sendMessage", {"chat_id": CHAT_ID, "text": text, "disable_web_page_preview": True})


def validate_pr(pr_number, expected_sha_prefix):
    pr = gh_json([
        "pr", "view", str(pr_number), "--repo", REPO,
        "--json", "number,url,state,isDraft,baseRefName,headRefName,headRefOid,body,title",
    ])
    if not pr:
        return None, "PR не знайдено."
    if pr.get("state") != "OPEN":
        return None, "PR вже закритий або merged."
    if pr.get("baseRefName") != "main":
        return None, "PR не спрямований у main."
    if not str(pr.get("headRefName", "")).startswith("seo/approval-"):
        return None, "Це не approval PR."
    if "<!-- telegram-approval-required -->" not in (pr.get("body") or ""):
        return None, "PR не має approval-маркера."
    head = pr.get("headRefOid") or ""
    if not head.startswith(expected_sha_prefix):
        return None, "PR змінився після надсилання в Telegram. Потрібен новий перегляд."
    return pr, None


def checks_ready(pr_number):
    result = gh(["pr", "checks", str(pr_number), "--repo", REPO, "--json", "bucket,name,state"])
    if result.returncode != 0:
        combined = (result.stdout + result.stderr).lower()
        if "no checks" in combined:
            return True, ""
        return False, "Не вдалося перевірити CI checks."
    try:
        checks = json.loads(result.stdout)
    except json.JSONDecodeError:
        return False, "Не вдалося прочитати CI checks."
    blocking = [c for c in checks if str(c.get("bucket", "")).lower() not in {"pass", "skipping"}]
    if blocking:
        names = ", ".join(c.get("name", "check") for c in blocking[:4])
        return False, f"Ще не всі перевірки успішні: {names}."
    return True, ""


def approve(pr_number, sha_prefix, callback_id, message):
    pr, error = validate_pr(pr_number, sha_prefix)
    if error:
        answer_callback(callback_id, error)
        try:
            send(f"⚠️ PR #{pr_number} не опубліковано. {error}")
        except Exception:
            pass
        return

    ready, error = checks_ready(pr_number)
    if not ready:
        answer_callback(callback_id, "Поки не можна merge: перевірки не завершені.")
        try:
            send(f"⏳ PR #{pr_number} поки не пішов у main. {error}\nСпробуй натиснути «Підтвердити» ще раз після завершення checks.")
        except Exception:
            pass
        return

    if pr.get("isDraft"):
        ready_result = gh(["pr", "ready", str(pr_number), "--repo", REPO])
        if ready_result.returncode != 0:
            answer_callback(callback_id, "Не вдалося підготувати PR до merge.")
            try:
                send(f"⚠️ PR #{pr_number}: не вдалося зняти Draft статус.")
            except Exception:
                pass
            return

    result = gh([
        "pr", "merge", str(pr_number), "--repo", REPO,
        "--squash", "--delete-branch", "--match-head-commit", pr["headRefOid"],
    ])
    if result.returncode != 0:
        answer_callback(callback_id, "Merge не виконано.")
        detail = (result.stderr or result.stdout).strip().splitlines()
        detail = detail[-1] if detail else "GitHub відхилив merge."
        try:
            send(f"⚠️ PR #{pr_number} не пішов у main. {detail[:300]}")
        except Exception:
            pass
        return

    clear_buttons(message)
    answer_callback(callback_id, "Підтверджено — merge у main виконано.")
    try:
        send(f"✅ ПІДТВЕРДЖЕНО\nPR #{pr_number} merged у main. Vercel автоматично публікує нову версію сайту.\n{pr.get('url')}")
    except Exception:
        pass


def reject(pr_number, sha_prefix, callback_id, message):
    pr, error = validate_pr(pr_number, sha_prefix)
    if error:
        answer_callback(callback_id, error)
        return
    result = gh(["pr", "close", str(pr_number), "--repo", REPO, "--delete-branch", "--comment", "Rejected by owner via Telegram approval workflow."])
    if result.returncode != 0:
        answer_callback(callback_id, "Не вдалося відхилити PR.")
        try:
            send(f"⚠️ Не вдалося закрити PR #{pr_number}.")
        except Exception:
            pass
        return
    clear_buttons(message)
    answer_callback(callback_id, "Відхилено.")
    try:
        send(f"❌ ВІДХИЛЕНО\nPR #{pr_number} закрито без змін у main.\n{pr.get('url')}")
    except Exception:
        pass


def main():
    if not TOKEN or not CHAT_ID or not REPO:
        print("Telegram/GitHub environment is incomplete; skipping.")
        return 0

    try:
        data = tg("getUpdates", {"limit": 100, "timeout": 0})
    except (TimeoutError, socket.timeout, urllib.error.URLError) as exc:
        print(f"Transient Telegram API error; skipping this poll without failing workflow: {exc}")
        return 0

    updates = data.get("result", [])
    max_update = None

    for update in updates:
        update_id = update.get("update_id")
        if isinstance(update_id, int):
            max_update = update_id if max_update is None else max(max_update, update_id)

        callback = update.get("callback_query")
        if not callback:
            continue

        message = callback.get("message") or {}
        chat = (message.get("chat") or {}).get("id")
        if str(chat) != CHAT_ID:
            answer_callback(callback.get("id", ""), "Not authorized")
            continue

        match = re.fullmatch(r"seo:(approve|reject):(\d+):([0-9a-f]{12})", callback.get("data", ""))
        if not match:
            continue

        action, pr_text, sha_prefix = match.groups()
        pr_number = int(pr_text)
        if action == "approve":
            approve(pr_number, sha_prefix, callback.get("id", ""), message)
        else:
            reject(pr_number, sha_prefix, callback.get("id", ""), message)

    if max_update is not None:
        try:
            tg("getUpdates", {"offset": max_update + 1, "limit": 1, "timeout": 0})
        except (TimeoutError, socket.timeout, urllib.error.URLError) as exc:
            print(f"Could not acknowledge Telegram updates this cycle; next poll will retry: {exc}")

    print(f"Processed {len(updates)} Telegram update(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
