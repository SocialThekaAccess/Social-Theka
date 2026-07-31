// SEO Configuration for different pages
// Use this as a reference when adding SEO to pages
// Based on approved SEO meta data table

export const pageConfigs = {
  home: {
    title: "Social Theka: Best Digital Marketing & Top SEO Agency Chandigarh",
    description: "Social Theka is the best digital marketing agency in Chandigarh offering top SEO, PPC, social media, web design and web development services for businesses today.",
    h1: "Best Digital Marketing Agency in Chandigarh | Social Theka",
    keywords: "digital marketing agency Chandigarh, best SEO agency Chandigarh, top digital marketing company, PPC services, social media marketing, web design, web development",
    image: "https://socialtheka.com/og-image.jpg",
    slug: "/"
  },
  
  seo: {
    title: "Best SEO Company in Chandigarh | Top SEO Agency & SEO Services India",
    description: "Social Theka is the best SEO company in Chandigarh offering top SEO services, on page, off page and local SEO to boost rankings and organic website traffic fast.",
    h1: "Best SEO Company in Chandigarh",
    keywords: "best SEO company Chandigarh, top SEO agency, SEO services India, on page SEO, off page SEO, local SEO, organic traffic, SEO rankings",
    image: "https://socialtheka.com/seo-services-og.jpg",
    slug: "/services/seo-chandigarh"
  },
  
  socialMedia: {
    title: "Best Social Media Marketing Agency in Chandigarh | Top SMM Company",
    description: "Social Theka is the best social media marketing agency in Chandigarh offering top SMM services, content creation and ad management to grow your brand online fast.",
    h1: "Best Social Media Marketing Agency in Chandigarh",
    keywords: "best social media marketing agency Chandigarh, top SMM company, social media services, content creation, ad management, brand growth, Instagram marketing, Facebook ads",
    image: "https://socialtheka.com/social-media-og.jpg",
    slug: "/services/social-media-chandigarh"
  },
  
  ppc: {
    title: "Best PPC Management Company in Chandigarh | Top PPC Agency Services",
    description: "Social Theka is the best PPC company in Chandigarh offering top pay per click management, Google Ads and social media ads services to boost leads and sales fast.",
    h1: "Best PPC Management Services in Chandigarh",
    keywords: "best PPC company Chandigarh, top PPC agency, pay per click management, Google Ads, social media ads, PPC services, lead generation, sales boost",
    image: "https://socialtheka.com/ppc-services-og.jpg",
    slug: "/services/ppc"
  },
  
  webDesign: {
    title: "Best Web Design Company in Chandigarh | Top Web Designing Agency",
    description: "Social Theka is the best web design company offering top web designing, UI UX and responsive website design services for growing small businesses.",
    h1: "Best Web Design Company in Chandigarh",
    keywords: "best web design company Chandigarh, top web designing agency, UI UX design, responsive website design, small business web design, website design services",
    image: "https://socialtheka.com/web-design-og.jpg",
    slug: "/services/web-design"
  },
  
  webDevelopment: {
    title: "Best Web Development Company in Chandigarh | Top Web Developers India",
    description: "Social Theka is the best web development company in Chandigarh offering top website development, ecommerce and custom web app development services for all brands.",
    h1: "Best Web Development Company in Chandigarh",
    keywords: "best web development company Chandigarh, top web developers India, website development, ecommerce development, custom web app, web development services",
    image: "https://socialtheka.com/web-development-og.jpg",
    slug: "/services/web-development-chandigarh"
  },
  
  videoEditing: {
    title: "Best Video Editing Services in Chandigarh | Top Video Editing Company",
    description: "Social Theka offers the best video editing services in Chandigarh with top video editors creating engaging social media, ad and corporate videos for growing brands.",
    h1: "Best Video Editing Services in Chandigarh",
    keywords: "best video editing services Chandigarh, top video editing company, video editors, social media videos, ad videos, corporate videos, video production",
    image: "https://socialtheka.com/video-editing-og.jpg",
    slug: "/services/video-editing-chandigarh"
  },
  
  thekaStory: {
    title: "About Social Theka | Our Story | Digital Marketing Agency Chandigarh",
    description: "Learn about Social Theka's journey. ISO-certified digital marketing agency trusted by 500+ businesses across India, USA, UK, and Dubai.",
    h1: "About Social Theka",
    keywords: "about social theka, digital marketing agency story, Chandigarh marketing agency, ISO certified agency, marketing agency team",
    image: "https://socialtheka.com/about-og.jpg",
    slug: "/theka-story"
  },
  
  contact: {
    title: "Contact Social Theka | Get Free Strategy Session | Chandigarh",
    description: "Get in touch with Social Theka for a free strategy session. Digital marketing experts in Chandigarh ready to help your business grow.",
    h1: "Contact Social Theka",
    keywords: "contact social theka, free marketing consultation, digital marketing strategy, Chandigarh agency contact, marketing consultation",
    image: "https://socialtheka.com/contact-og.jpg",
    slug: "/contact"
  }
};

// Helper function to get page config
export const getPageConfig = (pageName) => {
  return pageConfigs[pageName] || pageConfigs.home;
};
