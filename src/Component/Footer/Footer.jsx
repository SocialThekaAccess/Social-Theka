import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../../assets/FooterLogo.png";

const FOOTER_SERVICES = [
  { label: "SEO Services",          to: "/services/seo" },
  { label: "Social Media Marketing",to: "/services/social-media" },
  { label: "PPC Advertising",       to: "/services/ppc" },
  { label: "Website Development",   to: "/services/web-development" },
  { label: "Web Design",            to: "/services/web-design" },
  { label: "Video Editing",         to: "/services/video-editing" },
];

const FOOTER_COMPANY = [
  { label: "About Us",     to: "/theka-story" },
  { label: "Theka Story",  to: "/theka-story" },
  { label: "Case Studies", to: "/" },
  { label: "Blog",         to: "/" },
  { label: "Careers",      to: "/contact" },
];

const FOOTER_CONTACT = [
  { label: "hello@socialtheka.com",                                          href: "mailto:hello@socialtheka.com" },
  { label: "+91 78887 35337",                                                href: "tel:+917888735337" },
  { label: "+91 6280 614518",                                                href: "tel:+916280614518" },
  { label: "D-151, Second Floor, Phase-8, Industrial Area, Sector 73, SAS Nagar, Punjab 160071", href: null },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__logo-wrap">
            <Link to="/">
              <img src={footerLogo} alt="Social Theka" className="footer__logo-img" />
            </Link>
          </div>
          <p className="footer__tagline">Turning brands into market leaders. Based in Chandigarh. Serving India, USA, UK, Dubai &amp; Singapore.</p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/socialtheka/" target="_blank" rel="noreferrer" className="footer__soc footer__soc--li" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com/socialtheka" target="_blank" rel="noreferrer" className="footer__soc footer__soc--ig" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/officialsocialtheka" target="_blank" rel="noreferrer" className="footer__soc footer__soc--fb" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://x.com/SocialTheka" target="_blank" rel="noreferrer" className="footer__soc footer__soc--tw" aria-label="Twitter / X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <div className="footer__col-title">Services</div>
          <div className="footer__links">
            {FOOTER_SERVICES.map((item) => (
              <Link key={item.label} to={item.to} className="footer__link">{item.label}</Link>
            ))}
          </div>
        </div>

        {/* Company column */}
        <div>
          <div className="footer__col-title">Company</div>
          <div className="footer__links">
            {FOOTER_COMPANY.map((item) => (
              <Link key={item.label} to={item.to} className="footer__link">{item.label}</Link>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div>
          <div className="footer__col-title">Contact</div>
          <div className="footer__links">
            {FOOTER_CONTACT.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href} className="footer__link">{item.label}</a>
              ) : (
                <span key={item.label} className="footer__link footer__link--text">{item.label}</span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© 2026 Social Theka. All rights reserved.</span>
        <div className="footer__bottom-links">
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms</Link>
          <Link to="/contact">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
