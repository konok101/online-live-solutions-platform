import React from 'react'
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import bgImg from '../../../images/kk.jpeg';
import firstImg from '../../../images/b3.jpg';
import secondImg from '../../../images/loginImg.jpg';
import { Grid } from '@mui/material';

function LiveSolution() {

    const backgroundStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        height: '100%',
        width:'100%',
    }

  return (
    <>
    <Navigation/>
    <div style={backgroundStyle}>
    <div  style={{backgroundColor:'rgba(102,237,234, 0.5)', padding:'12%'}}>
    
    <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center" spacing={{ xs: 3, md: 2 }} style={{marginBottom:'20%'}}  >
    <Grid   item xs={12} sm={12} md={6} >
    <h1  style={{fontWeight:'900', fontSize:'65px'}}>We Are Your <br></br> Solutions</h1>
    <h5>A life without problem and challenges is a meaningless life. Which there isn’t actually. We’re not born with a meaning for our life. Meaning comes from learning who we are and growing as a person. Here you can easily solve your problem lively, solve specific problems with the help of specific category teachers, moreover you can hire for specific time to solve your problem, you will get various live problems solved here.</h5>
    </Grid>
    <Grid   item xs={12} sm={12} md={6} >
    <img src={firstImg} style={{borderRadius: '50px ',width:'40vw',height:'45vh'  }}></img>
    </Grid>
    </Grid>
    <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center" spacing={{ xs: 3, md: 2 }} style={{marginBottom:'10%'}}  >
    <Grid   item xs={12} sm={12} md={6} >
    <img src={secondImg} style={{width:'40vw',borderRadius: '50px ',  height:'40vh'}}></img>
    </Grid>
    <Grid   item xs={12} sm={12} md={6} style={{paddingLeft:'8%'}}>
    <h1  style={{fontWeight:'700', fontSize:'55px'}}>Live Solutions</h1>
    <h5>Educational Live solutions platforms. Starting with one Online Education Tuition in 2009, Thumbay Group’s Education Division has today grown to 5 major Online platforms and six tutors in UAE and India. As per our strategic plan, we plan to have more than 50 experienced totors and experticed admin operational in about 5 years.</h5>
    </Grid>
    </Grid>
    
    
    


    
    </div>
    </div>

    <Footer/>
    </>
  )
}

export default LiveSolution