import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shruthika Women's & Children's Welfare Trust | Serving Humanity is Serving God",
  description: "The Shruthika Women's and Children's Welfare Trust, Bengaluru — uplifting abandoned orphans, underprivileged children and women in need through food, shelter, education and moral support.",
  openGraph: {
    title: "Shruthika Women's & Children's Welfare Trust",
    description: "Serving Humanity is Considered to be Serving God. Food, shelter, education and moral support for orphaned and underprivileged children.",
    images: ["/assets/img/hero.jpg"],
  },
};

export default function Home() {
  return (
    <>


      {/* ============ Hero ============ */}
      <section className="hero">
      <div className="hero__media" data-parallax="0.18"></div>
      <div className="hero__grain"></div>
      <div className="blob blob--1"></div>
      <div className="blob blob--2"></div>

      <div className="shell hero__inner">
        <span className="hero__chip">
          <i aria-hidden="true">❤</i> A registered charitable trust in Bengaluru, Karnataka
        </span>

        <h1 data-split="">
          Serving Humanity is Considered to be <span className="word-mark">Serving God.</span>
        </h1>
      </div>

      <div className="scroll-cue" aria-hidden="true">
      <span>Scroll</span>
      <span className="scroll-cue__rail"></span>
      </div>
      </section>

      {/* ============ Marquee ============ */}
      <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
      <span>Food &amp; Shelter</span><span>Education</span><span>Moral Support</span>
      <span>Skill Development</span><span>Women Empowerment</span><span>Dignity for Every Child</span>
      </div>
      <div className="marquee__track">
      <span>Food &amp; Shelter</span><span>Education</span><span>Moral Support</span>
      <span>Skill Development</span><span>Women Empowerment</span><span>Dignity for Every Child</span>
      </div>
      </div>

      {/* ============ About ============
      Laid out as the trust lays it out on its own home page: the medallion
      large on the left, the name in a serif and the copy centred on the right,
      over the cream ground and map watermark. */}
      <section className="section about-classic" id="about">
      <div className="shell about-classic__grid">

      <div className="about-classic__media" data-reveal="left">
      <img src="/assets/img/founder.jpg" alt="Lion Dr. S. Sathish, Founder President of the Shruthika Women's and Children's Welfare Trust" loading="lazy" />
      </div>

      <div className="about-classic__body">
      <h2 className="about-classic__title" data-reveal="">
      The Shruthika Women&apos;s and Children&apos;s Welfare Trust
      </h2>

      <p className="about-classic__lead" data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>
      The Shruthika Women&apos;s and Children&apos;s Welfare Trust is dedicated to uplifting the
      lives of abandoned orphans, underprivileged children, and women in need.
      </p>

      <p className="about-classic__detail" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      The trust was founded by <strong>Lion Dr. S. Sathish</strong>, who was born to moderate
      parents in Bengaluru. Despite a professional background as a car driver, his student years
      were defined by a deep-seated inspiration to serve disabled and orphaned children. Before
      establishing this trust, he led the Karnataka Rakshana Yuva Pade (KRYP), working to protect
      Kannada culture and promote unity.
      </p>

      <div className="btn-row" data-reveal="" style={{ "--d": "240" } as React.CSSProperties}>
      <a className="btn" href="/about/">
      More About Us
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </div>

      </div>
      </section>

      {/* ============ Mission & Vision ============ */}
      <section className="section" id="mission">
      <div className="shell split split--wide-left split--reverse">
      <div className="split__body">
      <span className="eyebrow" data-reveal="">Mission &amp; Vision</span>
      <div className="mv-grid" style={{ gridTemplateColumns: "1fr", gap: "1.2rem" } as React.CSSProperties}>
      <article className="mv-card" data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>
      <div className="mv-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>
      </div>
      <h3>Our Mission</h3>
      <p>
      To provide food, shelter, education, and moral support to children, helping them find
      the path to a settled and respectful future.
      </p>
      </article>

      <article className="mv-card mv-card--dark" data-reveal="" style={{ "--d": "170" } as React.CSSProperties}>
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

      <div className="split__media media-cluster split__media--fill" data-reveal="right">
      <div className="frame frame--fill">
      <img src="/assets/img/mission.jpg" alt="Children supported by the trust" loading="lazy" />
      </div>
      <span className="frame-outline" aria-hidden="true"></span>
      </div>
      </div>
      </section>

      {/* ============ Services ============ */}
      <section className="section section--cream-2" id="opportunities">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Livelihood Support</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>We Provide Opportunity in the Field Of</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Placing trained women and youth into dignified, sustainable work — so families can stand on
      their own feet and children can stay in school.
      </p>
      </div>

      <div className="services">
      <article className="service" data-reveal="scale" style={{ "--d": "0" } as React.CSSProperties}>
      <div className="service__icon service__icon--photo" aria-hidden="true">
      <img src="/assets/img/services/housekeeping.jpg" alt="" width="68" height="68" loading="lazy" />
      </div>
      <h3>House Keeping F &amp; M</h3>
      <p>Trained female &amp; male staff</p>
      </article>

      <article className="service" data-reveal="scale" style={{ "--d": "70" } as React.CSSProperties}>
      <div className="service__icon service__icon--photo" aria-hidden="true">
      <img src="/assets/img/services/home-nurse.jpg" alt="" width="68" height="68" loading="lazy" />
      </div>
      <h3>Home Nurses</h3>
      <p>Round-the-clock home care</p>
      </article>

      <article className="service" data-reveal="scale" style={{ "--d": "140" } as React.CSSProperties}>
      <div className="service__icon service__icon--photo" aria-hidden="true">
      <img src="/assets/img/services/baby-sitting.jpg" alt="" width="68" height="68" loading="lazy" />
      </div>
      <h3>Baby Sitting</h3>
      <p>Compassionate child minders</p>
      </article>

      <article className="service" data-reveal="scale" style={{ "--d": "210" } as React.CSSProperties}>
      <div className="service__icon service__icon--photo" aria-hidden="true">
      <img src="/assets/img/services/beautician.jpg" alt="" width="68" height="68" loading="lazy" />
      </div>
      <h3>Beautician</h3>
      <p>Salon &amp; grooming skills</p>
      </article>

      <article className="service" data-reveal="scale" style={{ "--d": "0" } as React.CSSProperties}>
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/patient-care.png" alt="Hands holding a heart" width="40" height="40" loading="lazy" />
      </div>
      <h3>Patient Care</h3>
      <p>Attendants &amp; caregivers</p>
      </article>

      <article className="service" data-reveal="scale" style={{ "--d": "70" } as React.CSSProperties}>
      <div className="service__icon service__icon--photo" aria-hidden="true">
      <img src="/assets/img/services/drivers.jpg" alt="" width="68" height="68" loading="lazy" />
      </div>
      <h3>Drivers Jobs</h3>
      <p>Licensed, verified drivers</p>
      </article>

      <article className="service" data-reveal="scale" style={{ "--d": "140" } as React.CSSProperties}>
      <div className="service__icon service__icon--photo" aria-hidden="true">
      <img src="/assets/img/services/security.jpg" alt="" width="68" height="68" loading="lazy" />
      </div>
      <h3>Security</h3>
      <p>Trained security personnel</p>
      </article>

      <article className="service" data-reveal="scale" style={{ "--d": "210" } as React.CSSProperties}>
      <div className="service__icon service__icon--photo" aria-hidden="true">
      <img src="/assets/img/services/more.jpg" alt="" width="68" height="68" loading="lazy" />
      </div>
      <h3>And More</h3>
      <p>Tell us what you need</p>
      </article>
      </div>
      </div>
      </section>

      {/* ============ Better future ============ */}
      <section className="section" id="future">
      <div className="shell split">
      <div className="split__body">
      <span className="eyebrow" data-reveal="">Children's Lives</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>
      Every Child Deserves a <span className="text-accent">Better Future!</span>
      </h2>
      <div className="stack" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      <p>
      Though Dr. S. Sathish was running a Kannada outfit and a business unit, he was very eager
      to start a charitable trust to help the orphaned and single parent children, children with
      disability and adopt street children. He has visited many homes and hostel trusts, learned
      from orphaned children, and was inspired by the noble services rendered by them in
      promoting and nurturing the aggrieved people's life. This ignited a strong desire and
      motive in his mind to start a charitable trust for women and children and serve them fully.
      </p>
      <p className="quote">
      Also to provide some specialized services in arranging community marriage services with
      the help of Lions Club, Bengaluru.
      </p>
      </div>
      </div>

      <div className="split__media media-cluster" data-reveal="right">
      <div className="frame">
      <img src="/assets/img/children.jpg" alt="Children learning together" loading="lazy" />
      </div>
      <span className="frame-outline" aria-hidden="true"></span>
      </div>
      </div>
      </section>

      {/* ============ Objectives ============ */}
      <section className="section section--cream" id="objectives">
      <div className="shell split split--wide-right split--middle">
      <div className="split__body">
      <span className="eyebrow" data-reveal="">Objectives</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>The Objectives of the Trust</h2>
      <div className="stack" data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      <p>
      Lion Dr. S. Sathish started the “SHRUTHIKA WOMEN'S AND CHILDREN'S WELFARE TRUST (R.)”
      with the following objectives:
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

      {/* ============ Gallery preview ============ */}
      <section className="section" id="gallery">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Moments</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Life at the Trust</h2>
      </div>
      {/* One photo set for the whole site: assets/img/gallery-01.jpg … gallery-22.jpg.
      These six are the first six of that set — the trust never has to supply the
      same picture twice under two names. */}
      <div className="gallery-strip" data-reveal="scale">
      <a href="/gallery/#photographs"><img src="/assets/img/gallery-01.jpg" alt="Trust activity photograph 1" loading="lazy" /></a>
      <a href="/gallery/#photographs"><img src="/assets/img/gallery-02.jpg" alt="Trust activity photograph 2" loading="lazy" /></a>
      <a href="/gallery/#photographs"><img src="/assets/img/gallery-03.jpg" alt="Trust activity photograph 3" loading="lazy" /></a>
      <a href="/gallery/#photographs"><img src="/assets/img/gallery-04.jpg" alt="Trust activity photograph 4" loading="lazy" /></a>
      <a href="/gallery/#photographs"><img src="/assets/img/gallery-05.jpg" alt="Trust activity photograph 5" loading="lazy" /></a>
      <a href="/gallery/#photographs"><img src="/assets/img/gallery-06.jpg" alt="Trust activity photograph 6" loading="lazy" /></a>
      </div>
      <div className="btn-row" data-reveal="" style={{ justifyContent: "center", marginTop: "2.5rem" } as React.CSSProperties}>
      <a className="btn btn--outline" href="/gallery/">View Full Gallery</a>
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
      <h2>Your kindness becomes someone's tomorrow</h2>
      <p>
      Every contribution goes towards food, shelter, education and moral support for children
      who have no one else to turn to. Partner with us — donate, volunteer, or sponsor a child's
      education.
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


    </>
  );
}
