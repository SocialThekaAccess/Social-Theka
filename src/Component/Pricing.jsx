import "./Pricing.css";

const services = [
  {
    id: "web-design",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: "Web Design",
    price: "₹12,999",
    desc: "Stunning, conversion-focused designs that make your brand unforgettable online.",
    features: ["Custom UI/UX Design", "Mobile Responsive", "Brand Style Guide", "3 Revisions"],
    popular: false,
  },
  {
    id: "web-dev",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Web Development",
    price: "₹18,999",
    desc: "Fast, secure, and scalable websites built to perform and convert.",
    features: ["React / Next.js", "SEO Optimised Code", "CMS Integration", "1 Year Support"],
    popular: false,
  },
  {
    id: "seo",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "SEO",
    price: "₹9,999",
    desc: "Rank higher, get found faster. Real organic growth without the guesswork.",
    features: ["Technical SEO Audit", "Keyword Strategy", "On-Page Optimisation", "Monthly Reporting"],
    popular: true,
  },
  {
    id: "ppc",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><polyline points="22 20 2 20"/>
      </svg>
    ),
    title: "PPC Advertising",
    price: "₹8,999",
    desc: "Every rupee tracked. High-intent campaigns that bring buyers, not just clicks.",
    features: ["Google & Meta Ads", "A/B Ad Testing", "Conversion Tracking", "Weekly Optimisation"],
    popular: false,
  },
  {
    id: "content",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Content Writing",
    price: "₹6,999",
    desc: "Words that sell. SEO-ready content that builds trust and drives action.",
    features: ["Blog & Web Copy", "SEO Optimised", "Brand Voice Match", "10 Articles/mo"],
    popular: false,
  },
  {
    id: "smm",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"/>
        <circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1"/>
      </svg>
    ),
    title: "Social Media Marketing",
    price: "₹7,999",
    desc: "Build a brand people trust and follow. Content, community, and growth — handled.",
    features: ["3 Platforms Managed", "20 Posts/month", "Story & Reels", "Engagement Handling"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      {/* Header */}
      <div className="pricing-head">
        <span className="pricing-eyebrow">OUR SERVICES & PRICING</span>
        <h2 className="pricing-h2">
          Transparent Pricing Real Results
        </h2>
        <p className="pricing-sub">
          No hidden fees. No confusing packages. Just clear pricing for services
          that actually move the needle.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="pricing-grid">
        {services.map((s) => (
          <div
            key={s.id}
            className={`pricing-card ${s.popular ? "pricing-card--popular" : ""}`}
          >
            {s.popular && <div className="pricing-popular-badge">⭐ Most Popular</div>}

            <div className="pricing-card-icon">{s.icon}</div>
            <h3 className="pricing-card-title">{s.title}</h3>
            <p className="pricing-card-desc">{s.desc}</p>

            <div className="pricing-price">
              <span className="pricing-price-label">STARTING FROM</span>
              <div className="pricing-price-val">
                {s.price}<span className="pricing-price-mo">/mo</span>
              </div>
            </div>

            <ul className="pricing-features">
              {s.features.map((f) => (
                <li key={f}>
                  <span className="pricing-check">✓</span> {f}
                </li>
              ))}
            </ul>

            <div className="pricing-actions">
              <a href="#services" className="pricing-btn-primary">Explore</a>
              <a href="#contact" className="pricing-btn-ghost">Contact Us</a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="pricing-note">
        All plans include a free strategy call. Prices vary by scope —&nbsp;
        <a href="#contact">get a custom quote →</a>
      </p>
    </section>
  );
}