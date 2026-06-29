import { useState } from "react";
import "./SEOchandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";

// ── ICONS ──────────────────────────────────────────────────────────────
const IconSearch = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconLink = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);
const IconFileText = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconShop = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const IconMapPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// ── DATA ────────────────────────────────────────────────────────────────

const HERO_CARDS = [
  { icon: <IconMapPin />,    title: "Local SEO",         subtitle: "Dominate local search" },
  { icon: <IconShop />,      title: "E-commerce SEO",    subtitle: "Visibility = Sales" },
  { icon: <IconShield />,    title: "Technical SEO",     subtitle: "Core Web Vitals" },
  { icon: <IconLink />,      title: "Link Building",     subtitle: "Quality backlinks" },
  { icon: <IconFileText />,  title: "Content Strategy",  subtitle: "Rank & convert" },
  { icon: <IconTrendingUp />, title: "150% Growth",      subtitle: "Avg. in 6 months", highlight: true },
];

const SEO_SERVICES = [
  { icon: <IconMapPin />,   title: "Local SEO",                    desc: "Want your customers in Chandigarh, Mohali, Panchkula or wherever from Punjab to find you first? We enhance your Google Business Profile, create local citations and target location-based keywords so that you monopolize local search and Google Maps." },
  { icon: <IconShop />,     title: "E-commerce SEO",               desc: "Running an online store? Optimise product pages, category structure and site navigation, so that your products show when buyers are actually searching. Visibility = Sales, without increasing your advertising costs!" },
  { icon: <IconShield />,   title: "Technical SEO",                desc: "Slow site speed, crawl errors, broken links, poor mobile experience — these are silent ranking killers. Our technical SEO team fixes what's holding your site back and ensures it meets all of Google's Core Web Vitals standards." },
  { icon: <IconFileText />, title: "On-Page Optimization",         desc: "We optimize every page element — meta tags, headings, content, internal links and schema markup — so each page on your website is fully set up to rank well on Google." },
  { icon: <IconLink />,     title: "Off-Page SEO & Link Building", desc: "We build high-quality, relevant backlinks through guest posts, digital PR, and niche outreach — signals that tell Google your site is trustworthy and authoritative." },
  { icon: <IconFileText />, title: "SEO Content Strategy",         desc: "Good content is the backbone of every SEO plan. We create blogs, landing pages, and pillar content optimized for keywords that rank well on Google and turn visitors into customers." },
  { icon: <IconTarget />,   title: "Enterprise SEO",               desc: "Large website? Complex domain structure? Our enterprise SEO solutions handle keyword targeting across hundreds of pages, large-scale content, and complex technical work for brands with thousands of pages." },
  { icon: <IconGlobe />,    title: "International SEO",            desc: "Want to rank in multiple countries? We help your website work across languages and regions with hreflang, geo-targeting, and international keyword strategy — so customers worldwide can find you." },
  { icon: <IconSearch />,   title: "SEO Audit & Reporting",        desc: "We track keyword rankings, organic traffic, and SEO issues regularly. Clear, actionable reports show you what's working, what needs improvement, and where your next growth opportunity is." },
];

const PROCESS = [
  { num: "01", title: "Website Audit",           desc: "We start with a thorough audit of your existing site — identifying technical problems, content gaps, and keywords you're missing out on right now." },
  { num: "02", title: "Competitor Analysis",     desc: "We analyze what your top competitors rank for, their backlinks, and content strategy — then build a plan that puts you ahead of them." },
  { num: "03", title: "Keyword Research",        desc: "We find the exact search terms your customers type into Google — high-volume, high-intent keywords most likely to drive qualified traffic to your site." },
  { num: "04", title: "On-Page Optimization",    desc: "We optimize meta tags, content, URL structure, internal links, and schema on every page so each one is set up to rank." },
  { num: "05", title: "Technical Fixes",         desc: "Crawlability issues, page speed problems, broken links — we resolve everything technical that could be holding back your rankings." },
  { num: "06", title: "Content & Link Building", desc: "Each month we create SEO-driven content and build powerful backlinks — the two most influential factors for achieving strong search performance." },
  { num: "07", title: "SEO Reporting",           desc: "Every month you get clear reports on keyword rankings, organic traffic, leads, and ROI — so you always know exactly what's working." },
  { num: "08", title: "Ongoing Optimization",    desc: "SEO is never finished. We continuously optimize based on data, algorithm updates, and new opportunities so your rankings keep growing month to month." },
];

