import { useEffect, useRef } from "react";
import "./OrbitSocialTheka.css";
import socialThekaLogo from "../assets/SocialThekaLogo.png";

const innerServices = [
  { icon: "ti ti-search", name: "SEO", price: "₹9,999", pos: "sat-inner-1" },
  { icon: "ti ti-pencil", name: "Content Writing", price: "₹6,999", pos: "sat-inner-2" },
];

const outerServices = [
  { icon: "ti ti-layout-dashboard", name: "Web Design", price: "₹12,999", pos: "sat-outer-1" },
  { icon: "ti ti-code", name: "Web Dev", price: "₹18,999", pos: "sat-outer-2" },
  { icon: "ti ti-chart-bar", name: "PPC Ads", price: "₹8,999", pos: "sat-outer-3" },
  { icon: "ti ti-brand-instagram", name: "Social Media", price: "₹7,999", pos: "sat-outer-4" },
];

const strips = [];

export default function OrbitSocialTheka() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("ost-animate");
          observer.disconnect(); // ek baar trigger hone ke baad disconnect
        }
      },
      { threshold: 0.2 } // 20% section visible hone par trigger hoga
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ost-section" ref={sectionRef}>
      <div className="ost-cloud ost-c1" />
      <div className="ost-cloud ost-c2" />
      <div className="ost-cloud ost-c3" />
      <div className="ost-cloud ost-c4" />

      <div className="ost-content">
        {/* Header */}
        <div className="ost-top">
          <p className="ost-eyebrow">Our Cost-Effective Service Pricing</p>
          <h2 className="ost-title">Grow with Social Theka</h2>
          <p className="ost-subtitle">Digital solutions orbiting around your brand's success</p>
        </div>

        {/* Orbit Scene */}
        <div className="ost-scene">
          <div className="ost-ring ost-ring1" />
          <div className="ost-ring ost-ring2" />

          {/* Center */}
          <div className="ost-center">
            <img src={socialThekaLogo} alt="Social Theka" className="ost-center-logo-img" />
            <p className="ost-center-sub">Digital Agency</p>
          </div>

          {/* Inner orbit */}
          <div className="ost-orbit ost-orbit-inner">
            {innerServices.map((svc) => (
              <div key={svc.name} className={`ost-sat ${svc.pos}`}>
                <div className="ost-sat-icon">
                  <i className={svc.icon} aria-hidden="true" />
                </div>
                <p className="ost-sat-name">{svc.name}</p>
                <p className="ost-sat-price">{svc.price}</p>
                <p className="ost-sat-mo">/mo</p>
                <div className="ost-sat-actions">
                  <button className="ost-sat-btn ost-sat-btn-primary">Explore</button>
                  <button className="ost-sat-btn ost-sat-btn-secondary">Contact Us</button>
                </div>
              </div>
            ))}
          </div>

          {/* Outer orbit */}
          <div className="ost-orbit ost-orbit-outer">
            {outerServices.map((svc) => (
              <div key={svc.name} className={`ost-sat ${svc.pos}`}>
                <div className="ost-sat-icon">
                  <i className={svc.icon} aria-hidden="true" />
                </div>
                <p className="ost-sat-name">{svc.name}</p>
                <p className="ost-sat-price">{svc.price}</p>
                <p className="ost-sat-mo">/mo</p>
                <div className="ost-sat-actions">
                  <button className="ost-sat-btn ost-sat-btn-primary">Explore</button>
                  <button className="ost-sat-btn ost-sat-btn-secondary">Contact Us</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strips + CTA */}
        <div className="ost-bottom">
          <div className="ost-strips">
            {strips.map((s) => (
              <div key={s.label} className="ost-strip">
                <i className={s.icon} aria-hidden="true" />
                {s.label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}