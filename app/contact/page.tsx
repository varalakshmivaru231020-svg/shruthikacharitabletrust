import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Shruthika Women's & Children's Welfare Trust",
  description: "Get in touch with the Shruthika Women's and Children's Welfare Trust — email, phone, our OMBR Layout office in Banaswadi, Bengaluru, a map, and a message form for donations, volunteering and enquiries.",
  openGraph: {
    title: "Contact Us | Shruthika Women's & Children's Welfare Trust",
    description: "Write, call or visit us. Our office is at GNR East Tower, 7th Main Road, OMBR Layout, Banaswadi, Bangalore – 560 043, Karnataka.",
    images: ["/assets/img/banner-contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>


      {/* ============ Page hero ============ */}
      <section className="page-hero page-hero--contact">
      <div className="page-hero__media" data-parallax="0.12"></div>
      <div className="hero__grain"></div>
      <div className="blob blob--1"></div>
      <div className="blob blob--2"></div>

      <div className="shell page-hero__inner">
      <span className="hero__chip">
      <i aria-hidden="true">❤</i> OMBR Layout, Banaswadi, Bengaluru
      </span>

      <h1 data-split="">Contact <span className="word-mark">Us</span></h1>
      <p className="page-hero__lead">
      Write to us or call us — every conversation starts the same way, with someone deciding
      to care.
      </p>

      <div className="btn-row">
      <a className="btn" href="tel:+917899915832">
      Call +91 78999 15832
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z" /></svg>
      </a>
      <a className="btn btn--light" href="#write">Send a Message</a>
      </div>

      <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol role="list">
      <li><a href="/">Home</a></li>
      <li aria-current="page">Contact Us</li>
      </ol>
      </nav>
      </div>
      </section>

      {/* ============ Ways to reach us ============ */}
      <section className="section" id="reach">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Get In Touch</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Ways to Reach Us</h2>
      <p data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      Whether you would like to give, to volunteer, to offer ration and clothing, or simply to
      ask what we do — here is where to find us.
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

      <div className="info-card info-card--static" data-reveal="">
      <span className="info-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
      </span>
      <span className="info-card__label">Office</span>
      <address className="info-card__value">
      No. 356 &amp; 358, GNR East Tower,<br />
      7th Main Road, Near Shiva Parvathi<br />
      Kalyana Mantapa, OMBR Layout,<br />
      Banaswadi, Bangalore – 560 043,<br />
      Karnataka, India
      </address>
      </div>
      </div>
      </div>
      </section>

      {/* ============ Message form ============ */}
      <section className="section section--cream" id="write">
      <div className="shell">
      <div className="section-head">
      <span className="eyebrow" data-reveal="">Send a Message</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Tell Us Why You're Writing</h2>
      </div>

      <div className="split-sticky">
      <div className="split-sticky__aside">
      <div className="stack" data-reveal="left">
      <p className="lead">
      A short note is enough to begin. Tell us who you are and what you have in mind, and
      we will take it from there.
      </p>
      <p>
      People usually write about one of a few things — how to donate, how to volunteer
      their time or a skill, how to sponsor a child's education, or how to send ration,
      clothing and books to the children in our care. If you represent an organisation,
      we would be glad to talk about partnering on health camps, blood donation drives and
      community celebrations. Whatever it is, say it plainly; we would far rather hear
      from you than have you wonder.
      </p>
      </div>

      <div className="pill-list pill-list--static" data-reveal="left" style={{ "--d": "120", marginTop: "1.4rem" } as React.CSSProperties}>
      <span className="pill">Donate</span>
      <span className="pill">Volunteer</span>
      <span className="pill">Sponsor a child's education</span>
      <span className="pill">Ration, clothing &amp; books</span>
      <span className="pill">Corporate partnership</span>
      </div>

      {/* TODO: the trust publishes neither office visiting hours nor a visitor policy.
      Nothing on this page may invite people to the office until both are confirmed —
      it is a place where children live. */}
      <div className="note-card" data-reveal="left" style={{ "--d": "200", marginTop: "1.6rem" } as React.CSSProperties}>
      <b>Prefer to speak to someone?</b><br />
      Call <a href="tel:+917899915832">+91 78999 15832</a> or
      <a href="tel:+919663714362">+91 96637 14362</a>, or email
      <a href="mailto:shruthikacharitabletrust2@gmail.com">shruthikacharitabletrust2@gmail.com</a>.
      </div>
      </div>

      <div className="split-sticky__main">
      {/*
      ==========================================================================
      FRONT-END ONLY FORM — NOTHING IS SENT TO A SERVER FROM THIS PAGE.
      ==========================================================================
      There is no backend behind this site. On submit, assets/js/main.js validates
      the fields, shows a status message making clear that nothing has been sent
      yet, and then opens the visitor's own email application with a prefilled
      message addressed to the value of data-mailto below.

      TO CONNECT REAL DELIVERY, pick ONE of these and remove the data-mailto
      attribute so the JS mailto fallback stops taking over:

      1) Formspree — create a form at https://formspree.io, then set:
      <form class="contact-form" id="contactForm"
      action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      and remove `novalidate` only if you want the browser's own validation.

      2) Netlify Forms — deploy on Netlify and add to the <form> tag:
      netlify  data-netlify="true"  name="contact"
      plus a hidden input: <input type="hidden" name="form-name" value="contact">
      and set action="/thank-you.html".

      3) Google Forms — create a Google Form with matching fields, then POST to
      https://docs.google.com/forms/d/e/YOUR_ID/formResponse with the field
      names renamed to the form's entry.NNNNNN keys.

      4) Your own backend — set action="/api/contact" method="POST" and handle the
      five fields (name, email, phone, subject, message) server-side. Add spam
      protection (honeypot field or captcha) whichever route you choose.

      Keep the field `name` attributes exactly as they are — main.js reads them.

      The action/method/enctype below only ever run if JavaScript is unavailable. Without
      them the browser default is GET to this same URL, which would put the visitor's name,
      email, phone and message into the address bar, the history and every proxy log, and
      then reload the page looking as though the message had been sent.
      */}
      <noscript>
      <div className="note-card" style={{ marginBottom: "1.4rem" } as React.CSSProperties}>
      <b>This form needs JavaScript.</b> Please email
      <a href="mailto:shruthikacharitabletrust2@gmail.com">shruthikacharitabletrust2@gmail.com</a>
      or call <a href="tel:+917899915832">+91 78999 15832</a> instead.
      </div>
      </noscript>

      <form className="contact-form" id="contactForm" noValidate action="mailto:shruthikacharitabletrust2@gmail.com" method="post" encType="text/plain" data-mailto="shruthikacharitabletrust2@gmail.com">
      <p className="muted-note">Fields marked with an asterisk are required.</p>

      <div className="form-grid">
      <div className="field" data-reveal="">
      <label htmlFor="cf-name">Your Name <span aria-hidden="true">*</span></label>
      <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Full name" required aria-describedby="cf-name-error" />
      <p className="field__error" id="cf-name-error"></p>
      </div>

      <div className="field" data-reveal="">
      <label htmlFor="cf-email">Email <span aria-hidden="true">*</span></label>
      <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" required aria-describedby="cf-email-error" />
      <p className="field__error" id="cf-email-error"></p>
      </div>

      <div className="field" data-reveal="">
      <label htmlFor="cf-phone">Phone</label>
      <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 …" aria-describedby="cf-phone-error" />
      <p className="field__error" id="cf-phone-error"></p>
      </div>

      <div className="field" data-reveal="">
      <label htmlFor="cf-subject">Subject</label>
      <input id="cf-subject" name="subject" type="text" placeholder="How can we help?" aria-describedby="cf-subject-error" />
      <p className="field__error" id="cf-subject-error"></p>
      </div>

      <div className="field field--full" data-reveal="">
      <label htmlFor="cf-message">Message <span aria-hidden="true">*</span></label>
      <textarea id="cf-message" name="message" rows={6} placeholder="Write your message…" required aria-describedby="cf-message-error"></textarea>
      <p className="field__error" id="cf-message-error"></p>
      </div>
      </div>

      <button className="btn contact-form__submit" type="submit">
      Send Message
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>

      <p className="form-status" role="status" aria-live="polite"></p>
      </form>

      <p className="muted-note" style={{ marginTop: "1.1rem" } as React.CSSProperties}>
      Submitting this form opens your own email application with the message prefilled — you
      still have to press send there.
      If that does not work on your device, please write directly to
      <a href="mailto:shruthikacharitabletrust2@gmail.com">shruthikacharitabletrust2@gmail.com</a>.
      </p>
      </div>
      </div>
      </div>
      </section>

      {/* ============ Map ============ */}
      <section className="section" id="find">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Find Us</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Our Office in Banaswadi</h2>
      <p data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      No. 356 &amp; 358, GNR East Tower, 7th Main Road, near Shiva Parvathi Kalyana Mantapa,
      OMBR Layout, Banaswadi, Bangalore – 560 043, Karnataka, India.
      </p>
      </div>

      {/* TODO: this uses the keyless ?q=…&output=embed endpoint, which drops a pin on the
      geocoder's best guess. Replace the src with the trust's own Google Maps
      "Share → Embed a map" URL (https://www.google.com/maps/embed?pb=…) so the marker
      sits exactly on the building. */}
      <div className="map-frame" data-reveal="scale">
      <iframe src="https://www.google.com/maps?q=No.%20356%20%26%20358%2C%20GNR%20East%20Tower%2C%207th%20Main%20Road%2C%20Near%20Shiva%20Parvathi%20Kalyana%20Mantapa%2C%20OMBR%20Layout%2C%20Banaswadi%2C%20Bengaluru%20560043%2C%20Karnataka%2C%20India&amp;z=17&amp;output=embed" title="Map showing the Shruthika Trust office at GNR East Tower, 7th Main Road, OMBR Layout, Banaswadi, Bangalore 560043" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
      </div>

      <p className="muted-note center" style={{ marginTop: "1rem" } as React.CSSProperties}>
      <a href="https://www.google.com/maps/search/?api=1&amp;query=No.%20356%20%26%20358%2C%20GNR%20East%20Tower%2C%207th%20Main%20Road%2C%20Near%20Shiva%20Parvathi%20Kalyana%20Mantapa%2C%20OMBR%20Layout%2C%20Banaswadi%2C%20Bengaluru%20560043%2C%20Karnataka%2C%20India" target="_blank" rel="noopener noreferrer">Open in Google Maps<span className="sr-only"> (opens in a new tab)</span></a>
      — the nearest landmark is Shiva Parvathi Kalyana Mantapa on 7th Main Road.
      </p>
      </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section section--cream-2" id="faq">
      <div className="shell split split--wide-right">
      <div className="split__body">
      <span className="eyebrow" data-reveal="">Before You Write</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Questions We Are Asked Most</h2>
      <div className="stack" data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      <p>
      A few short answers to the things people usually want to know first. If your question
      isn't here, the form above reaches us directly — or simply pick up the phone.
      </p>
      </div>
      <div className="btn-row" data-reveal="" style={{ "--d": "220", marginTop: "1.8rem" } as React.CSSProperties}>
      <a className="btn btn--green" href="/donate/">
      Donate
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.4l8.8-8.7a5 5 0 0 0 0-7.1Z" /></svg>
      </a>
      <a className="link-arrow" href="/causes/">See what we do</a>
      </div>
      </div>

      <div className="objectives" data-reveal="right">
      <article className="obj is-open">
      <button className="obj__head" aria-expanded="true" aria-controls="faq-1">
      <span className="obj__num">01</span>
      How can I donate to the trust?
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="faq-1"><div><p>
      You can transfer directly to the trust's account at the State Bank of India,
      Kacharakanahalli Branch, Bangalore — account number 39783628220, in the name of
      Shruthika Women's and Children's Welfare Trust. You can also scan either of the QR
      codes on our <a href="/donate/">Donate page</a>. If you need anything in writing
      about your contribution, please get in touch with the date, the amount and your bank
      or payment reference.
      </p></div></div>
      </article>

      <article className="obj">
      <button className="obj__head" aria-expanded="false" aria-controls="faq-2">
      <span className="obj__num">02</span>
      Can I volunteer or help in other ways?
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="faq-2"><div><p>
      Yes — please get in touch and tell us what you can offer. People help us by giving
      their time, by sponsoring a child's education, by sending ration, clothing and books,
      and by partnering with us as an organisation. Use the form on this page or call one of
      the numbers above, and we will tell you what is most needed right now.
      </p></div></div>
      </article>

      <article className="obj">
      <button className="obj__head" aria-expanded="false" aria-controls="faq-3">
      <span className="obj__num">03</span>
      Where is your office?
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="faq-3"><div><p>
      No. 356 &amp; 358, GNR East Tower, 7th Main Road, near Shiva Parvathi Kalyana Mantapa,
      OMBR Layout, Banaswadi, Bangalore – 560 043, Karnataka, India. The map above will take
      you there; please call or write before visiting.
      </p></div></div>
      </article>

      <article className="obj">
      <button className="obj__head" aria-expanded="false" aria-controls="faq-4">
      <span className="obj__num">04</span>
      What is the quickest way to reach you?
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="faq-4"><div><p>
      A phone call — <a href="tel:+917899915832">+91 78999 15832</a> or
      <a href="tel:+919663714362">+91 96637 14362</a>. For anything you would like in
      writing, email
      <a href="mailto:shruthikacharitabletrust2@gmail.com">shruthikacharitabletrust2@gmail.com</a>
      or use the message form on this page, which opens your email application with the
      details already filled in.
      </p></div></div>
      </article>
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
      <h2>The shortest message can change a child's year</h2>
      <p>
      Food, shelter, clothing, education, protection and moral support — that is what your
      contribution becomes for the children in our care. Give what you can, or write to us and
      we will find a way for you to help.
      </p>
      <div className="btn-row">
      <a className="btn" href="/donate/">
      Donate Now
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a className="btn btn--light" href="/about/">Know Our Story</a>
      </div>
      </div>
      </div>
      </section>


    </>
  );
}
