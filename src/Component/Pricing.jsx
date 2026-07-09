import { Link } from "react-router-dom";
import "./Pricing.css";

const services = [
  {
    id: "seo",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "SEO",
    price: "$299+",
    path: "/services/seo",
    popular: false,
  },
  {
    id: "ppc",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><polyline points="22 20 2 20"/>
      </svg>
    ),
    title: "PPC Ads",
    price: "$399+",
    path: "/services/ppc",
    popular: false,
  },
  {
    id: "social-media",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"/>
        <circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1"/>
      </svg>
    ),
    title: "Social Media",
    price: "$399+",
    path: "/services/social-media",
    popular: true,
  },
  {
    id: "web-design",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: "Web Design",
    price: "$399+",
    path: "/services/web-design",
    popular: false,
  },
  {
    id: "video",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: "Video Editing",
    price: "$299+",
    path: "/services/video-editing",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-grid">
        {services.map((s) => (
          <div
            key={s.id}
            className={`pricing-card${s.popular ? " pricing-card--popular" : ""}`}
          >
            {s.popular && <div className="pricing-popular-badge">Popular</div>}

            <div className="pricing-card-icon">{s.icon}</div>
            <h3 className="pricing-card-title">{s.title}</h3>

            <div className="pricing-price">
              <span className="pricing-price-label">STARTING FROM</span>
              <div className="pricing-price-val">
                {s.price}<span className="pricing-price-mo">/mo</span>
              </div>
            </div>

            <div className="pricing-actions">
              <Link to={s.path} className="pricing-btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:"6px"}}>
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                </svg>
                Explore
              </Link>
              <Link to="/contact" className="pricing-btn-ghost">Contact Us</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
