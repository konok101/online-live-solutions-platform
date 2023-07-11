import React, { useContext } from 'react'
import Navigation from '../../Shared/Navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import TeacherRow from '../OurTeachers/TeacherRow'
import { Grid } from '@mui/material';
import Footer from '../../Shared/Footer';

function OurTeachers() {
   
     

    const [courses, setCourses] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/addCourse`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));

  }, []);
   
    
    




    return (
        <>

            <Navigation />
            <h1 style={{ marginTop: '5%', textAlign: 'center' }}>Our Teachers</h1>

            <Grid container direction="row"
    justifyContent="space-around"
    alignItems="center"  style={{marginBottom:'4%'}}>
      {
        courses?.slice(0,6).map((course, index) =>
          <TeacherRow
           
          
          course={course}></TeacherRow>
        )
      }
    </Grid>

<Footer/>

        </>
    )
}

export default OurTeachers