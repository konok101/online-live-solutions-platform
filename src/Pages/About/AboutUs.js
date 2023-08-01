import React from 'react'
import Footer from '../Shared/Footer'
import Navigation from '../Shared/Navigation'
import FaqQuestions from '../Home/FAQ/FaqQuestions'

import FounderSays from './FounderSays'

function AboutUs() {
  const homeStyle={
    background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))',
    width:'98.6vw',
    overflowX: 'hidden',
    overflowY: 'hidden',
  }
  return (
    <div style={homeStyle}>
      
    <Navigation></Navigation>
    <FounderSays></FounderSays>
    <FaqQuestions></FaqQuestions>
    <Footer></Footer>
    </div>
  )
}

export default AboutUs