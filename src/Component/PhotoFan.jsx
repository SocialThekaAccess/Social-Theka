import { useEffect, useRef, useState } from "react";
import "./PhotoFan.css";

/* ── Fan photos — 6 cards, compact overlapping spread ── */
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80",
    tag: "@events",
    rotate: -28,
    tx: -380,
    ty: 30,
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    tag: "@teamwork",
    rotate: -16,
    tx: -230,
    ty: 15,
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80",
    tag: "@clients",
    rotate: -5,
    tx: -80,
    ty: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&q=80",
    tag: "@awards",
    rotate: 5,
    tx: 80,
    ty: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    tag: "@growth",
    rotate: 16,
    tx: 230,
    ty: 15,
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
    tag: "@strategy",
    rotate: 28,
    tx: 380,
    ty: 30,
  },
];

const FLOAT_TAGS = [
  { text: "@socialtheka",  top: "22%", left: "6%",  delay: 0 },
  { text: "@chandigarh",   top: "18%", right: "8%", delay: 0.3 },
  { text: "@500brands",    top: "72%", left: "4%",  delay: 0.6 },
  { text: "@digitalagency",top: "68%", right: "5%", delay: 0.9 },
];

export default function PhotoFan() {
  const sectionRef = useRef(null);
  const [visible, setVisible]   = useState(false);
  const [hovered, setHovered]   = useState(null);

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
        <h2 className="pf-heading">We Don't Follow Trends —<br /><span>We Create Them</span></h2>
        <p className="pf-sub">
          Real people. Real results. Building brands across India — one story at a time.
        </p>
      </div>

      {/* Fan */}
      <div className="pf-fan-wrap">
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
      </div>
    </section>
  );
}
