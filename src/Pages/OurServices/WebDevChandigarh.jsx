/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./WebDevChandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";
import webHeroImg from "../../assets/websiteSocialTheka.png";

// ── ICONS ──────────────────────────────────────────────────────────────
const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconLayout = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
  </svg>
);
const IconShoppingCart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconSearch = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconSmartphone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconSettings = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconCheckCircle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
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

// ── DATA ────────────────────────────────────────────────────────────────

const HERO_CARDS = [
  { icon: <IconLayout />,       title: "Custom Design",        subtitle: "Pixel-perfect layouts built for your brand" },
  { icon: <IconSmartphone />,   title: "Mobile-First",         subtitle: "Optimized for every screen size" },
  { icon: <IconSearch />,       title: "SEO-Ready",            subtitle: "Built to rank from day one" },
  { icon: <IconZap />,          title: "Fast Loading",         subtitle: "Under 3s load time guaranteed" },
  { icon: <IconShield />,       title: "Secure & Reliable",    subtitle: "SSL, backups, and uptime monitoring" },
  { icon: <IconTrendingUp />,   title: "Conversion Focused",   subtitle: "Designed to turn visitors into customers", highlight: true },
];

const WHY_MATTERS = [
  { icon: <IconGlobe />,        title: "Your Digital Storefront",   desc: "Your website is open 24/7. It's often the first impression customers have of your business — and first impressions decide whether they stay or leave." },
  { icon: <IconTrendingUp />,   title: "Credibility & Trust",       desc: "A professional website builds immediate trust. Outdated or generic sites lose customers before they even read your offer." },
  { icon: <IconSearch />,       title: "Organic Discoverability",   desc: "A well-structured site ranks on Google. Organic traffic is free and long-lasting — making your website your best marketing investment." },
  { icon: <IconZap />,          title: "Speed = Revenue",           desc: "Every 1-second delay in load time reduces conversions by 7%. We build fast because fast websites make more money." },
];

const SERVICES = [
  {
    icon: <IconLayout />,
    name: "Business Websites",
    desc: "Professional multi-page websites that establish authority, communicate your services clearly, and guide visitors toward taking action.",
    tags: ["About", "Services", "Contact", "Blog"],
  },
  {
    icon: <IconShoppingCart />,
    name: "eCommerce Stores",
    desc: "Full-featured online stores with product pages, cart, checkout, and payment integrations — built to sell seamlessly.",
    tags: ["Shopify", "WooCommerce", "Razorpay", "COD"],
  },
  {
    icon: <IconCode />,
    name: "Landing Pages",
    desc: "High-converting single pages built around one goal — whether that's capturing leads, selling a product, or driving sign-ups.",
    tags: ["Lead Gen", "Product Launch", "Event", "Ad Campaign"],
  },
  {
    icon: <IconSearch />,
    name: "SEO-Optimized Sites",
    desc: "Websites built from the ground up with technical SEO in mind — structured data, page speed, clean code, and keyword targeting.",
    tags: ["On-Page SEO", "Schema", "Core Web Vitals", "Local SEO"],
  },
  {
    icon: <IconSettings />,
    name: "CMS Integration",
    desc: "Give your team control. We integrate WordPress, Webflow, or custom CMS so you can update content without touching code.",
    tags: ["WordPress", "Webflow", "Sanity", "Strapi"],
  },
  {
    icon: <IconSmartphone />,
    name: "Website Redesign",
    desc: "Transform an outdated site into a modern, high-performing web presence — keeping what works and rebuilding what doesn't.",
    tags: ["UI Refresh", "Speed Fix", "Mobile Fix", "Rebranding"],
  },
];

const WEBSITE_TYPES = [
  { icon: <IconLayout />,       title: "Portfolio Sites",       desc: "Showcase your work with elegant, minimal layouts designed to impress clients and collaborators." },
  { icon: <IconShoppingCart />, title: "Online Stores",         desc: "From single product to full catalog — we build stores that convert browsers into buyers." },
  { icon: <IconCode />,         title: "SaaS Landing Pages",    desc: "Clean, persuasive pages that explain your product fast and push visitors toward a free trial or demo." },
  { icon: <IconUsers />,        title: "Service Businesses",    desc: "Local clinics, agencies, consultants — we build sites that generate calls, inquiries, and bookings." },
  { icon: <IconGlobe />,        title: "News & Blogs",          desc: "Content-heavy sites built for speed, readability, and SEO — so your articles actually get read." },
  { icon: <IconZap />,          title: "Event Pages",           desc: "Time-sensitive, high-energy pages built to drive registrations and ticket sales before the deadline." },
];

