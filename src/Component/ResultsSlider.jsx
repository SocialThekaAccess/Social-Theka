import { useEffect, useRef, useState } from "react";
import "./ResultsSlider.css";
import g1 from "../assets/graph1.jfif";
import g2 from "../assets/Graph2.jfif";
import g3 from "../assets/Graph3.jfif";
import g4 from "../assets/Graph4.jfif";
import g5 from "../assets/Graph5.jfif";

const SLIDES = [
  { img: g1, label: "SEO Growth",         tag: "Organic Traffic ↑" },
  { img: g2, label: "PPC Performance",    tag: "ROAS ↑" },
  { img: g3, label: "Social Media Reach", tag: "Impressions ↑" },
  { img: g4, label: "Revenue Impact",     tag: "Conversions ↑" },
  { img: g5, label: "Brand Visibility",   tag: "Reach ↑" },
];

export default function ResultsSlider() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Auto-play
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setActive(i);
    startTimer();
  };

  const prev = () => goTo((active - 1 + SLIDES.length) % SLIDES.length);
  const next = () => goTo((active + 1) % SLIDES.length);

  // Drag/swipe
  const onDragStart = (x) => { setDragging(true); setDragStart(x); };
  const onDragEnd   = (x) => {
    if (!dragging) return;
    const diff = dragStart - x;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setDragging(false);
  };

  return (
    <section
      className={`rs-section${visible ? " rs-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="rs-inner">

        {/* Header */}
        <div className="rs-header">
          <p className="rs-eyebrow">Real Client Results</p>
          <h2 className="rs-heading">
            Numbers That <span>Speak</span> for Themselves
          </h2>
          <p className="rs-sub">
            Every graph below is a real client result — tracked, measured, and delivered by Social Theka.
          </p>
        </div>

        {/* Slider */}
        <div
          className="rs-slider"
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
        >
        {/* Arrows removed */}

          {/* Slides */}
          <div className="rs-track">
            {SLIDES.map((s, i) => {
              const offset = i - active;
              const isActive = offset === 0;
              const isPrev   = offset === -1 || offset === SLIDES.length - 1;
              const isNext   = offset === 1  || offset === -(SLIDES.length - 1);
              if (!isActive && !isPrev && !isNext) return null;
              return (
                <div
                  key={i}
                  className={`rs-slide${isActive ? " rs-slide--active" : ""}${isPrev ? " rs-slide--prev" : ""}${isNext ? " rs-slide--next" : ""}`}
                  onClick={() => !isActive && goTo(i)}
                >
                  <div className="rs-slide-img-wrap">
                    <img src={s.img} alt={s.label} draggable={false} />
                    <div className="rs-slide-tag">{s.tag}</div>
                  </div>
                  {isActive && (
                    <div className="rs-slide-label">{s.label}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next arrow removed */}
        </div>

        {/* Dots removed */}

      </div>
    </section>
  );
}
