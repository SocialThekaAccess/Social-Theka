import { useState } from "react";
import "./PPCServicePageDelhi.css";
import ServiceLayout from "../../Component/ServiceLayout";

const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/><path d="m7 16 4-4 4 4 4-6"/></svg>
);
const IconRupee = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12M6 8h12M6 13l8.5 8"/><path d="M6 8a5 5 0 0 0 0 10"/></svg>
);
const IconGoogle = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    <path d="m7 10 3 3 4-5 3 2"/></svg>
);
const IconFacebook = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconInstagram = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
);
const IconYoutube = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);
const IconLinkedin = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const STATS = [
  { value: "500+", label: "Campaigns Managed" },
  { value: "3.2x", label: "Avg. ROI Delivered" },
  { value: "40%",  label: "Cost Per Lead Reduced" },
  { value: "98%",  label: "Client Retention Rate" },
];

const PLATFORMS = [
  { icon: <IconGoogle />,    name: "Google Ads",     desc: "Appear at the top when customers are actively searching for your services. Target high-intent keywords and drive immediate traffic and leads.",     tags: ["Search Ads", "Display Ads", "Shopping Ads"] },
  { icon: <IconFacebook />,  name: "Facebook Ads",   desc: "Target users based on interests, behavior, and demographics. Build brand awareness and retarget interested users effectively.",                     tags: ["Lead Gen", "Retargeting", "Brand Awareness"] },
  { icon: <IconInstagram />, name: "Instagram Ads",  desc: "Create engaging, visually strong campaigns to help your brand stand out with mobile-first creative for better engagement and conversions.",        tags: ["Story Ads", "Reels Ads", "Carousel Ads"] },
  { icon: <IconYoutube />,   name: "YouTube Ads",    desc: "Video ads that help you connect faster and build trust. Increase brand recall, drive targeted traffic, and capture attention effectively.",        tags: ["Skippable", "Bumper Ads", "In-Feed"] },
  { icon: <IconLinkedin />,  name: "LinkedIn Ads",   desc: "For B2B businesses — create campaigns that reach professionals and decision-makers who are ready to buy.",                                          tags: ["Lead Gen Forms", "Sponsored Posts", "InMail"] },
];

const WHY_US = [
  { icon: <IconChart />,  title: "Data-Driven",            desc: "Every decision is based on real data — user behavior, keyword performance, and campaign insights — so results are consistent and reliable." },
  { icon: <IconTarget />, title: "Conversion-Focused",     desc: "Our goal is simple: turn traffic into leads and customers. We don't just aim for clicks." },
  { icon: <IconZap />,    title: "Continuously Optimized", desc: "We keep improving campaigns regularly — adjusting keywords, refining ads, and optimizing landing pages for better results over time." },
  { icon: <IconShield />, title: "Transparent Reporting",  desc: "You won't get confused with complicated reports. We explain everything clearly so you always know what's happening and where your money is going." },
  { icon: <IconUsers />,  title: "Audience Precision",     desc: "Your ads are shown to people who are actually interested in your services — reducing waste and maximizing every rupee spent." },
  { icon: <IconRupee />,  title: "Maximum ROI",            desc: "We focus on reducing waste and improving performance consistently so your ad spend delivers the best possible returns." },
];

const PROCESS = [
  { step: "01", title: "Business Goal Analysis",    desc: "We understand your business, target audience, and what success looks like for you." },
  { step: "02", title: "Competitor Research",        desc: "We study your competition to find gaps and opportunities you can take advantage of." },
  { step: "03", title: "Keyword Research",           desc: "We find the exact keywords your ideal customers use when they are ready to buy." },
  { step: "04", title: "Campaign Planning",          desc: "We create a full strategy aligned with your goals, audience, and monthly budget." },
  { step: "05", title: "Ad Creation",               desc: "We write clear, compelling ads with strong CTAs that make users want to click." },
  { step: "06", title: "Landing Page Optimization", desc: "We ensure the page users land on is designed to convert — not just inform." },
  { step: "07", title: "Conversion Tracking",       desc: "We set up tracking so every lead, call, and sale is attributed correctly." },
  { step: "08", title: "Monitoring & Optimization", desc: "We review performance regularly and improve campaigns for better ROI every week." },
];

const PAIN_POINTS = [
  ["High Cost Per Click",  "We optimize campaigns to cut unnecessary spend and improve cost efficiency without losing reach."],
  ["Low Conversion Rates", "We improve ad copy and landing pages so more visitors become actual leads and buyers."],
  ["Poor Targeting",       "We narrow your audience so ads are shown only to people most likely to convert."],
  ["Weak Ad Creatives",    "We write clear, engaging ads that speak directly to your audience's needs and goals."],
  ["Budget Wastage",       "We track every rupee and reallocate spend to what's actually working."],
];

const SOLUTIONS = [
  { title: "Google PPC Ads",          desc: "Appear at the top when users are searching for your services." },
  { title: "Pay Per Click Services",  desc: "End-to-end campaign management from strategy to reporting." },
  { title: "Ecommerce PPC Services",  desc: "Drive traffic and increase sales for your online store." },
  { title: "PPC Consultant Services", desc: "Improve underperforming campaigns with expert guidance." },
  { title: "Search Engine Marketing", desc: "Reach high-intent audiences across search platforms." },
];

