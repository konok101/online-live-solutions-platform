import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Stack } from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PublicIcon from '@mui/icons-material/Public';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SchoolIcon from '@mui/icons-material/School';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Tooltip from '@mui/material/Tooltip';
import { CheckCircle, EmergencyRecording, LaptopChromebook, MusicVideo, Stairs } from '@mui/icons-material';
const Item = styled(Paper)(({ theme }) => ({
     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
     ...theme.typography.body2,
     padding: theme.spacing(1),
     textAlign: 'center',
     color: theme.palette.text.secondary,
}));

const WhyChose = () => {

     return (
          <div style={{ paddingTop: "5%", paddingBottom: '4%', backgroundColor: "#FFFFFF", overflow: 'hidden' }}>
               <Box style={{ maxWidth: "80%", margin: "auto" }}>
                    <h1 style={{ maxWidth: "400px", margin: "auto", marginTop: "30px" }}> WHY CHOOSE US</h1>
                    <h5 style={{ maxWidth: "600px", margin: "auto", marginTop: "3px" }}> Are you thinking about completing a higher education programme?</h5>
                    <Grid container spacing={2}>
                         <Grid item xs={12} sm={12} md={6} lg={4} >
                              <Box sx={{ width: '100%' }}>
                                   <Stack spacing={5}>


                                        <Grid sx={{ display: 'flex', alignItems: "center" }}>
                                             <Box style={{paddingTop:'10%', paddingRight:'2%', marginLeft:"9%"  }}  >
                                                  Live Classes
                                             </Box>
                                             <Tooltip  title=" We are provide live classes and fast solutions "
                                                  ____
                                                  placement="left"  sx={{ mt: 5,  }}>
                                                  <Button>
                                                       <Box sx={{
                                                            ml: 2, borderRadius: '50%', ":hover": {
                                                                 bgcolor: "#2db6a3",
                                                                 color: "white"
                                                            },
                                                            border: "2px solid #2db6a3"
                                                       }}     >
                                                            <EmergencyRecording sx={{ fontSize: 70, 
                                                                 padding:'22%', borderRadius: '50%' }} />
                                                       </Box>
                                                  </Button>
                                             </Tooltip>
                                        </Grid>





                                        <Grid sx={{ display: 'flex', alignItems: "center" }}>
                                             <Box style={{paddingTop:'10%', paddingRight:'1%' }}  >
                                              Emergency Support
                                             </Box>
                                             <Tooltip  title=" If any one need emergency support. We can provide it "
                                                  ____
                                                  placement="left"  sx={{ mt: 5,  }}>
                                                  <Button>
                                                       <Box sx={{
                                                            ml: 2, borderRadius: '50%', ":hover": {
                                                                 bgcolor: "#2db6a3",
                                                                 color: "white"
                                                            },
                                                            border: "2px solid #2db6a3"
                                                       }}     >
                                                              <LaptopChromebook sx={{ fontSize: 70,  padding:'22%',borderRadius: '50%' }} />
                                                       </Box>
                                                  </Button>
                                             </Tooltip>
                                        </Grid>

                                        <Grid sx={{ display: 'flex', alignItems: "center" }}>
                                             <Box style={{paddingTop:'10%', paddingRight:'2%',  marginLeft:"6%"  }}  >
                                              Record classes
                                             </Box>
                                             <Tooltip  title=" We  can record class and provide this record class "
                                                  ____
                                                  placement="left"  sx={{ mt: 5,  }}>
                                                  <Button>
                                                       <Box sx={{
                                                            ml: 2, borderRadius: '50%', ":hover": {
                                                                 bgcolor: "#2db6a3",
                                                                 color: "white"
                                                            },
                                                            border: "2px solid #2db6a3"
                                                       }}     >
                                                                                                         
                                                       
                                        <MusicVideo  sx={{ fontSize: 70, padding:'22%', borderRadius: '50%' }} />

                                                       </Box>
                                                  </Button>
                                             </Tooltip>
                                        </Grid>








                               
                                        <Grid sx={{ display: 'flex', alignItems: "center" }}>
                                             <Box style={{paddingTop:'10%'}} >
                                          
                                             </Box>
                                             <Tooltip title=" Provided tip Meals tip Meals Provided tip"
                                                  ____
                                                  placement="left" sx={{ mt: 5 }}>
                                                  <Button>
                                                       <Box sx={{
                                                            ml: 2, borderRadius: '50%', ":hover": {
                                                                 bgcolor: "#2db6a3",
                                                                 color: "white"
                                                            },
                                                            border: "2px solid #2db6a3"
                                                       }}     >
                                                       </Box>
                                                  </Button>
                                             </Tooltip>
                                        </Grid>
                                   </Stack>
                              </Box>
                         </Grid>
                         <Grid item xs={12} sm={12} md={6} lg={4} sx={{ marginTop: "20px" }}>
                              <img src="https://htmldemo.net/educan/educan/images/choose/1.png" alt="" />
                         </Grid>
                         <Grid item xs={12} lg={4} sm={12} md={6}>
                              <Stack spacing={5}>
                                   <Grid sx={{ display: 'flex', alignItems: "center" }} style={{ marginLeft: "120px" }}>

                                        <Tooltip title=" We are arrange career session every month"
                                             ____
                                             placement="right" sx={{ mt: 5 }}>
                                             <Button>
                                                  <Box sx={{
                                                       ml: 2, borderRadius: '50%', ":hover": {
                                                            bgcolor: "#2db6a3",
                                                            color: "white"
                                                       },
                                                       border: "2px solid #2db6a3"
                                                  }}     >
                                                       <Stairs sx={{ fontSize: 70, padding:'22%', borderRadius: '50%' }} />
                                                  </Box>
                                             </Button>
                                        </Tooltip>
                                        <Box style={{paddingTop:'10%',paddingLeft:'8%'}}>

                                        Career Session
                                        </Box>
                                   </Grid>

                                   <Grid sx={{ display: 'flex', alignItems: "center" }} style={{ marginLeft: "120px" }}>

                                        <Tooltip title="We are provide special education for enroll users"
                                             ____
                                             placement="right" sx={{ mt: 5 }}>
                                             <Button>
                                                  <Box sx={{
                                                       ml: 2, borderRadius: '50%', ":hover": {
                                                            bgcolor: "#2db6a3",
                                                            color: "white"
                                                       },
                                                       border: "2px solid #2db6a3"
                                                  }}     >
                                                       <SchoolIcon sx={{ fontSize: 70, padding:'22%', borderRadius: '50%' }} />
                                                  </Box>
                                             </Button>
                                        </Tooltip>

                                        <Box  style={{paddingTop:'10%',paddingLeft:'8%'}}>
                                        Special Education
                                        </Box>
                                   </Grid>




                                   <Grid sx={{ display: 'flex', alignItems: "center", ml: 5 }} style={{ marginLeft: "120px" }}>

                                        <Tooltip title="We are provided  qualified teachers , who are studied reputed university "
                                             ____
                                             placement="right" sx={{ mt: 5 }}>
                                             <Button>
                                                  <Box sx={{
                                                       ml: 2, borderRadius: '50%', ":hover": {
                                                            bgcolor: "#2db6a3",
                                                            color: "white"
                                                       },
                                                       border: "2px solid #2db6a3"
                                                  }}     >
                                                       <CheckCircle sx={{ fontSize: 70, padding:'22%', borderRadius: '50%' }} />
                                                  </Box>
                                             </Button>
                                        </Tooltip>
                                        <Box  style={{paddingTop:'10%', paddingLeft:'8%'}}>
                                        Qualified Teachers
                                        </Box>
                                   </Grid>

                              </Stack>
                         </Grid>
                    </Grid>
               </Box>



          </div>
     );
};

export default WhyChose;