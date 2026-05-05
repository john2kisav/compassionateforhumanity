"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/lib/site-data";

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

// Exclude Donate from the main nav — it's the dedicated CTA button
const desktopNavItems = navigation.filter((item) => item.href !== "/donate");

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${menuOpen ? "is-open" : ""}`}>
      <div className="site-header__bar">
        <div className="site-header__identity">
          <Link className="brand-lockup" href="/">
            <span className="brand-lockup__mark">CS</span>
            <span className="brand-lockup__copy">
              <strong>{site.shortName}</strong>
              <small>{site.region}</small>
            </span>
          </Link>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="site-header__desktop">
          <nav className="site-nav" aria-label="Primary">
            {desktopNavItems.map((item) => (
              <Link
                className={isActivePath(pathname, item.href) ? "active" : ""}
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <span className="site-header__sep" aria-hidden="true" />
            <Link className="pill pill--solid pill--sm" href="/donate">
              Donate
            </Link>
          </div>
        </div>
      </div>

      <button
        aria-hidden={!menuOpen}
        className="mobile-backdrop"
        onClick={() => setMenuOpen(false)}
        tabIndex={menuOpen ? 0 : -1}
        type="button"
      />

      <div className="mobile-panel" id="mobile-navigation">
        <nav className="mobile-nav" aria-label="Mobile">
          {navigation.map((item) => (
            <Link
              className={isActivePath(pathname, item.href) ? "active" : ""}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-panel__actions">
          <Link className="pill pill--solid" href="/apply">
            Request Support
          </Link>
          <Link className="pill pill--soft" href="/donate">
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
