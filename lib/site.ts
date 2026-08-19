/**
 * Single source of truth for everything the trust publishes about itself.
 *
 * Every value here is taken from the trust's own material (shruthikacharitabletrust.com
 * and the donation poster in assets/img/qr-2.png). Nothing is invented — see the
 * "Before it goes live" section of README.md for the items still awaiting confirmation.
 */

export const site = {
  name: "Shruthika Women's and Children's Welfare Trust",
  shortName: "Shruthika Trust",
  registeredName: "SHRUTHIKA WOMEN'S AND CHILDREN'S WELFARE TRUST (R.)",
  abbreviation: "SWCWT",
  tagline: "Serving Humanity is Considered to be Serving God.",
  founder: {
    name: "Lion Dr. S. Sathish",
    role: "Founder President",
  },
  email: "shruthikacharitabletrust2@gmail.com",
  phones: [
    { display: "+91 78999 15832", href: "tel:+917899915832" },
    { display: "+91 96637 14362", href: "tel:+919663714362" },
  ],
  address: {
    lines: [
      "No. 356 & 358, GNR East Tower,",
      "7th Main Road, Near Shiva Parvathi",
      "Kalyana Mantapa, OMBR Layout,",
      "Banaswadi, Bangalore – 560 043,",
      "Karnataka, India",
    ],
    mapsQuery:
      "No.356+358+GNR+East+Tower+7th+Main+Road+Shiva+Parvathi+Kalyana+Mantapa+OMBR+Layout+Banaswadi+Bangalore+560043",
  },
  bank: {
    accountName: "Shruthika Women's and Children's Welfare Trust",
    accountNumber: "39783628220",
    bankName: "State Bank of India",
    branch: "Kacharakanahalli, Bangalore, Karnataka, India",
    // TODO: the trust's own banner shows IFSC SBIN0007988. Awaiting confirmation from
    // the trust before publishing — a wrong IFSC misroutes money.
    ifsc: null as string | null,
  },
  socials: [
    // TODO: replace with the trust's real profile URLs.
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Our Causes", href: "/causes/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Donate", href: "/donate/" },
  { label: "Contact Us", href: "/contact/" },
];

/** The eight fields the trust places trained women and youth into. */
export const opportunities = [
  { title: "House Keeping F & M", note: "Trained female & male staff", icon: "housekeeping" },
  { title: "Home Nurses", note: "Round-the-clock home care", icon: "nurse" },
  { title: "Baby Sitting", note: "Compassionate child minders", icon: "babysitting" },
  { title: "Beautician", note: "Salon & grooming skills", icon: "beautician" },
  { title: "Patient Care", note: "Attendants & caregivers", icon: "patientcare" },
  { title: "Drivers Jobs", note: "Licensed, verified drivers", icon: "driver" },
  { title: "Security", note: "Trained security personnel", icon: "security" },
  { title: "And More", note: "Tell us what you need", icon: "more" },
] as const;

/** The trust's four stated objectives, verbatim. */
export const objectives = [
  {
    id: "education",
    title: "Education & self-esteem for orphans",
    body: "To help the abandoned orphans and single parent children with a zeal to improve their living skills through education and help them to attain self respect and self esteem.",
  },
  {
    id: "development",
    title: "Overall development & growth",
    body: "To have access with orphans and underprivileged children and indulge in supporting them for their overall development and growth in their life.",
  },
  {
    id: "future",
    title: "A worthier future for the rural poor",
    body: "To ensure a better future for such children and create a worthier future for the children of rural and sub-urban poor parents and earn their meal and continue their education till they get a respectful job to quench their hunger.",
  },
  {
    id: "marriage",
    title: "Community marriage services",
    body: "To provide specialized services in arranging community marriage services with the help of Lions Club, Bengaluru.",
  },
] as const;

/** The 22 photographs on the gallery page. 01–06 also feed the home page strip. */
export const galleryPhotos = Array.from({ length: 22 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/img/gallery-${n}.jpg`,
    alt: `Photograph ${i + 1} of the trust's work in Bengaluru`,
  };
});

export const mission =
  "To provide food, shelter, education, and moral support to children, helping them find the path to a settled and respectful future.";

export const vision =
  "To transform lives in accordance with cultural values, ethics, and human dignity, ensuring a worthier future for suburban and rural poor.";
