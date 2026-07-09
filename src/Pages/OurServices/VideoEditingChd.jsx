/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./VideoEditingChd.css";
import ServiceLayout from "../../Component/ServiceLayout";
import heroVideo from "../../assets/SocialThekaVideo.mp4";
import { gsap } from "gsap";

// Software/Platform Icons
const IconPremiere = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.9"/>
    <text x="12" y="16" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Pr</text>
  </svg>
);
const IconAfterEffects = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" opacity="0.9"/>
    <text x="12" y="16" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Ae</text>
  </svg>
);
const IconPlay = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="8 5 19 12 8 19 8 5" fill="currentColor"/>
  </svg>
);

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
const IconFacebook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconLinkedin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconCamera = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);
const IconFileText = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconPlane = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);
const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const IconGraduationCap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconCoffee = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const IconScissors = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);
const IconHammer = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/>
    <path d="M17.64 15 22 10.64"/>
    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>
  </svg>
);
const IconScale = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="m8 9-4 6.5c0 2.21 1.79 4 4 4s4-1.79 4-4L8 9z"/>
    <path d="m16 9 4 6.5c0 2.21-1.79 4-4 4s-4-1.79-4-4L16 9z"/>
  </svg>
);
const IconDumbbell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6.5 6.5 11 11"/>
    <path d="m21 21-1-1"/>
    <path d="m3 3 1 1"/>
    <path d="m18 22 4-4"/>
    <path d="m2 6 4-4"/>
    <path d="m3 10 7-7"/>
    <path d="m14 21 7-7"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
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
  { icon: <IconShoppingBag />, title: "UGC Style Videos",       desc: "We edit authentic user-generated content that feels natural, builds trust, and helps brands improve engagement and conversions across social media." },
  { icon: <IconShoppingBag />, title: "Podcast Videos",       desc: "We edit podcast episodes into engaging long-form and short-form content with clean cuts, captions, audio enhancement, and branded visuals to keep viewers engaged." },
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
  { icon: <IconVideo />, label: "Video planning" },
  { icon: <IconFileText />, label: "Script ideas" },
  { icon: <IconCamera />, label: "Shoot concepts" },
  { icon: <IconInstagram />, label: "Reel ideas" },
  { icon: <IconShoppingBag />, label: "Product shoot direction" },
  { icon: <IconBuilding />, label: "Corporate video planning" },
  { icon: <IconFilm />, label: "Final editing" },
  { icon: <IconZap />, label: "Social media formatting" },
];

const WHY_BETTER_CONTENT = [
  ["Chandigarh Has a Smart Audience",   "People notice presentation. People always look for social media for several needs such as restaurant, dentist, interior designer etc. Your videos become the first impression of your business."],
  ["A Badly Edited Video Hurts Your Brand", "A badly edited video can make a good brand look average. A well-edited video can make a small brand look more professional and trustworthy."],
  ["It Is About Brand Image",           "This is why investing in good video editing is not just about design. It is about brand image."],
];

