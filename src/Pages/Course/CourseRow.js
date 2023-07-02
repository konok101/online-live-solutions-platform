import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Backdrop from '@mui/material/Backdrop';
 import Modal from '@mui/material/Modal';
 import Rating from '@mui/material/Rating';
 import Fade from '@mui/material/Fade';
  import TextField from '@mui/material/TextField';
 import { Button,   Alert} from "@mui/material";
import { useEffect } from 'react';
import { useSnackbar } from "notistack";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

function CourseRow({course,   index, ratings }) {

   const [openModal, setOpenModal] =useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [subject, setSubject]=useState()
  const [img, setImg]=useState()
  const [courseTeacher, seTCourseTeacher]=useState()
  const [courseSerial, seTCourseSerial]=useState()
  const [teacherEmail, setTeacherEmail]=useState()
  const { enqueueSnackbar } = useSnackbar();


   const addID=(course)=>{
    console.log('course', course)
    handleModalOpen()
    setSubject(course?.couseName)
    seTCourseTeacher(course?.teacherName)
    seTCourseSerial(course?.serial)
    setImg(course?.imageURL)
    setTeacherEmail(course?.teacherEmail)

  }



  const { user } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const initialInfo = { name: user.displayName, email: user.email   }
 
  const [courseInfo, setCourseInfo] = useState(initialInfo);

  const handleOnBlur = e => {

      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...courseInfo };
      newInfo[field] = value;
      setCourseInfo(newInfo);
  }

  const handleCourseSubmit = e => {

      // collect data
      const courseSubmit = {
          ...courseInfo,
          subject,
          img,
          courseTeacher,
          courseSerial,
          teacherEmail
       }
  
      // send to the server
      fetch('http://localhost:5000/courseSubmit', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(courseSubmit)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.insertedId) {

                  setSuccess(true);
                  handleModalClose();
                  enqueueSnackbar("Course enroll Success", { variant: 'success' })  
              }
          });
      e.preventDefault();
      

  }


  console.log('ratings ratings', ratings)

//rating



let teacherList = ratings?.filter((user)=>{
  console.log('yyy', user);
  if(user?.courseSerial === course?.serial){
    console.log('11222 user', user);
      return user;
  }
}) 
const total =(teacherList?.reduce((total, currentItem) => total = total + parseInt(currentItem?.rating || 0), 0));

 


const [rating, setRating] = useState(total/teacherList?.length);
const [numOfRating, setNumOfRating] = useState(teacherList?.length);





  
    return (
        <>
        


    <Grid   item xs={12} sm={6} md={4}   style={{ padding: '8%' }}>
          <Card style={{ borderBottom: "8px solid #f17917" }}>
            <CardActionArea>
              <CardMedia
                component="img"
   
                style={{height:'250px', width:'250px', margin:'auto', paddingTop:'2%'}}
                image={course?.imageURL}
                alt="green iguana"
              />
              <CardContent>

               
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid component="div" item xs={4} sm={6} md={4}  >
                    <Typography gutterBottom variant="h5" >
                      {course?.teacherName?.slice(0,12)}
                    </Typography>  <br />
                    <Typography variant="body2" color="text.secondary">
                   <span style={{fontSize:"20px", }}> {course?.couseName}</span> {course?.teachingArea} 
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
                  <h5>{course?.hours || 1.5} Hours</h5>  {" "}
                  <br></br>
                  <h5 style={{marginLeft:'4px'}}>৳{course?.price}</h5>
                  <button variant="outlined" className='viewMoreButtonHover' type="submit"   onClick={() => addID(course)}  style={{
                    marginTop: '2%', padding: '8px 35px', color: '#16255d',
                    fontWeight: '600',
                    fontSize: '18px',
                    borderRadius: '4px',
                    marginBottom: '5px'
                  }}>ADD</button>

                </Grid>
                <Rating
        name="simple-controlled"
        value={rating}
        readOnly
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      /> ({numOfRating})
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" style={{ textAlign: 'center' }} sx={{ m: 2 }} variant="h6" component="h2">
                            Online Tutor 
                        </Typography>
                        <Typography id="transition-modal-title" style={{ textAlign: 'center' }} sx={{ m: 2 }} variant="h6" component="h2">
                        Payment System <br/> Bkash: 01829832457 
                        </Typography>
                        
                        <form onSubmit={handleCourseSubmit}>
                            <TextField
                                id="outlined-required"
                                sx={{ width: '90%', m: 1 }}
                                label="Your Name"
                                name='name'
                                onBlur={handleOnBlur}
                                variant="outlined"
                                defaultValue={user.displayName}
                                required
                            />


                            <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 1 }}
                                label="Email"
                                name='email'
                                onBlur={handleOnBlur}
                                variant="outlined"
                                defaultValue={user.email}
                                // disabled
                                required
                            />
                          
                              <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 1 }}
                                label="courseTeacher"
                                name='courseTeacher'
                                required
                                onBlur={handleOnBlur}
                                defaultValue={courseTeacher}
                                variant="outlined"
                            />
                               <TextField
                                id="outlined-disabled"
                                sx={{ width: '90%', m: 1 }}
                                label="subject"
                                name='subject'
                                defaultValue={subject}
                                onBlur={handleOnBlur}
                                 variant="outlined"
                                required
                            />
                               
                            <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 1 }}
                                label="TrxID"
                                name='TrxID'
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                         
                              <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 1 }}
                                label="Phone number"
                                name='phnNumber'
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                         
                        
                            <Grid container justifyContent="center">
                                <Button type='submit' variant="contained"
                                    sx={{ m: 2 }}
                                    style={{ width: '8vw', backgroundColor: 'green', borderRadius: '5px' }}
                                >
                                    Submit</Button>
                            </Grid>

                        </form>
                      
                    </Box>
                </Fade>
            </Modal>
        </>

        </>
    );
}

export default CourseRow;