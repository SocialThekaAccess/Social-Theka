import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "We build fast, clean, conversion-focused websites that your visitors actually enjoy using.",
    tag: "Development",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=85",
  },
  {
    id: "02",
    title: "Search Engine Optimisation",
    desc: "We rank your business on Google so the right people find you — not your competitors.",
    tag: "SEO",
    img: "https://www.shutterstock.com/image-photo/seo-search-engine-optimization-promoting-260nw-2544802347.jpg",
  },
  {
    id: "03",
    title: "PPC Campaigns",
    desc: "Every rupee you spend on ads works harder — targeted campaigns, real conversions.",
    tag: "Paid Ads",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=85",
  },
  {
    id: "04",
    title: "UI / UX Web Design",
    desc: "Designs that feel premium, load fast, and guide your visitor straight to action.",
    tag: "Design",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=85",
  },
  {
    id: "05",
    title: "Video Editing",
    desc: "Scroll-stopping reels, ads and explainers — edited to perfection, built for virality.",
    tag: "Video",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=85",
  },
  {
    id: "06",
    title: "Social Media Marketing",
    desc: "We build social presence that makes people stop scrolling and start trusting your brand.",
    tag: "Social",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=85",
  },
];

function ServiceRow({ service, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`svc-row ${isLeft ? "svc-row--left" : "svc-row--right"} ${visible ? "svc-row--visible" : ""}`}
    >
      {/* Left slot */}
      <div className="svc-row__slot">
        {isLeft ? (
          <div className="svc-card">
            <div className="svc-card__img-wrap">
              <img src={service.img} alt={service.title} className="svc-card__img" loading="lazy" />
              <span className="svc-card__tag">{service.tag}</span>
            </div>
          </div>
        ) : (
          <div className="svc-text svc-text--right">
            <span className="svc-text__num">{service.id}</span>
            <h3 className="svc-text__title">{service.title}</h3>
            <div className="svc-text__line" />
            <p className="svc-text__desc">{service.desc}</p>
            <Link to="/contact" className="svc-text__btn">
              Get Started <span className="svc-text__arrow">↗</span>
            </Link>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="svc-row__center">
        <div className={`svc-dot ${visible ? "svc-dot--active" : ""}`}>
          <div className="svc-dot__inner" />
        </div>
      </div>

      {/* Right slot */}
      <div className="svc-row__slot">
        {!isLeft ? (
          <div className="svc-card">
            <div className="svc-card__img-wrap">
              <img src={service.img} alt={service.title} className="svc-card__img" loading="lazy" />
              <span className="svc-card__tag">{service.tag}</span>
            </div>
          </div>
        ) : (
          <div className="svc-text svc-text--left">
            <span className="svc-text__num">{service.id}</span>
            <h3 className="svc-text__title">{service.title}</h3>
            <div className="svc-text__line" />
            <p className="svc-text__desc">{service.desc}</p>
            <Link to="/contact" className="svc-text__btn">
              Get Started <span className="svc-text__arrow">↗</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="services-section">

      {/* Header */}
      <div className="svc-header">
        <div className="svc-header__left">
          <span className="svc-header__eyebrow">
            <span className="svc-header__dot" />
            WHAT WE DO
          </span>
          <h1 className="svc-header__h1">
            Digital Solutions<br />
            That Drive Results.
          </h1>
        </div>
        <div className="svc-header__right">
          <p className="svc-header__desc">
            Six focused services. One team. Zero confusion.
            We handle everything so you can focus on running your business.
          </p>
          <Link to="/contact" className="svc-header__cta">
            All Services
            <span className="svc-header__cta-circle">↗</span>
          </Link>
        </div>
      </div>

      <div className="svc-divider" />

      {/* Timeline */}
      <div className="svc-timeline">
        <div className="svc-timeline__line" />
        {services.map((s, i) => (
          <ServiceRow key={s.id} service={s} index={i} />
        ))}
      </div>

      {/* Footer */}
      <div className="svc-footer">
        <span className="svc-footer__diamond">◆</span>
        TAILORED STRATEGIES. MEASURABLE GROWTH.
        <span className="svc-footer__diamond">◆</span>
      </div>

    </section>
  );
}