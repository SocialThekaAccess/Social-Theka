import { useState } from "react";
import "./SEOchandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";

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
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const IconLink = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const IconFileText = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const IconShop = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
const IconMapPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const SEO_SERVICES = [
  { icon: <IconMapPin />,   title: "Local SEO",               desc: "Want your customers in Chandigarh, Mohali, Panchkula or wherever from Punjab to find you first? We enhance your Google Business Profile, create local citations and target location-based keywords so that you monopolize local search and google maps." },
  { icon: <IconShop />,     title: "E-commerce SEO",          desc: "Running an online store? Optimise product pages, category structure and site navigation, so that your products show when buyers are actually searching. Visibility = Sales, without increasing your advertising costs!" },
  { icon: <IconShield />,   title: "Technical SEO",           desc: "Slow site speed, crawl errors, broken links, poor mobile experience - these are silent ranking killers. Our technical SEO team fixes what's holding your site back and ensures it meets all of Google's Core Web Vitals standards." },
  { icon: <IconFileText />, title: "On-Page Optimization",    desc: "Yes! Local SEO is one of our bread-and-butter services. We make local Google search and Google Maps work so small businesses can be found first by nearby customers. So if you are in Chandigarh, Mohali, Panchkula or anywhere in India or US we have got your back!" },
  { icon: <IconLink />,     title: "Off-Page SEO & Link Building", desc: "We don't oversell and underdeliver. Your goals inform every SEO campaign, we keep transparency across the board, and data tracks everything." },
  { icon: <IconFileText />, title: "SEO Content Strategy",    desc: "At all times good content is key to a SEO plan. We make blogs landing pages and main content that are optimized for keywords. These rank well on Google. Turn visitors into customers." },
  { icon: <IconTarget />,   title: "Enterprise SEO",          desc: "A large website? Complex domain structure? Our company has solutions for search engine optimization that work well for big brands. These enterprise SEO solutions help with finding the keywords for a lot of pages, making a lot of content and doing complex technical work to make the website better. This is great for brands that have hundreds or thousands of pages on their website." },
  { icon: <IconGlobe />,    title: "International SEO",       desc: "If you want your website to be popular in countries you need to do something called International SEO. This is where we help your website work well in languages and in many parts of the world. We also make sure it works with search engines that people use in countries. The goal is to make sure people who are looking for what you offer can find your website, no matter where they are, in the world." },
  { icon: <IconGlobe />,    title: "SEO Audit & Reporting",       desc: "We track your website performance, keyword rankings, traffic, and SEO issues regularly. Clear reports help you understand what is working, what needs improvement, and where your next growth opportunity is. We provide actionable insights instead of confusing numbers, so you can make smarter business decisions. Our regular performance reviews ensure your SEO strategy." },
];

const PROCESS = [
  { step: "01", title: "Website Audit",          desc: "It begins with you letting us spend some time conducting a thorough audit on your existing site identifying any technical problems, content gaps, and what keywords are missing out on rankings at this moment." },
  { step: "02", title: "Competitor Analysis",    desc: "Let us look at what your top competitors are doing. We will find out the keywords they rank for. We will also check their backlinks and content strategy. We will use this information to make a plan that helps you do better than your competitors. The plan will help you beat them. Come out on top. It is about making you a leader in your field. Your top competitors will be left behind as you move forward. This plan is about you and your success." },
  { step: "03", title: "Keyword Research",       desc: "We find all the search terms that your customers type into Google. These are big-volume keywords that show what people are really looking for. They are most likely to drive traffic to your website when customers search for them. People will probably visit your website when they look for these things on the internet. The things that people search for are most likely to drive traffic to your website." },
  { step: "04", title: "On-Page Optimization",   desc: "We make sure your pages have meta tags, nice content, a simple URL structure and proper internal links. We also add schema to each page on your website. This helps each page on your website to be set up so that it can rank well. We do this so that your pages can rank." },
  { step: "05", title: "Technical Fixes",        desc: "We identify issues that could be holding your rankings back so that nothing technical stands in the way: crawlability, page speed improvements, or broken links, we resolve all of that and make sure to hit core web vitals on your site!" },
  { step: "06", title: "Content & Link Building", desc: "Each month, we create and publish SEO-driven content and build powerful backlinks to grow and maintain your search rankings, the two most influential factors for achieving good performance on search engines." },
  { step: "07", title: "SEO Reporting",          desc: "They have their monthly reports that are basically easy to decipher. Every month you get the Keyword rankings, organic traffic, leads & ROI so you always know what exactly is working and heading towards." },
  { step: "08", title: "Ongoing Optimization",   desc: "SEO is never done. We have a constant optimization process based on data, algorithm updates, and emerging opportunities so that your rankings continue to scale from month-to-month." },
];