const WHY_CHOOSE = [
  { icon: <IconCheckCircle />, title: "No Templates",           desc: "Every website we build is custom-designed from scratch. You won't find your site on another business's page." },
  { icon: <IconSearch />,      title: "SEO Built In",           desc: "SEO isn't an add-on. It's part of how we build — from URL structure to image compression to schema markup." },
  { icon: <IconZap />,         title: "Performance First",      desc: "We optimize every asset, lazy-load images, and use modern hosting to ensure your site loads fast everywhere." },
  { icon: <IconShield />,      title: "Post-Launch Support",    desc: "We don't disappear after delivery. We offer ongoing maintenance, updates, and support to keep your site running." },
  { icon: <IconSmartphone />,  title: "Mobile Perfected",       desc: "Over 70% of traffic is mobile. Every element is tested and refined specifically for small screens." },
  { icon: <IconUsers />,       title: "Real Collaboration",     desc: "You're involved at every stage. We share mockups, get feedback, and iterate until you're genuinely happy." },
];

const PROCESS = [
  { num: "01", title: "Discovery & Brief",         desc: "We start with a detailed conversation about your business, target audience, competitors, and goals. This shapes everything." },
  { num: "02", title: "Wireframe & Structure",      desc: "Before any visual design, we plan the site's structure — every page, every section, every user flow mapped out clearly." },
  { num: "03", title: "Visual Design",              desc: "We create full mockups in Figma. You see exactly what your site will look like before a single line of code is written." },
  { num: "04", title: "Development",                desc: "Clean, modern code — HTML/CSS/JS or your chosen CMS. Fully responsive, accessible, and fast from the start." },
  { num: "05", title: "Testing & QA",               desc: "Every page is tested on 10+ device sizes, multiple browsers, and checked for speed, accessibility, and broken links." },
  { num: "06", title: "Launch & Handover",          desc: "We deploy your site, set up analytics, train your team on the CMS, and hand over everything you need to succeed." },
];

const PROBLEMS = [
  { icon: <IconTrendingUp />, title: "Low on Google?",           desc: "Poor rankings often trace back to a slow, poorly structured website. We fix the technical foundation so search engines reward you." },
  { icon: <IconSmartphone />, title: "Site Looks Bad on Mobile?", desc: "A broken mobile experience kills conversions. We rebuild or redesign with mobile-first as the default, not the afterthought." },
  { icon: <IconZap />,        title: "Slow Load Times?",         desc: "We audit and optimize: images, hosting, caching, and code — shaving seconds off your load time and recovering lost revenue." },
  { icon: <IconLayout />,     title: "Outdated Design?",         desc: "An old-looking website signals an old-thinking business. We redesign with modern aesthetics that match your ambition." },
  { icon: <IconShield />,     title: "Security Concerns?",       desc: "We implement SSL, firewall rules, regular backups, and update policies to protect your site and your customers' data." },
  { icon: <IconUsers />,      title: "Not Generating Leads?",    desc: "Traffic without conversions is wasted. We redesign your site's CTAs, forms, and user flow to turn visitors into inquiries." },
];

