import { useState } from "react";
import "./Webdesignchandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";

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

const SERVICES = [
  { icon: <IconLayout />,  name: "Custom Website Design",          desc: "We design every website from scratch keeping your business goals and target audience in mind. No copy-paste templates — just a design that is entirely yours." },
  { icon: <IconMobile />,  name: "Mobile-Friendly Website Design", desc: "Most users in Chandigarh browse on their phones. Every website we design looks perfect and works smoothly on all devices — mobile, tablet, and desktop." },
  { icon: <IconShop />,    name: "WordPress Website Design",       desc: "We build fully functional WordPress sites that are easy for you to manage yourself — update text, images, and pages without needing any technical knowledge." },
  { icon: <IconShield />,  name: "PHP Website Design",             desc: "For businesses that need advanced features — booking systems, custom dashboards, or special functions — we build everything from scratch, exactly as you need it." },
  { icon: <IconRefresh />, name: "Website Redesign Services",      desc: "If your website looks outdated, loads slowly, or confuses visitors, we redesign it with fresh visuals, better speed, and improved user experience." },
  { icon: <IconSearch />,  name: "SEO-Friendly Website Design",    desc: "We build every website with a clean structure and proper setup so Google can understand it easily — helping your business rank better in search results." },
];

const CUSTOM_BENEFITS = [
  { icon: <IconShield />,  title: "Build Trust",                     desc: "We build websites that will not only look great but they also instill confidence when visitors land on your site and interact with you or buy anything from you." },
  { icon: <IconUsers />,   title: "Attract Visitors",                desc: "With a great design and proper structure your website becomes more engaging and easy to navigate. We make sure your content is easy to read so that visitors stay longer." },
  { icon: <IconTarget />,  title: "Convert Visitors into Customers", desc: "Our system provides a clear and consistent route for users as they go from being potential customers to taking action — calling you, filling in a form, and more." },
];

const WHY_US = [
  { icon: <IconLayout />, title: "Simple and Clean Design",  desc: "We keep everything easy to understand. Your visitors don't have to think too much — they quickly know what your business offers." },
  { icon: <IconZap />,    title: "Fast Website Speed",       desc: "No one likes slow websites. We make sure your site loads fast so visitors stay and explore more." },
  { icon: <IconMobile />, title: "Mobile-Friendly Layout",   desc: "Most users come from mobile. Your website will work smoothly on every screen — phone, tablet, or laptop." },
  { icon: <IconSearch />, title: "SEO-Ready Structure",      desc: "We make your website in a way that helps you rank better on Google. More people can find your business online when they search." },
  { icon: <IconUsers />,  title: "Friendly Support",         desc: "We stay connected with you even after the website is live. If you need help, we are always a message away." },
];

const WORDPRESS_FEATURES = [
  ["Easy to Manage",  "Update text, images, and pages yourself — no technical knowledge needed. You stay in control of your own website."],
  ["SEO-Friendly",    "We build with a proper structure that Google understands, helping your website rank better in search results."],
  ["Quick to Launch", "WordPress allows faster development, so your website can go live in less time. Start your online presence without long waits."],
];

const PHP_BENEFITS = [
  ["Custom Features",    "Any feature your business needs can be built — booking systems, dashboards, or custom functions — all tailored to your requirements."],
  ["High Performance",   "PHP websites handle heavy workloads smoothly. They perform well even as your website grows and gets more traffic."],
  ["Flexible Design",    "No fixed layout or structure. We design everything to match your brand and goals, exactly the way you want."],
  ["Scalable Solutions", "As your business grows, your website can grow too. New features and updates can be added anytime without starting from scratch."],
];

const PROCESS = [
  { step: "01", title: "Understand Your Business", desc: "We learn about your goals and needs." },
  { step: "02", title: "Plan the Design",           desc: "We create a simple structure and layout." },
  { step: "03", title: "Design & Development",      desc: "We build your website with care." },
  { step: "04", title: "Testing",                   desc: "We check speed, mobile view, and performance." },
  { step: "05", title: "Launch",                    desc: "Your website goes live." },
];

