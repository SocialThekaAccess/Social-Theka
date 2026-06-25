import './App.css'
import { useState } from 'react'
import Home from './Component/Home'
import PPCServicePage from './Pages/OurServices/PPCServicePage'
import WebDevChandigarh from './Pages/OurServices/WebDevChandigarh'
import Webdesignchandigarh from './Pages/OurServices/Webdesignchandigarh'
import SEOchandigarh from './Pages/OurServices/SEOchandigarh'
import VideoEditingChd from './Pages/OurServices/VideoEditingChd'
import SocialMediachandigarh from './Pages/OurServices/SocialMediachandigarh'
import ThekaStory from './ThekaStory/Thekastory'
import ContactUs from './ContactUs/ContactUs'
import Navbar from './Component/Navbar'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home'                 && <Home />}
      {currentPage === 'theka-story'          && <ThekaStory />}
      {currentPage === 'contact'              && <ContactUs />}
      {currentPage === 'ppc'                  && <PPCServicePage />}
      {currentPage === 'webdev-chandigarh'    && <WebDevChandigarh />}
      {currentPage === 'webdesign-chandigarh' && <Webdesignchandigarh />}
      {currentPage === 'seo-chandigarh'       && <SEOchandigarh />}
      {currentPage === 'video-chandigarh'     && <VideoEditingChd />}
      {currentPage === 'social-chandigarh'    && <SocialMediachandigarh />}
    </>
  )
}

export default App