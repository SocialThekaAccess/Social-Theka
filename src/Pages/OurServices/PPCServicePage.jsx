import { useState } from "react";
import "./PPCServicePage.css";
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
  { icon: <IconGoogle />,    name: "Google Ads",    desc: "As an experienced PPC agency in Chandigarh, we help your business appear when potential customers are actively searching. Target high-intent keywords, appear at the top of search results, and drive immediate traffic and leads.", tags: ["Search Ads", "Display Ads", "Shopping Ads"] },
  { icon: <IconFacebook />,  name: "Facebook Ads",  desc: "Social media campaigns that assist you in reaching users based on their interests and behavior. Build brand awareness, generate leads, and retarget interested users.", tags: ["Lead Gen", "Retargeting", "Brand Awareness"] },
  { icon: <IconInstagram />, name: "Instagram Ads", desc: "We create visually engaging campaigns that help your brand stand out with creative ad designs and mobile-first campaigns for better engagement and conversions.", tags: ["Story Ads", "Reels Ads", "Carousel Ads"] },
  { icon: <IconYoutube />,   name: "YouTube Ads",   desc: "Video ads help you connect faster and build trust with your audience. Increase brand recall, drive targeted traffic, and capture attention effectively.", tags: ["Skippable", "Bumper Ads", "In-Feed"] },
  { icon: <IconLinkedin />,  name: "LinkedIn Ads",  desc: "For B2B businesses, Social Theka creates campaigns that reach professionals and decision-makers. Generate quality leads, build authority, and reach the right audience.", tags: ["Lead Gen Forms", "Sponsored Posts", "InMail"] },
];

const WHY_US = [
  { icon: <IconChart />,  title: "Data-Driven",            desc: "We are guided by real data in all of our decisions — user behavior, keyword performance, and campaign results — to deliver consistent and reliable results." },
  { icon: <IconTarget />, title: "Conversion-Focused",     desc: "Social Theka's focus is to turn traffic into results. We put together ad campaigns and optimize landing pages so users take the action you want." },
  { icon: <IconZap />,    title: "Continuously Optimized", desc: "We constantly look at how things are performing, test new ideas, and improve campaigns. From keywords to ad copy to landing pages — we're always improving." },
  { icon: <IconShield />, title: "Transparent Reporting",  desc: "You'll always know where your money is going and how your ads are performing. Simple and honest reporting — no confusion, no jargon." },
  { icon: <IconUsers />,  title: "Audience Precision",     desc: "We focus on reaching the right audience so your ads are shown to people who are more likely to convert, reducing waste on every rupee spent." },
  { icon: <IconRupee />,  title: "Maximum ROI",            desc: "We make sure your ad spend delivers the best possible returns. Our focus is on reducing waste and improving performance over time." },
];

const PROCESS = [
  { step: "01", title: "Business Goal Analysis",    desc: "We understand your business, audience, and objectives." },
  { step: "02", title: "Competitor Research",        desc: "We study competitors to identify opportunities you can take advantage of." },
  { step: "03", title: "Keyword Research",           desc: "We find keywords that are most likely to convert for your business." },
  { step: "04", title: "Campaign Planning",          desc: "We create a strategy based on your goals and budget." },
  { step: "05", title: "Ad Creation",               desc: "We write clear and engaging ads that drive action." },
  { step: "06", title: "Landing Page Optimization", desc: "We design landing pages to convert visitors into leads and customers." },
  { step: "07", title: "Conversion Tracking",       desc: "We track performance to measure results accurately." },
  { step: "08", title: "Monitoring & Optimization", desc: "We are always improving campaigns for better ROI." },
];

const PAIN_POINTS = [
  ["High Cost Per Click",  "We optimize your campaigns to reduce unnecessary spending and improve cost efficiency."],
  ["Low Conversion Rates", "We improve your landing pages and ads to increase the number of visitors who become leads and buyers."],
  ["Poor Targeting",       "We focus on reaching the right audience so your ads are shown to people more likely to convert."],
  ["Ineffective Ads",      "We create clear and engaging ad copies that connect better with your audience."],
  ["Budget Wastage",       "We track performance closely to ensure your budget is used wisely and delivers better results."],
];

const SOLUTIONS = [
  { title: "Google PPC Ads",          desc: "We create Google Ads campaigns that help your business appear at the top of search results when users are actively searching." },
  { title: "Pay Per Click Services",  desc: "Our complete PPC services in Chandigarh cover everything — from planning to optimization — while you focus on running your business." },
  { title: "Ecommerce PPC Services",  desc: "We help online stores drive traffic and increase sales. From product ads to remarketing, we ensure your products reach ready-to-buy customers." },
  { title: "PPC Consultant Services", desc: "If your ads aren't performing well, we guide you with the right strategy to make better decisions and improve results." },
  { title: "Search Engine Marketing", desc: "We implement paid search strategies that increase your visibility and bring in high-intent audiences at the right time." },
];

