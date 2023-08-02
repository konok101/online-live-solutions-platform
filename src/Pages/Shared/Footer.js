import { Box, Container, Divider, Grid, List, Typography } from '@mui/material';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Footer = () => {

    const footerStyle = {
        color: 'black',
        background: 'linear-gradient(to right, rgb(6,11,71), rgb(31,33,53))',
        // background: 'linear-gradient(to right, rgb(1,3,28), rgb(31,33,53))',
        // background: 'linear-gradient(to right, rgba(28,84,163, 0.5), rgba(229,203,214, 0.5))',
        height:'100%',
        width: '100%',
        bottom:0,
        paddingTop:'5%',
        paddingLeft:'5%',
       color:'white',
        textAlign: 'left',
        
    };

    return (
        <>
       <Box style={footerStyle} sx={{ flexGrow: 1 }}>

       <Grid container   justifyContent="flex-start"  direction="row" spacing={{ xs: 2, md: 3 }} >
           <Grid item xs={12} sm={12} md={4} style={{  paddingLeft:'5%' }}>

               <Typography variant="h6" component="div" style={{ paddingBottom:'3%', fontWeight:'bold',color:'#b30d52'}} >
                   Contact Us
               </Typography>
               
               <Box style={{ marginBottom:'2%'}}>
               <p > Available 24/7  </p>
                     <p> Dhaka, Bangladesh</p>
                     
                     <p > 01947473492</p>
                     <p  > educationlivesolutions@gmail.com</p> 

               </Box>
               
             

           </Grid>

           <Grid item xs={12} sm={12} md={4}  style={{  paddingLeft:'5%', marginBottom:"7%" }}>
               <Typography variant="h6" component="div"  style={{ paddingBottom:'3%',  fontWeight:'bold',color:'#b30d52', }} >
                  Useful Links
               </Typography>
              
               <Link to="/home" color="inherit" style={{ textDecoration: 'none', fontWeight: 425, }}>
                   Home
               </Link><br></br>
              
               <Link to="/contact" color="inherit" style={{ textDecoration: 'none',fontWeight: 425 , marginBottom:'4%'}}>
                   Contact Us
               </Link><br></br>
              
               <Link to="/login" color="inherit" style={{ textDecoration: 'none',fontWeight: 425 }}>
                   Login
               </Link><br></br>
               <Link to="/register" color="inherit" style={{ textDecoration: 'none',fontWeight: 425 }}>
                   Register
               </Link><br></br>
           </Grid>

           <Grid item xs={12} sm={12} md={4} style={{  paddingLeft:'5%' }}>
               <Typography variant="h6" component="div"  style={{paddingBottom:'5%',fontWeight:'bold',color:'#b30d52', paddingTop:'5px', paddingRight:'15px'}} >
               Follow Us
               </Typography>
               <Box >
                   <Link to="https://www.facebook.com/rockykonok" target="_blank" color="inherit">
                       <FacebookIcon
                           style={{
                               color: 'white', width: '20px', height: '22px', margin: '8px', borderRadius: 3
                           }}
                       />
                   </Link>
                   <Link to="https://www.instagram.com/" target="_blank" color="inherit">
                       <InstagramIcon
                           style={{ color: ' white ', width: '20px', height: '22px', margin: '8px', borderRadius: 3 }}
                       />
                   </Link>
                   <Link to="https://twitter.com/" target="_blank" color="inherit">
                       <TwitterIcon
                           style={{ color: 'white ', width: '20px', height: '22px', margin: '8px', borderRadius: 3 }}
                       />
                   </Link>
                   <Link to="https://www.linkedin.com/in/konok-majamder/" target="_blank" color="inherit">
                       <VoiceChatIcon
                           style={{ color: 'white', width: '20px', height: '22px', margin: '8px', borderRadius: 3 }}
                       />
                   </Link>
               </Box>

          </Grid>
 
           </Grid>

      
         
       <Divider sx={{ backgroundColor: 'gray', width: "90%" }} style={{ marginBottom: '4%', marginTop:'2%' }}></Divider>

            <Typography style={{  paddingBottom: '5%',paddingTop:'1%', textAlign:'center' }}>© 2023 Education Live Solutions platform. All rights reserved. Dhaka, Bangladesh.  </Typography>
       </Box >
        </>
    );
};

export default Footer;
