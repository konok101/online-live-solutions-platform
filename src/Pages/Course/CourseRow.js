import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function CourseRow({course, handleModalOpen}) {
    return (
        <>
        


    <Grid   item xs={12} sm={6} md={4}   style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #f17917" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                // height='90%'

                style={{height:'250px', width:'250px', margin:'auto', paddingTop:'2%'}}
                image={course?.imageURL}
                alt="green iguana"
              />
              <CardContent>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" component="div">
                      {course?.teacherName?.slice(0,12)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {course?.couseName}
                    </Typography>
                  </Grid>
                  <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >
                    <Box>
                      <Link href={course?.socialUrl}  style={{width:"300px", height:"20px"}} color="inherit">
                        <InstagramIcon
                          style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href={course?.socialUrl} color="inherit">
                        <FacebookIcon
                          style={{ color: ' #f17917', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                      <Link href={course?.socialUrl} color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
                      </Link>
                    </Box>
                    
                  </Grid>
                  <h5>{course?.hours || 1.5} Hours</h5>  
                  <br></br>
                  <h5 style={{marginLeft:'4px'}}>${course?.price}</h5>
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
        </>
    );
}

export default CourseRow;