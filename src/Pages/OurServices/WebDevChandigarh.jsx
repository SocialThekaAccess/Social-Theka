import { useState } from "react";
import { Link } from "react-router-dom";
import "./WebDevChandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";

// ── ICONS ──────────────────────────────────────────────────────────────
const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const IconMobile = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
);
const IconShop = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
const IconRefresh = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
);
const IconLayout = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/></svg>
);
const IconSearch = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

// ── DATA ────────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: <IconCode />,    name: "Custom Website Development",  desc: "We don't use random templates. Every website is built to fit your specific needs, showing your brand's personality uniquely." },
  { icon: <IconMobile />,  name: "Responsive Web Design",       desc: "With most users browsing on mobile, we make sure your site looks great and works perfectly on all phones, tablets, and desktops." },
  { icon: <IconShield />,  name: "PHP Development",             desc: "We use PHP and reliable technologies to build robust, scalable websites that can grow without performance issues." },
  { icon: <IconShop />,    name: "E-commerce Development",      desc: "Planning to sell online? We build e-commerce websites that are easy to manage and simple for users to shop from — smooth from product to checkout." },
  { icon: <IconRefresh />, name: "Website Redesign Services",   desc: "If your website looks outdated or isn't performing well, we redesign it — improving both the look and the functionality for better results." },
  { icon: <IconLayout />,  name: "Landing Page Development",    desc: "Running ads or campaigns? We create focused landing pages with one goal — getting leads or conversions from your traffic." },
];

const WEBSITE_TYPES = [
  { icon: <IconUsers />,  title: "Business Websites",  desc: "Perfect for companies that want to show their services and build trust online. Simple, clean, and focused on giving the right information." },
  { icon: <IconShop />,   title: "E-commerce Stores",  desc: "We design e-commerce sites where clients can browse merchandise and complete transactions. Everything is made to ensure the purchasing process runs smoothly." },
  { icon: <IconStar />,   title: "Portfolio Websites", desc: "Perfect for people or organizations looking to display their work. It helps present your projects professionally." },
  { icon: <IconLayout />, title: "Landing Pages",      desc: "Single pages designed for campaigns or ads. They focus on one goal — getting leads or conversions." },
  { icon: <IconCode />,   title: "Custom Solutions",   desc: "If you need something specific, we build it as per your requirements. This gives you flexibility without limiting your ideas." },
];

const WHY_US = [
  { icon: <IconLayout />, title: "Simple & User-Friendly Designs", desc: "We don't make things confusing. Users should feel comfortable using your website from the moment they land on it." },
  { icon: <IconMobile />, title: "Mobile-First Approach",          desc: "We design keeping mobile users in mind from the start — because most of your visitors are on their phones." },
  { icon: <IconZap />,    title: "Focus on Performance",           desc: "A website should load fast and run smoothly. That's non-negotiable for us on every project we take." },
  { icon: <IconShield />, title: "Clear Communication",            desc: "You'll always know what's happening. No guesswork, no surprises — just regular updates throughout the project." },
  { icon: <IconSearch />, title: "SEO-Friendly Development",       desc: "We build with clean code, fast loading, and proper structure so search engines can find and rank your website effectively." },
  { icon: <IconTarget />, title: "Ongoing Support",                desc: "Even after the website is live, we're here if you need changes or help. We stay available for updates and support." },
];

const PROCESS = [
  { step: "01", title: "Consultation",          desc: "We find out what your business is about, what your goals are, and what you need from a website." },
  { step: "02", title: "Requirement Analysis",  desc: "We go deeper into the details — features, pages, and functionality — and plan everything to match your business needs." },
  { step: "03", title: "Concept & Planning",    desc: "We create a proper plan including structure, timeline, and approach to keep the project organized." },
  { step: "04", title: "UI/UX Design",          desc: "We create a clean, easy-to-use layout so visitors can navigate your website without confusion." },
  { step: "05", title: "Development",           desc: "We build your website based on the approved design — working properly on desktop, phone, and tablet." },
  { step: "06", title: "Implementation",        desc: "All tools, features, and backend configurations are added so your website functions properly for real customers." },
  { step: "07", title: "Testing",               desc: "Before launch, we test everything carefully — speed, responsiveness, and performance — to make sure there are no issues." },
  { step: "08", title: "Deployment",            desc: "We launch your website and make it live. Even after that, we stay available for support and updates." },
];

const PROBLEMS = [
  ["Website is Too Slow",         "We optimize speed so your site loads fast and keeps visitors from leaving."],
  ["Design Looks Outdated",       "We redesign your site to look modern, clean, and professional."],
  ["Users Leave Without Action",  "We improve UX and CTAs so visitors know exactly what to do next."],
  ["Not Mobile-Friendly",         "We make sure your site works perfectly on every device and screen size."],
  ["Not Generating Leads",        "We build your site to convert — with clear messaging and focused user journeys."],
];

