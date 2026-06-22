import { useEffect, useRef, useState } from "react";
import "./Representroster.css";

/* ── Influencer/Team Roster ── */
const ROSTER = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    name: "Sarah Johnson",
    handle: "@sarahjohnson",
    rotate: -12,
    tx: -420,
    scale: 0.95,
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    name: "Mike Chen",
    handle: "@mikechen",
    rotate: -7,
    tx: -280,
    scale: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    name: "Emily Davis",
    handle: "@emilydavis",
    rotate: -2,
    tx: -140,
    scale: 1.05,
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    name: "Priya Sharma",
    handle: "@priyasharma",
    rotate: 2,
    tx: 0,
    scale: 1.08,
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
    name: "Alex Martinez",
    handle: "@alexmartinez",
    rotate: 7,
    tx: 140,
    scale: 1.05,
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    name: "Jessica Lee",
    handle: "@jessicalee",
    rotate: 12,
    tx: 280,
    scale: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    name: "David Kumar",
    handle: "@davidkumar",
    rotate: 17,
    tx: 420,
    scale: 0.95,
  },
];

export default function Representroster() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

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
      className={`rr-section${visible ? " rr-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="rr-inner">
        {/* Header */}
        <div className="rr-header">
          <p className="rr-eyebrow">Our Verticals</p>
          <h2 className="rr-heading">
            We Represent The <span>Best</span>
          </h2>
          <p className="rr-sub">
            Brands across India, USA, UK & Dubai — campaigns that convert, content that resonates, growth that lasts.
          </p>
        </div>

        {/* Roster Cards */}
        <div className="rr-roster-wrap">
          {ROSTER.map((person, i) => (
            <div
              key={i}
              className={`rr-card${hovered === i ? " rr-card--hovered" : ""}`}
              style={{
                "--tx": `${person.tx}px`,
                "--rot": `${person.rotate}deg`,
                "--scale": person.scale,
                zIndex: i < 3 ? i + 1 : 10 - i,
                transitionDelay: visible ? `${i * 0.08}s` : "0s",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="rr-card-img">
                <img src={person.src} alt={person.name} loading="lazy" />
              </div>
              <div className="rr-card-info">
                <p className="rr-card-handle">{person.handle}</p>
                <p className="rr-card-name">{person.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
