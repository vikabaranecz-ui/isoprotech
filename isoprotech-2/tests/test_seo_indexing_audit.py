"""Regression tests for the weekly read-only GSC audit URL selection."""
import importlib.util
import os
import unittest
from datetime import date
from pathlib import Path

os.environ.setdefault("SEO_BASE_URL", "https://www.isoprotech.be")
os.environ.setdefault("GSC_SITE_URL", "sc-domain:isoprotech.be")

script=Path(__file__).resolve().parents[1]/"scripts"/"seo_indexing_audit.py"
spec=importlib.util.spec_from_file_location("seo_indexing_audit",script)
audit=importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)


class PriorityAuditTests(unittest.TestCase):
    def setUp(self):
        self.urls=[f"https://www.isoprotech.be/test/{i:03d}" for i in range(75)]

    def test_five_business_pages_always_inspected(self):
        result=audit.select_urls(self.urls,date(2026,11,16))
        self.assertEqual(result[:5],audit.priority_urls())
        self.assertEqual(len(result),audit.LIMIT)
        self.assertEqual(len(result),len(set(result)))

    def test_rotating_nonpriority_sample(self):
        monday=audit.select_urls(self.urls,date(2026,11,16))
        following=audit.select_urls(self.urls,date(2026,11,23))
        self.assertEqual(monday[:5],following[:5])
        self.assertNotEqual(monday[5:],following[5:])

    def test_priority_pages_inspected_even_if_discovery_missing(self):
        result=audit.select_urls([],date(2026,11,16))
        self.assertEqual(result,audit.priority_urls())


if __name__=="__main__":
    unittest.main()
