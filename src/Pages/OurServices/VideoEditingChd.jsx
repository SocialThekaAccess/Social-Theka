import { useState } from "react";
import "./VideoEditingChd.css";
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
const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconShoppingBag = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);
const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
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

const WHY_IMPORTANT = [
  ["Improve Engagement on Social Media",    "A edited video gets rid of unwanted pauses, makes the video flow better, adds the right music, highlights important points and makes your message clearer."],
  ["Explain Your Service Clearly",          "Good editing helps explain your service in a way that people can understand quickly without confusion."],
  ["Make Your Brand Look Professional",     "Well-edited videos make even a small brand look more polished and trustworthy to potential customers."],
  ["Build Trust With Your Customers",       "Consistent and clean video content builds confidence in your brand before a customer even contacts you."],
  ["Increase the Number of Inquiries",      "A clear and engaging video gives people a reason to reach out, ask questions, and take action."],
  ["Create an Online Presence for Your Brand", "Regular video content keeps your brand active, visible, and relevant across all online platforms."],
];

const SERVICES = [
  { icon: <IconInstagram />, title: "Social Media Reels",     desc: "Reels are really good for getting to people. But reels needs to be short, sharp, and interesting. We make sure reels have clean cuts, captions for people to read. We also add music, transitions, and proper pacing. This way people view till the end." },
  { icon: <IconZap />,       title: "Promotional Videos",     desc: "If you have something, like a special offer or a new product or service a promotional video can help you show it off. We make sure the video is easy to understand and looks good. The main goal of the video is to get the message across so we keep the editing simple and focused on that." },
  { icon: <IconBuilding />,  title: "Corporate Videos",       desc: "Corporate videos need a clean and professional look. We edit company profiles, team videos, service introductions, office videos, and business presentations in a way that reflects your brand properly." },
  { icon: <IconHome />,      title: "Real Estate Videos",     desc: "Chandigarh and nearby areas have a strong real estate market. Property walkthroughs, site updates, drone shots, and project videos need careful editing. We make them look smooth, clean, and easy to follow." },
  { icon: <IconYoutube />,   title: "YouTube Videos",         desc: "For YouTube, editing needs a different approach. The video should not feel slow or boring. We work on cuts, audio, graphics, intro, outro, subtitles, and overall flow to keep the viewer engaged." },
  { icon: <IconStar />,      title: "Event Videos",           desc: "Events usually have long footage. We pick the best moments and turn them into short highlight videos that can be used on social media, websites, and presentations." },
  { icon: <IconShoppingBag />, title: "Product Videos",       desc: "Product videos should show the details clearly. We edit product videos for fashion brands, skincare brands, food businesses, gadgets, home décor brands, and more." },
];

const EDITING_STYLE = [
  ["Story That Makes Sense",        "Transitions that are easy to follow and a flow that keeps the viewer watching from start to finish."],
  ["Music That Fits",               "We pick music that matches the mood of your brand and the message you want to send."],
  ["Words That Are Easy to Read",   "Clean captions and text overlays that add value without being distracting or cluttered."],
  ["Colors That Look Good",         "Color correction and grading that makes your footage look polished and consistent with your brand."],
  ["A Beginning That Grabs Attention", "The first few seconds matter the most — we make sure they are strong enough to stop the scroll."],
  ["Platform-Specific Editing",     "Instagram, YouTube, Facebook, LinkedIn and websites all need a format and editing style that works just for that platform."],
];

const PRODUCTION_SERVICES = [
  "Video planning",
  "Script ideas",
  "Shoot concepts",
  "Reel ideas",
  "Product shoot direction",
  "Corporate video planning",
  "Final editing",
  "Social media formatting",
];

const WHY_BETTER_CONTENT = [
  ["Chandigarh Has a Smart Audience",   "People notice presentation. People always look for social media for several needs such as restaurant, dentist, interior designer etc. Your videos become the first impression of your business."],
  ["A Badly Edited Video Hurts Your Brand", "A badly edited video can make a good brand look average. A well-edited video can make a small brand look more professional and trustworthy."],
  ["It Is About Brand Image",           "This is why investing in good video editing is not just about design. It is about brand image."],
];

const SOCIAL_MEDIA_FORMATS = [
  "Instagram Reels",
  "Facebook videos",
  "YouTube Shorts",
  "LinkedIn videos",
  "Ad creatives",
  "Website videos",
  "Brand campaigns",
  "Festival videos",
  "Client testimonials",
];

