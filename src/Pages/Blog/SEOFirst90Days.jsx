import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Component/Footer/Footer';
import './SEOFirst90Days.css';
import SEOFirst90DaysImg from '../../assets/SEO Agency in Chandigarh_ First 90 Days.png';

const SEOFirst90Days = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>SEO Agency in Chandigarh: What to Expect in Your First 90 Days</title>
        <meta
          name="description"
          content="Wondering what an SEO agency in Chandigarh actually does? See the first 90 days: audit, technical fixes, content plan, tracking setup and realistic early results."
        />
        <meta name="keywords" content="SEO agency Chandigarh, SEO services, digital marketing, search engine optimization, 90 day SEO plan" />
        <link rel="canonical" href="https://socialtheka.com/blog/seo-first-90-days" />
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
              <span className="blog-hero__breadcrumb-current">SEO First 90 Days</span>
            </div>

            <div className="blog-hero__content">
              <div className="blog-hero__tag-group">
                <span className="blog-hero__tag">SEO Strategy</span>
                <span className="blog-hero__tag">Digital Marketing</span>
              </div>

              <h1 className="blog-hero__title">
                SEO Agency in Chandigarh: What to Expect in Your First 90 Days
              </h1>

              <p className="blog-hero__excerpt">
                Hiring an SEO partner often starts with hope and ends with confusion. The first month passes, nothing seems to change on Google, and the business owner wonders what exactly is being done.
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
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-hero__gradient"></div>
        </section>

        {/* Content Section */}
        <section className="blog-content">
          <div className="blog-content__container">

            {/* Cover image: full image, inside container, never cropped */}
            <figure className="blog-cover">
              <img
                className="blog-cover__img"
                src={SEOFirst90DaysImg}
                alt="SEO Agency in Chandigarh: what to expect in your first 90 days"
                loading="eager"
              />
            </figure>

            <div className="blog-content__wrapper">

              {/* Main Column */}
              <div className="blog-content__main">

                {/* Lead Paragraph */}
                <div className="blog-content__lead">
                  <p>
                    The problem is rarely that nothing is happening. It is that nobody explained what the early work looks like.
                    Search engine optimisation is a build-up process, not a switch. This guide walks through what a sensible first
                    90 days should look like when you hire an SEO agency in Chandigarh, so you can tell real progress from empty
                    activity and ask better questions at each stage.
                  </p>
                </div>

                {/* Content Sections */}
                <div className="blog-content__section" id="before-day-one">
                  <h2 className="blog-content__heading">Before Day One: Set the Ground Rules</h2>
                  <p>
                    A good engagement begins before any work starts. Agree on these basics in writing:
                  </p>
                  <ul className="blog-content__list">
                    <li><strong>Business goals.</strong> Leads, calls, store visits, online sales or bookings? SEO should serve a business outcome, not just "more traffic."</li>
                    <li><strong>Priority services or products.</strong> The agency cannot push everything at once.</li>
                    <li><strong>Target locations.</strong> Chandigarh, the tricity, North India or nationwide?</li>
                    <li><strong>Access.</strong> Website admin, Google Search Console, Google Analytics and Google Business Profile.</li>
                    <li><strong>Reporting rhythm.</strong> How often you will meet and what you will see.</li>
                  </ul>
                  <p className="blog-content__callout">
                    If a firm skips this and goes straight to a price, treat it as a warning sign.
                  </p>
                </div>

                <div className="blog-content__section" id="days-1-30">
                  <h2 className="blog-content__heading">Days 1 to 30: Audit and Foundations</h2>
                  <p>
                    The first month is about understanding where you stand. Expect these tasks.
                  </p>

                  <div className="blog-content__subsection">
                    <h3 className="blog-content__subheading">Technical audit</h3>
                    <p>
                      The agency checks whether search engines can crawl and index your site properly. It looks at page speed,
                      mobile usability, broken links, redirects, duplicate pages, site structure and security. Core Web Vitals,
                      which measure loading, responsiveness and visual stability, are usually part of the review.
                    </p>
                  </div>

                  <div className="blog-content__subsection">
                    <h3 className="blog-content__subheading">Content and keyword audit</h3>
                    <p>
                      The team maps your existing pages to what people actually search for. It identifies gaps, thin pages and
                      pages competing against one another.
                    </p>
                  </div>

                  <div className="blog-content__subsection">
                    <h3 className="blog-content__subheading">Competitor review</h3>
                    <p>
                      Who ranks for your key searches, and why? This isn't about copying them but about understanding what Google
                      appears to reward.
                    </p>
                  </div>

                  <div className="blog-content__subsection">
                    <h3 className="blog-content__subheading">Local presence check</h3>
                    <p>
                      For businesses that serve a city, Google Business Profile accuracy matters: name, address, phone, categories,
                      hours, photos and reviews. Consistent business listings across directories also help.
                    </p>
                  </div>

                  <div className="blog-content__subsection">
                    <h3 className="blog-content__subheading">Tracking setup</h3>
                    <p>
                      Without measurement, you can't judge results. Confirm that analytics, Search Console and conversion tracking
                      (form fills, calls, WhatsApp clicks) are working before changes begin.
                    </p>
                  </div>

                  <p className="blog-content__highlight">
                    By day 30, you should receive a clear audit document and a prioritised action plan, not a generic checklist.
                  </p>
                </div>

                <div className="blog-content__section" id="days-31-60">
                  <h2 className="blog-content__heading">Days 31 to 60: Fix, Build and Publish</h2>
                  <p>
                    The second month turns the audit into action.
                  </p>

                  <div className="blog-content__grid">
                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Technical fixes</h4>
                      <p>Common priorities include improving speed, fixing indexing issues, cleaning up redirects, improving mobile layouts and adding structured data where it fits.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">On-page optimisation</h4>
                      <p>Titles, meta descriptions, headings, internal links and page copy are refined so each page has a clear purpose and matches search intent.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                          <path d="M2 2l7.586 7.586"></path>
                          <circle cx="11" cy="11" r="2"></circle>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">New content</h4>
                      <p>The agency starts producing pages and articles tied to real search demand. For a local business, that might include service pages, location pages and helpful guides.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Local optimisation</h4>
                      <p>Business profile updates, fresh photos, service listings and a plan to collect more genuine customer reviews.</p>
                    </div>

                    <div className="blog-content__card">
                      <div className="blog-content__card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                      <h4 className="blog-content__card-title">Authority groundwork</h4>
                      <p>Early outreach and brand mentions begin. Ethical link building takes time and should focus on quality, relevance and real value, not bulk directories.</p>
                    </div>
                  </div>

                  <p className="blog-content__note">
                    This is the stage where owners sometimes feel impatient because rankings may not yet move. That's normal.
                    Search engines need time to crawl, evaluate and trust changes.
                  </p>
                </div>

                <div className="blog-content__section" id="days-61-90">
                  <h2 className="blog-content__heading">Days 61 to 90: Measure, Learn and Adjust</h2>
                  <p>
                    By the third month, early signals appear. They are usually small but meaningful.
                  </p>
                  <ul className="blog-content__checklist">
                    <li>Impressions and clicks in Search Console begin to rise for target pages.</li>
                    <li>Rankings for secondary and long-tail searches improve before the most competitive terms do.</li>
                    <li>Engagement such as time on page and click paths improve if content matches intent.</li>
                    <li>Leads may start to trickle in, especially for local and low-competition searches.</li>
                  </ul>
                  <p>
                    A good agency reviews what is working and adjusts. It may double down on pages gaining traction, rewrite those
                    that are stalling or shift effort toward easier opportunities.
                  </p>
                </div>

                <div className="blog-content__section blog-content__section--highlight" id="realistic-results">
                  <h2 className="blog-content__heading">What Realistic Results Look Like</h2>
                  <p>
                    Nobody can promise specific rankings, because search results depend on many factors, including competition,
                    site history and algorithm changes. Timelines vary, but as a rough guide:
                  </p>
                  <div className="blog-content__timeline">
                    <div className="blog-content__timeline-item">
                      <div className="blog-content__timeline-marker">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <div className="blog-content__timeline-content">
                        <strong>Weeks</strong>
                        <p>Technical improvements can show effects within weeks.</p>
                      </div>
                    </div>
                    <div className="blog-content__timeline-item">
                      <div className="blog-content__timeline-marker">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      </div>
                      <div className="blog-content__timeline-content">
                        <strong>Few Months</strong>
                        <p>New content often takes a few months to earn visibility.</p>
                      </div>
                    </div>
                    <div className="blog-content__timeline-item">
                      <div className="blog-content__timeline-marker">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      </div>
                      <div className="blog-content__timeline-content">
                        <strong>6+ Months</strong>
                        <p>Competitive searches may take six months or longer.</p>
                      </div>
                    </div>
                  </div>
                  <p className="blog-content__warning">
                    Be cautious of anyone promising first-page rankings in 30 days or guaranteeing a position. Those claims usually
                    point to risky tactics or very narrow, low-value keywords.
                  </p>
                </div>

                <div className="blog-content__section" id="red-flags">
                  <h2 className="blog-content__heading">Red Flags in the First Quarter</h2>
                  <div className="blog-content__red-flags">
                    <div className="blog-content__flag">
                      <span className="blog-content__flag-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </span>
                      <div>
                        <strong>No audit.</strong> Work begins without understanding your site.
                      </div>
                    </div>
                    <div className="blog-content__flag">
                      <span className="blog-content__flag-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </span>
                      <div>
                        <strong>Vague reports.</strong> Graphs of traffic with no link to business outcomes.
                      </div>
                    </div>
                    <div className="blog-content__flag">
                      <span className="blog-content__flag-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </span>
                      <div>
                        <strong>Mass directory submissions or bought links.</strong> These can harm your site.
                      </div>
                    </div>
                    <div className="blog-content__flag">
                      <span className="blog-content__flag-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </span>
                      <div>
                        <strong>Keyword stuffing.</strong> Pages written for robots, not people.
                      </div>
                    </div>
                    <div className="blog-content__flag">
                      <span className="blog-content__flag-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </span>
                      <div>
                        <strong>No access.</strong> The agency refuses to give you ownership of your analytics or accounts.
                      </div>
                    </div>
                    <div className="blog-content__flag">
                      <span className="blog-content__flag-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </span>
                      <div>
                        <strong>Constant excuses.</strong> Delays with no explanation of what is being done.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-content__section">
                  <h2 className="blog-content__heading">Your Role Matters Too</h2>
                  <p>
                    SEO works best when the business participates. You can help by:
                  </p>
                  <ul className="blog-content__list blog-content__list--spaced">
                    <li>Providing accurate information about services, pricing and areas served</li>
                    <li>Approving content quickly</li>
                    <li>Sharing customer questions and sales feedback, which reveal what people actually search for</li>
                    <li>Responding to reviews and keeping your profile updated</li>
                    <li>Implementing technical changes promptly if your developers are involved</li>
                  </ul>
                  <p className="blog-content__insight">
                    Slow approvals and missing information are common reasons results lag.
                  </p>
                </div>

                <div className="blog-content__section">
                  <h2 className="blog-content__heading">How SEO Fits with Everything Else</h2>
                  <p>
                    SEO is strongest when it is not isolated. A <Link to="/services/social-media" className="blog-content__link">social media marketing company in Chandigarh</Link> can
                    amplify new content and build brand recognition that encourages branded searches. Paid ads can provide quick
                    traffic while organic visibility builds. A broader <Link to="/" className="blog-content__link">best digital marketing agency in Chandigarh</Link> may
                    connect these channels under one plan, so that SEO, social and advertising support each other.
                  </p>
                  <p>
                    When comparing providers, you may see claims like "best SEO agency in Chandigarh" or "top SEO agency in Chandigarh"
                    on many websites. Titles are easy to claim and hard to verify. Judge a firm by its process, transparency and
                    willingness to explain, not by the label it gives itself.
                  </p>
                </div>

                <div className="blog-content__section" id="checklist">
                  <h2 className="blog-content__heading">A 90-Day Checklist for Owners</h2>
                  <p>
                    At the end of three months, you should be able to answer yes to most of these:
                  </p>
                  <ol className="blog-content__numbered-list">
                    <li>Do I have a clear audit and priority plan?</li>
                    <li>Is tracking set up for calls, forms and key actions?</li>
                    <li>Have important technical issues been fixed?</li>
                    <li>Have key pages been improved or created?</li>
                    <li>Is my Google Business Profile accurate and active?</li>
                    <li>Do I understand the report I receive each month?</li>
                    <li>Do I know what the next three months will focus on?</li>
                  </ol>
                  <p className="blog-content__success">
                    If you can't answer yes to at least five, ask for a conversation about what is going on.
                  </p>
                </div>

                <div className="blog-content__section blog-content__section--conclusion">
                  <h2 className="blog-content__heading">Final Thoughts</h2>
                  <p>
                    SEO is a long game with early checkpoints. The first 90 days should lay foundations, fix problems and begin
                    building visibility, with clear communication throughout. Choose a partner who explains the plan, shows its
                    work and sets realistic expectations.
                  </p>
                  <p>
                    If you would like to discuss your website's search potential, the Social Theka team can help you map out a plan.
                    Visit <a href="https://socialtheka.com" className="blog-content__link">socialtheka.com</a> to start the conversation.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="blog-content__cta">
                  <div className="blog-content__cta-content">
                    <h3 className="blog-content__cta-title">Ready to Start Your SEO Journey?</h3>
                    <p className="blog-content__cta-text">
                      Let's discuss how we can help your business grow with strategic, results-driven SEO.
                    </p>
                    <Link to="/contact" className="blog-content__cta-button">
                      Get Your Free SEO Audit
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
                      <a href="#before-day-one" className="blog-sidebar__toc-link">Before Day One</a>
                      <a href="#days-1-30" className="blog-sidebar__toc-link">Days 1-30: Audit</a>
                      <a href="#days-31-60" className="blog-sidebar__toc-link">Days 31-60: Action</a>
                      <a href="#days-61-90" className="blog-sidebar__toc-link">Days 61-90: Results</a>
                      <a href="#realistic-results" className="blog-sidebar__toc-link">Realistic Timelines</a>
                      <a href="#red-flags" className="blog-sidebar__toc-link">Red Flags</a>
                      <a href="#checklist" className="blog-sidebar__toc-link">90-Day Checklist</a>
                    </nav>
                  </div>

                  {/* Related Services */}
                  <div className="blog-sidebar__card blog-sidebar__card--dark">
                    <h3 className="blog-sidebar__title">Related Services</h3>
                    <div className="blog-sidebar__services">
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

export default SEOFirst90Days;