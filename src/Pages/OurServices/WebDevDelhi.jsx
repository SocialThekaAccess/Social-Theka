import { useState } from "react";
import "./WebDevDelhi.css";
import ServiceLayout from "../../Component/ServiceLayout";

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
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const SERVICES = [
  { icon: <IconCode />,    name: "Custom Website Development",  desc: "We build every website from scratch based on your actual needs and brand identity. No random templates, no copy-paste solutions — just a website that is entirely yours." },
  { icon: <IconMobile />,  name: "Responsive Web Design",       desc: "Most people in Delhi browse on their phones. Every website we build works flawlessly across all devices — phones, tablets, and desktops." },
  { icon: <IconShield />,  name: "PHP Development",             desc: "For businesses that need advanced functionality like custom portals, booking systems, or web applications — powerful, secure, and scalable solutions that grow with you." },
  { icon: <IconShop />,    name: "E-Commerce Website Development", desc: "We build e-commerce websites that are easy for you to manage and simple for your customers to use — from browsing products all the way through to secure payment." },
  { icon: <IconRefresh />, name: "Website Redesign Services",   desc: "Already have a website that is not performing? We redesign it with better visuals, faster speed, and stronger performance — without starting everything from scratch." },
  { icon: <IconLayout />,  name: "Landing Page Development",    desc: "Running ads on Google or social media? We build focused landing pages with one clear goal — turning your visitors into leads and customers." },
];

const WEBSITE_TYPES = [
  { icon: <IconUsers />,  title: "Business Websites",  desc: "For service providers and consultants who want to establish credibility online. Simple, professional, and focused on building trust." },
  { icon: <IconShop />,   title: "E-Commerce Stores",  desc: "For businesses that want to sell their products smoothly and professionally — from product pages to secure checkout." },
  { icon: <IconStar />,   title: "Portfolio Websites", desc: "For people who want to show off their work in a compelling way. Present your projects professionally and make a strong impression." },
  { icon: <IconLayout />, title: "Landing Pages",      desc: "For campaigns that need to get people to take action — buy something, sign up, or get in touch. Focused and conversion-driven." },
  { icon: <IconCode />,   title: "Custom Solutions",   desc: "For anything more specific — fully custom solutions tailored to your exact requirements. This is also where our PHP development expertise delivers the most value." },
];

const WHY_US = [
  { icon: <IconLayout />, title: "Professional & User-Friendly Designs", desc: "We don't make things confusing. Users should feel comfortable using your website from the moment they land on it." },
  { icon: <IconMobile />, title: "Mobile-First Development",              desc: "We design keeping mobile users in mind from the start — because most people in Delhi are browsing on their phones." },
  { icon: <IconZap />,    title: "Performance-Focused Builds",            desc: "A website should load fast and run smoothly. That is non-negotiable for us on every project we take." },
  { icon: <IconShield />, title: "Clear Communication at Every Stage",    desc: "You will always know where your project stands. No surprises, no confusion — just regular updates throughout." },
  { icon: <IconSearch />, title: "SEO Built Into Every Website",          desc: "We structure your website so Google can read it clearly, write clean code, ensure mobile optimisation, and build logical page architecture." },
  { icon: <IconTarget />, title: "Reliable Support After Launch",         desc: "We do not just deliver a finished product and disappear. We stay available for updates and support long after your website goes live." },
];

const PROCESS = [
  { step: "01", title: "Consultation",          desc: "We begin by understanding your business, your goals, and what you need from your website." },
  { step: "02", title: "Requirement Analysis",  desc: "We document every feature and page you need — planned carefully to match your business and future growth." },
  { step: "03", title: "Concept & Planning",    desc: "A structured roadmap with timelines and approach so the project stays organised and on track." },
  { step: "04", title: "UI/UX Design",          desc: "We create a clean, easy-to-use layout built around your visitors so they never feel confused." },
  { step: "05", title: "Development",           desc: "Our web developers in Delhi code every feature carefully across all devices — desktop, phone, and tablet." },
  { step: "06", title: "Implementation",        desc: "All tools, forms, and backend setup are handled so your website functions properly for real customers." },
  { step: "07", title: "Testing",               desc: "Before launch, everything goes through thorough testing — speed, mobile, links, and performance." },
  { step: "08", title: "Deployment & Support",  desc: "We handle deployment and remain available for ongoing support long after your website goes live." },
];

const PROBLEMS = [
  ["Website Takes Forever to Load",   "We optimise speed so your site loads fast and keeps visitors from bouncing."],
  ["Design Looks Really Old",         "We redesign your site to look modern, clean, and professional — matching today's standards."],
  ["Does Not Work on Mobile",         "We make sure your site works perfectly on every device — phones, tablets, and desktops."],
  ["No Clear Next Step for Visitors", "We improve UX and CTAs so visitors know exactly what to do and where to go next."],
  ["Getting Visits but No Inquiries", "We build your site to convert — with clear messaging, focused user journeys, and strategic layout."],
];