const SEO_FEATURES = [
  ["Clean Code",          "We keep the coding simple and well-organized. This helps search engines understand your website easily and improves overall performance."],
  ["Fast Loading Speed",  "A slow website pushes visitors away. We optimize everything so your site loads quickly and keeps users engaged."],
  ["Proper Structure",    "We arrange content in a clear and logical way. This makes it easier for both users and search engines to navigate your site."],
  ["Mobile Optimization", "Most users visit on their phones. We make sure your website works smoothly on all screen sizes without any issues."],
];

const MOBILE_FEATURES = [
  ["Mobile Phones", "Your website will fit perfectly on small screens, making it easy for users to scroll, read, and take action."],
  ["Tablets",       "We make sure your website looks balanced and clear on medium-sized screens without any layout issues."],
  ["Laptops",       "Your website will appear polished and organized, and easy to navigate on larger devices."],
];

const REDESIGN_BENEFITS = [
  ["Improve Design",           "We give your website a fresh and modern look. Clean layouts and better visuals help create a strong first impression."],
  ["Increase Speed",           "Slow websites lose visitors quickly. We optimize your site so it loads faster and keeps users engaged."],
  ["Make it User-Friendly",    "We simplify the structure so visitors can easily find what they need. Clear navigation helps users move around without confusion."],
  ["Better Mobile Experience", "We make sure your website works smoothly on mobile devices — reaching more users and keeping them on your site longer."],
];

const INDUSTRIES = ["Local businesses", "Startups", "E-commerce stores", "Service providers", "Agencies"];

