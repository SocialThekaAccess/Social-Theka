import { useState } from "react";
import "./WebDesignChandigarh.css";
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
  { icon: <IconShield />,  title: "Build Trust",                     desc: "We build websites that will not only look great but they also instill confidence when visitors land on your site and interact with you or buy anything from you. You can produce a good first impression of your company by providing an attractive website, explaining who you are/what you do, and organising all the information on your website correctly." },
  { icon: <IconUsers />,   title: "Attract Visitors",                desc: "With a design and proper structure your website becomes more engaging and easy to navigate. We make sure your content is easy to read so that visitors stay on your site longer and explore pages." },
  { icon: <IconTarget />,  title: "Convert Visitors into Customers", desc: "Our system provides a clear and consistent route for users as they go from being potential customers to being an actual customer, with this happening by taking action (for example: calling you, filling in a form, etc.) via very simple buttons, clear message/content and good positioning on the page." },
];

const WHY_US = [
  { icon: <IconLayout />, title: "Simple and Clean Design",  desc: "We keep everything easy to understand. Your visitors don't have to think too much-they quickly know what your business offers." },
  { icon: <IconZap />,    title: "Fast Website Speed",       desc: "No one likes slow websites. We make sure your site loads fast so visitors stay and explore more." },
  { icon: <IconMobile />, title: "Mobile-Friendly Layout",   desc: "Most users come from mobile. Your website will work smoothly on every screen-phone, tablet, or laptop." },
  { icon: <IconSearch />, title: "SEO-Ready Structure",      desc: "We make your website in a way that helps your website rank better on Google. This means more people can find your business online when they search for something on Google. Your website will be easier to find on Google. That is good for your business.." },
  { icon: <IconUsers />,  title: "Friendly Support",         desc: "We stay connected with you even after the website is live. If you need help with the website we are a message away from you when you need help, with the website." },
];

const WORDPRESS_FEATURES = [
  ["Easy to Manage",  "With this on your website you'll be able to easily update the text/images/pages of your website; therefore, if you don't have a background in technology, you will still be able to make the basic changes yourself."],
  ["SEO-Friendly",    "We make your website in a way that it does well on Google. The website has a structure and it is set up properly which makes it easy for Google to understand your website. This helps your website perform better on Google."],
  ["Quick to Launch", "WordPress allows faster development, so your website can go live in less time. This helps you start your online presence without long waiting periods."],
];

const PHP_BENEFITS = [
  ["Custom Features",    "You can add any feature your business needs; there are no limits. For example you might want a booking system. Maybe a custom dashboard. You can even have functions built. Everything is built to meet your requirements. Your business needs are considered."],
  ["High Performance",   "PHP websites are built to handle heavy work smoothly. They perform well even when your website grows and gets more traffic."],
  ["Flexible Design",    "You are not restricted to any fixed layout or structure. We design everything in a way that matches your brand and your goals."],
  ["Scalable Solutions", "As your business grows, your website can grow too. New features and updates can be added anytime without starting from zero."],
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
  ["Fast Loading Speed",  "A slow website can push visitors away. We optimize everything so your website loads quickly and keeps users engaged."],
  ["Proper Structure",    "We arrange your content in a clear and logical way. This makes it easier for both users and search engines to navigate your site."],
  ["Mobile Optimization", "Most users visit websites on their phones. We make sure your website works smoothly on all screen sizes without any issues."],
];

const MOBILE_FEATURES = [
  ["Mobile Phones", "Your website will fit perfectly on small screens, making it easy for users to scroll, read, and take action."],
  ["Tablets",       "We make sure your website looks balanced and clear on medium-sized screens without any layout issues."],
  ["Laptops",       "A website will appear polished and organized and easy to navigate on larger devices."],
];

