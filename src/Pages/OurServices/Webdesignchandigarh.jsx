import { useState } from "react";
import { Link } from "react-router-dom";
import "./Webdesignchandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";
import websiteHeroImg from "../../assets/websiteSocialTheka.png";

const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const IconMobile = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
);
const IconShop = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
const IconRefresh = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
);
const IconLayout = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="9" y1="21" x2="9" y2="9"/></svg>
);
const IconSearch = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default function WebDesignChandigarh() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="wdsc-page">

      {/* ── HERO ── */}
      <section className="wdsc-hero">
        <div className="wdsc-hero__inner">
          <div className="wdsc-hero__left">
            <div className="wdsc-hero__badge">
              <span className="wdsc-hero__badge-dot" />
              WEB DESIGN - CHANDIGARH
            </div>
            <h1 className="wdsc-hero__title">
              Website Designing Company
              <span className="wdsc-hero__title-accent">in Chandigarh</span>
            </h1>
            <p className="wdsc-hero__sub">
              Think about it this way: a clinic that just needs people to book appointments and a fashion label trying to sell sarees are both technically running a website but they have very different needs.
            </p>
            <p className="wdsc-hero__sub">
              The website technology you use is really important. Most business owners in Chandigarh think that choosing the web technology is something the developer should handle — it is not a big deal. It is worth thinking about it a little more. The technology you choose will affect how much you pay for hosting, how easy it is to add things to your website later, where your website shows up on Google search, what kind of developer you need to hire and if your website can handle a lot of visitors at the same time.
            </p>
            {/* <p className="wdsc-hero__sub">
              Picking the web development service in Chandigarh is a big decision because it will affect your website over time. A clinic and a fashion label are both running a website. Their needs are very different. So instead of comparing website technologies it makes more sense to look at what each technology is actually good for.
            </p> */}
            <div className="wdsc-hero__ctas">
              <Link to="/contact" className="wdsc-btn-primary">Start Your Project <IconArrow /></Link>
              <a href="#services" className="wdsc-btn-outline">View Services</a>
            </div>
            <div className="wdsc-hero__stats">
              <div className="wdsc-hero__stat">
                <span className="wdsc-hero__stat-val">200+</span>
                <span className="wdsc-hero__stat-label">Websites Built</span>
              </div>
              <div className="wdsc-hero__stat-divider" />
              <div className="wdsc-hero__stat">
                <span className="wdsc-hero__stat-val">1–3 Wks</span>
                <span className="wdsc-hero__stat-label">Quick Delivery</span>
              </div>
              <div className="wdsc-hero__stat-divider" />
              <div className="wdsc-hero__stat">
                <span className="wdsc-hero__stat-val">24/7</span>
                <span className="wdsc-hero__stat-label">Works for You</span>
              </div>
            </div>
          </div>

          <div className="wdsc-hero__right">
            <div className="wdsc-hero__image-wrapper">
              <img src={websiteHeroImg} alt="Website Design Services" className="wdsc-hero__image" loading="eager" decoding="async" fetchPriority="high" />
            </div>
            
            {/* Hero Feature Cards - Below Image */}
            <div className="wdsc-hero__cards-grid">
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconLayout /></div>
                <div className="wdsc-hero__card-content">
                  <h3 className="wdsc-hero__card-name">Custom Design</h3>
                  <p className="wdsc-hero__card-desc">No templates</p>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconCode /></div>
                <div className="wdsc-hero__card-content">
                  <h3 className="wdsc-hero__card-name">WordPress</h3>
                  <p className="wdsc-hero__card-desc">Easy to manage</p>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconZap /></div>
                <div className="wdsc-hero__card-content">
                  <h3 className="wdsc-hero__card-name">Fast Loading</h3>
                  <p className="wdsc-hero__card-desc">Optimised speed</p>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconMobile /></div>
                <div className="wdsc-hero__card-content">
                  <h3 className="wdsc-hero__card-name">Mobile-First</h3>
                  <p className="wdsc-hero__card-desc">All devices ready</p>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconSearch /></div>
                <div className="wdsc-hero__card-content">
                  <h3 className="wdsc-hero__card-name">SEO Ready</h3>
                  <p className="wdsc-hero__card-desc">Rank on Google</p>
                </div>
              </div>
              <div className="wdsc-hero__card wdsc-hero__card--highlight">
                <div className="wdsc-hero__card-icon wdsc-hero__card-icon--highlight"><IconUsers /></div>
                <div className="wdsc-hero__card-content">
                  <h3 className="wdsc-hero__card-name">Local Team</h3>
                  <p className="wdsc-hero__card-desc">Based in Chandigarh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIRST IMPRESSION ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Your website creates the first impression</span>
            <h2 className="wdsc-section__title">Make Every First Impression Count</h2>
          </div>
          <div className="wdsc-pain__grid">
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Make Every First Impression Count</div>
                <div className="wdsc-pain-card__desc">For most customers, your website is the very first thing they see of your business. Get the design right and trust builds almost instantly. Get it wrong, and you've lost them before they've even reached out.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Create a Seamless User Experience</div>
                <div className="wdsc-pain-card__desc">We build sites that feel natural to use — clear messaging, navigation that doesn't make people think twice. Every piece is there to help a visitor find what they came for and actually do something about it.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Focus on Growing Your Business</div>
                <div className="wdsc-pain-card__desc">Starting fresh or fixing up something old, we handle the whole process so you're not stuck managing it. You run the business; we'll worry about the website.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL COMPANY ── */}
     <section className="wdsc-section wdsc-section--gray">
  <div className="wdsc-section__inner wdsc-section__inner--narrow">
    <div className="wdsc-section__head">
      <span className="wdsc-eyebrow">Leading Web Design Company in Chandigarh</span>
      <h2 className="wdsc-section__title">Work with a Team That Understands Your Business</h2>
      <p className="wdsc-section__sub">Partnering with a local web design team means faster communication, better collaboration, and reliable support whenever you need it. At Social Theka, we combine local expertise with professional web solutions to help your business and this is what you get:</p>
    </div>
    <div className="wdsc-benefits-grid">
      <div className="wdsc-benefit-card">
        <div className="wdsc-benefit-card__icon"><IconCheck /></div>
        <div className="wdsc-benefit-card__content">
          <div className="wdsc-benefit-card__title">Responsive Support, Every Step of the Way</div>
          <div className="wdsc-benefit-card__desc">From consultation to post-launch, our team is always within reach, resolving issues efficiently.</div>
        </div>
      </div>
      <div className="wdsc-benefit-card">
        <div className="wdsc-benefit-card__icon"><IconCheck /></div>
        <div className="wdsc-benefit-card__content">
          <div className="wdsc-benefit-card__title">Transparent & Hassle-Free Communication</div>
          <div className="wdsc-benefit-card__desc">Regular updates and clear timelines mean you always know where your project stands.</div>
        </div>
      </div>
      <div className="wdsc-benefit-card">
        <div className="wdsc-benefit-card__icon"><IconCheck /></div>
        <div className="wdsc-benefit-card__content">
          <div className="wdsc-benefit-card__title">Local Market Expertise</div>
          <div className="wdsc-benefit-card__desc">Years of building for Chandigarh businesses means we know what actually clicks with local customers.</div>
        </div>
      </div>
      <div className="wdsc-benefit-card">
        <div className="wdsc-benefit-card__icon"><IconCheck /></div>
        <div className="wdsc-benefit-card__content">
          <div className="wdsc-benefit-card__title">A Partnership Beyond Launch</div>
          <div className="wdsc-benefit-card__desc">Launch day isn't really the end. We stay on for support and maintenance as your business keeps moving.</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ── WHY PARTNER ── */}
      <section className="wdsc-section wdsc-section--white" id="services">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Why partner with Social Theka?</span>
            <h2 className="wdsc-section__title">Your website should do more than just look good</h2>
            <p className="wdsc-section__sub">It should help make your brand stronger. It should get your audience excited about what you have to say. It should help you reach your business goals. At Social Theka we make websites that work well. We combine design with things that actually work so your website does what you want it to do.</p>
          </div>
          <div className="wdsc-why__grid">
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconLayout /></div>
              <h3 className="wdsc-why-card__title">User-Centric Design</h3>
              <p className="wdsc-why-card__desc">We make sure the pages are easy to look at and easy to use. This keeps people on your site and makes them want to do something.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconZap /></div>
              <h3 className="wdsc-why-card__title">High-Performance Websites</h3>
              <p className="wdsc-why-card__desc">We make sure every website loads fast and works on every device.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconMobile /></div>
              <h3 className="wdsc-why-card__title">Fully Responsive Across Devices</h3>
              <p className="wdsc-why-card__desc">Your website will look great and work great on computers, tablets and smartphones.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconSearch /></div>
              <h3 className="wdsc-why-card__title">SEO-Optimised Foundation</h3>
              <p className="wdsc-why-card__desc">We use code and make sure everything is structured properly. This helps you get found online.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconUsers /></div>
              <h3 className="wdsc-why-card__title">Ongoing Support & Partnership</h3>
              <p className="wdsc-why-card__desc">We will keep helping you even after your website is launched. We will stick with you as long as you keep growing. Social Theka will be there to help. Social Theka will keep supporting you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM WEBSITES ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Custom Development</span>
            <h2 className="wdsc-section__title">Custom Websites Built Around Your Business Goals</h2>
            <p className="wdsc-section__sub">Every business is unique and has its identity, goals and people it wants to reach. Your website should be the same. At Social Theka we make custom websites that fit your brand so every part of the design helps your business goals and gives users something.</p>
          </div>
          <div className="wdsc-why__grid">
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconShield /></div>
              <h3 className="wdsc-why-card__title">Build Credibility And Trust</h3>
              <p className="wdsc-why-card__desc">When your website looks modern and your branding is consistent it helps people trust you when they visit.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconUsers /></div>
              <h3 className="wdsc-why-card__title">Engage the Right Audience</h3>
              <p className="wdsc-why-card__desc">Thoughtful layouts and visuals keep visitors exploring longer.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconTarget /></div>
              <h3 className="wdsc-why-card__title">Convert Visitors into Customers</h3>
              <p className="wdsc-why-card__desc">Smart CTAs and easy journeys that make it simple to enquire, book, or buy.</p>
            </div>
             <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconTarget /></div>
              <h3 className="wdsc-why-card__title">Convert Visitors into Customers</h3>
              <p className="wdsc-why-card__desc">Smart CTAs and easy journeys that make it simple to enquire, book, or buy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Website Solutions for Every Business</span>
            <h2 className="wdsc-section__title">At Social Theka we provide web designing services in Chandigarh</h2>
            <p className="wdsc-section__sub">We make websites for people who are starting a website or for those who want to make their old website better or for those who need a special website. We create websites that look great work well and can grow with the business over time.</p>
          </div>
          <div className="wdsc-services__grid">
            <div className="wdsc-service-card">
              <div className="wdsc-service-card__icon"><IconLayout /></div>
              <h3 className="wdsc-service-card__name">Custom Website Design</h3>
              <p className="wdsc-service-card__desc">We build a website for your business from the very beginning. We do not use a template that we used for someone.</p>
            </div>
            <div className="wdsc-service-card">
              <div className="wdsc-service-card__icon"><IconMobile /></div>
              <h3 className="wdsc-service-card__name">Responsive Website Design</h3>
              <p className="wdsc-service-card__desc">Our websites work well on computers, tablets and phones. Social Theka makes sure that the website looks good and is easy to use no matter what device you are using.</p>
            </div>
            <div className="wdsc-service-card">
              <div className="wdsc-service-card__icon"><IconShop /></div>
              <h3 className="wdsc-service-card__name">WordPress Website Development</h3>
              <p className="wdsc-service-card__desc">Secure, easy to manage, no coding required on your end.</p>
            </div>
            <div className="wdsc-service-card">
              <div className="wdsc-service-card__icon"><IconShield /></div>
              <h3 className="wdsc-service-card__name">Custom PHP Web Development</h3>
              <p className="wdsc-service-card__desc">Booking systems, customer portals, dashboards — shaped around how your business actually runs.</p>
            </div>
            <div className="wdsc-service-card">
              <div className="wdsc-service-card__icon"><IconRefresh /></div>
              <h3 className="wdsc-service-card__name">Website Redesign & Optimisation</h3>
              <p className="wdsc-service-card__desc">Your website will have a look. It will be easier to use. It will work better. Your brand will still be recognisable. The things that make your brand special will stay the same.</p>
            </div>
            <div className="wdsc-service-card">
              <div className="wdsc-service-card__icon"><IconSearch /></div>
              <h3 className="wdsc-service-card__name">SEO-Ready Website Development</h3>
              <p className="wdsc-service-card__desc">Clean code and solid structure built for growth that lasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORDPRESS ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">SERVICES</span>
            <h2 className="wdsc-section__title">Website Designing with WordPress and custom PHP solutions</h2>
            <p className="wdsc-section__sub">A strong online presence starts with choosing the platform. WordPress is an option because it is flexible, easy to manage and grows with your business. At Social Theka we create performing WordPress websites that are simple to manage. We also add custom PHP features when your business needs functionality.</p>
          </div>
          <div className="wdsc-pain__grid--3">
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Easy to Manage</div>
                <div className="wdsc-pain-card__desc">Update text, images, pages, and blogs with no technical skills.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">SEO-Optimised Foundation</div>
                <div className="wdsc-pain-card__desc">Clean code and structured layouts improve visibility.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Faster Development & Launch</div>
                <div className="wdsc-pain-card__desc">Go live sooner without compromising quality.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Custom PHP Functionality</div>
                <div className="wdsc-pain-card__desc">Advanced features like booking systems and customer portals added as needed.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MERN STACK ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">MERN Stack</span>
            <h2 className="wdsc-section__title">Website design using MERN Stack</h2>
            <p className="wdsc-section__sub">The MERN Stack — MongoDB, Express.js, React, and Node.js — builds fast, scalable, dynamic applications using one language across front-end and back-end.</p>
          </div>
          <div className="wdsc-benefits-grid">
            <div className="wdsc-benefit-card">
              <div className="wdsc-benefit-card__icon"><IconCheck /></div>
              <div className="wdsc-benefit-card__content">
                <h3 className="wdsc-benefit-card__title">M — MongoDB</h3>
                <p className="wdsc-benefit-card__desc">Flexible NoSQL database storing data in JSON-like format, ideal for large data volumes.</p>
              </div>
            </div>
            <div className="wdsc-benefit-card">
              <div className="wdsc-benefit-card__icon"><IconCheck /></div>
              <div className="wdsc-benefit-card__content">
                <h3 className="wdsc-benefit-card__title">E — Express.js</h3>
                <p className="wdsc-benefit-card__desc">Lightweight back-end framework simplifying server-side development and APIs.</p>
              </div>
            </div>
            <div className="wdsc-benefit-card">
              <div className="wdsc-benefit-card__icon"><IconCheck /></div>
              <div className="wdsc-benefit-card__content">
                <h3 className="wdsc-benefit-card__title">R — React</h3>
                <p className="wdsc-benefit-card__desc">Component-based front-end library for fast, interactive interfaces.</p>
              </div>
            </div>
            <div className="wdsc-benefit-card">
              <div className="wdsc-benefit-card__icon"><IconCheck /></div>
              <div className="wdsc-benefit-card__content">
                <h3 className="wdsc-benefit-card__title">N — Node.js</h3>
                <p className="wdsc-benefit-card__desc">JavaScript runtime handling multiple requests simultaneously for scalable solutions.</p>
              </div>
            </div>
          </div>
          <div className="wdsc-why__grid" style={{marginTop: "2rem"}}>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconZap /></div>
              <h3 className="wdsc-why-card__title">Scalable & Future-Ready</h3>
              <p className="wdsc-why-card__desc">Whether you're a startup or an enterprise, MERN makes it easy to scale your website or web application as your business grows.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconCode /></div>
              <h3 className="wdsc-why-card__title">Faster Development</h3>
              <p className="wdsc-why-card__desc">Using JavaScript across both the front-end and back-end streamlines development, reducing project timelines and making future updates easier.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconShield /></div>
              <h3 className="wdsc-why-card__title">Secure & Reliable</h3>
              <p className="wdsc-why-card__desc">The MERN stack supports secure authentication, robust APIs, and reliable data management for business-critical applications.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconUsers /></div>
              <h3 className="wdsc-why-card__title">Dynamic User Experience</h3>
              <p className="wdsc-why-card__desc">React brings in interactive, real-time interfaces that genuinely feel responsive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOPIFY ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Shopify</span>
            <h2 className="wdsc-section__title">Shopify in Web Designing</h2>
            <p className="wdsc-section__sub">A good online store needs a platform that's fast, safe and easy to use. At Social Theka we make custom Shopify websites that look great are simple to manage and help your online store do well. We want your business to grow online with a Shopify website that's just right for you. At Social Theka we design Shopify websites that are easy to use and help your online business grow.</p>
          </div>
          <div className="wdsc-why__grid">
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconLayout /></div>
              <h3 className="wdsc-why-card__title">Easy Store Management</h3>
              <p className="wdsc-why-card__desc">Simple dashboard for products, inventory, and orders.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconTarget /></div>
              <h3 className="wdsc-why-card__title">Conversion-Focused Design</h3>
              <p className="wdsc-why-card__desc">Clear navigation and streamlined checkout to turn visitors into customers.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconShield /></div>
              <h3 className="wdsc-why-card__title">Secure & Scalable Platform</h3>
              <p className="wdsc-why-card__desc">Enterprise-grade security and performance that scales with you.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconSearch /></div>
              <h3 className="wdsc-why-card__title">SEO & Performance Optimised</h3>
              <p className="wdsc-why-card__desc">Responsive, fast-loading, SEO-friendly storefronts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT.JS ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Next.js</span>
            <h2 className="wdsc-section__title">Website Design Using Next.js</h2>
            <p className="wdsc-section__sub">Businesses today need websites that load quickly and work well for lots of people. At Social Theka we make websites that are really fast and good for users. We use Next.js to build these websites. This means Social Theka websites are fast, safe and easy for people to find on search engines. We want Social Theka websites to be good for a time so we build them to last.</p>
          </div>
          <div className="wdsc-why__grid">
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconZap /></div>
              <h3 className="wdsc-why-card__title">Lightning-Fast Performance</h3>
              <p className="wdsc-why-card__desc">Advanced rendering for seamless browsing.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconSearch /></div>
              <h3 className="wdsc-why-card__title">SEO-Optimised Architecture</h3>
              <p className="wdsc-why-card__desc">Server-side rendering boosts search visibility.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconCode /></div>
              <h3 className="wdsc-why-card__title">Scalable & Future-Ready</h3>
              <p className="wdsc-why-card__desc">Flexible architecture for business websites, apps, or enterprise platforms.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconShield /></div>
              <h3 className="wdsc-why-card__title">Secure & Custom Development</h3>
              <p className="wdsc-why-card__desc">Custom builds integrating APIs, CMS, and payment gateways securely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TYPESCRIPT ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">TypeScript</span>
            <h2 className="wdsc-section__title">Website Development Using TypeScript</h2>
            <p className="wdsc-section__sub">Building scalable web applications needs clean code. At Social Theka we use TypeScript to make websites and web applications. These are easy to manage, secure and grow over time.</p>
          </div>
          <div className="wdsc-why__grid">
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconShield /></div>
              <h3 className="wdsc-why-card__title">Reliable & Error-Free Development</h3>
              <p className="wdsc-why-card__desc">We catch coding mistakes early. This makes websites stable.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconCode /></div>
              <h3 className="wdsc-why-card__title">Scalable Code Architecture</h3>
              <p className="wdsc-why-card__desc">The code is easy to maintain and expand as you grow.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconZap /></div>
              <h3 className="wdsc-why-card__title">Enhanced Performance & Maintainability</h3>
              <p className="wdsc-why-card__desc">Cleaner code makes future updates simple.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconTarget /></div>
              <h3 className="wdsc-why-card__title">Enterprise-Ready Solutions</h3>
              <p className="wdsc-why-card__desc">Our solutions work well with React and Next.js. They are secure and ready for the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WIX ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Wix</span>
            <h2 className="wdsc-section__title">Using Wix for Web designing</h2>
            <p className="wdsc-section__sub">I think Wix is a way for businesses to get a professional website that is simple to manage and gets online fast. At Social Theka we make custom Wix websites that have a look work well on different devices and are easy for people to use. This helps your business get noticed on the internet. We design these custom Wix websites to help your business have a strong presence online with Wix.</p>
          </div>
          <div className="wdsc-why__grid">
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconLayout /></div>
              <h3 className="wdsc-why-card__title">Easy Website Management</h3>
              <p className="wdsc-why-card__desc">Drag-and-drop editing with no technical expertise needed.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconMobile /></div>
              <h3 className="wdsc-why-card__title">Professional & Responsive Design</h3>
              <p className="wdsc-why-card__desc">Mobile-friendly visuals that stay true to your brand.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconZap /></div>
              <h3 className="wdsc-why-card__title">Fast & Cost-Effective Development</h3>
              <p className="wdsc-why-card__desc">Go online quickly without sacrificing quality.</p>
            </div>
            <div className="wdsc-why-card">
              <div className="wdsc-why-card__icon"><IconTarget /></div>
              <h3 className="wdsc-why-card__title">Built for Growth</h3>
              <p className="wdsc-why-card__desc">Booking systems, e-commerce features, and SEO added as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Our Process</span>
            <h2 className="wdsc-section__title">Our Process for Website Designing</h2>
            <p className="wdsc-section__sub">We follow a clear, collaborative, and goal-focused process to ensure your website is designed with purpose and delivered with precision.</p>
          </div>
          <div className="wdsc-process__grid">
            <div className="wdsc-process-card">
              <div className="wdsc-process-card__step">01</div>
              <div>
                <div className="wdsc-process-card__title">Discovery & Consultation</div>
                <div className="wdsc-process-card__desc">We understand your business, goals, audience, and website requirements.</div>
              </div>
            </div>
            <div className="wdsc-process-card">
              <div className="wdsc-process-card__step">02</div>
              <div>
                <div className="wdsc-process-card__title">Strategy & Planning</div>
                <div className="wdsc-process-card__desc">We create a structured roadmap, layout, and user flow for your website.</div>
              </div>
            </div>
            <div className="wdsc-process-card">
              <div className="wdsc-process-card__step">03</div>
              <div>
                <div className="wdsc-process-card__title">Design & Development</div>
                <div className="wdsc-process-card__desc">Building a professional, responsive, user-friendly site.</div>
              </div>
            </div>
            <div className="wdsc-process-card">
              <div className="wdsc-process-card__step">04</div>
              <div>
                <div className="wdsc-process-card__title">Testing & Optimisation</div>
                <div className="wdsc-process-card__desc">Checking speed, mobile responsiveness, and functionality.</div>
              </div>
            </div>
            <div className="wdsc-process-card">
              <div className="wdsc-process-card__step">05</div>
              <div>
                <div className="wdsc-process-card__title">Launch & Support</div>
                <div className="wdsc-process-card__desc">Going live, with support there whenever you need it.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">SEO Optimisation</span>
            <h2 className="wdsc-section__title">SEO-Optimised Website Design</h2>
            <p className="wdsc-section__sub">An SEO-friendly website is really an investment — performance, usability, and technical optimisation all working together to bring in better traffic and more enquiries over time.</p>
          </div>
          <div className="wdsc-pain__grid">
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Clean & Optimised Code</div>
                <div className="wdsc-pain-card__desc">Better performance and easier crawlability.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">High-Speed Performance</div>
                <div className="wdsc-pain-card__desc">Fast loading that keeps bounce rates down.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Well-Structured Website Architecture</div>
                <div className="wdsc-pain-card__desc">Logical navigation for users and search engines.</div>
              </div>
            </div>
            <div className="wdsc-pain-card">
              <div className="wdsc-pain-card__icon"><IconCheck /></div>
              <div>
                <div className="wdsc-pain-card__title">Mobile-First Responsive Design</div>
                <div className="wdsc-pain-card__desc">Consistent experience across all screen sizes.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE RESPONSIVE ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-split__grid">
            <div className="wdsc-split__left">
              <span className="wdsc-eyebrow">Mobile Experience</span>
              <h2 className="wdsc-split__title">Mobile-Responsive Website Design</h2>
              <p className="wdsc-split__sub">Most people are browsing on their phones now, so responsive design isn't really optional anymore — it's just expected.</p>
            </div>
            <div className="wdsc-split__right">
              <div className="wdsc-split-card">
                <div className="wdsc-split-card__title">Optimised for Smartphones</div>
                <div className="wdsc-split-card__desc">Intuitive layouts with clear calls to action.</div>
              </div>
              <div className="wdsc-split-card">
                <div className="wdsc-split-card__title">Seamless Tablet Experience</div>
                <div className="wdsc-split-card__desc">A balanced layout with smooth functionality.</div>
              </div>
              <div className="wdsc-split-card">
                <div className="wdsc-split-card__title">Enhanced Desktop Performance</div>
                <div className="wdsc-split-card__desc">Clean, professional presentation on bigger screens.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REDESIGN ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-split__grid">
            <div className="wdsc-split__left">
              <span className="wdsc-eyebrow">Redesign Services</span>
              <h2 className="wdsc-split__title">Website Redesign Services</h2>
              <p className="wdsc-split__sub">An outdated, slow, or confusing website costs you in user experience and conversions. We give existing sites a strategic refresh — better design, better performance — without necessarily tearing everything down and starting over.</p>
            </div>
            <div className="wdsc-split__right">
              <div className="wdsc-split-card">
                <div className="wdsc-split-card__title">Modern & Professional Design</div>
                <div className="wdsc-split-card__desc">Refreshed layouts and stronger brand identity.</div>
              </div>
              <div className="wdsc-split-card">
                <div className="wdsc-split-card__title">Performance & Speed Optimisation</div>
                <div className="wdsc-split-card__desc">Reduced loading times, better responsiveness.</div>
              </div>
              <div className="wdsc-split-card">
                <div className="wdsc-split-card__title">Enhanced User Experience</div>
                <div className="wdsc-split-card__desc">Improved navigation and content organisation.</div>
              </div>
              <div className="wdsc-split-card">
                <div className="wdsc-split-card__title">Responsive Across All Devices</div>
                <div className="wdsc-split-card__desc">Flawless performance on every screen.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Industries We Serve</span>
            <h2 className="wdsc-section__title">At Social Theka, we design and develop websites for businesses across a wide range of industries</h2>
            <p className="wdsc-section__sub">Every solution is tailored to your unique goals, helping you establish a strong online presence.  Build a website that really sets your business apart. We do everything to make this happen from coming up with a strategy and designing it to actually building the website and helping you with any problems that come up later on. Our goal is to create a website that helps your business stand</p>
          </div>
          <div className="wdsc-industries__grid">
            <div className="wdsc-industry-card">
              <IconTarget />
              Local Businesses
            </div>
            <div className="wdsc-industry-card">
              <IconTarget />
              Startups
            </div>
            <div className="wdsc-industry-card">
              <IconTarget />
              E-commerce Brands
            </div>
            <div className="wdsc-industry-card">
              <IconTarget />
              Service-Based Businesses
            </div>
            <div className="wdsc-industry-card">
              <IconTarget />
              Agencies
            </div>
          </div>
          {/* <p className="wdsc-section__sub" style={{marginTop: "2rem", textAlign: "center"}}>
            Build a website that really sets your business apart. We do everything to make this happen from coming up with a strategy and designing it to actually building the website and helping you with any problems that come up later on. Our goal is to create a website that helps your business stand out and do well.
          </p> */}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Common Inquiries</span>
            <h2 className="wdsc-section__title">Frequently Asked Questions</h2>
          </div>
          <div className="wdsc-faq__list">
            <div className={`wdsc-faq__item ${openFaq === 0 ? "wdsc-faq__item--open" : ""}`}>
              <button className="wdsc-faq__q" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
                <span>1. How long does it take website designing?</span>
                <span className="wdsc-faq__icon">{openFaq === 0 ? "−" : "+"}</span>
              </button>
              {openFaq === 0 && <div className="wdsc-faq__a">A standard business website takes around 2–6 weeks whereas larger or custom websites may need more time.</div>}
            </div>
            <div className={`wdsc-faq__item ${openFaq === 1 ? "wdsc-faq__item--open" : ""}`}>
              <button className="wdsc-faq__q" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                <span>2. Can I use my website on my mobile?</span>
                <span className="wdsc-faq__icon">{openFaq === 1 ? "−" : "+"}</span>
              </button>
              {openFaq === 1 && <div className="wdsc-faq__a">Yes, every website is fully responsive on mobile phones and other devices.</div>}
            </div>
            <div className={`wdsc-faq__item ${openFaq === 2 ? "wdsc-faq__item--open" : ""}`}>
              <button className="wdsc-faq__q" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                <span>3. Can I update my website after launching it?</span>
                <span className="wdsc-faq__icon">{openFaq === 2 ? "−" : "+"}</span>
              </button>
              {openFaq === 2 && <div className="wdsc-faq__a">Yes, especially on WordPress, with ongoing support available if needed.</div>}
            </div>
            <div className={`wdsc-faq__item ${openFaq === 3 ? "wdsc-faq__item--open" : ""}`}>
              <button className="wdsc-faq__q" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                <span>4. Is my website built with SEO in mind?</span>
                <span className="wdsc-faq__icon">{openFaq === 3 ? "−" : "+"}</span>
              </button>
              {openFaq === 3 && <div className="wdsc-faq__a">Yes, following SEO best practices including clean code and structured layouts.</div>}
            </div>
            <div className={`wdsc-faq__item ${openFaq === 4 ? "wdsc-faq__item--open" : ""}`}>
              <button className="wdsc-faq__q" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                <span>5. Do you redesign existing websites?</span>
                <span className="wdsc-faq__icon">{openFaq === 4 ? "−" : "+"}</span>
              </button>
              {openFaq === 4 && <div className="wdsc-faq__a">Yes, we offer redesign services to improve design, speed, and performance.</div>}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="wdsc-cta-banner">
        <div className="wdsc-cta-banner__inner">
          <div className="wdsc-cta-banner__content">
            <h2 className="wdsc-cta-banner__title">
              Ready to Build Something Great?
            </h2>
            <p className="wdsc-cta-banner__sub">
              Partner with Chandigarh's trusted web design team. Quality, speed, and support — all in one place.
            </p>
          </div>
          <Link to="/contact" className="wdsc-btn-primary wdsc-btn-primary--lg">
            Start Your Project <IconArrow />
          </Link>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}

