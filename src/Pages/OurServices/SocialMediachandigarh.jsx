import { useState } from "react";
import { Link } from "react-router-dom";
import "./SocialMediachandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";

const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const IconFacebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconLinkedin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconEye = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
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
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const WHY_MATTERS = [
  { icon: <IconEye />,        title: "Reach the Right Audience",          desc: "Proper social media puts you in front of people who are actually likely to care about what you offer." },
  { icon: <IconTrendingUp />, title: "Stay in People's Minds",            desc: "Consistent presence keeps your brand visible so when someone needs what you offer, you're the first name they think of." },
  { icon: <IconShield />,     title: "Build Trust Over Time",             desc: "A well-maintained page signals that you're active, real, and serious about your business." },
  { icon: <IconUsers />,      title: "Bring Traffic to Your Website or WhatsApp", desc: "Good social media drives people to take action — visit your site, send a message, or fill a form." },
  { icon: <IconTarget />,     title: "Generate Real Inquiries",           desc: "The goal isn't just likes. It's getting people to actually reach out and express interest in what you do." },
];

const HOW_WE_WORK = [
  { step: "01", title: "Understanding Comes First",  desc: "Before posting anything, we understand your business. What you sell, who you're targeting, and what you actually want — leads, visibility, or brand building. Without this, social media becomes guesswork." },
  { step: "02", title: "Then We Plan Properly",      desc: "We don't post randomly. Your content is planned — what goes out, when it goes out, and why it matters. This is where most brands struggle, honestly." },
  { step: "03", title: "Then Execution Happens",     desc: "Designs, captions, posting, page management — it's handled consistently so your profile doesn't look dead or confusing." },
  { step: "04", title: "Ads (When Needed)",          desc: "If you want faster results, we run paid social media campaigns. But not random boosting — we target properly so your budget is used wisely." },
  { step: "05", title: "We Improve Along the Way",  desc: "Some posts work better than others. That's normal. We track performance and keep improving instead of repeating the same mistakes." },
];

const WHAT_YOU_GET = [
  { icon: <IconZap />,        title: "Content That Feels Real",           desc: "We create content that actually connects. Not over-polished, not robotic — just clear and relatable." },
  { icon: <IconInstagram />,  title: "Regular Posting & Page Handling",   desc: "Your page stays active. No gaps. No last-minute panic posting." },
  { icon: <IconTarget />,     title: "Paid Ads (If You Want Growth Faster)", desc: "We run ads that are focused on results — messages, leads, traffic — not just impressions." },
  { icon: <IconUsers />,      title: "Engagement Handling",               desc: "We help you stay active with your audience. People notice when brands respond." },
  { icon: <IconShield />,     title: "Simple Updates",                    desc: "No complicated reports. You'll know what works and what doesn't." },
];

const PLATFORMS = [
  { icon: <IconInstagram />, title: "Instagram – for reach and engagement", desc: "Instagram is really good for making your brand known and keeping it in people's minds. It helps you talk to the people who're interested in your business, through videos, pictures and short updates. This way your business stays fresh in their thoughts. You can share information, sneak peeks and special offers to keep them interested. Using Instagram helps make your brand bigger." },
  { icon: <IconFacebook />,  title: "Facebook – for ads and local reach",  desc: "Facebook still works well especially for paid ads. Facebook is useful for targeting the audience and generating leads, messages or website traffic from Facebook." },
  { icon: <IconLinkedin />,  title: "LinkedIn – for professional growth",  desc: "If your business is B2B or service-based, LinkedIn helps build trust and connect with the right people. It's more about quality content than frequent posting." },
];

const WHY_CHOOSE = [
  { icon: <IconTrendingUp />, title: "We Focus on Real Growth, Not Just Activity",       desc: "We don't run campaigns just for the sake of it. Everything we do is aimed at getting you actual results — more leads, better visibility, and real business growth." },
  { icon: <IconShield />,     title: "Everything Is Simple and Transparent",             desc: "We make sure to keep everything clear — about what is working, what is not working, and what we are doing next." },
  { icon: <IconStar />,       title: "All Services Under One Roof",                      desc: "From SEO and PPC to social media marketing and website development — we do it all in one place. This way your branding and marketing are always on the same page." },
  { icon: <IconUsers />,      title: "We Understand Different Stages of Business",       desc: "Whether you're just starting out or already established, we know the challenges and we plan accordingly." },
  { icon: <IconZap />,        title: "Short-Term Wins + Long-Term Growth",               desc: "We balance both. Quick results where possible, but also building a foundation that keeps working over time." },
  { icon: <IconTarget />,     title: "We Focus on Building Your Brand, Not Just Campaigns", desc: "It is not about traffic. We help your business look credible, professional and trustworthy across all platforms. That is why many businesses consider Social Theka a top social media marketing company in Chandigarh. Not because we say it — because our work shows it over time." },
];

