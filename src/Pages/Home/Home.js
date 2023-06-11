import React, { useContext } from 'react'
import Banner from './Banner';
import Navigation from '../Shared/Navigation';
import Services from './Services';
import FaqQuestions from './FAQ/FaqQuestions';
import ContactUs from '../Contact/ContactUs';
import Footer from '../Shared/Footer';
import WhyChose from './WhyChoose/WhyChose';
import TotalUserCount from './TotalUserCount/TotalUserCount';
import Events from './Events/Events';
import Course from '../Course/Course';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
function Home() {

  const homeStyle = {
    background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))'
  }
  const { user, admin, teacher, logOut } = useContext(AuthContext);
  return (
    <div style={homeStyle}>

      <Navigation />
      <Banner />
      <WhyChose />
      <TotalUserCount />
      {
        user?.email && 
          <Course />
      }
    
      <Services />
      <Events />
      <FaqQuestions />
      <ContactUs />

    </div>
  )
}

export default Home