const MARKETING_QUESTIONS = [
  "Will this video attract the right audience?",
  "Is the message clear?",
  "Is the first three seconds strong enough?",
  "Will people understand the service?",
  "Does it match the brand tone?",
  "Can this video help in getting inquiries?",
];

const PROCESS = [
  { step: "01", title: "Understand the Video",     desc: "First we figure out what the video is about — the goal, the platform, and the audience." },
  { step: "02", title: "Review the Footage",       desc: "We look at the footage and decide on the best order and which parts to keep." },
  { step: "03", title: "Edit",                     desc: "We work on Cuts, Music, Text, Colors, Sound, and Final touches." },
  { step: "04", title: "Share for Review",         desc: "Once we have a version we share it with you to review. If you need changes we make them." },
  { step: "05", title: "Final Delivery",           desc: "We deliver the final video in the size and format you need — 9:16, 1:1, 4:5, 16:9, or custom sizes." },
];

const VIDEO_FORMATS = [
  ["9:16", "For reels and shorts"],
  ["1:1",  "For square posts"],
  ["4:5",  "For Instagram feed"],
  ["16:9", "For YouTube and website"],
  ["Custom", "Custom sizes if needed"],
];

const INDUSTRIES = [
  "Real estate brands", "Immigration consultants", "Dental clinics", "Educational institutes",
  "Restaurants", "Cafés", "Salons", "Beauty brands", "Gyms", "Fitness coaches",
  "Interior designers", "Law firms", "E-commerce brands", "Doctors", "Healthcare clinics", "Corporate companies",
];

const WHY_CHOOSE = [
  ["Creative Content Focused on Media",  "Videos that are designed for the platform and the audience — not generic edits."],
  ["High-Quality Videos",               "Clean, polished output that makes your brand look professional and trustworthy."],
  ["On-Time Delivery",                  "We respect your deadlines and deliver on time without cutting corners on quality."],
  ["Editing That Matches Your Brand Style", "Every video is edited to feel like your brand — not a random template."],
  ["Help With Shoots and Ideas",        "We can assist with planning, shoot concepts, and creative direction when needed."],
  ["Videos in Different Formats",       "We deliver in all formats — 9:16, 1:1, 4:5, 16:9 — whatever your platform needs."],
];

const FAQS = [
  { q: "Do you provide video editing services for Instagram Reels?",   a: "Yes, Social Theka edits Instagram Reels with clean cuts, captions, music, transitions, and proper pacing so the content feels engaging, attractive and easy to watch." },
  { q: "Can you edit videos for Chandigarh-based businesses?",         a: "Yes, we work with businesses such as cafés, clinics, real estate brands, salons, coaching institutes, consultants, and other local businesses in and around Chandigarh." },
  { q: "Do you only edit videos or do you also help with shooting?",   a: "We provide both editing support and complete Video Production and Editing Chandigarh services, depending on what your brand needs." },
  { q: "Is Social Theka a good choice for regular social media video content?", a: "Yes, as a Video Editing Agency in Chandigarh, Social Theka helps brands create regular video content that looks professional and also matches their audience." },
];

