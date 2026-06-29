import { useState } from "react";
import "./SocialMediachandigarh.css";
import ServiceLayout from "../../Component/ServiceLayout";

/* ── ICONS ── */
const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
);
const IconFacebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconLinkedin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
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

const IconLightbulb = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z"/>
    <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
  </svg>
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
const IconPencil = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
);
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const IconCompass = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
);
const IconHandshake = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
);
const IconHeadphones = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
);
const IconLayers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);

/* ── DATA ── */
const WHY_MATTERS = [
  { icon: <IconEye />,        title: "Reach the Right Audience",                    desc: "Proper social media puts you in front of people who are actually likely to care about what you offer." },
  { icon: <IconTrendingUp />, title: "Stay in People's Minds",                      desc: "Consistent presence keeps your brand visible so when someone needs what you offer, you're the first name they think of." },
  { icon: <IconShield />,     title: "Build Trust Over Time",                       desc: "A well-maintained page signals that you're active, real, and serious about your business." },
  { icon: <IconUsers />,      title: "Bring Traffic to Your Website or WhatsApp",   desc: "Good social media drives people to take action — visit your site, send a message, or fill a form." },
  { icon: <IconTarget />,     title: "Generate Real Inquiries",                     desc: "The goal isn't just likes. It's getting people to actually reach out and express interest in what you do." },
];

const PROCESS = [
  { step: "01", title: "Understanding Comes First",  desc: "Before posting anything, we understand your business — what you sell, who you're targeting, and what you actually want: leads, visibility, or brand building." },
  { step: "02", title: "Then We Plan Properly",      desc: "We don't post randomly. Your content is planned — what goes out, when it goes out, and why it matters. This is where most brands struggle." },
  { step: "03", title: "Then Execution Happens",     desc: "Designs, captions, posting, page management — handled consistently so your profile never looks dead or confusing." },
  { step: "04", title: "Ads (When Needed)",          desc: "If you want faster results, we run paid social media campaigns — not random boosting, but proper targeting so your budget is used wisely." },
  { step: "05", title: "We Improve Along the Way",  desc: "Some posts work better than others. That's normal. We track performance and keep improving instead of repeating the same mistakes." },
  { step: "06", title: "Consistent Brand Presence",  desc: "Consistency builds recognition. We maintain a regular posting schedule and a unified brand voice to keep your business visible and memorable." },
];

const WHAT_YOU_GET = [
  { icon: <IconZap />,        title: "Content That Feels Real",              desc: "We create content that actually connects — not over-polished, not robotic — just clear and relatable." },
  { icon: <IconInstagram />,  title: "Regular Posting & Page Handling",      desc: "Your page stays active. No gaps. No last-minute panic posting." },
  { icon: <IconTarget />,     title: "Paid Ads (If You Want Growth Faster)", desc: "We run ads focused on results — messages, leads, traffic — not just impressions." },
  { icon: <IconUsers />,      title: "Engagement Handling",                  desc: "We help you stay active with your audience. People notice when brands respond." },
  { icon: <IconShield />,     title: "Simple Updates",                       desc: "No complicated reports. You'll always know what works and what doesn't." },
    { icon: <IconLightbulb />, title: "Clear Strategy", desc: "Every post is planned with a purpose. We focus on content that supports your business goals instead of posting randomly." },
];

const PLATFORMS = [
  { icon: <IconInstagram />, name: "Instagram",  desc: "Really good for making your brand known and keeping it in people's minds. Share videos, pictures, and short updates to stay fresh in their thoughts.", tags: ["Story Ads", "Reels", "Carousel"] },
  { icon: <IconFacebook />,  name: "Facebook",   desc: "Still works well especially for paid ads. Useful for targeting the right audience and generating leads, messages, or website traffic.", tags: ["Lead Ads", "Local Reach", "Retargeting"] },
  { icon: <IconLinkedin />,  name: "LinkedIn",   desc: "If your business is B2B or service-based, LinkedIn helps build trust and connect with the right people. More about quality content than frequent posting.", tags: ["Lead Gen Forms", "Sponsored Posts", "InMail"] },
];

const ADS_POINTS = [
  ["Right Audience Targeting",    "We don't blast ads at everyone. We identify who is most likely to become a customer and target them specifically."],
  ["Proper Ad Copy",              "What you say in the ad matters as much as who you show it to. We craft messaging that actually connects."],
  ["Testing Different Creatives", "We test variations to find what works best — not just run one ad and hope for the best."],
  ["Tracking Real Results",       "So your money goes into something that actually brings returns — not just impressions or reach numbers."],
   ["Smart Budget Management",       "We make every advertising dollar count. By optimizing campaigns regularly, we reduce unnecessary spending and focus your budget on what delivers the best results."],
    ["Continuous Campaign Optimization",       "Successful advertising isn't a one-time setup. We monitor campaign performance, refine strategies, and make improvements to maximize long-term growth."],
];