const PRICING = [
  {
    name: "Starter Plan",
    tag: "Best for small businesses & startups",
    features: [
      "15 Target Keywords",
      "Full On-Page Optimization",
      "Technical SEO Audit",
      "4 Blog Posts/Month",
      "Link Building (Basic)",
      "Google Business Profile Setup",
      "Monthly Ranking Report",
    ],
  },
  {
    name: "Growth Plan",
    tag: "Best for growing businesses",
    highlight: true,
    features: [
      "25+ Target Keywords",
      "Advanced On-Page SEO",
      "Technical SEO Fixes",
      "8 Blog Posts/Month",
      "Guest Post Link Building",
      "Local SEO Optimization",
      "Competitor Tracking",
      "Bi-Weekly Reports",
    ],
  },
  {
    name: "Enterprise Plan",
    tag: "Best for large businesses & agencies",
    features: [
      "50+ Target Keywords",
      "Full Technical SEO Overhaul",
      "12+ Blog Posts/Month",
      "Premium Link Building",
      "International / E-commerce SEO",
      "Dedicated SEO Manager",
      "Weekly Strategy Calls",
      "Custom Reporting Dashboard",
    ],
  },
];

const WHY_CHOOSE = [
  { icon: <IconTrendingUp />, title: "Ongoing Optimization",        desc: "SEO is never done. We optimize your strategy on an ongoing basis using data, updates to algorithms, and new opportunities, so your rankings grow month in and month out." },
  { icon: <IconTarget />,     title: "Custom SEO Strategies",       desc: "No copy-paste ever used. The Best SEO Services are Custom-built and tailored to your industry, audience, business objectives." },
  { icon: <IconSearch />,     title: "Data-Driven Approach",        desc: "All our decisions are based on real data — whether it is keyword research, competitor analysis, search intent or performance metrics not speculation." },
  { icon: <IconShield />,     title: "White-Hat SEO Only",          desc: "We apply only whitehat, organic search engine optimization strategies approved by Google that creates permanent rankings. No shortcuts that might penalize your site." },
  { icon: <IconFileText />,   title: "Full Transparency",           desc: "You will always see what we are doing and why. Transparent monthly reports with communication and no smoke and mirrors." },
  { icon: <IconStar />,       title: "Proven ROI",                  desc: "Our clients experience an average of 150% traffic increase in 6 months. We are way more than vanity metrics when it comes to driving organic leads and revenue." },
  { icon: <IconUsers />,      title: "Chandigarh Based Team Experts", desc: "Our team of experts is based in Chandigarh. These experts do search engine optimization work. They have been doing this work for a time. They have worked with companies. Some of these companies are from Punjab. Do business only in this area. Chandigarh-Based Expert Team has also worked with online shopping brands that do business all over the world." },
];

const FAQS = [
  { q: "What is Search Engine Optimization? Why do businesses need Search Engine Optimization?", a: "Search Engine Optimization is how you can get your website to show up better on Google. If you do not have Search Engine Optimization your website will not be seen much. If you have a good Search Engine Optimization plan you can get people to visit your website who are actually looking for what you have to offer and you do not have to pay every time someone clicks on your website." },
  { q: "How long does it take to see results from Search Engine Optimization?", a: "The truth is, Search Engine Optimization takes time. Most businesses start to see improvements in where they show up on Google and how many people visit their website from Google within three to six months. After a year the results are usually really big. The businesses that keep doing Search Engine Optimization for a time are the ones that do the best in their business." },
  { q: "How much do your SEO services cost?", a: "Our SEO services are made to fit budgets. This means we can help startups and big companies too. The cost of our SEO services depends on what you need us to do, how keywords you want to use and how many other companies are trying to do the same thing. We have SEO plans that're easy on the pocket and we tell you exactly what you have to pay. There are no secret fees." },
  { q: "Do you offer local SEO services for small businesses?", a: "Yes! Local SEO is one of our bread-and-butter services. We make local Google search and Google Maps work so small businesses can be found first by nearby customers. So if you are in Chandigarh, Mohali, Panchkula or anywhere in India or US we have got your back!" },
  { q: "What makes Social Theka different from other SEO companies?", a: "We don't oversell and underdeliver. Your goals inform every SEO campaign, we keep transparency across the board, and data tracks everything. Our Chandigarh-based SEO experts have delivered 500+ projects with a 9.5/10 client satisfaction rate and our clients stay because we actually get results." },
  { q: "Do you provide SEO services all over the world?", a: "Yes we do. Social Theka is in Chandigarh. We provide SEO services in India, the USA and everywhere else. So if you want to be known in Punjab all over India or in another country we can help you make a plan that works for you and your target market." },
];

