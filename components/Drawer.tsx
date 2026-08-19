"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav, site } from "@/lib/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Drawer({ open, onClose }: Props) {
  const pathname = usePathname() || "/";
  const drawerRef = useRef<HTMLElement>(null);

  // Esc closes; body scroll locks while the drawer is over the page.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("nav-open");

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      document.documentElement.classList.remove("nav-open");
    };
  }, [open, onClose]);

  return (
    <>
      <div className="scrim" id="scrim" hidden={!open} onClick={onClose} />

      <aside
        className="drawer"
        id="drawer"
        aria-label="Mobile navigation"
        ref={drawerRef}
        // Off-canvas and unreachable until opened.
        {...(open ? {} : { inert: "" as unknown as boolean })}
      >
        <nav className="drawer__nav">
          {nav.map((item, i) => {
            const current = (pathname.endsWith("/") ? pathname : pathname + "/") === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ "--i": String(i) } as React.CSSProperties}
                aria-current={current ? "page" : undefined}
                onClick={onClose}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="drawer__meta">
          <p>Reach out to us</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href}>
              {phone.display}
            </a>
          ))}
        </div>

        <Link className="btn" href="/donate/" style={{ alignSelf: "flex-start" }} onClick={onClose}>
          Donate Now
        </Link>
      </aside>
    </>
  );
}