const FAQS = [
  { q: "How much does a website cost?",        a: "It depends on what you need. A simple website costs less, while advanced ones with custom features cost more. Contact us for a quote." },
  { q: "How long does it take?",               a: "Usually a few weeks, depending on the size and complexity of the project." },
  { q: "Will it work on mobile?",              a: "Yes, all our websites are fully mobile-friendly and responsive across all devices." },
  { q: "Do you provide support after launch?", a: "Yes, we're available for updates and support even after the website goes live." },
  { q: "Can you improve my current website?",  a: "Yes, we can redesign and improve your existing website to make it faster, better-looking, and more effective." },
];

// ── COMPONENT ───────────────────────────────────────────────────────────
export default function WebDevChandigarh() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="wdc-page">

      {/* ── HERO ── */}
      <section className="wdc-hero">
        <div className="wdc-hero__inner">
          {/* LEFT */}
          <div className="wdc-hero__left">
            <div className="wdc-hero__badge">
              <span className="wdc-hero__badge-dot" />
              Web Development — Chandigarh
            </div>
            <h1 className="wdc-hero__title">
              Best Web Development Company in Chandigarh
            </h1>
            <p className="wdc-hero__sub">
              We don't build cookie-cutter websites. We create websites that truly benefit our clients — attractive designs, fast load times, and user-friendly experiences that work for your business.
            </p>
            <div className="wdc-hero__ctas">
              <Link to="/contact" className="wdc-btn-primary">Start Your Project <IconArrow /></Link>
              <Link to="/" className="wdc-btn-outline">View Services</Link>
            </div>
            <div className="wdc-hero__stats">
              <div className="wdc-hero__stat">
                <span className="wdc-hero__stat-val">200+</span>
                <span className="wdc-hero__stat-label">Websites Built</span>
              </div>
              <div className="wdc-hero__stat-divider" />
              <div className="wdc-hero__stat">
                <span className="wdc-hero__stat-val">100%</span>
                <span className="wdc-hero__stat-label">Mobile Friendly</span>
              </div>
              <div className="wdc-hero__stat-divider" />
              <div className="wdc-hero__stat">
                <span className="wdc-hero__stat-val">98%</span>
                <span className="wdc-hero__stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="wdc-hero__right">
            <div className="wdc-hero__cards">
              <div className="wdc-hero__card">
                <div className="wdc-hero__card-icon"><IconCode /></div>
                <div>
                  <div className="wdc-hero__card-name">Custom Dev</div>
                  <div className="wdc-hero__card-desc">Built for your brand</div>
                </div>
              </div>
              <div className="wdc-hero__card">
                <div className="wdc-hero__card-icon"><IconMobile /></div>
                <div>
                  <div className="wdc-hero__card-name">Responsive</div>
                  <div className="wdc-hero__card-desc">All devices ready</div>
                </div>
              </div>
              <div className="wdc-hero__card">
                <div className="wdc-hero__card-icon"><IconShop /></div>
                <div>
                  <div className="wdc-hero__card-name">E-commerce</div>
                  <div className="wdc-hero__card-desc">Sell online easily</div>
                </div>
              </div>
              <div className="wdc-hero__card">
                <div className="wdc-hero__card-icon"><IconSearch /></div>
                <div>
                  <div className="wdc-hero__card-name">SEO Ready</div>
                  <div className="wdc-hero__card-desc">Rank on Google</div>
                </div>
              </div>
              <div className="wdc-hero__card">
                <div className="wdc-hero__card-icon"><IconZap /></div>
                <div>
                  <div className="wdc-hero__card-name">Fast Loading</div>
                  <div className="wdc-hero__card-desc">Optimized speed</div>
                </div>
              </div>
              <div className="wdc-hero__card wdc-hero__card--highlight">
                <div className="wdc-hero__card-icon"><IconTarget /></div>
                <div>
                  <div className="wdc-hero__card-name">Lead Focused</div>
                  <div className="wdc-hero__card-desc">Converts visitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WEBSITE MATTERS ── */}
      <section className="wdc-section wdc-section--gray">
        <div className="wdc-section__inner wdc-section__inner--narrow">
          <div className="wdc-section__head">
            <p className="wdc-eyebrow">Why It Matters</p>
            <h2 className="wdc-section__title">Web Development That Actually Brings Results</h2>
            <p className="wdc-section__sub">A website should not just "exist." It should work for you — building trust, showing your services clearly, and bringing in real inquiries.</p>
          </div>
          <div className="wdc-pain__grid">
            {[
              ["Understand in Seconds",    "When someone lands on your website, they should understand your business within seconds — who you are and what you do."],
              ["Feel Comfortable Exploring","Simple navigation and clear content makes visitors want to stay and explore more of what you offer."],
              ["Know How to Contact You",  "Every page guides users toward taking action — whether it's calling, filling a form, or sending a message."],
              ["Trust Your Business",      "A clean, professional website makes your business look genuine and helps people feel confident about choosing you."],
            ].map(([title, desc], i) => (
              <div key={i} className="wdc-pain-card">
                <div className="wdc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdc-pain-card__title">{title}</div>
                  <div className="wdc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="wdc-section wdc-section--white" id="services">
        <div className="wdc-section__inner">
          <div className="wdc-section__head">
            <p className="wdc-eyebrow">Our Web Development Services</p>
            <h2 className="wdc-section__title">Website Development Services in Chandigarh</h2>
            <p className="wdc-section__sub">Every business is unique. We make your website the way you want it — fitting your way of working, not the other way around.</p>
          </div>
          <div className="wdc-services__grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="wdc-service-card">
                <div className="wdc-service-card__icon">{s.icon}</div>
                <h3 className="wdc-service-card__name">{s.name}</h3>
                <p className="wdc-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEBSITE TYPES ── */}
      <section className="wdc-section wdc-section--gray">
        <div className="wdc-section__inner">
          <div className="wdc-section__head">
            <p className="wdc-eyebrow">Types of Websites We Build</p>
            <h2 className="wdc-section__title">Not Every Website Should Be Built the Same Way</h2>
            <p className="wdc-section__sub">We plan everything based on what actually suits your business and your goals — no fixed templates.</p>
          </div>
          <div className="wdc-types__grid">
            {WEBSITE_TYPES.map((t, i) => (
              <div key={i} className="wdc-type-card">
                <div className="wdc-type-card__icon">{t.icon}</div>
                <h3 className="wdc-type-card__title">{t.title}</h3>
                <p className="wdc-type-card__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="wdc-section wdc-section--white">
        <div className="wdc-section__inner">
          <div className="wdc-section__head">
            <p className="wdc-eyebrow">Why Choose Social Theka</p>
            <h2 className="wdc-section__title">Why Social Theka is a Top Web Development Company in Chandigarh</h2>
            <p className="wdc-section__sub">No overpromising, no complicated terms — just clear work that actually makes sense for your business.</p>
          </div>
          <div className="wdc-why__grid">
            {WHY_US.map((item, i) => (
              <div key={i} className="wdc-why-card">
                <div className="wdc-why-card__icon">{item.icon}</div>
                <h3 className="wdc-why-card__title">{item.title}</h3>
                <p className="wdc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wdc-section wdc-section--gray">
        <div className="wdc-section__inner">
          <div className="wdc-section__head">
            <p className="wdc-eyebrow">Our Process</p>
            <h2 className="wdc-section__title">Web Development in Chandigarh – From Idea to Execution</h2>
            <p className="wdc-section__sub">Every project follows a structured and clear process so you always know what's happening.</p>
          </div>
          <div className="wdc-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="wdc-process-card">
                <div className="wdc-process-card__step">{p.step}</div>
                <div>
                  <div className="wdc-process-card__title">{p.title}</div>
                  <div className="wdc-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS WE FIX ── */}
      <section className="wdc-section wdc-section--white">
        <div className="wdc-section__inner">
          <div className="wdc-section__head">
            <p className="wdc-eyebrow">Common Website Problems — Fixed</p>
            <h2 className="wdc-section__title">A Lot of Businesses Come to Us with Similar Issues</h2>
            <p className="wdc-section__sub">We go step by step, find what's wrong, and improve it properly — not just patch things.</p>
          </div>
          <div className="wdc-pain__grid">
            {PROBLEMS.map(([title, desc], i) => (
              <div key={i} className="wdc-pain-card">
                <div className="wdc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdc-pain-card__title">{title}</div>
                  <div className="wdc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wdc-section wdc-section--gray">
        <div className="wdc-section__inner wdc-section__inner--narrow">
          <div className="wdc-section__head">
            <p className="wdc-eyebrow">FAQs</p>
            <h2 className="wdc-section__title">FAQs – Web Development in Chandigarh</h2>
          </div>
          <div className="wdc-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`wdc-faq__item ${openFaq === i ? "wdc-faq__item--open" : ""}`}>
                <button className="wdc-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="wdc-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="wdc-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wdc-cta-banner">
        <div className="wdc-cta-banner__inner">
          <h2 className="wdc-cta-banner__title">
            Let's Build Your Website with Social Theka
          </h2>
          <p className="wdc-cta-banner__sub">
            If you're looking for a web development company in Chandigarh that actually understands your needs, Social Theka is here to help. Let's create a website that not only looks good but also works properly for your business.
          </p>
          <Link to="/contact" className="wdc-btn-primary wdc-btn-primary--lg">
            Start Your Project <IconArrow />
          </Link>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}