const WHO_THIS_IS_FOR = [
  "You're running a business but your page isn't doing much",
  "You don't have time to manage social media",
  "You want more leads but don't know how to get them",
  "Your content feels random or inconsistent",
  "You want your brand to look more professional online",
];

const FAQS = [
  { q: "How long does it take to see results from social media marketing?",      a: "Social media growth doesn't happen overnight. Anyone promising instant results is either guessing or faking it. Real growth is slow at first — but once it starts building, it becomes consistent. That's how strong brands are built." },
  { q: "Do you manage all social media platforms?",                              a: "We focus on platforms that actually make sense for your business — Instagram, Facebook, LinkedIn. We don't recommend trying to be everywhere. Doing a few things properly is better than doing everything poorly." },
  { q: "What does social media marketing include?",                              a: "It includes content creation, posting, page management, audience engagement, and ad management when needed. The exact scope depends on what your business needs." },
  { q: "Do you run paid ads as well?",                                           a: "Yes, when it makes sense. We handle paid social media marketing properly — right audience targeting, proper ad copy, testing different creatives, and tracking real results. So your money goes into something that actually brings returns." },
  { q: "Why should I choose Social Theka over other agencies in Chandigarh?",   a: "There are a lot of digital marketing agencies out there. But most businesses don't just want services — they want results that actually make a difference. We focus on real growth, keep things simple and transparent, and work more like a team than a vendor." },
];

