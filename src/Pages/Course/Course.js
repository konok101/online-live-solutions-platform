import React, { useEffect, useState } from 'react'
// import Navigation from '../Shared/Navigation';
// import Footer from '../Shared/Footer';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
// import Calender from '../Homedashboard/Calender';
// import teacher1 from '../../images/teacher2.jpg';
// import teacher2 from '../../images/teacher8.jpg';
// import teacher3 from '../../images/teacher12.jpg';
// import teacher4 from '../../images/teacher3.jpg';
// import teacher5 from '../../images/teacher4.jpg';
// import teacher6 from '../../images/teacher5.jpg';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import MathModal from './ModalOpen/MathModal';
import CourseModal from './CourseModal';
import CourseRow from './CourseRow';

function Course() {

  const dashboardHomeStyle = {
    marginLeft: '-90px',
    width: '100vw'
  }
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const [regSuccess, setRegSuccess] = useState(false);

  
  const [ratings, setRatings]=useState([]);

useEffect(() => {
  const url = `http://localhost:5000/courseRating`;
  fetch(url)
      .then((res) => res.json())
      .then((data) => setRatings(data));

}, []);


  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/addCourse`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));

  }, []);




  return (
    <div>
      


      <Typography style={{ textAlign: 'center', marginTop: '5%', color: '#756c08' }} sx={{ m: 2 }} variant="h4" component="h2">
        Our Tutors Available Here for Today
      </Typography>

{
  courses?.length >0  ?   <div>
  <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center"  >
      {
        courses?.slice(0,6).map((course, index) =>
          <CourseRow index={index} handleModalOpen={handleModalOpen} 
          ratings={ratings}
          
          course={course}></CourseRow>
        )
      }
    </Grid>
   
    </div> : <div style={{width:"550px", margin:"auto", padding:"40px", fontSize:"50px"}}>No avaible course</div>
}

    
       









      <CourseModal
        openModal={openModal}
        handleModalClose={handleModalClose}
        setRegSuccess={setRegSuccess}
      ></CourseModal>



    </div>
  )
}

export default Course