const REDESIGN_BENEFITS = [
  ["Improve Design",           "We give your website a fresh and modern look. Clean layouts and better visuals help create a strong first impression."],
  ["Increase Speed",           "Slow websites lose visitors quickly. We optimize your site so it loads faster and keeps users engaged."],
  ["Make it User-Friendly",    "We simplify the structure so visitors can easily find what they need. Clear navigation helps users move around your website without confusion."],
  ["Better Mobile Experience", "We make sure your website works smoothly on mobile devices. This helps you reach more users and keeps them on your site longer."],
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
            <h1 className="wdsc-hero__title">
              Website Designing Company in Chandigarh
            </h1>
            <p className="wdsc-hero__sub">
              Your site could be someone's first impression of your business. Will they stay? Or will they go? It is up to you. Social Theka, a trusted Website Designing Company in Chandigarh, builds websites that keep visitors engaged and work for your business.
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
            <div className="wdsc-hero__cards">
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconLayout /></div>
                <div>
                  <div className="wdsc-hero__card-name">Custom Design</div>
                  <div className="wdsc-hero__card-desc">No templates</div>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconMobile /></div>
                <div>
                  <div className="wdsc-hero__card-name">Mobile-First</div>
                  <div className="wdsc-hero__card-desc">All devices ready</div>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconShop /></div>
                <div>
                  <div className="wdsc-hero__card-name">WordPress</div>
                  <div className="wdsc-hero__card-desc">Easy to manage</div>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconSearch /></div>
                <div>
                  <div className="wdsc-hero__card-name">SEO Ready</div>
                  <div className="wdsc-hero__card-desc">Rank on Google</div>
                </div>
              </div>
              <div className="wdsc-hero__card">
                <div className="wdsc-hero__card-icon"><IconZap /></div>
                <div>
                  <div className="wdsc-hero__card-name">Fast Loading</div>
                  <div className="wdsc-hero__card-desc">Optimised speed</div>
                </div>
              </div>
              <div className="wdsc-hero__card wdsc-hero__card--highlight">
                <div className="wdsc-hero__card-icon"><IconUsers /></div>
                <div>
                  <div className="wdsc-hero__card-name">Local Team</div>
                  <div className="wdsc-hero__card-desc">Based in Chandigarh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <h2 className="wdsc-section__title">Why Your Website Matters</h2>
          </div>
          <div className="wdsc-pain__grid">
            {[
              ["First Impression Counts", "Your web design is very important because it will make people want to stay on your website or look elsewhere. If they lose faith in your business or stop engaging with your website, you will lose money."],
              ["We Clear the Confusion", "This is why a trusted Website Designing Company in Chandigarh, Social Theka, is making a real difference. Your business website should feel seamless to clients and simplify communication and contact. Comfort on your site allows them to engage for a longer period. This is our commitment."],
              ["Focus on Your Business", "We will even simplify the process for you by starting or improving your site. No more worrying about technical aspects or website performance — we got that all covered. Focus on your business, we will design and develop the rest."],
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
            <h2 className="wdsc-section__title">Local Web Design Company in Chandigarh</h2>
            <p className="wdsc-section__sub">Working with a Local Web Design Company in Chandigarh makes things easier. When you use Social Theka you do not have to wait for a time or figure out complicated messages. We are easy to get in touch with. Social Theka is quick to get to you and Social Theka is always ready to help you.</p>
            <h3 className="wdsc-section__subtitle">With Social Theka, you get:</h3>
          </div>
          <div className="wdsc-pain__grid">
            {[
              ["Quick Support When You Need It",     "We are just around the corner. A quick message and we are on it — no long waits, no delays."],
              ["Easy and Clear Communication",        "You always know where your project stands. No confusion, no surprises — straight updates throughout."],
              ["Better Understanding of Your Local Market", "We understand how businesses in Chandigarh work and what local customers expect. This helps us create websites that feel more relevant and connect better with your audience."],
              ["Building a Long-Term Relationship",   "We welcome questions, thoughts and responses. Our team will always be available to help with all aspects of your website after it is up and running. Because for us, it's not just about building a website — it's about building a long-term relationship."],
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
            <h2 className="wdsc-section__title">Why Choose Social Theka for Web Designing?</h2>
            <p className="wdsc-section__sub">Picking the team for your website is really important. Your website can bring in a lot of customers. On the other hand a bad website can make people go away. You want a website that's good so you need to pick the right team for your website. Many web designing agencies can be found in Chandigarh, but Social Theka prioritizes what should really matter - building simple, fast, and results-oriented websites. We simplify the complex so that your visitors can understand your business easily and build a strong trust with your company.</p>
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
            <h2 className="wdsc-section__title">Transforming Businesses through Custom Developed Websites</h2>
            <p className="wdsc-section__sub">Each business is unique. So why should any two hand-tailored websites be aligned? At Social Theka, we level with customers in pursuit of the unique. Automatic templates? No thanks! Before any design, draft, or placement, we consider the companies we serve, their target audience, and objectives. Every website needs to achieve multiple, well-balanced goals. If we have had the pleasure of serving you, you have noticed first hand the raw website magic that begets positive engagement. That's exactly why our team is dedicated to purposeful website creations.</p>
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

      {/* ── WORDPRESS ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <h2 className="wdsc-section__title">Website Designing using WordPress</h2>
            <p className="wdsc-section__sub">All businesses want a strong online presence, but they also want simple and smart solutions. That's why businesses go for WordPress sites. Luckily, WordPress is simple enough to place in the hands of business owners. Here at Social Theka, we offer fully functional WordPress sites that appeal to the target public. Gone are the days of minor alterations made with the help of professionals. Social Theka builds each site with the end user in mind, and we do everything we can to keep our control to the absolute minimum.</p>
            <p className="wdsc-section__sub">At Social Theka, we create WordPress websites that are:</p>
          </div>
          <div className="wdsc-pain__grid">
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
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <h2 className="wdsc-section__title">Website Designing using PHP</h2>
            <p className="wdsc-section__sub">Need something more advanced? Sometimes a simple website is not enough. If your business needs special features or custom functions, PHP is a great choice. At Social Theka, we build custom websites using PHP that are designed exactly the way your business needs them. We do not rely on fixed templates here. Everything is built from scratch so you get control over how your website looks and how your website works.</p>
            <p className="wdsc-section__sub">Benefits of PHP websites:</p>
          </div>
          <div className="wdsc-pain__grid">
            {PHP_BENEFITS.map(([title, desc], i) => (
              <div key={i} className="wdsc-pain-card">
                <div className="wdsc-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdsc-pain-card__title">{title}</div>
                  <div className="wdsc-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="wdsc-section__sub" style={{marginTop: "1.5rem"}}>PHP is the right choice for businesses that need something more powerful and fully customized. With Social Theka, you get a website that is built for long-term use-strong, flexible, and ready to grow with your business.</p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-section__head">
            <h2 className="wdsc-section__title">Our Website Design Process</h2>
            <p className="wdsc-section__sub">We follow a simple step-by-step process:</p>
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
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <h2 className="wdsc-section__title">SEO-Friendly Website Design</h2>
            <p className="wdsc-section__sub">A website should not only look good-it should also rank on Google. Because if people can't find your website, it won't bring you any business. The websites that we create at Social Theka are optimized for user experience as well as search engines. Not only do we ensure that the site has a clear structure, loads quickly, and is easy to navigate; we also make sure that our site is set up in such a way that Google will be able to interpret it correctly so that it appears in the search results of your target market.</p>
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
          <p className="wdsc-section__sub" style={{marginTop: "1.5rem"}}>With the right SEO setup, your website gets a better chance to rank higher and reach more people online. At Social Theka, we build websites that don't just look good, they help your business grow by bringing in real traffic.</p>
        </div>
      </section>

      {/* ── MOBILE ── */}
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner">
          <div className="wdsc-split__grid">
            <div className="wdsc-split__left">
              <h2 className="wdsc-split__title">Mobile-Friendly Website Design</h2>
              <p className="wdsc-split__sub">The trend for browsing is moving firmly to mobile. If your website isn't mobile friendly, chances are people will leave before they even start using your site. It is a must for modern companies to have mobile friendly sites.</p>
              <p className="wdsc-split__sub">Social Theka makes it a point to ensure sites look neat regardless of the size of the screen. Browsing should be straightforward and uncomplicated. Social Theka provides a smooth, functioning website across all devices, allowing you to not lose any visitors.</p>
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
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner">
          <div className="wdsc-split__grid">
            <div className="wdsc-split__left">
              <h2 className="wdsc-split__title">Website Redesign Services</h2>
              <p className="wdsc-split__sub">If your website is outdated, slow, or confusing — people will just leave without doing anything. We aren't recommending a full rebuild. Often a few smart changes can provide more value than starting from zero.</p>
              <p className="wdsc-split__sub">We carefully examine your existing website at Social Theka and identify issues. After configuration, its speed and aesthetics are updated and improved overall. Even small updates can bring better results.</p>
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
      <section className="wdsc-section wdsc-section--white">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <h2 className="wdsc-section__title">Industries We Serve</h2>
            <p className="wdsc-section__sub">We build websites for different industries:</p>
          </div>
          <div className="wdsc-why__grid">
            {INDUSTRIES.map((industry, i) => (
              <div key={i} className="wdsc-why-card">
                <div className="wdsc-why-card__icon"><IconTarget /></div>
                <h3 className="wdsc-why-card__title">{industry}</h3>
              </div>
            ))}
          </div>
          <p className="wdsc-section__sub" style={{marginTop: "1.5rem"}}>No matter your business type, we can help.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wdsc-section wdsc-section--gray">
        <div className="wdsc-section__inner wdsc-section__inner--narrow">
          <div className="wdsc-section__head">
            <h2 className="wdsc-section__title">Frequently Asked Questions (FAQs)</h2>
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

      {/* ── CTA ── */}
      <section className="wdsc-cta-banner">
        <div className="wdsc-cta-banner__inner">
          <h2 className="wdsc-cta-banner__title">
            Opt Social Theka for Best Services
          </h2>
          <p className="wdsc-cta-banner__sub">
            When you choose Social Theka, you choose quality and support. We work with you like a partner, not just a service provider.
          </p>
          <a href="#contact" className="wdsc-btn-primary wdsc-btn-primary--lg">
            Start Your Project <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
