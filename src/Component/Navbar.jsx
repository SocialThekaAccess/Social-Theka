import { useState, useEffect, useRef } from "react";
import logo from "../assets/SocialThekaLogo.png";
import "./Navbar.css";

const SVG_ICONS = {
  seo: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  ),
  ppc: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4.5v15" />
      <path d="M4.5 14h15" />
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </svg>
  ),
  webdev: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  webdesign: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  social: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  video: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  ),
};

const CHANDIGARH_SERVICES = [
  { icon: SVG_ICONS.seo,       label: "SEO Services Chandigarh",           to: "seo-chandigarh" },
  { icon: SVG_ICONS.ppc,       label: "PPC Advertising Chandigarh",        to: "ppc" },
  { icon: SVG_ICONS.webdev,    label: "Web Development Chandigarh",        to: "webdev-chandigarh" },
  { icon: SVG_ICONS.webdesign, label: "Web Design Chandigarh",             to: "webdesign-chandigarh" },
  { icon: SVG_ICONS.social,    label: "Social Media Marketing Chandigarh", to: "social-chandigarh" },
  { icon: SVG_ICONS.video,     label: "Video Editing Chandigarh",          to: "video-chandigarh" },
];

const NAV_LINKS = [
  { label: "Home",         href: "#home",     active: true },
  { label: "Our Services", href: "#services", dropdown: "services" },
  { label: "Theka Story",  href: "#story",    to: "theka-story" },
  { label: "Blogs",        href: "#blog",     dropdown: true },
  { label: "Contact Us",   href: "#contact",  to: "contact" },
];

export default function Navbar({ onNavigate, currentPage }) {
  const [scrolled,     setScrolled]     = useState(false);
  const [active,       setActive]       = useState("Home");
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef  = useRef(null);

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

  const navigateTo = (page, label) => {
    setActive(label);
    setMenuOpen(false);
    setServicesOpen(false);
    if (page) onNavigate?.(page);
  };

  const leftCol  = CHANDIGARH_SERVICES.filter((_, i) => i % 2 === 0);
  const rightCol = CHANDIGARH_SERVICES.filter((_, i) => i % 2 === 1);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="nb-top">
        <div className="nb-top__left">
          <span className="nb-top__dot" />
          <span>SEO Agency of the Year 2024, 25</span>
        </div>
        <div className="nb-top__right">
          <span> &nbsp;<strong>info@socialtheka.com</strong></span>
          <span className="nb-top__sep">|</span>
          <a href="tel:+917888735337" className="nb-top__phone">
            <span className="nb-top__phone-icon">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
            </span>
            +91 78887 35337
          </a>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className={`nb ${scrolled ? "nb--scrolled" : ""}`}>
        <div className="nb__inner">

          {/* Logo */}
          <a href="#home" className="nb__logo" onClick={() => navigateTo("home", "Home")}>
            <img
              src={logo}
              alt="Social Theka"
              key={currentPage}
              className="nb__logo-img nb__logo-img--reveal"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="nb__links nb__links--reveal">
            {NAV_LINKS.map((link) =>
              link.dropdown === "services" ? (
                <div
                  key={link.label}
                  className="nb__link-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  <a
                    href={link.href}
                    className={`nb__link ${active === link.label || servicesOpen ? "nb__link--active" : ""}`}
                    onClick={() => navigateTo(null, link.label)}
                  >
                    {link.label}
                    <span className={`nb__chevron ${servicesOpen ? "nb__chevron--open" : ""}`}>^</span>
                  </a>

                  {/* ── MEGA DROPDOWN ── */}
                  {servicesOpen && (
                    <div className="nb__mega">
                      {/* "OUR SERVICES" label + red accent */}
                      <div className="nb__mega-head">
                        <span className="nb__mega-label">OUR SERVICES</span>
                        <span className="nb__mega-accent" />
                      </div>

                      {/* 2-column grid — exactly like screenshot */}
                      <div className="nb__mega-grid">
                        {/* Left column */}
                        <div className="nb__mega-col nb__mega-col--left">
                          {leftCol.map((service) => (
                            <button
                              key={service.label}
                              className="nb__mega-card"
                              onClick={() => navigateTo(service.to, "Our Services")}
                            >
                              <span className="nb__mega-card-icon">{service.icon}</span>
                              <span className="nb__mega-card-title">{service.label}</span>
                              <span className="nb__mega-card-arrow">→</span>
                            </button>
                          ))}
                        </div>

                        {/* Right column */}
                        <div className="nb__mega-col nb__mega-col--right">
                          {rightCol.map((service) => (
                            <button
                              key={service.label}
                              className="nb__mega-card"
                              onClick={() => navigateTo(service.to, "Our Services")}
                            >
                              <span className="nb__mega-card-icon">{service.icon}</span>
                              <span className="nb__mega-card-title">{service.label}</span>
                              <span className="nb__mega-card-arrow">→</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* View all footer */}
                      <button
                        className="nb__mega-viewall"
                        onClick={() => navigateTo(null, "Our Services")}
                      >
                        View all Chandigarh services
                        <span className="nb__mega-viewall-arrow">→</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nb__link ${active === link.label ? "nb__link--active" : ""}`}
                  onClick={() => navigateTo(link.label === "Home" ? "home" : link.to, link.label)}
                >
                  {link.label}
                  {link.dropdown && <span className="nb__chevron">^</span>}
                </a>
              )
            )}
          </nav>

          {/* CTAs */}
          <div className="nb__ctas">
            <a href="https://wa.me/917888735337" className="nb__wa-icon" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.535 5.875L.057 23.996l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.359-.213-3.722.976.994-3.632-.234-.373A9.818 9.818 0 1112 21.818z" />
              </svg>
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" className="nb__btn-solid" target="_blank" rel="noreferrer">
              <svg className="nb__btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 2v4" /><path d="M16 2v4" />
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" />
              </svg>
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

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div className="nb__mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nb__mobile-link ${active === link.label ? "nb__mobile-link--active" : ""}`}
                onClick={() => navigateTo(link.label === "Home" ? "home" : link.to, link.label)}
              >
                {link.label}
              </a>
            ))}
            <div className="nb__mobile-cities">
              <div className="nb__mobile-city-group">
                <div className="nb__mobile-city-label">Chandigarh</div>
                {CHANDIGARH_SERVICES.map((service) => (
                  <button
                    key={service.label}
                    className="nb__mobile-service-link"
                    onClick={() => navigateTo(service.to, "Our Services")}
                  >
                    {service.icon} {service.label}
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