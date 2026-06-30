import { useState, useEffect } from "react";
import "./Thekastory.css";
import footerLogo from "../assets/FooterLogo.png";

/* ── SVG Icons ────────────────────────────────── */
const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconQuote = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.12">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);
const IconTeam = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

/* ── Data ─────────────────────────────────────── */
const PILLARS = [
  {
    num: "01",
    title: "We empower your brand presence",
    desc: "We promote your brand's overall presence through strategic planning, creative content, and focused campaigns, we make sure that your brand's online presence is strong, impactful, and noteworthy.",
  },
  {
    num: "02",
    title: "We make knowledgeable decisions",
    desc: "We consider making knowledgeable decisions primarily based on insightful analytics and metrics. By studying client behaviour, marketplace trends, and campaign performance, we optimize our strategies to deliver maximum outcomes for your logo.",
  },
  {
    num: "03",
    title: "We create irresistible content",
    desc: "Content is king in the digital marketing world, and we specialise in creating persuasive content that aligns with your audience. From social media posts to engaging blog articles and videos we tailor our content to reflect your brand's voice and values.",
  },
  {
    num: "04",
    title: "We Drive digital growth",
    desc: "We have a strong passion for driving digital growth for our clients while focusing on innovation and creativity, along with custom strategies to help your brand grow in the online world. We aim to increase website traffic, grow your social media following, generate leads, and boost sales.",
  },
];

const STATS = [
  { val: "5+",   label: "Years in business",        sub: "We pride ourselves on our proven track record." },
  { val: "10/10", label: "Award winning campaigns", sub: "Quality is at the heart of everything we do." },
  { val: "9/10",  label: "Global reach",            sub: "Our dedicated support team is always ready to assist you." },
];

const VALUES = [
  {
    title: "Transparency and Honesty",
    desc: "One of the important values that we keep in our work always is to maintain transparency and honesty within our agency and with our clients.",
  },
  {
    title: "Empowering Growth",
    desc: "Our focus is on delivering real results that drive your business needs. We create and use strategies that are result-focused particularly according to the needs of the business.",
  },
  {
    title: "Collaboration Promoted",
    desc: "Collaboration is an essential part of our techniques at Social Theka. We believe in teamwork and partnership to achieve shared dreams.",
  },
  {
    title: "High quality and long-term Impact",
    desc: "Making a high-quality and long-term impact our core value at social theka. We aim to create long-term effects on our client's businesses so that they can grow quickly and easily without using any shortcuts.",
  },
  {
    title: "Community Connection",
    desc: "We believe that growth goes hand in hand without us our clients cannot grow and without our clients, we cannot grow so belive in empowering our clients with our growth.",
  },
  {
    title: "Adaptability & Flexibility",
    desc: "We believe that adaptability and flexibility are the keys to success without keeping them as our values we won't be able to survive long term so to survive long term we change things according to the requirements.",
  },
];

const TEAM = [
  {
    initials: "RR",
    name: "Rozy Rajpal",
    role: "CEO / Founder",
    desc: "Meet Rozy Rajpal, the mind behind Social Theka's innovative digital marketing strategies. In the role of as CEO, Rozy leads a team of dedicated professionals who create unique approaches that help brands flourish in the world of digital media.",
  },
  {
    initials: "MN",
    name: "Manjul Nagar",
    role: "COO / CFO",
    desc: "Manjul's leadership, which serves as the backbone of Social Theka, is essential to our success as we continue development in the rapidly evolving digital sector. His constant commitment to productivity and creativity makes sure that our team operates as an integrated whole to deliver our clients with outstanding results.",
  },
];

/* ── FOOTER ───────────────────────────────────── */
const FOOTER_SERVICES = ["SEO Services", "Social Media Marketing", "PPC Advertising", "Website Development", "Content Writing", "Link Building"];
const FOOTER_COMPANY  = ["About Us", "Theka Story", "Case Studies", "Blog", "Careers"];
const FOOTER_CONTACT  = ["hello@socialtheka.com", "+91 XXXXX XXXXX", "Chandigarh, India"];
const FOOTER_COLS = [
  { title: "Services", links: FOOTER_SERVICES },
  { title: "Company",  links: FOOTER_COMPANY  },
  { title: "Contact",  links: FOOTER_CONTACT  },
];