const WHY_CHOOSE = [
  { icon: <IconTrendingUp />, title: "We Focus on Real Growth, Not Just Activity",          desc: "We don't run campaigns just for the sake of it. Everything we do is aimed at getting you actual results — more leads, better visibility, and real business growth." },
  { icon: <IconShield />,     title: "Everything Is Simple and Transparent",                desc: "We make sure to keep everything clear — about what is working, what is not working, and what we are doing next." },
  { icon: <IconStar />,       title: "All Services Under One Roof",                         desc: "From SEO and PPC to social media marketing and website development — we do it all in one place so your branding and marketing are always on the same page." },
  { icon: <IconUsers />,      title: "We Understand Different Stages of Business",          desc: "Whether you're just starting out or already established, we know the challenges and we plan accordingly." },
  { icon: <IconZap />,        title: "Short-Term Wins + Long-Term Growth",                  desc: "We balance both. Quick results where possible, but also building a foundation that keeps working over time." },
  { icon: <IconTarget />,     title: "We Focus on Building Your Brand, Not Just Campaigns", desc: "It's not about traffic. We help your business look credible, professional, and trustworthy across all platforms." },
];

const WHO_THIS_IS_FOR = [
  "You're running a business but your page isn't doing much",
  "You don't have time to manage social media",
  "You want more leads but don't know how to get them",
  "Your content feels random or inconsistent",
  "You want your brand to look more professional online",
];

const HONEST_POINTS = [
  ["Social Media Growth Doesn't Happen Overnight", "Anyone promising instant results is either guessing or faking it. Real growth is slow at first — but once it starts building, it becomes consistent."],
  ["That's How Strong Brands Are Built",            "Steady, consistent presence over time is what separates brands people remember from brands people scroll past."],
  ["Steady, Clear, and Long-Term",                  "And that's exactly how we approach social media marketing in Chandigarh — steady, clear, and long-term."],
];

const KEEP_SIMPLE = [
  { icon: <IconPencil />, title: "The Right Content", desc: "Not random posts — content that reflects your brand and speaks to the right audience." },
  { icon: <IconClock />, title: "The Right Consistency", desc: "Showing up regularly. Not every hour, but enough to stay relevant and visible." },
  { icon: <IconCompass />, title: "The Right Audience", desc: "Reaching people who are actually likely to care about what you offer." },
  { icon: <IconHandshake />, title: "Someone Who Actually Handles It", desc: "So you can focus on running your business while your online presence stays active and growing." },
  { icon: <IconHeadphones />, title: "Dedicated Social Media Management", desc: "We take care of your content, posting schedule, and performance so you can focus on growing your business." },
  { icon: <IconLayers />, title: "Consistent Brand Presence", desc: "We keep your brand active with regular, high-quality content that helps you stay visible and connected with your audience." },
];

const FAQS = [
  { q: "How long does it take to see results from social media marketing?",     a: "Social media growth doesn't happen overnight. Anyone promising instant results is either guessing or faking it. Real growth is slow at first — but once it starts building, it becomes consistent. That's how strong brands are built." },
  { q: "Do you manage all social media platforms?",                             a: "We focus on platforms that actually make sense for your business — Instagram, Facebook, LinkedIn. We don't recommend trying to be everywhere. Doing a few things properly is better than doing everything poorly." },
  { q: "What does social media marketing include?",                             a: "It includes content creation, posting, page management, audience engagement, and ad management when needed. The exact scope depends on what your business needs." },
  { q: "Do you run paid ads as well?",                                          a: "Yes, when it makes sense. We handle paid social media marketing properly — right audience targeting, proper ad copy, testing different creatives, and tracking real results." },
  { q: "Why should I choose Social Theka over other agencies in Chandigarh?",  a: "There are a lot of digital marketing agencies out there. But most businesses don't just want services — they want results that actually make a difference. We focus on real growth, keep things simple and transparent, and work more like a team than a vendor." },
];

