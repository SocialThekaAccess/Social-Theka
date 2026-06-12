import { useState } from "react";
import "./VideoEditingDelhi.css";
import ServiceLayout from "../../Component/ServiceLayout";

const IconVideo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
);
const IconFilm = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
);
const IconInstagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const IconYoutube = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);
const IconBuilding = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const IconHome = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const WHY_VIDEO_MATTERS = [
  ["Get More People to Know Their Brand",     "Video content reaches more people than any other format — it is shared, saved, and replayed."],
  ["Engage With Them",                        "Videos hold attention longer. People engage more with video than with images or text posts."],
  ["Find Customers",                          "A clear video helps people understand what you offer and makes them more likely to reach out."],
  ["Build Trust",                             "Seeing a real person, product, or space on video builds far more trust than reading about it."],
  ["See Their Products or Services More Clearly", "Video shows things in action — details, features, and benefits that images and text cannot fully capture."],
];

const WHY_PROFESSIONAL = [
  ["Better Flow",           "A professionally edited video moves naturally from one moment to the next — no awkward cuts or dead moments."],
  ["Stronger Storytelling", "Every video needs a beginning, middle, and end. Professional editing shapes the story so it lands properly."],
  ["Clean Transitions",     "Smooth transitions keep viewers watching. Rough cuts break attention and feel cheap."],
  ["Improved Audio",        "Bad audio is one of the fastest ways to lose viewers. We clean the sound and balance the levels properly."],
  ["Brand Consistency",     "Colors, fonts, music, and style are kept consistent so every video feels like it belongs to your brand."],
  ["Platform-Friendly Output", "Each platform has different requirements. We deliver the right format, resolution, and aspect ratio every time."],
];

const SERVICES = [
  { icon: <IconInstagram />, title: "Social Media Video Editing",   desc: "Short videos are really important for marketing now. We work on Instagram Reels, Facebook videos, YouTube Shorts, LinkedIn videos, promotional stories and ad creatives. Every single platform is unique so we make sure to edit videos according to what each platform needs, who is watching and what we want to achieve." },
  { icon: <IconBuilding />,  title: "Corporate Video Editing",      desc: "Corporate videos really need to look neat and professional. We help businesses make videos that show what their company is about, videos that train people, and videos that help them talk to each other inside the company. We also make videos that introduce their brand and present what they do. These corporate videos are useful for employees, clients, partners, investors and customers." },
  { icon: <IconZap />,       title: "Promotional Video Editing",    desc: "People make promotional videos to get attention and make people interested. We do the editing for videos that launch products, promote services, make people know about brands and also videos for campaigns and events. A good promotional video can make your campaign seem serious and a company that people can trust." },
  { icon: <IconStar />,      title: "Event Video Editing",          desc: "Delhi has a lot of events like business meetings, exhibitions and conferences. There are also product launches, award functions, weddings and networking events that happen all year round. Our goal is to make sure the main parts of the event, the energy and the reason for the event are easy to see in the video." },
  { icon: <IconYoutube />,   title: "YouTube Video Editing",        desc: "Making videos for YouTube takes a lot of time and effort. We help people who make YouTube content and businesses with things like videos that teach people, podcasts, talking to people, daily videos, teaching videos and videos that show what a company is about. The main thing we want to do is make sure the video is nice to watch from beginning to end." },
  { icon: <IconHome />,      title: "Real Estate Video Editing",    desc: "Delhi's real estate market is competitive. A good property video can help a project stand out. We edit property walkthroughs, drone footage, luxury home tours, commercial property videos, and builder project videos. Clean visuals, proper pacing, and good music can make a property look more attractive and easier to understand." },
];