function Footer() {
  return (
    <footer className="ts-footer">
      <div className="ts-footer__top">
        <div className="ts-footer__brand">
          <div className="ts-footer__logo-wrap">
            <img src={footerLogo} alt="Social Theka" className="ts-footer__logo-img" />
          </div>
          <p className="ts-footer__tagline">
            Turning brands into market leaders. Based in Chandigarh. Serving India, USA, UK, Dubai &amp; Singapore.
          </p>
          <div className="ts-footer__socials">
            <a href="https://www.linkedin.com/company/socialtheka/" target="_blank" rel="noreferrer" className="ts-footer__soc" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com/socialtheka" target="_blank" rel="noreferrer" className="ts-footer__soc" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/officialsocialtheka" target="_blank" rel="noreferrer" className="ts-footer__soc" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://x.com/SocialTheka" target="_blank" rel="noreferrer" className="ts-footer__soc" aria-label="Twitter / X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title} className="ts-footer__col">
            <div className="ts-footer__col-title">{col.title}</div>
            <div className="ts-footer__links">
              {col.links.map((link) => (
                <a key={link} href="#" className="ts-footer__link">{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="ts-footer__bottom">
        <span>© 2026 Social Theka. All rights reserved.</span>
        <div className="ts-footer__bottom-links">
          {["Privacy Policy", "Terms", "Cookies"].map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── SCROLL TO TOP ────────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return visible ? (
    <button
      className="ts-scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}

/* ── Component ────────────────────────────────── */
export default function ThekaStory() {
  return (
    <>
    <div className="ts-page">

      {/* ══ HERO ══════════════════════════════════ */}
      <section className="ts-hero">
        {/* Background grid pattern */}
        <div className="ts-hero__bg-grid" />

        <div className="ts-hero__inner">
          {/* LEFT */}
          <div className="ts-hero__left">
            <div className="ts-hero__badge">
              <span className="ts-hero__badge-dot" />
              Theka Story
            </div>
            <h1 className="ts-hero__h1">
              At Social Theka, We Deliver{" "}
              <span className="ts-red">Profits with Marketing Magic,</span>{" "}
              Making Your Brand Irresistible.
            </h1>
            <p className="ts-hero__sub">
              Meet The Team Behind The Screens — the people who turn ideas into revenue, chaos into strategy, and brands into market leaders.
            </p>
            <div className="ts-hero__actions">
              <a href="#team" className="ts-hero__cta-primary">
                Meet The Squad <IconArrow />
              </a>
              <a href="#story" className="ts-hero__cta-outline">
                Our Story
              </a>
            </div>
            {/* Mini stat strip */}
            <div className="ts-hero__stats-strip">
              <div className="ts-hero__stat-item">
                <span className="ts-hero__stat-num">5+</span>
                <span className="ts-hero__stat-lbl">Years</span>
              </div>
              <div className="ts-hero__stat-divider" />
              <div className="ts-hero__stat-item">
                <span className="ts-hero__stat-num">500+</span>
                <span className="ts-hero__stat-lbl">Brands Scaled</span>
              </div>
              <div className="ts-hero__stat-divider" />
              <div className="ts-hero__stat-item">
                <span className="ts-hero__stat-num">98%</span>
                <span className="ts-hero__stat-lbl">Retention</span>
              </div>
            </div>
          </div>

          {/* RIGHT — pillar cards */}
          <div className="ts-hero__right">
            <div className="ts-hero__cards-label">What We Stand For</div>
            <div className="ts-hero__cards-grid">
              {PILLARS.map((p) => (
                <div key={p.num} className="ts-pillar-card">
                  <div className="ts-pillar-card__num">{p.num}</div>
                  <h3 className="ts-pillar-card__title">{p.title}</h3>
                  <p className="ts-pillar-card__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ORIGIN STORY ══════════════════════════ */}
      <section className="ts-section ts-section--white" id="story">
        <div className="ts-section__inner ts-story">
          <div className="ts-story__left">
            <div className="ts-eyebrow">Social Theka Story</div>
            <h2 className="ts-section__title">The Midnight Idea That Changed Everything</h2>
            <div className="ts-story__quote-mark"><IconQuote /></div>
            <p className="ts-story__para">
              Sitting in the stillness of a midnight hour, sipping on coffee and involved in a
              conversation, the idea of Social Theka was born. It all began with a simple desire
              to change the way marketing was approached with a vision to become the{" "}
              <strong>Best Digital Marketing Agency</strong> — we imagined a space where creativity
              flourished and success was celebrated collectively.
            </p>
            <p className="ts-story__para">
              We were enthusiastic about innovation and making a difference, as we knew that virtual
              marketing calls for a dynamic and ahead-wondering approach that adapts to the online
              global's consistent evolution. So we created Social Theka to be a hub of creativity
              and collaboration wherein we wanted to percentage thoughts, craft unique strategies,
              and build relationships through mutual admiration and acceptance as true.
            </p>
            <p className="ts-story__para">
              We take pride in being the <strong>top Digital Marketing Services in India</strong>,
              and we attempt to guide the industry in innovation and excellence. Our greatest
              pleasure comes from undoubtedly impacting the people we serve. Join us at Social
              Theka to enjoy endless creativity and collaboration that ends in achievement.
            </p>
          </div>
          <div className="ts-story__right">
            <div className="ts-story__card ts-story__card--dark">
              <div className="ts-story__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
              </div>
              <div className="ts-story__card-title">Born at Midnight</div>
              <div className="ts-story__card-desc">Over coffee, a simple conversation sparked a revolution in digital marketing.</div>
            </div>
            <div className="ts-story__card ts-story__card--red">
              <div className="ts-story__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="ts-story__card-title">Top Agency in India</div>
              <div className="ts-story__card-desc">Proudly among the top digital marketing services in India, driving innovation and excellence.</div>
            </div>
            <div className="ts-story__card ts-story__card--light">
              <div className="ts-story__card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="ts-story__card-title">Built for Collaboration</div>
              <div className="ts-story__card-desc">A hub where creativity, teamwork and mutual trust fuel every campaign.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════ */}
      <section className="ts-section ts-section--gray">
        <div className="ts-section__inner">
          <div className="ts-section__head">
            <div className="ts-eyebrow">Leading company so far</div>
            <h2 className="ts-section__title">Numbers That Speak</h2>
          </div>
          <div className="ts-stats__grid">
            {STATS.map((s) => (
              <div key={s.label} className="ts-stat-card">
                <div className="ts-stat-card__val">{s.val}</div>
                <div className="ts-stat-card__label">{s.label}</div>
                <div className="ts-stat-card__sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR VALUES ════════════════════════════ */}
      <section className="ts-section ts-section--white">
        <div className="ts-section__inner">
          <div className="ts-section__head">
            <div className="ts-eyebrow">Our Values</div>
            <h2 className="ts-section__title">What We Stand For</h2>
            <p className="ts-section__sub">
              These aren't just words on a wall — they're the principles that guide every decision,
              every campaign, and every relationship we build.
            </p>
          </div>
          <div className="ts-values__grid">
            {VALUES.map((v, i) => (
              <div key={i} className="ts-value-card">
                <div className="ts-value-card__icon"><IconCheck /></div>
                <div>
                  <div className="ts-value-card__title">{v.title}</div>
                  <div className="ts-value-card__desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR AIM ═══════════════════════════════ */}
      <section className="ts-section ts-section--dark">
        <div className="ts-section__inner ts-aim">
          <div className="ts-aim__left">
            <div className="ts-eyebrow ts-eyebrow--light">Our Aim to be better</div>
            <h2 className="ts-aim__title">
              Success That Goes Beyond a Service
            </h2>
          </div>
          <div className="ts-aim__right">
            <p className="ts-aim__para">
              We understand that our satisfaction is closely linked to the success of our clients.
              As a result, we handle every task with commitment and dedication. Our objective is to
              establish strong relationships, encourage growth, and achieve shared goals
              collaboratively.
            </p>
            <p className="ts-aim__para">
              It's not just about providing a service, but about developing connections and working
              together towards a common purpose.
            </p>
            <a href="#contact" className="ts-aim__cta">
              Start Your Journey <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ══ TEAM ══════════════════════════════════ */}
      <section className="ts-section ts-section--white" id="team">
        <div className="ts-section__inner">
          <div className="ts-section__head">
            <div className="ts-eyebrow">
              <span className="ts-eyebrow__icon"><IconTeam /></span>
              Meet the squad
            </div>
            <h2 className="ts-section__title">Meet the Faces Behind the Screens</h2>
            <p className="ts-section__sub">
              Passionate about driving results for our clients with their creative minds and expertise.
            </p>
          </div>
          <div className="ts-team__grid">
            {TEAM.map((m) => (
              <div key={m.name} className="ts-team-card">
                <div className="ts-team-card__avatar">
                  <span>{m.initials}</span>
                  <div className="ts-team-card__avatar-ring" />
                </div>
                <div className="ts-team-card__body">
                  <div className="ts-team-card__stars">
                    {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                  </div>
                  <div className="ts-team-card__name">{m.name}</div>
                  <div className="ts-team-card__role">{m.role}</div>
                  <p className="ts-team-card__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    <Footer />
    <ScrollToTop />
    </>
  );
}