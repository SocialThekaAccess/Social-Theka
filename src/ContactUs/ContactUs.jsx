import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import Footer from "../Component/Footer/Footer";

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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

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
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
    <div className="cu-page">

      {/* ── HERO ────────────────────────────────── */}
      <section className="cu-hero">
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
                  <button className="cu-btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="cu-form" onSubmit={handleSubmit}>
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
                      />
                    </div>
                    <div className="cu-form__group">
                      <label className="cu-form__label">SERVICE NEEDED</label>
                      <select
                        name="service"
                        className="cu-form__input"
                        value={form.service}
                        onChange={handleChange}
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
                    />
                  </div>
                  <button type="submit" className="cu-btn-primary cu-btn-primary--full">
                    Send Message <IconSend />
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
                  <a href="mailto:socialtheka@gmail.com" className="cu-contact-item cu-contact-item--mail">
                    <div className="cu-contact-item__icon">
                      <IconMail />
                    </div>
                    <div className="cu-contact-item__body">
                      <div className="cu-contact-item__label">Email Us</div>
                      <div className="cu-contact-item__val">socialtheka@gmail.com</div>
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
                </div>
              </div>

              {/* Office location card */}
              <div className="cu-office-card">
                <div className="cu-office-card__icon"><IconMap /></div>
                <div>
                  <div className="cu-office-card__title">Our Office</div>
                  <div className="cu-office-card__val">Chandigarh, India</div>
                  <div className="cu-office-card__sub">Serving clients across India, USA, UK & Dubai</div>
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
    <Footer />
    <ScrollToTop />
    </>
  );
}
