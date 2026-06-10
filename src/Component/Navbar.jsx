import { useState, useEffect } from "react";
import logo from "../assets/SocialThekaLogo.png";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",         href: "#home",     active: true  },
  { label: "Our Services", href: "#services", dropdown: true },
  { label: "Theka Story",  href: "#why",      dropdown: true },
  { label: "Blogs",        href: "#blog",     dropdown: true },
  { label: "Contact Us",   href: "#contact"                  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── Announcement bar ─────────────────────── */}
      <div className="nb-top">
        <div className="nb-top__left">
          <span className="nb-top__dot" />
          <span>SEO Agency of the Year 2024, 25</span>
        </div>
        <div className="nb-top__right">
          <span>SEO Audit: &nbsp;<strong>sales@socialtheka.com</strong></span>
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

          {/* Logo — actual image */}
          <a href="#home" className="nb__logo">
            <img src={logo} alt="Social Theka" className="nb__logo-img" />
          </a>

          {/* Nav links */}
          <nav className="nb__links">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`nb__link ${active === l.label ? "nb__link--active" : ""}`}
                onClick={() => { setActive(l.label); setMenuOpen(false); }}
              >
                {l.label}
                {l.dropdown && <span className="nb__chevron">›</span>}
              </a>
            ))}
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
                onClick={() => { setActive(l.label); setMenuOpen(false); }}
              >
                {l.label}
              </a>
            ))}
            <div className="nb__mobile-ctas">
              {/* <a href="#contact" className="nb__btn-outline" onClick={() => setMenuOpen(false)}>Contact Us</a> */}
              <a href="#contact" className="nb__btn-solid"   onClick={() => setMenuOpen(false)}>Book a Meeting</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
