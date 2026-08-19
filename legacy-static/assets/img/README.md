# Photos

**Every slot below is already filled.** The photographs were taken from the trust's own live
site (shruthikacharitabletrust.com), then resized and recompressed for the web — 49 files,
about 9 MB in total. `logo.png` is the trust's official emblem and `qr-1.png` / `qr-2.png` are
the trust's own donation QR images.

To replace any picture, drop a new file over the old one using **exactly the same filename** —
the pages pick it up with no code change. If a file is ever missing, the layout falls back to a
warm gradient placeholder, so nothing breaks.

## Home page

| Filename              | Where it appears              | Suggested size | Notes                                    |
| --------------------- | ----------------------------- | -------------- | ---------------------------------------- |
| `hero.jpg`            | Home hero background          | 2400 × 1400    | Children's faces, bright; text sits left  |
| `founder.jpg`         | About section, tall portrait  | 900 × 1200     | Lion Dr. S. Sathish                       |
| `founder-avatar.jpg`  | Founder card, small circle    | 300 × 300      | Head-and-shoulders crop                   |
| `mission.jpg`         | Mission & Vision section      | 1400 × 960     | Activity / classroom shot                 |
| `children.jpg`        | "Every Child Deserves…"       | 1200 × 1000    | Children learning or playing              |
| `cta.jpg`             | Donate call-to-action band    | 2000 × 900     | Used at low opacity behind the text       |

## Inner-page banners

Each inner page has a `.page-hero` banner whose photograph is set in `assets/css/style.css`
(§20). The same file is also the page's `og:image`, so it is what appears when somebody shares
the page on WhatsApp, Facebook or LinkedIn.

| Filename               | Where it appears      | Suggested size | Notes                                                         |
| ---------------------- | --------------------- | -------------- | ------------------------------------------------------------- |
| `banner-about.jpg`     | About page banner     | 2400 × 900     | Heading sits bottom-left — keep faces out of the lower-left third |
| `banner-causes.jpg`    | Our Causes banner     | 2400 × 900     | As above                                                       |
| `banner-gallery.jpg`   | Gallery banner        | 2400 × 900     | As above                                                       |
| `banner-donate.jpg`    | Donate banner         | 2400 × 900     | As above                                                       |
| `banner-contact.jpg`   | Contact Us banner     | 2400 × 900     | As above                                                       |

A dark gradient is laid over every banner, so a slightly bright original works best.

## About page

| Filename               | Where it appears                        | Suggested size | Notes                                  |
| ---------------------- | --------------------------------------- | -------------- | -------------------------------------- |
| `founder-service.jpg`  | Founder's journey, above the timeline   | 1400 × 960     | A service or relief moment             |

(`founder.jpg` and `founder-avatar.jpg` from the home-page table are reused here.)

## Our Causes page

All nine crop to **16:11** except the portrait, which is 3:4.

| Filename                | Where it appears                | Suggested size | Notes                                  |
| ----------------------- | ------------------------------- | -------------- | -------------------------------------- |
| `cause-care.jpg`        | "We Can Help Children Survive!" | 900 × 1200     | Portrait (3:4)                          |
| `cause-shelter.jpg`     | Shelter & Daily Care card       | 1400 × 960     |                                         |
| `cause-education.jpg`   | Education & School Supplies     | 1400 × 960     |                                         |
| `cause-marriage.jpg`    | Free Community Mass Marriages   | 1400 × 960     |                                         |
| `cause-health.jpg`      | Free Health & Eye Camps         | 1400 × 960     |                                         |
| `cause-blood.jpg`       | Blood Donation Drives           | 1400 × 960     |                                         |
| `cause-culture.jpg`     | Cultural Celebrations           | 1400 × 960     |                                         |
| `cause-women.jpg`       | Women's Justice Advocacy        | 1400 × 960     | No identifiable faces of women seeking help |
| `cause-livelihood.jpg`  | Livelihood Placement            | 1400 × 960     |                                         |

## Gallery — one set for the whole site

| Filename                | Where it appears                              | Suggested size | Notes                                           |
| ----------------------- | --------------------------------------------- | -------------- | ----------------------------------------------- |
| `gallery-01.jpg` … `gallery-22.jpg` | Gallery page grid + lightbox      | 1200 × 1200    | Zero-padded two digits. Square crops work best.  |

`gallery-01.jpg` … `gallery-06.jpg` are **also** the six tiles in the home page's preview strip,
so no photograph ever has to be supplied twice under two names. Adding a 23rd photo: see the
step-by-step comment at the top of the grid in `gallery.html`.

## Donate page

| Filename              | Where it appears                | Suggested size | Notes                                                              |
| --------------------- | ------------------------------- | -------------- | ------------------------------------------------------------------ |
| `donate-support.jpg`  | "Where Your Giving Goes"        | 1400 × 960     |                                                                     |
| `qr-1.png`            | Scan the QR Code to Donate      | 600 wide       | The trust's SBI UPI QR — reads "Shruthika Welfare trust", State Bank of India **8220**, UPI ID `enterprisesshruthika131@oksbi`. The 8220 matches A/c 39783628220. |
| `qr-2.png`            | Scan the QR Code to Donate      | 700 wide       | The trust's printed donation poster (photo, phone numbers, bank details and a second copy of the QR). |

Kept as PNG rather than JPEG so the QR squares stay sharp and scannable.

---

`logo.png` is the trust's **official emblem**, used in the header, footer, preloader and favicon.
`logo.svg` is a hand-drawn stand-in from the first build; nothing references it any more and it
can be deleted.

**Tips**
- Save JPEGs at ~75–80% quality and keep each under ~400 KB so the site stays fast.
- Faces should be roughly centred — the hero crops from `center 32%`.
- Always keep written consent on file before publishing photographs of children.
