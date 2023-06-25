import React, { useContext } from 'react'
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
import BannerPart2 from './BannerPart2';
import MessageBox from '../Shared/MessageBox';
import CarouselBanner from './Banner/CarouselBanner';
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";






function Home() {

  const homeStyle = {
    background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))'
  }
  const { user, admin, teacher, logOut } = useContext(AuthContext);

  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);


  return (
    <div style={homeStyle}>

      {/*<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />*/}
      <Navigation />

      <CarouselBanner />
      <BannerPart2 />
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
      <MessageBox />
    </div>
  )
}

export default Home