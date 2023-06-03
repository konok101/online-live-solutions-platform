import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import man1 from '../../../images/stu6.jpg';
import man2 from '../../../images/stu7.jpg';

import women1 from '../../../images/stu9.png';
import signImg from '../../../images/cap.jpg';
const SlideTwoStudentReview = () => {


    const backgroundDesign = {
        backgroundColor:'#e8e9ee',
        padding:'5%',
        
       
    }

    const imgStyle={
        // border: "1px solid black",
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop:'-40px',
        marginLeft:'40px',
        // border:  "5px solid #f17917"   
    }
  return (
    
    <Box sx={{ flexGrow: 1}} style={backgroundDesign}>
 
    <Typography variant='h4' style={{marginBottom:'5%', textAlign:'center', color:'#1fa4b7'}}>Student Review</Typography>
   
    <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center" style={{borderRadius: 50}}   spacing={{ xs: 3, md: 3}} columns={{ xs: 4, sm: 12, md: 12 }}>

        
    
        <Grid  component="div" item  xs={4} sm={4} md={4} style={{borderRadius: 50, }}>
             <Paper elevation={0} style={{border:  "2px solid #1fa4b7", borderRadius:'20px'}} >
             <Box>
             <img
             style={imgStyle} src={women1}
               alt="book is not found"></img>
            </Box>
             <Box style={{padding:'15%',textAlign:'left'}}>
             <p >❝Tanima Rima is a brilliant student She do her higher study from abroad and She is successful in her life.❞</p> <br/>
            <Grid container justifyContent="space-between" spacing={{ xs: 3, md: 5}} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item  xs={6} sm={6} md={6}>
            <Typography>Jhon Smeeth</Typography>
            <Typography>Jhon Smeeth</Typography>
            </Grid>

            <Grid item  xs={6} sm={6} md={6}>
            <img src={signImg} alt='quoatation img'></img>
            </Grid>
            </Grid>
             </Box>
             
             </Paper>
        </Grid>


        <Grid  component="div" item  xs={4} sm={4} md={4} style={{borderRadius: 50}}>
             <Paper elevation={0} style={{border:  "2px solid #1fa4b7", borderRadius:'20px'}} >
            <Box>
             <img
             style={imgStyle} src={man1}
               alt="book is not found"></img>
            </Box>
             <Box style={{padding:'15%',textAlign:'left'}}>
             <p >❝ Tanima Rima is a brilliant student She do her higher study from abroad and She is successful in her life.❞</p> <br/>
            <Grid container justifyContent="space-between" spacing={{ xs: 3, md: 5}} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item  xs={6} sm={6} md={6}>
            <Typography>Jhon Smeeth</Typography>
            <Typography>Jhon Smeeth</Typography>
            </Grid>

            <Grid item  xs={6} sm={6} md={6}>
            <img src={signImg} alt='quoatation img'></img>
            </Grid>
            </Grid>
             </Box>
             </Paper>
        </Grid>



        <Grid  component="div" item  xs={4} sm={4} md={4} style={{borderRadius: 50}}>
             <Paper elevation={0} style={{border:  "2px solid #1fa4b7", borderRadius:'20px'}} >
            <Box>
             <img
             style={imgStyle} src={man2}
               alt="book is not found"></img>
            </Box>
             <Box style={{padding:'15%',textAlign:'left'}}>
             <p >❝ Tanima Rima is a brilliant student She do her higher study from abroad and She is successful in her life.❞</p> <br/>
            <Grid container justifyContent="space-between" spacing={{ xs: 3, md: 5}} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Grid item  xs={6} sm={6} md={6}>
            <Typography>Jhon Smeeth</Typography>
            <Typography>Jhon Smeeth</Typography>
            </Grid>

            <Grid item  xs={6} sm={6} md={6}>
            <img src={signImg} alt='quoatation img'></img>
            </Grid>
            </Grid>
             </Box>
             </Paper>
        </Grid>
          
    
    


        </Grid>
       
        </Box>

  );
};
export default  SlideTwoStudentReview;