export default function VideoEditingChd() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="vec-page">

      {/* ── HERO ── */}
      <section className="vec-hero">
        <div className="vec-hero__inner">
          <div className="vec-hero__left">
            <h1 className="vec-hero__title">Video Editing Agency in Chandigarh</h1>
            <p className="vec-hero__sub">
              Video is now a part of almost every business. This includes a café in Sector 35, a real estate brand in Mohali, a clinic in Chandigarh, a coaching institute, a fashion store or a startup. Every single one of these businesses needs video content to be seen online.
            </p>
            <p className="vec-hero__sub">
              Making a video is only half of what you need to do. The hard work really starts after you have shot the video. You can make a simple video look very professional with the cuts, music, captions, color correction, transitions and story flow. On the other hand even if you have good footage it can look average if the editing is not good. This is why brands today are looking for a Video Editing Agency in Chandigarh that knows about both creativity and marketing.
            </p>
            <p className="vec-hero__sub">
              At Social Theka we edit videos to make your video content look clean, natural and useful for your brand. We do not think it is a good idea to add effects to a video just to make it look busy. Every video should have a reason behind it. The video should tell your story, promote your service, build trust or bring attention to your business.
            </p>
            <div className="vec-hero__ctas">
              <a href="#contact" className="vec-btn-primary">Start Your Project <IconArrow /></a>
              <a href="#services" className="vec-btn-outline">View Services</a>
            </div>
            <div className="vec-hero__stats">
              <div className="vec-hero__stat">
                <span className="vec-hero__stat-val">7+</span>
                <span className="vec-hero__stat-label">Video Types</span>
              </div>
              <div className="vec-hero__stat-divider" />
              <div className="vec-hero__stat">
                <span className="vec-hero__stat-val">5</span>
                <span className="vec-hero__stat-label">Format Options</span>
              </div>
              <div className="vec-hero__stat-divider" />
              <div className="vec-hero__stat">
                <span className="vec-hero__stat-val">16+</span>
                <span className="vec-hero__stat-label">Industries Served</span>
              </div>
            </div>
          </div>
          <div className="vec-hero__right">
            <div className="vec-hero__cards">
              <div className="vec-hero__card">
                <div className="vec-hero__card-icon"><IconInstagram /></div>
                <div>
                  <div className="vec-hero__card-name">Reels</div>
                  <div className="vec-hero__card-desc">Short & engaging</div>
                </div>
              </div>
              <div className="vec-hero__card">
                <div className="vec-hero__card-icon"><IconYoutube /></div>
                <div>
                  <div className="vec-hero__card-name">YouTube</div>
                  <div className="vec-hero__card-desc">Full video editing</div>
                </div>
              </div>
              <div className="vec-hero__card">
                <div className="vec-hero__card-icon"><IconBuilding /></div>
                <div>
                  <div className="vec-hero__card-name">Corporate</div>
                  <div className="vec-hero__card-desc">Professional look</div>
                </div>
              </div>
              <div className="vec-hero__card">
                <div className="vec-hero__card-icon"><IconHome /></div>
                <div>
                  <div className="vec-hero__card-name">Real Estate</div>
                  <div className="vec-hero__card-desc">Walkthroughs & tours</div>
                </div>
              </div>
              <div className="vec-hero__card">
                <div className="vec-hero__card-icon"><IconShoppingBag /></div>
                <div>
                  <div className="vec-hero__card-name">Product Videos</div>
                  <div className="vec-hero__card-desc">Clear & detailed</div>
                </div>
              </div>
              <div className="vec-hero__card vec-hero__card--highlight">
                <div className="vec-hero__card-icon"><IconFilm /></div>
                <div>
                  <div className="vec-hero__card-name">All Formats</div>
                  <div className="vec-hero__card-desc">9:16, 1:1, 16:9 & more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY VIDEO EDITING IMPORTANT ── */}
      <section className="vec-section vec-section--white">
        <div className="vec-section__inner">
          <div className="vec-section__head vec-section__head--left">
            <h2 className="vec-section__title">Why Video Editing Is Important for Your Business</h2>
            <p className="vec-section__sub vec-section__sub--left">When people scroll through their feeds they move fast. If your video does not grab their attention they will skip it. That is where good editing really helps. For businesses in Chandigarh this is more important. The market is very active and competitive. Restaurants, salons, real estate companies and education brands are all trying to reach the people online. A clear and engaging video helps your brand stand out.</p>
            <p className="vec-section__sub vec-section__sub--left">Good video editing can help you do things:</p>
          </div>
          <div className="vec-pain__grid">
            {WHY_IMPORTANT.map(([title, desc], i) => (
              <div key={i} className="vec-pain-card">
                <div className="vec-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="vec-pain-card__title">{title}</div>
                  <div className="vec-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="vec-section vec-section--white" id="services">
        <div className="vec-section__inner">
          <div className="vec-section__head">
            <h2 className="vec-section__title">Video Editing Services in Chandigarh</h2>
            <p className="vec-section__sub">Social Theka offers all the Video Editing Services in Chandigarh for businesses that want better content for their social media, websites, ads, and brand promotions. We edit different types of videos according to your brand need and platform.</p>
          </div>
          <div className="vec-services__grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="vec-service-card">
                <div className="vec-service-card__icon">{s.icon}</div>
                <h3 className="vec-service-card__name">{s.title}</h3>
                <p className="vec-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL COMPANY ── */}
      <section className="vec-trust-section">
        <div className="vec-trust__inner">
          <div className="vec-trust__left">
            <h2 className="vec-trust__title">A Professional Video Editing Company Chandigarh Businesses Can Trust</h2>
            <p className="vec-trust__sub">Many businesses try to edit videos on mobile apps or basic software. That may work for personal content, but brand content needs a better finish.</p>
            <p className="vec-trust__sub">As a Professional Video Editing Company Chandigarh, Social Theka focuses on making videos that look neat, branded, and useful for marketing.</p>
          </div>
          <div className="vec-trust__right">
            <div className="vec-trust-card">
              <div className="vec-trust-card__icon"><IconFilm /></div>
              <h3 className="vec-trust-card__title">Brand Content Needs a Better Finish</h3>
              <p className="vec-trust-card__desc">Mobile apps and basic software can't give your brand the finish it deserves. We edit with purpose — every cut, color, and caption is intentional.</p>
            </div>
            <div className="vec-trust-card">
              <div className="vec-trust-card__icon"><IconTarget /></div>
              <h3 className="vec-trust-card__title">Every Business Gets a Different Edit</h3>
              <p className="vec-trust-card__desc">A reel for a café cannot look like a real estate walkthrough. A clinic video cannot be edited like a fashion reel. We first understand your brand, then edit in a style that truly suits it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITING STYLE ── */}
      <section className="vec-section vec-section--white">
        <div className="vec-section__inner">
          <div className="vec-section__head">
            <h2 className="vec-section__title">Our Editing Style</h2>
            <p className="vec-section__sub">We like it when our videos are edited in a way. Not fancy, not too boring. Our main goal is to tell a story that makes sense — and to make the video feel natural and consistent with the brand.</p>
          </div>
          <div className="vec-why__grid">
            {EDITING_STYLE.map(([title, desc], i) => (
              <div key={i} className="vec-why-card">
                <div className="vec-why-card__icon"><IconVideo /></div>
                <h3 className="vec-why-card__title">{title}</h3>
                <p className="vec-why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO PRODUCTION ── */}
      <section className="vec-section vec-section--gray">
        <div className="vec-section__inner">
          <div className="vec-best__grid">
            <div className="vec-best__left">
              <h2 className="vec-best__title">Video Production and Editing Chandigarh</h2>
              <p className="vec-best__sub">Some clients only need editing. Some need complete support from shooting to final delivery. Social Theka also provides Video Production and Editing Chandigarh services for brands that want everything managed in one place.</p>
              <p className="vec-best__sub">This makes the process easier for businesses. You do not have to coordinate with different people for shooting, editing, captions, and posting. Our team can handle the content in a planned way.</p>
              <p className="vec-best__sub">We can help with:</p>
            </div>
            <div className="vec-prod__right">
              {PRODUCTION_SERVICES.map((item, i) => (
                <div key={i} className="vec-prod-card">
                  <div className="vec-prod-card__icon"><IconCheck /></div>
                  <span className="vec-prod-card__text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BETTER CONTENT ── */}
      <section className="vec-section vec-section--white">
        <div className="vec-section__inner vec-section__inner--narrow">
          <div className="vec-section__head">
            <h2 className="vec-section__title">Why Chandigarh Businesses Need Better Video Content</h2>
          </div>
          <div className="vec-pain__grid">
            {WHY_BETTER_CONTENT.map(([title, desc], i) => (
              <div key={i} className="vec-pain-card">
                <div className="vec-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="vec-pain-card__title">{title}</div>
                  <div className="vec-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST AGENCY SOCIAL MEDIA ── */}
      <section className="vec-section vec-section--gray">
        <div className="vec-section__inner">
          <div className="vec-best__grid">
            <div className="vec-best__left">
              <h2 className="vec-best__title">Best Video Editing Agency Chandigarh for Social Media Content</h2>
              <p className="vec-best__sub">Social media content needs to be fast and creative. Trends change quickly. Formats change too. People don't have time to focus. Brands need videos that look new but still feel like them.</p>
              <p className="vec-best__sub">As one of the top video editing agencies in Chandigarh, Social Theka helps brands make videos that look good and are useful for everyday marketing. Every video we edit is made with the platform and audience in mind.</p>
              <p className="vec-best__sub">We make sure our videos are suitable for the platform and audience. We edit videos for:</p>
            </div>
            <div className="vec-best__right">
              {SOCIAL_MEDIA_FORMATS.map((item, i) => (
                <div key={i} className="vec-best-tag">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="vec-section vec-section--white">
        <div className="vec-section__inner">
          <div className="vec-section__head">
            <h2 className="vec-section__title">What Makes Social Theka Different?</h2>
            <p className="vec-section__sub">We are not just video editors. We are a marketing team. That means we look at your video from a business point of view. We ask simple but important questions:</p>
          </div>
          <div className="vec-questions__grid">
            {MARKETING_QUESTIONS.map((item, i) => (
              <div key={i} className="vec-question-card">
                <div className="vec-question-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="vec-question-card__text">{item}</div>
              </div>
            ))}
          </div>
          <p className="vec-section__note">This approach helps us create content that looks good and also supports your marketing goals.</p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="vec-section vec-section--gray">
        <div className="vec-section__inner">
          <div className="vec-section__head">
            <h2 className="vec-section__title">Our Process</h2>
            <p className="vec-section__sub">We make things easy.</p>
          </div>
          <div className="vec-process__grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="vec-process-card">
                <div className="vec-process-card__step">{p.step}</div>
                <div>
                  <div className="vec-process-card__title">{p.title}</div>
                  <div className="vec-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="vec-section__head" style={{marginTop: "32px", marginBottom: "20px"}}>
            <p className="vec-section__sub">We can provide videos in sizes, such as:</p>
          </div>
          <div className="vec-formats__grid">
            {VIDEO_FORMATS.map(([format, desc], i) => (
              <div key={i} className="vec-format-card">
                <div className="vec-format-card__ratio">{format}</div>
                <div className="vec-format-card__desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="vec-section vec-section--white">
        <div className="vec-section__inner">
          <div className="vec-section__head">
            <h2 className="vec-section__title">Industries We Work With</h2>
            <p className="vec-section__sub">Social Theka works with lots of businesses in Chandigarh and the surrounding areas. Social Theka knows that each business is unique. So Social Theka makes sure the video editing is right for the business — not just what is popular at the moment.</p>
          </div>
          <div className="vec-tags vec-tags--industries">
            {INDUSTRIES.map((item, i) => (
              <span key={i} className="vec-tag">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="vec-section vec-section--gray">
        <div className="vec-section__inner">
          <div className="vec-section__head">
            <h2 className="vec-section__title">Why Choose Social Theka?</h2>
            <p className="vec-section__sub">Choose Social Theka if you want videos that look professional but still feel real. Our goal is simple: we want to make video content easy for your business. You send us your footage. We help plan the shoot and then we turn it into videos that your audience can really watch and feel connected to.</p>
          </div>
          <div className="vec-why__grid">
            {WHY_CHOOSE.map(([title, desc], i) => (
              <div key={i} className="vec-why-card">
                <div className="vec-why-card__icon"><IconTarget /></div>
                <h3 className="vec-why-card__title">{title}</h3>
                <p className="vec-why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL WORDS ── */}
      <section className="vec-final-section">
        <div className="vec-final__inner">
          <div className="vec-final__badge">Final Words</div>
          <h2 className="vec-final__title">Video is the Future of Your Brand Online</h2>
          <p className="vec-final__sub">Video is really important for businesses these days. It is a way to show people what you do, build trust with them and stay active on the internet.</p>
          <div className="vec-final__cards">
            <div className="vec-final__card">
              <div className="vec-final__card-icon"><IconVideo /></div>
              <p>If you need a Video Editing Agency in Chandigarh, Social Theka can help you make videos that fit your brand and talk to your audience. We can help with all kinds of videos like reels, promotional videos, corporate films and big Video Production and Editing Chandigarh projects.</p>
            </div>
            <div className="vec-final__card">
              <div className="vec-final__card-icon"><IconFilm /></div>
              <p>With our Video Editing Services in Chandigarh your brand will look better, more active and people will remember it more online. Social Theka can take your footage and turn it into videos that people will actually want to watch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="vec-section vec-section--gray">
        <div className="vec-section__inner vec-section__inner--narrow">
          <div className="vec-section__head">
            <h2 className="vec-section__title">Frequently Asked Questions</h2>
          </div>
          <div className="vec-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`vec-faq__item ${openFaq === i ? "vec-faq__item--open" : ""}`}>
                <button className="vec-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="vec-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="vec-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vec-cta-banner">
        <div className="vec-cta-banner__inner">
          <h2 className="vec-cta-banner__title">Ready to Make Videos That People Actually Watch?</h2>
          <p className="vec-cta-banner__sub">
            If you need a Video Editing Agency in Chandigarh, Social Theka is here to help. Send us your footage and we will turn it into clean, professional videos that your audience will connect with.
          </p>
          <a href="#contact" className="vec-btn-primary vec-btn-primary--lg">
            Start Your Project <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
