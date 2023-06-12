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
                                             <Box style={{paddingTop:'10%'}}  >
                                                  Meals Provided
                                             </Box>
                                             <Tooltip title=" The propagation of universities was not necessarily a steady progression.

                                             "
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
                                                            <LocalDiningIcon sx={{ fontSize: 70, 
                                                                 padding:'22%', borderRadius: '50%' }} />
                                                       </Box>
                                                  </Button>
                                             </Tooltip>
                                        </Grid>

                                        <Grid sx={{ display: 'flex', alignItems: "center" }}>
                                             <Box style={{paddingTop:'10%',paddingRight:'12%' }} >
                                             Lessons
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
                                                            <PublicIcon sx={{ fontSize: 70,  padding:'22%',borderRadius: '50%' }} />
                                                       </Box>
                                                  </Button>
                                             </Tooltip>
                                        </Grid>

                                        <Grid sx={{ display: 'flex', alignItems: "center" }}>
                                             <Box style={{paddingTop:'10%'}} >
                                             Transportation
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
                                                            <DirectionsBusIcon  sx={{ fontSize: 70, padding:'22%', borderRadius: '50%' }} />
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

                                        <Tooltip title=" Provided tip Meals tip Meals Provided tip"
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
                                                       <DirectionsBusIcon sx={{ fontSize: 70, padding:'22%', borderRadius: '50%' }} />
                                                  </Box>
                                             </Button>
                                        </Tooltip>
                                        <Box style={{paddingTop:'10%',paddingLeft:'8%'}}>

                                        Full Day Session
                                        </Box>
                                   </Grid>

                                   <Grid sx={{ display: 'flex', alignItems: "center" }} style={{ marginLeft: "120px" }}>

                                        <Tooltip title=" Provided tip Meals tip Meals Provided tip"
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
                                                       <BookmarkIcon sx={{ fontSize: 70, padding:'22%', borderRadius: '50%' }} />
                                                  </Box>
                                             </Button>
                                        </Tooltip>

                                        <Box  style={{paddingTop:'10%',paddingLeft:'8%'}}>
                                        Special Education
                                        </Box>
                                   </Grid>




                                   <Grid sx={{ display: 'flex', alignItems: "center", ml: 5 }} style={{ marginLeft: "120px" }}>

                                        <Tooltip title=" Provided tip Meals tip Meals Provided tip"
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