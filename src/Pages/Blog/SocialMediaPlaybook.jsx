import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Component/Footer/Footer';
import './SocialMediaPlaybook.css';
import SocialMediaPlaybookImg from '../../assets/Best Seo Agency in Chandigarh.png';

const SocialMediaPlaybook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Social Media Marketing Company in Chandigarh: A Content Playbook</title>
        <meta
          name="description"
          content="Looking for a social media marketing company in Chandigarh? Build a content playbook with pillars, reels, community care, paid boosts and a simple monthly calendar."
        />
        <meta name="keywords" content="social media marketing company Chandigarh, content playbook, social media strategy, Instagram marketing, Facebook marketing" />
        <link rel="canonical" href="https://socialtheka.com/blog/social-media-playbook" />
      </Helmet>

      <article className="blog-article">
        {/* Hero Section: text only, cover image card sits below */}
        <section className="blog-hero blog-hero--clean">
          <div className="blog-hero__container">
            <div className="blog-hero__breadcrumb">
              <Link to="/" className="blog-hero__breadcrumb-link">Home</Link>
              <span className="blog-hero__breadcrumb-separator">/</span>
              <Link to="/blog" className="blog-hero__breadcrumb-link">Blog</Link>
              <span className="blog-hero__breadcrumb-separator">/</span>
              <span className="blog-hero__breadcrumb-current">Social Media Playbook</span>
            </div>

            <div className="blog-hero__content">
              <div className="blog-hero__tag-group">
                <span className="blog-hero__tag">Social Media</span>
                <span className="blog-hero__tag">Content Strategy</span>
              </div>

              <h1 className="blog-hero__title">
                Social Media Marketing Company in Chandigarh: A Content Playbook
              </h1>

              <p className="blog-hero__excerpt">
                Many local businesses post on social media the way people clean out a drawer: whenever there's time, with no particular plan and with mixed results.
              </p>

              <div className="blog-hero__meta">
                <div className="blog-hero__meta-item">
                  <svg className="blog-hero__meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>October 7, 2026</span>
                </div>
                <div className="blog-hero__meta-item">
                  <svg className="blog-hero__meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>13 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="blog-content">
          <div className="blog-content__container">

            {/* Cover image: full image, inside container, never cropped */}
            <figure className="blog-cover">
              <img
                className="blog-cover__img"
                src={SocialMediaPlaybookImg}
                alt="Social media marketing company in Chandigarh: a content playbook"
                loading="eager"
              />
            </figure>

            <div className="blog-content__wrapper">

              {/* Main Column */}
              <div className="blog-content__main">

                {/* Lead Paragraph */}
                <div className="blog-content__lead">
                  <p>
                    A festival graphic one day, a product photo the next, a random reel when someone remembers. The audience sees
                    noise, and the business sees little return. A content playbook fixes that. It is a simple, repeatable system
                    that tells you what to post, why, when and for whom.
                  </p>
                </div>

                {/* Content Sections */}
                <div className="blog-content__section" id="step-1">
                  <h2 className="blog-content__heading">Step 1: Decide What Social Media Is For</h2>
                  <p>
                    Not every business needs the same thing from social media. Choose a primary goal:
                  </p>
                  <ul className="blog-content__list">
                    <li><strong>Awareness.</strong> Helping new people discover you.</li>
                    <li><strong>Trust.</strong> Showing credibility through proof, people and process.</li>
                    <li><strong>Leads.</strong> Driving enquiries, calls, bookings or messages.</li>
                    <li><strong>Retention.</strong> Keeping existing customers engaged.</li>
                    <li><strong>Hiring or community.</strong> Attracting talent or building a loyal following.</li>
                  </ul>
                  <p className="blog-content__insight">
                    A restaurant may focus on awareness and footfall. A coaching institute may focus on trust and leads. A clinic
                    may focus on education and bookings. One goal guides everything else.
                  </p>
                </div>

                <div className="blog-content__section" id="step-2">
                  <h2 className="blog-content__heading">Step 2: Know Your Audience Locally</h2>
                  <p>
                    Chandigarh and the tricity have distinct audiences: students and young professionals, families, government employees,
                    business owners, tourists and visitors from nearby towns. Think about:
                  </p>
                  <ul className="blog-content__checklist">
                    <li>Who exactly buys from you?</li>
                    <li>Which platforms do they use daily?</li>
                    <li>What questions do they ask before buying?</li>
                    <li>What worries or objections slow their decision?</li>
                    <li>What language and tone feel natural to them?</li>
                  </ul>
                  <p className="blog-content__callout">
                    Mixing languages such as English, Hindi and Punjabi can feel authentic, but keep it consistent with your brand.
                  </p>
                </div>

                <div className="blog-content__section" id="step-3">
                  <h2 className="blog-content__heading">Step 3: Pick Your Platforms Deliberately</h2>
                  <p>
                    You don't need to be everywhere. Choose based on audience and goals.
                  </p>

                  <div className="blog-content__platforms">
                    <div className="blog-content__platform">
                      <div className="blog-content__platform-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </div>
                      <div className="blog-content__platform-content">
                        <h4 className="blog-content__platform-name">Instagram</h4>
                        <p>Strong for visual businesses, lifestyle brands, food, fashion, real estate, wellness and education. Reels extend reach, while stories maintain closeness.</p>
                      </div>
                    </div>

                    <div className="blog-content__platform">
                      <div className="blog-content__platform-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                      <div className="blog-content__platform-content">
                        <h4 className="blog-content__platform-name">Facebook</h4>
                        <p>Still useful for local community groups, events, older demographics and detailed business information.</p>
                      </div>
                    </div>

                    <div className="blog-content__platform">
                      <div className="blog-content__platform-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                      <div className="blog-content__platform-content">
                        <h4 className="blog-content__platform-name">LinkedIn</h4>
                        <p>Best for B2B firms, professional services, recruitment and thought leadership.</p>
                      </div>
                    </div>

                    <div className="blog-content__platform">
                      <div className="blog-content__platform-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                      </div>
                      <div className="blog-content__platform-content">
                        <h4 className="blog-content__platform-name">YouTube</h4>
                        <p>Suited to longer educational content, tutorials and testimonials, and valuable for search.</p>
                      </div>
                    </div>

                    <div className="blog-content__platform">
                      <div className="blog-content__platform-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="blog-content__platform-content">
                        <h4 className="blog-content__platform-name">WhatsApp</h4>
                        <p>Less about posting and more about conversation: catalogues, broadcasts and quick customer service.</p>
                      </div>
                    </div>
                  </div>

                  <p className="blog-content__highlight">
                    Pick one or two main platforms and do them well before adding more.
                  </p>
                </div>

                <div className="blog-content__section" id="step-4">
                  <h2 className="blog-content__heading">Step 4: Build Content Pillars</h2>
                  <p>
                    Content pillars are the recurring themes you post about. Four to five is usually enough. Examples for a local business:
                  </p>

                  <div className="blog-content__grid">
                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Educate</h4>
                      <p>Tips, explainers, myths and answers to common questions.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Showcase</h4>
                      <p>Products, services, before-and-after results and projects.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Prove</h4>
                      <p>Customer stories, reviews, certifications and behind-the-scenes quality checks.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Connect</h4>
                      <p>Team, culture, local events, festivals and community involvement.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Convert</h4>
                      <p>Offers, launches, booking prompts and clear calls to action.</p>
                    </div>
                  </div>

                  <p className="blog-content__note">
                    A healthy mix prevents your feed from becoming either pure advertising or pure entertainment.
                  </p>
                </div>

                <div className="blog-content__section" id="step-5">
                  <h2 className="blog-content__heading">Step 5: Plan Formats That Fit Each Pillar</h2>
                  <p>
                    Different formats do different jobs.
                  </p>
                  <ul className="blog-content__list blog-content__list--spaced">
                    <li><strong>Short videos (reels).</strong> Great for reach, demonstrations and personality.</li>
                    <li><strong>Carousels.</strong> Excellent for step-by-step tips, comparisons and checklists that people save.</li>
                    <li><strong>Single images and graphics.</strong> Simple announcements, quotes and offers.</li>
                    <li><strong>Stories.</strong> Daily updates, polls, questions and time-limited prompts.</li>
                    <li><strong>Live sessions.</strong> Q&A, launches and events.</li>
                    <li><strong>User-generated content.</strong> Reposted customer photos and reviews, with permission.</li>
                  </ul>
                  <p className="blog-content__callout">
                    Create a few reusable templates so design stays consistent without taking hours.
                  </p>
                </div>

                <div className="blog-content__section" id="step-6">
                  <h2 className="blog-content__heading">Step 6: Build a Simple Monthly Calendar</h2>
                  <p>
                    A calendar prevents last-minute panic. A practical rhythm for a small business might be:
                  </p>
                  <ul className="blog-content__checklist">
                    <li>Three to four posts per week on the main platform</li>
                    <li>One or two reels per week</li>
                    <li>Daily or near-daily stories</li>
                    <li>One longer piece per month, such as a video or detailed carousel</li>
                  </ul>
                  <p>
                    Include local dates such as festivals, wedding seasons, exam periods and sales events. Leave some room for timely
                    posts and customer moments you did not plan.
                  </p>
                  <p className="blog-content__success">
                    Quality beats frequency. Four strong posts are better than ten rushed ones.
                  </p>
                </div>

                <div className="blog-content__section" id="step-7">
                  <h2 className="blog-content__heading">Step 7: Write Captions That Do Something</h2>
                  <p>
                    A caption should support the visual and move the viewer to act. Useful habits include:
                  </p>
                  <ul className="blog-content__list blog-content__list--spaced">
                    <li>Open with a hook that speaks to a problem or curiosity.</li>
                    <li>Keep it simple and conversational.</li>
                    <li>Add one clear call to action: save, share, comment, message or book.</li>
                    <li>Use relevant hashtags and location tags in moderation.</li>
                    <li>Avoid jargon and walls of text.</li>
                  </ul>
                  <p className="blog-content__insight">
                    Ask questions that invite replies. Engagement signals tell platforms the content is worth showing.
                  </p>
                </div>

                <div className="blog-content__section" id="step-8">
                  <h2 className="blog-content__heading">Step 8: Community Management Is Part of Marketing</h2>
                  <p>
                    Social media is a conversation, not a billboard. Respond to comments and messages promptly, thank people for reviews
                    and handle complaints politely and publicly where appropriate. A fast, friendly reply can turn a casual follower into
                    a customer.
                  </p>
                  <p className="blog-content__callout">
                    Set response standards: for example, replying within a few hours during working time, and having a clear process for
                    escalating serious issues.
                  </p>
                </div>

                <div className="blog-content__section" id="step-9">
                  <h2 className="blog-content__heading">Step 9: Use Paid Promotion Wisely</h2>
                  <p>
                    Organic reach has limits, so paid promotion can help. Start modestly:
                  </p>
                  <ul className="blog-content__checklist">
                    <li>Boost posts that already perform well.</li>
                    <li>Target by location and interest, such as people within a certain radius of your business.</li>
                    <li>Retarget people who visited your website or engaged with your profile.</li>
                    <li>Test creatives such as different images, videos and messages.</li>
                    <li>Track results such as cost per message, per lead or per booking.</li>
                  </ul>
                  <p className="blog-content__warning">
                    Avoid spreading a tiny budget across too many campaigns. Focus on one goal at a time.
                  </p>
                </div>

                <div className="blog-content__section" id="step-10">
                  <h2 className="blog-content__heading">Step 10: Measure What Matters</h2>
                  <p>
                    Track a few useful numbers each month:
                  </p>
                  <ul className="blog-content__list">
                    <li><strong>Reach and impressions.</strong> How many people saw your content.</li>
                    <li><strong>Engagement.</strong> Likes, comments, shares and saves.</li>
                    <li><strong>Follower growth,</strong> particularly from your target locations.</li>
                    <li><strong>Profile visits and link clicks.</strong></li>
                    <li><strong>Messages, calls and leads.</strong></li>
                    <li><strong>Sales influenced by social,</strong> where trackable.</li>
                  </ul>
                  <p className="blog-content__highlight">
                    Likes alone do not pay the bills. Watch the numbers closest to your goal.
                  </p>
                </div>

                <div className="blog-content__section" id="working-partner">
                  <h2 className="blog-content__heading">Working with a Social Media Partner</h2>
                  <p>
                    If you hire a <Link to="/services/social-media" className="blog-content__link">social media marketing company in Chandigarh</Link>,
                    ask to see its content process: how it plans, who creates, how approvals work and how results are reviewed. Look for
                    strategic thinking, not just design.
                  </p>
                  <p>
                    Social media also works better alongside other channels. Content posted on social can support SEO by increasing brand
                    searches and driving traffic to new pages. If you are comparing an <Link to="/services/seo" className="blog-content__link">SEO agency in Chandigarh</Link> with
                    others, such as a best SEO agency in Chandigarh or a top SEO agency in Chandigarh, ask how they coordinate with social
                    teams. A <Link to="/" className="blog-content__link">best digital marketing agency in Chandigarh</Link> may handle both, but whoever you pick should share goals,
                    data and calendars across channels.
                  </p>
                </div>

                <div className="blog-content__section" id="mistakes">
                  <h2 className="blog-content__heading">Mistakes to Avoid</h2>
                  <ul className="blog-content__list blog-content__list--spaced">
                    <li><strong>Posting without a goal.</strong> Activity is not strategy.</li>
                    <li><strong>Chasing trends that do not fit your brand.</strong> Relevance beats virality.</li>
                    <li><strong>Buying followers.</strong> They inflate numbers and harm engagement.</li>
                    <li><strong>Ignoring comments.</strong> It signals that you are not listening.</li>
                    <li><strong>Using only promotional content.</strong> People tune out constant selling.</li>
                    <li><strong>Inconsistent branding.</strong> Mixed fonts, colours and tones weaken recognition.</li>
                    <li><strong>Not tracking results.</strong> You cannot improve what you do not measure.</li>
                  </ul>
                </div>

                <div className="blog-content__section blog-content__section--highlight" id="checklist">
                  <h2 className="blog-content__heading">A Starter Checklist</h2>
                  <ol className="blog-content__numbered-list">
                    <li>Choose a main goal and platform.</li>
                    <li>Define your audience and key messages.</li>
                    <li>Set four or five content pillars.</li>
                    <li>Create a monthly calendar.</li>
                    <li>Prepare simple templates.</li>
                    <li>Plan how you will respond to comments and messages.</li>
                    <li>Set a small test budget for promotion.</li>
                    <li>Review results monthly and adjust.</li>
                  </ol>
                </div>

                <div className="blog-content__section blog-content__section--conclusion">
                  <h2 className="blog-content__heading">Final Thoughts</h2>
                  <p>
                    Good social media marketing is less about going viral and more about showing up consistently with content that helps,
                    proves and invites. A playbook turns scattered posting into a repeatable system that your team or partner can follow.
                  </p>
                  <p>
                    If you would like help building a social plan for your business, the Social Theka team can work with you to shape one.
                    Visit <a href="https://socialtheka.com" className="blog-content__link">socialtheka.com</a> to start the conversation.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="blog-content__cta">
                  <div className="blog-content__cta-content">
                    <h3 className="blog-content__cta-title">Ready to Build Your Social Media Playbook?</h3>
                    <p className="blog-content__cta-text">
                      Let's create a strategic content plan that drives real results for your business.
                    </p>
                    <Link to="/contact" className="blog-content__cta-button">
                      Get Started Today
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="blog-sidebar">
                <div className="blog-sidebar__sticky">

                  {/* Table of Contents */}
                  <div className="blog-sidebar__card">
                    <h3 className="blog-sidebar__title">Table of Contents</h3>
                    <nav className="blog-sidebar__toc">
                      <a href="#step-1" className="blog-sidebar__toc-link">Define Your Goal</a>
                      <a href="#step-2" className="blog-sidebar__toc-link">Know Your Audience</a>
                      <a href="#step-3" className="blog-sidebar__toc-link">Pick Platforms</a>
                      <a href="#step-4" className="blog-sidebar__toc-link">Content Pillars</a>
                      <a href="#step-5" className="blog-sidebar__toc-link">Content Formats</a>
                      <a href="#step-6" className="blog-sidebar__toc-link">Monthly Calendar</a>
                      <a href="#step-10" className="blog-sidebar__toc-link">Measure Results</a>
                      <a href="#checklist" className="blog-sidebar__toc-link">Starter Checklist</a>
                    </nav>
                  </div>

                  {/* Related Services */}
                  <div className="blog-sidebar__card blog-sidebar__card--dark">
                    <h3 className="blog-sidebar__title">Related Services</h3>
                    <div className="blog-sidebar__services">
                      <Link to="/services/social-media" className="blog-sidebar__service">
                        <div className="blog-sidebar__service-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                          </svg>
                        </div>
                        <div>
                          <div className="blog-sidebar__service-name">Social Media</div>
                          <div className="blog-sidebar__service-desc">Build brand presence</div>
                        </div>
                      </Link>
                      <Link to="/services/seo" className="blog-sidebar__service">
                        <div className="blog-sidebar__service-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="blog-sidebar__service-name">SEO Services</div>
                          <div className="blog-sidebar__service-desc">Rank higher on Google</div>
                        </div>
                      </Link>
                      <Link to="/services/ppc" className="blog-sidebar__service">
                        <div className="blog-sidebar__service-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                          </svg>
                        </div>
                        <div>
                          <div className="blog-sidebar__service-name">PPC Advertising</div>
                          <div className="blog-sidebar__service-desc">Targeted ad campaigns</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="blog-sidebar__card blog-sidebar__card--stats">
                    <h3 className="blog-sidebar__title">Why Choose Us</h3>
                    <div className="blog-sidebar__stats">
                      <div className="blog-sidebar__stat">
                        <div className="blog-sidebar__stat-value">500+</div>
                        <div className="blog-sidebar__stat-label">Brands Scaled</div>
                      </div>
                      <div className="blog-sidebar__stat">
                        <div className="blog-sidebar__stat-value">98%</div>
                        <div className="blog-sidebar__stat-label">Client Retention</div>
                      </div>
                      <div className="blog-sidebar__stat">
                        <div className="blog-sidebar__stat-value">₹50Cr+</div>
                        <div className="blog-sidebar__stat-label">Revenue Generated</div>
                      </div>
                    </div>
                  </div>

                </div>
              </aside>

            </div>
          </div>
        </section>

      </article>

      <Footer />
    </>
  );
};

export default SocialMediaPlaybook;