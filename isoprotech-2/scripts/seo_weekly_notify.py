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


def send_telegram(token, chat_id, message):
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    try:
        response = requests.post(
            url,
            json={"chat_id": chat_id, "text": message[:4000], "disable_web_page_preview": True},
            timeout=20,
        )
    except requests.RequestException:
        print("Telegram notification failed due to a network error.")
        return False
    if not response.ok:
        print(f"Telegram notification failed with HTTP {response.status_code}.")
        return False
    print("Telegram notification sent.")
    return True


def concise_message(issue, today):
    summary = extract_notification_summary(issue.get("body", ""))
    fields = parse_fields(summary)

    status = fields.get("status") or fields.get("mode") or "UNKNOWN"
    result = fields.get("result") or fields.get("headline") or "Щотижнева SEO-перевірка завершена."
    attention = fields.get("needs attention") or fields.get("needs review") or "None"
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

    lines.append(f"Звіт: {issue.get('url')}")
    return "\n".join(lines)


def main():
    token = os.getenv("TELEGRAM_BOT_TOKEN", "").strip()
    chat_id = os.getenv("TELEGRAM_CHAT_ID", "").strip()
    repo = os.getenv("GITHUB_REPOSITORY", "").strip()
    run_id = os.getenv("GITHUB_RUN_ID", "").strip()
    claude_outcome = os.getenv("CLAUDE_OUTCOME", "unknown").strip()

    if not token or not chat_id:
        print("Telegram secrets are not configured; skipping notification.")
        return 0
    if not repo:
        print("GITHUB_REPOSITORY is missing; skipping notification.")
        return 0

    today = datetime.now(ZoneInfo("Europe/Brussels")).date().isoformat()
    run_url = f"https://github.com/{repo}/actions/runs/{run_id}" if run_id else f"https://github.com/{repo}/actions"

    if claude_outcome != "success":
        send_telegram(
            token,
            chat_id,
            f"⚠️ ISOPROTECH SEO — {today}\nПотрібна увага: автоматичний SEO-запуск завершився зі статусом {claude_outcome.upper()}.\nПеревірити: {run_url}",
        )
        return 0

    issue = latest_weekly_issue(repo, today)
    if not issue:
        send_telegram(
            token,
            chat_id,
            f"⚠️ ISOPROTECH SEO — {today}\nПотрібна увага: запуск завершився, але звіт не знайдено.\nПеревірити: {run_url}",
        )
        return 0

    send_telegram(token, chat_id, concise_message(issue, today))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
