import React, { useState } from 'react'
import Navigation from '../Shared/Navigation';
import Footer from '../Shared/Footer';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, TextField, Typography } from '@mui/material';
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
import { useEffect } from 'react';
import CourseRow from './CourseRow';
import isFirstDayOfMonth from 'date-fns/isFirstDayOfMonth/index.js';
function Course() {

  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/addCourse`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));

  }, []);

  useEffect(() => {
    const url = `http://localhost:5000/addCourse`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));

  }, []);



  const [ratings, setRatings]=useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/courseRating`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => setRatings(data));
  
  }, []);
  
  const homeStyle={
    width:'98.6vw',
   overflowX: 'hidden',
   overflowY: 'hidden',
 }

 const [nameSearch, setNameSearch] = useState('');

 const handleSearchName = (e) => {
     setNameSearch(e.target.value);
 }
 function filterData(data) {
  return data?.filter((item) => {
      if (nameSearch) {
          return nameSearch?.toLowerCase() === '' ? item :
              item?.teacherName?.toLowerCase().includes(nameSearch?.toLowerCase()) ||
              item?.couseName?.toLowerCase().includes(nameSearch?.toLowerCase())

      }
   
      return item;
  })
}
let allFilterData = filterData(courses)



  return (
    <div style={homeStyle}>
      <Navigation />
      

      <Typography  style={{ textAlign: 'center', marginTop:'5%', color:'#756c08' }} sx={{ m: 2 }} variant="h4" component="h2">
      Our Tutors Available Here for Today 
                        </Typography>

                    <Box style={{width:'50%', margin:'auto'}}>
                    <TextField fullWidth label="Search By Course Name OR Teacher Name"
                     value={nameSearch}
                     onChange={handleSearchName}
                    id="fullWidth" />

                    </Box>

{
  courses?.length > 0 ?               <div>
  <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center" style={{marginBottom:'4%'}} >
      {
        allFilterData?.map((course, index) =>
          <CourseRow handleModalOpen={handleModalOpen}
          ratings={ratings}
          course={course}></CourseRow>
        )
      }
    </Grid>
   
    </div> :  <div style={{width:"550px", margin:"auto", padding:"40px", fontSize:"50px"}}>No avaible course</div>
}
           

      <CourseModal
      openModal={openModal}
      handleModalClose={handleModalClose}
      setRegSuccess={setRegSuccess}
    ></CourseModal>

<Footer/>
     
    </div>
  )
}

export default Course