import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import PPCServicePage from './Pages/OurServices/PPCServicePage'
import WebDevChandigarh from './Pages/OurServices/WebDevChandigarh'
import Webdesignchandigarh from './Pages/OurServices/Webdesignchandigarh'
import SEOchandigarh from './Pages/OurServices/SEOchandigarh'
import VideoEditingChd from './Pages/OurServices/VideoEditingChd'
import SocialMediachandigarh from './Pages/OurServices/SocialMediachandigarh'
import ThekaStory from "./Pages/ThekaStory/ThekaStory";
import ContactUs from './ContactUs/ContactUs'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                           element={<Home />} />
        <Route path="/theka-story"                element={<ThekaStory />} />
        <Route path="/contact"                    element={<ContactUs />} />
        <Route path="/services/ppc"               element={<PPCServicePage />} />
        <Route path="/services/web-development"   element={<WebDevChandigarh />} />
        <Route path="/services/web-design"        element={<Webdesignchandigarh />} />
        <Route path="/services/seo"               element={<SEOchandigarh />} />
        <Route path="/services/video-editing"     element={<VideoEditingChd />} />
        <Route path="/services/social-media"      element={<SocialMediachandigarh />} />
        {/* catch-all → home */}
        <Route path="*"                           element={<Home />} />
      </Routes>
    </>
  )
}

export default App
