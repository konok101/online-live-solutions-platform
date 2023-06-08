import React, { useState } from 'react'
import Navigation from '../Shared/Navigation';
import Footer from '../Shared/Footer';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
// import Calender from '../Homedashboard/Calender';
import teacher1 from '../../images/teacher2.jpg';
import teacher2 from '../../images/teacher8.jpg';
import teacher3 from '../../images/teacher12.jpg';
import teacher4 from '../../images/teacher3.jpg';
import teacher5 from '../../images/teacher4.jpg';
import teacher6 from '../../images/teacher5.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
// import MathModal from './ModalOpen/MathModal';
import CourseModal from './CourseModal';
function Course() {

  const dashboardHomeStyle = {
    marginLeft: '-90px',
    width: '100vw'
  }
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const [regSuccess, setRegSuccess] = useState(false);

  return (
    <div>
      <Navigation />
      

      <Typography  style={{ textAlign: 'center', marginTop:'5%', color:'#756c08' }} sx={{ m: 2 }} variant="h4" component="h2">
      Our Tutors Available Here for Today
                        </Typography>



      <Grid container direction="row"
        justifyContent="space-around"
        alignItems="center" columns={{ xs: 4, sm: 12, md: 12 }} >


        <Grid component="div" item xs={4} sm={6} md={4} style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #f17917" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='90%'
                image={teacher1}
                alt="green iguana"
              />
              <CardContent>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" component="div">
                      John
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      English
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >
                    <Box>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <InstagramIcon
                          style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.facebook.com/rockykonok" color="inherit">
                        <FacebookIcon
                          style={{ color: ' #f17917', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                    </Box>
                    
                  </Grid>
                  <h5>1.5 Hours</h5> 
                  <br></br>
                  <h5>$80</h5>
                  <button variant="outlined" className='viewMoreButtonHover' type="submit" onClick={handleModalOpen} style={{
                    marginTop: '2%', padding: '8px 35px', color: '#16255d',
                    fontWeight: '600',
                    fontSize: '18px',
                    borderRadius: '4px',
                    marginBottom: '5px'
                  }}>ADD</button>

                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        
        <Grid component="div" item xs={4} sm={6} md={4} style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #756c08" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='90%'
                image={teacher2}
                alt="green iguana"
              />
              <CardContent>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" component="div">
                      Ishita
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Math
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >
                    <Box>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <InstagramIcon
                          style={{ color: ' #756c08 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.facebook.com/rockykonok" color="inherit">
                        <FacebookIcon
                          style={{ color: ' #756c08', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #756c08 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                    </Box>
                    
                  </Grid>
                  <h5>1.5 Hours...</h5> 
                  <br></br>
                  <h5>$80</h5>
                  <button variant="outlined" className='viewMoreButtonHover' type="submit" onClick={handleModalOpen} style={{
                    marginTop: '2%', padding: '8px 35px', color: '#16255d',
                    fontWeight: '600',
                    fontSize: '18px',
                    borderRadius: '4px',
                    marginBottom: '5px'
                  }}>ADD</button>

                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid component="div" item xs={4} sm={6} md={4} style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #c9156d" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='90%'
                image={teacher3}
                alt="green iguana"
              />
              <CardContent>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" component="div">
                      MAK
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Science
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >
                    <Box>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <InstagramIcon
                          style={{ color: ' #c9156d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.facebook.com/rockykonok" color="inherit">
                        <FacebookIcon
                          style={{ color: ' #c9156d', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #c9156d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                    </Box>
                    
                  </Grid>
                  <h5>1.5 Hours</h5> 
                  <br></br>
                  <h5>$80</h5>
                  <button variant="outlined" className='viewMoreButtonHover' type="submit" onClick={handleModalOpen} style={{
                    marginTop: '2%', padding: '8px 35px', color: '#16255d',
                    fontWeight: '600',
                    fontSize: '18px',
                    borderRadius: '4px',
                    marginBottom: '5px'
                  }}>ADD</button>

                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid component="div" item xs={4} sm={6} md={4} style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #ed0ef3" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='90%'
                image={teacher4}
                alt="green iguana"
              />
              <CardContent>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" component="div">
                      Rocky
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Math
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >
                    <Box>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <InstagramIcon
                          style={{ color: ' #ed0ef3 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.facebook.com/rockykonok" color="inherit">
                        <FacebookIcon
                          style={{ color: ' #ed0ef3', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #ed0ef3 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                    </Box>
                    
                  </Grid>
                  <h5>1.5 Hours</h5> 
                  <br></br>
                  <h5>$80</h5>
                  <button variant="outlined" className='viewMoreButtonHover' type="submit" onClick={handleModalOpen} style={{
                    marginTop: '2%', padding: '8px 35px', color: '#16255d',
                    fontWeight: '600',
                    fontSize: '18px',
                    borderRadius: '4px',
                    marginBottom: '5px'
                  }}>ADD</button>

                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid component="div" item xs={4} sm={6} md={4} style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #157bc9" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='90%'
                image={teacher5}
                alt="green iguana"
              />
              <CardContent>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" component="div">
                      Kanak
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Science
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >
                    <Box>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <InstagramIcon
                          style={{ color: ' #157bc9 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.facebook.com/rockykonok" color="inherit">
                        <FacebookIcon
                          style={{ color: ' #157bc9', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #157bc9 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                    </Box>
                    
                  </Grid>
                  <h5>1.5 Hours</h5> 
                  <br></br>
                  <h5>$80</h5>
                  <button variant="outlined" className='viewMoreButtonHover' type="submit" onClick={handleModalOpen} style={{
                    marginTop: '2%', padding: '8px 35px', color: '#16255d',
                    fontWeight: '600',
                    fontSize: '18px',
                    borderRadius: '4px',
                    marginBottom: '5px'
                  }}>ADD</button>

                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        
        <Grid component="div" item xs={4} sm={6} md={4} style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #41d02d" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height='90%'
                image={teacher6}
                alt="green iguana"
              />
              <CardContent>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" component="div">
                      Elon
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Math
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >
                    <Box>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <InstagramIcon
                          style={{ color: ' #41d02d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.facebook.com/rockykonok" color="inherit">
                        <FacebookIcon
                          style={{ color: ' #41d02d', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href="https://www.linkedin.com/in/konok-majamder/" color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #41d02d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                    </Box>
                    
                  </Grid>
                  <h5>1.5 Hours</h5> 
                  <br></br>
                  <h5>$80</h5>
                  <button variant="outlined" className='viewMoreButtonHover' type="submit" onClick={handleModalOpen} style={{
                    marginTop: '2%', padding: '8px 35px', color: '#16255d',
                    fontWeight: '600',
                    fontSize: '18px',
                    borderRadius: '4px',
                    marginBottom: '5px'
                  }}>ADD</button>

                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      
      </Grid>

      <CourseModal
      openModal={openModal}
      handleModalClose={handleModalClose}
      setRegSuccess={setRegSuccess}
    ></CourseModal>


      <Footer />
    </div>
  )
}

export default Course