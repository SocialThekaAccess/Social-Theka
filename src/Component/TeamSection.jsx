import { useEffect, useRef, useState } from "react";
import "./TeamSection.css";

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "500+ Brands Scaled",
    desc: "From startups to enterprises — we've driven growth for businesses across India.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Data-Driven Strategy",
    desc: "Every campaign backed by analytics, A/B testing, and real-time optimisation.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "10+ Years Experience",
    desc: "A decade of digital marketing expertise — knowing what works before trends hit.",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`ts-section ${visible ? "ts-visible" : ""}`} ref={sectionRef}>
      {/* ── background decoration ── */}
      <div className="ts-bg-blob ts-blob-1" />
      <div className="ts-bg-blob ts-blob-2" />

      <div className="ts-container">
        {/* ── left: text content ── */}
        <div className="ts-left">
          {/* Eyebrow removed */}

          <h2 className="ts-heading">
            The Minds Behind<br />
            <span className="ts-accent">Your Growth</span>
          </h2>

          <p className="ts-subtext">
            Social Theka is built on one belief — real results, no shortcuts. Our
            team of strategists, creatives, and performance marketers obsess over
            your brand's growth every single day.
          </p>

          <div className="ts-features">
            {FEATURES.map((f, i) => (
              <div
                className="ts-feature"
                key={i}
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                <div className="ts-feature-icon">{f.icon}</div>
                <div>
                  <h4 className="ts-feature-title">{f.title}</h4>
                  <p className="ts-feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.instagram.com/socialtheka/"
            target="_blank"
            rel="noopener noreferrer"
            className="ts-cta"
          >
            Follow Us on Instagram
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ── right: Instagram reel iframe ── */}
        <div className="ts-right">
          <div className="ts-reel-card">
            {/* Header removed - only video */}

            <div className="ts-iframe-wrap">
              {!iframeLoaded && (
                <div className="ts-iframe-placeholder">
                  <div className="ts-spinner" />
                  <p>Loading reel…</p>
                </div>
              )}
              <iframe
                src="https://www.instagram.com/reel/DUDVPgxEyO6/embed/"
                className={`ts-reel-iframe ${iframeLoaded ? "ts-iframe-visible" : ""}`}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allowFullScreen
                onLoad={() => setIframeLoaded(true)}
                title="Social Theka Instagram Reel"
              />
            </div>

            {/* Footer removed - only video */}
          </div>

          {/* floating stat pill */}
          <div className="ts-stat-pill">
            <span className="ts-stat-num">98%</span>
            <span className="ts-stat-label">Client Retention</span>
          </div>
        </div>
      </div>
    </section>
  );
}