import { useState } from "react";
import "./SocialMediaDelhi.css";
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
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/></svg>
);
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

const WHAT_PEOPLE_DECIDE = [
  { icon: <IconEye />,        title: "They Keep You Visible Without Being Pushy",     desc: "Done right, social media keeps your brand in front of people consistently — without feeling like you're forcing yourself on them." },
  { icon: <IconTrendingUp />, title: "It Builds Familiarity Over Time",               desc: "People rarely buy the first time they see you. Consistent presence builds the kind of familiarity that leads to trust." },
  { icon: <IconShield />,     title: "It Makes Your Business Look More Credible",      desc: "A well-maintained social media page signals that you're active, real, and worth paying attention to." },
  { icon: <IconUsers />,      title: "It Brings In People Already a Bit Convinced",   desc: "Eventually, social media brings in people who have already seen you enough times to feel comfortable reaching out." },
];

const WHAT_PEOPLE_NOTICE = [
  ["Consistency (or the Lack of It)",         "Whether your posts feel connected or all over the place — people notice even if they don't say it."],
  ["Clarity in What You're Offering",         "If someone can't understand what you do in a few seconds, they move on. Clarity keeps them."],
  ["How People Are Interacting With You",     "Comments, likes, responses — they all signal whether your brand feels real and active."],
  ["Whether Your Brand Feels Real or Forced", "Over-polished or clearly templated content feels fake. People can tell. And they leave."],
];

const HOW_WE_HANDLE = [
  { step: "01", title: "Understand Your Business",      desc: "Not just what you sell, but how you want to be seen. Because without that, everything else becomes random." },
  { step: "02", title: "Figure Out the Right Content",  desc: "Not trends for the sake of trends — something your audience would actually relate to." },
  { step: "03", title: "Consistency",                   desc: "Posting regularly. Keeping your page active. Making sure everything looks connected, not like different pieces put together without thought." },
  { step: "04", title: "Ads (When They Make Sense)",    desc: "Not by blindly boosting posts. We focus on targeting properly so your budget doesn't just disappear." },
  { step: "05", title: "Keep Adjusting",                desc: "Some things work better than others. That's normal. The idea is to improve, not repeat." },
];

const PLATFORMS = [
  { icon: <IconInstagram />, title: "Instagram",  desc: "Works well for visibility and engagement. Best for brands that have something visual to show — products, services, people, or process." },
  { icon: <IconFacebook />,  title: "Facebook",   desc: "Still strong for ads and local reach. Especially useful for businesses targeting a slightly older or broader Delhi audience." },
  { icon: <IconLinkedin />,  title: "LinkedIn",   desc: "Useful if your audience is more professional or B2B. Corporate services, consultants, agencies — LinkedIn makes sense here." },
];

const WHY_STAY = [
  ["You Know What's Being Done",      "No jargon, no confusion. You understand what's happening with your social media at all times."],
  ["You See the Direction",           "There's a clear path being followed — not random posts or reactive content without purpose."],
  ["Over Time, You Notice the Difference", "Real growth feels slow at the start. Then it picks up. That's exactly how it works."],
];

const WHO_THIS_WORKS_FOR = [
  "Your page exists but isn't doing much",
  "You don't have time to manage content regularly",
  "You want leads but don't know where to start",
  "Your posts feel random or disconnected",
  "You want your brand to look more put-together online",
];

const SIMPLE_NEEDS = [
  ["Content That Makes Sense",   "Not random posts — content that reflects your brand and speaks to the right audience."],
  ["Consistency",                "Showing up regularly. Not every hour, but enough to stay relevant and visible."],
  ["The Right Audience",         "Reaching people who are actually likely to care about what you offer."],
  ["Someone Handling It Properly", "So you can focus on running your business while your online presence stays active."],
];

const FAQS = [
  { q: "How long does it take to see results from social media marketing?",   a: "Social media takes time. Not forever, but definitely not overnight. Real growth feels slow in the beginning. Then it starts picking up. Anyone promising instant results is either experimenting or overselling." },
  { q: "Do you manage all social media platforms?",                           a: "We focus on platforms that actually make sense for your business — Instagram, Facebook, LinkedIn. We don't recommend trying to be everywhere. Doing a few things properly is better than doing everything poorly." },
  { q: "What does social media marketing include?",                           a: "It includes content creation, posting, page management, audience engagement, and ad management when needed. The exact scope depends on what your business needs." },
  { q: "Do you run paid ads as well?",                                        a: "Yes, when it makes sense. We don't boost posts blindly. We focus on targeting properly so your budget is used with intention — not just to generate impressions." },
  { q: "Why should I choose Social Theka over other agencies in Delhi?",      a: "Most businesses don't switch agencies because of pricing. They switch because things feel unclear. At Social Theka, you know what's being done, you see the direction, and over time, you notice the difference. No big claims. No unnecessary complexity." },
];

