import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OrbitSocialTheka.css";

gsap.registerPlugin(ScrollTrigger);

/* ── SERVICE DATA ─────────────────────────────── */
const SERVICES = [
  { name: "SEO",             price: "₹24,000",  color: "#C1121F", icon: "🔍", link: "/services/seo" },
  { name: "Content Writing", price: "₹29,999",  color: "#C1121F", icon: "✍️", link: "/contact" },
  { name: "Web Design",      price: "₹22,999", color: "#C1121F", icon: "🎨", link: "/services/web-design" },
  { name: "Web Dev",         price: "₹35,000", color: "#C1121F", icon: "💻", link: "/services/web-development" },
  { name: "PPC Ads",         price: "₹20,000", color: "#C1121F", icon: "📊", link: "/services/ppc" },
  { name: "Social Media",    price: "₹29,999", color: "#C1121F", icon: "📱", link: "/services/social-media" },
  { name: "Video Editing",   price: "₹10,999", color: "#C1121F", icon: "🎬", link: "/services/video-editing" },
  { name: "Email Marketing", price: "₹23,000", color: "#C1121F", icon: "📧", link: "/contact" },
];

const BADGES = [
  { label: "Google Partner" },
  { label: "Meta Business" },
  { label: "ISO Certified" },
  { label: "500+ Brands" },
];

/* ── Physics ──────────────────────────────────── */
const RADIUS_DESKTOP  = 200;
const RADIUS_MOBILE   = 140;
const BASE_SPEED      = 0.0028;
const DRAG_INERTIA    = 0.965;
const MOUSE_INFLUENCE = 0.000075;

