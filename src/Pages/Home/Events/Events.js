import React from 'react';
import bgImg from '../../../images/one.jpg';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Events() {
      const backgroundStyle = {
            position: 'relative',
            // backgroundColor:'blue',
            background: 'linear-gradient(to right,  rgb(34,37,71), rgb(34,37,71))',
            // backgroundImage: `url(${bgImg})`,
            marginTop: '2%',
            backgroundSize: 'cover',
            // height: '90vh',
      }

      const fontStyle = {
            position: 'absolute',
            top: '20%',
            left: '10%',
            // transform: 'translate(-50%, -50%)',
            // textAlign:'center',
            color: 'white',
            fontWeight: '700',


      }
      return (
            <>
                  <div style={backgroundStyle}>
                        <Box>
                              <Typography style={{ fontSize: '30px', width: "80%", margin: "auto", color: "#FFFFFF", paddingTop: "2px" }}> <marquee>UPCOMING EVENTS</marquee> </Typography>

                              <Typography style={{ fontSize: '20px', marginTop: "-50px", width: " 500px", margin: "auto", color: "#FFFFFF" }}> Upcoming Educational Events for your future career.</Typography>

                        </Box>

                        <Box sx={{ flexGrow: 1 }} style={{ width: "70%", paddingBottom: '5%', margin: "auto" }}>
                              <Grid container sx={{ mt: 2 }} spacing={5}>


                                    <Grid item xs={12} sm={12} md={6} >
                                          <Box>
                                                <Box style={{ display: 'flex' }}>
                                                      <AccessTimeIcon style={{ fontSize: '35px', color: 'white', }} />
                                                      <h3 style={{ color: '#FFFFFF', marginLeft: '9px', }}>  10th Augest 2023, 10 p.m
                                                      </h3>
                                                </Box>

                                                <Card sx={{
                                                      minWidth: 275, bgcolor: "#2db6a3", color: "white", ":hover": {
                                                            bgcolor: "#3C6961",
                                                      }
                                                }}>
                                                      <CardContent>

                                                            <Typography variant="h6">
                                                                  Carrer Guidline for <span style={{ color: "#FFD700", fontSize: "20px" }}>web develpoment</span> course. Discuss and dicount first 10 enrolled this course.
                                                            </Typography>
                                                      </CardContent>

                                                </Card>
                                          </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} >
                                          <Box>
                                                <Box style={{ display: 'flex' }}>
                                                      <AccessTimeIcon style={{ fontSize: '35px', color: 'white', }} />
                                                      <h3 style={{ color: '#FFFFFF', marginLeft: '9px', }}>  12th September 2023, 10 p.m
                                                      </h3>
                                                </Box>    <Card sx={{
                                                      minWidth: 275, bgcolor: "#2db6a3", color: "white", ":hover": {
                                                            bgcolor: "#3C6961",

                                                      }
                                                }}>
                                                      <CardContent>

                                                            <Typography variant="h6">
                                                                  Carrer Guidline for <span style={{ color: "#FFD700", fontSize: "20px" }}>Software develpoment</span> course. Discuss and dicount first 10 enrolled this course.
                                                            </Typography>
                                                      </CardContent>

                                                </Card>
                                          </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} >
                                          <Box>
                                                <Box style={{ display: 'flex' }}>
                                                      <AccessTimeIcon style={{ fontSize: '35px', color: 'white', }} />
                                                      <h3 style={{ color: '#FFFFFF', marginLeft: '9px', }}>  11th October 2023, 10 p.m
                                                      </h3>
                                                </Box>       <Card sx={{
                                                      minWidth: 275, bgcolor: "#2db6a3", color: "white", ":hover": {
                                                            bgcolor: "#3C6961",

                                                      }
                                                }}>
                                                      <CardContent>

                                                            <Typography variant="h6">
                                                                  Carrer Guidline for <span style={{ color: "#FFD700", fontSize: "20px" }}> Digital Marketing </span> course. Discuss and dicount first 10 enrolled  this course.
                                                            </Typography>
                                                      </CardContent>

                                                </Card>
                                          </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} >
                                          <Box>
                                                <Box style={{ display: 'flex' }}>
                                                      <AccessTimeIcon style={{ fontSize: '35px', color: 'white', }} />
                                                      <h3 style={{ color: '#FFFFFF', marginLeft: '9px', }}>  13th November 2023, 10 p.m
                                                      </h3>
                                                </Box>      <Card sx={{
                                                      minWidth: 275, bgcolor: "#2db6a3", color: "white", ":hover": {
                                                            bgcolor: "#3C6961",

                                                      }
                                                }}>
                                                      <CardContent>

                                                            <Typography variant="h6">
                                                                  Carrer Guidline for <span style={{ color: "#FFD700", fontSize: "20px" }}>Higher Education  </span> course. Discuss and dicount  first  10 enrolled  this course.
                                                            </Typography>
                                                      </CardContent>

                                                </Card>
                                          </Box>
                                    </Grid>

                              </Grid>
                        </Box>

                  </div>

            </>
      );
}

export default Events;