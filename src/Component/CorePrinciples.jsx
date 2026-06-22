import { useEffect, useRef, useState } from "react";
import "./CorePrinciples.css";

const PRINCIPLES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
    title: "Knowledge",
    desc: "Digital marketing thrives on constant research and updates. Our mission is to keep every client ahead of the curve with data-driven decisions.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: "Quality",
    desc: "Quality is our hallmark. We deliver work that Google rewards and clients recommend — 70% of our clients come from referrals because of it.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Trust",
    desc: "We are fully transparent with our clients and strict about maintaining confidentiality. Your business goals and data are always safe with us.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "Affordable",
    desc: "We serve startups, SMBs, and enterprises with pricing that supports real growth — without compromising on strategy or execution quality.",
  },
];

export default function CorePrinciples() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      className={`cp-section${visible ? " cp-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="cp-inner">

        <div className="cp-header">
          <p className="cp-eyebrow">Our Foundation</p>
          <h2 className="cp-heading">
            Social Theka Strongly Believes<br />In These Core Principles
          </h2>
          <p className="cp-sub">
            At the heart of our success is a dedicated team that brings years of experience,
            tailored strategies, and a commitment to long-term business growth.
          </p>
        </div>

        <div className="cp-grid">
          {PRINCIPLES.map((p, i) => (
            <div
              key={i}
              className="cp-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="cp-card-icon">{p.icon}</div>
              <div>
                <h3 className="cp-card-title">{p.title}</h3>
                <p className="cp-card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
