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
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
