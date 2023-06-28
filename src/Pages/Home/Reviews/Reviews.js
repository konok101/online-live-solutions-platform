import React, { useContext } from 'react'
import Navigation from '../../Shared/Navigation';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
 import Backdrop from '@mui/material/Backdrop';
 import Modal from '@mui/material/Modal';
  import Rating from '@mui/material/Rating';
  import Fade from '@mui/material/Fade';
  import TextField from '@mui/material/TextField';
 import { Button,   Alert} from "@mui/material";

function Reviews() {
  const {user, token} = useContext(AuthContext);
  const {courseSerial}=useParams();
const [serialData, setSerialData]=useState([]);

useEffect(() => {
  const url = `http://localhost:5000/addCourse`;
  fetch(url)
      .then((res) => res.json())
      .then((data) => setSerialData(data));

}, []);

let teacherList = serialData?.find((user)=>{
  if(user?.serial === courseSerial) {
      return user;
  }
}) 


console.log('serial data is', teacherList)


const [serial, setSerial]=useState({...teacherList?.serial})
console.log('serial serial sas', serial);


const [rating, setRating] = useState(2);

console.log(rating)

const initialInfo = { name: user.displayName, email: user.email    }
 
  const [courseInfo, setCourseInfo] = useState(initialInfo);
  const [success, setSuccess] = useState(false);


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
          rating,
          courseSerial
          
          
       }
  
      // send to the server
      fetch('http://localhost:5000/courseRating', {
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
                
              }
          });
      e.preventDefault();
  }
  

  return (
    <>
    
    <Navigation/>


    <form onSubmit={handleCourseSubmit}>


    <h1 style={{ marginTop: '5%', textAlign: 'center' }}>my Reviews {courseSerial} qwq a</h1>
   
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        sx={{ height: 140 }}
        image={teacherList?.imageURL}
        title="green iguana"
      />

      
    <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard {teacherList?.teacherName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share w</Button>
        
        <Button type='submit' 
                                    sx={{ m: 2 }}
                                    style={{ width: '8vw', backgroundColor: 'red', borderRadius: '5px' }}
                                >
                                    Submit</Button>
      </CardActions>
    </Card>
   
    </form>
    </>
  )
}

export default Reviews