import { useState } from "react";
import "./SEOdelhi.css";
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

const WHY_SEO = [
  { icon: <IconSearch />,    title: "Appear in Front of People Actively Searching",  desc: "Your website shows up when people search for exactly what you offer — not random audiences." },
  { icon: <IconShield />,    title: "Build Credibility",                               desc: "People trust Google results. Ranking well builds trust before a visitor even clicks." },
  { icon: <IconTrendingUp />,title: "Generate Consistent Organic Traffic",             desc: "Not overnight — but steady and meaningful traffic that doesn't stop when you pause a budget." },
  { icon: <IconZap />,       title: "Reduce Dependency on Paid Ads",                   desc: "SEO gives stability. Ads work only as long as you keep spending. SEO keeps working." },
  { icon: <IconTarget />,    title: "Bring in Better-Quality Leads",                   desc: "Traffic with intent converts. People who find you through search are already looking for you." },
];

const COMMON_ISSUES = [
  ["Website Structure Not Optimized",          "Poor structure makes it hard for Google to understand and rank your pages."],
  ["Important Keywords Are Missing",            "Without the right keywords, your pages can't match what people are searching."],
  ["Content Doesn't Match Search Intent",       "Content written without understanding what users actually want won't rank."],
  ["Technical Issues Affecting Performance",    "Site speed, crawl errors, and mobile issues quietly pull your rankings down."],
  ["No Backlinks or Authority Signals",         "Without authority, even well-optimized pages struggle to rank against competitors."],
];

const HOW_WE_WORK = [
  { icon: <IconTarget />,    title: "Understanding Your Business",         desc: "Before anything else, we understand what you offer, who your audience is, and what kind of traffic actually matters to you. Because ranking for the wrong keywords is useless." },
  { icon: <IconSearch />,    title: "Keyword Research That Actually Makes Sense", desc: "We find what your customers are really searching for — not just high-volume keywords, but ones that bring relevant traffic. Because traffic without intent doesn't convert." },
  { icon: <IconFileText />,  title: "Fixing On-Page Elements",             desc: "We optimize your website pages — content, headings, meta tags, internal links — so Google can understand what your site is about." },
  { icon: <IconShield />,    title: "Technical SEO (The Part Most Ignore)", desc: "Things like site speed, mobile experience, crawl errors — these quietly affect rankings. We fix these issues so your site performs properly behind the scenes." },
  { icon: <IconFileText />,  title: "Content That Supports Rankings",      desc: "We create content that actually answers what people are searching for — blogs, landing pages, and more. Not filler content. Useful content." },
  { icon: <IconLink />,      title: "Link Building (Done Carefully)",      desc: "Backlinks still matter, but only if done right. We focus on quality over quantity so your website builds authority gradually." },
  { icon: <IconTrendingUp />,title: "Ongoing Improvements",                desc: "SEO is never \"done.\" We keep tracking performance and improving based on data, updates, and opportunities." },
];

const WHAT_YOU_GET = [
  ["Clear Direction",          "You know what's being done and why."],
  ["Better Visibility",        "Your website starts appearing for relevant searches."],
  ["Consistent Traffic Growth","Not overnight — but steady and meaningful."],
  ["Content That Works",       "Not just written for SEO — but useful for users too."],
  ["Honest Communication",     "No overpromises. Just realistic expectations and updates."],
];

const SEO_TYPES = [
  { icon: <IconMapPin />,    title: "Local SEO",           desc: "If your customers are in a specific area, we help you appear in local searches and Google Maps. Perfect for businesses targeting Delhi or nearby locations." },
  { icon: <IconShop />,      title: "E-commerce SEO",      desc: "For online stores, we optimize product pages, categories, and site structure so your products show up when people are ready to buy." },
  { icon: <IconShield />,    title: "Technical SEO",       desc: "We fix backend issues that affect rankings — site speed, indexing, crawl errors, and more." },
  { icon: <IconFileText />,  title: "On-Page SEO",         desc: "From content optimization to internal linking — we make sure each page is properly structured." },
  { icon: <IconLink />,      title: "Off-Page SEO",        desc: "We build your website's authority through quality backlinks and external signals." },
  { icon: <IconTarget />,    title: "Content Strategy",    desc: "We create blogs and pages that target real search queries — not random topics." },
  { icon: <IconGlobe />,     title: "International SEO",   desc: "If you're targeting multiple countries, we optimize your site accordingly." },
];

