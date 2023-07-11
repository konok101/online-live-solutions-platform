import React from 'react'
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import bgImg from '../../../images/kk.jpeg';
import { Box, Container, Grid } from '@mui/material';
import firstImg from '../../../images/vision.jpg';
import secondImg from '../../../images/targetp.jpg';
import thirdImg from '../../../images/b2.jpg';

function LearnMore() {

  const backgroundStyle = {
    // position: 'relative',
    // backgroundColor:'blue',
    backgroundImage: `url(${bgImg})`,

    // backgroundImage: `url(${bgImg}) no repeat center`,
    backgroundSize: 'cover',
    // center,
    // height: '85vh',
    height: '100%',
    width:'100%',
    // overflow: 'hidden'
    // opacity: '0.8'
    // background: 'rgba(76, 175, 80, 0.5)',
}

  return (
    <>
    <Navigation/>

    <div style={backgroundStyle}>
    <div  style={{backgroundColor:'rgba(102,237,234, 0.4)', padding:'10%'}}>

    <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center" spacing={{ xs: 3, md: 2 }} style={{marginBottom:'10%'}}  >
    <Grid   item xs={12} sm={12} md={6} style={{color:'white', }}>
    <h1  >Our Target</h1>
    <h5>
A live solutions platform is a digital platform that connects users with experts or professionals who can provide real-time assistance, advice, or solutions to various problems or challenges. These platforms typically leverage technology such as video conferencing, chat, and other communication tools to enable live interactions between users and experts.</h5>
    </Grid>
    <Grid   item xs={12} sm={12} md={6} >
    <img src={secondImg} style={{borderRadius: '50px ',width:'40vw',height:'40vh'  }}></img>
    </Grid>
    </Grid>
    

    <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center" spacing={{ xs: 3, md: 2 }} style={{marginBottom:'10%'}}  >
    <Grid   item xs={12} sm={12} md={6} >
    <img src={firstImg} style={{width:'40vw',borderRadius: '50px ',  height:'40vh'}}></img>
    </Grid>
    <Grid   item xs={12} sm={12} md={6} style={{color:'white', paddingLeft:'5%'}}>
    <h1  >  Our Vision  </h1>
    <h5>The vision of a live solutions platform is to create a global ecosystem where individuals and organizations can easily connect with experts or professionals in real-time to obtain immediate solutions, guidance, and support. The platform aims to break down geographical barriers, enhance accessibility, and leverage technology to facilitate seamless interactions between users and experts..</h5>
    </Grid>
    </Grid>


  
    </div>
    </div>


    <Footer/>
    </>
  );
};

export default LearnMore;