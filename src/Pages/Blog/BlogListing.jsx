import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Component/Footer/Footer';
import './BlogListing.css';
import SEOFirst90DaysImg from '../../assets/SEO Agency in Chandigarh_ First 90 Days.png';
import TopSEOAgencyImg from '../../assets/Top SEO Agency in Chandigarh.png';
import SEOHiringGuideImg from '../../assets/SEO Agency Hiring Guide in Chandigarh.png';
import LeadFunnelImg from '../../assets/Best Digital Marketing Agency in Chandigarh Build a Lead Funnel.png';
import SocialMediaImg from '../../assets/Best Seo Agency in Chandigarh.png';

const blogPosts = [
  {
    id: 5,
    slug: 'lead-funnel',
    title: 'Best Digital Marketing Agency in Chandigarh: Build a Lead Funnel',
    excerpt: 'Need the best digital marketing agency in Chandigarh? See how SEO, social media, ads and follow-ups connect into one lead funnel that turns visitors into customers.',
    category: 'Lead Generation',
    readTime: '14 min read',
    date: 'October 7, 2026',
    image: LeadFunnelImg,
    tags: ['Lead Generation', 'Conversion', 'Marketing Strategy']
  },
  {
    id: 4,
    slug: 'social-media-playbook',
    title: 'Social Media Marketing Company in Chandigarh: A Content Playbook',
    excerpt: 'Looking for a social media marketing company in Chandigarh? Build a content playbook with pillars, reels, community care, paid boosts and a simple monthly calendar.',
    category: 'Social Media',
    readTime: '13 min read',
    date: 'October 7, 2026',
    image: SocialMediaImg,
    tags: ['Social Media', 'Content Strategy', 'Marketing']
  },
  {
    id: 3,
    slug: 'seo-reports',
    title: 'Top SEO Agency in Chandigarh: How to Read SEO Reports Like a Pro',
    excerpt: 'Hired a top SEO agency in Chandigarh? Learn how to read rankings, traffic, leads and conversion data in your reports so you can judge real progress with confidence.',
    category: 'SEO Reports',
    readTime: '11 min read',
    date: 'October 7, 2026',
    image: TopSEOAgencyImg,
    tags: ['SEO', 'Analytics', 'Reporting']
  },
  {
    id: 2,
    slug: 'seo-10-questions',
    title: 'Best SEO Agency in Chandigarh: 10 Questions to Ask Before Hiring',
    excerpt: 'Choosing the best SEO agency in Chandigarh? Ask these 10 questions about strategy, reporting, link building and pricing, and learn which red flags to avoid early.',
    category: 'SEO Agency',
    readTime: '10 min read',
    date: 'October 7, 2026',
    image: SEOHiringGuideImg,
    tags: ['SEO', 'Hiring Guide', 'Agency Selection']
  },
  {
    id: 1,
    slug: 'seo-first-90-days',
    title: 'SEO Agency in Chandigarh: What to Expect in Your First 90 Days',
    excerpt: 'Wondering what an SEO agency in Chandigarh actually does? See the first 90 days: audit, technical fixes, content plan, tracking setup and realistic early results.',
    category: 'SEO Strategy',
    readTime: '12 min read',
    date: 'October 7, 2026',
    image: SEOFirst90DaysImg,
    tags: ['SEO', 'Digital Marketing', 'Strategy']
  },
];

const BlogListing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog - Social Theka | Digital Marketing Insights & SEO Tips</title>
        <meta 
          name="description" 
          content="Read the latest insights on SEO, digital marketing, social media, and web development from Social Theka. Expert tips and strategies for growing your business online." 
        />
        <link rel="canonical" href="https://socialtheka.com/blog" />
      </Helmet>

      <div className="blog-listing">
        {/* Hero Section */}
        <section className="blog-listing-hero">
          <div className="blog-listing-hero__container">
            <div className="blog-listing-hero__breadcrumb">
              <Link to="/" className="blog-listing-hero__breadcrumb-link">Home</Link>
              <span className="blog-listing-hero__breadcrumb-separator">/</span>
              <span className="blog-listing-hero__breadcrumb-current">Blog</span>
            </div>
            
            <h1 className="blog-listing-hero__title">
              Insights & <span className="blog-listing-hero__title-accent">Strategies</span>
            </h1>
            
            <p className="blog-listing-hero__subtitle">
              Expert tips on SEO, digital marketing, and growing your business online
            </p>
          </div>
          <div className="blog-listing-hero__gradient"></div>
        </section>

        {/* Blog Grid */}
        <section className="blog-listing-content">
          <div className="blog-listing-content__container">
            
            {/* Featured Post - Latest Blog */}
            {blogPosts.length > 0 && (
              <div className="blog-listing-featured">
                <Link to={`/blog/${blogPosts[0].slug}`} className="blog-listing-featured__card">
                  <div className="blog-listing-featured__image">
                    <img src={blogPosts[0].image} alt={blogPosts[0].title} loading="lazy" />
                    <div className="blog-listing-featured__badge">Featured</div>
                  </div>
                  <div className="blog-listing-featured__content">
                    <div className="blog-listing-featured__meta">
                      <span className="blog-listing-featured__category">{blogPosts[0].category}</span>
                      <span className="blog-listing-featured__divider">•</span>
                      <span className="blog-listing-featured__date">{blogPosts[0].date}</span>
                    </div>
                    <h2 className="blog-listing-featured__title">{blogPosts[0].title}</h2>
                    <p className="blog-listing-featured__excerpt">{blogPosts[0].excerpt}</p>
                    <div className="blog-listing-featured__footer">
                      <div className="blog-listing-featured__tags">
                        {blogPosts[0].tags.map((tag, idx) => (
                          <span key={idx} className="blog-listing-featured__tag">{tag}</span>
                        ))}
                      </div>
                      <span className="blog-listing-featured__read-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Regular Posts Grid - Remaining Blogs */}
            {blogPosts.length > 1 && (
              <>
                <h2 className="blog-listing-section-title">More Articles</h2>
                <div className="blog-listing-grid">
                  {blogPosts.slice(1).map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="blog-listing-card">
                      <div className="blog-listing-card__image">
                        <img src={post.image} alt={post.title} loading="lazy" />
                      </div>
                      <div className="blog-listing-card__content">
                        <div className="blog-listing-card__meta">
                          <span className="blog-listing-card__category">{post.category}</span>
                          <span className="blog-listing-card__date">{post.date}</span>
                        </div>
                        <h3 className="blog-listing-card__title">{post.title}</h3>
                        <p className="blog-listing-card__excerpt">{post.excerpt}</p>
                        <div className="blog-listing-card__footer">
                          <span className="blog-listing-card__read-more">
                            Read More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </span>
                          <span className="blog-listing-card__read-time">{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* Empty State */}
            {blogPosts.length === 0 && (
              <div className="blog-listing-empty">
                <div className="blog-listing-empty__icon">📝</div>
                <h2 className="blog-listing-empty__title">More Content Coming Soon</h2>
                <p className="blog-listing-empty__text">
                  We're working on creating valuable content for you. Check back soon!
                </p>
                <Link to="/contact" className="blog-listing-empty__button">
                  Get in Touch
                </Link>
              </div>
            )}

          </div>
        </section>

        {/* CTA Section */}
        <section className="blog-listing-cta">
          <div className="blog-listing-cta__container">
            <h2 className="blog-listing-cta__title">Ready to Grow Your Business?</h2>
            <p className="blog-listing-cta__text">
              Let's discuss how we can help you achieve your digital marketing goals
            </p>
            <Link to="/contact" className="blog-listing-cta__button">
              Start Your Journey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default BlogListing;