const SOCIAL_MEDIA_FORMATS = [
  { icon: <IconInstagram />, label: "Instagram Reels" },
  { icon: <IconFacebook />, label: "Facebook videos" },
  { icon: <IconYoutube />, label: "YouTube Shorts" },
  { icon: <IconLinkedin />, label: "LinkedIn videos" },
  { icon: <IconZap />, label: "Ad creatives" },
  { icon: <IconGlobe />, label: "Website videos" },
  { icon: <IconStar />, label: "Brand campaigns" },
  { icon: <IconCalendar />, label: "Festival videos" },
  { icon: <IconUsers />, label: "Client testimonials" },
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
  { icon: <IconHome />, label: "Real estate brands" },
  { icon: <IconPlane />, label: "Immigration consultants" },
  { icon: <IconHeart />, label: "Dental clinics" },
  { icon: <IconGraduationCap />, label: "Educational institutes" },
  { icon: <IconCoffee />, label: "Restaurants" },
  { icon: <IconCoffee />, label: "Cafés" },
  { icon: <IconScissors />, label: "Salons" },
  { icon: <IconStar />, label: "Beauty brands" },
  { icon: <IconDumbbell />, label: "Gyms" },
  { icon: <IconTarget />, label: "Fitness coaches" },
  { icon: <IconHammer />, label: "Interior designers" },
  { icon: <IconScale />, label: "Law firms" },
  { icon: <IconShoppingBag />, label: "E-commerce brands" },
  { icon: <IconHeart />, label: "Doctors" },
  { icon: <IconBuilding />, label: "Healthcare clinics" },
  { icon: <IconBriefcase />, label: "Corporate companies" },
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
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const statsRef = useRef(null);
  const ctasRef = useRef(null);
  const glowRef = useRef(null);
  
  // Detect mobile
  const isMobile = () => window.innerWidth <= 768;
  
  // Zoom Back Effect - Video starts VERY big then zooms back
  useEffect(() => {
    if (isMobile()) {
      // Skip animation on mobile
      gsap.set([badgeRef.current, titleRef.current, descRef.current, statsRef.current, ctasRef.current, videoContainerRef.current], {
        opacity: 1,
        y: 0,
        x: 0
      });
      return;
    }
    
    // Set initial state - video VERY zoomed in (full screen feel)
    gsap.set(videoContainerRef.current, {
      scale: 3.5,  // Much bigger for full screen effect
      opacity: 1
    });
    
    gsap.set([badgeRef.current, titleRef.current, descRef.current, ctasRef.current], {
      opacity: 0,
      x: -60  // Start from left side
    });
    
    gsap.set(statsRef.current, {
      opacity: 0,
      x: -60
    });
    
    // Animation Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Stop continuous zoom animation
        if (videoRef.current) {
          videoRef.current.style.animation = 'none';
        }
      }
    });
    
    // Hold zoomed in (full screen feel)
    tl.to({}, { duration: 1.5 })
    
    // Slowly zoom back to normal size
    .to(videoContainerRef.current, {
      scale: 1,
      duration: 2.8,
      ease: 'power3.out'
    })
    
    // Content slides in from LEFT AFTER video settles
    .to(badgeRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '+=0.2')  // Start AFTER video animation completes
    
    .to(titleRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    
    .to(descRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    
    .to(statsRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    
    .to(ctasRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4');
    
    return () => {
      tl.kill();
    };
  }, []);
  
  // Scroll reveal animation for other sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vec-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.vec-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ServiceLayout>
    <div className="vec-page">
      {/* Background Elements */}
      <div className="vec-bg-pattern" />
      <div className="vec-bg-gradient" />

      {/* ── HERO ── */}
      <section className="vec-hero">
        {/* Floating Icons */}
        <div className="vec-float-icons">
          <div className="vec-float-icon vec-float-icon--1"><IconInstagram /></div>
          <div className="vec-float-icon vec-float-icon--2"><IconYoutube /></div>
          <div className="vec-float-icon vec-float-icon--3"><IconPremiere /></div>
          <div className="vec-float-icon vec-float-icon--4"><IconAfterEffects /></div>
        </div>
        
        <div className="vec-hero__inner">
          <div className="vec-hero__left">
            <div className="vec-hero__badge" ref={badgeRef}>
              <span className="vec-badge-dot" />
              VIDEO EDITING AGENCY - CHANDIGARH
            </div>
            <h1 className="vec-hero__title" ref={titleRef}>
              Transform Raw Footage Into
              <span className="vec-hero__title-accent"> Captivating Stories</span>
            </h1>
            <p className="vec-hero__desc" ref={descRef}>
              Professional video editing that turns your content into scroll-stopping visuals. From Instagram Reels to corporate videos — we craft narratives that engage, inspire, and convert.
            </p>
            <div className="vec-hero__stats-inline" ref={statsRef}>
              <div className="vec-stat-badge">
                <span className="vec-stat-value">7+</span>
                <span className="vec-stat-label">Video Types</span>
              </div>
              <div className="vec-stat-badge">
                <span className="vec-stat-value">5</span>
                <span className="vec-stat-label">Formats</span>
              </div>
              <div className="vec-stat-badge">
                <span className="vec-stat-value">16+</span>
                <span className="vec-stat-label">Industries</span>
              </div>
            </div>
            <div className="vec-hero__ctas" ref={ctasRef}>
              <Link to="/contact" className="vec-btn-primary">
                Start Your Project <IconArrow />
              </Link>
              <a href="#services" className="vec-btn-outline">
                View Services
              </a>
            </div>
          </div>
          
          <div className="vec-hero__right">
            <div 
              ref={videoContainerRef}
              className="vec-video-preview vec-video-preview--cinematic"
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            >
              <video 
                ref={videoRef}
                className="vec-video-preview__video"
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              
              {/* Glow effect */}
              <div ref={glowRef} className="vec-video-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY VIDEO EDITING IMPORTANT ── */}
      <section className="vec-section vec-section--light vec-animate">
        <div className="vec-section__inner">
          <div className="vec-section__header">
            <span className="vec-badge">Why It Matters</span>
            <h2 className="vec-section__title">Video Editing Transforms Your Business Presence</h2>
            <p className="vec-section__subtitle">When people scroll through their feeds they move fast. Good editing grabs attention, delivers your message clearly, and makes your brand memorable.</p>
          </div>
          <div className="vec-grid vec-grid--3">
            {WHY_IMPORTANT.map(([title, desc], i) => (
              <div key={i} className="vec-glass-card vec-animate">
                <div className="vec-glass-card__icon">
                  <IconCheck />
                </div>
                <h3 className="vec-glass-card__title">{title}</h3>
                <p className="vec-glass-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="vec-section vec-section--white vec-animate" id="services">
        <div className="vec-section__inner">
          <div className="vec-section__header">
            <span className="vec-badge">Our Services</span>
            <h2 className="vec-section__title">Comprehensive Video Editing Solutions</h2>
            <p className="vec-section__subtitle">From social media reels to corporate videos — we edit every type of content with precision and creativity.</p>
          </div>
          <div className="vec-grid vec-grid--services">
            {SERVICES.map((s, i) => (
              <div key={i} className="vec-service-card vec-animate">
                <div className="vec-service-card__icon-wrapper">
                  <div className="vec-service-card__icon">{s.icon}</div>
                </div>
                <h3 className="vec-service-card__title">{s.title}</h3>
                <p className="vec-service-card__desc">{s.desc}</p>
                <div className="vec-service-card__arrow">
                  <IconArrow />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL COMPANY ── */}
      <section className="vec-trust-section">
        <div className="vec-trust__inner">
          <div className="vec-trust__left">
            <span className="vec-badge" style={{marginBottom: "20px"}}>Why Choose Us</span>
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
          <div className="vec-section__header">
            <span className="vec-badge">Our Process</span>
            <h2 className="vec-section__title">Our Editing Style</h2>
            <p className="vec-section__subtitle">We like it when our videos are edited in a way. Not fancy, not too boring. Our main goal is to tell a story that makes sense — and to make the video feel natural and consistent with the brand.</p>
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
                  <div className="vec-prod-card__icon">{item.icon}</div>
                  <span className="vec-prod-card__text">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BETTER CONTENT ── */}
      <section className="vec-section vec-section--white vec-animate">
        <div className="vec-section__inner">
          <div className="vec-section__header">
            <span className="vec-badge">Why It Matters</span>
            <h2 className="vec-section__title">Why Chandigarh Businesses Need<br />Better Video Content</h2>
          </div>
          <div className="vec-grid vec-grid--3">
            {WHY_BETTER_CONTENT.map(([title, desc], i) => (
              <div key={i} className="vec-glass-card vec-animate">
                <div className="vec-glass-card__icon">
                  <IconCheck />
                </div>
                <h3 className="vec-glass-card__title">{title}</h3>
                <p className="vec-glass-card__desc">{desc}</p>
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
                <div key={i} className="vec-best-tag">
                  <span className="vec-best-tag__icon">{item.icon}</span>
                  <span className="vec-best-tag__label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ── */}
      <section className="vec-section vec-section--white">
        <div className="vec-section__inner">
          <div className="vec-section__header">
            <span className="vec-badge">Our Approach</span>
            <h2 className="vec-section__title">What Makes Social Theka Different?</h2>
            <p className="vec-section__subtitle">We are not just video editors. We are a marketing team. That means we look at your video from a business point of view. We ask simple but important questions:</p>
          </div>
          <div className="vec-questions__grid">
            {MARKETING_QUESTIONS.map((item, i) => (
              <div key={i} className="vec-question-card">
                <div className="vec-question-card__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="vec-question-card__text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="vec-section vec-section--gray">
        <div className="vec-section__inner">
          <div className="vec-section__header">
            <span className="vec-badge">How We Work</span>
            <h2 className="vec-section__title">Our Process</h2>
            <p className="vec-section__subtitle">We make things easy.</p>
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
          <div className="vec-section__header" style={{marginTop: "48px"}}>
            <h3 className="vec-section__subtitle" style={{fontSize: "18px", fontWeight: "700", color: "#0a0a0a"}}>We can provide videos in sizes, such as:</h3>
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
      <section className="vec-section vec-section--light vec-animate">
        <div className="vec-section__inner">
          <div className="vec-section__header">
            <span className="vec-badge">Industries</span>
            <h2 className="vec-section__title">Industries We Work With</h2>
            <p className="vec-section__subtitle">
              Social Theka works with diverse businesses across Chandigarh and surrounding areas. Each industry gets a tailored editing approach — not generic templates.
            </p>
          </div>
          <div className="vec-industries-grid">
            {INDUSTRIES.map((item, i) => (
              <div key={i} className="vec-industry-card vec-animate">
                <div className="vec-industry-card__icon">
                  {item.icon}
                </div>
                <span className="vec-industry-card__name">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="vec-section vec-section--gray">
        <div className="vec-section__inner">
          <div className="vec-section__header">
            <span className="vec-badge">Why Us</span>
            <h2 className="vec-section__title">Why Choose Social Theka?</h2>
            <p className="vec-section__subtitle">Choose Social Theka if you want videos that look professional but still feel real. Our goal is simple: we want to make video content easy for your business. You send us your footage. We help plan the shoot and then we turn it into videos that your audience can really watch and feel connected to.</p>
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
          <div className="vec-section__header">
            <span className="vec-badge">FAQ</span>
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
          <Link to="/contact" className="vec-btn-primary vec-btn-primary--lg">
            Start Your Project <IconArrow />
          </Link>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}

