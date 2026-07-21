/* eslint-disable no-unused-vars, react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import manjulSirImg from "../assets/ManjulSirSocialTheka.png";
// Client videos from Cloudinary
const clientVideo = "https://res.cloudinary.com/oaaxsftf/video/upload/v1784617108/0720_e3ezjl.mp4";
const clientVideo2 = "https://res.cloudinary.com/oaaxsftf/video/upload/v1784615990/ST_TEST.._2_V2_jo6aq0.mp4";
import "./Home.css";
import Hero from './hero';
import RegionalPresence from './RegionalPresence';
import Pricing from './Pricing';
import AwardedSection from './AwardedSection';
import PhotoFan from './PhotoFan';
import TeamSection from './TeamSection';
import AwardsSection from './AwardsSection';
import ResultsSlider from './ResultsSlider';
import ServiceTabs from './ServiceTabs';
import CorePrinciples from './CorePrinciples';
import Footer from './Footer/Footer';

/* ── SHARED COMPONENTS ───────────────────────────── */
function Tag({ children }) {
  return <div className="tag">{children}</div>;
}

function Divider({ center }) {
  return <div className={`divider${center ? " divider--center" : ""}`} />;
}

/* ── STATS ───────────────────────────────────────── */
function Stats() {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [vals, setVals] = useState([0, 0, 0, 0]);

  const targets = [500, 120, 50, 98];
  const items = [
    { suffix: "+",   label: "Brands Scaled" },
    { suffix: "M+",  label: "Ad Impressions" },
    { prefix: "₹", suffix: "Cr+", label: "Revenue Generated" },
    { suffix: "%",   label: "Client Retention" },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated) {
        setAnimated(true);
        targets.forEach((target, i) => {
          let start = null;
          const duration = 2200;
          const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVals((prev) => {
              const next = [...prev];
              next[i] = Math.floor(eased * target);
              return next;
            });
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [animated]);

  return (
    <section className="stats" ref={ref}>
      <div className="stats__grid">
        {items.map((item, i) => (
          <div key={i} className="stats__item">
            <div className="stats__num">
              {item.prefix || ""}{vals[i]}<span>{item.suffix}</span>
            </div>
            <div className="stats__label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── TRUST MARQUEE ───────────────────────────────── */
import wb1  from "../assets/WorkingBrand1.png";
import wb2  from "../assets/WorkingBrand2.avif";
import wb3  from "../assets/WorkingBrand3.png";
import wb4  from "../assets/WorkingBrand4.png";
import wb5  from "../assets/WorkingBrand5.png";
import wb6  from "../assets/WorkingBrand6.png";
import wb7  from "../assets/WorkingBrand7.png";
import wb8  from "../assets/WorkingBrand8.png";
// import wb9  from "../assets/WorkingBrand9.png";
// import wb10 from "../assets/WorkingBrand10.png";
import wb11 from "../assets/WorkingBrand11.png";
import wb12 from "../assets/WorkingBrand12.png";
import wb13 from "../assets/WorkingBrand13.png";
import wb14 from "../assets/WorkingBrand14.png";
import wb15 from "../assets/WorkingBrand15.png";
import wb16 from "../assets/WorkingBrand16.png";
import wb17 from "../assets/WorkingBrand17.png";
import wb18 from "../assets/WorkingBrand18.png";
import wb19 from "../assets/WorkingBrand19.png";
import wb20 from "../assets/WorkingBrand20.png";
import wb21 from "../assets/WorkingBrand21.png";

const BRAND_LOGOS = [
  wb1, wb2, wb3, wb4, wb5, wb6, wb7, wb8,
  wb11, wb12, wb13, wb14, wb15, wb16, wb17, wb18, wb19, wb20, wb21,
];



const TRUST_ICONS = [
  { label: "SEO",           emoji: "🔍", angle: -80, dist: 180 },
  { label: "Social Media",  emoji: "📱", angle: -50, dist: 220 },
  { label: "PPC Ads",       emoji: "📊", angle: -20, dist: 190 },
  { label: "Web Design",    emoji: "🎨", angle: 15,  dist: 210 },
  { label: "Web Dev",       emoji: "💻", angle: 45,  dist: 185 },
  { label: "Video Editing", emoji: "🎬", angle: 72,  dist: 215 },
  { label: "Content",       emoji: "✍️", angle: -110, dist: 170 },
];

const WINE_DROP_FALL_MS = 650;
const LOGO_REVEAL_INTERVAL = WINE_DROP_FALL_MS;

function TrustMarquee() {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return undefined;

    const timeouts = [];
    BRAND_LOGOS.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => setActiveDrop(i), i * LOGO_REVEAL_INTERVAL)
      );
      timeouts.push(
        setTimeout(() => {
          setActiveDrop((current) => (current === i ? null : current));
        }, i * LOGO_REVEAL_INTERVAL + WINE_DROP_FALL_MS)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, [triggered]);

  return (
    <section className="trust trust--dark" ref={sectionRef}>
      <div className="trust__hero">
        {TRUST_ICONS.map((svc, i) => {
          const rad = (svc.angle * Math.PI) / 180;
          const x = Math.cos(rad) * svc.dist;
          const y = Math.sin(rad) * svc.dist * -1;
          return (
            <div
              key={svc.label}
              className="trust__float-icon"
              style={{
                left: `calc(50% + ${x}px)`,
                top:  `calc(55% + ${y}px)`,
                animationDelay: `${i * 0.22}s`,
              }}
            >
              <span className="trust__float-emoji">{svc.emoji}</span>
              <span className="trust__float-label">{svc.label}</span>
            </div>
          );
        })}

        <div className="trust__char-wrap">
          <img src={manjulSirImg} alt="Social Theka" className="trust__char-img" loading="lazy" decoding="async" />
          <div className="trust__glass-glow" />
          {activeDrop !== null && (
            <span
              key={`wine-drop-${activeDrop}`}
              className="trust__wine-drop"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="trust__overlay-text">
          <p className="trust__overlay-label">✦ &nbsp; Trusted by 500+ Businesses &nbsp; ✦</p>
          <h2 className="trust__overlay-h2">
            We Grow Brands Every Service One Agency
          </h2>
        </div>
      </div>

      <div className="trust__marquee-wrap">
        <div className="marquee trust__marquee">
          <div className="marquee__track">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((src, i) => (
              <div key={i} className="marquee__logo-pill marquee__logo-pill--visible">
                <img
                  src={src}
                  alt={`Brand ${(i % BRAND_LOGOS.length) + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ────────────────────────────────────── */
const SERVICE_CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    title: "Website Design",
    desc: "We put your business at the top of search results on Google when people are looking for what you have to offer. We don't just get you any old traffic, we target the right audience that are truly interested in what you do. This means you have a chance of turning them into customers. You do not have to rely on paid advertisements. We will even simplify the process for you by starting or improving your site. No more worrying about technical aspects or website performance.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "SEO",
    desc: "If your website does not appear on Google, then so do your competitors - and unfortunately for you, that's where the customers are heading for. Social Theka provides result-oriented SEO services that improve Google rankings, attract quality & organic traffic, and help businesses grow sales without covering hundreds on a paid ads budget. So, if you are a startup from Chandigarh, a small business from Punjab or any big brand from anywhere in the world, we create an SEO strategy specifically built around your goals.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><polyline points="22 20 2 20"/>
      </svg>
    ),
    title: "Paid Advertising (PPC)",
    desc: "Running PPC ads is not a gamble, we create targeted campaigns towards the proper audience to use your budget effectively and allow you to track your spend and results. At Social Theka, we offer PPC services in Chandigarh that are focused on real business growth. As a trusted PPC agency in Chandigarh, we don't just aim for traffic — we focus on bringing the right audience, generating quality leads, and helping you get better returns on your ad spend.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Website Development",
    desc: "Website design is not just about colors and layout; we are more concerned with how your users will be able to easily navigate what we present to them. We create clean and modern designs which personify your brand and at the same time we put in place a simple path for visitors to find what they are looking for. If a website is easy to use and is seen as a trusted source, users will be more likely to get involved in what you are putting out there.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Content Writing",
    desc: "Content writing can play a critical role in the overall success of your business. At Social Theka, we have inside knowledge of how to produce content that communicates specifically what a company does and helps foster an image of credibility, as well as steps that will be taken by consumers following an interaction with your company such as purchasing a product, following social links to your site, etc. All content we create will have a similar effect when viewed (website, advertisements or social networking).",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    title: "Social Media Marketing",
    desc: "Let us be real for a second. Social media today is not about posting nice designs or writing captions. People actually check your profile before they decide to trust you. They scroll, they judge, they compare and then they decide. If your page looks inactive or random, they just move on. No second thought. That's why social media marketing is no longer optional. It's a big part of how your business is seen online. At Social Theka, we handle social media marketing in Chandigarh in a way that actually makes sense for real businesses.",
  },
];

/* ── OUR VERTICALS ───────────────────────────────── */
const FEATURES = {
  seo:     ["Technical SEO & site audits", "Keyword research & strategy", "On-page & off-page optimization"],
  social:  ["Content calendar & strategy", "Instagram, LinkedIn, Facebook", "Community engagement & DMs"],
  ppc:     ["Google & Meta Ads management", "A/B testing & optimization", "Conversion tracking & ROI reports"],
  web:     ["Custom React & Next.js builds", "Mobile-first responsive design", "SEO-optimized codebase"],
  content: ["Blog writing & SEO articles", "Social media captions & scripts", "Brand storytelling & copywriting"],
  video:   ["Short-form reels & YouTube edits", "Motion graphics & subtitles", "48–72hr fast turnaround"],
};

const VERTICALS = [
  {
    id: "seo", label: "SEO", icon: "🔍", tagline: "SEO",
    desc: "We rank your business on Google so the right people find you — not your competitors.",
    photos: [
      { url: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&q=80", tag: "@rankings", rotate: -30, x: -210, y: 30 },
      { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", tag: "@traffic", rotate: -15, x: -105, y: 10 },
      { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80", tag: null, rotate: 0, x: 0, y: 0 },
      { url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80", tag: "@growth", rotate: 15, x: 105, y: 10 },
      { url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80", tag: null, rotate: 30, x: 210, y: 30 },
    ],
  },
  {
    id: "social", label: "Social Media", icon: "📱", tagline: "Social Media",
    desc: "We build social media presence that makes people stop scrolling and start trusting.",
    photos: [
      { url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80", tag: "@instagram", rotate: -30, x: -210, y: 30 },
      { url: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=400&q=80", tag: "@content", rotate: -15, x: -105, y: 10 },
      { url: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=80", tag: null, rotate: 0, x: 0, y: 0 },
      { url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80", tag: "@reels", rotate: 15, x: 105, y: 10 },
      { url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80", tag: null, rotate: 30, x: 210, y: 30 },
    ],
  },
  {
    id: "ppc", label: "PPC Ads", icon: "📊", tagline: "PPC Ads",
    desc: "Every rupee you spend on ads works harder — targeted campaigns, real conversions.",
    photos: [
      { url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", tag: "@google", rotate: -30, x: -210, y: 30 },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80", tag: "@roi", rotate: -15, x: -105, y: 10 },
      { url: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=400&q=80", tag: null, rotate: 0, x: 0, y: 0 },
      { url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80", tag: "@leads", rotate: 15, x: 105, y: 10 },
      { url: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80", tag: null, rotate: 30, x: 210, y: 30 },
    ],
  },
  {
    id: "web", label: "Web Development", icon: "💻", tagline: "Web Development",
    desc: "Fast, clean, conversion-focused websites that your visitors actually enjoy using.",
    photos: [
      { url: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80", tag: "@design", rotate: -30, x: -210, y: 30 },
      { url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80", tag: "@ux", rotate: -15, x: -105, y: 10 },
      { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80", tag: null, rotate: 0, x: 0, y: 0 },
      { url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80", tag: "@code", rotate: 15, x: 105, y: 10 },
      { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80", tag: null, rotate: 30, x: 210, y: 30 },
    ],
  },
  {
    id: "content", label: "Content", icon: "✍️", tagline: "Content",
    desc: "Words, videos and visuals that speak to your audience and build lasting brand trust.",
    photos: [
      { url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80", tag: "@writing", rotate: -30, x: -210, y: 30 },
      { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80", tag: "@strategy", rotate: -15, x: -105, y: 10 },
      { url: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=400&q=80", tag: null, rotate: 0, x: 0, y: 0 },
      { url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&q=80", tag: "@video", rotate: 15, x: 105, y: 10 },
      { url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=80", tag: null, rotate: 30, x: 210, y: 30 },
    ],
  },
  {
    id: "video", label: "Video Editing", icon: "🎬", tagline: "Video Editing",
    desc: "Scroll-stopping video content — reels, ads, explainers — edited to perfection.",
    photos: [
      { url: "https://images.unsplash.com/photo-1574717024453-354056aafa98?w=400&q=80", tag: "@reels", rotate: -30, x: -210, y: 30 },
      { url: "https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=400&q=80", tag: "@cinematic", rotate: -15, x: -105, y: 10 },
      { url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", tag: null, rotate: 0, x: 0, y: 0 },
      { url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80", tag: "@motion", rotate: 15, x: 105, y: 10 },
      { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", tag: null, rotate: 30, x: 210, y: 30 },
    ],
  },
];

const CARD_GAP_MS = 150;

function OurVerticals() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const current = VERTICALS[active];

  // Scroll-triggered entrance — fires once when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Photo fan animation on tab change
  useEffect(() => {
    const photos = document.querySelectorAll(".verticals__photo");
    photos.forEach((el, i) => {
      el.classList.remove("is-in");
      void el.offsetWidth;
      el.style.animationDelay = `${i * CARD_GAP_MS}ms`;
      el.classList.add("is-in");
    });
  }, [active]);

  return (
    <section className={`verticals${visible ? " verticals--visible" : ""}`} ref={sectionRef}>
      <div className="verticals__inner">
        <p className="verticals__eyebrow verticals__anim verticals__anim--1">Our Services</p>
        <div className="verticals__tabs verticals__anim verticals__anim--2">
          {VERTICALS.map((v, i) => (
            <button
              key={v.id}
              className={`verticals__tab ${i === active ? "verticals__tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="verticals__tab-icon">{v.icon}</span>
              <span className="verticals__tab-label">{v.label}</span>
            </button>
          ))}
        </div>
        <div className="verticals__body">
          <div className="verticals__left verticals__anim verticals__anim--3">
            <h2 className="verticals__name">{current.tagline}</h2>
            <p className="verticals__desc">{current.desc}</p>
            <ul className="verticals__features">
              {FEATURES[current.id].map((f) => (
                <li key={f} className="verticals__feature">{f}</li>
              ))}
            </ul>
            <button className="verticals__cta">Get started →</button>
          </div>
          <div className="verticals__right verticals__anim verticals__anim--4">
            <div className="verticals__fan">
              {current.photos.map((p, i) => (
                <div
                  key={i}
                  className={`verticals__photo ${i === 2 ? "verticals__photo--center" : ""}`}
                  style={{
                    "--tx": `${p.x}px`,
                    "--rot": `${p.rotate}deg`,
                    zIndex: i === 2 ? 10 : i < 2 ? i + 1 : 9 - i,
                  }}
                >
                  <img src={p.url} alt="" loading="lazy" decoding="async" />
                  {p.tag && (
                    <div className={`verticals__tag ${i < 2 ? "verticals__tag--light" : "verticals__tag--dark"}`}>
                      {p.tag}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="verticals__dots verticals__anim verticals__anim--5">
          {VERTICALS.map((_, i) => (
            <button
              key={i}
              className={`verticals__dot ${i === active ? "verticals__dot--active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to ${VERTICALS[i].label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CLIENT GALLERY ──────────────────────────────── */
const CARD_TILTS = [
  "perspective(700px) rotateY(14deg) rotateX(-3deg) scale(0.95)",
  "perspective(700px) rotateY(9deg)  rotateX(-2deg) scale(0.97)",
  "perspective(700px) rotateY(4deg)  rotateX(-1deg) scale(0.99)",
  "perspective(700px) rotateY(0deg)  rotateX(0deg)  scale(1.00)",
  "perspective(700px) rotateY(-4deg) rotateX(-1deg) scale(0.99)",
  "perspective(700px) rotateY(-9deg) rotateX(-2deg) scale(0.97)",
  "perspective(700px) rotateY(-14deg) rotateX(-3deg) scale(0.95)",
];

const CARD_TILTS_HOVER = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1.03)";

const SHOWCASE_CARDS = [
  { url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=90", label: "Brand Strategy",   tag: "@strategy",  offset: 100 },
  { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=90", label: "Campaign Design",  tag: "@campaigns", offset: 60  },
  { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=90", label: "Social Growth",    tag: "@social",    offset: 20  },
  { type: "video", videoSrc: clientVideo, label: "Client Success Story", tag: "@clients",   offset: 0   },
  { type: "video", videoSrc: clientVideo2, label: "Client Testimonial", tag: "@testimonial", offset: 40  },
  { url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=90", label: "Performance SEO",  tag: "@seo",       offset: 20  },
  { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=90", label: "Web Development",  tag: "@webdev",    offset: 60  },
  { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=90", label: "PPC Advertising",  tag: "@ppc",       offset: 100 },
];

function ClientGallery() {
  const trackRef   = useRef(null);
  const sectionRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [videoPopup, setVideoPopup] = useState(null);

  // Carousel animation disabled - will enable when more videos are added
  // useEffect(() => {
  //   const track = trackRef.current;
  //   if (!track) return;
  //   const totalWidth = track.scrollWidth / 2;
  //   const animate = () => {
  //     posRef.current += 0.3;
  //     if (posRef.current >= totalWidth) posRef.current = 0;
  //     track.style.transform = `translateX(-${posRef.current}px)`;
  //     animRef.current = requestAnimationFrame(animate);
  //   };
  //   animRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(animRef.current);
  // }, []);

  const CARDS = SHOWCASE_CARDS; // Use original array, not duplicated

  return (
    <section className="lux" ref={sectionRef}>
      <div className="lux__header">
        <p className="lux__eyebrow">Our Work</p>
        <div className="lux__heading-wrap">
          <h2 className="lux__title">Achievements Backed By Results</h2>
        </div>
        <div className="lux__dot" />
        <p className="lux__sub">
        Trusted by brands across India, the USA, the UK, and Dubai—delivering campaigns that convert, content that connects, and growth that endures.
        </p>
      </div>
      <div className="lux__viewport">
        <div className="lux__track" ref={trackRef}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="lux__card"
              style={{ marginTop: `${card.offset}px` }}
              onClick={() => {
                if (card.type === "video") {
                  setVideoPopup(card.videoSrc);
                }
              }}
              onMouseEnter={() => {
                setHoveredIdx(i);
              }}
              onMouseLeave={() => {
                setHoveredIdx(null);
              }}
            >
              <div
                className="lux__card-img"
                style={{
                  transform: hoveredIdx === i ? CARD_TILTS_HOVER : CARD_TILTS[i % 7],
                  transition: "transform 0.4s ease, box-shadow 0.3s ease",
                  boxShadow: hoveredIdx === i
                    ? "0 20px 56px rgba(0,0,0,0.20), 0 6px 16px rgba(0,0,0,0.12)"
                    : "0 8px 32px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.08)",
                  cursor: card.type === "video" ? "pointer" : "default",
                }}
              >
                {card.type === "video" ? (
                  <>
                    <video 
                      src={card.videoSrc} 
                      className="lux__card-video-preview"
                      muted
                      loop
                      playsInline
                    />
                    <div className="lux__card-play-btn">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#C1121F">
                        <path d="M8 5.14v14l11-7z"/>
                      </svg>
                    </div>
                  </>
                ) : (
                  <img src={card.url} alt={card.label} loading="lazy" decoding="async" />
                )}
                <div className="lux__card-overlay" />
              </div>
              <div className="lux__card-footer">
                <span className="lux__card-tag">{card.tag}</span>
                <span className="lux__card-label">{card.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {videoPopup && (
        <div className="lux__video-modal" onClick={() => {
          setVideoPopup(null);
        }}>
          <div className="lux__video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lux__video-modal-close" 
              onClick={() => {
                setVideoPopup(null);
              }}
            >
              ✕
            </button>
            <video 
              src={videoPopup} 
              controls 
              autoPlay
              className="lux__video-modal-player"
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* ── WHY US ──────────────────────────────────────── */
import plainLanguageIcon from "../assets/plainlanguage.png";
import oneRoofIcon from "../assets/One Roof.png";
import yourGoalsIcon from "../assets/yourGoals.png";
import growthFocusIcon from "../assets/Growth Focus.png";
import brandFirstIcon from "../assets/firstApproach.png";
import teamCaresIcon from "../assets/teamCares.png";

const WHY_CARDS = [
  { icon: plainLanguageIcon, title: "Plain Language Reporting", desc: "No jargon, no vanity metrics. You always know exactly what's working." },
  { icon: oneRoofIcon, title: "Everything Under One Roof", desc: "SEO, PPC, social, web, content — one team handles it all seamlessly." },
  { icon: yourGoalsIcon, title: "Built Around Your Goals", desc: "We learn your business before touching a single ad or keyword." },
  { icon: growthFocusIcon, title: "Long-Term Growth Focus", desc: "Strategies built to keep delivering months and years down the line." },
  { icon: brandFirstIcon, title: "Brand-First Approach", desc: "We make your brand look credible, feel trustworthy, and convert." },
  { icon: teamCaresIcon, title: "A Team That Cares", desc: "Reachable, responsive — whether you're in Chandigarh or Dubai." },
];

const WHY_STATS = [
  { num: "500+", label: "Brands Scaled" },
  { num: "98%",  label: "Client Retention" },
  { num: "10",  label: "Years" },
  { num: "₹50Cr+", label: "Revenue Generated" },
];

function WhyUs() {
  return (
    <section className="why">
      <div className="why__inner">

        {/* ── TOP: heading + stats bar ── */}
        <div className="why__top">
          <div className="why__top-left">
            <p className="why__eyebrow">Why Choose Us</p>
            <h2 className="why__heading">
              Why Businesses Choose<br />
              <span className="why__heading-accent">Social Theka</span>
            </h2>
            <Link to="/contact" className="why__cta">Get a Free Strategy Call →</Link>
          </div>
          <div className="why__top-right">
            <p className="why__intro">
              While countless agencies offer marketing services, businesses continue to choose Social Theka because we deliver more than campaigns—we build partnerships, drive measurable growth, and stay invested in our clients’ long-term success.Because real partnerships create real results, and that's exactly what we deliver.That commitment is what turns first-time clients into long-term partners.
            </p>
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div className="why__stats-row">
          {WHY_STATS.map((s) => (
            <div key={s.label} className="why__stat-box">
              <span className="why__stat-num">{s.num}</span>
              <span className="why__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── CARDS GRID ── */}
        <div className="why__cards">
          {WHY_CARDS.map((c, i) => (
            <div key={i} className="why__card">
              <div className="why__card-icon">
                <img src={c.icon} alt={c.title} loading="lazy" decoding="async" />
              </div>
              <h3 className="why__card-title">{c.title}</h3>
              <p className="why__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── PROCESS ─────────────────────────────────────── */
import objectivesIcon from "../assets/objectives.png";
import strategicIcon from "../assets/strategic.png";
import executionIcon from "../assets/execution.png";
import optimisationIcon from "../assets/Optimisation.png";

const PROCESS_STEPS = [
  { icon: objectivesIcon, title: "Defined Objectives", desc: "We start by understanding your goals — visibility, leads, or sales. Everything begins with a clear plan, not assumptions." },
  { icon: strategicIcon, title: "Strategic Planning", desc: "A tailored strategy around your business, your audience, and your market. No generic playbooks copied from someone else." },
  { icon: executionIcon, title: "Smart Execution", desc: "The right mix of tools and expertise applied carefully across campaigns, content, and web — with intent." },
  { icon: optimisationIcon, title: "Continuous Optimisation", desc: "We monitor, analyse, and keep improving so your growth compounds over time — never set-and-forget." },
];

function ProcessStep({ step, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`proc-step-new${visible ? " proc-step-new--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Left — icon image */}
      <div className="proc-step-new__circle-wrap">
        <div className="proc-step-new__icon-box">
          <img src={step.icon} alt={step.title} className="proc-step-new__icon" loading="lazy" decoding="async" />
        </div>
      </div>

      {/* Right — content card */}
      <div className="proc-step-new__content">
        <h3 className="proc-step-new__title">{step.title}</h3>
        <p className="proc-step-new__desc">{step.desc}</p>
      </div>
    </div>
  );
}

function Process() {
  return (
    <section className="process section">
      <div className="container">
        <div className="process__head">
          <span className="tag">How We Work</span>
          <h2 className="section-title">Our strategy behind <span className="cherry">consistent growth</span></h2>
          <p className="section-sub">Growth is the result of strategy, not luck. Our framework combines data, creativity, and execution to deliver consistent performance and measurable business impact.</p>
        </div>
        <div className="proc-timeline">
          {PROCESS_STEPS.map((s, i) => (
            <ProcessStep key={i} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── RESULTS ─────────────────────────────────────── */
const RESULT_CARDS = [
  { logoClass: "",       initials: "TN", name: "TechNova India",   type: "B2B SaaS · Pune",      m1: "3.2x", l1: "Organic traffic growth", m2: "4 mo", l2: "Time to results",   desc: "SEO + content strategy tripled organic reach. 48 new keywords ranking on page 1 within 4 months of engagement." },
  { logoClass: "--dark", initials: "GH", name: "GrowthHub",        type: "E-Commerce · Delhi",   m1: "4.2x", l1: "ROAS improvement",       m2: "62%",  l2: "CPA reduction",     desc: "PPC campaign restructure took ROAS from 1.6x to 4.2x. Reporting clarity revealed where 12L/month was being wasted." },
  { logoClass: "--grey", initials: "SD", name: "ScaleUp Digital",  type: "Agency · London, UK",  m1: "280%", l1: "Lead increase",           m2: "9mo",  l2: "Partnership duration", desc: "UK-based agency scaled white-label SEO delivery. Full-funnel strategy drove 280% more qualified inbound leads in 6 months." },
];

function Results() {
  return (
    <section id="results" className="results section">
      <div className="container">
        <div className="results__head">
          <span className="tag">Case Studies</span>
          <h2 className="section-title">Results That Speak for Themselves</h2>
          <p className="section-sub">Real numbers. Real businesses. Real growth.</p>
        </div>
        <div className="results__grid">
          {RESULT_CARDS.map((c, i) => (
            <div key={i} className="result-card">
              <div className="result-card__company">
                <div className={`result-card__logo result-card__logo${c.logoClass}`}>{c.initials}</div>
                <div>
                  <div className="result-card__co-name">{c.name}</div>
                  <div className="result-card__co-type">{c.type}</div>
                </div>
              </div>
              <div className="result-card__metrics">
                <div><div className="result-card__metric-val">{c.m1}</div><div className="result-card__metric-label">{c.l1}</div></div>
                <div><div className="result-card__metric-val">{c.m2}</div><div className="result-card__metric-label">{c.l2}</div></div>
              </div>
              <p className="result-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ────────────────────────────────── */
const TESTIS = [
  { avatarMod: "",       initials: "AM", name: "Arjun Mehta",    role: "Founder, TechNova India",       quote: '"Social Theka tripled our organic traffic in 4 months. Straight talk, real results, zero fluff. Best agency decision we\'ve made."' },
  { avatarMod: "--dark", initials: "PS", name: "Priya Sharma",   role: "Marketing Head, GrowthHub",     quote: '"Our PPC ROAS went from 1.6x to 4.2x. The reporting is always clear and they actually explain the reasoning — not just the numbers."' },
  { avatarMod: "--grey", initials: "JC", name: "James Caldwell", role: "CEO, ScaleUp Digital — London", quote: '"We\'re UK-based and were genuinely sceptical. Social Theka removed every doubt within the first 60 days — the results speak for themselves."' },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonials__head">
          Client Stories
          <h2 className="section-title">What Our Clients Actually Say</h2>
          <Divider center />
        </div>
        <div className="testimonials__grid">
          {TESTIS.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-card__stars">★★★★★</div>
              <p className="testi-card__quote">{t.quote}</p>
              <div className="testi-card__author">
                <div className={`testi-card__avatar testi-card__avatar${t.avatarMod}`}>{t.initials}</div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────── */
const FAQ_ITEMS = [
  { q: "What exactly do you do?",                                                      a: "SEO, social media, paid ads, website design & development, content writing, and lead generation — One team handles everything. You get everything in one place. There is no chaos." },
  { q: "How long before I see results?",                                                a: "SEO takes 3–6 months for meaningful movement. Paid ads and social can move faster — often within weeks. Either way, you're always updated on where things stand." },
  { q: "We're a small business with a tight budget. Can you still help us?",           a: "Yes, and honestly some of our favourite work has come from exactly that. We figure out what makes the most impact for what you have and start from there." },
  { q: "We tried another agency before and it didn't work out. What makes you different?", a: "We don't overpromise. You'll know what we're working on, why we're doing it, and what results to expect - straight talk from day one." },
  { q: "We're not based in India. Do you work with international clients?",             a: "All the time. We have clients in the USA, UK, Dubai, and Singapore. Location has never been an issue for us." },
  { q: "Okay we're interested. How do we get started?",                                 a: "Just drop us a message or book a free call. We'll understand your business first and then figure out the best way forward - no pressure at all." },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <div className="faq__left">
          <span className="faq__eyebrow">GOT QUESTIONS?</span>
          <h2 className="faq__left-h2">Frequently<br />Asked<br />Questions</h2>
          <p className="faq__left-p">More questions about Social Theka or our services?</p>
          <a href="https://wa.me/917888735337" className="faq__chat-btn" target="_blank" rel="noreferrer">CHAT WITH US →</a>
        </div>
        <div className="faq__list">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq__item ${open === i ? "faq__item--open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
              <div className="faq__item-row">
                <span className="faq__item-q">{item.q}</span>
                <span className="faq__item-icon">{open === i ? "×" : "+"}</span>
              </div>
              {open === i && <p className="faq__item-a">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta__inner">
        <div>
          <h2 className="cta__h2">✦ 500+ Businesses Trust Us. Yours Could Be Next</h2>
          <p className="cta__p">From Chandigarh to New York - brands across the globe have grown with Social Theka. Ready to see what we can do for you?</p>
        </div>
        <div className="cta__actions">
          <a href="tel:+917888735337" className="btn-white cta-call-btn">
            <span className="cta-call-default">Claim Free Strategy Session →</span>
            {/* Floating icon above button on hover — outside button content */}
            <span className="cta-call-float-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </span>
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@socialtheka.com&su=Inquiry from Social Theka Website&body=Hi Social Theka Team,%0D%0A%0D%0AI would like to discuss:" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-glass"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── SCROLL TO TOP ───────────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  };
  
  return (
    <button 
      className={`scroll-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

/* ── FLOATING WHATSAPP ────────────────────────────── */
function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/917888735337" 
      target="_blank" 
      rel="noreferrer" 
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
      </svg>
    </a>
  );
}

/* ── APP ─────────────────────────────────────────── */
export default function SocialTheka() {
  return (
    <>
      <Hero />
      <AwardedSection />
      <PhotoFan />
      <AwardsSection />
       <TeamSection />
      <ServiceTabs />
      <Pricing />
      <CorePrinciples />
      <ResultsSlider />
      {/* <Stats /> */}
      {/* <TrustMarquee /> */}
      {/* <OurVerticals /> */}
      <ClientGallery />
      <WhyUs />
      <Process />
      <Results />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}