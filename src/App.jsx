import './App.css'
import { useState } from 'react'
import Home from './Component/Home'
import PPCServicePage from './Pages/OurServices/PPCServicePage'
import PPCServicePageDelhi from './Pages/OurServices/PPCServicePageDelhi'
import WebDevChandigarh from './Pages/OurServices/WebDevChandigarh'
import WebDevDelhi from './Pages/OurServices/WebDevDelhi'
import WebDesignChandigarh from './Pages/OurServices/WebDesignChandigarh'
import WebDesignDelhi from './Pages/OurServices/WebDesignDelhi'
import SEODelhi from './Pages/OurServices/SEOdelhi'
import SEOChandigarh from './Pages/OurServices/SEOchandigarh'
import VideoEditingChd from './Pages/OurServices/VideoEditingChd'
import VideoEditingDelhi from './Pages/OurServices/VideoEditingDelhi'
import SocialMediaDelhi from './Pages/OurServices/SocialMediaDelhi'
import SocialMediaChandigarh from './Pages/OurServices/SocialMediachandigarh'
import Navbar from './Component/Navbar'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home'                 && <Home />}
      {currentPage === 'ppc'                  && <PPCServicePage />}
      {currentPage === 'ppc-delhi'            && <PPCServicePageDelhi />}
      {currentPage === 'webdev-chandigarh'    && <WebDevChandigarh />}
      {currentPage === 'webdev-delhi'         && <WebDevDelhi />}
      {currentPage === 'webdesign-chandigarh' && <WebDesignChandigarh />}
      {currentPage === 'webdesign-delhi'      && <WebDesignDelhi />}
      {currentPage === 'seo-delhi'            && <SEODelhi />}
      {currentPage === 'seo-chandigarh'       && <SEOChandigarh />}
      {currentPage === 'video-chandigarh'     && <VideoEditingChd />}
      {currentPage === 'video-delhi'          && <VideoEditingDelhi />}
      {currentPage === 'social-delhi'         && <SocialMediaDelhi />}
      {currentPage === 'social-chandigarh'    && <SocialMediaChandigarh />}
    </>
  )
}

export default App