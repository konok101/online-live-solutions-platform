import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Box, height } from "@mui/system";
import { Button, Typography, Alert, Container, Grid } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { useSnackbar } from "notistack";
import Navigation from '../../Shared/Navigation';
import { useParams } from "react-router";
import ReviewRow from "./ReviewRow";




const bannerBackground = {

    borderRadius: '15px',
    borderWidth: 3,
    textAlign: 'center',
    width: '100vw',
    height: '100vh',
    marginTop: '5%',
}

const AddReview = () => {
   

    const [regStudent, setRegStudent] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/courseRating`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setRegStudent(data));

    }, []);


    const uniqueIds = [];

const unique = regStudent.filter(element => {
  const isDuplicate = uniqueIds.includes(element.courseSerial);

  if (!isDuplicate) {
    uniqueIds.push(element.teacherList?.serial);

    return true;
  }

  return false;
});


 
console.log(unique);
    console.log('regStudent',regStudent);

    return (
        <>
 <Navigation/>
            
               
<div style={{marginTop:'100px'}}>
<h1 style={{marginTop:'170px', width:'700px', margin:'auto'}}>Top  Reviews achievement in our teacher </h1>
              

              <Grid container direction="row"
justifyContent="space-around"
alignItems="center"  >
 {
                              unique.slice(0,5).map((regStudent, index) => <ReviewRow
                                  key={regStudent._id}
                                  review={regStudent}
                                  index={ index}
                                

                              ></ReviewRow>)

              }
</Grid>

</div>
              



          


        </>

    );
};
export default AddReview;