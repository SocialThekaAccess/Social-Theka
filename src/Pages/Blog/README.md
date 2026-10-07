# Blog Section - Social Theka

## Overview
Premium, classy blog section designed to match the marketing website aesthetic with sophisticated layouts and smooth animations.

## Structure

```
Blog/
├── BlogListing.jsx       # Main blog landing page with grid
├── BlogListing.css       # Styling for blog listing
├── SEOFirst90Days.jsx    # Individual blog post
├── SEOFirst90Days.css    # Styling for blog posts
└── README.md            # This file
```

## Features

### Blog Listing Page (`/blog`)
- **Hero Section**: Eye-catching header with gradient background
- **Featured Post**: Large highlight card for the latest/important post
- **Blog Grid**: Responsive grid of blog post cards
- **CTA Section**: Call-to-action for engagement
- **Premium Design**: Wine (#C1121F) and charcoal color scheme

### Individual Blog Post (`/blog/seo-first-90-days`)
- **Hero Section**: Full-width header with breadcrumbs, tags, meta info
- **Content Layout**: Two-column layout (content + sidebar)
- **Rich Content Elements**:
  - Lead paragraphs with special styling
  - Callouts and highlights
  - Timeline visualizations
  - Card grids for features
  - Red flag warnings
  - Numbered and bulleted lists
  - Quote boxes
- **Sidebar Components**:
  - Table of Contents
  - Related Services
  - Quick Stats
- **CTA Section**: Conversion-focused footer
- **SEO Optimized**: React Helmet for meta tags

## Design System

### Colors
```css
--blog-wine: #C1121F          /* Primary brand color */
--blog-wine-dark: #8B0D17     /* Dark wine variant */
--blog-wine-light: #E6222F    /* Light wine variant */
--blog-charcoal: #1A1A1A      /* Dark backgrounds */
--blog-charcoal-light: #2A2A2A
--blog-cream: #FDF8F3         /* Page background */
--blog-cream-dark: #F5F0EB    /* Card backgrounds */
--blog-gold: #D4AF37          /* Accent color */
```

### Typography
- **Headings**: Bold, tight letter-spacing
- **Body**: Inter font family, 17px base, 1.8 line-height
- **Lead**: 22px for opening paragraphs

### Components
- Cards with hover effects (lift + shadow)
- Gradient backgrounds with radial overlays
- Smooth animations (fadeInUp)
- Responsive grid layouts
- Icon integrations

## Routes

```javascript
/blog                     → BlogListing component
/blog/seo-first-90-days  → SEOFirst90Days component
```

## Adding New Blog Posts

1. **Create New Component**: `BlogName.jsx` in `src/Pages/Blog/`
2. **Use SEOFirst90Days.jsx as Template**
3. **Update BlogListing.jsx**: Add post to `blogPosts` array
4. **Add Route**: Update `src/App.jsx`

### Blog Post Template
```javascript
const blogPosts = [
  {
    id: 2,
    slug: 'your-blog-slug',
    title: 'Your Blog Title',
    excerpt: 'Brief description...',
    category: 'Category Name',
    readTime: '8 min read',
    date: 'October 10, 2026',
    image: 'https://images.unsplash.com/...',
    tags: ['Tag1', 'Tag2', 'Tag3']
  }
];
```

## SEO Best Practices

Each blog post includes:
- Meta title (55-60 characters)
- Meta description (150-160 characters)
- Canonical URL
- Structured headings (H1, H2, H3)
- Alt text for images
- Internal linking
- Schema markup ready

## Responsive Breakpoints
- Desktop: 1200px+ (full layout)
- Tablet: 768px-1023px (adjusted grid)
- Mobile: <767px (single column)

## Performance
- Lazy loading images
- React lazy() for code splitting
- Optimized animations
- Minimal re-renders

## Dependencies
- `react-router-dom` - Navigation
- `react-helmet-async` - SEO meta tags

## Future Enhancements
- [ ] Categories filter
- [ ] Search functionality
- [ ] Related posts section
- [ ] Social share buttons
- [ ] Comments system
- [ ] Reading progress bar
- [ ] Dark mode toggle
- [ ] Newsletter signup

## Maintenance
- Update blog posts regularly
- Optimize images before upload
- Check mobile responsiveness
- Validate SEO metadata
- Monitor page performance
