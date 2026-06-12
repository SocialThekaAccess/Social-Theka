import { useState } from "react";
import "./WebDevDelhi.css";
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
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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

const WHAT_MAKES_GOOD = [
  { icon: <IconZap />,    title: "Loading Speed",        desc: "Google considers this, but more importantly, users experience it. A website that takes more than 3 seconds to load can lose almost half of its visitors before showing the first element. We develop lightweight, fast websites." },
  { icon: <IconMobile />, title: "Mobile-First Design",  desc: "More than 75% of Delhi's internet traffic is through mobile phones. Your site has to behave and look perfect on a 5-inch screen as well as on a laptop." },
  { icon: <IconSearch />, title: "On-Page SEO",          desc: "The organization of the site impacts search engines. Meta tags, header hierarchy, image alt tags, internal linking — these are only the basics that we incorporate into every web page we build." },
  { icon: <IconTarget />, title: "Clear Calls to Action", desc: "A visitor who has no idea what to do next is a potential lead lost. We craft each page with a definite sequence - what you want the visitor to do and how to make it easy for them." },
  { icon: <IconShield />, title: "Security",             desc: "SSL, safe hosting, regular backups - these will not be options in 2026 - if you are a business that is not online (yet), you will be." },
];

const SERVICES = [
  { icon: <IconUsers />,  name: "Business Websites & Corporate Sites", desc: "Most often your website is the first impression that a potential client gets about your company. It must gain trust rapidly. We create sleek, professional business websites that show reliability and change the visitors into contacts. Be it a consulting firm, a manufacturer, or a service provider - we have worked with all and we are aware of what really works in Delhi's B2B environment." },
  { icon: <IconShop />,   name: "E-Commerce Stores",                   desc: "Our WooCommerce and Shopify stores are not just a platform to showcase products but are designed for sales. We set up and test product pages, checkout flow, payment gateway integration (Razorpay, PayU, CCAvenue), GST invoicing all, before launch. Also, we have worked with brands who started with 20 SKUs and scaled to thousands, so we understand how to build for growth." },
  { icon: <IconLayout />, name: "Landing Pages",                       desc: "Are you using Google Ads or Meta campaigns? A landing page that is consistent with your ad copy and opens within 2 seconds can even increase your conversion rate by two times. We create landing pages that are not only visually appealing but also capable of converting visitors into leads, and product launches thoroughly checked on both desktop and mobile devices." },
  { icon: <IconStar />,   name: "Portfolio & Personal Branding Sites", desc: "Photographers, architects, designers, coaches, consultants — your craft deserves a platform that truly represents it. We create portfolio websites that are not only visually appealing and fast but also crafted to help you stand out. No heavy templates. Simply clear, stylish presentation." },
];

const WHY_US = [
  { icon: <IconUsers />,  title: "We Speak Your Language",                   desc: "No confusing terms. No ghosts after the down payment. You will always be informed about the status of the project, the next steps, and the contact person." },
  { icon: <IconTarget />, title: "We Meet Our Deadlines",                    desc: "Timelines are important. We set realistic goals for projects and keep to schedules. If there's a change, we let you know first - not only after the deadline is missed." },
  { icon: <IconCode />,   title: "We Know Local Business Requirements",      desc: "Price points for Indian markets, adherence to GST rules, Hindi language support, WhatsApp chat integration, Just Dial and IndiaMART lead tracking — we include these in every project as they are real necessities of businesses in Delhi." },
  { icon: <IconShield />, title: "We Don't Disappear After Launch",          desc: "Continuing support after the launch is one of our services. Bug? We fix it. Content update? We're there. Six months down the line, adding a new service page? You bet." },
];

const PROCESS = [
  { step: "01", title: "Discovery Call",       desc: "We discuss your business, audience, goals, and what you have done so far. The proposal is not sent until we have understood the brief." },
  { step: "02", title: "Proposal & Scope",     desc: "We give you a detailed document — pages, features, timeline, cost. Nothing will be added to the bill after you have signed." },
  { step: "03", title: "Design Mockup",        desc: "We don't write a single line of code until you can see what the website will look like. We keep going over it until you are satisfied." },
  { step: "04", title: "Development & Content", desc: "We create the website, integrate all the software, and fill the pages with content — yours or our copywriting team's." },
  { step: "05", title: "Testing",              desc: "Various tests considering different devices. Speed, form, and payment test (for e-commerce). We test first." },
  { step: "06", title: "Launch & Handover",    desc: "We do the launch and show you how to update. You have all the rights, no lock-in, no reliance on us unless you want it." },
];