const PROCESS = [
  { step: "01", title: "Website Audit",          desc: "We analyze your current site — what's working, what's not, and what's missing." },
  { step: "02", title: "Competitor Analysis",    desc: "We look at what your competitors are doing and where opportunities exist." },
  { step: "03", title: "Keyword Mapping",        desc: "We match the right keywords to the right pages." },
  { step: "04", title: "Optimization",           desc: "We fix on-page and technical issues." },
  { step: "05", title: "Content & Links",        desc: "We build content and backlinks consistently." },
  { step: "06", title: "Tracking & Reporting",   desc: "You see how things are improving — rankings, traffic, and leads." },
  { step: "07", title: "Continuous Improvement", desc: "We keep refining based on performance." },
];

const WHY_CHOOSE = [
  ["No Copy-Paste Strategy",  "Every business is different — so the SEO plan is too."],
  ["Data Over Guesswork",     "Decisions are based on actual data — not assumptions."],
  ["Long-Term Focus",         "We don't chase quick wins that disappear."],
  ["Transparent Process",     "You always know what's happening."],
  ["Real Results",            "Not just rankings, but traffic and leads."],
];

const WHO_THIS_IS_FOR = [
  "Your website isn't getting traffic",
  "You're relying too much on ads",
  "Your competitors are ranking above you",
  "You want long-term growth",
  "You want better-quality leads",
];

const FAQS = [
  { q: "How long does SEO take to show results?",             a: "SEO takes time — there's no shortcut. Real SEO builds gradually, but once it starts working, it keeps working. Most businesses start seeing meaningful improvements within 3–6 months." },
  { q: "Do you guarantee first-page rankings?",               a: "No honest SEO agency can guarantee specific rankings. Anyone promising instant rankings is either experimenting or cutting corners. We focus on steady, practical, long-term growth." },
  { q: "What's the difference between SEO and paid ads?",     a: "Ads give quick visibility but only work while you keep spending. SEO builds long-term presence — once your website starts ranking, it keeps bringing traffic without paying for every click." },
  { q: "Do I need SEO if I'm already running Google Ads?",    a: "Yes. Ads and SEO work best together. SEO reduces your dependency on ads over time and brings in traffic that doesn't cost per click." },
  { q: "How do you measure SEO success?",                     a: "We track rankings, organic traffic, leads generated, and improvements over time. You always know what's improving and why." },
];

