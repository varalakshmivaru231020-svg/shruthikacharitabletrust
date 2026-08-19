import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shruthika Women's & Children's Welfare Trust",
  description: "Our story, our mission and our passion — how Lion Dr. S. Sathish came to found the Shruthika Women's and Children's Welfare Trust in Bengaluru, and the objectives that guide its work for orphaned children and women in need.",
  openGraph: {
    title: "About Us | Shruthika Women's & Children's Welfare Trust",
    description: "Our People Our Responsibility. The story of founder Lion Dr. S. Sathish, and the mission, vision and objectives of the Shruthika Trust, Bengaluru.",
    images: ["/assets/img/banner-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>


      {/* ============ Page hero ============ */}
      <section className="page-hero page-hero--about">
      <div className="page-hero__media" data-parallax="0.12"></div>
      <div className="hero__grain"></div>
      <div className="blob blob--1"></div>
      <div className="blob blob--2"></div>

      <div className="shell page-hero__inner">
      <span className="hero__chip">
      <i aria-hidden="true">❤</i> Bengaluru, Karnataka
      </span>

      <h1 data-split="">About <span className="word-mark">Us</span></h1>
      <p className="page-hero__lead">Our People Our Responsibility</p>

      <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol role="list">
      <li><a href="/">Home</a></li>
      <li aria-current="page">About Us</li>
      </ol>
      </nav>
      </div>
      </section>

      {/* ============ Our story ============ */}
      <section className="section section--cream" id="story">
      <div className="shell split split--wide-right">
      <div className="split__media" data-reveal="left">
      <img className="emblem" src="/assets/img/founder.jpg" alt="Lion Dr. S. Sathish, Founder President of the Shruthika Women's and Children's Welfare Trust" loading="lazy" />
      </div>

      <div className="split__body">
      <span className="eyebrow" data-reveal="">Who We Are</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>
      Our Story, Our Mission and <span className="text-accent">Our Passion</span>
      </h2>

      <div className="stack" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      <p className="lead">
      The Shruthika Women's and Children's Welfare Trust is dedicated to uplifting the lives of
      abandoned orphans, underprivileged children, and women in need.
      </p>
      <p>
      The trust was founded by <strong>Lion Dr. S. Sathish</strong>, born to late Shekaran. M
      (HAL) and late Thilagavathi. He lives in Periyar Nagar, D.J. Halli, Ward No. 48,
      Pulikeshinagar Assembly Constituency, Bengaluru North, and completed his I PUC.
      </p>
      <p>
      From his youth he was drawn towards social service — above all towards disabled and
      orphaned children. He earned his living as a car driver, and that early inspiration
      never left him.
      </p>
      </div>

      <div className="founder-card" data-reveal="" style={{ "--d": "240" } as React.CSSProperties}>
      <div>
      <span>Founder President</span>
      <b>Lion Dr. S. Sathish</b>
      </div>
      </div>

      <div className="btn-row" data-reveal="" style={{ "--d": "300", marginTop: "1.9rem" } as React.CSSProperties}>
      <a className="btn" href="/causes/">
      See Our Causes
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a className="link-arrow" href="/contact/">Talk to us</a>
      </div>
      </div>
      </div>
      </section>

      {/* ============ Founder's journey ============ */}
      <section className="section" id="journey">
      <div className="shell split-sticky">
      <div className="split-sticky__aside">
      <span className="eyebrow" data-reveal="">The Founder's Journey</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>One Life, Turned Towards Others</h2>
      <div className="stack" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      <p>
      The trust did not begin with a building or a budget. It began with a young man in
      Bengaluru who could not look away from children who had no one — and who spent the years
      that followed finding practical ways to help them.
      </p>
      <p className="quote">
      Serving humanity is considered to be serving God.
      </p>
      </div>
      </div>

      <div className="split-sticky__main">
      {/* The photograph sits in the scrolling column, not the sticky aside:
      a ~720px aside plus the 108px sticky offset never fits a laptop. */}
      <div className="frame frame--wide" data-reveal="scale" style={{ marginBottom: "2.6rem" } as React.CSSProperties}>
      <img src="/assets/img/founder-service.jpg" alt="Lion Dr. S. Sathish during a service activity of the trust" loading="lazy" />
      </div>

      <ol className="timeline" role="list">
      <li className="timeline__item" data-reveal="">
      <span className="timeline__dot" aria-hidden="true"></span>
      <span className="timeline__label">Early inspiration</span>
      <h3>A young heart set on service</h3>
      <p>
      Born in Bengaluru, Lion Dr. S. Sathish was moved from his student years by
      the lives of disabled and orphaned children around him. Long before there was a trust
      to run, there was simply a determination to be useful to them.
      </p>
      </li>

      <li className="timeline__item" data-reveal="">
      <span className="timeline__dot" aria-hidden="true"></span>
      <span className="timeline__label">Working years</span>
      <h3>Earning a living as a car driver</h3>
      <p>
      He earned his living as a car driver — modest, everyday work that never dimmed the
      resolve he had carried since his youth.
      </p>
      </li>

      <li className="timeline__item" data-reveal="">
      <span className="timeline__dot" aria-hidden="true"></span>
      <span className="timeline__label">Community leadership</span>
      <h3>Founding Karnataka Rakshana Yuva Pade (KRYP)</h3>
      <p>
      He founded <strong>Karnataka Rakshana Yuva Pade (KRYP)</strong>, a registered Kannada
      outfit that works to promote the Kannada language, culture and heritage.
      </p>
      </li>

      <li className="timeline__item" data-reveal="">
      <span className="timeline__dot" aria-hidden="true"></span>
      <span className="timeline__label">Honour and office</span>
      <h3>A Doctorate and the Lions Club Presidency</h3>
      <p>
      The Lions Club honoured him with a <strong>Doctorate</strong> and made him
      <strong>President</strong> — the recognition behind the name by which he is known
      today, Lion Dr. S. Sathish. The trust's community marriage services are arranged with
      the help of the Lions Club, Bengaluru.
      </p>
      </li>

      <li className="timeline__item" data-reveal="">
      <span className="timeline__dot" aria-hidden="true"></span>
      <span className="timeline__label">Pandemic response</span>
      <h3>Standing with families through COVID-19</h3>
      <p>
      During the <strong>COVID-19 pandemic</strong> he provided humanitarian aid to
      vulnerable people — food, ration kits, water, medicines, blankets and bedsheets,
      carried to those who had been left with nothing when the city stopped.
      </p>
      </li>

      <li className="timeline__item" data-reveal="">
      <span className="timeline__dot" aria-hidden="true"></span>
      <span className="timeline__label">Sustaining the work</span>
      <h3>Establishing Shruthika Enterprises</h3>
      <p>
      So that charitable work would have a steady source behind it, he established
      <strong>'SHRUTHIKA ENTERPRISES'</strong> — a business unit set up to fund the service
      he intended to give.
      </p>
      </li>

      <li className="timeline__item" data-reveal="">
      <span className="timeline__dot" aria-hidden="true"></span>
      <span className="timeline__label">The trust</span>
      <h3>Shruthika Women's and Children's Welfare Trust</h3>
      <p>
      With that foundation in place, he started the
      <strong>SHRUTHIKA WOMEN'S AND CHILDREN'S WELFARE TRUST (R.)</strong> —
      dedicated to abandoned orphans, single parent children, underprivileged children and
      women in need, with food, shelter, education and moral support.
      </p>
      </li>
      </ol>
      </div>
      </div>
      </section>

      {/* ============ Mission & Vision ============ */}
      <section className="section section--cream-2" id="mission">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Mission &amp; Vision</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>What We Are Working Towards</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Two simple commitments hold this trust together — one about what a child receives today,
      and one about the life that child is able to build tomorrow.
      </p>
      </div>

      <div className="mv-grid">
      <article className="mv-card" data-reveal="" style={{ "--d": "0" } as React.CSSProperties}>
      <div className="mv-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>
      </div>
      <h3>Our Mission</h3>
      <p>
      To provide food, shelter, education, and moral support to children, helping them find
      the path to a settled and respectful future.
      </p>
      </article>

      <article className="mv-card mv-card--dark" data-reveal="" style={{ "--d": "90" } as React.CSSProperties}>
      <div className="mv-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="2.6" /></svg>
      </div>
      <h3>Our Vision</h3>
      <p>
      To transform lives in accordance with cultural values, ethics, and human dignity,
      ensuring a worthier future for suburban and rural poor.
      </p>
      </article>
      </div>
      </div>
      </section>

      {/* ============ Objectives ============ */}
      <section className="section section--cream" id="objectives">
      <div className="shell split split--wide-right">
      <div className="split__body">
      <span className="eyebrow" data-reveal="">Objectives</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>The Four Objectives of the Trust</h2>
      <div className="stack" data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      <p>
      Lion Dr. S. Sathish started the “SHRUTHIKA WOMEN'S AND CHILDREN'S WELFARE TRUST (R.)”
      with the following objectives:
      </p>
      <p>
      They are written plainly, because they are meant to be checked against our work rather
      than admired on a page.
      </p>
      </div>
      <div className="btn-row" data-reveal="" style={{ "--d": "220", marginTop: "1.8rem" } as React.CSSProperties}>
      <a className="btn btn--green" href="/donate/">
      Donate
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.4l8.8-8.7a5 5 0 0 0 0-7.1Z" /></svg>
      </a>
      <a className="link-arrow" href="/causes/">See all our causes</a>
      </div>
      </div>

      <div className="objectives" data-reveal="right">
      <article className="obj is-open">
      <button className="obj__head" aria-expanded="true" aria-controls="obj-1">
      <span className="obj__num">01</span>
      Education &amp; self-esteem for orphans
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="obj-1"><div><p>
      To help the abandoned orphans and single parent children with a zeal to improve their
      living skills through education and help them to attain self respect and self esteem.
      </p></div></div>
      </article>

      <article className="obj">
      <button className="obj__head" aria-expanded="false" aria-controls="obj-2">
      <span className="obj__num">02</span>
      Overall development &amp; growth
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="obj-2"><div><p>
      To have access with orphans and underprivileged children and indulge in supporting them
      for their overall development and growth in their life.
      </p></div></div>
      </article>

      <article className="obj">
      <button className="obj__head" aria-expanded="false" aria-controls="obj-3">
      <span className="obj__num">03</span>
      A worthier future for the rural poor
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="obj-3"><div><p>
      To ensure a better future for such children and create a worthier future for the children
      of rural and sub-urban poor parents and earn their meal and continue their education till
      they get a respectful job to quench their hunger.
      </p></div></div>
      </article>

      <article className="obj">
      <button className="obj__head" aria-expanded="false" aria-controls="obj-4">
      <span className="obj__num">04</span>
      Community marriage services
      <span className="obj__sign" aria-hidden="true"></span>
      </button>
      <div className="obj__body" id="obj-4"><div><p>
      To provide specialized services in arranging community marriage services with the help of
      Lions Club, Bengaluru.
      </p></div></div>
      </article>
      </div>
      </div>
      </section>

      {/* ============ What children receive ============ */}
      <section className="section section--cream-2" id="responsibility">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Our People, Our Responsibility</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>What a Child in Our Care Receives</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Nothing here is complicated. It is the ordinary set of things every child should be able to
      take for granted — and the reason the trust exists is that some children cannot.
      </p>
      </div>

      <div className="fact-row">
      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 10.5 12 4l8.5 6.5" /><path d="M6 9.8V20h12V9.8" /><path d="M10 20v-5h4v5" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">Food &amp; Shelter</b>
      <span className="fact__text">Daily meals and a safe roof, so no child has to worry about tonight</span>
      </span>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4.5h5.5A2.5 2.5 0 0 1 12 7v12a2 2 0 0 0-2-2H4Z" /><path d="M20 4.5h-5.5A2.5 2.5 0 0 0 12 7v12a2 2 0 0 1 2-2h6Z" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">Education</b>
      <span className="fact__text">Schooling and living skills carried on until a respectful job is within reach</span>
      </span>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.4 5.4 13.8a4.1 4.1 0 0 1 5.5-6.05L12 8.8l1.1-1.05a4.1 4.1 0 0 1 5.5 6.05Z" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">Moral Support</b>
      <span className="fact__text">Protection, encouragement and the self respect every child is owed</span>
      </span>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7.5" width="18" height="12" rx="2.5" /><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" /><path d="M3 12.5h18" /></svg>
      </span>
      <span className="fact__body">
      <b className="fact__label">A Path to Work</b>
      <span className="fact__text">Support carried on until a young person reaches dignified, sustainable work</span>
      </span>
      </div>
      </div>
      </div>
      </section>

      {/* ============ Closing CTA ============ */}
      <section className="section section--tight">
      <div className="shell">
      <div className="cta-band" data-reveal="scale">
      <span className="cta-band__ring cta-band__ring--a" aria-hidden="true"></span>
      <span className="cta-band__ring cta-band__ring--b" aria-hidden="true"></span>
      <span className="eyebrow eyebrow--center eyebrow--light">Get Involved</span>
      <h2>Building a Better Future</h2>
      <p>
      A better future is built the slow way — one meal, one school year, one child who finally
      feels safe. Walk with us: donate, volunteer, or simply write to us and ask how you can
      help.
      </p>
      <div className="btn-row">
      <a className="btn" href="/donate/">
      Donate Now
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a className="btn btn--light" href="/contact/">Contact Us</a>
      </div>
      </div>
      </div>
      </section>


    </>
  );
}