const FAQS = [
  { q: "How much time does it take to build a website?", a: "It depends on your needs. Most websites take 1–3 weeks." },
  { q: "Will my website be mobile-friendly?",            a: "Yes, every website we create works on all devices." },
  { q: "Can I update my website later?",                 a: "Yes, especially with WordPress websites, you can easily make changes." },
  { q: "Do you provide support after launch?",           a: "Yes, Social Theka provides ongoing support." },
];

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
              Website Designing Company<br/>
              <span className="wdsc-hero__title-accent">in Chandigarh</span>
            </h1>
            <p className="wdsc-hero__sub">
              Your site could be someone's first impression of your business. Will they stay? Or will they go? Social Theka, a trusted Website Designing Company in Chandigarh, builds websites that keep visitors engaged and work for your business.
            </p>
            <div className="wdsc-hero__ctas">
              <a href="#contact" className="wdsc-btn-primary">Start Your Project <IconArrow /></a>
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
            <div className="wdsc-hero__card">
              <div className="wdsc-hero__card-icon"><IconLayout /></div>
              <div className="wdsc-hero__card-content">
                <div className="wdsc-hero__card-name">Custom Design</div>
                <div className="wdsc-hero__card-desc">No templates</div>
              </div>
            </div>
            <div className="wdsc-hero__card">
              <div className="wdsc-hero__card-icon"><IconMobile /></div>
              <div className="wdsc-hero__card-content">
                <div className="wdsc-hero__card-name">Mobile-First</div>
                <div className="wdsc-hero__card-desc">All devices ready</div>
              </div>
            </div>
            <div className="wdsc-hero__card">
              <div className="wdsc-hero__card-icon"><IconShop /></div>
              <div className="wdsc-hero__card-content">
                <div className="wdsc-hero__card-name">WordPress</div>
                <div className="wdsc-hero__card-desc">Easy to manage</div>
              </div>
            </div>
            <div className="wdsc-hero__card">
              <div className="wdsc-hero__card-icon"><IconSearch /></div>
              <div className="wdsc-hero__card-content">
                <div className="wdsc-hero__card-name">SEO Ready</div>
                <div className="wdsc-hero__card-desc">Rank on Google</div>
              </div>
            </div>
            <div className="wdsc-hero__card">
              <div className="wdsc-hero__card-icon"><IconZap /></div>
              <div className="wdsc-hero__card-content">
                <div className="wdsc-hero__card-name">Fast Loading</div>
                <div className="wdsc-hero__card-desc">Optimised speed</div>
              </div>
            </div>
            <div className="wdsc-hero__card wdsc-hero__card--highlight">
              <div className="wdsc-hero__card-icon"><IconUsers /></div>
              <div className="wdsc-hero__card-content">
                <div className="wdsc-hero__card-name">Local Team</div>
                <div className="wdsc-hero__card-desc">Based in Chandigarh</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WEBSITE MATTERS ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Why It Matters</span>
            <h2 className="wdsc-section__title">Your Website is Your First Impression</h2>
          </div>
          <div className="wdsc-pain__grid">
            {[
              ["First Impression Counts", "Your web design makes people want to stay on your website or look elsewhere. If they lose faith in your business, you lose that customer before they ever contact you."],
              ["We Clear the Confusion", "Social Theka makes your website feel seamless. Your clients can find what they need, contact you easily, and stay engaged longer — that's our commitment."],
              ["Focus on Your Business", "We handle everything — starting or improving your site. No more worrying about technical aspects. Focus on your business, we'll design and develop the rest."],
            ].map(([title, desc], i) => (
              <div key={i} className="wdsc-pain-card">
                <div className="wdsc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdsc-pain-card__title">{title}</div>
                  <div className="wdsc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL COMPANY ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Local Advantage</span>
            <h2 className="wdsc-section__title">Local Web Design Company in Chandigarh</h2>
            <p className="wdsc-section__sub">Working with a local team makes things easier. No waiting, no complicated back-and-forths. Social Theka is quick to reach and always ready to help.</p>
            <h3 className="wdsc-section__subtitle">With Social Theka, you get:</h3>
          </div>
          <div className="wdsc-pain__grid">
            {[
              ["Quick Support When You Need It",              "We are just around the corner. A quick message and we are on it — no long waits, no delays."],
              ["Easy and Clear Communication",                "You always know where your project stands. No confusion, no surprises — straight updates throughout."],
              ["Better Understanding of Your Local Market",   "We understand how businesses in Chandigarh work and what local customers expect. This helps us create websites that connect better with your audience."],
              ["Building a Long-Term Relationship",           "For us, it's not just about building a website — it's about building a long-term partnership. We're always available to help, even after your site is live."],
            ].map(([title, desc], i) => (
              <div key={i} className="wdsc-pain-card">
                <div className="wdsc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdsc-pain-card__title">{title}</div>
                  <div className="wdsc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="wdsc-section wdsc-section--white" id="services">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">The Social Theka Advantage</span>
            <h2 className="wdsc-section__title">Why Choose Social Theka for Web Designing?</h2>
            <p className="wdsc-section__sub">Many web designing agencies exist in Chandigarh, but Social Theka prioritizes what really matters — building simple, fast, and results-oriented websites.</p>
          </div>
          <div className="wdsc-why__grid">
            {WHY_US.map((item, i) => (
              <div key={i} className="wdsc-why-card">
                <div className="wdsc-why-card__icon">{item.icon}</div>
                <h3 className="wdsc-why-card__title">{item.title}</h3>
                <p className="wdsc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM WEBSITES ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Custom Development</span>
            <h2 className="wdsc-section__title">Transforming Businesses through Custom Websites</h2>
            <p className="wdsc-section__sub">Each business is unique. So why should two websites look the same? At Social Theka, we consider your company, your audience, and your goals before any design begins.</p>
            <p className="wdsc-section__sub">Social Theka creates custom websites that:</p>
          </div>
          <div className="wdsc-why__grid">
            {CUSTOM_BENEFITS.map((item, i) => (
              <div key={i} className="wdsc-why-card">
                <div className="wdsc-why-card__icon">{item.icon}</div>
                <h3 className="wdsc-why-card__title">{item.title}</h3>
                <p className="wdsc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Comprehensive Services</span>
            <h2 className="wdsc-section__title">Full-Spectrum Web Design Solutions</h2>
          </div>
          <div className="wdsc-services__grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="wdsc-service-card">
                <div className="wdsc-service-card__icon">{s.icon}</div>
                <h3 className="wdsc-service-card__name">{s.name}</h3>
                <p className="wdsc-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORDPRESS ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">WordPress</span>
            <h2 className="wdsc-section__title">Website Designing using WordPress</h2>
            <p className="wdsc-section__sub">All businesses want a strong online presence, but they also want simple and smart solutions. WordPress gives you that power — and Social Theka makes sure you can use it without any technical knowledge.</p>
            <p className="wdsc-section__sub">At Social Theka, we create WordPress websites that are:</p>
          </div>
          <div className="wdsc-pain__grid--3">
            {WORDPRESS_FEATURES.map(([title, desc], i) => (
              <div key={i} className="wdsc-pain-card">
                <div className="wdsc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdsc-pain-card__title">{title}</div>
                  <div className="wdsc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHP ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">PHP Development</span>
            <h2 className="wdsc-section__title">Website Designing using PHP</h2>
            <p className="wdsc-section__sub">Need something more advanced? If your business needs special features or custom functions, PHP is the right choice. At Social Theka, we build everything from scratch — no templates, full control.</p>
            <p className="wdsc-section__sub--bold">Benefits of PHP websites:</p>
            <p className="wdsc-section__sub">PHP is the right choice for businesses that need something more powerful and fully customized. With Social Theka, you get a website built for long-term use — strong, flexible, and ready to grow with your business.</p>
          </div>
          <div className="wdsc-benefits-grid">
            {PHP_BENEFITS.map(([title, desc], i) => (
              <div key={i} className="wdsc-benefit-card">
                <div className="wdsc-benefit-card__icon"><IconCheck /></div>
                <div className="wdsc-benefit-card__content">
                  <h3 className="wdsc-benefit-card__title">{title}</h3>
                  <p className="wdsc-benefit-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Strategic Methodology</span>
            <h2 className="wdsc-section__title">Our Website Design Process</h2>
            <p className="wdsc-section__sub">We follow a simple step-by-step process — clear, collaborative, and built around your goals.</p>
          </div>
          <div className="wdsc-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="wdsc-process-card">
                <div className="wdsc-process-card__step">{p.step}</div>
                <div>
                  <div className="wdsc-process-card__title">{p.title}</div>
                  <div className="wdsc-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Search Visibility</span>
            <h2 className="wdsc-section__title">SEO-Friendly Website Design</h2>
            <p className="wdsc-section__sub">A website should not only look good — it should also rank on Google. If people can't find your website, it won't bring you business. At Social Theka, we optimize for both user experience and search engines.</p>
            <p className="wdsc-section__sub">Social Theka builds SEO-friendly websites with:</p>
          </div>
          <div className="wdsc-pain__grid">
            {SEO_FEATURES.map(([title, desc], i) => (
              <div key={i} className="wdsc-pain-card">
                <div className="wdsc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdsc-pain-card__title">{title}</div>
                  <div className="wdsc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="wdsc-section__sub" style={{marginTop: "1.5rem"}}>With the right SEO setup, your website gets a better chance to rank higher and reach more people online. At Social Theka, we build websites that help your business grow by bringing in real traffic.</p>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-split__grid">
            <div className="wdsc-split__left">
              <span className="wdsc-eyebrow">Mobile Experience</span>
              <h2 className="wdsc-split__title">Mobile-Friendly Website Design</h2>
              <p className="wdsc-split__sub">The trend for browsing is moving firmly to mobile. If your website isn't mobile-friendly, people will leave before they even start using it.</p>
              <p className="wdsc-split__sub">Social Theka makes sure sites look neat regardless of screen size. Browsing should be straightforward and uncomplicated — on every device.</p>
            </div>
            <div className="wdsc-split__right">
              {MOBILE_FEATURES.map(([title, desc], i) => (
                <div key={i} className="wdsc-split-card">
                  <div className="wdsc-split-card__title">{title}</div>
                  <div className="wdsc-split-card__desc">{desc}</div>
                </div>
              ))}
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
              <p className="wdsc-split__sub">If your website is outdated, slow, or confusing — people will just leave without doing anything. Often, smart changes bring more value than starting from zero.</p>
              <p className="wdsc-split__sub">We carefully examine your existing website, identify issues, update its speed and aesthetics, and improve the overall experience. Even small updates can bring better results.</p>
            </div>
            <div className="wdsc-split__right">
              {REDESIGN_BENEFITS.map(([title, desc], i) => (
                <div key={i} className="wdsc-split-card">
                  <div className="wdsc-split-card__title">{title}</div>
                  <div className="wdsc-split-card__desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ARTICLE (premium editorial layout, verbatim content) ── */}
      <section className="wdsc-article">
        <div className="wdsc-article__inner">

          <div className="wdsc-article__intro">
            <span className="wdsc-eyebrow">Guide</span>
            <h2 className="wdsc-article__title">Why the Tech Stack Behind Your Website Actually Matters</h2>
            <p className="wdsc-article__lead">
              <span className="wdsc-article__dropcap">M</span>ost business owners in Chandigarh treat the choice of web technology like it's something to leave entirely to the developer — a back-end detail, nothing to lose sleep over. But it's worth pushing back on that a little. The stack you build on shapes your hosting bills, how painful (or painless) it is to add a new feature six months from now, where you land on Google search results, what kind of developer you'll need to hire down the line, and whether your site buckles or holds up when traffic suddenly spikes. Picking the right partner among Chandigarh's web development services matters precisely because this decision compounds over time.
            </p>
            <p className="wdsc-article__p">
              Think about it like this: a clinic that just wants people to book appointments and a fashion label that wants to sell sarees are both using a website but they need very different things. A clinic and a fashion label are both running a website. Their needs are not similar. Instead of comparing these technologies it is better to look at what each website is really made for. A clinic that is running a website and a fashion label that is running a website have goals.
            </p>
          </div>

          <div className="wdsc-article__body">

            <aside className="wdsc-article__nav">
              <span className="wdsc-article__nav-label">On this page</span>
              <a href="#mern" className="wdsc-article__nav-link">Breaking Down MERN</a>
              <a href="#nextjs" className="wdsc-article__nav-link">Where Next.js Comes In</a>
              <a href="#typescript" className="wdsc-article__nav-link">TypeScript Isn't a Framework</a>
              <a href="#wordpress" className="wdsc-article__nav-link">WordPress for Content</a>
              <a href="#wix" className="wdsc-article__nav-link">Wix for Going Live Fast</a>
              <a href="#shopify" className="wdsc-article__nav-link">Shopify, Built to Sell</a>
              <a href="#fits" className="wdsc-article__nav-link">Which One Actually Fits?</a>
            </aside>

            <div className="wdsc-article__content">

              <div className="wdsc-article__section" id="mern">
                <span className="wdsc-article__num">01</span>
                <h3 className="wdsc-article__heading">Breaking Down MERN</h3>
                <p className="wdsc-article__p">
                  MERN gets thrown around as if it's one thing, but it's really four separate tools — MongoDB, Express, React, and Node.js — that happen to fit together nicely because every piece of them is written in JavaScript. That shared language is actually the whole reason MERN took off. Before stacks like this existed, a developer needed one language to build what users saw in their browser and an entirely different one — PHP, Java, Ruby, whatever — to run the server behind the scenes. MERN does away with that split. One language, front to back, which in practice means a smaller team (sometimes even a single developer) can realistically own the whole product.
                </p>
                <p className="wdsc-article__p">
                  Start with MongoDB, which handles storage. A conventional database like MySQL forces every record into the same rigid structure — rows and columns, like a spreadsheet, where every "customer" entry needs the exact same fields whether they're relevant or not. MongoDB throws that rigidity out. Each record is stored as a flexible document, closer to JSON, so one product entry can carry five attributes and another can carry fifteen without anything breaking. That flexibility isn't just academic — picture an online catalogue where a saree needs fields for fabric and weave, but a laptop needs RAM and processor specs instead. MongoDB handles that mismatch without forcing you to redesign your database every time the product line changes.
                </p>
                <p className="wdsc-article__p">
                  Express runs on top of Node and takes care of what happens on the server — a request comes in ("pull up this customer's past orders"), Express routes it, fetches what's needed, and sends a response back. People call it "lightweight" because it really doesn't do much on its own; it hands developers a basic toolkit and lets them build the rest themselves. That's great for moving fast, but it also means the quality of what gets built depends entirely on the skill of whoever's writing it — there's no scaffolding forcing good habits.
                </p>
                <p className="wdsc-article__p">
                  React, Meta's contribution to all this, lives entirely in the browser. Its big idea is breaking a page down into small, independent components — a search bar here, a product card there, a checkout button somewhere else — each one able to update on its own without dragging the whole page down with it. That's why a cart counter can tick up the second you add an item, with nothing else on the page so much as flickering. It's the same logic running underneath things like your Gmail inbox or an Instagram feed, where the page never seems to "reload" no matter how much changes on screen.
                </p>
                <p className="wdsc-article__p">
                  And then there's Node.js, which is really what makes all of this possible — letting JavaScript, a language originally built only for browsers, run on a server instead. Its standout trait is being non-blocking: rather than handling one request, finishing it completely, then moving to the next, Node juggles thousands of requests at once, parking the slow ones (like a database lookup) while it keeps working through everything else. For a Chandigarh business bracing for an unpredictable rush — a festival sale, a post that suddenly goes viral — that's not a minor technical perk, it's the difference between a site that stays up and one that doesn't.
                </p>
                <p className="wdsc-article__p">
                  Put it all together and MERN earns its keep on things like custom dashboards, marketplaces with multiple vendors, or booking systems juggling real-time availability — anywhere the underlying logic is genuinely complicated and likely to keep evolving. It's the wrong tool, though, for a five-page brochure site for a local clinic. You'd be paying for firepower you'll never actually use.
                </p>
              </div>

              <div className="wdsc-article__divider" />

              <div className="wdsc-article__section" id="nextjs">
                <span className="wdsc-article__num">02</span>
                <h3 className="wdsc-article__heading">Where Next.js Comes In</h3>
                <p className="wdsc-article__p">
                  React has one real weak spot: because it builds everything dynamically inside the browser, search engines (and sometimes real visitors) can momentarily hit a blank page while the JavaScript loads — not great for SEO, not great for first impressions either. Next.js was built on top of React specifically to fix this. It renders pages on the server first, or generates the HTML ahead of time, so a fully formed page reaches the browser immediately, with React stepping in afterward to handle interactivity. That's the reason so many agencies reach for Next.js when building blogs, marketing sites, or storefronts — you keep React's responsiveness without losing the search visibility that plain React tends to struggle with. For any Chandigarh business depending on someone typing "best dentist Sector 22" into Google, that SEO edge isn't a footnote — it's directly tied to whether people find you at all.
                </p>
              </div>

              <div className="wdsc-article__divider" />

              <div className="wdsc-article__section" id="typescript">
                <span className="wdsc-article__num">03</span>
                <h3 className="wdsc-article__heading">TypeScript Isn't a Framework, It's Insurance</h3>
                <p className="wdsc-article__p">
                  TypeScript deserves its own bucket because it isn't really competing with React or Node — it's a layer you add on top of plain JavaScript. The problem with regular JavaScript is that it won't check whether you're passing the right kind of data — a number where a number's expected, text where text's expected — until the code actually runs. So a sloppy mistake, like accidentally sending a customer's name into a field meant for a price, might sit there undetected until a real user stumbles onto it in production. TypeScript catches that kind of error the moment the code is written, long before it ever reaches a live site. For a tiny one-person project, this extra layer can feel like unnecessary ceremony. But for anything meant to last, grow, or change hands between developers over the years, it quietly prevents a huge number of bugs that would otherwise show up as broken features for your customers.
                </p>
              </div>

              <div className="wdsc-article__divider" />

              <div className="wdsc-article__section" id="wordpress">
                <span className="wdsc-article__num">04</span>
                <h3 className="wdsc-article__heading">WordPress Still Wins for Content-Heavy Sites</h3>
                <p className="wdsc-article__p">
                  WordPress operates on a completely different logic from everything above — it's a content management system first and foremost, meaning the whole point is letting someone with zero coding ability log in and update text, swap photos, or publish a blog post. Its dominance online comes down to its plugin ecosystem: need a booking form, an SEO toolkit, multilingual support? There's almost certainly a plugin already built for it, no custom development required. That's exactly why it suits a clinic, a school, a restaurant, or a consultancy in Chandigarh so well — these businesses need to tweak hours, update menus, or refresh staff bios constantly, and WordPress lets office staff handle that directly instead of phoning a developer every time something minor changes. The catch is that piling on plugins can slow a site down and creates ongoing security upkeep, so it's a poor fit once you need genuinely custom, interactive functionality.
                </p>
              </div>

              <div className="wdsc-article__divider" />

              <div className="wdsc-article__section" id="wix">
                <span className="wdsc-article__num">05</span>
                <h3 className="wdsc-article__heading">Wix for Getting Something Live Fast</h3>
                <p className="wdsc-article__p">
                  Wix takes coding out of the picture entirely with its drag-and-drop builder, which makes it the quickest route from nothing to a working website for someone with no technical team behind them at all — a freelance photographer, a single boutique owner, a consultant who just needs a page to point people toward. Its limitation isn't about polish, it's structural: everything lives inside Wix's own closed system, so there's a hard ceiling on customization and scale, and walking away from Wix later if you outgrow it is far messier than migrating off a custom-built site would be. It's the right call when the goal is "get something online this week," not "build something we'll still be running in five years."
                </p>
              </div>

              <div className="wdsc-article__divider" />

              <div className="wdsc-article__section" id="shopify">
                <span className="wdsc-article__num">06</span>
                <h3 className="wdsc-article__heading">Shopify, Built Purely to Sell</h3>
                <p className="wdsc-article__p">
                  Shopify earns its own category because, unlike the broader tools above, it was designed from day one to do exactly one job: run an online store. That focus shows up in the details a general-purpose builder usually fumbles — secure payment handling, inventory that updates automatically as stock sells out, shipping calculations, abandoned-cart emails, and a checkout experience customers already trust because they've used it on countless other stores already. For retailers, handicraft sellers, and fashion brands in Chandigarh moving online, that means the riskiest part of e-commerce — handling payment data, taxes, fraud — is already solved and maintained by Shopify, rather than something a local team has to build and secure from scratch.
                </p>
              </div>

              <div className="wdsc-article__divider" />

              <div className="wdsc-article__section wdsc-article__section--highlight" id="fits">
                <span className="wdsc-article__num">07</span>
                <h3 className="wdsc-article__heading">So, Which One Actually Fits?</h3>
                <p className="wdsc-article__p">
                  It comes down to three honest questions: what does the site actually need to do — display info, manage content regularly, process payments, or run something genuinely custom? Who's going to maintain it day to day — non-technical staff, or a developer? And realistically, how much will the business grow over the next couple of years?
                </p>
                <p className="wdsc-article__p">
                  A small boutique selling a couple dozen products doesn't need custom engineering — Shopify or Wix handles the heavy lifting just fine. A clinic or school updating content weekly but never processing payments is well served by WordPress. A startup building something closer to an app than a website — logins, dashboards, live data — needs the flexibility that MERN or Next.js offers, ideally written in TypeScript if the team plans to be maintaining this thing for years.
                </p>
                <p className="wdsc-article__p">
                  Whether what you need is a straightforward business site or something far more custom, working with best web development services in Chandigarh that actually understand these tradeoffs means the technology gets chosen around where your business is headed, not just what's convenient right now. Getting that match right early on is what saves you from the much costlier scenario — rebuilding the whole thing eighteen months in because the platform you started with simply couldn't keep up.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <span className="wdsc-eyebrow">Who We Serve</span>
            <h2 className="wdsc-section__title">Industries We Serve</h2>
            <p className="wdsc-section__sub">We build websites for all kinds of businesses. No matter your industry, we can help.</p>
          </div>
          <div className="wdsc-industries__grid">
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className="wdsc-industry-card">
                <IconTarget />
                {industry}
              </div>
            ))}
          </div>
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
            {FAQS.map((faq, i) => (
              <div key={i} className={`wdsc-faq__item ${openFaq === i ? "wdsc-faq__item--open" : ""}`}>
                <button className="wdsc-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="wdsc-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="wdsc-faq__a">{faq.a}</div>}
              </div>
            ))}
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
          <a href="#contact" className="wdsc-btn-primary wdsc-btn-primary--lg">
            Start Your Project <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}