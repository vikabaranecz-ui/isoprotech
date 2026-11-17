"""Offline contract checks for Google Ads trend and Google-informed seed selection."""
import importlib.util
import os
import unittest
from datetime import date
from pathlib import Path

os.environ.setdefault("SEO_BASE_URL","https://www.isoprotech.be")
os.environ.setdefault("GSC_SITE_URL","sc-domain:isoprotech.be")
ROOT=Path(__file__).resolve().parents[1]/"scripts"

def load(name):
    path=ROOT/name
    spec=importlib.util.spec_from_file_location(name.replace(".","_"),path)
    module=importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class DemandTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.ads=load("seo_google_ads_dual_geo.py")
        cls.collector=load("seo_weekly_collect.py")

    def test_monthly_search_history_is_not_daily_demand(self):
        months=("JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE")
        series=[{"year":2026,"month":m,"monthlySearches":v}
                for m,v in zip(months,(10,20,30,40,50,60))]
        h=self.ads._search_trend({"monthlySearchVolumes":series})
        self.assertEqual(h["recent_3m_avg"],50)
        self.assertEqual(h["prior_3m_avg"],20)
        self.assertEqual(h["trend_3m_vs_prior_3m_pct"],150.0)
        self.assertEqual(h["trend_observation_end"],"2026-06")

    def test_no_false_trend_when_history_missing(self):
        h=self.ads._search_trend({"monthlySearchVolumes":[]})
        self.assertIsNone(h["trend_3m_vs_prior_3m_pct"])

    def test_weekly_seeds_contain_real_gsc_and_reject_unoffered(self):
        profile={
            "services":{"dakisolatie":{"offered":True,"methods":["sarking","dakisolatie"]},
                        "gevelisolatie":{"offered":True,"methods":["gevelisolatie","crepi"]}},
            "not_offered":["vloerisolatie"],
            "excluded_materials_as_service":[],
            "purchase_intent_exclusions":[]
        }
        gsc={"current_queries":[
            {"query":"sarking dakisolatie antwerpen","impressions":125,"position":8.0},
            {"query":"vloerisolatie antwerpen","impressions":900,"position":7.0},
        ]}
        seeds=self.collector.build_weekly_keyword_seeds(gsc,profile,as_of=date(2026,11,17))
        self.assertIn("sarking dakisolatie antwerpen",seeds)
        self.assertNotIn("vloerisolatie antwerpen",seeds)
        self.assertLessEqual(len(seeds),20)


if __name__=="__main__":
    unittest.main()