const FAQS = [
  { q: "How much does website development cost in Delhi?", a: "It depends on the scope of the project. We are always transparent about pricing before any work begins." },
  { q: "How long does it take?",                           a: "A standard website takes a few weeks. Complex projects may take longer. We give you a clear timeline from day one." },
  { q: "Will my website work on mobile?",                  a: "Yes. Every website we build is fully responsive across all devices." },
  { q: "Do you offer post-launch support?",                a: "Yes. Our web developers in Delhi are always available for updates and assistance after launch." },
  { q: "Can you improve my existing website?",             a: "Absolutely. We can redesign and improve your current website without starting from scratch." },
];

export default function WebDevDelhi() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="wdd-page">

      {/* ── HERO ── */}
      <section className="wdd-hero">
        <div className="wdd-hero__inner">
          {/* LEFT */}
          <div className="wdd-hero__left">
            <div className="wdd-hero__badge">
              <span className="wdd-hero__badge-dot" />
              Web Development — Delhi
            </div>
            <h1 className="wdd-hero__title">
              Your Website Isn't Working Hard Enough – Let Social Theka Fix That
            </h1>
            <p className="wdd-hero__sub">
              Delhi is competitive. The market moves fast. A weak website is not just a missed opportunity — it is actively costing you business every single day. We build websites that convert visitors into real clients.
            </p>
            <div className="wdd-hero__ctas">
              <a href="#contact" className="wdd-btn-primary">Start Your Project <IconArrow /></a>
              <a href="#services" className="wdd-btn-outline">View Services</a>
            </div>
            <div className="wdd-hero__stats">
              <div className="wdd-hero__stat">
                <span className="wdd-hero__stat-val">200+</span>
                <span className="wdd-hero__stat-label">Websites Built</span>
              </div>
              <div className="wdd-hero__stat-divider" />
              <div className="wdd-hero__stat">
                <span className="wdd-hero__stat-val">24/7</span>
                <span className="wdd-hero__stat-label">Works for You</span>
              </div>
              <div className="wdd-hero__stat-divider" />
              <div className="wdd-hero__stat">
                <span className="wdd-hero__stat-val">98%</span>
                <span className="wdd-hero__stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="wdd-hero__right">
            <div className="wdd-hero__cards">
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconCode /></div>
                <div>
                  <div className="wdd-hero__card-name">Custom Dev</div>
                  <div className="wdd-hero__card-desc">Built from scratch</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconMobile /></div>
                <div>
                  <div className="wdd-hero__card-name">Responsive</div>
                  <div className="wdd-hero__card-desc">All devices ready</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconShop /></div>
                <div>
                  <div className="wdd-hero__card-name">E-commerce</div>
                  <div className="wdd-hero__card-desc">Sell online easily</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconSearch /></div>
                <div>
                  <div className="wdd-hero__card-name">SEO Ready</div>
                  <div className="wdd-hero__card-desc">Rank on Google</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconZap /></div>
                <div>
                  <div className="wdd-hero__card-name">Fast Loading</div>
                  <div className="wdd-hero__card-desc">Optimised performance</div>
                </div>
              </div>
              <div className="wdd-hero__card wdd-hero__card--highlight">
                <div className="wdd-hero__card-icon"><IconTarget /></div>
                <div>
                  <div className="wdd-hero__card-name">Lead Focused</div>
                  <div className="wdd-hero__card-desc">Converts visitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROWTH MACHINE ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner wdd-section__inner--narrow">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">More Than Just a Website</p>
            <h2 className="wdd-section__title">A 24/7 Growth Machine for Your Business</h2>
            <p className="wdd-section__sub">When someone lands on your site, three things should happen immediately — or it is time for a change.</p>
          </div>
          <div className="wdd-pain__grid">
            {[
              ["They Understand What You Do",      "Within seconds of landing, visitors should clearly know your business, your services, and your value."],
              ["They Feel Confident About You",     "A polished, professional website builds trust before you say a single word."],
              ["They Know How to Reach You",        "Every page guides users toward taking action — calling, filling a form, or sending a message."],
              ["Your Business Stays Unique",        "Delhi has thousands of businesses. Your website should reflect what makes yours different — not look like everyone else's."],
            ].map(([title, desc], i) => (
              <div key={i} className="wdd-pain-card">
                <div className="wdd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdd-pain-card__title">{title}</div>
                  <div className="wdd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="wdd-section wdd-section--white" id="services">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">From Idea to Execution — We Handle It All</p>
            <h2 className="wdd-section__title">Web Development Services in Delhi</h2>
            <p className="wdd-section__sub">We start by genuinely understanding your business, your customers, and your goals. Only then do we start building.</p>
          </div>
          <div className="wdd-services__grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="wdd-service-card">
                <div className="wdd-service-card__icon">{s.icon}</div>
                <h3 className="wdd-service-card__name">{s.name}</h3>
                <p className="wdd-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEBSITE TYPES ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">Not Every Business is the Same</p>
            <h2 className="wdd-section__title">Neither Are Our Websites</h2>
            <p className="wdd-section__sub">Our experienced web developers in Delhi have worked with businesses of every type. Each project required a completely different approach — and that is exactly what we delivered.</p>
          </div>
          <div className="wdd-why__grid">
            {WEBSITE_TYPES.map((t, i) => (
              <div key={i} className="wdd-why-card">
                <div className="wdd-why-card__icon">{t.icon}</div>
                <h3 className="wdd-why-card__title">{t.title}</h3>
                <p className="wdd-why-card__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="wdd-section wdd-section--white">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">Why Delhi Businesses Keep Choosing Social Theka</p>
            <h2 className="wdd-section__title">Top Web Development Company in Delhi</h2>
            <p className="wdd-section__sub">It comes down to trust, transparency, and real results. We do not make promises we cannot keep. We communicate clearly, work diligently, and always put your business goals first.</p>
          </div>
          <div className="wdd-why__grid">
            {WHY_US.map((item, i) => (
              <div key={i} className="wdd-why-card">
                <div className="wdd-why-card__icon">{item.icon}</div>
                <h3 className="wdd-why-card__title">{item.title}</h3>
                <p className="wdd-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">Our Process</p>
            <h2 className="wdd-section__title">From Day One to Launch Day</h2>
            <p className="wdd-section__sub">You will always know where your project stands. No surprises, no confusion — just a clear and organised process from start to finish.</p>
          </div>
          <div className="wdd-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="wdd-process-card">
                <div className="wdd-process-card__step">{p.step}</div>
                <div>
                  <div className="wdd-process-card__title">{p.title}</div>
                  <div className="wdd-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="wdd-section wdd-section--white">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">Is Your Website Sick?</p>
            <h2 className="wdd-section__title">We Know How to Fix It</h2>
            <p className="wdd-section__sub">A lot of businesses in Delhi have the same issues. We assess your website carefully and recommend the most effective solution — whether that is a targeted fix or a full redesign.</p>
          </div>
          <div className="wdd-pain__grid">
            {PROBLEMS.map(([title, desc], i) => (
              <div key={i} className="wdd-pain-card">
                <div className="wdd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdd-pain-card__title">{title}</div>
                  <div className="wdd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner wdd-section__inner--narrow">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">We Build Websites Search Engines Can't Ignore</p>
            <h2 className="wdd-section__title">SEO is Built In — Not Added On</h2>
            <p className="wdd-section__sub">A great website that nobody can find is a wasted investment. At Social Theka, SEO is part of every website we develop from day one.</p>
          </div>
          <div className="wdd-pain__grid">
            {[
              ["Clean, Readable Structure",     "We structure your website so Google can read it clearly and index every page properly."],
              ["Fast Loading Code",             "We write clean code that keeps your site fast — because speed is a ranking factor."],
              ["Proper Mobile Optimisation",    "We ensure full mobile responsiveness since most Delhi users browse on their phones."],
              ["Logical Page Architecture",     "We build a site structure that makes it easy for search engines to crawl and rank your pages."],
            ].map(([title, desc], i) => (
              <div key={i} className="wdd-pain-card">
                <div className="wdd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdd-pain-card__title">{title}</div>
                  <div className="wdd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wdd-section wdd-section--white">
        <div className="wdd-section__inner wdd-section__inner--narrow">
          <div className="wdd-section__head">
            <p className="wdd-eyebrow">FAQs</p>
            <h2 className="wdd-section__title">FAQs – Web Development in Delhi</h2>
          </div>
          <div className="wdd-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`wdd-faq__item ${openFaq === i ? "wdd-faq__item--open" : ""}`}>
                <button className="wdd-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="wdd-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="wdd-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wdd-cta-banner">
        <div className="wdd-cta-banner__inner">
          <h2 className="wdd-cta-banner__title">
            Ready to Go Live? So Are We.
          </h2>
          <p className="wdd-cta-banner__sub">
            If you have been searching for a top web development company in Delhi that delivers real results with honest communication — you have found it. Get in touch with Social Theka today and let us build a website that works for your business, your customers, and your long-term growth.
          </p>
          <a href="#contact" className="wdd-btn-primary wdd-btn-primary--lg">
            Start Your Project <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}