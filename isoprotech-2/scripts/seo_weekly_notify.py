#!/usr/bin/env python3
import json
import os
import re
import subprocess
from datetime import datetime
from zoneinfo import ZoneInfo

import requests


def gh_json(args):
    result = subprocess.run(["gh", *args], check=False, capture_output=True, text=True)
    if result.returncode != 0:
        return None
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return None


def clean_markdown(text):
    text = re.sub(r"^#{1,6}\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)
    text = re.sub(r"`([^`]*)`", r"\1", text)
    text = re.sub(r"\[(.*?)\]\((.*?)\)", r"\1: \2", text)
    return text.strip()


def extract_notification_summary(body):
    marker = "## Notification summary"
    if marker not in body:
        return ""
    section = body.split(marker, 1)[1]
    next_heading = re.search(r"\n##\s+", section)
    if next_heading:
        section = section[: next_heading.start()]
    return clean_markdown(section)


def parse_fields(summary):
    fields = {}
    for raw in summary.splitlines():
        line = raw.strip().lstrip("- ").strip()
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        fields[key.strip().lower()] = value.strip()
    return fields


def latest_weekly_issue(repo, date_str):
    query = f'"SEO Weekly — {date_str}" in:title'
    issues = gh_json([
        "issue", "list", "--repo", repo, "--search", query, "--limit", "10",
        "--json", "number,title,url,body,createdAt",
    ])
    if not issues:
        return None
    exact = [i for i in issues if i.get("title", "").startswith(f"SEO Weekly — {date_str} —")]
    if not exact:
        return None
    exact.sort(key=lambda i: i.get("createdAt", ""), reverse=True)
    return exact[0]


def send_telegram(token, chat_id, message, reply_markup=None):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": message[:4000],
        "disable_web_page_preview": True,
    }
    if reply_markup:
        payload["reply_markup"] = reply_markup
    try:
        response = requests.post(url, json=payload, timeout=20)
    except requests.RequestException:
        print("Telegram notification failed due to a network error.")
        return False
    if not response.ok:
        print(f"Telegram notification failed with HTTP {response.status_code}.")
        return False
    print("Telegram notification sent.")
    return True


def approval_keyboard(repo, review_pr_value):
    match = re.search(r"#?(\d+)", review_pr_value or "")
    if not match:
        return None
    pr_number = int(match.group(1))
    pr = gh_json([
        "pr", "view", str(pr_number), "--repo", repo,
        "--json", "number,url,state,baseRefName,headRefName,headRefOid,body",
    ])
    if not pr:
        return None
    if pr.get("state") != "OPEN" or pr.get("baseRefName") != "main":
        return None
    if not str(pr.get("headRefName", "")).startswith("seo/approval-"):
        return None
    if "<!-- telegram-approval-required -->" not in (pr.get("body") or ""):
        return None
    head = (pr.get("headRefOid") or "")[:12]
    if len(head) != 12:
        return None

    return {
        "inline_keyboard": [
            [{"text": "👀 Переглянути", "url": pr.get("url")}],
            [
                {"text": "✅ Підтвердити", "callback_data": f"seo:approve:{pr_number}:{head}"},
                {"text": "❌ Відхилити", "callback_data": f"seo:reject:{pr_number}:{head}"},
            ],
        ]
    }


def concise_payload(issue, today, repo):
    summary = extract_notification_summary(issue.get("body", ""))
    fields = parse_fields(summary)

    status = fields.get("status") or fields.get("mode") or "UNKNOWN"
    result = fields.get("result") or fields.get("headline") or "Щотижнева SEO-перевірка завершена."
    attention = fields.get("needs attention") or fields.get("needs review") or "None"
    review_pr = fields.get("review pr") or "None"
    published = fields.get("published") or fields.get("action/pr") or "None"

    labels = {
        "AUTO PUBLISHED": "✅ ОПУБЛІКОВАНО",
        "NO CHANGE": "☑️ БЕЗ ЗМІН",
        "NO ACTION": "☑️ БЕЗ ЗМІН",
        "MONITORING": "👀 СПОСТЕРЕЖЕННЯ",
        "MONITOR": "👀 СПОСТЕРЕЖЕННЯ",
        "NEEDS APPROVAL": "❗ ПОТРІБНЕ РІШЕННЯ",
        "AUTO-PUBLISH FAILED": "⚠️ ПОТРІБНА УВАГА",
        "SAFE FIX": "✅ SAFE FIX",
    }

    lines = [f"📊 ISOPROTECH SEO — {today}", labels.get(status.upper(), status), result]

    if attention and attention.lower() not in {"none", "none new", "ні", "нічого"}:
        lines.append(f"👉 Від тебе: {attention}")

    if published and published.lower() not in {"none", "none created", "ні", "нічого"}:
        lines.append(f"🚀 {published}")

    keyboard = None
    if status.upper() == "NEEDS APPROVAL" and review_pr.lower() not in {"none", "ні", "нічого"}:
        keyboard = approval_keyboard(repo, review_pr)
        if keyboard:
            lines.append("Обери дію нижче.")
        else:
            lines.append(f"PR для перегляду: {review_pr}")

    lines.append(f"Звіт: {issue.get('url')}")
    return "\n".join(lines), keyboard


def main():
    token = os.getenv("TELEGRAM_BOT_TOKEN", "").strip()
    chat_id = os.getenv("TELEGRAM_CHAT_ID", "").strip()
    repo = os.getenv("GITHUB_REPOSITORY", "").strip()
    run_id = os.getenv("GITHUB_RUN_ID", "").strip()
    claude_outcome = os.getenv("CLAUDE_OUTCOME", "unknown").strip()
    evidence_ready = os.getenv("EVIDENCE_READY", "").strip().lower()
    evidence_reason = os.getenv("EVIDENCE_REASON", "").strip()
    evidence_warning = os.getenv("EVIDENCE_WARNING", "").strip()

    if not token or not chat_id:
        print("Telegram secrets are not configured; skipping notification.")
        return 0
    if not repo:
        print("GITHUB_REPOSITORY is missing; skipping notification.")
        return 0

    today = datetime.now(ZoneInfo("Europe/Brussels")).date().isoformat()
    run_url = f"https://github.com/{repo}/actions/runs/{run_id}" if run_id else f"https://github.com/{repo}/actions"

    if evidence_ready == "false":
        reason = evidence_reason or "Google Search Console data was unavailable."
        send_telegram(
            token,
            chat_id,
            f"⚠️ ISOPROTECH SEO — {today}\nGoogle-дані недоступні. Claude НЕ запускався, витрата API: $0.\nПричина: {reason}\nНа сайті нічого не змінено.\nПеревірити: {run_url}",
        )
        return 0

    if claude_outcome != "success":
        detail = "Claude не завершив аналіз, тому звіт/PR не створено і на сайті нічого не змінено."
        send_telegram(
            token,
            chat_id,
            f"⚠️ ISOPROTECH SEO — {today}\n{detail}\nСтатус Claude: {claude_outcome.upper()}.\nПеревірити: {run_url}",
        )
        return 0

    issue = latest_weekly_issue(repo, today)
    if not issue:
        send_telegram(
            token,
            chat_id,
            f"⚠️ ISOPROTECH SEO — {today}\nClaude завершився, але weekly-звіт не знайдено. На сайті автоматично нічого не вважаємо опублікованим.\nПеревірити: {run_url}",
        )
        return 0

    message, keyboard = concise_payload(issue, today, repo)
    if evidence_warning:
        message += f"\nℹ️ {evidence_warning}"
    send_telegram(token, chat_id, message, keyboard)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
