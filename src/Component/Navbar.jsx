import { useState, useEffect, useRef } from "react";
import logo from "../assets/SocialThekaLogo.png";
import "./Navbar.css";

const SVG_ICONS = {
  seo: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      <path d="M11 8v6M8 11h6"/>
    </svg>
  ),
  ppc: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      <path d="m7 10 3 3 4-5 3 2"/>
    </svg>
  ),
  webdev: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
    </svg>
  ),
  webdesign: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
    </svg>
  ),
  social: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  video: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/>
    </svg>
  ),
};

const DELHI_SERVICES = [
  { icon: SVG_ICONS.seo,       label: "SEO Services Delhi",               to: "seo-delhi" },
  { icon: SVG_ICONS.ppc,       label: "PPC Advertising Delhi",            to: "ppc-delhi" },
  { icon: SVG_ICONS.webdev,    label: "Web Development Delhi",            to: "webdev-delhi" },
  { icon: SVG_ICONS.webdesign, label: "Web Design Delhi",                 to: "webdesign-delhi" },
  { icon: SVG_ICONS.social,    label: "Social Media Marketing Delhi",     to: "social-delhi" },
  { icon: SVG_ICONS.video,     label: "Video Editing Delhi",              to: "video-delhi" },
];

const CHANDIGARH_SERVICES = [
  { icon: SVG_ICONS.seo,       label: "SEO Services Chandigarh",          to: "seo-chandigarh" },
  { icon: SVG_ICONS.ppc,       label: "PPC Advertising Chandigarh",       to: "ppc" },
  { icon: SVG_ICONS.webdev,    label: "Web Development Chandigarh",       to: "webdev-chandigarh" },
  { icon: SVG_ICONS.webdesign, label: "Web Design Chandigarh",            to: "webdesign-chandigarh" },
  { icon: SVG_ICONS.social,    label: "Social Media Marketing Chandigarh",to: "social-chandigarh" },
  { icon: SVG_ICONS.video,     label: "Video Editing Chandigarh",         to: "video-chandigarh" },
];

const NAV_LINKS = [
  { label: "Home",         href: "#home",     active: true  },
  { label: "Our Services", href: "#services", dropdown: "services" },
  { label: "Theka Story",  href: "#story",    to: "theka-story" },
  { label: "Blogs",        href: "#blog",     dropdown: true },
  { label: "Contact Us",   href: "#contact",  to: "contact"         },
];