const FAQS = [
  { q: "How much does PPC cost?",                a: "It depends on your goals and industry. We help you set a realistic budget that delivers measurable results — packages starting from ₹8,999/mo." },
  { q: "How quickly can I see results?",         a: "You can start seeing traffic quickly after launch, and performance improves as we optimize over the first 2–4 weeks." },
  { q: "Which platform is best for my business?",a: "It depends on your audience. B2C businesses do well on Google and Instagram. B2B businesses benefit most from Google and LinkedIn. We help you choose the right mix." },
  { q: "Do you provide reports?",                a: "Yes — clear and simple reporting so you always know what's happening and where your money is going. No jargon, no confusion." },
  { q: "Can PPC work for small businesses?",     a: "Absolutely. Even small budgets can deliver strong results with the right strategy. We've helped businesses start from as low as ₹5,000/mo in ad spend." },
];

export default function PPCServicePageDelhi() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="ppcd-page">

      {/* ── HERO ── */}
      <section className="ppcd-hero">
        <div className="ppcd-hero__inner">
          {/* LEFT COLUMN */}
          <div className="ppcd-hero__left">
            <div className="ppcd-hero__badge">
              <span className="ppcd-hero__badge-dot" />
              PPC Services — Delhi
            </div>
            <h1 className="ppcd-hero__title">
              Best PPC Services in Delhi – Drive Clicks, Leads &amp; Real Growth
            </h1>
            <p className="ppcd-hero__sub">
              Creating ads is not the hard part — getting real results is where most businesses face challenges. At Social Theka, we offer PPC services in Delhi that focus on real business growth, not just traffic.
            </p>
            <div className="ppcd-hero__ctas">
              <a href="#contact" className="ppcd-btn-primary">Get Free PPC Audit <IconArrow /></a>
              <a href="#platforms" className="ppcd-btn-outline">View Platforms</a>
            </div>
            <div className="ppcd-hero__stats">
              <div className="ppcd-hero__stat">
                <span className="ppcd-hero__stat-val">500+</span>
                <span className="ppcd-hero__stat-label">Campaigns Managed</span>
              </div>
              <div className="ppcd-hero__stat-divider" />
              <div className="ppcd-hero__stat">
                <span className="ppcd-hero__stat-val">3.2x</span>
                <span className="ppcd-hero__stat-label">Avg. ROI Delivered</span>
              </div>
              <div className="ppcd-hero__stat-divider" />
              <div className="ppcd-hero__stat">
                <span className="ppcd-hero__stat-val">98%</span>
                <span className="ppcd-hero__stat-label">Client Retention</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="ppcd-hero__right">
            <div className="ppcd-hero__cards">
              <div className="ppcd-hero__card">
                <div className="ppcd-hero__card-icon"><IconGoogle /></div>
                <div>
                  <div className="ppcd-hero__card-name">Google Ads</div>
                  <div className="ppcd-hero__card-desc">Top of search results</div>
                </div>
              </div>
              <div className="ppcd-hero__card">
                <div className="ppcd-hero__card-icon"><IconFacebook /></div>
                <div>
                  <div className="ppcd-hero__card-name">Facebook Ads</div>
                  <div className="ppcd-hero__card-desc">Interest-based targeting</div>
                </div>
              </div>
              <div className="ppcd-hero__card">
                <div className="ppcd-hero__card-icon"><IconInstagram /></div>
                <div>
                  <div className="ppcd-hero__card-name">Instagram Ads</div>
                  <div className="ppcd-hero__card-desc">Visual campaigns</div>
                </div>
              </div>
              <div className="ppcd-hero__card">
                <div className="ppcd-hero__card-icon"><IconYoutube /></div>
                <div>
                  <div className="ppcd-hero__card-name">YouTube Ads</div>
                  <div className="ppcd-hero__card-desc">Video advertising</div>
                </div>
              </div>
              <div className="ppcd-hero__card">
                <div className="ppcd-hero__card-icon"><IconLinkedin /></div>
                <div>
                  <div className="ppcd-hero__card-name">LinkedIn Ads</div>
                  <div className="ppcd-hero__card-desc">B2B lead generation</div>
                </div>
              </div>
              <div className="ppcd-hero__card ppcd-hero__card--highlight">
                <div className="ppcd-hero__card-icon"><IconTarget /></div>
                <div>
                  <div className="ppcd-hero__card-name">40% Less</div>
                  <div className="ppcd-hero__card-desc">Cost per lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ppcd-section ppcd-section--white">
        <div className="ppcd-section__inner ppcd-section__inner--narrow">
          <div className="ppcd-section__head">
            <p className="ppcd-eyebrow">Performance That Actually Matters</p>
            <h2 className="ppcd-section__title">Results That Are Clear and Meaningful</h2>
            <p className="ppcd-section__sub">
              As a top PPC company in Delhi, we focus on outcomes that truly impact your business — not vanity metrics.
            </p>
          </div>
          <div className="ppcd-pain__grid">
            {[
              ["High-Quality Traffic",      "We bring in relevant, high-intent visitors who are actually interested in your services."],
              ["Improved Conversion Rates", "We optimize ads and landing pages so more visitors become paying customers."],
              ["Reduced Cost Per Lead",     "Smarter targeting and continuous optimization lower your cost per acquisition."],
              ["Measurable ROI",            "Every rupee is tracked. You always know what your ad spend is delivering."],
            ].map(([title, desc], i) => (
              <div key={i} className="ppcd-pain-card">
                <div className="ppcd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="ppcd-pain-card__title">{title}</div>
                  <div className="ppcd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="ppcd-section ppcd-section--gray" id="platforms">
        <div className="ppcd-section__inner">
          <div className="ppcd-section__head">
            <p className="ppcd-eyebrow">Result-Driven PPC Services in Delhi</p>
            <h2 className="ppcd-section__title">Your Audience is Everywhere. So Are We.</h2>
            <p className="ppcd-section__sub">We run high-performance campaigns across every major platform — tailored to where your customers actually spend time.</p>
          </div>
          <div className="ppcd-platforms__grid">
            {PLATFORMS.map((p, i) => (
              <div key={i} className="ppcd-platform-card">
                <div className="ppcd-platform-card__icon">{p.icon}</div>
                <h3 className="ppcd-platform-card__name">{p.name}</h3>
                <p className="ppcd-platform-card__desc">{p.desc}</p>
                <div className="ppcd-platform-card__tags">
                  {p.tags.map(t => <span key={t} className="ppcd-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="ppcd-section ppcd-section--white">
        <div className="ppcd-section__inner">
          <div className="ppcd-section__head">
            <p className="ppcd-eyebrow">Why Choose Social Theka</p>
            <h2 className="ppcd-section__title">Why Social Theka is a Top PPC Company in Delhi</h2>
            <p className="ppcd-section__sub">We keep things simple and transparent. No overpromises — just work that actually makes sense for your business.</p>
          </div>
          <div className="ppcd-why__grid">
            {WHY_US.map((item, i) => (
              <div key={i} className="ppcd-why-card">
                <div className="ppcd-why-card__icon">{item.icon}</div>
                <h3 className="ppcd-why-card__title">{item.title}</h3>
                <p className="ppcd-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="ppcd-section ppcd-section--gray">
        <div className="ppcd-section__inner">
          <div className="ppcd-section__head">
            <p className="ppcd-eyebrow">Our Process</p>
            <h2 className="ppcd-section__title">Social Theka's Step-by-Step PPC Process</h2>
          </div>
          <div className="ppcd-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="ppcd-process-card">
                <div className="ppcd-process-card__step">{p.step}</div>
                <div>
                  <div className="ppcd-process-card__title">{p.title}</div>
                  <div className="ppcd-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="ppcd-section ppcd-section--white">
        <div className="ppcd-section__inner">
          <div className="ppcd-section__head">
            <p className="ppcd-eyebrow">Common PPC Problems — Solved</p>
            <h2 className="ppcd-section__title">How We Help You Overcome PPC Challenges</h2>
            <p className="ppcd-section__sub">Many businesses struggle with the same problems. At Social Theka, we fix them with better strategy, targeting, and continuous optimization.</p>
          </div>
          <div className="ppcd-pain__grid">
            {PAIN_POINTS.map(([title, desc], i) => (
              <div key={i} className="ppcd-pain-card">
                <div className="ppcd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="ppcd-pain-card__title">{title}</div>
                  <div className="ppcd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE SOLUTIONS ── */}
      <section className="ppcd-section ppcd-section--gray">
        <div className="ppcd-section__inner">
          <div className="ppcd-section__head">
            <p className="ppcd-eyebrow">Complete PPC Solutions</p>
            <h2 className="ppcd-section__title">Social Theka Offers Complete PPC Solutions</h2>
          </div>
          <div className="ppcd-why__grid">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="ppcd-why-card">
                <div className="ppcd-why-card__icon"><IconChart /></div>
                <h3 className="ppcd-why-card__title">{s.title}</h3>
                <p className="ppcd-why-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ppcd-section ppcd-section--white">
        <div className="ppcd-section__inner ppcd-section__inner--narrow">
          <div className="ppcd-section__head">
            <p className="ppcd-eyebrow">FAQs</p>
            <h2 className="ppcd-section__title">Questions You're Probably Thinking</h2>
          </div>
          <div className="ppcd-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`ppcd-faq__item ${openFaq === i ? "ppcd-faq__item--open" : ""}`}>
                <button className="ppcd-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="ppcd-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="ppcd-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="ppcd-cta-banner">
        <div className="ppcd-cta-banner__inner">
          <h2 className="ppcd-cta-banner__title">
            Let's Grow Your Business with the Best PPC Services in Delhi
          </h2>
          <p className="ppcd-cta-banner__sub">
            Let's build campaigns that don't just bring clicks — but bring real results. Free PPC audit included.
          </p>
          <a href="#contact" className="ppcd-btn-primary ppcd-btn-primary--lg">
            Book a Free Consultation <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}