import { useEffect, useRef, useState } from "react";
import "./PhotoFan.css";

// Import local images
import img1 from "../assets/Socialimg1.jpeg";
import img2 from "../assets/Socialimg2.jpeg";
import img3 from "../assets/Socialimg3.jpeg";
import img4 from "../assets/Socialimg4.jpeg";
import img5 from "../assets/Socialimg5.jpeg";
import img6 from "../assets/Socialimg6.jpeg";

/* ── Fan photos — 6 cards, compact overlapping spread ── */
const PHOTOS = [
  {
    src: img1,
    tag: "Breaking Glass",
    rotate: -28,
    tx: -380,
    ty: 30,
  },
  {
    src: img2,
    tag: "Progress",
    rotate: -16,
    tx: -230,
    ty: 15,
  },
  {
    src: img3,
    tag: "Not So आम",
    rotate: -5,
    tx: -80,
    ty: 5,
  },
  {
    src: img4,
    tag: "Rewards",
    rotate: 5,
    tx: 80,
    ty: 5,
  },
  {
    src: img5,
    tag: "Growth",
    rotate: 16,
    tx: 230,
    ty: 15,
  },
  {
    src: img6,
    tag: "Strategy",
    rotate: 28,
    tx: 380,
    ty: 30,
  },
];

const FLOAT_TAGS = [
  // Floating tags removed as per requirement
];

export default function PhotoFan() {
  const sectionRef = useRef(null);
  const [visible, setVisible]   = useState(false);
  const [hovered, setHovered]   = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setIsPaused(!isPaused);
    }
  };

  return (
    <section
      className={`pf-section${visible ? " pf-section--visible" : ""}`}
      ref={sectionRef}
    >
      {/* Floating tags */}
      {FLOAT_TAGS.map((t, i) => (
        <div
          key={i}
          className="pf-float-tag"
          style={{
            top:         t.top,
            left:        t.left  ?? "auto",
            right:       t.right ?? "auto",
            animationDelay: `${t.delay}s`,
          }}
        >
          {t.text}
        </div>
      ))}

      {/* Heading */}
      <div className="pf-heading-wrap">
        <p className="pf-eyebrow">Our Story in Frames</p>
        <h2 className="pf-heading">We Don't Follow Trends <br /><span>We Create Them</span></h2>
        <p className="pf-sub">
         Real people and Absolute results. Empowering Brands Across India with Strategies That Deliver Results and Inspire Growth  — one story at a time.
        </p>
      </div>

      {/* Fan */}
      <div className="pf-fan-wrap">
        {isMobile ? (
          <div className={`pf-photos-slider${isPaused ? " pf-photos-slider--paused" : ""}`}>
            {/* First set */}
            {PHOTOS.map((p, i) => (
              <div
                key={`first-${i}`}
                className={`pf-photo${hovered === i ? " pf-photo--hovered" : ""}`}
                onClick={handleCardClick}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={p.src} alt={`Social Theka ${i + 1}`} loading="lazy" />
                {p.tag && <div className="pf-photo-tag">{p.tag}</div>}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {PHOTOS.map((p, i) => (
              <div
                key={`second-${i}`}
                className={`pf-photo${hovered === i ? " pf-photo--hovered" : ""}`}
                onClick={handleCardClick}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={p.src} alt={`Social Theka ${i + 1}`} loading="lazy" />
                {p.tag && <div className="pf-photo-tag">{p.tag}</div>}
              </div>
            ))}
          </div>
        ) : (
          // Desktop: Fan layout
          <>
            {PHOTOS.map((p, i) => (
              <div
                key={i}
                className={`pf-photo${hovered === i ? " pf-photo--hovered" : ""}`}
                style={{
                  "--tx":  `${p.tx}px`,
                  "--ty":  `${p.ty}px`,
                  "--rot": `${p.rotate}deg`,
                  zIndex: i < 3 ? i + 1 : 10 - i,
                  transitionDelay: visible ? `${i * 0.08}s` : "0s",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <img src={p.src} alt={`Social Theka ${i + 1}`} loading="lazy" />
                {p.tag && <div className="pf-photo-tag">{p.tag}</div>}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