const FAQS = [
  {
    q: "What makes Social Theka the best website designing company in Delhi for small businesses?",
    a: "Small businesses face quite a few limitations, budgeting being one, the desire for quick results, and it is even common that they don't have a marketing team to keep things going after the launch. We craft our websites in such a way that owners of small businesses can handle the management of their site, we price reasonably concerning the delivery, and firsthand we think about conversions when we design. Besides that, we are familiar with Delhi's local market: what buyers expect, what competitors are doing, and how to position your business online in a way that stands out. Most of our small business clients start ranking for local search terms within 3–4 months of launch.",
  },
  {
    q: "How long does it take to design a website?",
    a: "In general, a normal 5–7 page business website requires 2–3 weeks from the start of work to going live. Online store projects are subject to 4–6 weeks, depending on the number of products and the desired level of integration. Single sales pages (landing pages), in most cases, can be ready in about 5–7 days. When the client-side content collection happens to take longer (which is quite common), the timeline may change. We provide you with a content brief very early in the process to help you avoid any delays. Fast delivery can be done at an extra cost, though we'd rather get it right than quickly.",
  },
  {
    q: "Do you provide website maintenance after launch?",
    a: "Of course! We have monthly maintenance packages that include security updates, plugin/theme updates (for WordPress sites), regular backups, uptime monitoring, and minor content modifications. However, it's totally optional. Some clients are happy to manage their sites themselves and we're always willing to give them full control. But if you don't want to think about it at all, a maintenance plan will keep your site updated and safe with no work on your side. Pricing varies with the size and the complexity of your site.",
  },
  {
    q: "Will my website rank on Google after Social Theka designs it?",
    a: "We make sure each of our new websites is optimized for SEO right from the start using the right URL structure, meta tags, proper header levels, image optimization, schema markup where relevant, and quick page loading times. This is the baseline. Your ability to rank for highly competitive keywords will depend on your niche, your local competitors, and if you keep doing SEO after your site goes live. We are very transparent about this — creating a website just gets you started, doing SEO keeps you going strong. We do both, and we can prepare a plan for you according to your keyword objectives and competition in Delhi.",
  },
  {
    q: "Can you redesign my existing website instead of building from scratch?",
    a: "Definitely. Redesigns really are a major part of what we do. If your website feels outdated, running slow, or simply not turning visitors into customers, first of all, we carry out a thorough site audit — identifying the existing strengths (after all, if something's already ranking well, let's not break it) that can be continued, parts which should be eliminated, and those which require re-building. We transfer all your content, set up redirects from old URLs to preserve your SEO legacy, and go live with your revamped site without the kind of search engine issues that poorly done redesigns can cause.",
  },
];

