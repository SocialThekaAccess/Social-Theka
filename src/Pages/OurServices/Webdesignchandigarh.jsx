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