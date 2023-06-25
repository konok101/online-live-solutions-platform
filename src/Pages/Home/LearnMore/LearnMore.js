import React from 'react'
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import bgImg from '../../../images/kk.jpeg';
import { Box, Container, Grid } from '@mui/material';
import firstImg from '../../../images/b7.jpg';
import secondImg from '../../../images/b9.jpg';
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
    <h1  >Our Achievement</h1>
    <h5>Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theitry’s snce simply dummy text of the printing.Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna euismod.Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been their.</h5>
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
    <h1  >  Industry Visit  </h1>
    <h5>Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theitry’s snce simply dummy text of the printing.Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna euismod.Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been their.</h5>
    </Grid>
    </Grid>


    <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center" spacing={{ xs: 3, md: 2 }} style={{marginBottom:'5%'}}  >
    
    <Grid   item xs={12} sm={12} md={6} style={{color:'white', paddingLeft:'5%'}}>
    <h1  >Legendary Team work</h1>
    <h5>Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been theitry’s snce simply dummy text of the printing.Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna euismod.Tmply dummy text of the printing and typesetting indust Lorem Ipsum has been their.</h5>
    </Grid>
    <Grid   item xs={12} sm={12} md={6} >
    <img src={thirdImg} style={{width:'40vw',borderRadius: '50px ',  height:'40vh'}}></img>
    </Grid>
    </Grid>
    </div>
    </div>


    <Footer/>
    </>
  );
};

export default LearnMore;