export default function Navbar({ onNavigate, currentPage }) {
  const [scrolled, setScrolled]         = useState(false);
  const [active, setActive]             = useState("Home");
  const [menuOpen, setMenuOpen]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef                     = useRef(null);
  const timeoutRef                      = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      {/* ── Announcement bar ─────────────────────── */}
      <div className="nb-top">
        <div className="nb-top__left">
          <span className="nb-top__dot" />
          <span>SEO Agency of the Year 2024, 25</span>
        </div>
        <div className="nb-top__right">
          <span>SEO Audit: &nbsp;<strong>info@socialtheka.com</strong></span>
          <span className="nb-top__sep">|</span>
          <a href="tel:+919876543210" className="nb-top__phone">
            <span className="nb-top__phone-icon">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
            </span>
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* ── Main navbar ──────────────────────────── */}
      <header className={`nb ${scrolled ? "nb--scrolled" : ""}`}>
        <div className="nb__inner">

          {/* Logo */}
          <a href="#home" className="nb__logo" onClick={() => { setActive("Home"); onNavigate && onNavigate("home"); }}>
            <img src={logo} alt="Social Theka" className="nb__logo-img" />
          </a>

          {/* Nav links */}
          <nav className="nb__links">
            {NAV_LINKS.map((l) =>
              l.dropdown === "services" ? (
                <div
                  key={l.label}
                  className="nb__link-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  <a
                    href={l.href}
                    className={`nb__link ${active === l.label ? "nb__link--active" : ""}`}
                    onClick={() => { setActive(l.label); setMenuOpen(false); }}
                  >
                    {l.label}
                    <span className={`nb__chevron ${servicesOpen ? "nb__chevron--open" : ""}`}>›</span>
                  </a>

                  {/* ── Mega Dropdown ── */}
                  {servicesOpen && (
                    <div className="nb__mega">
                      <div className="nb__mega-inner">

                        {/* Delhi Column */}
                        <div className="nb__mega-col">
                          <div className="nb__mega-city">
                            <span className="nb__mega-city-flag">🏙️</span>
                            Delhi
                          </div>
                          <ul className="nb__mega-list">
                            {DELHI_SERVICES.map((s) => (
                              <li key={s.label}>
                                <button className="nb__mega-item" onClick={() => { setServicesOpen(false); setActive("Our Services"); onNavigate && onNavigate(s.to); }}>
                                  <span className="nb__mega-item-icon">{s.icon}</span>
                                  {s.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <button className="nb__mega-viewall" onClick={() => setServicesOpen(false)}>
                            View all Delhi services →
                          </button>
                        </div>

                        {/* Divider */}
                        <div className="nb__mega-divider" />

                        {/* Chandigarh Column */}
                        <div className="nb__mega-col">
                          <div className="nb__mega-city">
                            <span className="nb__mega-city-flag">🏙️</span>
                            Chandigarh
                          </div>
                          <ul className="nb__mega-list">
                            {CHANDIGARH_SERVICES.map((s) => (
                              <li key={s.label}>
                                <button className="nb__mega-item" onClick={() => { setServicesOpen(false); setActive("Our Services"); onNavigate && onNavigate(s.to); }}>
                                  <span className="nb__mega-item-icon">{s.icon}</span>
                                  {s.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <button className="nb__mega-viewall" onClick={() => setServicesOpen(false)}>
                            View all Chandigarh services →
                          </button>
                        </div>

                      </div>

                      {/* Bottom stats bar */}
                      <div className="nb__mega-stats">
                        <span><strong>5M+</strong> keywords ranked</span>
                        <span><strong>1M+</strong> leads generated</span>
                        <span><strong>25K+</strong> happy clients</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className={`nb__link ${active === l.label ? "nb__link--active" : ""}`}
                  onClick={() => {
                    setActive(l.label);
                    setMenuOpen(false);
                    if (l.label === "Home") onNavigate && onNavigate("home");
                    if (l.to) onNavigate && onNavigate(l.to);
                  }}
                >
                  {l.label}
                  {l.dropdown && l.dropdown !== "services" && (
                    <span className="nb__chevron">›</span>
                  )}
                </a>
              )
            )}
          </nav>

          {/* CTA buttons */}
          <div className="nb__ctas">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="nb__wa-icon"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.535 5.875L.057 23.996l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.359-.213-3.722.976.994-3.632-.234-.373A9.818 9.818 0 1112 21.818z"/>
              </svg>
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" className="nb__btn-solid" target="_blank" rel="noreferrer">
              Book a Meeting
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nb__burger ${menuOpen ? "nb__burger--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="nb__mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nb__mobile-link ${active === l.label ? "nb__mobile-link--active" : ""}`}
                onClick={() => {
                  setActive(l.label);
                  setMenuOpen(false);
                  if (l.label === "Home") onNavigate && onNavigate("home");
                  if (l.to) onNavigate && onNavigate(l.to);
                }}
              >
                {l.label}
              </a>
            ))}
            {/* Mobile Services expanded */}
            <div className="nb__mobile-cities">
              <div className="nb__mobile-city-group">
                <div className="nb__mobile-city-label">🏙️ Delhi</div>
                {DELHI_SERVICES.map((s) => (
                  <button key={s.label} className="nb__mobile-service-link" onClick={() => { setMenuOpen(false); onNavigate && onNavigate(s.to); }}>
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>
              <div className="nb__mobile-city-group">
                <div className="nb__mobile-city-label">🏙️ Chandigarh</div>
                {CHANDIGARH_SERVICES.map((s) => (
                  <button key={s.label} className="nb__mobile-service-link" onClick={() => { setMenuOpen(false); onNavigate && onNavigate(s.to); }}>
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="nb__mobile-ctas">
              <a href="#contact" className="nb__btn-solid" onClick={() => setMenuOpen(false)}>Book a Meeting</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}