const PRICING = [
  {
    name: "Starter Plan",
    tag: "Best for small businesses & startups",
    features: [
      "15 Target Keywords",
      "Full On-Page Optimization",
      "Technical SEO Audit",
      "4 Blog Posts/Month",
      "Link Building (Basic)",
      "Google Business Profile Setup",
      "Monthly Ranking Report",
    ],
  },
  {
    name: "Growth Plan",
    tag: "Best for growing businesses",
    highlight: true,
    features: [
      "25+ Target Keywords",
      "Advanced On-Page SEO",
      "Technical SEO Fixes",
      "8 Blog Posts/Month",
      "Guest Post Link Building",
      "Local SEO Optimization",
      "Competitor Tracking",
      "Bi-Weekly Reports",
    ],
  },
  {
    name: "Enterprise Plan",
    tag: "Best for large businesses & agencies",
    features: [
      "50+ Target Keywords",
      "Full Technical SEO Overhaul",
      "12+ Blog Posts/Month",
      "Premium Link Building",
      "International / E-commerce SEO",
      "Dedicated SEO Manager",
      "Weekly Strategy Calls",
      "Custom Reporting Dashboard",
    ],
  },
];

const WHY_CHOOSE = [
  { icon: <IconTrendingUp />, title: "Ongoing Optimization",          desc: "SEO is never done. We optimize your strategy continuously using data, algorithm updates, and new opportunities so your rankings grow month after month." },
  { icon: <IconTarget />,     title: "Custom SEO Strategies",         desc: "No copy-paste, ever. Every SEO campaign is custom-built and tailored to your industry, audience, and business objectives." },
  { icon: <IconSearch />,     title: "Data-Driven Approach",          desc: "All our decisions are based on real data — keyword research, competitor analysis, search intent, and performance metrics — not guesswork." },
  { icon: <IconShield />,     title: "White-Hat SEO Only",            desc: "We apply only white-hat, Google-approved strategies that create permanent rankings. No shortcuts that could penalize your site." },
  { icon: <IconFileText />,   title: "Full Transparency",             desc: "You always know what we're doing and why. Transparent monthly reports, clear communication, and no smoke and mirrors." },
  { icon: <IconStar />,       title: "Proven ROI",                    desc: "Our clients see an average 150% traffic increase in 6 months. We focus on driving organic leads and revenue — not vanity metrics." },
  { icon: <IconUsers />,      title: "Chandigarh-Based Expert Team",  desc: "Our SEO experts are based in Chandigarh and have delivered results for businesses across Punjab, all over India, and international eCommerce brands worldwide." },
];

const FAQS = [
  { q: "What is SEO and why do businesses need it?", a: "SEO (Search Engine Optimization) is how you get your website to show up on Google when people search for what you offer. Without SEO, your competitors get the traffic. With a strong SEO plan, you attract visitors who are actively looking for your product or service — without paying for every click." },
  { q: "How long does it take to see results from SEO?", a: "Most businesses start seeing improvements in rankings and organic traffic within 3–6 months. After 12 months, results are usually substantial. Businesses that stay consistent with SEO long-term consistently outperform those that treat it as a one-time effort." },
  { q: "How much do your SEO services cost?", a: "Our SEO packages are built to fit different budgets — from startups to large enterprises. Pricing depends on your requirements, target keywords, and competition level. We offer transparent, upfront pricing with no hidden fees." },
  { q: "Do you offer local SEO for small businesses?", a: "Yes! Local SEO is one of our core services. We make Google Search and Google Maps work for small businesses so nearby customers find you first — whether you're in Chandigarh, Mohali, Panchkula, or anywhere in India or the US." },
  { q: "What makes Social Theka different from other SEO agencies?", a: "We don't oversell and underdeliver. Every campaign is built around your goals, with full transparency and data-backed decisions. Our Chandigarh-based experts have delivered 500+ projects with a 9.5/10 client satisfaction rate — because we actually get results." },
  { q: "Do you provide SEO services internationally?", a: "Yes. While we're based in Chandigarh, we serve clients across India, the USA, and globally. Whether you want visibility in Punjab, all of India, or international markets — we build a strategy that fits your target audience." },
];

// ── COMPONENT ───────────────────────────────────────────────────────────

