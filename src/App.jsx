import './App.css'
import { useState } from 'react'
import Home from './Component/Home'
import PPCServicePage from './Pages/OurServices/PPCServicePage'
import PPCServicePageDelhi from './Pages/OurServices/PPCServicePageDelhi'
import WebDevChandigarh from './Pages/OurServices/WebDevChandigarh'
import WebDevDelhi from './Pages/OurServices/WebDevDelhi'
import Navbar from './Component/Navbar'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home'              && <Home />}
      {currentPage === 'ppc'               && <PPCServicePage />}
      {currentPage === 'ppc-delhi'         && <PPCServicePageDelhi />}
      {currentPage === 'webdev-chandigarh' && <WebDevChandigarh />}
      {currentPage === 'webdev-delhi'      && <WebDevDelhi />}
    </>
  )
}

export default App
