#!/usr/bin/env python3
"""Run the weekly SEO collector with unattended Google service-account auth."""

import importlib.util
import json
import os
from pathlib import Path

from google.auth.transport.requests import Request
from google.oauth2 import service_account

from seo_google_ads_dual_geo import collect_google_ads_dual_geo

SCOPES = [
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/adwords",
]


def load_collector():
    path = Path(__file__).with_name("seo_weekly_collect.py")
    spec = importlib.util.spec_from_file_location("seo_weekly_collect", path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Could not load collector from {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def service_account_access_token():
    raw = os.getenv("GOOGLE_ADC_JSON", "").strip()
    if not raw:
        return None, "GOOGLE_ADC_JSON missing"
    try:
        info = json.loads(raw)
    except json.JSONDecodeError as exc:
        return None, f"GOOGLE_ADC_JSON is not valid JSON: {exc}"

    if info.get("type") != "service_account":
        return None, "GOOGLE_ADC_JSON is not a service-account credential"

    required = ["client_email", "private_key", "token_uri"]
    missing = [field for field in required if not info.get(field)]
    if missing:
        return None, f"Service-account JSON missing fields: {', '.join(missing)}"

    try:
        creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
        creds.refresh(Request())
    except Exception as exc:
        return None, f"Service-account token refresh failed: {exc}"

    if not creds.token:
        return None, "Service-account token refresh returned no access token"
    return creds.token, None


def main():
    collector = load_collector()
    collector.get_google_access_token = service_account_access_token
    collector.collect_google_ads = lambda access_token, profile: collect_google_ads_dual_geo(
        access_token,
        profile,
        collector,
    )
    collector.main()


if __name__ == "__main__":
    main()
