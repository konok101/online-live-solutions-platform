import { Button, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";



function BannerPart2() {

  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);


  return (
    <>

    {/*  <Particles
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
      /> */}



      <div style={{
        width: '100vw',
        paddingBottom: '4%',
        backgroundColor: '#2db6a3',
        color: '#16255d',
        paddingTop: '3%'
      }}>

        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center" spacing={{ xs: 2, md: 3 }} style={{ paddingTop: '2%' }}>
          <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center', color: '#fff', borderRight: "2px solid #e7dcd9", }}>
            <h2>OUR  TEACHERS</h2>
            <p style={{ marginLeft: '4%', marginRight: '4%' }}>A teacher is a person who helps students to acquire knowledge, competence or virtue.</p>

            <Link style={{ textDecoration: 'none' }} to="/ourTeachers" target="_blank" >

              <button variant="outlined" className='viewMoreButtonHoverBanner' type="submit" style={{
                marginTop: '2%', padding: '8px 35px',
                fontWeight: '600',
                fontSize: '18px',
                borderRadius: '4px',
              }}>VIEW TEACHERS</button>

            </Link>

          </Grid>

          <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center', color: '#fff', borderRight: "2px solid #e7dcd9" }}>
            <h2>APPLIY FOR A TEACHER</h2>
            <p style={{ paddingLeft: '8%', paddingRight: '8%' }}>Submit your formal document for job candidates to fill out in response to this open position. </p>
            <Link style={{ textDecoration: 'none' }} to="/applyForTeacher" target="_blank"  >
              <button variant="outlined" className='viewMoreButtonHoverBanner' type="submit" style={{
                marginTop: '2%', padding: '8px 35px',
                fontWeight: '600',
                fontSize: '18px',
                borderRadius: '4px'
              }}>VIEW MORE</button>
            </Link>
          </Grid>

          <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center', color: '#fff' }}>
            <h2>REVIEWS</h2>
            <p style={{ paddingLeft: '8%', paddingRight: '8%' }}>This reviews means the process of someone reading, checking and giving his or her opinion. </p>
            <Link style={{ textDecoration: 'none' }}
              to="/ourReviews" target="_blank"  >
              <button variant="outlined" className='viewMoreButtonHoverBanner' //type="submit"
                style={{
                  marginTop: '2%', padding: '8px 35px',
                  fontWeight: '600',
                  fontSize: '18px',
                  borderRadius: '4px'
                }}>VIEW MORE</button>
            </Link>
          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default BannerPart2