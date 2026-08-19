"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Mounts the site's scroll/reveal/widget behaviour and re-wires it on every
 * client-side navigation — page-level DOM (accordions, the lightbox, the
 * contact form) is replaced on route change, so its listeners must be too.
 *
 * Also owns two things that decide how fast the site *feels*:
 *   1. Internal links navigate client-side instead of reloading the document.
 *   2. The preloader lifts as soon as the page is interactive.
 */
export default function SiteEffects() {
  const pathname = usePathname();
  const router = useRouter();

  // --- 1. Lift the preloader immediately -----------------------------------
  // The interactions module also does this, but only on window "load", which
  // waits for every image in the viewport. Nothing below the preloader depends
  // on images, so gate it on hydration instead.
  useEffect(() => {
    document.documentElement.classList.add("is-loaded");
  }, []);

  // --- 2. Client-side navigation for content links -------------------------
  // The page bodies were ported from static HTML, so their internal links are
  // plain <a href="/about/"> — each one would reload the whole document and
  // re-run the preloader. One delegated listener upgrades all of them (and any
  // added later) to router navigation, and prefetches on hover.
  useEffect(() => {
    const isInternal = (a: HTMLAnchorElement) => {
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return null; // #hash, mailto:, tel:, external
      if (a.target && a.target !== "_self") return null;
      if (a.hasAttribute("download")) return null;
      return href;
    };

    const onClick = (e: MouseEvent) => {
      // Leave modified clicks alone: they mean "open in a new tab/window".
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = isInternal(anchor);
      if (!href) return;

      e.preventDefault();
      router.push(href);
    };

    const prefetched = new Set<string>();
    const onHover = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = isInternal(anchor);
      if (!href || prefetched.has(href)) return;

      prefetched.add(href);
      router.prefetch(href);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("mouseover", onHover, { passive: true });
    document.addEventListener("touchstart", onHover, { passive: true });

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("touchstart", onHover);
    };
  }, [router]);

  // --- 3. Page behaviour, re-wired per route -------------------------------
  useEffect(() => {
    let dispose: (() => void) | null = null;
    let cancelled = false;

    import("@/lib/interactions").then(({ initInteractions }) => {
      if (cancelled) return;
      dispose = initInteractions();
    });

    return () => {
      cancelled = true;
      if (dispose) dispose();
    };
  }, [pathname]);

  return null;
}
