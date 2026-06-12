import './App.css'
import { useState } from 'react'
import Home from './Component/Home'
import PPCServicePage from './Pages/OurServices/PPCServicePage'
import PPCServicePageDelhi from './Pages/OurServices/PPCServicePageDelhi'
import WebDevChandigarh from './Pages/OurServices/WebDevChandigarh'
import WebDevDelhi from './Pages/OurServices/WebDevDelhi'
import Webdesignchandigarh from './Pages/OurServices/Webdesignchandigarh'
import WebDesignDelhi from './Pages/OurServices/WebDesignDelhi'
import SEOdelhi from './Pages/OurServices/SEOdelhi'
import SEOchandigarh from './Pages/OurServices/SEOchandigarh'
import VideoEditingChd from './Pages/OurServices/VideoEditingChd'
import VideoEditingDelhi from './Pages/OurServices/VideoEditingDelhi'
import SocialMediaDelhi from './Pages/OurServices/SocialMediaDelhi'
import SocialMediachandigarh from './Pages/OurServices/SocialMediachandigarh'
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
      {currentPage === 'webdesign-chandigarh' && <Webdesignchandigarh />}
      {currentPage === 'webdesign-delhi'      && <WebDesignDelhi />}
      {currentPage === 'seo-delhi'            && <SEOdelhi />}
      {currentPage === 'seo-chandigarh'       && <SEOchandigarh />}
      {currentPage === 'video-chandigarh'     && <VideoEditingChd />}
      {currentPage === 'video-delhi'          && <VideoEditingDelhi />}
      {currentPage === 'social-delhi'         && <SocialMediaDelhi />}
      {currentPage === 'social-chandigarh'    && <SocialMediachandigarh />}
    </>
  )
}

export default App