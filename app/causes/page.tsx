import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Causes | Shruthika Women's & Children's Welfare Trust",
  description:
    "More than 25 children sheltered in Bengaluru, plus free community mass marriages, prayers for peace and harmony, health and eye camps, blood donation drives and support for aggrieved women.",
  openGraph: {
    title: "Our Causes | Shruthika Women's & Children's Welfare Trust",
    description:
      "We Can Help Children Survive! Food and shelter, clothing, education and protection and moral support — and the community work that grows around it.",
    images: ["/assets/img/banner-causes.jpg"],
  },
};

export default function CausesPage() {
  return (
    <>

      {/* ============ Page hero ============ */}
      <section className="page-hero page-hero--causes">
      <div className="page-hero__media" data-parallax="0.12"></div>
      <div className="hero__grain"></div>
      <div className="blob blob--1"></div>
      <div className="blob blob--2"></div>

      <div className="shell page-hero__inner">
      <span className="hero__chip">
      <i aria-hidden="true">❤</i> The work we do, every ordinary day
      </span>

      <h1 data-split="">Our <span className="word-mark">Causes</span></h1>

      <p className="page-hero__lead">
      Food and shelter, clothing, education and protection and moral support.
      </p>

      <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol role="list">
      <li><a href="/">Home</a></li>
      <li aria-current="page">Our Causes</li>
      </ol>
      </nav>
      </div>
      </section>

      {/* ============ We Can Help Children Survive! ============
      Opening statement in the trust's own words. */}
      <section className="section section--cream" id="survive">
      <div className="shell split split--wide-left">

      <div className="split__body">
      <span className="eyebrow" data-reveal="">They Need</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>
        We Can Help <span className="text-accent">Children Survive!</span>
      </h2>

      <div className="stack" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      <p className="lead">
      Under the able leadership of the Founder of this Charitable Trust almost more than 25
      children are being sheltered and grown in our Trust with the support and blessings of
      the well wishers and God.
      </p>
      <p>
      We could be able to provide food and shelter, clothing, education and protection and
      moral support to grow and find an employment opportunity to settle in their future life.
      </p>
      <p className="quote">Serving Humanity is Considered to be Serving God.</p>
      </div>

      <div className="btn-row" data-reveal="" style={{ "--d": "240", marginTop: "1.9rem" } as React.CSSProperties}>
      <a className="btn" href="/donate/">
      Support Our Work
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      <a className="link-arrow" href="/about/">Read our story</a>
      </div>
      </div>

      <div className="split__media media-cluster" data-reveal="right">
      <div className="frame frame--tall">
      <img src="/assets/img/cause-care.jpg" alt="Children of the trust holding their certificates" loading="lazy" />
      </div>
      <span className="frame-outline" aria-hidden="true"></span>
      </div>

      </div>
      </section>

      {/* ============ What every child receives ============ */}
      <section className="section" id="care">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Our Core Work</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>What Every Child Receives</h2>
      </div>

      <div className="fact-row" data-reveal="">
      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 10.5 12 4l8.5 6.5" /><path d="M6 9.8V20h12V9.8" /><path d="M9.2 14.2h5.6a2.8 2.8 0 0 1-5.6 0Z" /></svg>
      </span>
      <div className="fact__text"><b>Food &amp; Shelter</b>A safe place to sleep and meals every day</div>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 4 5 5.8v3.4l2.2.6V20h9.6V9.8l2.2-.6V5.8L15.5 4a3.6 3.6 0 0 1-7 0Z" /></svg>
      </span>
      <div className="fact__text"><b>Clothing</b>Uniforms and everyday clothes that fit</div>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3.2 7.4 12 4l8.8 3.4L12 11Z" /><path d="M6.6 9.2V15c0 1.6 2.4 3 5.4 3s5.4-1.4 5.4-3V9.2" /><path d="M20.8 7.6v5" /></svg>
      </span>
      <div className="fact__text"><b>Education &amp; Protection</b>School, books and someone in their corner</div>
      </div>

      <div className="fact" data-reveal="">
      <span className="fact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.4l8.8-8.7a5 5 0 0 0 0-7.1Z" /></svg>
      </span>
      <div className="fact__text"><b>Moral Support</b>Carried on until they can settle in life</div>
      </div>
      </div>

      <div className="stack center" data-reveal="" style={{ maxWidth: "62ch", marginInline: "auto", marginTop: "3rem", textAlign: "center" } as React.CSSProperties}>
      <p>
      We have pleasure in sharing the news that most well wishers celebrate their birthday,
      wedding anniversary and other functions in our Trust Office and provide specialized
      lunch and dinner for the hostel children.
      </p>
      <p>
      His motto is to adopt more such children and provide them shelter, food, education and
      nurture them with ethics of good life. Respected General Public and Well wishers, please
      bless us and encourage us to serve more in the future.
      </p>
      </div>
      </div>
      </section>

      {/* ============ The wider community work ============
      Every card below is drawn from the trust's own account of its work. */}
      <section className="section section--cream-2" id="initiatives">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Beyond Our Four Walls</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>The Causes We Carry</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Some of this work happens inside our own Trust Office. The rest happens out in the
      neighbourhoods of Bengaluru, alongside KRYP and the Lions Club.
      </p>
      </div>

      <div className="cause-grid">

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/cause-shelter.jpg" alt="Children of the trust gathered at the Trust Office" loading="lazy" />
      <span className="cause-card__tag">Core Care</span>
      </div>
      <div className="cause-card__body">
      <h3>Shelter &amp; Daily Care</h3>
      <p>
      More than 25 children are sheltered and grown in our Trust — food and shelter, clothing,
      education and protection, and the moral support that helps them find an employment
      opportunity and settle in their future life.
      </p>
      <a className="link-arrow" href="/donate/">Help us keep this going
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/gallery-11.jpg" alt="A gathering at the trust bringing the community together" loading="lazy" />
      <span className="cause-card__tag">Peace &amp; Harmony</span>
      </div>
      <div className="cause-card__body">
      <h3>Prayers for Peace &amp; Iftaar Parties</h3>
      <p>
      In his capacity as State President of KRYP, Lion Dr. S. Sathish has arranged Prayers from
      All Saints — Hazrats, Pastors and Swamiji&apos;s — for Peace and Harmony, and IFTAAR
      PARTIES during the Ramzan Festival for the past 17 years, keeping in view our Sangha&apos;s
      motto: <em>One Caste, One Religion and One God.</em>
      </p>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/cause-marriage.jpg" alt="Families gathered for a community celebration" loading="lazy" />
      <span className="cause-card__tag">Community</span>
      </div>
      <div className="cause-card__body">
      <h3>Free Community Mass Marriage</h3>
      <p>
      Arranged for poor people from all religions, with free Mangala Sutras (Thalis) and the
      basic utensils required for running a newly wedded life — provided free of cost, with the
      support of Lion&apos;s Club Bangalore.
      </p>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/cause-culture.jpg" alt="Children celebrating a national festival with the flag" loading="lazy" />
      <span className="cause-card__tag">Culture</span>
      </div>
      <div className="cause-card__body">
      <h3>Kannada Rajyothsava &amp; National Festivals</h3>
      <p>
      Celebrated every year since the inception of KRYP — Kannada Rajyothsava Day, Independence
      Day and Republic Day — in the presence of eminent Kannada leaders and activists such as
      Sri. Vatal Nagaraj, alongside political leaders from all parties who have promoted and
      contributed to the State and the Kannada language.
      </p>
      <a className="link-arrow" href="/gallery/">See moments from the year
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/cause-health.jpg" alt="A community gathering organised by the trust" loading="lazy" />
      <span className="cause-card__tag">Health</span>
      </div>
      <div className="cause-card__body">
      <h3>Free Health Camps &amp; Eye Camps</h3>
      <p>
      Organised in co-operation with the Lions Club and KRYP. The trust has also assisted many
      other NGOs and outfits in organising free health check-ups and eye camps.
      </p>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/cause-blood.jpg" alt="Volunteers and children at a trust event" loading="lazy" />
      <span className="cause-card__tag">Health</span>
      </div>
      <div className="cause-card__body">
      <h3>Blood Donation Camps</h3>
      <p>
      Run with the co-operation of the Lions Club and KRYP, and in support of other NGOs
      organising their own camps.
      </p>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/cause-women.jpg" alt="The founder meeting a woman supported by the trust" loading="lazy" />
      <span className="cause-card__tag">Women</span>
      </div>
      <div className="cause-card__body">
      <h3>Justice for Aggrieved Women</h3>
      <p>
      Many a time the trust has helped affected, cheated and aggrieved women get justice from
      the trouble givers, through the assistance of local police stations and advocates —
      enabling them to lead a peaceful and stress-free life.
      </p>
      <a className="link-arrow" href="/contact/">Ask us for help
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      <article className="cause-card" data-reveal="">
      <div className="cause-card__media">
      <img src="/assets/img/cause-livelihood.jpg" alt="Young people supported into work by the trust" loading="lazy" />
      <span className="cause-card__tag">Livelihood</span>
      </div>
      <div className="cause-card__body">
      <h3>Livelihood Placement</h3>
      <p>
      Placing women and youth into dignified, sustainable work — so families can stand on their
      own feet and children can stay in school.
      </p>
      <a className="link-arrow" href="#opportunities">See the fields we place in
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </a>
      </div>
      </article>

      </div>
      </div>
      </section>

      {/* ============ Recognition ============ */}
      <section className="section" id="recognition">
      <div className="shell split split--wide-right">

      <div className="split__media media-cluster" data-reveal="left">
      <div className="frame frame--wide">
      <img src="/assets/img/gallery-16.jpg" alt="Lion Dr. S. Sathish with children of the trust receiving certificates" loading="lazy" />
      </div>
      <span className="frame-outline" aria-hidden="true"></span>
      </div>

      <div className="split__body">
      <span className="eyebrow" data-reveal="">Recognition</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>Honoured for the Work</h2>

      <div className="stack" data-reveal="" style={{ "--d": "160" } as React.CSSProperties}>
      <p>
      Many NGOs — including the Lions Club, Kannada Sahitya Parishath and other social service
      organizations — have honoured our Founder Trustee Lion Dr. S. Sathish with varieties of
      Achievers Award, the Kempegowda Award from BBMP, Doctorates and Recognition Certificates
      in appreciation of his valuable services.
      </p>
      <p>
      In recognition of these services, the Lions Club of Bangalore East conferred on him the
      Presidency of Lions Orchards Bangalore East. Many MLAs, Corporators and other leaders
      have appreciated the services rendered — and through the press and social media the
      trust&apos;s work has become known across the State.
      </p>
      </div>
      </div>

      </div>
      </section>

      {/* ============ Livelihood fields ============ */}
      <section className="section section--cream" id="opportunities">
      <div className="shell">
      <div className="section-head section-head--center">
      <span className="eyebrow eyebrow--center" data-reveal="">Livelihood Support</span>
      <h2 data-reveal="" style={{ "--d": "80" } as React.CSSProperties}>We Provide Opportunity in the Field Of</h2>
      <p data-reveal="" style={{ "--d": "150" } as React.CSSProperties}>
      Placing trained women and youth into dignified, sustainable work — so families can stand
      on their own feet and children can stay in school.
      </p>
      </div>

      <div className="services">
      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/housekeeping.png" alt="House keeping staff with a broom" width="40" height="40" loading="lazy" />
      </div>
      <h3>House Keeping F &amp; M</h3>
      <p>Trained female &amp; male staff</p>
      </article>

      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/home-nurse.png" alt="A nurse caring for a patient at home" width="40" height="40" loading="lazy" />
      </div>
      <h3>Home Nurses</h3>
      <p>Round-the-clock home care</p>
      </article>

      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/baby-sitting.png" alt="An adult minding a small child" width="40" height="40" loading="lazy" />
      </div>
      <h3>Baby Sitting</h3>
      <p>Compassionate child minders</p>
      </article>

      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/beautician.png" alt="A beautician at work" width="40" height="40" loading="lazy" />
      </div>
      <h3>Beautician</h3>
      <p>Salon &amp; grooming skills</p>
      </article>

      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/patient-care.png" alt="Hands holding a heart" width="40" height="40" loading="lazy" />
      </div>
      <h3>Patient Care</h3>
      <p>Attendants &amp; caregivers</p>
      </article>

      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/drivers.png" alt="A steering wheel" width="40" height="40" loading="lazy" />
      </div>
      <h3>Drivers Jobs</h3>
      <p>Licensed, verified drivers</p>
      </article>

      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/security.png" alt="A security guard with a shield" width="40" height="40" loading="lazy" />
      </div>
      <h3>Security</h3>
      <p>Trained security personnel</p>
      </article>

      <article className="service" data-reveal="scale">
      <div className="service__icon" aria-hidden="true">
      <img src="/assets/img/icons/more.png" alt="Three dots meaning more services" width="40" height="40" loading="lazy" />
      </div>
      <h3>And More</h3>
      <p>Tell us what you need</p>
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
      <h2>Every cause on this page begins with one person saying yes</h2>
      <p>
      Respected general public and well wishers — please bless us and encourage us to serve
      more in the future.
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
