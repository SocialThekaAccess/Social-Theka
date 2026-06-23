import { useState, useEffect, useRef } from "react";
import "./ServiceTabs.css";

const SERVICES = [
  {
    tab: "Search Engine Optimisation (SEO)",
    points: [
      { title: "Keyword research & strategy:", desc: "We identify high-intent keywords your target audience is actually searching for, then build a content and technical plan around them." },
      { title: "On-page optimisation:", desc: "From meta tags and headings to internal linking and content structure — every page is optimised to rank and convert." },
      { title: "Technical SEO audit:", desc: "We fix crawl errors, site speed issues, Core Web Vitals, and indexing problems that silently kill your rankings." },
      { title: "Off-page & link building:", desc: "We build high-quality backlinks from authoritative sources to increase your domain authority and search visibility." },
      { title: "Local SEO:", desc: "Rank for 'near me' searches in Chandigarh, Delhi, or wherever your customers are. Google Business Profile optimisation included." },
    ],
  },
  {
    tab: "Pay-Per-Click Advertising (PPC)",
    points: [
      { title: "Google Ads campaign setup:", desc: "Search, display, shopping, and YouTube campaigns built around your goals — not just clicks, but real conversions." },
      { title: "Meta Ads (Facebook & Instagram):", desc: "Audience-first creatives and targeting strategies that lower your cost per lead and increase ROAS." },
      { title: "A/B testing & optimisation:", desc: "We test headlines, creatives, landing pages, and audiences continuously to improve performance week over week." },
      { title: "Conversion tracking & reporting:", desc: "Every rupee tracked. You get clear reports showing what's working, what's not, and what we're doing about it." },
      { title: "Retargeting campaigns:", desc: "Re-engage visitors who didn't convert the first time — with personalised ads that bring them back." },
    ],
  },
  {
    tab: "Social Media Marketing",
    points: [
      { title: "Content calendar & strategy:", desc: "Platform-specific content planned weeks in advance — so your brand stays consistent and relevant." },
      { title: "Instagram, Facebook & LinkedIn:", desc: "We manage posting, stories, reels, and engagement across all major platforms tailored to your audience." },
      { title: "Reels & short-form video:", desc: "Scroll-stopping video content that builds brand awareness and drives organic reach without paid ads." },
      { title: "Community management:", desc: "We reply to comments and DMs promptly so your audience feels heard and your brand stays trustworthy." },
      { title: "Influencer collaboration:", desc: "We connect your brand with the right influencers — micro to macro — for authentic, result-driven campaigns." },
    ],
  },
  {
    tab: "Website Design",
    points: [
      { title: "Custom UI/UX design:", desc: "Clean, modern designs that reflect your brand identity and guide visitors towards taking action." },
      { title: "Mobile-first responsive design:", desc: "Every design is built for mobile first, then scaled up — because that's where your audience is." },
      { title: "Conversion-focused layouts:", desc: "We design with intent — CTAs, trust signals, and flow built to convert visitors into leads or buyers." },
      { title: "Brand style guide:", desc: "Consistent colours, typography, and visual language across every touchpoint of your digital presence." },
      { title: "Prototype & revision process:", desc: "You see and approve designs before a single line of code is written. Multiple revisions included." },
    ],
  },
  {
    tab: "Website Development",
    points: [
      { title: "React & Next.js builds:", desc: "Fast, scalable, and SEO-friendly websites built on modern frameworks that perform under real traffic." },
      { title: "CMS integration:", desc: "WordPress, Sanity, or custom CMS — update your own content without touching code." },
      { title: "SEO-optimised codebase:", desc: "Clean HTML structure, schema markup, fast load times, and Core Web Vitals compliance built in from day one." },
      { title: "E-commerce development:", desc: "Shopify, WooCommerce, or custom stores — built for conversions with smooth checkout experiences." },
      { title: "Ongoing support & maintenance:", desc: "We don't disappear after launch. Bug fixes, updates, and new pages — we're with you long-term." },
    ],
  },
  {
    tab: "Content Writing",
    points: [
      { title: "SEO blog writing:", desc: "Long-form articles that rank on Google and build authority — researched, written, and optimised by experts." },
      { title: "Website copywriting:", desc: "Home pages, service pages, and landing pages written to persuade and convert — not just inform." },
      { title: "Social media captions & scripts:", desc: "Platform-native copy that sounds human, builds trust, and drives engagement." },
      { title: "Brand storytelling:", desc: "We craft your brand narrative — the why, the how, and the what that makes customers choose you." },
      { title: "Email marketing copy:", desc: "Sequences, newsletters, and campaigns written to nurture leads and drive repeat business." },
    ],
  },
  {
    tab: "Video Editing",
    points: [
      { title: "Reels & short-form editing:", desc: "Fast-paced, hook-driven edits optimised for Instagram, YouTube Shorts, and TikTok — built to stop the scroll." },
      { title: "YouTube video production:", desc: "Long-form edits with clean pacing, subtitles, and motion graphics that keep viewers watching." },
      { title: "Motion graphics & animations:", desc: "Professional lower thirds, transitions, and animated elements that elevate your video quality." },
      { title: "Ad video editing:", desc: "High-converting video ads for Google and Meta — edited to drive clicks, not just views." },
      { title: "Fast turnaround:", desc: "48–72 hour delivery on most projects so your content pipeline stays consistent." },
    ],
  },
];

export default function ServiceTabs() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`st-section${visible ? " st-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="st-inner">

        {/* Header */}
        <div className="st-header">
          <p className="st-eyebrow">What We Do</p>
          <h2 className="st-heading">How We Turn <span>Attention</span><br /> Into Revenue </h2>

          <p className="st-sub">
            We create a seamless digital marketing strategy that attracts the right audience, nurtures engagement, and converts prospects into loyal customers.
          </p>
        </div>

        {/* Body */}
        <div className="st-body">

          {/* Left tabs */}
          <div className="st-tabs">
            {SERVICES.map((s, i) => (
              <button
                key={i}
                className={`st-tab${i === active ? " st-tab--active" : ""}`}
                onClick={() => setActive(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>

          {/* Right content */}
          <div className="st-content">
            {SERVICES[active].points.map((p, i) => (
              <div key={i} className="st-point">
                <span className="st-point-dot">•</span>
                <div>
                  <span className="st-point-title">{p.title}</span>
                  <span className="st-point-desc"> {p.desc}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
