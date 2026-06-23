import { useEffect, useRef, useState } from "react";
import "./AwardsSection.css";
import award1 from "../assets/Award1.png";
import award2 from "../assets/Award2.png";
import award3 from "../assets/Award3.png";
import award4 from "../assets/Award4.png";
import award5 from "../assets/Award5.png";
import award6 from "../assets/Award6.png";

const AWARDS = [
  {
    img: award1,
    title: "Best Digital Marketing Agency",
    desc: "Recognised as the Best Digital Marketing Agency for delivering consistent results and innovation.",
    by: "Chandigarh IT Awards",
  },
  {
    img: award2,
    title: "Top SEO Agency in India",
    desc: "Awarded for being one of India's top-performing SEO agencies with proven organic growth results.",
    by: "Digital Excellence Awards",
  },
  {
    img: award3,
    title: "Best Social Media Agency",
    desc: "Honoured for managing high-impact social media campaigns that drive real engagement and growth.",
    by: "Social Media Summit India",
  },
  {
    img: award4,
    title: "Top 5 Digital Companies",
    desc: "Listed among the Top 5 Digital Marketing Companies for innovation and client retention.",
    by: "Business India Magazine",
  },
  {
    img: award5,
    title: "Google Partner Agency",
    desc: "Certified Google Partner recognised for excellence in managing high-performance ad campaigns.",
    by: "Google",
  },
  {
    img: award6,
    title: "Meta Business Partner",
    desc: "Officially recognised Meta Business Partner for delivering results across Facebook and Instagram.",
    by: "Meta",
  },
];

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`aw-section${visible ? " aw-section--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="aw-inner">

        {/* Header */}
        <div className="aw-header">
          <p className="aw-eyebrow">AWARDS &amp; RECOGNITIONS</p>
          <h2 className="aw-heading">
            Awarded as the Best Digital Marketing Agency
          </h2>
          <div className="aw-heading-line" />
          <p className="aw-sub">
            Honoured to be recognised by leading platforms for our commitment to excellence and results.
          </p>
        </div>

        {/* Floating Awards Wall */}
        <div className="aw-grid">
          {AWARDS.map((a, i) => (
            <div
              key={i}
              className="aw-tile"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Small Glass Tile - Logo Only */}
              <div className="aw-tile__logo">
                <img src={a.img} alt={a.title} loading="lazy" className="aw-tile__img" />
                {/* Shine effect on glass tile */}
                <div className="aw-tile__shine"></div>
              </div>
              
              {/* Award Title - Below Tile */}
              <h3 className="aw-tile__title">{a.title}</h3>
              
              {/* Recognition Source - Below Title */}
              <p className="aw-tile__source">{a.by}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
