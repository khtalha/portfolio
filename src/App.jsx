
import {BrowserRouter} from 'react-router-dom';
import {About,Contact,Experience,
Feedbacks, Hero, Navbar, Tech, Works,
StarsCanvas
} from './components';
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <div className='realitive z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover 
      bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      
      <Works/>
      <Feedbacks/>
      <div className='z-0 relative '>
        <Contact/>
        
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App