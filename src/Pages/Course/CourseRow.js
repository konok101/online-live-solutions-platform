import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { Button, Alert } from "@mui/material";
import { useEffect } from 'react';
import { useSnackbar } from "notistack";
import { useLocation, useNavigate } from 'react-router';

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

function CourseRow({ course, index, ratings }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => {
    if (user?.email) {

      setOpenModal(true)
    }
    else {

      navigate('/login')
    }

  };
  const handleModalClose = () => setOpenModal(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [subject, setSubject] = useState()
  const [img, setImg] = useState()
  const [courseTeacher, seTCourseTeacher] = useState()
  const [courseSerial, seTCourseSerial] = useState()
  const [teacherEmail, setTeacherEmail] = useState()
  const [price, setPrice] = useState()
  const { enqueueSnackbar } = useSnackbar();


  const addID = (course) => {
    console.log('course', course)
    handleModalOpen()
    setSubject(course?.couseName)
    seTCourseTeacher(course?.teacherName)
    seTCourseSerial(course?.serial)
    setImg(course?.imageURL)
    setTeacherEmail(course?.teacherEmail)
    setPrice(course?.price)

  }



  const { user } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const initialInfo = { name: user?.displayName, email: user?.email }
  const [courseInfo, setCourseInfo] = useState(initialInfo);
  const [isRating, setIsRating] = useState(true);

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
      teacherEmail,
      price,
      isRating
    }

    // send to the server
    fetch('https://educational-live-solutions-sever.vercel.app/courseSubmit', {
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


  console.log('ratings ratings', course)

  //rating



  let teacherList = ratings?.filter((user) => {
    console.log('yyy', user);
    if (user?.courseSerial === course?.serial) {
      console.log('11222 user', user);
      return user;
    }
  })
  const total = (teacherList?.reduce((total, currentItem) => total = total + parseInt(currentItem?.rating || 0), 0));




  const [rating, setRating] = useState(total / teacherList?.length);
  const [numOfRating, setNumOfRating] = useState(teacherList?.length);





  return (
    <>
      <Grid item xs={12} sm={12} md={3.5} style={{ marginTop: '40px', marginLeft: '2%', marginRight: '2%' }}  >

        <Card style={{ borderBottom: "8px solid #f17917", 
        height: '100%' 
      }} >
          <Box
          // style={{height:'700px'}}
          // sx={{height:'300px'}}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              // height="0%"
              image={course?.imageURL}
              style={{
                height: '32vh', backgroundSize: 'cover',
                // position: 'relative',
              }}
            />
          </Box>
          <CardContent>
         

              <Grid container direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                <Typography gutterBottom variant="h5" >
                {course?.teacherName?.slice(0, 22)}
                <Link href={course?.socialUrl} color="inherit">
                  <LinkedInIcon
                    style={{ color: ' #f17917 ', width: '25px',  margin: '8px', borderRadius: 3 }}
                  />
                </Link>
                </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>     
                    <br />  <Typography gutterBottom variant="h6">{course?.couseName} || {course?.hours} hours || ৳{course?.price}</Typography>
                 
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <Typography gutterBottom variant="h6">
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    ({numOfRating} reviews)
                  </Typography>
                </Grid>
              </Grid>




           
            <Typography variant="body2" color="text.secondary">
              This is <span style={{ color: 'orange' }}>{course?.teacherName}</span>. If you face  <span style={{ color: 'green', fontSize: 'bold' }}>{course?.couseName}</span> related problem. Please Hire me. I can help you And provide best Solutions.
            </Typography>
          </CardContent>
          
          <CardActions>
            <Button variant="contained" onClick={() => addID(course)}>Enroll</Button>
            <Button size="small" onClick={handleOpen}>Learn More</Button>
          </CardActions>
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
              Online Tutor <br />   Payment System <br /> Bkash: 01829832457
              </Typography>

              <form onSubmit={handleCourseSubmit}>
                <TextField
                  id="outlined-required"
                  sx={{ width: '90%', m: 1 }}
                  label="Your Name"
                  name='name'
                  onBlur={handleOnBlur}
                  variant="outlined"
                  defaultValue={user?.displayName}
                  required
                />


                <TextField
                  id="outlined-basic"
                  sx={{ width: '90%', m: 1 }}
                  label="Email"
                  name='email'
                  onBlur={handleOnBlur}
                  variant="outlined"
                  defaultValue={user?.email}
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              This is <span style={{ color: 'orange' }}>{course?.teacherName}</span>.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              I am   <span style={{ color: 'green', fontSize: 'bold' }}>{course?.couseName}</span> spacialist. And I have more
              than two years experience in this field. My teaching subject {course?.couseName} and my area {course?.teachingArea}.
              I hope i am best tutor forr you. If you interst hire me  with ৳{course?.price} for {course?.hours} hours.

            </Typography>
            <br />
            <Button onClick={handleClose}>Back</Button>
          </Box>
        </Modal>
      </>

    </>
  );
}

export default CourseRow;