const PROCESS = [
  { step: "01", title: "Understanding the Objective",    desc: "Before editing starts, we understand your target audience, video purpose, platform, brand style, and expected result. This helps us edit with direction instead of simply cutting clips." },
  { step: "02", title: "Organising the Raw Footage",    desc: "We review the footage, pick the best clips, remove unnecessary parts, arrange sequences, and identify the strongest moments." },
  { step: "03", title: "Creative Editing",              desc: "This is where the video starts taking shape. We work on story flow, timing, scene arrangement, transitions, and visual consistency." },
  { step: "04", title: "Audio Enhancement",             desc: "Bad audio can spoil even a good video. We improve voice clarity, reduce background noise where possible, balance music, and make the sound cleaner." },
  { step: "05", title: "Graphics and Effects",          desc: "When needed, we add motion graphics, text overlays, call-to-action elements, brand colours, logo placements, and visual improvements." },
  { step: "06", title: "Final Delivery",                desc: "Every final video is prepared according to the platform where it will be used, whether it is Instagram, YouTube, LinkedIn, a website, presentation, or ad campaign." },
];

const INDUSTRIES = [
  "Healthcare brands", "Education brands", "Real estate businesses",
  "Restaurants & cafés", "Hotels", "Shops & online stores",
  "Lawyers & consultants", "Finance experts", "Corporate companies",
  "Startups", "Creators", "Service providers",
];

const WHY_DIFFERENT = [
  { icon: <IconTarget />,  title: "We Edit With a Marketing Purpose",    desc: "Our team understands digital marketing, social media behaviour, brand positioning, and audience attention. This helps us create videos that are useful for business, not just attractive on screen." },
  { icon: <IconZap />,     title: "We Understand Deadlines",              desc: "Many campaigns need quick delivery, especially for social media and ads. Our workflow is planned to keep the process smooth without losing quality." },
  { icon: <IconShield />,  title: "Every Brand Gets a Different Edit",    desc: "Every brand has a different tone, so we do not use the same editing style for everyone. We adjust the pace, music, graphics, text, and overall feel according to the brand." },
];

const FAQS = [
  { q: "How much do Video Editing Services in Delhi cost?",                    a: "The cost depends on video length, editing style, graphics, sound work, and project requirements." },
  { q: "How long does it take to edit a professional video?",                  a: "Simple videos may take a few days. Bigger videos with graphics, animations, and revisions may take more time." },
  { q: "Can you edit Instagram Reels and YouTube Shorts?",                     a: "Yes. We edit short videos for Instagram Reels, YouTube Shorts, Facebook, LinkedIn, and other platforms." },
  { q: "Why hire a Professional Video Editing Company in Delhi?",              a: "Professional editing improves video flow, sound, storytelling, brand presentation, and audience engagement." },
];

