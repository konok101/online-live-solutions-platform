import React from 'react'
import Banner from './Banner';
import Navigation from '../Shared/Navigation';
import Services from './Services';
import FaqQuestions from './FAQ/FaqQuestions';
import ContactUs from '../Contact/ContactUs';
import Footer from '../Shared/Footer';
import WhyChose from './WhyChoose/WhyChose';
import TotalUserCount from './TotalUserCount/TotalUserCount';
import Events from './Events/Events';
 
function Home() {

  const homeStyle = {
    background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))'
  }
  return (
    <div style={homeStyle}>

      <Navigation />
      <Banner />
      <WhyChose/>
      <TotalUserCount/>
      <Services />
      <Events/>
      <FaqQuestions />
      <ContactUs/>
      
    </div>
  )
}

export default Home