const FAQS = [
  { q: "How much does PPC cost?",                 a: "The cost depends on your goals and industry. Social Theka helps you set a budget that delivers results." },
  { q: "How quickly can I see results?",          a: "You can start seeing traffic quickly, and performance improves over time as we optimize your campaigns." },
  { q: "Which platform is best?",                 a: "It depends on your audience. Social Theka helps you choose the right platform for your business goals." },
  { q: "Do you provide reports?",                 a: "Yes, we provide simple and transparent reports so you always know how your campaigns are performing." },
  { q: "Can PPC work for small businesses?",      a: "Yes, with the right strategy, even a small budget can deliver strong and consistent results." },
];

export default function PPCServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="ppc-page">

      {/* ── HERO ── */}
      <section className="ppc-hero">
        <div className="ppc-hero__inner">
          {/* LEFT COLUMN */}
          <div className="ppc-hero__left">
            <div className="ppc-hero__badge">
              <span className="ppc-hero__badge-dot" />
              PPC Services — Chandigarh
            </div>
            <h1 className="ppc-hero__title">
              Best PPC Services in Chandigarh – Drive Clicks, Leads &amp; Real Growth
            </h1>
            <p className="ppc-hero__sub">
              Creating ads is not the hard part — getting real results is where most businesses face challenges. At Social Theka, we offer PPC services in Chandigarh focused on real business growth, not just traffic.
            </p>
            <div className="ppc-hero__ctas">
              <a href="#contact" className="ppc-btn-primary">Get Free PPC Audit <IconArrow /></a>
              <a href="#platforms" className="ppc-btn-outline">View Platforms</a>
            </div>
            {/* Mini stats */}
            <div className="ppc-hero__stats">
              <div className="ppc-hero__stat">
                <span className="ppc-hero__stat-val">500+</span>
                <span className="ppc-hero__stat-label">Campaigns Managed</span>
              </div>
              <div className="ppc-hero__stat-divider" />
              <div className="ppc-hero__stat">
                <span className="ppc-hero__stat-val">3.2x</span>
                <span className="ppc-hero__stat-label">Avg. ROI Delivered</span>
              </div>
              <div className="ppc-hero__stat-divider" />
              <div className="ppc-hero__stat">
                <span className="ppc-hero__stat-val">98%</span>
                <span className="ppc-hero__stat-label">Client Retention</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="ppc-hero__right">
            <div className="ppc-hero__cards">
              <div className="ppc-hero__card">
                <div className="ppc-hero__card-icon"><IconGoogle /></div>
                <div>
                  <div className="ppc-hero__card-name">Google Ads</div>
                  <div className="ppc-hero__card-desc">Top of search results</div>
                </div>
              </div>
              <div className="ppc-hero__card">
                <div className="ppc-hero__card-icon"><IconFacebook /></div>
                <div>
                  <div className="ppc-hero__card-name">Facebook Ads</div>
                  <div className="ppc-hero__card-desc">Interest-based targeting</div>
                </div>
              </div>
              <div className="ppc-hero__card">
                <div className="ppc-hero__card-icon"><IconInstagram /></div>
                <div>
                  <div className="ppc-hero__card-name">Instagram Ads</div>
                  <div className="ppc-hero__card-desc">Visual campaigns</div>
                </div>
              </div>
              <div className="ppc-hero__card">
                <div className="ppc-hero__card-icon"><IconYoutube /></div>
                <div>
                  <div className="ppc-hero__card-name">YouTube Ads</div>
                  <div className="ppc-hero__card-desc">Video advertising</div>
                </div>
              </div>
              <div className="ppc-hero__card">
                <div className="ppc-hero__card-icon"><IconLinkedin /></div>
                <div>
                  <div className="ppc-hero__card-name">LinkedIn Ads</div>
                  <div className="ppc-hero__card-desc">B2B lead generation</div>
                </div>
              </div>
              <div className="ppc-hero__card ppc-hero__card--highlight">
                <div className="ppc-hero__card-icon"><IconTarget /></div>
                <div>
                  <div className="ppc-hero__card-name">40% Less</div>
                  <div className="ppc-hero__card-desc">Cost per lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE ── */}
      <section className="ppc-section ppc-section--white">
        <div className="ppc-section__inner ppc-section__inner--narrow">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">Performance That Actually Matters</p>
            <h2 className="ppc-section__title">Results That Truly Impact Your Business</h2>
            <p className="ppc-section__sub">
              As a top PPC company in Chandigarh, we focus on outcomes that matter — not just vanity metrics.
            </p>
          </div>
          <div className="ppc-pain__grid">
            {[
              ["High-Quality Traffic",      "We bring in relevant, high-intent visitors who are actually interested in your services."],
              ["Improved Conversion Rates", "We optimize ads and landing pages so more visitors become paying customers."],
              ["Reduced Cost Per Lead",     "Smarter targeting and continuous optimization lower your cost per acquisition."],
              ["Measurable ROI",            "Every rupee is tracked. You always know what your ad spend is delivering."],
            ].map(([title, desc], i) => (
              <div key={i} className="ppc-pain-card">
                <div className="ppc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="ppc-pain-card__title">{title}</div>
                  <div className="ppc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="ppc-section ppc-section--gray" id="platforms">
        <div className="ppc-section__inner">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">Result-Driven PPC Services in Chandigarh</p>
            <h2 className="ppc-section__title">Your Audience is Everywhere. So Are We.</h2>
            <p className="ppc-section__sub">We run high-performance campaigns across every major platform — tailored to where your customers actually spend time.</p>
          </div>
          <div className="ppc-platforms__grid">
            {PLATFORMS.map((p, i) => (
              <div key={i} className="ppc-platform-card">
                <div className="ppc-platform-card__icon">{p.icon}</div>
                <h3 className="ppc-platform-card__name">{p.name}</h3>
                <p className="ppc-platform-card__desc">{p.desc}</p>
                <div className="ppc-platform-card__tags">
                  {p.tags.map(t => <span key={t} className="ppc-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TURN CLICKS INTO CUSTOMERS ── */}
      <section className="ppc-section ppc-section--white">
        <div className="ppc-section__inner ppc-section__inner--narrow">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">Turn Clicks into Customers</p>
            <h2 className="ppc-section__title">Best PPC Services in Chandigarh — Focused on Conversions</h2>
            <p className="ppc-section__sub">Getting clicks is only the first step — what matters is turning those clicks into customers.</p>
          </div>
          <div className="ppc-pain__grid">
            {[
              ["Attract the Right Audience",    "We focus on those who have a sincere interest in your goods or services, so your ads reach people more likely to convert."],
              ["Guide Users Toward Action",     "We present ads which push users to take the next step with confidence — clear messaging and strong CTAs that improve engagement."],
              ["Improve Conversion Rates",      "We optimize campaigns so more visitors turn into leads and customers. Small improvements in strategy lead to better overall results."],
              ["Maximize ROI",                  "We make sure your ad spend delivers the best possible returns by reducing waste and improving performance over time."],
            ].map(([title, desc], i) => (
              <div key={i} className="ppc-pain-card">
                <div className="ppc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="ppc-pain-card__title">{title}</div>
                  <div className="ppc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="ppc-section ppc-section--gray">
        <div className="ppc-section__inner">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">Why Choose Social Theka</p>
            <h2 className="ppc-section__title">Why Social Theka is a Top PPC Company in Chandigarh</h2>
            <p className="ppc-section__sub">We don't complicate things — we focus on what actually works and brings results.</p>
          </div>
          <div className="ppc-why__grid">
            {WHY_US.map((item, i) => (
              <div key={i} className="ppc-why-card">
                <div className="ppc-why-card__icon">{item.icon}</div>
                <h3 className="ppc-why-card__title">{item.title}</h3>
                <p className="ppc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="ppc-section ppc-section--white">
        <div className="ppc-section__inner">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">Our Process</p>
            <h2 className="ppc-section__title">Social Theka's Step-by-Step PPC Process</h2>
          </div>
          <div className="ppc-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="ppc-process-card">
                <div className="ppc-process-card__step">{p.step}</div>
                <div>
                  <div className="ppc-process-card__title">{p.title}</div>
                  <div className="ppc-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="ppc-section ppc-section--gray">
        <div className="ppc-section__inner">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">Common PPC Problems — Solved</p>
            <h2 className="ppc-section__title">How We Help You Overcome PPC Roadblocks</h2>
            <p className="ppc-section__sub">Many businesses struggle with common PPC issues. At Social Theka, we help solve them with better strategy and continuous optimization.</p>
          </div>
          <div className="ppc-pain__grid">
            {PAIN_POINTS.map(([title, desc], i) => (
              <div key={i} className="ppc-pain-card">
                <div className="ppc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="ppc-pain-card__title">{title}</div>
                  <div className="ppc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE SOLUTIONS ── */}
      <section className="ppc-section ppc-section--white">
        <div className="ppc-section__inner">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">Complete PPC Solutions</p>
            <h2 className="ppc-section__title">Social Theka Offers Comprehensive PPC Solutions</h2>
          </div>
          <div className="ppc-why__grid">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="ppc-why-card">
                <div className="ppc-why-card__icon"><IconChart /></div>
                <h3 className="ppc-why-card__title">{s.title}</h3>
                <p className="ppc-why-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ppc-section ppc-section--gray">
        <div className="ppc-section__inner ppc-section__inner--narrow">
          <div className="ppc-section__head">
            <p className="ppc-eyebrow">FAQs</p>
            <h2 className="ppc-section__title">Questions You're Probably Thinking</h2>
          </div>
          <div className="ppc-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`ppc-faq__item ${openFaq === i ? "ppc-faq__item--open" : ""}`}>
                <button className="ppc-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="ppc-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="ppc-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="ppc-cta-banner">
        <div className="ppc-cta-banner__inner">
          <h2 className="ppc-cta-banner__title">
            Let's Grow Your Business with the Best PPC Services in Chandigarh
          </h2>
          <p className="ppc-cta-banner__sub">
            Let's build campaigns that don't just bring clicks — but bring real results. Free PPC audit included.
          </p>
          <a href="#contact" className="ppc-btn-primary ppc-btn-primary--lg">
            Book a Free Consultation <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
