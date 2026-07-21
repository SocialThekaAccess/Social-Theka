/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./ContactUs.css";
import footerLogo from "../assets/FooterLogo.png";
import contactBg from "../assets/ContactUs.png";
import SharedFooter from "../Component/Footer/Footer";

/* ── Icons ────────────────────────────────────── */
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.18 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconMap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.535 5.875L.057 23.996l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.359-.213-3.722.976.994-3.632-.234-.373A9.818 9.818 0 1112 21.818z"/>
  </svg>
);
const IconSend = () => (
  <svg className="cu-btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ── Footer data ──────────────────────────────── */
const FOOTER_SERVICES = ["SEO Services", "Social Media Marketing", "PPC Advertising", "Website Development", "Content Writing", "Link Building"];
const FOOTER_COMPANY  = ["About Us", "Theka Story", "Case Studies", "Blog", "Careers"];
const FOOTER_CONTACT  = [
  { label: "info@socialtheka.com", href: "mailto:info@socialtheka.com" },
  { label: "+91 78887 35337", href: "tel:+917888735337" },
  { label: "+91 6280 614518", href: "tel:+916280614518" },
  { label: "D-151, Second Floor, Phase-8, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160071", href: "https://maps.app.goo.gl/t8n6i5sPyoAjz1Xv6" }
];
const FOOTER_COLS = [
  { title: "Services", links: FOOTER_SERVICES },
  { title: "Company",  links: FOOTER_COMPANY  },
  { title: "Contact",  links: FOOTER_CONTACT  },
];

function Footer() {
  return (
    <footer className="cu-footer">
      <div className="cu-footer__top">
        <div className="cu-footer__brand">
          <div className="cu-footer__logo-wrap">
            <img src={footerLogo} alt="Social Theka" className="cu-footer__logo-img" loading="lazy" decoding="async" />
          </div>
          <p className="cu-footer__tagline">
            Turning brands into market leaders. Based in Chandigarh. Serving India, USA, UK, Dubai &amp; Singapore.
          </p>
          <div className="cu-footer__socials">
            <a href="https://www.linkedin.com/company/socialtheka/" target="_blank" rel="noreferrer" className="cu-footer__soc" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com/socialtheka" target="_blank" rel="noreferrer" className="cu-footer__soc" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/officialsocialtheka" target="_blank" rel="noreferrer" className="cu-footer__soc" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://x.com/SocialTheka" target="_blank" rel="noreferrer" className="cu-footer__soc" aria-label="Twitter / X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title} className="cu-footer__col">
            <div className="cu-footer__col-title">{col.title}</div>
            <div className="cu-footer__links">
              {col.links.map((link) => {
                const isObject = typeof link === 'object';
                const href = isObject ? link.href : '#';
                const label = isObject ? link.label : link;
                const target = isObject && link.href.startsWith('http') ? '_blank' : undefined;
                const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
                
                return (
                  <a key={label} href={href} target={target} rel={rel} className="cu-footer__link">{label}</a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="cu-footer__bottom">
        <span>© 2026 Social Theka. All rights reserved.</span>
        <div className="cu-footer__bottom-links">
          {["Privacy Policy", "Terms", "Cookies"].map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── Scroll To Top ────────────────────────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return visible ? (
    <button
      className="cu-scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}

/* ── Main Component ───────────────────────────── */
export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    formData.append("access_key", "0f62e32c-e8c3-4667-bfa1-4019589e2d8e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setError("");
  };

  return (
    <>
    <div className="cu-page">
      
      {/* ── HERO ────────────────────────────────── */}
      <section className="cu-hero" style={{'--contact-bg-image': `url(${contactBg})`}}>
        {/* Background Pattern Images */}
        <div className="cu-hero__bg-pattern">
          <img src="https://www.pngall.com/wp-content/uploads/5/Digital-Marketing-PNG-Free-Download.png" alt="" className="cu-hero__pattern-img cu-hero__pattern-img--1" loading="lazy" decoding="async" />
          <img src="https://purepng.com/public/uploads/large/purepng.com-social-media-marketing-iconsocial-mediasocial-networking-serviceweb-iconsymbolssetcollection-1421526557682qoesp.png" alt="" className="cu-hero__pattern-img cu-hero__pattern-img--2" loading="lazy" decoding="async" />
          <img src="https://www.pngall.com/wp-content/uploads/12/SEO-PNG-Clipart.png" alt="" className="cu-hero__pattern-img cu-hero__pattern-img--3" loading="lazy" decoding="async" />
        </div>
        
        {/* Background Illustration */}
        <svg className="cu-hero__bg-illustration" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Digital Marketing Elements */}
          <circle cx="400" cy="400" r="350" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <circle cx="400" cy="400" r="210" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          
          {/* Laptop/Screen */}
          <rect x="250" y="320" width="300" height="180" rx="8" stroke="currentColor" strokeWidth="3" fill="none"/>
          <rect x="270" y="340" width="260" height="130" rx="4" fill="currentColor" opacity="0.1"/>
          <rect x="350" y="500" width="100" height="8" rx="4" fill="currentColor" opacity="0.3"/>
          
          {/* Chart/Analytics */}
          <path d="M 290 380 L 320 360 L 350 370 L 380 340 L 410 350 L 440 330" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="290" cy="380" r="4" fill="currentColor"/>
          <circle cx="320" cy="360" r="4" fill="currentColor"/>
          <circle cx="350" cy="370" r="4" fill="currentColor"/>
          <circle cx="380" cy="340" r="4" fill="currentColor"/>
          <circle cx="410" cy="350" r="4" fill="currentColor"/>
          <circle cx="440" cy="330" r="4" fill="currentColor"/>
          
          {/* Floating Icons - Email */}
          <g transform="translate(580, 200)">
            <rect x="0" y="0" width="60" height="45" rx="6" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M 5 5 L 30 25 L 55 5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </g>
          
          {/* Floating Icons - Phone */}
          <g transform="translate(150, 220)">
            <rect x="0" y="0" width="35" height="55" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="17.5" cy="47" r="3" fill="currentColor"/>
            <line x1="10" y1="8" x2="25" y2="8" stroke="currentColor" strokeWidth="2"/>
          </g>
          
          {/* Floating Icons - Message Bubble */}
          <g transform="translate(620, 480)">
            <rect x="0" y="0" width="70" height="50" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M 35 50 L 35 65 L 50 50" stroke="currentColor" strokeWidth="2" fill="none"/>
            <line x1="15" y1="20" x2="55" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="15" y1="32" x2="45" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </g>
          
          {/* Floating Icons - Target/Marketing */}
          <g transform="translate(120, 520)">
            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="30" r="4" fill="currentColor"/>
          </g>
          
          {/* Connection Lines */}
          <path d="M 400 200 Q 500 250 580 220" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"/>
          <path d="M 400 200 Q 300 250 170 240" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"/>
          <path d="M 400 550 Q 500 550 640 510" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"/>
          <path d="M 400 550 Q 300 550 150 540" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" opacity="0.3"/>
        </svg>
        
        <div className="cu-hero__bg-grid" />
        <div className="cu-hero__inner">
          <div className="cu-hero__badge">
            <span className="cu-hero__badge-dot" />
            Contact Us
          </div>
          <h1 className="cu-hero__h1">
            Get In Touch <span className="cu-red">With Us</span>
          </h1>
          <p className="cu-hero__sub">
            We're here to help — let's start the conversation! Whether you have questions about our
            services, want to discuss a potential project, or just need some advice, we're always
            ready to listen.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────── */}
      <section className="cu-section">
        <div className="cu-section__inner">
          <div className="cu-layout">

            {/* LEFT — Form */}
            <div className="cu-form-side">
              <div className="cu-form-header">
                <h2 className="cu-form-title">Send Us a Message</h2>
                <p className="cu-form-sub">
                  Fill out the form below and our team at Social Theka will get back to you
                  with personalized support. Let's connect and create something meaningful together!
                </p>
              </div>

              {submitted ? (
                <div className="cu-success">
                  <div className="cu-success__icon"><IconCheck /></div>
                  <div className="cu-success__title">Message Sent!</div>
                  <p className="cu-success__sub">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button className="cu-btn-primary" onClick={handleSendAnother}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="cu-form" onSubmit={handleSubmit}>
                  
                  {/* Error message */}
                  {error && (
                    <div className="cu-error">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      {error}
                    </div>
                  )}

                  <div className="cu-form__row">
                    <div className="cu-form__group">
                      <label className="cu-form__label">FULL NAME *</label>
                      <input
                        type="text"
                        name="name"
                        className="cu-form__input"
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="cu-form__group">
                      <label className="cu-form__label">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        name="email"
                        className="cu-form__input"
                        placeholder="rahul@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="cu-form__row">
                    <div className="cu-form__group">
                      <label className="cu-form__label">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        name="phone"
                        className="cu-form__input"
                        placeholder="+91 78887 35337"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="cu-form__group">
                      <label className="cu-form__label">SERVICE NEEDED</label>
                      <select
                        name="service"
                        className="cu-form__input"
                        value={form.service}
                        onChange={handleChange}
                        disabled={loading}
                      >
                        <option value="">Select a service</option>
                        <option>SEO Services</option>
                        <option>Social Media Marketing</option>
                        <option>Paid Advertising (PPC)</option>
                        <option>Website Development</option>
                        <option>Web Design</option>
                        <option>Video Editing</option>
                        <option>Content Writing</option>
                      </select>
                    </div>
                  </div>
                  <div className="cu-form__group">
                    <label className="cu-form__label">MONTHLY BUDGET</label>
                    <select
                      name="budget"
                      className="cu-form__input"
                      value={form.budget}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="">Select budget range</option>
                      <option>₹10k – ₹25k</option>
                      <option>₹25k – ₹50k</option>
                      <option>₹50k – ₹1L</option>
                      <option>₹1L+</option>
                    </select>
                  </div>
                  <div className="cu-form__group">
                    <label className="cu-form__label">YOUR MESSAGE *</label>
                    <textarea
                      name="message"
                      className="cu-form__input cu-form__textarea"
                      placeholder="Tell us about your business goals, challenges, or what you're looking for..."
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="cu-btn-primary cu-btn-primary--full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="cu-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <IconSend />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT — Info */}
            <div className="cu-info-side">

              {/* Direct contact card */}
              <div className="cu-hate-card">
                <div className="cu-hate-card__eyebrow">Hate Filling Out Forms?</div>
                <h3 className="cu-hate-card__title">Directly Contact Us</h3>
                <p className="cu-hate-card__sub">
                  Skip the form — reach us directly via phone or email. We respond fast.
                </p>
                <div className="cu-hate-card__contacts">
                  <a href="tel:+917888735337" className="cu-contact-item cu-contact-item--phone">
                    <div className="cu-contact-item__icon">
                      <IconPhone />
                    </div>
                    <div className="cu-contact-item__body">
                      <div className="cu-contact-item__label">Call Us</div>
                      <div className="cu-contact-item__val">+91 78887 35337</div>
                    </div>
                    <IconArrow />
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@socialtheka.com" target="_blank" rel="noopener noreferrer" className="cu-contact-item cu-contact-item--mail">
                    <div className="cu-contact-item__icon">
                      <IconMail />
                    </div>
                    <div className="cu-contact-item__body">
                      <div className="cu-contact-item__label">Email Us</div>
                      <div className="cu-contact-item__val">info@socialtheka.com</div>
                    </div>
                    <IconArrow />
                  </a>
                  <a href="https://wa.me/917888735337" target="_blank" rel="noreferrer" className="cu-contact-item cu-contact-item--wa">
                    <div className="cu-contact-item__icon">
                      <IconWhatsApp />
                    </div>
                    <div className="cu-contact-item__body">
                      <div className="cu-contact-item__label">WhatsApp</div>
                      <div className="cu-contact-item__val">Chat Instantly</div>
                    </div>
                    <IconArrow />
                  </a>
                  <a href="https://maps.app.goo.gl/t8n6i5sPyoAjz1Xv6" target="_blank" rel="noopener noreferrer" className="cu-contact-item cu-contact-item--directions">
                    <div className="cu-contact-item__icon">
                      <IconMap />
                    </div>
                    <div className="cu-contact-item__body">
                      <div className="cu-contact-item__label">Get Directions</div>
                      <div className="cu-contact-item__val">D-151, Second Floor, Phase-8, Industrial Area</div>
                      <div className="cu-contact-item__address">Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160071</div>
                    </div>
                    <IconArrow />
                  </a>
                </div>
              </div>

              {/* Response time card */}
              <div className="cu-response-card">
                <div className="cu-response-card__row">
                  <div className="cu-response-dot" />
                  <span className="cu-response-card__label">Average response time</span>
                </div>
                <div className="cu-response-card__val">Under 24 Hours</div>
                <p className="cu-response-card__sub">
                  Our team is dedicated to ensuring your needs are met with care. We'll review your message and reach out promptly.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
    <SharedFooter />
    <ScrollToTop />
    </>
  );
}