export default function SEOChandigarh() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="seoc-page">

      {/* ── HERO ── */}
      <section className="seoc-hero">
        <div className="seoc-hero__inner">
          <div className="seoc-hero__left">
            <h1 className="seoc-hero__title">Affordable SEO Services Trusted by 500+ Businesses Worldwide</h1>
            <p className="seoc-hero__sub">
              If your website does not appear on Google, then so do your competitors - and unfortunately for you, that's where the customers are heading for. Social Theka provides result-oriented SEO services that improve Google rankings, attract quality & organic traffic, and help businesses grow sales without covering hundreds on a paid ads budget.
            </p>
            <p className="seoc-hero__sub">
              So, if you are a startup from Chandigarh, a small business from Punjab or any big brand from anywhere in the world, we create an SEO strategy specifically built around your goals. If you want tangible success through search engine optimization that lasts long after your investment, Social Theka is the digital marketing agency businesses go with.
            </p>
            <p className="seoc-hero__sub">
              Networking can help identify relevant SEO agencies and provide examples of successful campaigns in similar verticals.
            </p>
            <div className="seoc-hero__ctas">
              <a href="#contact" className="seoc-btn-primary">Get Started <IconArrow /></a>
              <a href="#services" className="seoc-btn-outline">Our Services</a>
            </div>
            <div className="seoc-hero__stats">
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">250+</span>
                <span className="seoc-hero__stat-label">SEO Projects Delivered</span>
              </div>
              <div className="seoc-hero__stat-divider" />
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">70K+</span>
                <span className="seoc-hero__stat-label">Keywords Ranked #1</span>
              </div>
              <div className="seoc-hero__stat-divider" />
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">150%</span>
                <span className="seoc-hero__stat-label">Avg. Traffic Growth in 6 Months</span>
              </div>
              <div className="seoc-hero__stat-divider" />
              <div className="seoc-hero__stat">
                <span className="seoc-hero__stat-val">9.5/10</span>
                <span className="seoc-hero__stat-label">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>
          <div className="seoc-hero__right">
            <div className="seoc-hero__cards">
              <div className="seoc-hero__card">
                <div className="seoc-hero__card-icon"><IconMapPin /></div>
                <div>
                  <div className="seoc-hero__card-name">Local SEO</div>
                  <div className="seoc-hero__card-desc">Dominate local search</div>
                </div>
              </div>
              <div className="seoc-hero__card">
                <div className="seoc-hero__card-icon"><IconShop /></div>
                <div>
                  <div className="seoc-hero__card-name">E-commerce SEO</div>
                  <div className="seoc-hero__card-desc">Visibility = Sales</div>
                </div>
              </div>
              <div className="seoc-hero__card">
                <div className="seoc-hero__card-icon"><IconShield /></div>
                <div>
                  <div className="seoc-hero__card-name">Technical SEO</div>
                  <div className="seoc-hero__card-desc">Core Web Vitals</div>
                </div>
              </div>
              <div className="seoc-hero__card">
                <div className="seoc-hero__card-icon"><IconLink /></div>
                <div>
                  <div className="seoc-hero__card-name">Link Building</div>
                  <div className="seoc-hero__card-desc">Quality backlinks</div>
                </div>
              </div>
              <div className="seoc-hero__card">
                <div className="seoc-hero__card-icon"><IconFileText /></div>
                <div>
                  <div className="seoc-hero__card-name">Content Strategy</div>
                  <div className="seoc-hero__card-desc">Rank & convert</div>
                </div>
              </div>
              <div className="seoc-hero__card seoc-hero__card--highlight">
                <div className="seoc-hero__card-icon"><IconTrendingUp /></div>
                <div>
                  <div className="seoc-hero__card-name">150% Growth</div>
                  <div className="seoc-hero__card-desc">Avg. in 6 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST SEO AGENCY ── */}
      <section className="seoc-section seoc-section--gray">
        <div className="seoc-section__inner">
          <div className="seoc-section__head">
            <h2 className="seoc-section__title">Best SEO Agency in Chandigarh with Proven Growth Results</h2>
          </div>
          <div className="seoc-about__grid">
            <div className="seoc-about-card">
              <div className="seoc-about-card__icon"><IconShield /></div>
              <h3 className="seoc-about-card__title">ISO Certified & Data-Driven</h3>
              <p className="seoc-about-card__desc">Social Theka is an ISO certified, full-service SEO agency based in Chandigarh- India, which has helped thousands of businesses, from small-businesses across Punjab to enterprises of USA establish a strong and lasting presence on the search engines. We don't believe in guesswork. All strategies that are build are based on data & thorough Keyword Research, and a true understanding of your industry and audience.</p>
            </div>
            <div className="seoc-about-card">
              <div className="seoc-about-card__icon"><IconTrendingUp /></div>
              <h3 className="seoc-about-card__title">One Cohesive Plan. Compounding Results.</h3>
              <p className="seoc-about-card__desc">We combine on-page SEO, off-page SEO, technical SEO, and content marketing into one cohesive plan that drives consistent, compounding results over time. Our goal is simple - get you in front of the people who are already searching for what you offer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SEO SERVICES ── */}
      <section className="seoc-section seoc-section--white" id="services">
        <div className="seoc-section__inner">
          <div className="seoc-section__head">
            <h2 className="seoc-section__title">Our SEO Services</h2>
            <p className="seoc-section__sub">Everything You Need to Rank</p>
          </div>
          <div className="seoc-services__grid">
            {SEO_SERVICES.map((s, i) => (
              <div key={i} className="seoc-service-card">
                <div className="seoc-service-card__icon">{s.icon}</div>
                <h3 className="seoc-service-card__name">{s.title}</h3>
                <p className="seoc-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="seoc-section seoc-section--gray">
        <div className="seoc-section__inner">
          <div className="seoc-section__head">
            <h2 className="seoc-section__title">How Our SEO Process Gets You Faster Results</h2>
          </div>
          <div className="seoc-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="seoc-process-card">
                <div className="seoc-process-card__step">{p.step}</div>
                <div>
                  <div className="seoc-process-card__title">{p.title}</div>
                  <div className="seoc-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="seoc-section seoc-section--white">
        <div className="seoc-section__inner">
          <div className="seoc-section__head">
            <h2 className="seoc-section__title">Affordable SEO Packages Transparent Pricing</h2>
            <p className="seoc-section__sub">Flexible plans built around your budget and business goals. No hidden fees, no long-term lock-ins.</p>
          </div>
          <div className="seoc-pricing__grid">
            {PRICING.map((plan, i) => (
              <div key={i} className={`seoc-pricing-card ${plan.highlight ? "seoc-pricing-card--highlight" : ""}`}>
                <div className="seoc-pricing-card__name">{plan.name}</div>
                <div className="seoc-pricing-card__tag">{plan.tag}</div>
                <ul className="seoc-pricing-card__features">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className="seoc-pricing-card__check"><IconCheck /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={plan.highlight ? "seoc-btn-primary" : "seoc-btn-outline"}>
                  Get Started <IconArrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="seoc-section seoc-section--gray">
        <div className="seoc-section__inner">
          <div className="seoc-section__head">
            <h2 className="seoc-section__title">Why Businesses Choose Social Theka for SEO</h2>
          </div>
          <div className="seoc-why__grid">
            {WHY_CHOOSE.map((item, i) => (
              <div key={i} className="seoc-why-card">
                <div className="seoc-why-card__icon">{item.icon}</div>
                <h3 className="seoc-why-card__title">{item.title}</h3>
                <p className="seoc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="seoc-section seoc-section--white">
        <div className="seoc-section__inner seoc-section__inner--narrow">
          <div className="seoc-section__head">
            <h2 className="seoc-section__title">Frequently Asked Questions about SEO Services</h2>
          </div>
          <div className="seoc-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`seoc-faq__item ${openFaq === i ? "seoc-faq__item--open" : ""}`}>
                <button className="seoc-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="seoc-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="seoc-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="seoc-cta-banner">
        <div className="seoc-cta-banner__inner">
          <h2 className="seoc-cta-banner__title">Ready to Grow Your Search Rankings?</h2>
          <p className="seoc-cta-banner__sub">
            Social Theka is the digital marketing agency businesses go with for tangible SEO success that lasts long after your investment. Let's build your strategy today.
          </p>
          <a href="#contact" className="seoc-btn-primary seoc-btn-primary--lg">
            Start Your SEO Journey <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
