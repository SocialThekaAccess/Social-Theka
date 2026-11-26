import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Component/Navbar'

const Home = lazy(() => import('./Component/Home'))
const PPCServicePage = lazy(() => import('./Pages/OurServices/PPCServicePage'))
const WebDevChandigarh = lazy(() => import('./Pages/OurServices/WebDevChandigarh'))
const Webdesignchandigarh = lazy(() => import('./Pages/OurServices/Webdesignchandigarh'))
const SEOchandigarh = lazy(() => import('./Pages/OurServices/SEOchandigarh'))
const VideoEditingChd = lazy(() => import('./Pages/OurServices/VideoEditingChd'))
const SocialMediachandigarh = lazy(() => import('./Pages/OurServices/SocialMediachandigarh'))
const ThekaStory = lazy(() => import('./Pages/ThekaStory/ThekaStory'))
const ContactUs = lazy(() => import('./ContactUs/ContactUs'))
const BlogListing = lazy(() => import('./Pages/Blog/BlogListing'))
const SEOFirst90Days = lazy(() => import('./Pages/Blog/SEOFirst90Days'))
const SEO10Questions = lazy(() => import('./Pages/Blog/SEO10Questions'))
const SEOReports = lazy(() => import('./Pages/Blog/SEOReports'))
const SocialMediaPlaybook = lazy(() => import('./Pages/Blog/SocialMediaPlaybook'))
const LeadFunnel = lazy(() => import('./Pages/Blog/LeadFunnel'))
const WebDevelopmentCompany = lazy(() => import('./Pages/Blog/WebDevelopmentCompany'))
const DigitalMarketingCourse = lazy(() => import('./Pages/Blog/DigitalMarketingCourse'))
const BestSEOServices = lazy(() => import('./Pages/Blog/BestSEOServices'))
const BestSocialMediaServices = lazy(() => import('./Pages/Blog/BestSocialMediaServices'))
const BestWebsiteDevelopment = lazy(() => import('./Pages/Blog/BestWebsiteDevelopment'))
const BestDigitalMarketingAgency = lazy(() => import('./Pages/Blog/BestDigitalMarketingAgency'))
const VideoEditingAgency = lazy(() => import('./Pages/Blog/VideoEditingAgency'))
const WhatsAppScheduledMessages = lazy(() => import('./Pages/Blog/WhatsAppScheduledMessages'))
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'))

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Navbar />
      <Suspense fallback={<div className="route-loader" aria-label="Loading page" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theka-story" element={<ThekaStory />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/ppc" element={<PPCServicePage />} />
          <Route path="/services/web-development" element={<WebDevChandigarh />} />
          <Route path="/services/web-design" element={<Webdesignchandigarh />} />
          <Route path="/services/seo" element={<SEOchandigarh />} />
          <Route path="/services/video-editing" element={<VideoEditingChd />} />
          <Route path="/services/social-media" element={<SocialMediachandigarh />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/seo-first-90-days" element={<SEOFirst90Days />} />
          <Route path="/blog/seo-10-questions" element={<SEO10Questions />} />
          <Route path="/blog/seo-reports" element={<SEOReports />} />
          <Route path="/blog/social-media-playbook" element={<SocialMediaPlaybook />} />
          <Route path="/blog/lead-funnel" element={<LeadFunnel />} />
          <Route path="/blog/web-development-company-chandigarh" element={<WebDevelopmentCompany />} />
          <Route path="/blog/digital-marketing-course-chandigarh" element={<DigitalMarketingCourse />} />
          <Route path="/blog/best-seo-services-chandigarh" element={<BestSEOServices />} />
          <Route path="/blog/best-social-media-services-chandigarh" element={<BestSocialMediaServices />} />
          <Route path="/blog/best-website-development-chandigarh" element={<BestWebsiteDevelopment />} />
          <Route path="/blog/best-digital-marketing-agency-chandigarh" element={<BestDigitalMarketingAgency />} />
          <Route path="/blog/video-editing-agency-chandigarh" element={<VideoEditingAgency />} />
          <Route path="/blog/whatsapp-scheduled-messages-2026" element={<WhatsAppScheduledMessages />} />
          {/* 404 Catch-all Route - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