export default function SocialMediaServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="sms-page">

      {/* ── HERO ── */}
      <section className="sms-hero">
        <div className="sms-hero__inner">
          <div className="sms-hero__left">
            <div className="sms-hero__badge">
              <span className="sms-hero__badge-dot" />
              SOCIAL MEDIA MARKETING - CHANDIGARH
            </div>
            <h1 className="sms-hero__title">
              Social Media Marketing<br/>
              <span className="sms-hero__title-accent">That Actually Works</span>
            </h1>
            <p className="sms-hero__desc">
              Let us be real for a second. Social media today is not about posting nice designs or writing captions. People actually check your profile before they decide to trust you. They scroll, they judge, they compare… and then they decide. If your page looks inactive or random, they just move on.
            </p>
            <p className="sms-hero__desc">
              At Social Theka, we handle social media marketing in Chandigarh in a way that actually makes sense for real businesses. Not overcomplicated strategies. Not big promises. Just proper work that helps you stay visible, build trust, and slowly turn attention into customers.
            </p>
            <p className="sms-hero__desc">
              Whether it's Instagram, Facebook, or LinkedIn, we know how to show up the right way — with content that connects, consistency that builds trust, and ads that actually convert.
            </p>
          </div>

          <div className="sms-hero__right">
            <div className="sms-hero__card">
              <div className="sms-hero__card-icon"><IconInstagram /></div>
              <div className="sms-hero__card-content">
                <h3 className="sms-hero__card-title">Instagram</h3>
                <p className="sms-hero__card-subtitle">Reach & engagement</p>
              </div>
            </div>
            <div className="sms-hero__card">
              <div className="sms-hero__card-icon"><IconFacebook /></div>
              <div className="sms-hero__card-content">
                <h3 className="sms-hero__card-title">Facebook</h3>
                <p className="sms-hero__card-subtitle">Ads & local reach</p>
              </div>
            </div>
            <div className="sms-hero__card">
              <div className="sms-hero__card-icon"><IconLinkedin /></div>
              <div className="sms-hero__card-content">
                <h3 className="sms-hero__card-title">LinkedIn</h3>
                <p className="sms-hero__card-subtitle">B2B & professional</p>
              </div>
            </div>
            <div className="sms-hero__card">
              <div className="sms-hero__card-icon"><IconTarget /></div>
              <div className="sms-hero__card-content">
                <h3 className="sms-hero__card-title">Paid Ads</h3>
                <p className="sms-hero__card-subtitle">Targeted, not boosted</p>
              </div>
            </div>
            <div className="sms-hero__card">
              <div className="sms-hero__card-icon"><IconZap /></div>
              <div className="sms-hero__card-content">
                <h3 className="sms-hero__card-title">Content Strategy</h3>
                <p className="sms-hero__card-subtitle">Planned & consistent</p>
              </div>
            </div>
            <div className="sms-hero__card sms-hero__card--highlight">
              <div className="sms-hero__card-icon sms-hero__card-icon--highlight"><IconTrendingUp /></div>
              <div className="sms-hero__card-content">
                <h3 className="sms-hero__card-title">Real Growth</h3>
                <p className="sms-hero__card-subtitle">Not just activity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY MATTERS ── */}
      <section className="sms-performance">
        <div className="sms-performance__inner">
          <div className="sms-performance__header">
            <span className="sms-badge">Why Social Media Matters</span>
            <h2 className="sms-performance__title">More Than You Think</h2>
            <p className="sms-performance__subtitle">Most people don't directly call or buy anymore. They check your Instagram. Maybe your Facebook. If something feels off, they leave. That's where proper social media marketing comes in.</p>
          </div>
          <div className="sms-marquee-wrapper">
            <div className="sms-marquee-track">
              {[...WHY_MATTERS, ...WHY_MATTERS].map((item, i) => (
                <div key={i} className="sms-performance__card">
                  <div className="sms-performance__icon">{item.icon}</div>
                  <h3 className="sms-performance__card-title">{item.title}</h3>
                  <p className="sms-performance__card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="sms-platforms" id="platforms">
        <div className="sms-platforms__inner">
          <div className="sms-platforms__header">
            <span className="sms-badge">Platform Expertise</span>
            <h2 className="sms-platforms__title">Platforms We Focus On</h2>
            <p className="sms-platforms__subtitle">We don't believe in being active on every platform just for the sake of it. We focus on platforms that are a good fit for your business — based on where your audience is and what your goals are.</p>
          </div>
          <div className="sms-platforms__grid">
            {PLATFORMS.map((p, i) => (
              <div key={i} className="sms-platform-card">
                <div className="sms-platform-card__header">
                  <div className="sms-platform-card__icon">{p.icon}</div>
                  <h3 className="sms-platform-card__name">{p.name}</h3>
                </div>
                <p className="sms-platform-card__desc">{p.desc}</p>
                <div className="sms-platform-card__tags">
                  {p.tags.map(t => <span key={t} className="sms-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADS SECTION ── */}
      <section className="sms-conversion">
        <div className="sms-conversion__inner">
          <div className="sms-conversion__header">
            <span className="sms-badge">Paid Social Media</span>
            <h2 className="sms-conversion__title">Let's Talk About Ads (The Right Way)</h2>
            <p className="sms-conversion__subtitle">A lot of people think running ads is just clicking "boost post." It's not. That's actually how most budgets get wasted. We handle paid social media marketing properly.</p>
          </div>
          <div className="sms-conversion__grid">
            {ADS_POINTS.map(([title, desc], i) => (
              <div key={i} className="sms-conversion__card">
                <div className="sms-conversion__number">{String(i + 1).padStart(2, '0')}</div>
                <div className="sms-conversion__content">
                  <h3 className="sms-conversion__card-title">{title}</h3>
                  <p className="sms-conversion__card-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="sms-excellence">
        <div className="sms-excellence__inner">
          <div className="sms-excellence__header">
            <span className="sms-badge sms-badge--dark">What You Get With Us</span>
            <h2 className="sms-excellence__title">Full Social Media Support</h2>
            <p className="sms-excellence__subtitle">When you work with us, you're not just getting someone to "post content." You're getting complete end-to-end support.</p>
          </div>
          <div className="sms-excellence__grid">
            {WHAT_YOU_GET.map((item, i) => (
              <div key={i} className="sms-excellence__card">
                <div className="sms-excellence__icon">{item.icon}</div>
                <h3 className="sms-excellence__card-title">{item.title}</h3>
                <p className="sms-excellence__card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="sms-process">
        <div className="sms-process__inner">
          <div className="sms-process__header">
            <span className="sms-badge">How We Work</span>
            <h2 className="sms-process__title">No Complicated Process</h2>
            <p className="sms-process__subtitle">We keep things simple, but we don't take shortcuts.</p>
          </div>
          <div className="sms-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="sms-process__card">
                <div className="sms-process__number">{p.step}</div>
                <div className="sms-process__content">
                  <h3 className="sms-process__card-title">{p.title}</h3>
                  <p className="sms-process__card-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="sms-solutions">
        <div className="sms-solutions__inner">
          <div className="sms-solutions__header">
            <span className="sms-badge sms-badge--dark">Who This Is For</span>
            <h2 className="sms-solutions__title">Our Services Work Best If</h2>
          </div>
          <div className="sms-solutions__grid">
            {WHO_THIS_IS_FOR.map((item, i) => (
              <div key={i} className="sms-solutions__card">
                <div className="sms-solutions__icon"><IconCheck /></div>
                <div className="sms-solutions__content">
                  <p className="sms-solutions__card-desc">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="sms-services">
        <div className="sms-services__inner">
          <div className="sms-services__header">
            <span className="sms-badge">Why Choose Social Theka</span>
            <h2 className="sms-services__title">The Social Theka Advantage</h2>
          </div>
          <div className="sms-services__grid">
            {WHY_CHOOSE.map((s, i) => (
              <div key={i} className="sms-services__card">
                <div className="sms-services__icon">{s.icon}</div>
                <h3 className="sms-services__card-title">{s.title}</h3>
                <p className="sms-services__card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONEST / KEEP SIMPLE ── */}
      <section className="sms-honest">
        <div className="sms-honest__inner">
          <div className="sms-honest__header">
            <span className="sms-badge">A Small Thing Most People Ignore</span>
            <h2 className="sms-honest__title">Let's Keep It Simple</h2>
             <p className="sms-honest__note">Social media growth doesn't happen overnight. Anyone promising instant results is either guessing or faking it. Steady, consistent presence over time is what separates brands people remember from brands people scroll past.</p>
          </div>
          <div className="sms-honest__grid">
            {KEEP_SIMPLE.map((item, i) => (
              <div key={i} className="sms-honest__card">
                <div className="sms-honest__icon">{item.icon}</div>
                <div className="sms-honest__content">
                  <h3 className="sms-honest__card-title">{item.title}</h3>
                  <p className="sms-honest__card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sms-faq">
        <div className="sms-faq__inner">
          <div className="sms-faq__header">
            <span className="sms-badge">Common Inquiries</span>
            <h2 className="sms-faq__title">Frequently Asked Questions</h2>
          </div>
          <div className="sms-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`sms-faq__item ${openFaq === i ? "sms-faq__item--open" : ""}`}>
                <button className="sms-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="sms-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="sms-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="sms-cta">
        <div className="sms-cta__inner">
          <div className="sms-cta__content">
            <h2 className="sms-cta__title">
              Want to Start?
            </h2>
            <p className="sms-cta__subtitle">
              No pressure, no long process. Just reach out — we'll understand your business and suggest what actually makes sense.
            </p>
          </div>
          <a href="#contact" className="sms-btn-primary sms-btn-primary--lg">
            Start the Conversation <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}