export default function VideoEditingDelhi() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="ved-page">

      {/* ── HERO ── */}
      <section className="ved-hero">
        <div className="ved-hero__inner">
          <div className="ved-hero__left">
            <h1 className="ved-hero__title">Video Editing Agency in Delhi – Turning Raw Footage into Stories That Connect</h1>
            <p className="ved-hero__sub">A good video is not made during filming. Most of the work starts after the camera stops. Today every brand is making content — reels, product videos, testimonials, ads, event videos, educational content and corporate films. Filming is only one part of the job. What makes a video average or professional usually comes down to editing.</p>
            <p className="ved-hero__sub">At Social Theka we help businesses turn footage into clear, engaging and polished video content. As a trusted video editing agency in Delhi, we work with startups, creators, real estate brands, healthcare businesses, restaurants, education institutes and service providers.</p>
            <div className="ved-hero__ctas">
              <a href="#contact" className="ved-btn-primary">Start Your Project <IconArrow /></a>
              <a href="#services" className="ved-btn-outline">View Services</a>
            </div>
            <div className="ved-hero__stats">
              <div className="ved-hero__stat">
                <span className="ved-hero__stat-val">6+</span>
                <span className="ved-hero__stat-label">Video Types</span>
              </div>
              <div className="ved-hero__stat-divider" />
              <div className="ved-hero__stat">
                <span className="ved-hero__stat-val">12+</span>
                <span className="ved-hero__stat-label">Industries Served</span>
              </div>
              <div className="ved-hero__stat-divider" />
              <div className="ved-hero__stat">
                <span className="ved-hero__stat-val">6</span>
                <span className="ved-hero__stat-label">Step Process</span>
              </div>
            </div>
          </div>
          <div className="ved-hero__right">
            <div className="ved-hero__cards">
              <div className="ved-hero__card">
                <div className="ved-hero__card-icon"><IconInstagram /></div>
                <div><div className="ved-hero__card-name">Reels & Shorts</div><div className="ved-hero__card-desc">Social media ready</div></div>
              </div>
              <div className="ved-hero__card">
                <div className="ved-hero__card-icon"><IconBuilding /></div>
                <div><div className="ved-hero__card-name">Corporate</div><div className="ved-hero__card-desc">Professional look</div></div>
              </div>
              <div className="ved-hero__card">
                <div className="ved-hero__card-icon"><IconZap /></div>
                <div><div className="ved-hero__card-name">Promotional</div><div className="ved-hero__card-desc">Campaigns & ads</div></div>
              </div>
              <div className="ved-hero__card">
                <div className="ved-hero__card-icon"><IconYoutube /></div>
                <div><div className="ved-hero__card-name">YouTube</div><div className="ved-hero__card-desc">Long form editing</div></div>
              </div>
              <div className="ved-hero__card">
                <div className="ved-hero__card-icon"><IconHome /></div>
                <div><div className="ved-hero__card-name">Real Estate</div><div className="ved-hero__card-desc">Walkthroughs & tours</div></div>
              </div>
              <div className="ved-hero__card ved-hero__card--highlight">
                <div className="ved-hero__card-icon"><IconFilm /></div>
                <div><div className="ved-hero__card-name">Full Production</div><div className="ved-hero__card-desc">Shoot to delivery</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY VIDEO MATTERS ── */}
      <section className="ved-section ved-section--white">
        <div className="ved-section__inner">
          <div className="ved-section__head ved-section__head--left">
            <h2 className="ved-section__title">Why Video Content Matters Today</h2>
            <p className="ved-section__sub ved-section__sub--left">People look at things differently now. When someone is browsing through Instagram, Facebook, LinkedIn, YouTube or a website — a video is what they notice first. Videos explain things quickly, show your product in action, present your service better, build trust and help people connect with your brand.</p>
            <p className="ved-section__sub ved-section__sub--left">Businesses in Delhi are using video marketing because it helps them:</p>
          </div>
          <div className="ved-pain__grid">
            {WHY_VIDEO_MATTERS.map(([title, desc], i) => (
              <div key={i} className="ved-pain-card">
                <div className="ved-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="ved-pain-card__title">{title}</div>
                  <div className="ved-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="ved-section__note">You won't get these results just by uploading any video. A poorly edited video can lose viewers in the first few seconds. Good editing is what keeps people watching.</p>
        </div>
      </section>

      {/* ── WHY PROFESSIONAL ── */}
      <section className="ved-trust-section">
        <div className="ved-trust__inner">
          <div className="ved-trust__left">
            <h2 className="ved-trust__title">Why Professional Video Editing Is Important</h2>
            <p className="ved-trust__sub">Many businesses think basic editing is enough. Yes, anyone can trim clips, add music, and place text on screen. But professional editing is different.</p>
            <p className="ved-trust__sub">It involves storytelling, timing, brand understanding, audience behaviour, and platform requirements. The aim is not just to join clips together. The aim is to create a video that says something clearly.</p>
            <p className="ved-trust__sub">As a Professional Video Editing Company in Delhi, Social Theka focuses on videos that look polished and also support your marketing goals.</p>
          </div>
          <div className="ved-trust__right">
            {WHY_PROFESSIONAL.map(([title, desc], i) => (
              <div key={i} className="ved-trust-card">
                <div className="ved-trust-card__title">{title}</div>
                <div className="ved-trust-card__desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="ved-section ved-section--white" id="services">
        <div className="ved-section__inner">
          <div className="ved-section__head">
            <h2 className="ved-section__title">Video Editing Services We Offer</h2>
            <p className="ved-section__sub">Every business has different needs. Some brands need daily reels, while others need corporate videos, event edits, or promotional films. Our Video Editing Services in Delhi cover different types of business content.</p>
          </div>
          <div className="ved-services__grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="ved-service-card">
                <div className="ved-service-card__icon">{s.icon}</div>
                <h3 className="ved-service-card__name">{s.title}</h3>
                <p className="ved-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DELHI NEEDS BETTER EDITING ── */}
      <section className="ved-section ved-section--gray">
        <div className="ved-section__inner">
          <div className="ved-section__head">
            <h2 className="ved-section__title">Why Delhi Businesses Need Better Editing</h2>
          </div>
          <div className="ved-about__grid">
            <div className="ved-about-card">
              <div className="ved-about-card__icon"><IconZap /></div>
              <h3 className="ved-about-card__title">Delhi Is Competitive — Stand Out or Get Ignored</h3>
              <p className="ved-about-card__desc">Delhi is a busy place. Every business has a lot of competition. Whether you have a restaurant in Connaught Place, a clinic in South Delhi, a store in Karol Bagh, a coaching institute in Laxmi Nagar or a business in the NCR areas — people see a lot of posts and ads every day. To stand out, the things you post need to look good and make sense to people.</p>
            </div>
            <div className="ved-about-card">
              <div className="ved-about-card__icon"><IconTarget /></div>
              <h3 className="ved-about-card__title">Good Editing Drives Real Business Results</h3>
              <p className="ved-about-card__desc">Good video editing helps businesses make people trust them, get more people interested, make their brand name well known and get sales. A well-made video makes a good first impression. It helps people understand what you are trying to say and do something about it — call you, book something, buy something, fill out a form or visit your website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="ved-section ved-section--white">
        <div className="ved-section__inner">
          <div className="ved-section__head">
            <h2 className="ved-section__title">Our Editing Process</h2>
            <p className="ved-section__sub">At Social Theka, we follow a simple and structured process for every project.</p>
          </div>
          <div className="ved-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="ved-process-card">
                <div className="ved-process-card__step">{p.step}</div>
                <div>
                  <div className="ved-process-card__title">{p.title}</div>
                  <div className="ved-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="ved-section ved-section--gray">
        <div className="ved-section__inner">
          <div className="ved-section__head">
            <h2 className="ved-section__title">Industries We Work With</h2>
            <p className="ved-section__sub">As one of the best video editing agencies in Delhi, we work with lots of industries.</p>
          </div>
          <div className="ved-tags ved-tags--industries">
            {INDUSTRIES.map((item, i) => (
              <span key={i} className="ved-tag">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DIFFERENT ── */}
      <section className="ved-section ved-section--white">
        <div className="ved-section__inner">
          <div className="ved-section__head">
            <h2 className="ved-section__title">What Makes Social Theka Different?</h2>
            <p className="ved-section__sub">There are many agencies offering editing work, but Social Theka focuses on more than just making a video look good. We edit videos with a marketing purpose.</p>
          </div>
          <div className="ved-why__grid">
            {WHY_DIFFERENT.map((item, i) => (
              <div key={i} className="ved-why-card">
                <div className="ved-why-card__icon">{item.icon}</div>
                <h3 className="ved-why-card__title">{item.title}</h3>
                <p className="ved-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO PRODUCTION ── */}
      <section className="ved-section ved-section--gray">
        <div className="ved-section__inner">
          <div className="ved-section__head">
            <h2 className="ved-section__title">Video Production and Editing Delhi</h2>
          </div>
          <div className="ved-about__grid">
            <div className="ved-about-card">
              <div className="ved-about-card__icon"><IconFilm /></div>
              <h3 className="ved-about-card__title">Everything Managed in One Place</h3>
              <p className="ved-about-card__desc">Many businesses like to work with one team for making and editing videos. Social Theka provides a video production and editing service in Delhi so clients can handle everything from one place. No back and forth between different vendors.</p>
            </div>
            <div className="ved-about-card">
              <div className="ved-about-card__icon"><IconVideo /></div>
              <h3 className="ved-about-card__title">From Planning to Final Delivery</h3>
              <p className="ved-about-card__desc">We can assist with planning videos, writing scripts, making storyboards, filming, editing, creating motion graphics and making the video perfect. When the same team does the filming and editing the final video looks better and is easier to follow — because the team knows what the video is about from start to finish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROWING DEMAND ── */}
      <section className="ved-section ved-section--white">
        <div className="ved-section__inner">
          <div className="ved-section__head">
            <h2 className="ved-section__title">Growing Demand for Video Marketing in Delhi</h2>
          </div>
          <div className="ved-demand__grid">
            {[
              ["Short Videos Are Easier to Consume",       "Customers now prefer watching over reading. Short videos deliver your message faster and hold attention better than any other format."],
              ["Product Videos Explain Better",            "Seeing a product in action answers questions before they are even asked — leading to more confident buying decisions."],
              ["Testimonial Videos Build More Trust",       "Real people talking about real experiences are far more convincing than any written review or static post."],
              ["Corporate Videos Look More Professional",  "A well-produced corporate video instantly elevates how your business is perceived by clients, partners, and investors."],
              ["Platforms Push Video Content Actively",    "Social media algorithms favour video — giving your brand more reach organically without increasing your ad spend."],
              ["Stronger Digital Presence for the Future", "Brands that invest in quality video today are building a stronger digital presence that compounds over time."],
            ].map(([title, desc], i) => (
              <div key={i} className="ved-demand-card">
                <div className="ved-demand-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="ved-demand-card__title">{title}</div>
                  <div className="ved-demand-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK WITH US ── */}
      <section className="ved-final-section">
        <div className="ved-final__inner">
          <div className="ved-final__badge">Work With Social Theka</div>
          <h2 className="ved-final__title">Turn Your Raw Footage Into Videos People Will Notice</h2>
          <p className="ved-final__sub">A good video helps your business get noticed, build trust and achieve results. Just having good footage is not enough. It needs to be edited, tell a clear story, have good sound, a strong pace and a clear message.</p>
          <div className="ved-final__cards">
            <div className="ved-final__card">
              <div className="ved-final__card-icon"><IconVideo /></div>
              <p>At Social Theka we mix creativity with marketing know-how to make videos that help businesses grow. We can help with social media reels, corporate videos, event highlights, YouTube content, promotional videos or full video production and editing services in Delhi.</p>
            </div>
            <div className="ved-final__card">
              <div className="ved-final__card-icon"><IconFilm /></div>
              <p>If you need a video editing agency in Delhi, professional video editing services in Delhi or a creative and professional video editing company in Delhi — we are here to turn your raw footage into videos that people will notice and remember. Social Theka offers Video Production and Editing Delhi services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ved-section ved-section--white">
        <div className="ved-section__inner ved-section__inner--narrow">
          <div className="ved-section__head">
            <h2 className="ved-section__title">FAQs</h2>
          </div>
          <div className="ved-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`ved-faq__item ${openFaq === i ? "ved-faq__item--open" : ""}`}>
                <button className="ved-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="ved-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="ved-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ved-cta-banner">
        <div className="ved-cta-banner__inner">
          <h2 className="ved-cta-banner__title">Ready to Make Videos That People Actually Watch?</h2>
          <p className="ved-cta-banner__sub">If you need a video editing agency in Delhi, Social Theka is here to help. Send us your footage and we will turn it into clean, professional videos that your audience will connect with.</p>
          <a href="#contact" className="ved-btn-primary ved-btn-primary--lg">Start Your Project <IconArrow /></a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
