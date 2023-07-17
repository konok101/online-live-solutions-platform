import React, { useContext } from 'react'
import Navigation from '../../Shared/Navigation';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSnackbar } from "notistack";
import { Button, Card, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';


function Reviews() {

 
  const {user, token} = useContext(AuthContext);
  const {courseSerial}=useParams();
const [serialData, setSerialData]=useState([]);
const { enqueueSnackbar } = useSnackbar();


useEffect(() => {
  const url = `https://educational-live-solutions-sever.vercel.app/addCourse`;
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

console.log('serial serial teacherList', teacherList);

const [imageURL, setImageURL]=useState(teacherList?.couseName)

console.log('serial serial sas imageURL 1', imageURL);

const [rating, setRating] = useState(0);

console.log(rating)

const initialInfo = { name: user?.displayName, email: user?.email    }
 
  const [courseInfo, setCourseInfo] = useState(initialInfo);
  const [success, setSuccess] = useState(false);
  const [name, setName]=useState('');
  const [sumary, setSummery]=useState('');

  const handleName = (event) => {
    setName(event.target.value)
}
const handleSummery = (event) => {
  setSummery(event.target.value)
}
 
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
          courseSerial,
          teacherList ,
          name, 
          sumary
          
       }
  
      // send to the server
      fetch('https://educational-live-solutions-sever.vercel.app/courseRating', {
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
                  enqueueSnackbar("Thanks for added your review", { variant: 'success' })   
                   setRating("");
                   setName("");
                   setSummery("");
                
              }
          });
      e.preventDefault();

  }
  

  return (
    <>
    
    <Navigation/>


 <Card sx={{width:'70%', margin:"auto", marginTop:"100px"}}>
 <form onSubmit={handleCourseSubmit} style={{padding:'50px'}}>


<h1 style={{ marginTop: '5%', textAlign: 'center' }}> Write a review  </h1>     
 

<Box sx={{display:'flex', alignItems:'center'}}>
<Typography>  Rating :</Typography>
<Box sx={{ml:3}}>
<Rating
        name="simple-controlled"
        value={rating}
         onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />  
</Box>
</Box>

<Box sx={{display:'flex', alignItems:'center'}}>
<Typography>  Name :</Typography>
<Box sx={{ml:3}}>
  <TextField onChange={handleName} required value={name}  style={{ width: '50vw' , mt: 5, margin: 18 }}
                                                                    color="success">
                                                                 </TextField>
</Box>
</Box>
<Box sx={{display:'flex', alignItems:'center'}}>
<Typography>  Summery :</Typography>
<Box>
<textarea
 style={{ width: '50vw' , mt: 5, margin: 18 }}
      name="postContent"
      onChange={handleSummery}
      value={sumary}
       rows={4}
      cols={40}
    />
</Box>
</Box>
 
 <Button type="submit" variant="contained">Submit review</Button>
</form>

 </Card>


    </>
  )
}

export default Reviews