# Shruthika Women's and Children's Welfare Trust

Website for the Shruthika Women's and Children's Welfare Trust (R.), Bengaluru.
Next.js 15 (App Router) + React 19 + TypeScript, exported as static HTML.

*Serving Humanity is Considered to be Serving God.*

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into out/
npm run typecheck  # tsc --noEmit
```

`npm run build` writes plain HTML/CSS/JS to `out/`. There is no Node server to run —
upload `out/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or
ordinary shared hosting/cPanel).

To preview the built output exactly as it will be served:

```bash
npm run build && npm start
```

## Structure

```
app/
  layout.tsx          Shared chrome: fonts, preloader, header, drawer, footer, effects
  globals.css         The whole design system (numbered sections 1–37)
  page.tsx            Home
  about/  causes/  gallery/  donate/  contact/     one page.tsx each
components/
  SiteChrome.tsx      Owns the mobile-menu open state
  Header.tsx          Sticky header, marks the active route
  Drawer.tsx          Mobile drawer — Esc to close, scroll lock, inert when shut
  Footer.tsx          Built from lib/site.ts, so contact details live in one place
  SiteEffects.tsx     Mounts the interactions and re-wires them on route change
lib/
  site.ts             Every fact the trust publishes: contacts, bank, nav, objectives
  interactions.js     Scroll/reveal/lightbox/form behaviour (+ .d.ts)
public/assets/img/    All 48 photographs, the emblem and the donation QR codes
legacy-static/        The original hand-built HTML site this was ported from
```

Each route is one `page.tsx` exporting `metadata` (title, description, Open Graph) and
the page body. Content lives in the JSX; anything repeated across pages comes from
`lib/site.ts`.

## Design system

| Token           | Value     | Use                              |
| --------------- | --------- | -------------------------------- |
| `--saffron`     | `#d9691a` | Accent: buttons, marks, rules    |
| `--maroon`      | `#6d2311` | Headings, dark surfaces          |
| `--cream`       | `#f7f3ef` | Alternating section backgrounds  |
| `--cream-2`     | `#ede7e0` | The second alternating tint      |
| `--ink-2`       | `#4b423b` | Body copy                        |
| `--dark`        | `#1d130d` | Footer                           |

Type: **Outfit** for display, **Plus Jakarta Sans** for body — both self-hosted at build
time by `next/font`, so no request goes to Google at runtime. Sizes are fluid (`clamp()`),
scaling smoothly from 360px to 1920px.

Orange is an accent, not a surface: the page is built on near-white and maroon, and
sections alternate `white → --cream → --cream-2` so two identical tints never touch.

CSS section 37 is the alignment-and-rhythm pass applied after a per-page visual audit —
it fixes the hero gutter break, heading-to-body spacing, centred-eyebrow optical centring,
the footer column widths and the gallery grid. Read it before changing layout rules.

## Motion

All animation is CSS plus the vanilla module in `lib/interactions.js` — no GSAP, no AOS.
`SiteEffects` calls `initInteractions()`, which returns a disposer; every listener and
observer it creates is tracked and torn down on navigation, so nothing accumulates.

- Word-by-word hero headline reveal (`data-split`)
- Scroll reveals via IntersectionObserver (`data-reveal="left|right|scale|clip"`, `--d` stagger)
- Hero and banner parallax, sticky/auto-hiding header, scroll progress bar
- Marquee band, rotating "About Us" badge, hover lift, magnetic buttons
- Accordion — `aria-expanded`, and a collapsed panel leaves the accessibility tree
- Gallery lightbox — click, Esc, ← / →, focus trapped and restored, `aria-live` counter
- Giving tiers as a real radiogroup; copy-to-clipboard on the account number
- Contact form — client-side validation and a `mailto:` handoff that never claims a
  message was delivered
- Everything respects `prefers-reduced-motion`

## Photographs

All 48 images are in `public/assets/img/`, taken from the trust's own site and
recompressed. To swap one, drop a replacement over it using the same filename —
see `public/assets/img/README.md` for what each one is and its ideal size.

Keep written consent on file before publishing photographs of children.

## Content rules

The trust is a real charity, so the site states only what the trust itself has published.
When editing, do not add: invented statistics or beneficiary counts, testimonials, campaign
fundraising totals, or tax-exemption claims. The one verified figure is *"approximately 25
children"*. Unknowns are marked with `TODO` comments rather than filled with plausible copy.

## Before it goes live

1. **Domain.** Set `SITE_URL` in `app/layout.tsx` to the real domain so Open Graph images
   resolve absolutely.
2. **Social links.** `lib/site.ts` has `#` placeholders for Instagram, Facebook and YouTube;
   they render as `aria-disabled` until real URLs are added.
3. **IFSC code.** The donate page asks donors to contact the trust for it. The trust's own
   banner shows **SBIN0007988** — confirm with the bank, then set `bank.ifsc` in
   `lib/site.ts`. An Indian NEFT/IMPS/RTGS transfer cannot complete without it.
4. **QR codes.** `qr-1.png` self-identifies as *Shruthika Welfare trust · State Bank of India
   **8220** · UPI ID `enterprisesshruthika131@oksbi`* — the 8220 matches account 39783628220,
   so the QR and the published account agree. Make one small test payment before launch.
5. **12A / 80G.** The trust's poster states *"Exempted Trust: 10 AC (12A & 80G), Regd. No.
   AAZT55888DE20231, Reg. No. 556/2019-20 (Approved by GOI)"*. Nothing on the site claims tax
   exemption, because those numbers were read off a photograph. Supply the certificate and an
   80G line can be added — it materially increases Indian donations.
6. **Contact form delivery.** Front-end only. Connect Formspree, Netlify Forms or a backend —
   options are in the comment above the `<form>` in `app/contact/page.tsx`.
7. **Remaining `TODO`s:** school fees on the causes page, per-year figures for camps,
   marriages, blood drives and placements, and office visiting hours.

## Accessibility

Skip link that moves focus, visible focus rings, `aria-expanded`/`aria-controls` on the menu
and accordions, collapsed panels removed from the accessibility tree, keyboard-dismissable
drawer and lightbox, a focus trap in the lightbox, `aria-current="page"` on both desktop and
mobile navigation, labelled form controls with a live status region, one `<h1>` per page with
no skipped levels, and WCAG AA contrast on text.
