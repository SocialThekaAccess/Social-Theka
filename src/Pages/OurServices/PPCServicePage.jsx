/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PPCServicePage.css";
import ServiceLayout from "../../Component/ServiceLayout";
import ppcHeroImg from "../../assets/ppcSocialTheka.png";

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
const IconCursor = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg>
);
const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const IconDollar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
const IconEye = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
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
          <div className="ppc-hero__left">
            <div className="ppc-hero__badge">
              <span className="ppc-hero__badge-dot" />
              PPC ADVERTISING - CHANDIGARH
            </div>
            <h1 className="ppc-hero__title">
              Pay-Per-Click Advertising<br/>
              <span className="ppc-hero__title-accent">That Actually Converts</span>
            </h1>
            <p className="ppc-hero__desc">
              Most businesses waste money on PPC ads that don't convert. At Social Theka, we run PPC campaigns in Chandigarh that are built around one goal: turning your ad spend into actual revenue. We focus on the metrics that matter—conversions, cost per lead, and ROI.
            </p>
            <div className="ppc-hero__buttons">
              <Link to="/contact" className="ppc-btn-primary">
                Book a Free Call <IconArrow />
              </Link>
            </div>

            {/* Stats Boxes - moved under the button */}
            <div className="ppc-hero__stats">
              <div className="ppc-hero__stat">
                <div className="ppc-hero__stat-number">500+</div>
                <div className="ppc-hero__stat-label">Campaigns Managed</div>
              </div>
              <div className="ppc-hero__stat">
                <div className="ppc-hero__stat-number">3.2x</div>
                <div className="ppc-hero__stat-label">Avg. ROI Delivered</div>
              </div>
              <div className="ppc-hero__stat ppc-hero__stat--highlight">
                <div className="ppc-hero__stat-number">40%</div>
                <div className="ppc-hero__stat-label">Cost Per Lead Reduced</div>
              </div>
            </div>
          </div>

          <div className="ppc-hero__right">
            <div className="ppc-hero__image-wrapper">
              <img src={ppcHeroImg} alt="PPC Advertising Services" className="ppc-hero__image" loading="eager" decoding="async" fetchPriority="high" />
              
              {/* Floating Stats Cards */}
              <div className="ppc-hero__floating-card ppc-hero__floating-card--top">
                <div className="ppc-hero__floating-card-icon">
                  <IconTrendingUp />
                </div>
                <div className="ppc-hero__floating-card-label">ROI DELIVERED</div>
                <div className="ppc-hero__floating-card-desc">3.2x average returns</div>
              </div>

              <div className="ppc-hero__floating-card ppc-hero__floating-card--left">
                <div className="ppc-hero__floating-card-icon">
                  <IconTarget />
                </div>
                <div className="ppc-hero__floating-card-label">COST REDUCED</div>
                <div className="ppc-hero__floating-card-desc">40% lower cost per lead</div>
              </div>

              <div className="ppc-hero__floating-card ppc-hero__floating-card--right">
                <div className="ppc-hero__floating-card-icon">
                  <IconChart />
                </div>
                <div className="ppc-hero__floating-card-label">CAMPAIGNS</div>
                <div className="ppc-hero__floating-card-desc">500+ managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE ── */}
      <section className="ppc-performance">
        <div className="ppc-performance__inner">
          <div className="ppc-performance__header">
            <span className="ppc-badge">Performance-Driven Results</span>
            <h2 className="ppc-performance__title">Outcomes That Drive Revenue</h2>
          </div>
          <div className="ppc-performance__grid">
            {[
              { icon: <IconCursor />, title: "High-Intent Traffic", desc: "Targeted visitors with genuine purchase intent and immediate conversion potential." },
              { icon: <IconTrendingUp />, title: "Conversion Excellence", desc: "Optimized campaigns and landing pages engineered to maximize customer acquisition." },
              { icon: <IconDollar />, title: "Cost Efficiency", desc: "Advanced targeting and continuous optimization that reduces acquisition costs." },
              { icon: <IconEye />, title: "Transparent ROI", desc: "Real-time tracking and detailed analytics for complete campaign visibility." },
            ].map((item, i) => (
              <div key={i} className="ppc-performance__card">
                <div className="ppc-performance__icon">{item.icon}</div>
                <h3 className="ppc-performance__card-title">{item.title}</h3>
                <p className="ppc-performance__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="ppc-platforms" id="platforms">
        <div className="ppc-platforms__inner">
          <div className="ppc-platforms__header">
            <span className="ppc-badge">Multi-Platform Expertise</span>
            <h2 className="ppc-platforms__title">Strategic Advertising Across All Channels</h2>
            <p className="ppc-platforms__subtitle">Enterprise-grade campaigns optimized for maximum reach and conversion on every major platform.</p>
          </div>
          <div className="ppc-platforms__grid">
            {PLATFORMS.map((p, i) => (
              <div key={i} className="ppc-platform-card">
                <div className="ppc-platform-card__header">
                  <div className="ppc-platform-card__icon">{p.icon}</div>
                  <h3 className="ppc-platform-card__name">{p.name}</h3>
                </div>
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
      <section className="ppc-conversion">
        <div className="ppc-conversion__inner">
          <div className="ppc-conversion__header">
            <span className="ppc-badge">Conversion Engineering</span>
            <h2 className="ppc-conversion__title">Precision-Targeted Campaign Architecture</h2>
          </div>
          <div className="ppc-conversion__grid">
            {[
              ["Strategic Targeting", "Advanced audience segmentation ensures maximum relevance and conversion probability."],
              ["Action-Driven Design", "Compelling ad creative and strategic CTAs engineered for maximum engagement."],
              ["Conversion Optimization", "Continuous A/B testing and data analysis for sustained performance improvement."],
              ["ROI Maximization", "Intelligent budget allocation and bid strategies that eliminate waste and amplify returns."],
            ].map(([title, desc], i) => (
              <div key={i} className="ppc-conversion__card">
                <div className="ppc-conversion__number">{String(i + 1).padStart(2, '0')}</div>
                <div className="ppc-conversion__content">
                  <h3 className="ppc-conversion__card-title">{title}</h3>
                  <p className="ppc-conversion__card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="ppc-excellence">
        <div className="ppc-excellence__inner">
          <div className="ppc-excellence__header">
            <span className="ppc-badge ppc-badge--dark">The Social Theka Advantage</span>
            <h2 className="ppc-excellence__title">Premium PPC Management</h2>
          </div>
          <div className="ppc-excellence__grid">
            {WHY_US.map((item, i) => (
              <div key={i} className="ppc-excellence__card">
                <div className="ppc-excellence__icon">{item.icon}</div>
                <h3 className="ppc-excellence__card-title">{item.title}</h3>
                <p className="ppc-excellence__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="ppc-process">
        <div className="ppc-process__inner">
          <div className="ppc-process__header">
            <span className="ppc-badge">Strategic Methodology</span>
            <h2 className="ppc-process__title">Our Proven Framework</h2>
          </div>
          <div className="ppc-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="ppc-process__card">
                <div className="ppc-process__number">{p.step}</div>
                <div className="ppc-process__content">
                  <h3 className="ppc-process__card-title">{p.title}</h3>
                  <p className="ppc-process__card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="ppc-solutions">
        <div className="ppc-solutions__inner">
          <div className="ppc-solutions__header">
            <span className="ppc-badge ppc-badge--dark">Challenge Resolution</span>
            <h2 className="ppc-solutions__title">Strategic Solutions to Common Obstacles</h2>
          </div>
          <div className="ppc-solutions__grid">
            {PAIN_POINTS.map(([title, desc], i) => (
              <div key={i} className="ppc-solutions__card">
                <div className="ppc-solutions__icon"><IconCheck /></div>
                <div className="ppc-solutions__content">
                  <h3 className="ppc-solutions__card-title">{title}</h3>
                  <p className="ppc-solutions__card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE SOLUTIONS ── */}
      <section className="ppc-services">
        <div className="ppc-services__inner">
          <div className="ppc-services__header">
            <span className="ppc-badge">Comprehensive Services</span>
            <h2 className="ppc-services__title">Full-Spectrum PPC Solutions</h2>
          </div>
          <div className="ppc-services__grid">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="ppc-services__card">
                <div className="ppc-services__icon"><IconChart /></div>
                <h3 className="ppc-services__card-title">{s.title}</h3>
                <p className="ppc-services__card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ppc-faq-section">
        <div className="ppc-faq-section__inner">
          <div className="ppc-faq-header">
            <span className="ppc-faq-badge">Common Inquiries</span>
            <h2 className="ppc-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="ppc-faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`ppc-faq-card ${openFaq === i ? "ppc-faq-card--open" : ""}`}>
                <button className="ppc-faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="ppc-faq-question-text">{faq.q}</span>
                  <span className="ppc-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="ppc-faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="ppc-cta">
        <div className="ppc-cta__inner">
          <div className="ppc-cta__content">
            <h2 className="ppc-cta__title">
              Ready to Scale Your Growth?
            </h2>
            <p className="ppc-cta__subtitle">
              Partner with Chandigarh's premier PPC agency. Complimentary strategy audit included.
            </p>
          </div>
          <Link to="/contact" className="ppc-btn-primary ppc-btn-primary--lg">
            Schedule Consultation <IconArrow />
          </Link>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}