export default function SEOChandigarh() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
      <div className="seoc-page">

        {/* ── HERO ── */}
        <section className="seoc-hero">
          <div className="seoc-hero__inner">
            <div className="seoc-hero__left">
              <div className="seoc-hero__badge">
                <span className="seoc-hero__badge-dot" />
                SEO Services · Chandigarh
              </div>
              <h1 className="seoc-hero__title">
                Affordable SEO Services<br />
                <span className="seoc-hero__title-accent">Trusted by 500+ Businesses</span>
              </h1>
              <p className="seoc-hero__desc">
                If your website isn't on Google, your competitors are getting your customers. Social Theka delivers result-oriented SEO that improves rankings, drives organic traffic, and grows sales — without burning budget on ads.
              </p>
              <p className="seoc-hero__desc">
                Whether you're a startup in Chandigarh, a small business in Punjab, or a brand scaling globally — we build an SEO strategy specifically around your goals.
              </p>
              <div style={{ marginTop: "28px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#contact" className="seoc-btn-primary">
                  Get Started <IconArrowRight />
                </a>
                <a href="#services" className="seoc-btn-outline">
                  Our Services
                </a>
              </div>
            </div>

            <div className="seoc-hero__right">
              {HERO_CARDS.map((card, i) => (
                <div key={i} className={`seoc-hero__card${card.highlight ? " seoc-hero__card--highlight" : ""}`}>
                  <div className={`seoc-hero__card-icon${card.highlight ? " seoc-hero__card-icon--highlight" : ""}`}>
                    {card.icon}
                  </div>
                  <div className="seoc-hero__card-content">
                    <p className="seoc-hero__card-title">{card.title}</p>
                    <p className="seoc-hero__card-subtitle">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats bar - below the hero grid */}
          <div className="seoc-hero__stats-wrapper">
            <div className="seoc-hero__stats">
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">250+</span>
                <span className="seoc-hero__stat-label">SEO Projects Delivered</span>
              </div>
              <div className="seoc-hero__stat-divider" />
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">70K+</span>
                <span className="seoc-hero__stat-label">Keywords Ranked #1</span>
              </div>
              <div className="seoc-hero__stat-divider" />
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">150%</span>
                <span className="seoc-hero__stat-label">Avg. Traffic Growth in 6 Months</span>
              </div>
              <div className="seoc-hero__stat-divider" />
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">9.5/10</span>
                <span className="seoc-hero__stat-label">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT / WHY US ── */}
        <section className="seoc-performance">
          <div className="seoc-performance__inner">
            <div className="seoc-performance__header">
              <div className="seoc-badge">
                <IconStar /> Best SEO Agency in Chandigarh
              </div>
              <h2 className="seoc-performance__title">Proven Growth Results. No Guesswork.</h2>
              <p className="seoc-performance__subtitle">
                Social Theka is an ISO-certified, full-service SEO agency that has helped thousands of businesses — from small businesses across Punjab to enterprises in the USA — build a lasting presence on search engines.
              </p>
            </div>
            <div className="seoc-performance__grid">
              <div className="seoc-performance__card">
                <div className="seoc-performance__icon"><IconShield /></div>
                <h3 className="seoc-performance__card-title">ISO Certified & Data-Driven</h3>
                <p className="seoc-performance__card-desc">Every strategy we build is based on real data — thorough keyword research, competitor analysis, and a genuine understanding of your industry and target audience. No guesswork, ever.</p>
              </div>
              <div className="seoc-performance__card">
                <div className="seoc-performance__icon"><IconTrendingUp /></div>
                <h3 className="seoc-performance__card-title">One Cohesive Plan. Compounding Results.</h3>
                <p className="seoc-performance__card-desc">We combine on-page SEO, off-page SEO, technical SEO, and content marketing into one unified strategy that delivers consistent, compounding growth over time.</p>
              </div>
              <div className="seoc-performance__card">
                <div className="seoc-performance__icon"><IconTarget /></div>
                <h3 className="seoc-performance__card-title">Goal-Oriented Campaigns</h3>
                <p className="seoc-performance__card-desc">Your goals shape every decision we make. Whether it's more traffic, more leads, or more sales — we build campaigns designed to hit what actually matters to your business.</p>
              </div>
              <div className="seoc-performance__card">
                <div className="seoc-performance__icon"><IconSearch /></div>
                <h3 className="seoc-performance__card-title">Get Found by the Right People</h3>
                <p className="seoc-performance__card-desc">Our goal is simple — get you in front of people who are already searching for what you offer. Qualified traffic that converts, not just numbers on a dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO SERVICES ── */}
        <section className="seoc-platforms" id="services">
          <div className="seoc-platforms__inner">
            <div className="seoc-platforms__header">
              <div className="seoc-badge">What We Do</div>
              <h2 className="seoc-platforms__title">Our SEO Services — Everything You Need to Rank</h2>
              <p className="seoc-platforms__subtitle">
                From local visibility to enterprise-scale search — we cover every dimension of SEO under one roof.
              </p>
            </div>
            <div className="seoc-platforms__grid">
              {SEO_SERVICES.map((s, i) => (
                <div key={i} className="seoc-platform-card">
                  <div className="seoc-platform-card__header">
                    <div className="seoc-platform-card__icon">{s.icon}</div>
                    <h3 className="seoc-platform-card__name">{s.title}</h3>
                  </div>
                  <p className="seoc-platform-card__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="seoc-process">
          <div className="seoc-process__inner">
            <div className="seoc-process__header">
              <div className="seoc-badge">How We Work</div>
              <h2 className="seoc-process__title">Our SEO Process — Built for Faster Results</h2>
              <p className="seoc-process__subtitle">
                A structured, transparent process that removes guesswork and drives consistent growth.
              </p>
            </div>
            <div className="seoc-process__grid">
              {PROCESS.map((step, i) => (
                <div key={i} className="seoc-process__card">
                  <span className="seoc-process__number">{step.num}</span>
                  <div className="seoc-process__content">
                    <h3 className="seoc-process__card-title">{step.title}</h3>
                    <p className="seoc-process__card-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="seoc-pricing-section">
          <div className="seoc-pricing-section__inner">
            <div className="seoc-pricing-section__header">
              <div className="seoc-badge">Pricing</div>
              <h2 className="seoc-pricing-section__title">Affordable SEO Packages — Transparent Pricing</h2>
              <p className="seoc-pricing-section__subtitle">
                Flexible plans built around your budget and business goals. No hidden fees, no long-term lock-ins.
              </p>
            </div>
            <div className="seoc-pricing__grid">
              {PRICING.map((plan, i) => (
                <div key={i} className={`seoc-pricing-card${plan.highlight ? " seoc-pricing-card--highlight" : ""}`}>
                  <div className="seoc-pricing-card__name">{plan.name}</div>
                  <div className="seoc-pricing-card__tag">{plan.tag}</div>
                  <ul className="seoc-pricing-card__features">
                    {plan.features.map((f, j) => (
                      <li key={j}>
                        <span className="seoc-pricing-card__check"><IconCheck /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={plan.highlight ? "seoc-btn-primary" : "seoc-btn-outline"}>
                    Get Started <IconArrowRight />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="seoc-excellence">
          <div className="seoc-excellence__inner">
            <div className="seoc-excellence__header">
              <div className="seoc-badge">
                <IconStar /> Why Choose Us
              </div>
              <h2 className="seoc-excellence__title">Why Businesses Choose Social Theka for SEO</h2>
            </div>
            <div className="seoc-excellence__grid">
              {WHY_CHOOSE.map((item, i) => (
                <div key={i} className="seoc-excellence__card">
                  <div className="seoc-excellence__icon">{item.icon}</div>
                  <h3 className="seoc-excellence__card-title">{item.title}</h3>
                  <p className="seoc-excellence__card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="seoc-faq">
          <div className="seoc-faq__inner">
            <div className="seoc-faq__header">
              <div className="seoc-badge">FAQ</div>
              <h2 className="seoc-faq__title">Frequently Asked Questions about SEO</h2>
            </div>
            <div className="seoc-faq__list">
              {FAQS.map((item, i) => (
                <div key={i} className={`seoc-faq__item${openFaq === i ? " seoc-faq__item--open" : ""}`}>
                  <button className="seoc-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className="seoc-faq__icon">⌄</span>
                  </button>
                  {openFaq === i && <div className="seoc-faq__a">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="seoc-cta">
          <div className="seoc-cta__inner">
            <div className="seoc-cta__content">
              <h2 className="seoc-cta__title">Ready to Grow Your Search Rankings?</h2>
              <p className="seoc-cta__subtitle">
                Let's build your SEO strategy today — for results that last long after your investment.
              </p>
            </div>
            <a href="#contact" className="seoc-btn-primary seoc-btn-primary--lg">
              Start Your SEO Journey <IconArrowRight />
            </a>
          </div>
        </section>

      </div>
    </ServiceLayout>
  );
}