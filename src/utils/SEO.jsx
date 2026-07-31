import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords,
  image = "https://socialtheka.com/og-image.jpg",
  type = "website",
  schema,
  noindex = false 
}) => {
  const location = useLocation();
  const baseUrl = "https://socialtheka.com";
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = title;

    // Remove existing meta tags that we'll be updating
    const metaTagsToRemove = [
      'description',
      'keywords',
      'og:title',
      'og:description',
      'og:url',
      'og:image',
      'og:type',
      'og:site_name',
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'robots'
    ];

    metaTagsToRemove.forEach(name => {
      const existing = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (existing) existing.remove();
    });

    // Remove existing canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();

    // Remove existing schema
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) existingSchema.remove();

    // Add canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = canonicalUrl;
    document.head.appendChild(canonical);

    // Add description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);

    // Add keywords if provided
    if (keywords) {
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = keywords;
      document.head.appendChild(metaKeywords);
    }

    // Add robots meta
    if (noindex) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'noindex, nofollow';
      document.head.appendChild(robotsMeta);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: image },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'Social Theka' }
    ];

    ogTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];

    twitterTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Add Schema.org structured data
    if (schema) {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup function
    return () => {
      // Optional: Clean up on unmount if needed
    };
  }, [title, description, keywords, canonicalUrl, image, type, schema, noindex]);

  return null;
};

export default SEO;