export default function SEODelhi() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="seod-page">

      {/* ── HERO ── */}
      <section className="seod-hero">
        <div className="seod-hero__inner">
          <div className="seod-hero__left">
            <h1 className="seod-hero__title">Best SEO Services in Delhi</h1>
            <p className="seod-hero__tagline">"Get Found When People Are Actually Searching."</p>
            <p className="seod-hero__sub">
              Let's not overcomplicate SEO. When someone needs a product or service, what do they do? They search on Google. Now imagine this — your potential customer searches for exactly what you offer… but your website doesn't show up. Where do they go? Straight to your competitor. That's how simple it is.
            </p>
            <p className="seod-hero__sub">
              This is why SEO services in Delhi are not just "another marketing activity." They decide whether your business gets discovered or ignored.
            </p>
            <p className="seod-hero__sub">
              At Social Theka, we focus on helping your website show up where it actually matters — on search results when people are already looking. No shortcuts. No fake guarantees. Just proper SEO work that builds visibility over time and keeps bringing in traffic without depending on ads.
            </p>
            <p className="seod-hero__sub">
              That's also why businesses looking for the best SEO services in Delhi often end up working with us — because we keep things real and results-focused.
            </p>
            <div className="seod-hero__ctas">
              <a href="#contact" className="seod-btn-primary">Get Started <IconArrow /></a>
              <a href="#services" className="seod-btn-outline">Our Services</a>
            </div>
            <div className="seod-hero__stats">
              <div className="seod-hero__stat">
                <span className="seod-hero__stat-val">3–6 Mo</span>
                <span className="seod-hero__stat-label">Avg. Results Time</span>
              </div>
              <div className="seod-hero__stat-divider" />
              <div className="seod-hero__stat">
                <span className="seod-hero__stat-val">5M+</span>
                <span className="seod-hero__stat-label">Keywords Ranked</span>
              </div>
              <div className="seod-hero__stat-divider" />
              <div className="seod-hero__stat">
                <span className="seod-hero__stat-val">24/7</span>
                <span className="seod-hero__stat-label">Organic Traffic</span>
              </div>
            </div>
          </div>
          <div className="seod-hero__right">
            <div className="seod-hero__cards">
              <div className="seod-hero__card">
                <div className="seod-hero__card-icon"><IconSearch /></div>
                <div>
                  <div className="seod-hero__card-name">Keyword Research</div>
                  <div className="seod-hero__card-desc">Intent-based targeting</div>
                </div>
              </div>
              <div className="seod-hero__card">
                <div className="seod-hero__card-icon"><IconFileText /></div>
                <div>
                  <div className="seod-hero__card-name">On-Page SEO</div>
                  <div className="seod-hero__card-desc">Every page optimized</div>
                </div>
              </div>
              <div className="seod-hero__card">
                <div className="seod-hero__card-icon"><IconShield /></div>
                <div>
                  <div className="seod-hero__card-name">Technical SEO</div>
                  <div className="seod-hero__card-desc">Speed & crawl fixes</div>
                </div>
              </div>
              <div className="seod-hero__card">
                <div className="seod-hero__card-icon"><IconLink /></div>
                <div>
                  <div className="seod-hero__card-name">Link Building</div>
                  <div className="seod-hero__card-desc">Quality backlinks</div>
                </div>
              </div>
              <div className="seod-hero__card">
                <div className="seod-hero__card-icon"><IconMapPin /></div>
                <div>
                  <div className="seod-hero__card-name">Local SEO</div>
                  <div className="seod-hero__card-desc">Delhi & nearby areas</div>
                </div>
              </div>
              <div className="seod-hero__card seod-hero__card--highlight">
                <div className="seod-hero__card-icon"><IconTrendingUp /></div>
                <div>
                  <div className="seod-hero__card-name">Long-Term Growth</div>
                  <div className="seod-hero__card-desc">Steady & compounding</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SEO STILL MATTERS ── */}
      <section className="seod-section seod-section--gray">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">Why SEO Still Matters (More Than Ever)</h2>
            <p className="seod-section__sub">A lot of businesses rely heavily on ads. And yes, ads work — but only as long as you keep spending. SEO works differently. Once your website starts ranking, it keeps bringing traffic without you paying for every click.</p>
            <div className="seod-comparison">
              <div className="seod-comparison__item">
                <span className="seod-comparison__label">Ads</span>
                <span className="seod-comparison__value">= Quick visibility</span>
              </div>
              <div className="seod-comparison__item seod-comparison__item--highlight">
                <span className="seod-comparison__label">SEO</span>
                <span className="seod-comparison__value">= Long-term presence</span>
              </div>
            </div>
            <p className="seod-section__sub">And most strong brands use both — but SEO is what gives stability. With the right search engine optimization in Delhi, your business can:</p>
          </div>
          <div className="seod-why-marquee-wrap">
            <div className="seod-why-marquee-track">
              {WHY_SEO.map((item, i) => (
                <div key={i} className="seod-why-card">
                  <div className="seod-why-card__icon">{item.icon}</div>
                  <h3 className="seod-why-card__title">{item.title}</h3>
                  <p className="seod-why-card__desc">{item.desc}</p>
                </div>
              ))}
              {/* duplicate for seamless loop */}
              {WHY_SEO.map((item, i) => (
                <div key={`d-${i}`} className="seod-why-card" aria-hidden="true">
                  <div className="seod-why-card__icon">{item.icon}</div>
                  <h3 className="seod-why-card__title">{item.title}</h3>
                  <p className="seod-why-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="seod-section__note">At Social Theka, we don't treat SEO like a one-time task. It's something that builds over time — and when done right, it compounds.</p>
        </div>
      </section>

      {/* ── WHAT'S HOLDING WEBSITES BACK ── */}
      <section className="seod-section seod-section--white">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">What's Usually Holding Websites Back</h2>
            <p className="seod-section__sub">Most websites don't rank — not because the business is bad, but because SEO is either missing or done incorrectly. Common issues we see:</p>
          </div>
          <div className="seod-pain__grid">
            {COMMON_ISSUES.map(([title, desc], i) => (
              <div key={i} className="seod-pain-card">
                <div className="seod-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="seod-pain-card__title">{title}</div>
                  <div className="seod-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="seod-section__note">And sometimes, it's just random efforts without a clear strategy. That's where proper SEO services in Delhi make the difference. At Social Theka, we first understand what's not working and then fix it step by step instead of guessing.</p>
        </div>
      </section>

      {/* ── HOW WE HANDLE SEO ── */}
      <section className="seod-section seod-section--gray" id="services">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">How Social Theka Handles SEO (Without the Noise)</h2>
            <p className="seod-section__sub">We don't believe in confusing processes or technical jargon just to sound impressive. Our approach is simple, but done properly.</p>
          </div>
          <div className="seod-services__grid">
            {HOW_WE_WORK.map((s, i) => (
              <div key={i} className="seod-service-card">
                <div className="seod-service-card__icon">{s.icon}</div>
                <h3 className="seod-service-card__name">{s.title}</h3>
                <p className="seod-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="seod-section__note">That's how we deliver the best SEO services in Delhi that don't just spike and drop — but grow steadily.</p>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="seod-section seod-section--white">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">What You Get When You Work With Social Theka</h2>
            <p className="seod-section__sub">Working with Social Theka doesn't feel complicated. You don't have to decode reports or chase updates. Here's what you actually get:</p>
          </div>
          <div className="seod-get__grid">
            {WHAT_YOU_GET.map(([title, desc], i) => (
              <div key={i} className="seod-pain-card">
                <div className="seod-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="seod-pain-card__title">{title}</div>
                  <div className="seod-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="seod-section__note">That's what makes us a reliable choice for businesses looking for SEO services in Delhi that actually make sense.</p>
        </div>
      </section>

      {/* ── TYPES OF SEO ── */}
      <section className="seod-section seod-section--gray">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">Types of SEO We Cover</h2>
            <p className="seod-section__sub">Different businesses need different SEO approaches. Here's how we handle it:</p>
          </div>
          <div className="seod-types__grid">
            {SEO_TYPES.map((item, i) => (
              <div key={i} className="seod-why-card">
                <div className="seod-why-card__icon">{item.icon}</div>
                <h3 className="seod-why-card__title">{item.title}</h3>
                <p className="seod-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="seod-section seod-section--white">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">How Our SEO Process Works</h2>
            <p className="seod-section__sub">We don't jump straight into execution. There's a flow.</p>
          </div>
          <div className="seod-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="seod-process-card">
                <div className="seod-process-card__step">{p.step}</div>
                <div>
                  <div className="seod-process-card__title">{p.title}</div>
                  <div className="seod-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="seod-section__note">That's how Social Theka approaches search engine optimization in Delhi — step by step, not randomly.</p>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="seod-section seod-section--gray">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">Why Businesses Choose Social Theka for SEO</h2>
            <p className="seod-section__sub">There's no shortage of agencies offering SEO. But many businesses struggle because things feel unclear. Here's what we do differently:</p>
          </div>
          <div className="seod-choose__grid">
            {WHY_CHOOSE.map(([title, desc], i) => (
              <div key={i} className="seod-pain-card">
                <div className="seod-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="seod-pain-card__title">{title}</div>
                  <div className="seod-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="seod-section__note">That's why businesses searching for the best SEO services in Delhi often prefer working with Social Theka.</p>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="seod-section seod-section--white">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">Who This Is For</h2>
            <p className="seod-section__sub">Our SEO services in Delhi work best if:</p>
          </div>
          <div className="seod-whois__grid">
            {WHO_THIS_IS_FOR.map((item, i) => (
              <div key={i} className="seod-whois-card">
                <div className="seod-whois-card__icon"><IconCheck /></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="seod-section__note">If this sounds familiar, SEO is something you should seriously consider.</p>
        </div>
      </section>

      {/* ── HONEST THING ABOUT SEO ── */}
      <section className="seod-section seod-section--gray">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">One Honest Thing About SEO</h2>
          </div>
          <div className="seod-honest__grid">
            {[
              ["SEO Takes Time",                   "There's no shortcut. Anyone promising instant rankings is either experimenting or cutting corners."],
              ["Real SEO Builds Gradually",         "But once it starts working — it keeps working. That's the biggest advantage over paid ads."],
              ["Steady, Practical, Long-Term",      "And that's exactly how we approach SEO services in Delhi at Social Theka: steady, practical, and long-term."],
            ].map(([title, desc], i) => (
              <div key={i} className="seod-honest-card">
                <div className="seod-honest-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="seod-honest-card__title">{title}</div>
                  <div className="seod-honest-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LET'S KEEP IT SIMPLE ── */}
      <section className="seod-section seod-section--white">
        <div className="seod-section__inner">
          <div className="seod-section__head">
            <h2 className="seod-section__title">Let's Keep It Simple</h2>
            <p className="seod-section__sub">You don't need complicated strategies. You need:</p>
          </div>
          <div className="seod-simple__grid">
            {[
              ["The Right Keywords",             "Keywords that match what your actual customers are searching for — not just high-volume terms."],
              ["A Properly Optimized Website",   "Clean structure, fast speed, mobile-friendly, and technically sound so Google can read it properly."],
              ["Useful Content",                 "Content that answers real questions and helps visitors — not filler written just for SEO."],
              ["Consistent Effort",              "SEO compounds over time. Consistent work each month is what separates brands that rank from those that don't."],
            ].map(([title, desc], i) => (
              <div key={i} className="seod-simple-card">
                <div className="seod-simple-card__icon"><IconCheck /></div>
                <div>
                  <div className="seod-simple-card__title">{title}</div>
                  <div className="seod-simple-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="seod-section__note">That's it. And that's exactly what we focus on.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="seod-section seod-section--gray">
        <div className="seod-section__inner seod-section__inner--narrow">
          <div className="seod-section__head">
            <h2 className="seod-section__title">Frequently Asked Questions</h2>
          </div>
          <div className="seod-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`seod-faq__item ${openFaq === i ? "seod-faq__item--open" : ""}`}>
                <button className="seod-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="seod-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="seod-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="seod-cta-banner">
        <div className="seod-cta-banner__inner">
          <h2 className="seod-cta-banner__title">Let's Get Started</h2>
          <p className="seod-cta-banner__sub">
            No pressure. Just reach out to Social Theka, and we'll first understand your business — then suggest what actually makes sense. If you're looking for the best SEO services in Delhi that are clear, practical, and focused on real growth — you're already in the right place.
          </p>
          <a href="#contact" className="seod-btn-primary seod-btn-primary--lg">
            Start Your Project <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
