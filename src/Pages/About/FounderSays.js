import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import founderImg from "../../images/konok.jpg";
// import founderImg from "../../images/elonmask.jpg";
import coFounderImg from "../../images/aditi.jpg";
import principleImg from "../../images/emn.jpg";
// import principleImg from "../../images/principle.jpg";

function FounderSays() {

  const backgroundDesign = {
  
    borderRadius: '15px ',
    paddingBottom: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
  }

  return (
    <Box sx={{ flexGrow: 1 }} style={backgroundDesign}>

      <Typography variant='h4' style={{ display: 'flex', justifyContent: "flex-end", paddingRight: '13%', paddingTop: '5%' }}>Message from founder & Chairman</Typography>
      <Divider style={{ height: '2%' }}></Divider>
      <Grid container direction="row"
        justifyContent="center"
        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        <Grid component="div" item xs={4} sm={6} md={4}>
          <img
            style={{ position: 'relative', height: '55%', borderRadius: '15px 50px 30px 5px', marginTop: '3%', marginRight: '10%', width: '85%', padding: '5px 0 0 55px' }}
            src={founderImg} alt="book is not found"></img>
          
        </Grid >
        <Grid container item xs={4} sm={6} md={8} style={{ textAlign: 'center', padding: '5%' }} >
     
          <p style={{ paddingTop: '5%', textAlign: 'left' }}>Educational Live solutions platforms. Starting with one Online Education solution in 2023, Eductional Group’s Education Division has today grown to 5 major Online platforms and six tutors in UAE and India. As per our strategic plan, we plan to have more than 50 experienced totors and experticed admin operational in about 1 years. With our experience in education, solution and research, we are determined to expand our horizons to various other countries including  Middle East, the African continent and India.</p>
        </Grid>
      </Grid>

      <Typography variant='h4' style={{ display: 'flex', justifyContent: "flex-start", paddingLeft: '13%', paddingTop: '5%' }}>Message from Co-founder</Typography>
      <Divider style={{ height: '2%' }}></Divider>
      <Grid container direction="row"
        justifyContent="center"
        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>


        <Grid container item xs={4} sm={6} md={8} style={{ textAlign: 'center', padding: '5%' }} >
          <p style={{ paddingTop: '5%', textAlign: 'left' }}>
            Educational Live solutions platforms. Starting with one Online Education solution in 2023,  Education Division has today grown to 5 major Online platforms and six tutors in UAE and India. As per our strategic plan, we plan to have more than 50 experienced totors and experticed admin operational in about 5 years. With our experience in education, solution and research, we are determined to expand our horizons to various other countries including India, Middle East.</p>
        </Grid>


        <Grid component="div" item xs={4} sm={6} md={4}  //data-aos="fade-up"
        >
          <img
            style={{ position: 'relative', height: '55%', borderRadius: '50px 15px 30px 50px', marginTop: '3%', marginRight: '10%', width: '85%', padding: '5px 0 0 55px' }}
            src={coFounderImg} alt="book is not found"></img>
        </Grid>
      </Grid>




      <Typography variant='h4' style={{ display: 'flex', justifyContent: "flex-end", paddingRight: '13%', paddingTop: '5%' }}>Message from Managing Director</Typography>
      <Divider style={{ height: '2%' }}></Divider>
      <Grid container direction="row"
        justifyContent="center"
        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        <Grid component="div" item xs={4} sm={6} md={4}  //data-aos="fade-up"
        >
          <img
            style={{ position: 'relative', height: '55%', borderRadius: '15px 50px 30px 5px', marginTop: '3%', marginRight: '10%', width: '85%', padding: '5px 0 0 55px' }}
            src={principleImg} alt="book is not found"></img>
        </Grid>
        <Grid container item xs={4} sm={6} md={8} style={{ textAlign: 'center', padding: '5%' }} >
          <p style={{ paddingTop: '5%', textAlign: 'left' }}>Educational Live solutions platforms. Starting with one Online Education solution in 2009, Thumbay Group’s Education Division has today grown to 5 major Online platforms and six tutors in UAE and India. As per our strategic plan, we plan to have more than 50 experienced totors and experticed admin operational in about 5 years. With our experience in education, solution and research, we are determined to expand our horizons to various other countries including India, Middle East and the African continent.</p>
        </Grid>
      </Grid>


    </Box>
  )
}

export default FounderSays;