import { useRef } from "react";
import "./RepresentRoster.css";

const logos = [
  { name: "CHTRBOX Represent", text: "CHTRBOX\nREPRESENT", circle: true },
  { name: "CHTR Social",       text: "CHTR\nSOCIAL",       pink: true },
  { name: "Youth:Ink",         text: "YOUTH:INK",           yellow: true },
  { name: "CHTR International",text: "⊕ CHTR\nINTERNATIONAL", blue: true },
  { name: "BharatBox",         text: "BHARAT\nBOX",         bharatbox: true },
  { name: "CHTR Studios",      text: "CHTR\nSTUDIOS",       studios: true },
];

// fan: leftmost tilted left most, rightmost tilted right most
// marginTop controls vertical stagger (side cards lower = appear smaller/behind)
const creators = [
  { id:1, name:"Aisha Sharma",  handle:"@aisha.s",    img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", rot:"-14deg", sc:0.82, mt:"80px",  zIndex:1 },
  { id:2, name:"Priya Mehra",   handle:"@priyam",     img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", rot:"-8deg",  sc:0.90, mt:"44px",  zIndex:2 },
  { id:3, name:"Rhea Kapoor",   handle:"@rheakap",    img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", rot:"-3deg",  sc:0.96, mt:"18px",  zIndex:3 },
  { id:4, name:"Neha Singh",    handle:"@nehasingh",  img:"https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=400&q=80", rot:"0deg",   sc:1.00, mt:"0px",   zIndex:5 },
  { id:5, name:"Kavya Nair",    handle:"@kavyanair",  img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", rot:"3deg",   sc:0.96, mt:"18px",  zIndex:3 },
  { id:6, name:"Tara Bose",     handle:"@tarabose",   img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", rot:"8deg",   sc:0.90, mt:"44px",  zIndex:2 },
  { id:7, name:"Mia Joshi",     handle:"@miajoshi",   img:"https://images.unsplash.com/photo-1502323703975-b81898880abb?w=400&q=80", rot:"14deg",  sc:0.82, mt:"80px",  zIndex:1 },
];

export default function RepresentRoster() {
  const trackRef = useRef(null);
  const isDown   = useRef(false);
  const startX   = useRef(0);
  const scrollL  = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    trackRef.current.classList.add("dragging");
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollL.current = trackRef.current.scrollLeft;
  };
  const onMouseLeave = () => { isDown.current = false; trackRef.current?.classList.remove("dragging"); };
  const onMouseUp    = () => { isDown.current = false; trackRef.current?.classList.remove("dragging"); };
  const onMouseMove  = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollL.current - (x - startX.current) * 1.3;
  };

  return (
    <section className="roster-section">

      {/* ── Logos bar ── */}
      <div className="logos-bar">
        <div className="eyebrow-row">
          <span className="eyebrow-dot" />
          <span className="eyebrow-text">Our Verticals</span>
        </div>
        <div className="logos-list">
          {logos.map((l) => (
            <div
              key={l.name}
              className={[
                "logo-item",
                l.circle    ? "logo-circle"    : "",
                l.pink      ? "logo-pink"      : "",
                l.yellow    ? "logo-yellow"    : "",
                l.blue      ? "logo-blue"      : "",
                l.bharatbox ? "logo-bharatbox" : "",
                l.studios   ? "logo-studios"   : "",
              ].join(" ").trim()}
            >
              <span className="logo-text">{l.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Heading ── */}
      <div className="roster-heading-wrap">
        <h1 className="roster-heading">Represent Roster</h1>
        <span className="roster-dot" />
      </div>

      {/* ── Fan slider ── */}
      <div
        className="slider-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="slider-inner">
          {creators.map((c) => (
            <div
              key={c.id}
              className="creator-card"
              style={{
                "--rot": c.rot,
                "--sc":  c.sc,
                zIndex:    c.zIndex,
                marginTop: c.mt,
              }}
            >
              <div className="creator-img-wrap">
                <img src={c.img} alt={c.name} className="creator-img" draggable="false" />
              </div>
              <div className="creator-info">
                <p className="creator-name">{c.name}</p>
                <p className="creator-handle">{c.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}