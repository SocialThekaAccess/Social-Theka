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
  },
  {
    img: award2,
  },
  {
    img: award3,
  },
  {
    img: award4,
  },
  {
    img: award5,
  },
  {
    img: award6,
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
           Recognized for Excellence in Digital Marketing
          </h2>
          <div className="aw-heading-line" />
          <p className="aw-sub">
           At Social Theka, our success is measured by the growth we create for our clients. Through innovative strategies, data-driven campaigns, and a commitment to delivering measurable results, we help businesses strengthen their online presence. From social media marketing and performance advertising to content creation and branding, our solutions are designed to drive engagement, generate leads, and accelerate business growth.
          </p>
        </div>

        {/* Endless awards marquee */}
        <div className="aw-marquee" aria-label="Awards and recognitions">
          <div className="aw-grid">
            {[...AWARDS, ...AWARDS].map((a, i) => (
              <div
                key={i}
                className="aw-tile"
                style={{ transitionDelay: `${(i % AWARDS.length) * 0.1}s` }}
                aria-hidden={i >= AWARDS.length}
              >
                <div className="aw-tile__logo">
                  <img src={a.img} alt={`Award recognition ${(i % AWARDS.length) + 1}`} loading="lazy" className="aw-tile__img" />
                  <div className="aw-tile__shine"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