export default function OrbitSocialTheka() {
  const sectionRef = useRef(null);
  const sceneRef   = useRef(null);
  const orbitRef   = useRef(null);
  const rafRef     = useRef(null);

  const angleRef   = useRef(0);
  const velRef     = useRef(0);
  const isDragging = useRef(false);
  const dragLastX  = useRef(0);
  const mouseX     = useRef(0);
  const mouseY     = useRef(0);

  const [hovered, setHovered]   = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  /* ── responsive ───────────────────────────── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const radius = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP;

  /* ── rAF loop ─────────────────────────────── */
  useEffect(() => {
    const wrap = orbitRef.current;
    if (!wrap) return;
    const cards = wrap.querySelectorAll(".ost3-card");
    const n = SERVICES.length;

    const loop = () => {
      const now = Date.now();
      velRef.current += mouseX.current * MOUSE_INFLUENCE;
      velRef.current *= DRAG_INERTIA;
      angleRef.current += BASE_SPEED + velRef.current;

      cards.forEach((card, i) => {
        const base  = (i / n) * Math.PI * 2;
        const a     = base + angleRef.current;
        const x     = Math.cos(a) * radius;
        const z     = Math.sin(a);
        const fy    = Math.sin(a * 0.55 + now * 0.0006) * (isMobile ? 6 : 10);
        const scale   = 0.65 + (z + 1) * 0.20;
        const opacity = 0.45 + (z + 1) * 0.275;
        const blur    = Math.max(0, (0.84 - scale) * 4);
        const zi      = Math.round((z + 1) * 50);
        const px    = mouseX.current * (isMobile ? 4 : 10);
        const py    = mouseY.current * (isMobile ? 2 : 6);

        card.style.transform = `translate(calc(${x + px}px - 50%), calc(${fy + py}px - 50%)) scale(${scale})`;
        card.style.zIndex    = zi;
        card.style.opacity   = opacity;
        card.style.filter    = blur > 0.12 ? `blur(${blur.toFixed(2)}px)` : "none";
      });

      if (sceneRef.current && !isMobile) {
        sceneRef.current.style.transform =
          `perspective(900px) rotateY(${mouseX.current * 3}deg) rotateX(${-mouseY.current * 1.8}deg)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radius, isMobile]);

  /* ── Mouse move ───────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      mouseX.current = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      mouseY.current = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    };
    const onLeave = () => { mouseX.current = 0; mouseY.current = 0; };
    section.addEventListener("mousemove",  onMove,  { passive: true });
    section.addEventListener("mouseleave", onLeave, { passive: true });
    return () => {
      section.removeEventListener("mousemove",  onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* ── Drag — lattu physics ─────────────────── */
  useEffect(() => {
    const wrap = sectionRef.current;
    if (!wrap) return;
    const velSamples = [];
    const getX = (e) => e.touches ? e.touches[0]?.clientX : e.clientX;

    const onDown = (e) => {
      isDragging.current = true;
      dragLastX.current  = getX(e) ?? 0;
      velSamples.length  = 0;
    };
    const onMove = (e) => {
      if (!isDragging.current) return;
      const cx = getX(e) ?? 0;
      const dx = cx - dragLastX.current;
      velSamples.push(dx * 0.003);
      if (velSamples.length > 4) velSamples.shift();
      angleRef.current += dx * 0.003;
      dragLastX.current = cx;
    };
    const onUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (velSamples.length > 0) {
        const avg = velSamples.reduce((s, v) => s + v, 0) / velSamples.length;
        velRef.current = Math.max(-0.08, Math.min(0.08, avg));
      }
      velSamples.length = 0;
    };

    wrap.addEventListener("mousedown",   onDown, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseup",   onUp,   { passive: true });
    wrap.addEventListener("touchstart",  onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend",  onUp,   { passive: true });
    return () => {
      wrap.removeEventListener("mousedown",   onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup",   onUp);
      wrap.removeEventListener("touchstart",  onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend",  onUp);
    };
  }, []);

  /* ── GSAP entrance ────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".ost3-left", {
        opacity: 0, x: -50, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      });
      gsap.from(".ost3-right", {
        opacity: 0, x: 50, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  /* ─────────────────────────────────────────── */
  return (
    <section className="ost3-section" ref={sectionRef}>

      {/* Background blobs */}
      <div className="ost3-blob ost3-blob--1" />
      <div className="ost3-blob ost3-blob--2" />

      <div className="ost3-inner">

        {/* ── LEFT COLUMN ────────────────────── */}
        <div className="ost3-left">

          <span className="ost3-eyebrow">
            Our Cost-Effective Service Pricing
          </span>

          <h2 className="ost3-title">
            Get <em>Quality Results</em> with<br />
            Digital Marketing Services
          </h2>

          <p className="ost3-desc">
            With affordable pricing and result-driven strategies, we help
            you increase brand visibility, connect with the right audience,
            and generate qualified leads — guaranteed.
          </p>

          <div className="ost3-cta-row">
            <Link to="/contact" className="ost3-btn-primary">
              Book Free Consultation <span className="ost3-btn-arrow">→</span>
            </Link>
            <Link to="/services/seo" className="ost3-btn-ghost">
              View All Plans
            </Link>
          </div>

          <p className="ost3-recog-label">Recognized for Core Digital Marketing Services</p>

          <div className="ost3-badges">
            {BADGES.map((b) => (
              <div key={b.label} className="ost3-badge">
                {b.label}
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT COLUMN — orbit ───────────── */}
        <div className="ost3-right">

          {/* Drag hint */}
          <div className="ost3-drag-hint">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3"/>
            </svg>
            <span>Drag to rotate</span>
          </div>

          <div className="ost3-scene" ref={sceneRef}>

            {/* Orbit ring */}
            <div className="ost3-ring"
              style={{ width: radius * 2, height: radius * 2 }} />

            {/* Center glow void */}
            <div className="ost3-void">
              <div className="ost3-void-glow" />
              <div className="ost3-void-ring" />
              <span className="ost3-void-label">Services</span>
            </div>

            {/* Cards orbit */}
            <div className="ost3-orbit" ref={orbitRef}>
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.name}
                  className={`ost3-card${hovered === i ? " ost3-card--hovered" : ""}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="ost3-card-bar" style={{ background: svc.color }} />
                  <div className="ost3-card-icon" style={{ color: svc.color }}>{svc.icon}</div>
                  <p className="ost3-card-name">{svc.name}</p>
                  <p className="ost3-card-price" style={{ color: svc.color }}>{svc.price}</p>
                  <p className="ost3-card-mo">/ month</p>
                  <div className="ost3-card-actions">
                    <Link
                      to={svc.link}
                      className="ost3-card-btn-primary"
                      style={{ background: svc.color }}
                    >
                      Explore →
                    </Link>
                    <Link
                      to="/contact"
                      className="ost3-card-btn-secondary"
                      style={{ color: svc.color, borderColor: svc.color }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
