// Schema.org structured data for different pages

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Social Theka",
  "url": "https://socialtheka.com",
  "logo": "https://socialtheka.com/logo.png",
  "description": "India's premium data-driven digital marketing agency specializing in SEO, Social Media Marketing, PPC, Web Development, and Video Editing.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chandigarh",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+91-XXXXXXXXXX",
    "email": "contact@socialtheka.com"
  },
  "sameAs": [
    "https://www.facebook.com/socialtheka",
    "https://www.instagram.com/socialtheka",
    "https://www.linkedin.com/company/socialtheka",
    "https://twitter.com/socialtheka"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Social Theka",
  "url": "https://socialtheka.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://socialtheka.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Social Theka",
  "image": "https://socialtheka.com/logo.png",
  "@id": "https://socialtheka.com",
  "url": "https://socialtheka.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Chandigarh",
    "addressRegion": "CH",
    "postalCode": "160001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.7333,
    "longitude": 76.7794
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$"
};

export const serviceSchema = (serviceName, serviceDescription, serviceUrl) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "Organization",
    "name": "Social Theka",
    "url": "https://socialtheka.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "description": serviceDescription,
  "url": serviceUrl
});

export const breadcrumbSchema = (breadcrumbList) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbList.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (title, description, datePublished, dateModified, authorName, image) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Person",
    "name": authorName
  },
  "publisher": {
    "@type": "Organization",
    "name": "Social Theka",
    "logo": {
      "@type": "ImageObject",
      "url": "https://socialtheka.com/logo.png"
    }
  }
});
