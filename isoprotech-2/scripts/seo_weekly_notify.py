#!/usr/bin/env python3
import json
import os
import re
import subprocess
from datetime import datetime
from zoneinfo import ZoneInfo

import requests


def gh_json(args):
    result = subprocess.run(
        ["gh", *args],
        check=False,
        capture_output=True,
        text=True,
    )
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
    text = re.sub(r"\n{3,}", "\n\n", text)
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


def latest_weekly_issue(repo, date_str):
    query = f'"SEO Weekly — {date_str}" in:title'
    issues = gh_json(
        [
            "issue",
            "list",
            "--repo",
            repo,
            "--search",
            query,
            "--limit",
            "10",
            "--json",
            "number,title,url,body,createdAt",
        ]
    )
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
            json={
                "chat_id": chat_id,
                "text": message[:4000],
                "disable_web_page_preview": True,
            },
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
        message = (
            f"⚠️ ISOPROTECH SEO Weekly — {today}\n"
            f"Claude run: {claude_outcome.upper()}\n\n"
            "The data collector may have completed, but the Claude SEO step did not finish successfully.\n"
            f"Check run: {run_url}"
        )
        send_telegram(token, chat_id, message)
        return 0

    issue = latest_weekly_issue(repo, today)
    if not issue:
        message = (
            f"⚠️ ISOPROTECH SEO Weekly — {today}\n"
            "Workflow completed, but I could not find today's SEO Weekly issue.\n"
            f"Check run: {run_url}"
        )
        send_telegram(token, chat_id, message)
        return 0

    summary = extract_notification_summary(issue.get("body", ""))
    if not summary:
        summary = "Weekly analysis completed. Open the full report for findings and review items."

    message = (
        f"📊 ISOPROTECH SEO Weekly — {today}\n\n"
        f"{summary}\n\n"
        f"Full report: {issue.get('url')}\n"
        f"Workflow run: {run_url}"
    )
    send_telegram(token, chat_id, message)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
