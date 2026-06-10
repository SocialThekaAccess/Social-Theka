import { useState, useEffect, useRef } from "react";
import logo from "../assets/SocialThekaLogo.png";
import Navbar from "./Navbar";
import "./Home.css";
import RegionalPresence from './RegionalPresence';
import Pricing from './Pricing';


/* ── SHARED COMPONENTS ───────────────────────────── */
function Tag({ children }) {
  return <div className="tag">{children}</div>;
}

function Divider({ center }) {
  return <div className={`divider${center ? " divider--center" : ""}`} />;
}


/* ── HERO ────────────────────────────────────────── */
function Hero() {
  const logos = ["Google", "Meta", "ISO-Certified"];

  return (
    <section id="home" className="hero">
      <div className="hero__inner">

        {/* Left */}
        <div className="hero__left">
          <h1 className="hero__h1">
            Your Complete Digital Growth Partner
          </h1>
          <p className="hero__p">
            Social Theka is a digital marketing agency located in Chandigarh, dedicated to providing effective and straightforward solutions to assist businesses in establishing themselves online. Regardless of your company's stage (new, growing, or maturing), we manage all aspects of your digital marketing (SEO, SMO, content creation/marketing, PPC, and brand development), so you do not have to coordinate with numerous people. At our agency, our main objective is to help your target audience discover your business's services and products, comprehend them, and develop the trust required to choose your company time after time.
          </p>
          <a href="#services" className="hero__explore-btn">
            Explore Our Services <span>→</span>
          </a>
          <p className="hero__recognised-label">
            Recognized for Core Digital Marketing Services
          </p>
          <div className="hero__logos">
            {logos.map((logo) => (
              <div key={logo} className="hero__logo-pill">{logo}</div>
            ))}
          </div>
        </div>

        {/* Right — Lead Form + Location cards */}
        <div className="hero__right">
          <div className="hero__form-card">
            <div className="hero__form-header">
              <h3 className="hero__form-title">Get a Free Strategy Call</h3>
              <p className="hero__form-sub">Processed immediately by our growth experts.</p>
            </div>
            <form className="hero__form" onSubmit={(e) => e.preventDefault()}>
              <div className="hero__form-row">
                <div className="hero__form-group">
                  <label>FULL NAME *</label>
                  <input type="text" placeholder="Rahul Sharma" required />
                </div>
                <div className="hero__form-group">
                  <label>BUSINESS EMAIL *</label>
                  <input type="email" placeholder="rahul@company.com" required />
                </div>
              </div>
              <div className="hero__form-row">
                <div className="hero__form-group">
                  <label>PHONE NUMBER *</label>
                  <input type="tel" placeholder="+91 98765 43210" required />
                </div>
                <div className="hero__form-group">
                  <label>SERVICE NEEDED</label>
                  <select>
                    <option>SEO Services</option>
                    <option>Social Media Marketing</option>
                    <option>Paid Advertising (PPC)</option>
                    <option>Website Development</option>
                    <option>Content Writing</option>
                    <option>Link Building</option>
                  </select>
                </div>
              </div>
              <div className="hero__form-group">
                <label>MONTHLY BUDGET</label>
                <select>
                  <option>₹10k – ₹25k</option>
                  <option>₹25k – ₹50k</option>
                  <option>₹50k – ₹1L</option>
                  <option>₹1L+</option>
                </select>
              </div>
              <div className="hero__form-group">
                <label>MESSAGE</label>
                <textarea placeholder="Tell us about your business goals..." rows="3" />
              </div>
              <button type="submit" className="hero__form-btn">
                SUBMIT INQUIRY
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Location cards below form */}
          <div className="hero__locations">
            {[
              { city: "Chandigarh", sub: "India's #1 Digital Hub" },
              { city: "Delhi NCR",  sub: "North India Coverage" },
            ].map((l) => (
              <div key={l.city} className="hero__loc-card">
                <span className="hero__loc-city">{l.city}</span>
                <span className="hero__loc-sub">{l.sub}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── STATS ───────────────────────────────────────── */
function Stats() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [vals, setVals] = useState([0, 0, 0, 0]);

  const targets = [500, 120, 50, 98];
  const items = [
    { suffix: "+",   label: "Brands Scaled" },
    { suffix: "M+",  label: "Ad Impressions" },
    { prefix: "₹", suffix: "Cr+", label: "Revenue Generated" },
    { suffix: "%",   label: "Client Retention" },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated) {
        setAnimated(true);
        targets.forEach((target, i) => {
          let start = null;
          const duration = 2200;
          const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVals((prev) => {
              const next = [...prev];
              next[i] = Math.floor(eased * target);
              return next;
            });
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [animated]);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__grid">
        {items.map((item, i) => (
          <div key={i} className="stats__item">
            <div className="stats__num">
              {item.prefix || ""}{vals[i]}<span>{item.suffix}</span>
            </div>
            <div className="stats__label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── TRUST MARQUEE ───────────────────────────────── */
function TrustMarquee() {
  const pills = [
    "TechNova India", "GrowthHub", "BrandBoost", "DigitalX",
    "MarketPeak", "ScaleUp Digital", "VisionCo", "NexGen",
    "Elevate Media", "PrimeReach",
  ];
  const doubled = [...pills, ...pills];

  return (
    <section className="trust">
      <div className="container">
        <p className="trust__label">
          Trusted by 500+ businesses across India, USA, UK &amp; Dubai
        </p>
        <div className="marquee">
          <div className="marquee__track">
            {doubled.map((name, i) => (
              <div key={i} className="marquee__pill">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ────────────────────────────────────── */
const SERVICE_CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    title: "Website Design",
    desc: "We put your business at the top of search results on Google when people are looking for what you have to offer. We don't just get you any old traffic, we target the right audience that are truly interested in what you do. This means you have a chance of turning them into customers. You do not have to rely on paid advertisements. We will even simplify the process for you by starting or improving your site. No more worrying about technical aspects or website performance.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "SEO",
    desc: "If your website does not appear on Google, then so do your competitors - and unfortunately for you, that's where the customers are heading for. Social Theka provides result-oriented SEO services that improve Google rankings, attract quality & organic traffic, and help businesses grow sales without covering hundreds on a paid ads budget. So, if you are a startup from Chandigarh, a small business from Punjab or any big brand from anywhere in the world, we create an SEO strategy specifically built around your goals.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><polyline points="22 20 2 20"/>
      </svg>
    ),
    title: "Paid Advertising (PPC)",
    desc: "Running PPC ads is not a gamble, we create targeted campaigns towards the proper audience to use your budget effectively and allow you to track your spend and results. At Social Theka, we offer PPC services in Chandigarh that are focused on real business growth. As a trusted PPC agency in Chandigarh, we don't just aim for traffic — we focus on bringing the right audience, generating quality leads, and helping you get better returns on your ad spend.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Website Development",
    desc: "Website design is not just about colors and layout; we are more concerned with how your users will be able to easily navigate what we present to them. We create clean and modern designs which personify your brand and at the same time we put in place a simple path for visitors to find what they are looking for. If a website is easy to use and is seen as a trusted source, users will be more likely to get involved in what you are putting out there.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Content Writing",
    desc: "Content writing can play a critical role in the overall success of your business. At Social Theka, we have inside knowledge of how to produce content that communicates specifically what a company does and helps foster an image of credibility, as well as steps that will be taken by consumers following an interaction with your company such as purchasing a product, following social links to your site, etc. All content we create will have a similar effect when viewed (website, advertisements or social networking).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    title: "Social Media Marketing",
    desc: "Let us be real for a second. Social media today is not about posting nice designs or writing captions. People actually check your profile before they decide to trust you. They scroll, they judge, they compare and then they decide. If your page looks inactive or random, they just move on. No second thought. That's why social media marketing is no longer optional. It's a big part of how your business is seen online. At Social Theka, we handle social media marketing in Chandigarh in a way that actually makes sense for real businesses.",
  },
];

function Services() {
  return (
    <section id="services" className="svc-section">
      <div className="svc-bg-shape svc-bg-shape--1" />
      <div className="svc-bg-shape svc-bg-shape--2" />

      <div className="container svc-inner">
        <div className="svc-head">
          OUR EXPERTISE
          <h2 className="svc-h2">
            Digital Solutions That Drive<br />
            Real Business Forward
          </h2>
          <p className="svc-sub">
            One strategic partner for SEO, paid media, content, web development,
            and long-term digital growth.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICE_CARDS.map((c, i) => (
            <div key={i} className="svc-card">
              <div className="svc-card__icon-wrap">
                {c.icon}
              </div>
              <h3 className="svc-card__title">{c.title}</h3>
              <p className="svc-card__desc">{c.desc}</p>
              <a href="#contact" className="svc-card__link">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY US ──────────────────────────────────────── */
const WHY_CARDS = [
  { icon: "💬", title: "Plain Language Reporting",  desc: "No jargon, no vanity metrics. You always know exactly what's working." },
  { icon: "🏠", title: "Everything Under One Roof", desc: "SEO, PPC, social, web, content — one team handles it all seamlessly." },
  { icon: "🎯", title: "Built Around Your Goals",   desc: "We learn your business before touching a single ad or keyword." },
  { icon: "📅", title: "Long-Term Growth Focus",    desc: "Strategies built to keep delivering months and years down the line." },
  { icon: "🌍", title: "Brand-First Approach",      desc: "We make your brand look credible, feel trustworthy, and convert." },
  { icon: "🤝", title: "A Team That Cares",         desc: "Reachable, responsive — whether you're in Chandigarh or Dubai." },
];

const WHY_DIFF = [
  { icon: "📊", title: "Results, Not Jargon",        desc: "No confusing reports. Our SEO and PPC campaigns are tracked and reported in plain language — what's working, what's not, and what we're doing about it." },
  { icon: "🏗️", title: "Full-Stack Under One Roof",  desc: "SEO, social media, web development, PPC — you don't need five vendors. We handle it all, and everything works together to maximize your ROI." },
  { icon: "⏳", title: "In It For The Long Game",    desc: "Quick wins are great, but sustainable growth is the goal. Our strategies are built to keep delivering months and years down the line." },
  { icon: "🏷️", title: "We Build Brands",            desc: "From web development to brand awareness campaigns — we make sure your brand looks credible, feels trustworthy, and converts visitors into customers." },
];

function WhyUs() {
  return (
    <section id="why" className="why section">
      <div className="container">
        <div className="why__inner">

          {/* LEFT — image + why diff cards neeche */}
          <div className="why__left">
            <div className="why__img-wrap">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Social Theka Team"
              />
            </div>
            {/* <div className="why__achievement">
              <div className="why__ach-num">98%</div>
              <div className="why__ach-text">Client Retention Rate</div>
            </div> */}

            {/* Why Different Strip — image ke neeche */}
            <div className="why__diff">
              {WHY_DIFF.map((item, i) => (
                <div key={i} className="why__diff-item">
                  <span className="why__diff-icon">{item.icon}</span>
                  <div>
                    <div className="why__diff-title">{item.title}</div>
                    <p className="why__diff-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="why__right">
            <div className="why__right-head">
              {/* Why Social Theka */}
              <h2 className="section-title">
                Why Businesses Choose Social Theka
              </h2>
              <Divider />
              <p className="section-sub" style={{ maxWidth: "none" }}>
                Honestly, there are dozens of digital marketing agencies in India out there. So why do businesses - from local startups in Chandigarh to growing brands across the USA and UK - keep coming back to us? Because we don't just run campaigns. We actually care about your growth.
              </p>
            </div>
            <div className="why__grid">
              {WHY_CARDS.map((c, i) => (
                <div key={i} className="why-card">
                  <div className="why-card__icon">{c.icon}</div>
                  <div className="why-card__title">{c.title}</div>
                  <div className="why-card__desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── PROCESS ─────────────────────────────────────── */
const PROCESS_STEPS = [
  { num: "01", title: "Defined Objectives",      desc: "We start by understanding your goals — visibility, leads, or sales. Everything begins with a clear plan, not assumptions." },
  { num: "02", title: "Strategic Planning",      desc: "A tailored strategy around your business, your audience, and your market. No generic playbooks copied from someone else." },
  { num: "03", title: "Smart Execution",         desc: "The right mix of tools and expertise applied carefully across campaigns, content, and web — with intent." },
  { num: "04", title: "Continuous Optimisation", desc: "We monitor, analyse, and keep improving so your growth compounds over time — never set-and-forget." },
];

function Process() {
  return (
    <section className="process section">
      <div className="container">
        <div className="process__head">
          How We Work
          <h2 className="section-title">
            Our Approach to Scalable Growth
          </h2>
          <Divider center />
          <p className="section-sub">
            Growth isn't left to chance. Every decision follows a clear framework
            built for consistent, measurable results.
          </p>
        </div>
        <div className="process__grid">
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} className="process-step">
              <div className="process-step__num">{s.num}</div>
              <div className="process-step__title">{s.title}</div>
              <p className="process-step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── RESULTS ─────────────────────────────────────── */
const RESULT_CARDS = [
  {
    logoClass: "",       initials: "TN", name: "TechNova India",   type: "B2B SaaS · Pune",
    m1: "3.2x", l1: "Organic traffic growth", m2: "4 mo", l2: "Time to results",
    desc: "SEO + content strategy tripled organic reach. 48 new keywords ranking on page 1 within 4 months of engagement.",
  },
  {
    logoClass: "--dark", initials: "GH", name: "GrowthHub",        type: "E-Commerce · Delhi",
    m1: "4.2x", l1: "ROAS improvement",       m2: "62%",  l2: "CPA reduction",
    desc: "PPC campaign restructure took ROAS from 1.6x to 4.2x. Reporting clarity revealed where 12L/month was being wasted.",
  },
  {
    logoClass: "--grey", initials: "SD", name: "ScaleUp Digital",  type: "Agency · London, UK",
    m1: "280%", l1: "Lead increase",           m2: "9mo",  l2: "Partnership duration",
    desc: "UK-based agency scaled white-label SEO delivery. Full-funnel strategy drove 280% more qualified inbound leads in 6 months.",
  },
];

function Results() {
  return (
    <section id="results" className="results section">
      <div className="container">
        <div className="results__head">
          Case Studies
          <h2 className="section-title">
            Results That Speak Louder
          </h2>
          <Divider />
          <p className="section-sub">Real numbers. Real businesses. Real growth.</p>
        </div>
        <div className="results__grid">
          {RESULT_CARDS.map((c, i) => (
            <div key={i} className="result-card">
              <div className="result-card__company">
                <div className={`result-card__logo result-card__logo${c.logoClass}`}>
                  {c.initials}
                </div>
                <div>
                  <div className="result-card__co-name">{c.name}</div>
                  <div className="result-card__co-type">{c.type}</div>
                </div>
              </div>
              <div className="result-card__metrics">
                <div>
                  <div className="result-card__metric-val">{c.m1}</div>
                  <div className="result-card__metric-label">{c.l1}</div>
                </div>
                <div>
                  <div className="result-card__metric-val">{c.m2}</div>
                  <div className="result-card__metric-label">{c.l2}</div>
                </div>
              </div>
              <p className="result-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ────────────────────────────────── */
const TESTIS = [
  { avatarMod: "",       initials: "AM", name: "Arjun Mehta",    role: "Founder, TechNova India",       quote: '"Social Theka tripled our organic traffic in 4 months. Straight talk, real results, zero fluff. Best agency decision we\'ve made."' },
  { avatarMod: "--dark", initials: "PS", name: "Priya Sharma",   role: "Marketing Head, GrowthHub",     quote: '"Our PPC ROAS went from 1.6x to 4.2x. The reporting is always clear and they actually explain the reasoning — not just the numbers."' },
  { avatarMod: "--grey", initials: "JC", name: "James Caldwell", role: "CEO, ScaleUp Digital — London", quote: '"We\'re UK-based and were genuinely sceptical. Social Theka removed every doubt within the first 60 days — the results speak for themselves."' },
];

function Testimonials() {  
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonials__head">
          Client Stories
          <h2 className="section-title">
            What Our Clients Actually Say
          </h2>
          <Divider center />
        </div>
        <div className="testimonials__grid">
          {TESTIS.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-card__stars">★★★★★</div>
              <p className="testi-card__quote">{t.quote}</p>
              <div className="testi-card__author">
                <div className={`testi-card__avatar testi-card__avatar${t.avatarMod}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────── */
const FAQ_ITEMS = [
  { q: "What exactly do you do?",                                       a: "SEO, social media, paid ads, website design & development, content writing, and lead generation — all under one roof. No chaos, no handoffs between three different agencies." },
  { q: "How long before I see results?",                                a: "SEO typically takes 3–6 months for meaningful movement. Paid ads and social can move faster — often within weeks. Either way, you're always updated on where things stand." },
  { q: "We're a small business on a tight budget. Can you help?",       a: "Yes. Some of our best work has come from exactly that scenario. We figure out the highest-impact moves for your specific budget and start there — no bloated retainers." },
  { q: "We tried another agency and it didn't work. What's different?", a: "We don't overpromise. You'll know what we're working on, why, and what to expect — straight talk from day one. If something isn't working, we tell you and fix it." },
  { q: "Do you work with international clients?",                       a: "All the time. We have active clients in USA, UK, Dubai, Singapore, and Australia. Location has never been a barrier — we've built the workflows to make it seamless." },
  { q: "How do we get started?",                                        a: "Drop us a message or book a free strategy call. We understand your business first, then figure out the best way forward — no pressure, no sales script." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="faq">
      <div className="faq__inner">

        {/* Left */}
        <div className="faq__left">
          <span className="faq__eyebrow">GOT QUESTIONS?</span>
          <h2 className="faq__left-h2">
            Frequently<br />Asked<br />Questions
          </h2>
          <p className="faq__left-p">
            More questions about Social Theka or our services?
          </p>
          <a href="#contact" className="faq__chat-btn">
            CHAT WITH US →
          </a>
        </div>

        {/* Right — accordion */}
        <div className="faq__list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq__item ${open === i ? "faq__item--open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq__item-row">
                <span className="faq__item-q">{item.q}</span>
                <span className="faq__item-icon">{open === i ? "×" : "+"}</span>
              </div>
              {open === i && <p className="faq__item-a">{item.a}</p>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__inner">
        <div>
          <div className="cta__eyebrow">✦  500+ Businesses Trust Us. Yours Could Be Next.</div>
          <h2 className="cta__h2">
            Ready to Grow Your Business<br />With Social Theka?
          </h2>
          <p className="cta__p">
            From Chandigarh to New York — brands across India, USA, UK and Dubai have scaled with
            us. Book a free call. No pressure, no hard sell, just clarity.
          </p>
        </div>
        <div className="cta__actions">
          <a href="tel:+91XXXXXXXXXX" className="btn-white">
            Claim Free Strategy Session →
          </a>
          <a href="mailto:hello@socialtheka.com" className="btn-glass">
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ──────────────────────────────────────── */
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
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__logo-wrap">
            <img src={logo} alt="Social Theka" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">
            Turning brands into market leaders. Based in Chandigarh. Serving India, USA, UK, Dubai &amp; Singapore.
          </p>
          <div className="footer__socials">
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/socialtheka" target="_blank" rel="noreferrer" className="footer__soc footer__soc--li" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/socialtheka" target="_blank" rel="noreferrer" className="footer__soc footer__soc--ig" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/socialtheka" target="_blank" rel="noreferrer" className="footer__soc footer__soc--fb" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="https://twitter.com/socialtheka" target="_blank" rel="noreferrer" className="footer__soc footer__soc--tw" aria-label="Twitter / X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <div className="footer__col-title">{col.title}</div>
            <div className="footer__links">
              {col.links.map((link) => (
                <a key={link} href="#" className="footer__link">{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="footer__bottom container">
        <span>© 2026 Social Theka. All rights reserved.</span>
        <div className="footer__bottom-links">
          {["Privacy Policy", "Terms", "Cookies"].map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── SCROLL TO TOP ───────────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return visible ? (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}

/* ── APP ─────────────────────────────────────────── */
export default function SocialTheka() {
  return (
    <>
      <Navbar />
      <Hero />
      <RegionalPresence />
      <Pricing />
      {/* <Stats /> */}
      <TrustMarquee />
      <Services />
      <WhyUs />
      <Process />
      <Results />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </>
  );
}