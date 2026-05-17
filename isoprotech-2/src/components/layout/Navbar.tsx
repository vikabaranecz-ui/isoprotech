// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, IMAGES } from "@/lib/constants";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Diensten",
    href: "/diensten",
    children: [
      { label: "Dakisolatie", href: "/diensten/dakisolatie" },
      { label: "Dakrenovatie", href: "/diensten/dakrenovatie" },
      { label: "Dakkapellen", href: "/diensten/dakkapellen" },
      { label: "Gevelisolatie", href: "/diensten/gevelisolatie" },
      { label: "Crepi", href: "/diensten/crepi" },
      { label: "Spuitkurk", href: "/diensten/spuitkurk" },
      { label: "Asbestverwijdering", href: "/diensten/asbestverwijdering" },
    ],
  },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Calculator",
    href: "/calculator",
    children: [
      { label: "Gevelcalculator", href: "/calculator" },
      { label: "Dakcalculator", href: "/calculator/dak" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [pathname]);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null); };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpenDropdown(null); setMobileOpen(false); } };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  // At top of page: transparent + white text (hero is always dark)
  // After scroll: white background + teal text (content sections are always light)
  const navBg = scrolled
    ? "bg-white/98 backdrop-blur-lg shadow-md border-b border-gray-100"
    : "bg-transparent";

  const linkCls = (active: boolean) =>
    active
      ? scrolled ? "text-orange-500" : "text-orange-400"
      : scrolled
        ? "text-teal-800 hover:text-orange-500"
        : "text-white/90 hover:text-orange-300";

  const ddBg = scrolled
    ? "bg-white border border-gray-200 shadow-xl"
    : "bg-teal-900/95 backdrop-blur-md border border-white/10 shadow-2xl";

  const ddLink = scrolled
    ? "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
    : "text-white/80 hover:text-orange-400 hover:bg-white/5";

  const burger = scrolled ? "text-teal-800" : "text-white";

  return (
    <nav ref={navRef} className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`} role="navigation" aria-label="Hoofdnavigatie">
      <div className="container-wide flex items-center justify-between h-16 md:h-[4.5rem]">
        <Link href="/" aria-label="ISOPROTECH — Naar homepagina">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled ? IMAGES.logoDark : IMAGES.logo}
            alt="ISOPROTECH"
            width={160}
            height={24}
            className="h-6 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <div key={link.href} className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.href)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}>
              <Link href={link.href}
                className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${linkCls(isActive(link.href))}`}
                aria-current={isActive(link.href) ? "page" : undefined}
                aria-expanded={link.children ? openDropdown === link.href : undefined}
                aria-haspopup={link.children ? "true" : undefined}>
                {link.label}
              </Link>
              {link.children && openDropdown === link.href && (
                <div className={`absolute top-full left-0 min-w-[240px] rounded-2xl py-2 animate-fadeIn ${ddBg}`} role="menu">
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href}
                      className={`block px-5 py-2.5 text-sm transition-colors ${ddLink}`}
                      role="menuitem" onClick={() => setOpenDropdown(null)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className={`ml-4 text-sm py-2 px-5 rounded-xl font-bold transition-all duration-200 ${scrolled ? "bg-orange-400 text-white hover:bg-orange-500 shadow-sm" : "bg-orange-400 text-white hover:bg-orange-500 shadow-lg shadow-orange-500/20"}`}>Gratis Offerte</Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen} aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}>
          <svg className={`h-6 w-6 transition-colors ${burger}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className={`lg:hidden border-t px-6 pb-6 max-h-[80vh] overflow-y-auto ${scrolled ? "bg-white border-gray-100" : "bg-teal-900/98 backdrop-blur-md border-white/5"}`} role="menu">
          {links.map((link) => (
            <div key={link.href}>
              {link.children ? (
                <>
                  <button className="w-full flex items-center justify-between py-3 text-white font-semibold border-b border-white/5"
                    onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                    aria-expanded={openDropdown === link.href}>
                    <span className={scrolled ? "text-teal-800" : "text-white"}>{link.label}</span>
                    <svg className={`h-4 w-4 text-orange-400 transition-transform ${openDropdown === link.href ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                  </button>
                  {openDropdown === link.href && link.children.map((child) => (
                    <Link key={child.href} href={child.href} className={`block py-2.5 pl-4 text-sm hover:text-orange-400 ${scrolled ? "text-gray-500" : "text-white/60"}`} role="menuitem">{child.label}</Link>
                  ))}
                </>
              ) : (
                <Link href={link.href} className={`block py-3 font-semibold border-b ${scrolled ? "text-teal-800 border-gray-100" : "text-white border-white/5"}`} role="menuitem">{link.label}</Link>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-primary w-full mt-4 text-center">Gratis Offerte</Link>
        </div>
      )}
    </nav>
  );
}