export default function WebDevDelhi() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="wdd-page">

      {/* ── HERO ── */}
      <section className="wdd-hero">
        <div className="wdd-hero__inner">
          <div className="wdd-hero__left">
            <div className="wdd-hero__badge">
              <span className="wdd-hero__badge-dot" />
              Website Designing — Delhi
            </div>
            <h1 className="wdd-hero__title">
              Best Website Designing Company in Delhi
            </h1>
            <p className="wdd-hero__sub">
              Are you looking for a website designer in Delhi? A lot of choices might be a good thing but ironically, most of the time it just ends up stressing you more. Really, there are thousands of them who say all these superb things: quick delivery, super low price, high rankings, with money-back guarantee. Actually, most of them are the copy-paste shops which create and run the same template for every customer.
              Social Theka does business differently. We don't sell you a package before knowing your business. We will meet (or call) you, understand your real needs, and then create something that is right for you. Sounds like what everyone is saying? Well, when you check the work, you will realize the difference. We have made websites for local stores. The market of Delhi is wild, fierce, and quite particular about what it wants. Lack of originality is absolutely not acceptable. That is why we don't cater to generic needs.
            </p>
            <div className="wdd-hero__ctas">
              <a href="#contact" className="wdd-btn-primary">Start Your Project <IconArrow /></a>
              <a href="#services" className="wdd-btn-outline">View Services</a>
            </div>
            <div className="wdd-hero__stats">
              <div className="wdd-hero__stat">
                <span className="wdd-hero__stat-val">200+</span>
                <span className="wdd-hero__stat-label">Websites Built</span>
              </div>
              <div className="wdd-hero__stat-divider" />
              <div className="wdd-hero__stat">
                <span className="wdd-hero__stat-val">24/7</span>
                <span className="wdd-hero__stat-label">Works for You</span>
              </div>
              <div className="wdd-hero__stat-divider" />
              <div className="wdd-hero__stat">
                <span className="wdd-hero__stat-val">98%</span>
                <span className="wdd-hero__stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="wdd-hero__right">
            <div className="wdd-hero__cards">
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconCode /></div>
                <div>
                  <div className="wdd-hero__card-name">Custom Design</div>
                  <div className="wdd-hero__card-desc">No templates</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconMobile /></div>
                <div>
                  <div className="wdd-hero__card-name">Mobile-First</div>
                  <div className="wdd-hero__card-desc">All devices ready</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconShop /></div>
                <div>
                  <div className="wdd-hero__card-name">E-Commerce</div>
                  <div className="wdd-hero__card-desc">Sell online easily</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconSearch /></div>
                <div>
                  <div className="wdd-hero__card-name">SEO Ready</div>
                  <div className="wdd-hero__card-desc">Rank on Google</div>
                </div>
              </div>
              <div className="wdd-hero__card">
                <div className="wdd-hero__card-icon"><IconZap /></div>
                <div>
                  <div className="wdd-hero__card-name">Fast Loading</div>
                  <div className="wdd-hero__card-desc">Optimised speed</div>
                </div>
              </div>
              <div className="wdd-hero__card wdd-hero__card--highlight">
                <div className="wdd-hero__card-icon"><IconTarget /></div>
                <div>
                  <div className="wdd-hero__card-name">Lead Focused</div>
                  <div className="wdd-hero__card-desc">Converts visitors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES A WEBSITE GOOD ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <h2 className="wdd-section__title">What Actually Makes a Website Good in 2026</h2>
            <p className="wdd-section__sub">That question alone is enough to challenge your decision to hire one. A mere good-looking website with no traffic is merely a decoration. A website that even if ranked in Google, is so unappealing that the first click will be a bouncer. Speed, design, SEO, and usability are all important, and they must be perfectly aligned to harmonize. Here's what we at Social Theka are really into:</p>
          </div>
          <div className="wdd-why__grid">
            {WHAT_MAKES_GOOD.map((item, i) => (
              <div key={i} className="wdd-why-card">
                <div className="wdd-why-card__icon">{item.icon}</div>
                <h3 className="wdd-why-card__title">{item.title}</h3>
                <p className="wdd-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="wdd-section wdd-section--white" id="services">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <h2 className="wdd-section__title">What Social Theka Builds</h2>
            <p className="wdd-section__sub">Social Theka is not a one-size-fits-all shop. The kind of website a law firm needs is completely different from what a fashion brand needs. Here's a breakdown of what we do:</p>
          </div>
          <div className="wdd-services__grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="wdd-service-card">
                <div className="wdd-service-card__icon">{s.icon}</div>
                <h3 className="wdd-service-card__name">{s.name}</h3>
                <p className="wdd-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DELHI BUSINESSES ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <h2 className="wdd-section__title">Why Delhi Businesses Work With Social Theka</h2>
            <p className="wdd-section__sub">Frankly, only a few things make clients return to us and keep sending referrals regularly.</p>
          </div>
          <div className="wdd-why__grid">
            {WHY_US.map((item, i) => (
              <div key={i} className="wdd-why-card">
                <div className="wdd-why-card__icon">{item.icon}</div>
                <h3 className="wdd-why-card__title">{item.title}</h3>
                <p className="wdd-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELHI DIGITAL MARKET ── */}
      <section className="wdd-section wdd-section--white">
        <div className="wdd-section__inner wdd-section__inner--narrow">
          <div className="wdd-section__head">
            <h2 className="wdd-section__title">Delhi's Digital Market Has Changed - Your Website Needs to Keep Up</h2>
          </div>
          <div className="wdd-pain__grid">
            {[
              ["Delhi Businesses Are Now Fully Online", "Compared with other major Indian cities, Delhi businesses were the least inclined to become fully digital; however, the discrepancy has now been bridged. After 2020, even the tiniest shops in Karol Bagh or Chandni Chowk can be found online. So having a website is no longer something to be decided. The real question is if your website is better than that of your competitors."],
              ["Local SEO Is Serious Competition", "When someone living in South Delhi uses the phrase \"interior designer near me\" or \"chartered accountant in Nehru Place\" for the first time, the ones that are displayed are the businesses with an extremely quick website, a good structure, and Google Business Profile properly set up. We can do both for you."],
              ["Your Website Builds Trust", "According to a 2024 study, over 80% of consumers residing in urban areas in India depend on a brand's website to help them decide whether to make a purchase, even though they first came across the brand on Instagram. Your social media makes them interested. It is your website that finally convinces them to buy."],
            ].map(([title, desc], i) => (
              <div key={i} className="wdd-pain-card">
                <div className="wdd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdd-pain-card__title">{title}</div>
                  <div className="wdd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner">
          <div className="wdd-section__head">
            <h2 className="wdd-section__title">How We Work: Our Website Design Process</h2>
            <p className="wdd-section__sub">We always keep the process clear and quite straightforward. This is the way it works:</p>
          </div>
          <div className="wdd-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="wdd-process-card">
                <div className="wdd-process-card__step">{p.step}</div>
                <div>
                  <div className="wdd-process-card__title">{p.title}</div>
                  <div className="wdd-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="wdd-section wdd-section--white">
        <div className="wdd-section__inner wdd-section__inner--narrow">
          <div className="wdd-section__head">
            <h2 className="wdd-section__title">What Does Website Design Cost in Delhi?</h2>
            <p className="wdd-section__sub">This question arises in every first conversation. The straight answer is that it really depends on what you are building. For example, a simple 5-page business website and a multi-vendor e-commerce store are completely different types of projects.</p>
          </div>
          <div className="wdd-pain__grid">
            {[
              ["Business Website", "Generally, a professional business website from Social Theka starts at ₹15,000 and the cost will vary depending on the number of pages, features, and integrations."],
              ["E-Commerce Projects", "E-commerce projects usually start at ₹30,000."],
              ["Landing Pages", "Landing pages are more budget-friendly."],
              ["Full Transparency", "We will be open about cost right from the first conversation. We will show you exactly what is included, what is not, and what ongoing costs look like (hosting, domain, maintenance). No surprises."],
            ].map(([title, desc], i) => (
              <div key={i} className="wdd-pain-card">
                <div className="wdd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="wdd-pain-card__title">{title}</div>
                  <div className="wdd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wdd-section wdd-section--gray">
        <div className="wdd-section__inner wdd-section__inner--narrow">
          <div className="wdd-section__head">
            <h2 className="wdd-section__title">Frequently Asked Questions</h2>
          </div>
          <div className="wdd-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`wdd-faq__item ${openFaq === i ? "wdd-faq__item--open" : ""}`}>
                <button className="wdd-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="wdd-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="wdd-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wdd-cta-banner">
        <div className="wdd-cta-banner__inner">
          <h2 className="wdd-cta-banner__title">
            Ready to Build Something Worth Visiting?
          </h2>
          <p className="wdd-cta-banner__sub">
            If you want the top website designing firm in Delhi that really gets business — and not just the design tools — Social Theka is the one. We have been involved in various industries and budget levels, as well as in all kinds of creative briefs imaginable. Contact us. Share with us what you are working on. We'll handle everything afterward.
          </p>
          <a href="#contact" className="wdd-btn-primary wdd-btn-primary--lg">
            Contact Social Theka <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