export default function SocialMediaChandigarh() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="smc-page">

      {/* ── HERO ── */}
      <section className="smc-hero">
        <div className="smc-hero__inner">
          <div className="smc-hero__left">
            <h1 className="smc-hero__title">Social Media Marketing That Actually Works</h1>
            <p className="smc-hero__sub">Let us be real for a second. Social media today is not about posting nice designs or writing captions. People actually check your profile before they decide to trust you. They scroll, they judge, they compare… and then they decide.</p>
            <p className="smc-hero__sub">If your page looks inactive or random, they just move on. No second thought. That's why social media marketing is no longer optional. It's a big part of how your business is seen online.</p>
            <p className="smc-hero__sub">At Social Theka, we handle social media marketing in Chandigarh in a way that actually makes sense for real businesses. Not overcomplicated strategies. Not big promises. Just proper work that helps you stay visible, build trust, and slowly turn attention into customers.</p>
            <div className="smc-hero__ctas">
              <Link to="/contact" className="smc-btn-primary">Get Started <IconArrow /></Link>
              <Link to="/" className="smc-btn-outline">How We Work</Link>
            </div>
            <div className="smc-hero__stats">
              <div className="smc-hero__stat">
                <span className="smc-hero__stat-val">3</span>
                <span className="smc-hero__stat-label">Key Platforms</span>
              </div>
              <div className="smc-hero__stat-divider" />
              <div className="smc-hero__stat">
                <span className="smc-hero__stat-val">Real</span>
                <span className="smc-hero__stat-label">Steady Growth</span>
              </div>
              <div className="smc-hero__stat-divider" />
              <div className="smc-hero__stat">
                <span className="smc-hero__stat-val">Full</span>
                <span className="smc-hero__stat-label">End-to-End Support</span>
              </div>
            </div>
          </div>
          <div className="smc-hero__right">
            <div className="smc-hero__cards">
              <div className="smc-hero__card">
                <div className="smc-hero__card-icon"><IconInstagram /></div>
                <div><div className="smc-hero__card-name">Instagram</div><div className="smc-hero__card-desc">Reach & engagement</div></div>
              </div>
              <div className="smc-hero__card">
                <div className="smc-hero__card-icon"><IconFacebook /></div>
                <div><div className="smc-hero__card-name">Facebook</div><div className="smc-hero__card-desc">Ads & local reach</div></div>
              </div>
              <div className="smc-hero__card">
                <div className="smc-hero__card-icon"><IconLinkedin /></div>
                <div><div className="smc-hero__card-name">LinkedIn</div><div className="smc-hero__card-desc">B2B & professional</div></div>
              </div>
              <div className="smc-hero__card">
                <div className="smc-hero__card-icon"><IconTarget /></div>
                <div><div className="smc-hero__card-name">Paid Ads</div><div className="smc-hero__card-desc">Targeted, not boosted</div></div>
              </div>
              <div className="smc-hero__card">
                <div className="smc-hero__card-icon"><IconZap /></div>
                <div><div className="smc-hero__card-name">Content Strategy</div><div className="smc-hero__card-desc">Planned & consistent</div></div>
              </div>
              <div className="smc-hero__card smc-hero__card--highlight">
                <div className="smc-hero__card-icon"><IconTrendingUp /></div>
                <div><div className="smc-hero__card-name">Real Growth</div><div className="smc-hero__card-desc">Not just activity</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MATTERS ── */}
      <section className="smc-section smc-section--gray">
        <div className="smc-section__inner">
          <div className="smc-section__head">
            <h2 className="smc-section__title">Why Social Media Matters More Than You Think</h2>
            <p className="smc-section__sub">Most people don't directly call or buy anymore. They check your Instagram. Maybe your Facebook. Sometimes LinkedIn. They look at how often you post, what kind of content you share, how people are reacting, whether your brand feels genuine. If something feels off, they leave.</p>
            <p className="smc-section__sub">That's where proper social media marketing services come in. It's not just about "being active." It's about showing up the right way. When done properly, it helps you:</p>
          </div>
          <div className="smc-why__grid">
            {WHY_MATTERS.map((item, i) => (
              <div key={i} className="smc-why-card">
                <div className="smc-why-card__icon">{item.icon}</div>
                <h3 className="smc-why-card__title">{item.title}</h3>
                <p className="smc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="smc-section__note">As a social media marketing company in Chandigarh, we focus on these things instead of just chasing likes or followers.</p>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="smc-section smc-section--white" id="services">
        <div className="smc-section__inner">
          <div className="smc-section__head">
            <h2 className="smc-section__title">How We Actually Work (No Complicated Process)</h2>
            <p className="smc-section__sub">We keep things simple, but we don't take shortcuts.</p>
          </div>
          <div className="smc-process__grid">
            {HOW_WE_WORK.map((p, i) => (
              <div key={i} className="smc-process-card">
                <div className="smc-process-card__step">{p.step}</div>
                <div>
                  <div className="smc-process-card__title">{p.title}</div>
                  <div className="smc-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="smc-section smc-section--gray">
        <div className="smc-section__inner">
          <div className="smc-section__head">
            <h2 className="smc-section__title">What You Get With Our Social Media Marketing Services in Chandigarh</h2>
            <p className="smc-section__sub">When you work with us, you're not just getting someone to "post content." You're getting full support.</p>
          </div>
          <div className="smc-services__grid">
            {WHAT_YOU_GET.map((s, i) => (
              <div key={i} className="smc-service-card">
                <div className="smc-service-card__icon">{s.icon}</div>
                <h3 className="smc-service-card__name">{s.title}</h3>
                <p className="smc-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="smc-section smc-section--white">
        <div className="smc-section__inner">
          <div className="smc-section__head">
            <h2 className="smc-section__title">Platforms We Focus On</h2>
            <p className="smc-section__sub">We don't believe in being active on every platform just for the sake of it. That usually means you end up with content that's all over the place and does not give good results. We focus on the platforms that are a good fit for your business — based on where your audience is and what your goals are, not on what is currently popular.</p>
          </div>
          <div className="smc-why__grid smc-why__grid--3">
            {PLATFORMS.map((p, i) => (
              <div key={i} className="smc-why-card">
                <div className="smc-why-card__icon">{p.icon}</div>
                <h3 className="smc-why-card__title">{p.title}</h3>
                <p className="smc-why-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="smc-section__note">As a social media marketing company in Chandigarh, we choose platforms based on what will actually work for you, so your time, effort, and budget are used in the right direction.</p>
        </div>
      </section>

      {/* ── ADS ── */}
      <section className="smc-trust-section">
        <div className="smc-trust__inner smc-trust__inner--centered">
          <h2 className="smc-trust__title">Let's Talk About Ads (The Right Way)</h2>
          <p className="smc-trust__sub">A lot of people think running ads is just clicking "boost post." It's not. That's actually how most budgets get wasted. We handle paid social media marketing properly:</p>
          <div className="smc-ads__grid">
            {[
              ["Right Audience Targeting",      "We don't blast ads at everyone. We identify who is most likely to become a customer and target them specifically."],
              ["Proper Ad Copy",                "What you say in the ad matters as much as who you show it to. We craft messaging that actually connects."],
              ["Testing Different Creatives",   "We test variations to find what works best — not just run one ad and hope for the best."],
              ["Tracking Real Results",         "So your money goes into something that actually brings returns — not just impressions or reach numbers."],
            ].map(([title, desc], i) => (
              <div key={i} className="smc-ads-card">
                <div className="smc-ads-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="smc-ads-card__title">{title}</div>
                  <div className="smc-ads-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="smc-section smc-section--white">
        <div className="smc-section__inner">
          <div className="smc-section__head">
            <h2 className="smc-section__title">Why Businesses Choose Social Theka</h2>
            <p className="smc-section__sub">There are a lot of digital marketing agencies out there. But most businesses don't just want services — they want results that actually make a difference.</p>
          </div>
          <div className="smc-why__grid">
            {WHY_CHOOSE.map((item, i) => (
              <div key={i} className="smc-why-card">
                <div className="smc-why-card__icon">{item.icon}</div>
                <h3 className="smc-why-card__title">{item.title}</h3>
                <p className="smc-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="smc-section smc-section--gray">
        <div className="smc-section__inner">
          <div className="smc-section__head">
            <h2 className="smc-section__title">Who This Is For</h2>
            <p className="smc-section__sub">Our social media marketing services work best if:</p>
          </div>
          <div className="smc-whois__grid">
            {WHO_THIS_IS_FOR.map((item, i) => (
              <div key={i} className="smc-whois-card">
                <div className="smc-whois-card__icon"><IconCheck /></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="smc-section__note">Whether you're local or targeting a wider audience, we help you build a presence that actually makes sense.</p>
        </div>
      </section>

      {/* ── HONEST THING ── */}
      <section className="smc-section smc-section--white">
        <div className="smc-section__inner smc-section__inner--narrow">
          <div className="smc-section__head">
            <h2 className="smc-section__title">A Small Thing Most People Ignore</h2>
          </div>
          <div className="smc-honest__grid">
            {[
              ["Social Media Growth Doesn't Happen Overnight", "Anyone promising instant results is either guessing or faking it. Real growth is slow at first — but once it starts building, it becomes consistent."],
              ["That's How Strong Brands Are Built",            "Steady, consistent presence over time is what separates brands people remember from brands people scroll past."],
              ["Steady, Clear, and Long-Term",                  "And that's exactly how we approach social media marketing in Chandigarh — steady, clear, and long-term."],
            ].map(([title, desc], i) => (
              <div key={i} className="smc-honest-card">
                <div className="smc-honest-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="smc-honest-card__title">{title}</div>
                  <div className="smc-honest-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEEP IT SIMPLE ── */}
      <section className="smc-section smc-section--gray">
        <div className="smc-section__inner">
          <div className="smc-section__head">
            <h2 className="smc-section__title">Let's Keep It Simple</h2>
            <p className="smc-section__sub">At the end of the day, you don't need complicated strategies. You need:</p>
          </div>
          <div className="smc-simple__grid">
            {[
              ["The Right Content",                 "Not random posts — content that reflects your brand and speaks to the right audience."],
              ["The Right Consistency",             "Showing up regularly. Not every hour, but enough to stay relevant and visible."],
              ["The Right Audience",                "Reaching people who are actually likely to care about what you offer."],
              ["Someone Who Actually Handles It",   "So you can focus on running your business while your online presence stays active and growing."],
            ].map(([title, desc], i) => (
              <div key={i} className="smc-simple-card">
                <div className="smc-simple-card__icon"><IconCheck /></div>
                <div>
                  <div className="smc-simple-card__title">{title}</div>
                  <div className="smc-simple-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="smc-section__note">At Social Theka, we focus on getting these basics right again and again.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="smc-section smc-section--white">
        <div className="smc-section__inner smc-section__inner--narrow">
          <div className="smc-section__head">
            <h2 className="smc-section__title">Frequently Asked Questions</h2>
          </div>
          <div className="smc-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`smc-faq__item ${openFaq === i ? "smc-faq__item--open" : ""}`}>
                <button className="smc-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="smc-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="smc-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="smc-cta-banner">
        <div className="smc-cta-banner__inner">
          <h2 className="smc-cta-banner__title">Want to Start?</h2>
          <p className="smc-cta-banner__sub">
            No pressure, no long process. Just reach out, we'll understand your business, and suggest what actually makes sense. If you're looking for the best social media marketing agency in Chandigarh that keeps things real — you already know where to go.
          </p>
          <Link to="/contact" className="smc-btn-primary smc-btn-primary--lg">
            Start the Conversation <IconArrow />
          </Link>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
