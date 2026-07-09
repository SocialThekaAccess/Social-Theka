import { useEffect, useRef, useState } from "react";
import "./CorePrinciples.css";
import knowledgeIcon from "../assets/Knowledge.png";
import qualityIcon from "../assets/Quality.png";
import trustIcon from "../assets/Trust.png";
import affordableIcon from "../assets/Affordable.png";

const PRINCIPLES = [
  {
    icon: knowledgeIcon,
    title: "Knowledge",
    desc: "Digital marketing thrives on constant research and updates. Our mission is to keep every client ahead of the curve with data-driven decisions.",
  },
  {
    icon: qualityIcon,
    title: "Quality",
    desc: "Quality is our hallmark. We deliver work that Google rewards and clients recommend — 70% of our clients come from referrals because of it.",
  },
  {
    icon: trustIcon,
    title: "Trust",
    desc: "We are fully transparent with our clients and strict about maintaining confidentiality. Your business goals and data are always safe with us.",
  },
  {
    icon: affordableIcon,
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
           The foundation principles of <br/> every Social Theka strategy
          </h2>
          <p className="cp-sub">
            Our success is driven by a team of experienced professionals who combine strategic expertise, customized solutions, and a relentless focus on delivering sustainable business growth.
          </p>
        </div>

        <div className="cp-grid">
          {PRINCIPLES.map((p, i) => (
            <div
              key={i}
              className="cp-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="cp-card-icon">
                <img src={p.icon} alt={p.title} loading="lazy" decoding="async" />
              </div>
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