const FAQS = [
  { q: "How long does it take to build a website?", a: "A standard business website takes 2–4 weeks. eCommerce sites typically take 4–6 weeks depending on catalog size and integrations. We give a clear timeline before starting." },
  { q: "Do I need to provide content?", a: "We recommend you provide your own content for accuracy, but we can help with copywriting and sourcing professional images if needed — just let us know." },
  { q: "Will my website work on mobile?", a: "Yes, always. Every website we build is fully responsive and tested across phones, tablets, and desktops before launch." },
  { q: "Can I update the website myself after launch?", a: "Yes. We integrate a CMS (like WordPress or Webflow) and train you on how to update pages, add blog posts, and change images without touching code." },
  { q: "Do you offer hosting and domain setup?", a: "Yes. We can handle domain registration, hosting setup, SSL certificates, and DNS configuration as part of your project." },
  { q: "What if I already have a website and want a redesign?", a: "We do full redesigns. We audit your existing site, preserve what's working (like SEO rankings and content), and rebuild everything that needs improvement." },
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
            <div className="wdc-hero__left">
              <div className="wdc-hero__badge">
                <span className="wdc-hero__badge-dot" />
                Web Development · Chandigarh
              </div>
              <h1 className="wdc-hero__title">
                Websites That Work<br />
                <span className="wdc-hero__title-accent">As Hard As You Do</span>
              </h1>
              <p className="wdc-hero__desc">
                We design and develop custom websites for businesses in Chandigarh and across India — built for speed, search engines, and real conversions.
              </p>
              <p className="wdc-hero__desc">
                No templates. No cookie-cutter designs. Every project starts from scratch and is tailored to your brand, your audience, and your goals.
              </p>
              <div style={{ marginTop: "28px" }}>
                <Link to="/contact" className="wdc-btn-primary">
                  Start Your Project <IconArrowRight />
                </Link>
              </div>

              {/* Stats Boxes */}
              <div className="wdc-hero__stats">
                <div className="wdc-hero__stat">
                  <div className="wdc-hero__stat-number">200+</div>
                  <div className="wdc-hero__stat-label">Websites Built</div>
                </div>
                <div className="wdc-hero__stat">
                  <div className="wdc-hero__stat-number">1-3 Wks</div>
                  <div className="wdc-hero__stat-label">Quick Delivery</div>
                </div>
                <div className="wdc-hero__stat wdc-hero__stat--highlight">
                  <div className="wdc-hero__stat-number">24/7</div>
                  <div className="wdc-hero__stat-label">Works for You</div>
                </div>
              </div>
            </div>

            <div className="wdc-hero__right">
              <div className="wdc-hero__image-wrapper">
                <img src={webHeroImg} alt="Web Development Services" className="wdc-hero__image" />
                
                {/* Floating Cards */}
                <div className="wdc-hero__floating-card wdc-hero__floating-card--top">
                  <div className="wdc-hero__floating-card-icon">
                    <IconLayout />
                  </div>
                  <div className="wdc-hero__floating-card-label">CUSTOM DESIGN</div>
                  <div className="wdc-hero__floating-card-desc">No templates</div>
                </div>

                <div className="wdc-hero__floating-card wdc-hero__floating-card--left">
                  <div className="wdc-hero__floating-card-icon">
                    <IconSmartphone />
                  </div>
                  <div className="wdc-hero__floating-card-label">MOBILE-FIRST</div>
                  <div className="wdc-hero__floating-card-desc">All devices ready</div>
                </div>

                <div className="wdc-hero__floating-card wdc-hero__floating-card--right">
                  <div className="wdc-hero__floating-card-icon">
                    <IconZap />
                  </div>
                  <div className="wdc-hero__floating-card-label">FAST LOADING</div>
                  <div className="wdc-hero__floating-card-desc">Optimised speed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY IT MATTERS ── */}
        <section className="wdc-performance">
          <div className="wdc-performance__inner">
            <div className="wdc-performance__header">
              <div className="wdc-badge">
                <IconStar /> Why Your Website Matters
              </div>
              <h2 className="wdc-performance__title">Your Website Is Your Best Salesperson</h2>
              <p className="wdc-performance__subtitle">
                It's working 24 hours a day, 7 days a week — and the quality of your site directly determines whether people trust you enough to buy.
              </p>
            </div>
            <div className="wdc-performance__grid">
              {WHY_MATTERS.map((item, i) => (
                <div key={i} className="wdc-performance__card">
                  <div className="wdc-performance__icon">{item.icon}</div>
                  <h3 className="wdc-performance__card-title">{item.title}</h3>
                  <p className="wdc-performance__card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="wdc-platforms">
          <div className="wdc-platforms__inner">
            <div className="wdc-platforms__header">
              <div className="wdc-badge">What We Build</div>
              <h2 className="wdc-platforms__title">Every Type of Website, Done Right</h2>
              <p className="wdc-platforms__subtitle">
                From simple landing pages to complex eCommerce platforms — we cover the full spectrum of web development.
              </p>
            </div>
            <div className="wdc-platforms__grid">
              {SERVICES.map((s, i) => (
                <div key={i} className="wdc-platform-card">
                  <div className="wdc-platform-card__header">
                    <div className="wdc-platform-card__icon">{s.icon}</div>
                    <h3 className="wdc-platform-card__name">{s.name}</h3>
                  </div>
                  <p className="wdc-platform-card__desc">{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
                    {s.tags.map((tag, j) => (
                      <span key={j} style={{
                        fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em",
                        background: "#f8fafc", border: "1px solid #e2e8f0",
                        borderRadius: "6px", padding: "4px 10px", color: "#475569"
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WEBSITE TYPES MARQUEE ── */}
        <section className="wdc-conversion">
          <div className="wdc-conversion__inner">
            <div className="wdc-conversion__header">
              <div className="wdc-badge">Industries We Serve</div>
              <h2 className="wdc-conversion__title">Built for Every Business Type</h2>
              <p className="wdc-conversion__subtitle">
                Whether you're a freelancer, startup, or enterprise — we've built websites across every industry and know what works.
              </p>
            </div>
            <div className="wdc-marquee-wrapper">
              <div className="wdc-marquee-track">
                {[...WEBSITE_TYPES, ...WEBSITE_TYPES].map((item, i) => (
                  <div key={i} className="wdc-marquee-card">
                    <div className="wdc-marquee-card__icon">{item.icon}</div>
                    <h3 className="wdc-marquee-card__title">{item.title}</h3>
                    <p className="wdc-marquee-card__desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="wdc-excellence">
          <div className="wdc-excellence__inner">
            <div className="wdc-excellence__header">
              <div className="wdc-badge">
                <IconStar /> Why Choose Us
              </div>
              <h2 className="wdc-excellence__title">What Sets Our Work Apart</h2>
            </div>
            <div className="wdc-excellence__grid">
              {WHY_CHOOSE.map((item, i) => (
                <div key={i} className="wdc-excellence__card">
                  <div className="wdc-excellence__icon">{item.icon}</div>
                  <h3 className="wdc-excellence__card-title">{item.title}</h3>
                  <p className="wdc-excellence__card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="wdc-process">
          <div className="wdc-process__inner">
            <div className="wdc-process__header">
              <div className="wdc-badge">How We Work</div>
              <h2 className="wdc-process__title">Our Development Process</h2>
              <p className="wdc-process__subtitle">
                Transparent, collaborative, and built around your timeline.
              </p>
            </div>
            <div className="wdc-process__grid">
              {PROCESS.map((step, i) => (
                <div key={i} className="wdc-process__card">
                  <span className="wdc-process__number">{step.num}</span>
                  <div className="wdc-process__content">
                    <h3 className="wdc-process__card-title">{step.title}</h3>
                    <p className="wdc-process__card-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEMS WE SOLVE ── */}
        <section className="wdc-solutions">
          <div className="wdc-solutions__inner">
            <div className="wdc-solutions__header">
              <div className="wdc-badge">Problems We Solve</div>
              <h2 className="wdc-solutions__title">Recognise Any of These?</h2>
            </div>
            <div className="wdc-solutions__grid">
              {PROBLEMS.map((item, i) => (
                <div key={i} className="wdc-solutions__card">
                  <div className="wdc-solutions__icon">{item.icon}</div>
                  <div className="wdc-solutions__content">
                    <h3 className="wdc-solutions__card-title">{item.title}</h3>
                    <p className="wdc-solutions__card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="wdc-faq">
          <div className="wdc-faq__inner">
            <div className="wdc-faq__header">
              <div className="wdc-badge">FAQ</div>
              <h2 className="wdc-faq__title">Frequently Asked Questions about SEO Services</h2>
            </div>
            <div className="wdc-faq__list">
              {FAQS.map((item, i) => (
                <div key={i} className={`wdc-faq__item${openFaq === i ? " wdc-faq__item--open" : ""}`}>
                  <button className="wdc-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className="wdc-faq__icon">⌄</span>
                  </button>
                  {openFaq === i && <div className="wdc-faq__a">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="wdc-cta">
          <div className="wdc-cta__inner">
            <div className="wdc-cta__content">
              <h2 className="wdc-cta__title">Ready to Build Something Great?</h2>
              <p className="wdc-cta__subtitle">
                Tell us about your project — we'll come back with ideas, a timeline, and a clear proposal.
              </p>
            </div>
            <Link to="/contact" className="wdc-btn-primary wdc-btn-primary--lg">
              Get a Free Quote <IconArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </ServiceLayout>
  );
}
