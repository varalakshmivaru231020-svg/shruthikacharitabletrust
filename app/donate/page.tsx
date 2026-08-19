import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate | Shruthika Women's & Children's Welfare Trust",
  description: "Make a donation to the Shruthika Women's and Children's Welfare Trust, Bengaluru — by bank transfer to State Bank of India, Kacharakanahalli Branch, or by scanning the trust's donation QR code.",
  openGraph: {
    title: "Donate | Shruthika Women's & Children's Welfare Trust",
    description: "Support food, shelter, clothing, education and moral support for the children in the trust's care. Give by bank transfer or by scanning the trust's QR code.",
    images: ["/assets/img/banner-donate.jpg"],
  },
};

export default function DonatePage() {
  return (
    <>


      {/* ============ Page hero ============ */}
      <section className="page-hero page-hero--donate">
      <div className="page-hero__media" data-parallax="0.12"></div>
      <div className="hero__grain"></div>
      <div className="blob blob--1"></div>
      <div className="blob blob--2"></div>

      <div className="shell page-hero__inner">
      <span className="hero__chip">
      <i aria-hidden="true">❤</i> Serving Humanity is Considered to be Serving God
      </span>

      <h1 data-split="">Donate</h1>

      <p className="page-hero__lead">
      Make a Donation — and help keep food, shelter, clothing, education and moral support
      reaching the children in the trust's care.
      </p>

      <div className="btn-row">
      <a className="btn" href="#bank">
      Bank Details
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a className="btn btn--light" href="#other-ways">Other Ways to Help</a>
      </div>

      <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol role="list">
      <li><a href="/">Home</a></li>
      <li aria-current="page">Donate</li>
      </ol>
      </nav>
      </div>
      </section>

      {/* ============ Bank details, stated boldly ============
      The trust leads its own donate page with the account details across a
      photograph, so a donor never has to hunt for them. Same here. */}
      <section className="donate-band" id="bank" aria-labelledby="bank-heading">
      <div className="donate-band__media" data-parallax="0.1"></div>
      <div className="shell">
      <span className="donate-band__label" data-reveal="">For Donation Purpose</span>

      <h2 className="donate-band__account" id="bank-heading" data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>
      Bank A/c No. <strong>39783628220</strong><br />
      State Bank of India<br />
      Kacharakanahalli Branch<br />
      Bangalore, Karnataka, INDIA.
      </h2>

      <div className="btn-row" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      <a className="btn" href="#qr">
      Make a Donation
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.4l8.8-8.7a5 5 0 0 0 0-7.1Z" /></svg>
      </a>
      {/* Ships hidden; the interactions module reveals it, so with JS off nobody is
      offered a control that cannot work. */}
      <button className="btn btn--light copy-btn" type="button" hidden data-copy="39783628220" aria-label="Copy account number">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2.5" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
      <span className="copy-btn__label">Copy A/c No.</span>
      </button>
      </div>

      {/* TODO: the trust's own banner shows IFSC SBIN0007988. Confirm it with the
      bank, then state it here — an NEFT/IMPS/RTGS transfer cannot complete without it. */}
      <p className="donate-band__note" data-reveal="" style={{ "--d": "220" } as React.CSSProperties}>
      Account name: Shruthika Women&apos;s and Children&apos;s Welfare Trust. Please{" "}
      <a href="/contact/">contact us</a> to confirm the IFSC before transferring, and to let us
      know a gift is on its way.
      </p>
      </div>
      </section>

      {/* ============ Why give + how to give ============ */}
      <section className="section" id="give">
      <div className="shell">
      <div className="split-sticky split-sticky--wide-left">

      {/* Left column: why give */}
      <div className="split-sticky__main">
      <span className="eyebrow" data-reveal="">Why Give</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Where Your Giving Goes, and How to Give</h2>

      <div className="stack" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      <p className="lead">
      The trust shelters and supports approximately 25 children — providing food and shelter,
      clothing, education and protection, and the moral support that helps them secure
      employment and establish stable futures.
      </p>
      <p>
      That work is carried by ordinary, everyday kindness. Lion Dr. S. Sathish established
      Shruthika Enterprises to help fund the trust, and gifts from well-wishers support the
      same everyday needs — food and shelter, clothing, education, protection and moral
      support.
      </p>
      <p>
      Give once, or give whenever you are able. If you would rather give ration, clothing or
      books instead of money, that helps just as much — write to us and we will tell you
      what is needed.
      </p>
      </div>

      <div className="fact-row fact-row--2" style={{ marginTop: "2.6rem" } as React.CSSProperties}>
      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 10.5 12 4l8.5 6.5" /><path d="M6 9.8V20h12V9.8" /><path d="M9.2 14.2h5.6a2.8 2.8 0 0 1-5.6 0Z" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">Food &amp; Shelter</b>
      <span className="fact__text">Daily meals and a safe place to sleep.</span>
      </span>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 3 5 4.8 3.4 8.4 6 9.7V21h12V9.7l2.6-1.3L19 4.8 15.5 3a3.5 3.5 0 0 1-7 0Z" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">Clothing</b>
      <span className="fact__text">Everyday clothes and school uniforms.</span>
      </span>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5.5h5.5A3.5 3.5 0 0 1 12 9v11a3 3 0 0 0-3-3H3Z" /><path d="M21 5.5h-5.5A3.5 3.5 0 0 0 12 9v11a3 3 0 0 1 3-3h6Z" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">Education</b>
      <span className="fact__text">School supplies, books and the encouragement to keep going.</span>
      </span>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.8 4.6 6v6c0 4.6 3.1 8 7.4 9.2 4.3-1.2 7.4-4.6 7.4-9.2V6Z" /><path d="M15.2 9.6a2 2 0 0 0-3.2.5 2 2 0 0 0-3.2-.5 2.1 2.1 0 0 0 0 3l3.2 3.3 3.2-3.3a2.1 2.1 0 0 0 0-3Z" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">Protection &amp; Moral Support</b>
      <span className="fact__text">A steady adult presence, and help towards respectful work.</span>
      </span>
      </div>
      </div>

      <p className="quote" data-reveal="" style={{ marginTop: "2.4rem" } as React.CSSProperties}>
      To provide food, shelter, education, and moral support to children, helping them find the
      path to a settled and respectful future.
      </p>
      </div>

      {/* The bank details used to sit here in a sidebar card. They now lead the page in
      the band above — one authoritative statement of the account instead of two. The
      photograph moved up from the left column to fill the sticky slot. */}
      <div className="split-sticky__aside">
      <div className="media-cluster" data-reveal="right">
      <div className="frame frame--wide">
      <img src="/assets/img/donate-support.jpg" alt="Children supported by the Shruthika Women's and Children's Welfare Trust" loading="lazy" />
      </div>
      <span className="frame-outline" aria-hidden="true"></span>
      </div>
      </div>

      </div>
      </div>
      </section>

      {/* ============ QR codes ============ */}
      {/* ============ Scan the QR Code to Donate ============
      Both codes are shown large enough to scan straight off the screen.
      qr-1 self-identifies as "Shruthika Welfare trust · State Bank of India 8220",
      which matches account 39783628220 — the code and the published account agree.
      Still worth one small test payment before launch. */}
      <section className="section section--cream" id="qr">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Scan &amp; Give</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Scan the QR Code to Donate</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Scan with your banking or payments app. This website never handles the money —
      your app does, and the gift reaches the trust directly.
      </p>
      </div>

      <div className="qr-showcase">
      <figure data-reveal="" style={{ "--d": "0" } as React.CSSProperties}>
      <img src="/assets/img/qr-2.png" alt="The trust's donation poster: contact numbers, email and bank details, with a payment QR code" loading="lazy" />
      <figcaption>
      <b>The trust&apos;s donation card</b>
      Admissions and donations — with the trust&apos;s numbers and bank details
      </figcaption>
      </figure>

      <figure data-reveal="" style={{ "--d": "90" } as React.CSSProperties}>
      <img src="/assets/img/qr-1.png" alt="UPI QR code for Shruthika Welfare trust, State Bank of India account ending 8220" loading="lazy" />
      <figcaption>
      <b>Scan to pay with any UPI app</b>
      Shruthika Welfare trust · State Bank of India 8220
      </figcaption>
      </figure>
      </div>

      <p className="muted-note center" style={{ marginTop: "1.6rem" } as React.CSSProperties}>
      Trouble scanning? The bank details above work just as well, or call{" "}
      <a href="tel:+917899915832">+91 78999 15832</a>.
      </p>
      </div>
      </section>

      {/* ============ Other ways to help ============ */}
      <section className="section" id="other-ways">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Get Involved</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Other Ways to Help</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Money is only one kind of generosity. If any of these sound like you, write to us or call —
      we would be glad to talk it through.
      </p>
      </div>

      <div className="cause-grid">
      <article className="cause-card" data-reveal="">
      <div className="cause-card__body">
      <span className="cause-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17.6 3.4a3.4 3.4 0 0 0-4.85.1L12 4.3l-.75-.8a3.4 3.4 0 1 0-4.85 4.75L12 13.9l5.6-5.65a3.4 3.4 0 0 0 0-4.85Z" /><path d="M3 16.4c1.7-.8 3.2-.5 4.6.5l1.5 1h2.6a1.35 1.35 0 0 1 0 2.7H9.2" /><path d="m10.4 18.6 6.1-1.8a1.5 1.5 0 0 1 1 2.8l-5.8 2.1a3.2 3.2 0 0 1-2.1 0L3 19.6" /></svg>
      </span>
      <h3>Volunteer Your Time</h3>
      <p>
      Spend a day with the children, lend a hand at a camp, or offer a professional skill —
      teaching, medical, legal or administrative. Regular or one-off, both are useful.
      </p>
      <a className="link-arrow" href="/contact/">Get in touch
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__body">
      <span className="cause-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4 2.8 8.4 12 12.8l9.2-4.4L12 4Z" /><path d="M6.5 10.6V16c0 1.7 2.5 3.2 5.5 3.2s5.5-1.5 5.5-3.2v-5.4" /><path d="M21.2 8.4v5.2" /></svg>
      </span>
      <h3>Sponsor a Child's Education</h3>
      <p>
      Stand behind one child's schooling for a term or a year. Tell us what you would like to
      support and we will explain exactly where it is needed.
      </p>
      <a className="link-arrow" href="/contact/">Get in touch
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__body">
      <span className="cause-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M3 12h18M12 8v12" /><path d="M12 8s-1.2-4-3.6-4a2 2 0 0 0 0 4Z" /><path d="M12 8s1.2-4 3.6-4a2 2 0 0 1 0 4Z" /></svg>
      </span>
      <h3>Donate in Kind</h3>
      <p>
      Ration, clothing, books, stationery and other essentials are always welcome. Do write
      or call first, so what you send is what we actually need that month.
      </p>
      <a className="link-arrow" href="/contact/">Get in touch
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__body">
      <span className="cause-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V6.5L12 3l7 3.5V21" /><path d="M9.5 21v-4.5h5V21" /><path d="M9 9h1.5M13.5 9H15M9 12.5h1.5M13.5 12.5H15" /></svg>
      </span>
      <h3>Corporate Partnership</h3>
      <p>
      Bring your company alongside a camp, a placement drive or a community event. We are
      happy to shape something that suits your team and our children.
      </p>
      <a className="link-arrow" href="/contact/">Get in touch
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__body">
      <span className="cause-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.4l8.8-8.7a5 5 0 0 0 0-7.1Z" /><path d="M3.6 12.5h3.9l1.6-2.6 2 4.6 1.7-3.2 1.2 1.2h4.4" /></svg>
      </span>
      <h3>Support a Health or Eye Camp</h3>
      <p>
      The trust holds free health camps, eye camps and blood donation drives. Help us run
      them, or come along with your medical team.
      </p>
      <a className="link-arrow" href="/contact/">Get in touch
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__body">
      <span className="cause-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9.5" cy="15" r="4.6" /><circle cx="14.5" cy="15" r="4.6" /><path d="M7.9 10.7 6.4 7.2h6.2l-1.5 3.5" /></svg>
      </span>
      <h3>Community Mass Marriages</h3>
      <p>
      The trust arranges free community mass marriages for underprivileged families with the
      help of Lions Club, Bengaluru. You can sponsor one, or help us organise it.
      </p>
      <a className="link-arrow" href="/contact/">Get in touch
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>
      </div>
      </div>
      </section>

      {/* ============ Honest note ============ */}
      <section className="section section--cream-2 section--tight" id="good-to-know">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Good to Know</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Two Honest Notes Before You Give</h2>
      </div>

      <div className="form-grid">
      <div className="note-card" data-reveal="">
      <b>Donations are received directly by the trust.</b>
      This website does not process payments and holds no money of its own. Your bank transfer
      goes straight into the trust's own account at State Bank of India, Kacharakanahalli
      Branch — there is nobody in between.
      </div>

      <div className="note-card" data-reveal="">
      <b>Please contact us about a receipt.</b>
      Anything in writing comes from the trust, not from this website. After giving, send us the
      date, the amount and your bank or payment reference by
      <a href="mailto:shruthikacharitabletrust2@gmail.com">email</a> or
      <a href="tel:+917899915832">phone</a>, and we will follow up about a receipt.
      </div>
      </div>
      </div>
      </section>

      {/* ============ Contact strip ============ */}
      <section className="section" id="talk">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Talk to Us</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Questions About Giving?</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Call or write with any question about giving.
      </p>
      </div>

      <div className="info-grid">
      <a className="info-card" href="mailto:shruthikacharitabletrust2@gmail.com" data-reveal="">
      <span className="info-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3 7 9 6 9-6" /></svg>
      </span>
      <span className="info-card__label">Email</span>
      <span className="info-card__value">shruthikacharitabletrust2@gmail.com</span>
      </a>

      <div className="info-card info-card--static" data-reveal="">
      <span className="info-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" /></svg>
      </span>
      <span className="info-card__label">Phone</span>
      <a className="info-card__value" href="tel:+917899915832">+91 78999 15832</a>
      <a className="info-card__value" href="tel:+919663714362">+91 96637 14362</a>
      </div>

      {/* Deliberately NOT the office address: the footer on this page already carries it in
      full. A jump back to the bank details is more use here. */}
      <a className="info-card" href="#bank" data-reveal="">
      <span className="info-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V9.5L12 5l7 4.5V21" /><path d="M9.5 21v-5h5v5" /></svg>
      </span>
      <span className="info-card__label">Bank Details</span>
      <span className="info-card__value">State Bank of India, Kacharakanahalli Branch</span>
      </a>
      </div>

      <div className="btn-row" data-reveal="" style={{ justifyContent: "center", marginTop: "2.6rem" } as React.CSSProperties}>
      <a className="btn btn--outline" href="/contact/">
      Contact Us
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a className="link-arrow" href="/causes/">See what we do</a>
      </div>
      </div>
      </section>


    </>
  );
}
