"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

/** Normalises "/about" and "/about/" to the same key. */
function isCurrent(pathname: string, href: string) {
  const a = pathname.endsWith("/") ? pathname : pathname + "/";
  return a === href;
}

export default function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname() || "/";

  return (
    <header className="header" id="header">
      <div className="shell header__inner">
        <Link
          className="brand"
          href="/"
          aria-label={`${site.name} — home`}
        >
          <img className="brand__mark" src="/assets/img/logo.png" alt="" />
          <span className="brand__text">
            <b>{site.shortName}</b>
            <span>Women &amp; Children&apos;s Welfare</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__cta">
          <Link className="btn" href="/donate/">
            Donate Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <button
          className="burger"
          id="burger"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="drawer"
          onClick={onOpenMenu}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