export default function SocialMediaDelhi() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <ServiceLayout>
    <div className="smd-page">

      {/* ── HERO ── */}
      <section className="smd-hero">
        <div className="smd-hero__inner">
          <div className="smd-hero__left">
            <h1 className="smd-hero__title">Social Media Marketing Agency in Delhi</h1>
            <p className="smd-hero__tagline">"Make Your Business Stand Out Where Everyone's Scrolling."</p>
            <p className="smd-hero__sub">People scroll. A lot. Morning, lunch break, late at night — Instagram, Facebook, even LinkedIn. It's become a habit. And somewhere in between all that scrolling, they come across businesses like yours.</p>
            <p className="smd-hero__sub">Now here's the real question: do they stop, or do they just keep going? Because most brands get ignored. Not because they're bad. Just because nothing about them stands out. And that usually comes down to how their social media looks and feels.</p>
            <p className="smd-hero__sub">At Social Theka, we don't treat social media like a checklist. It's your brand's everyday presence — something people keep seeing, slowly forming an opinion about. No big claims here. Just proper work done consistently so your business starts getting noticed for the right reasons.</p>
            <div className="smd-hero__ctas">
              <a href="#contact" className="smd-btn-primary">Get Started <IconArrow /></a>
              <a href="#services" className="smd-btn-outline">How We Work</a>
            </div>
            <div className="smd-hero__stats">
              <div className="smd-hero__stat">
                <span className="smd-hero__stat-val">3</span>
                <span className="smd-hero__stat-label">Key Platforms</span>
              </div>
              <div className="smd-hero__stat-divider" />
              <div className="smd-hero__stat">
                <span className="smd-hero__stat-val">24/7</span>
                <span className="smd-hero__stat-label">Brand Presence</span>
              </div>
              <div className="smd-hero__stat-divider" />
              <div className="smd-hero__stat">
                <span className="smd-hero__stat-val">Real</span>
                <span className="smd-hero__stat-label">Steady Growth</span>
              </div>
            </div>
          </div>
          <div className="smd-hero__right">
            <div className="smd-hero__cards">
              <div className="smd-hero__card">
                <div className="smd-hero__card-icon"><IconInstagram /></div>
                <div><div className="smd-hero__card-name">Instagram</div><div className="smd-hero__card-desc">Visibility & engagement</div></div>
              </div>
              <div className="smd-hero__card">
                <div className="smd-hero__card-icon"><IconFacebook /></div>
                <div><div className="smd-hero__card-name">Facebook</div><div className="smd-hero__card-desc">Ads & local reach</div></div>
              </div>
              <div className="smd-hero__card">
                <div className="smd-hero__card-icon"><IconLinkedin /></div>
                <div><div className="smd-hero__card-name">LinkedIn</div><div className="smd-hero__card-desc">B2B & professional</div></div>
              </div>
              <div className="smd-hero__card">
                <div className="smd-hero__card-icon"><IconTarget /></div>
                <div><div className="smd-hero__card-name">Targeted Ads</div><div className="smd-hero__card-desc">Budget with intention</div></div>
              </div>
              <div className="smd-hero__card">
                <div className="smd-hero__card-icon"><IconZap /></div>
                <div><div className="smd-hero__card-name">Content Strategy</div><div className="smd-hero__card-desc">Consistent & relevant</div></div>
              </div>
              <div className="smd-hero__card smd-hero__card--highlight">
                <div className="smd-hero__card-icon"><IconTrendingUp /></div>
                <div><div className="smd-hero__card-name">Steady Growth</div><div className="smd-hero__card-desc">Not rushed, not random</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW PEOPLE DECIDE ── */}
      <section className="smd-section smd-section--gray">
        <div className="smd-section__inner">
          <div className="smd-section__head">
            <h2 className="smd-section__title">The Way People Actually Decide Today</h2>
            <p className="smd-section__sub">Here's something most businesses don't fully realize. People don't trust instantly anymore. Before they message you or even think about working with you, they check your social media. Not deeply, not analytically — but just enough to get a feel. They scroll a bit, look at a few posts, notice if you're active, see if others are engaging. And within seconds, they decide if you feel "reliable" or not.</p>
            <p className="smd-section__sub">That's why social media marketing services in Delhi are not just about staying active. It's about how your brand comes across in those few seconds. Done right, social media quietly does a lot for you:</p>
          </div>
          <div className="smd-why__grid">
            {WHAT_PEOPLE_DECIDE.map((item, i) => (
              <div key={i} className="smd-why-card">
                <div className="smd-why-card__icon">{item.icon}</div>
                <h3 className="smd-why-card__title">{item.title}</h3>
                <p className="smd-why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="smd-section__note">At Social Theka, that's the focus. No noise. No unnecessary growth hacks. Just making sure your brand feels right when someone lands on your page.</p>
        </div>
      </section>

      {/* ── WHAT PEOPLE NOTICE ── */}
      <section className="smd-trust-section">
        <div className="smd-trust__inner">
          <div className="smd-trust__left">
            <h2 className="smd-trust__title">What People Notice (Even If They Don't Say It)</h2>
            <p className="smd-trust__sub">Most users won't tell you what they think about your page. But they notice small things. Like whether your posts feel connected or all over the place. Whether your last post was recent… or weeks ago. Whether your content looks like it belongs to one brand or five different ones.</p>
            <p className="smd-trust__sub">It's subtle, but it matters. And if something feels off, they don't stick around. That's why social media marketing in Delhi isn't about doing more — it's about doing things properly.</p>
            <p className="smd-trust__sub">At Social Theka, we focus on making your page feel steady. Not overdone. Not confusing. Just clear enough for someone to understand and trust.</p>
          </div>
          <div className="smd-trust__right">
            {WHAT_PEOPLE_NOTICE.map(([title, desc], i) => (
              <div key={i} className="smd-trust-card">
                <div className="smd-trust-card__title">{title}</div>
                <div className="smd-trust-card__desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE HANDLE THINGS ── */}
      <section className="smd-section smd-section--white" id="services">
        <div className="smd-section__inner">
          <div className="smd-section__head">
            <h2 className="smd-section__title">How We Actually Handle Things</h2>
            <p className="smd-section__sub">We don't follow some complicated system with big names. It's much simpler than that — but done properly.</p>
          </div>
          <div className="smd-process__grid">
            {HOW_WE_HANDLE.map((p, i) => (
              <div key={i} className="smd-process-card">
                <div className="smd-process-card__step">{p.step}</div>
                <div>
                  <div className="smd-process-card__title">{p.title}</div>
                  <div className="smd-process-card__desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="smd-section__note">That's how we approach social media marketing services in Delhi: no noise, just steady progress.</p>
        </div>
      </section>

      {/* ── WORKING WITH US ── */}
      <section className="smd-section smd-section--gray">
        <div className="smd-section__inner smd-section__inner--narrow">
          <div className="smd-section__head">
            <h2 className="smd-section__title">What It Feels Like Working With Social Theka</h2>
            <p className="smd-section__sub">Honestly, it shouldn't feel complicated. You shouldn't have to chase your own marketing team or wonder what's happening. When you work with Social Theka, things are kept straightforward.</p>
            <p className="smd-section__sub">Your content starts making more sense. Your page looks more active. There's a clear direction. You're not just "posting to stay visible" — you're building something that actually represents your brand properly.</p>
            <p className="smd-section__sub">We don't over-polish content to the point where it feels fake. At the same time, we don't keep it careless. It's somewhere in between — clean, relatable, and consistent. That balance is what most businesses struggle with. And that's where we come in.</p>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="smd-section smd-section--white">
        <div className="smd-section__inner">
          <div className="smd-section__head">
            <h2 className="smd-section__title">About Platforms (Because You Don't Need All of Them)</h2>
            <p className="smd-section__sub">A common mistake? Trying to be everywhere. Instagram, Facebook, LinkedIn — posting everywhere but not really doing anything properly. That usually leads to burnout and poor results. At Social Theka, we focus on platforms that actually make sense for your business.</p>
          </div>
          <div className="smd-why__grid smd-why__grid--3">
            {PLATFORMS.map((p, i) => (
              <div key={i} className="smd-why-card">
                <div className="smd-why-card__icon">{p.icon}</div>
                <h3 className="smd-why-card__title">{p.title}</h3>
                <p className="smd-why-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADS ── */}
      <section className="smd-trust-section">
        <div className="smd-trust__inner smd-trust__inner--centered">
          <h2 className="smd-trust__title">Ads — Only When They Make Sense</h2>
          <p className="smd-trust__sub">A lot of businesses think ads are a shortcut. Sometimes they are. Sometimes they're just wasted money. It depends on how they're done. Boosting posts without thinking? That's where budgets disappear.</p>
          <p className="smd-trust__sub">When we run ads at Social Theka, it's done with a bit more intention — who you're targeting, what you're showing, and what action you want. Nothing fancy. Just done right.</p>
          <div className="smd-ads__grid">
            {[
              ["Who You're Targeting",   "We don't blast ads at everyone. We identify the right audience — by location, interest, and intent."],
              ["What You're Showing",    "The creative matters. We make sure what you're showing actually matches what the audience cares about."],
              ["What Action You Want",   "Every ad needs a clear goal. Click, call, form fill, visit. Without a clear action, ads just burn money."],
            ].map(([title, desc], i) => (
              <div key={i} className="smd-ads-card">
                <div className="smd-ads-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="smd-ads-card__title">{title}</div>
                  <div className="smd-ads-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PEOPLE STAY ── */}
      <section className="smd-section smd-section--white">
        <div className="smd-section__inner smd-section__inner--narrow">
          <div className="smd-section__head">
            <h2 className="smd-section__title">Why People Stick With Social Theka</h2>
            <p className="smd-section__sub">Most businesses don't switch agencies because of pricing. They switch because things feel unclear. Too many reports, too many terms, but no real understanding of what's happening. We keep things simpler than that.</p>
          </div>
          <div className="smd-pain__grid">
            {WHY_STAY.map(([title, desc], i) => (
              <div key={i} className="smd-pain-card">
                <div className="smd-pain-card__icon"><IconCheck /></div>
                <div>
                  <div className="smd-pain-card__title">{title}</div>
                  <div className="smd-pain-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="smd-section__note">No big claims. No unnecessary complexity. That's one of the reasons businesses looking for the best social media marketing services in Delhi end up staying with us.</p>
        </div>
      </section>

      {/* ── WHO THIS WORKS FOR ── */}
      <section className="smd-section smd-section--gray">
        <div className="smd-section__inner">
          <div className="smd-section__head">
            <h2 className="smd-section__title">Who This Actually Works For</h2>
            <p className="smd-section__sub">This usually works well if:</p>
          </div>
          <div className="smd-whois__grid">
            {WHO_THIS_WORKS_FOR.map((item, i) => (
              <div key={i} className="smd-whois-card">
                <div className="smd-whois-card__icon"><IconCheck /></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="smd-section__note">If that sounds familiar, you're not the only one. Most businesses reach this point at some stage.</p>
        </div>
      </section>

      {/* ── HONEST THING ── */}
      <section className="smd-section smd-section--white">
        <div className="smd-section__inner smd-section__inner--narrow">
          <div className="smd-section__head">
            <h2 className="smd-section__title">One Thing Worth Saying Clearly</h2>
          </div>
          <div className="smd-honest__grid">
            {[
              ["Social Media Takes Time",          "Not forever — but definitely not overnight. Anyone promising instant results is either experimenting or overselling."],
              ["Real Growth Feels Slow at First",  "Then it starts picking up. That's normal. That's also how we approach social media marketing in Delhi: steady, not rushed."],
              ["Consistency Is What Makes It Work", "Showing up regularly, over time, is what builds the kind of trust and familiarity that eventually turns into business."],
            ].map(([title, desc], i) => (
              <div key={i} className="smd-honest-card">
                <div className="smd-honest-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="smd-honest-card__title">{title}</div>
                  <div className="smd-honest-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEEPING IT SIMPLE ── */}
      <section className="smd-section smd-section--gray">
        <div className="smd-section__inner">
          <div className="smd-section__head">
            <h2 className="smd-section__title">Keeping It Simple (Because It Really Is)</h2>
            <p className="smd-section__sub">You don't need ten strategies. You need:</p>
          </div>
          <div className="smd-simple__grid">
            {SIMPLE_NEEDS.map(([title, desc], i) => (
              <div key={i} className="smd-simple-card">
                <div className="smd-simple-card__icon"><IconCheck /></div>
                <div>
                  <div className="smd-simple-card__title">{title}</div>
                  <div className="smd-simple-card__desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="smd-section__note">That's it. And that's exactly what we focus on at Social Theka.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="smd-section smd-section--white">
        <div className="smd-section__inner smd-section__inner--narrow">
          <div className="smd-section__head">
            <h2 className="smd-section__title">Frequently Asked Questions</h2>
          </div>
          <div className="smd-faq__list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`smd-faq__item ${openFaq === i ? "smd-faq__item--open" : ""}`}>
                <button className="smd-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="smd-faq__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="smd-faq__a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="smd-cta-banner">
        <div className="smd-cta-banner__inner">
          <h2 className="smd-cta-banner__title">If You're Thinking About Starting</h2>
          <p className="smd-cta-banner__sub">
            No pressure. You don't need to figure everything out right now. Just reach out to Social Theka, have a conversation, and we'll see what actually fits your business. If you've been looking for the best social media marketing services in Delhi that feel real, not overcomplicated — you're already closer than you think.
          </p>
          <a href="#contact" className="smd-btn-primary smd-btn-primary--lg">
            Start the Conversation <IconArrow />
          </a>
        </div>
      </section>

    </div>
    </ServiceLayout>
  );
}
