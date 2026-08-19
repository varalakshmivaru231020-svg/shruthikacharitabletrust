import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Shruthika Women's & Children's Welfare Trust",
  description: "Photographs from the work of the Shruthika Women's and Children's Welfare Trust, Bengaluru — moments with the children, families and communities the trust serves.",
  openGraph: {
    title: "Gallery | Shruthika Women's & Children's Welfare Trust",
    description: "Moments from the trust's work in Bengaluru — food, shelter, education and moral support for orphaned and underprivileged children.",
    images: ["/assets/img/banner-gallery.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>


      {/* ============ Page hero ============ */}
      <section className="page-hero page-hero--gallery">
      <div className="page-hero__media" data-parallax="0.12"></div>
      <div className="hero__grain"></div>
      <div className="blob blob--1"></div>
      <div className="blob blob--2"></div>

      <div className="shell page-hero__inner">
      <span className="hero__chip"><i aria-hidden="true">❤</i> Moments from our work in Bengaluru</span>

      <h1 data-split="">Our <span className="word-mark">Gallery</span></h1>
      <p className="page-hero__lead">The days behind the work — as they happened</p>

      <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol role="list">
      <li><a href="/">Home</a></li>
      <li aria-current="page">Gallery</li>
      </ol>
      </nav>
      </div>
      </section>

      {/* ============ Photographs ============ */}
      <section className="section" id="photographs">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Photographs</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Life at the Trust</h2>
      <p data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      A handful of the moments we managed to photograph along the way. Select any picture to
      view it larger — use the arrow keys to move through the set and Esc to close.
      </p>
      </div>

      {/*
      ============================================================
      HOW TO ADD OR REMOVE A PHOTOGRAPH
      ============================================================
      Photos live in assets/img/ and are named gallery-01.jpg …
      gallery-22.jpg (zero-padded, two digits). There are 22 tiles
      below and the order of the tiles is the order of the
      lightbox.

      TO ADD ONE
      1. Drop the file in assets/img/ using the next number in
      the sequence, e.g. assets/img/gallery-23.jpg
      2. Copy the last <button class="gallery-tile"> block below
      and paste it at the position you want it to appear.
      3. In the copy, update all THREE places the number appears:
      data-full="assets/img/gallery-23.jpg"
      data-caption="Trust activity photograph 23"
      aria-label="Open photograph 23 of 23"
      …and the <img src> plus its alt text.
      4. Renumber the "of 22" in every other tile's aria-label
      and the "1 / 22" in the lightbox counter at the bottom
      of this page (the counter text is only a fallback —
      the script rewrites it — but keep it honest).

      TO REMOVE ONE
      Delete its whole <button …>…</button> block and renumber
      the remaining aria-labels / captions so they stay in
      sequence. Nothing else needs to change.

      NOTES
      · Keep data-reveal="scale" on every tile. main.js fills in
      the per-tile stagger delay (--d) automatically; without
      the attribute a copied tile simply never animates in.
      · Tile shapes (tall / wide / square) come from CSS
      :nth-child rules — never set a size or aspect ratio here.
      · A missing image file degrades to the gradient placeholder
      automatically, so a broken tile means the file is simply
      not in assets/img/ yet.
      · The home page's preview strip shows the first six files of
      this same set (gallery-01 … gallery-06), so no photograph
      ever has to be supplied twice under two names.
      ============================================================
      */}

      <div className="gallery-grid" id="galleryGrid" data-lightbox="">
      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-01.jpg" data-caption="Trust activity photograph 1" aria-label="Open photograph 1 of 22">
      <img src="/assets/img/gallery-01.jpg" alt="Trust activity photograph 1" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-02.jpg" data-caption="Trust activity photograph 2" aria-label="Open photograph 2 of 22">
      <img src="/assets/img/gallery-02.jpg" alt="Trust activity photograph 2" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-03.jpg" data-caption="Trust activity photograph 3" aria-label="Open photograph 3 of 22">
      <img src="/assets/img/gallery-03.jpg" alt="Trust activity photograph 3" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-04.jpg" data-caption="Trust activity photograph 4" aria-label="Open photograph 4 of 22">
      <img src="/assets/img/gallery-04.jpg" alt="Trust activity photograph 4" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-05.jpg" data-caption="Trust activity photograph 5" aria-label="Open photograph 5 of 22">
      <img src="/assets/img/gallery-05.jpg" alt="Trust activity photograph 5" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-06.jpg" data-caption="Trust activity photograph 6" aria-label="Open photograph 6 of 22">
      <img src="/assets/img/gallery-06.jpg" alt="Trust activity photograph 6" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-07.jpg" data-caption="Trust activity photograph 7" aria-label="Open photograph 7 of 22">
      <img src="/assets/img/gallery-07.jpg" alt="Trust activity photograph 7" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-08.jpg" data-caption="Trust activity photograph 8" aria-label="Open photograph 8 of 22">
      <img src="/assets/img/gallery-08.jpg" alt="Trust activity photograph 8" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-09.jpg" data-caption="Trust activity photograph 9" aria-label="Open photograph 9 of 22">
      <img src="/assets/img/gallery-09.jpg" alt="Trust activity photograph 9" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-10.jpg" data-caption="Trust activity photograph 10" aria-label="Open photograph 10 of 22">
      <img src="/assets/img/gallery-10.jpg" alt="Trust activity photograph 10" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-11.jpg" data-caption="Trust activity photograph 11" aria-label="Open photograph 11 of 22">
      <img src="/assets/img/gallery-11.jpg" alt="Trust activity photograph 11" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-12.jpg" data-caption="Trust activity photograph 12" aria-label="Open photograph 12 of 22">
      <img src="/assets/img/gallery-12.jpg" alt="Trust activity photograph 12" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-13.jpg" data-caption="Trust activity photograph 13" aria-label="Open photograph 13 of 22">
      <img src="/assets/img/gallery-13.jpg" alt="Trust activity photograph 13" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-14.jpg" data-caption="Trust activity photograph 14" aria-label="Open photograph 14 of 22">
      <img src="/assets/img/gallery-14.jpg" alt="Trust activity photograph 14" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-15.jpg" data-caption="Trust activity photograph 15" aria-label="Open photograph 15 of 22">
      <img src="/assets/img/gallery-15.jpg" alt="Trust activity photograph 15" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-16.jpg" data-caption="Trust activity photograph 16" aria-label="Open photograph 16 of 22">
      <img src="/assets/img/gallery-16.jpg" alt="Trust activity photograph 16" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-17.jpg" data-caption="Trust activity photograph 17" aria-label="Open photograph 17 of 22">
      <img src="/assets/img/gallery-17.jpg" alt="Trust activity photograph 17" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-18.jpg" data-caption="Trust activity photograph 18" aria-label="Open photograph 18 of 22">
      <img src="/assets/img/gallery-18.jpg" alt="Trust activity photograph 18" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-19.jpg" data-caption="Trust activity photograph 19" aria-label="Open photograph 19 of 22">
      <img src="/assets/img/gallery-19.jpg" alt="Trust activity photograph 19" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-20.jpg" data-caption="Trust activity photograph 20" aria-label="Open photograph 20 of 22">
      <img src="/assets/img/gallery-20.jpg" alt="Trust activity photograph 20" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-21.jpg" data-caption="Trust activity photograph 21" aria-label="Open photograph 21 of 22">
      <img src="/assets/img/gallery-21.jpg" alt="Trust activity photograph 21" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>

      <button className="gallery-tile" type="button" data-reveal="scale" data-full="assets/img/gallery-22.jpg" data-caption="Trust activity photograph 22" aria-label="Open photograph 22 of 22">
      <img src="/assets/img/gallery-22.jpg" alt="Trust activity photograph 22" loading="lazy" />
      <span className="gallery-tile__overlay" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7.5 7.5M3 21l7.5-7.5" /></svg>
      </span>
      </button>
      </div>

      <p className="muted-note center" data-reveal="" style={{ marginTop: "1.6rem" } as React.CSSProperties}>
      Photographs from the trust's own events and activities in Bengaluru.
      </p>
      </div>
      </section>

      {/* ============ Follow along ============ */}
      <section className="section section--cream section--tight" id="follow">
      <div className="shell center">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Stay Close</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Find the trust on social media</h2>
      <p data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      Health camps, community celebrations, marriage services and the ordinary days in between —
      the trust is on Instagram, Facebook and YouTube. If you would like the links, or you have
      a photograph of your own to send us, get in touch.
      </p>
      </div>

      {/* These three are deliberately NOT links: the trust's Instagram / Facebook / YouTube
      profile URLs are not confirmed yet. TODO: when they are, turn each <span> back into
      <a class="pill" href="https://…" target="_blank" rel="noopener noreferrer">, drop the
      pill-list--static modifier, and update the three footer links too. */}
      <div className="pill-list pill-list--static" data-reveal="" style={{ "--d": "240", justifyContent: "center" } as React.CSSProperties}>
      <span className="pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg>
      Instagram
      </span>
      <span className="pill">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.7v8Z" /></svg>
      Facebook
      </span>
      <span className="pill">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.75-1.77C18.28 5 12 5 12 5s-6.28 0-7.85.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.75 1.77C5.72 19 12 19 12 19s6.28 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1Z" /></svg>
      YouTube
      </span>
      </div>

      <div className="btn-row" data-reveal="" style={{ "--d": "300", marginTop: "2rem" } as React.CSSProperties}>
      <a className="btn btn--outline" href="/causes/">See What We Do</a>
      <a className="link-arrow" href="/contact/">Send us a photograph or a question
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </div>
      </section>

      {/* ============ Donate CTA ============ */}
      <section className="section section--tight">
      <div className="shell">
      <div className="cta-band" data-reveal="scale">
      <span className="cta-band__ring cta-band__ring--a" aria-hidden="true"></span>
      <span className="cta-band__ring cta-band__ring--b" aria-hidden="true"></span>
      <span className="eyebrow eyebrow--center eyebrow--light">Get Involved</span>
      <h2>Every picture here started with someone who gave</h2>
      <p>
      Food, shelter, education and moral support for children who have no one else to turn to —
      that is what your contribution becomes. Donate, volunteer, or sponsor a child's education.
      </p>
      <div className="btn-row">
      <a className="btn" href="/donate/">
      Donate Now
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a className="btn btn--light" href="/contact/">Talk to Us</a>
      </div>
      </div>
      </div>
      </section>

      {/* ============ Lightbox (one per page) ============ */}
      <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" aria-hidden="true">
      <div className="lightbox__scrim" data-lb-close=""></div>

      <div className="lightbox__panel">
      <figure className="lightbox__figure">
      <img className="lightbox__img" src="" alt="" />
      <figcaption className="lightbox__caption"></figcaption>
      </figure>
      </div>

      <button className="lightbox__btn lightbox__btn--prev" type="button" data-lb-prev="" aria-label="Previous photograph">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button className="lightbox__btn lightbox__btn--next" type="button" data-lb-next="" aria-label="Next photograph">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
      </button>
      <button className="lightbox__btn lightbox__btn--close" type="button" data-lb-close="" aria-label="Close viewer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <p className="lightbox__counter" aria-live="polite">1 / 22</p>
      </div>


    </>
  );
}
