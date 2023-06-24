import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
 
import { Box, TextField } from '@mui/material';
import { useSnackbar } from "notistack";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Navigation from '../../Shared/Navigation';

const AddCourse = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL] = useState(null);
    const { enqueueSnackbar } = useSnackbar();


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            teacherName      : data?.teacherName,
            imageURL  : imageURL,
            couseName     : data?.email,
            hours   : data?.hours,
            price   : data?.price,
            teachingArea   : data?.teachingArea,
            socialUrl   : data?.socialUrl
        };
        const url = `http://localhost:5000/applyForTeacher`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response',res))
        .then(datas=>{
            enqueueSnackbar("Application submit Success", { variant: 'success' })   
            data?.target?.reset();
        })
        
      
         
    };


    const handleImageUpload = event => {
       const imageData = new FormData();
       imageData.set('key','b349a25b12d1cf8ea35b3bbbf5e43501');
       imageData.append('image',event.target.files[0]);

       axios.post('https://api.imgbb.com/1/upload',
       imageData)
      .then(function (response) {
          console.log(response);
          setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
  const homeStyle = {
    background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))'
  }
    return (
        <div style={homeStyle} >
             <Navigation />
            <div >
                
                <div style={{maxWidth:"50%", margin:"auto", marginTop:"50px"}} >
                    <Box sx={{maxWidth:"80%", margin:"auto", }}>
               <h2>  Apply {user?.displayName} for teacher role!!! .</h2> 
                         <h5 style={{maxWidth:"50%", margin:"auto", fontSize:'30px'}}> Biodata</h5>
                    </Box>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            style={{ margin: 18, width: '50vw' }}   label=" Name"  id="standard-basic"  name='name'
                             textColor="white" variant="standard" required  {...register("teacherName")}
                        />                        <br/>
                            <TextField
                            style={{ margin: 18, width: '50vw' }} required   label="Email"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("email")}
                        />                        <br/>

<TextField
                            style={{ margin: 18, width: '50vw' }} required   label="Teaching Area"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("teachingArea")}
                        />                        <br/>

<TextField
                            style={{ margin: 18, width: '50vw' }} required  label="Hours"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("hours")}
                        />    
                                            <br/>
                        
                        
                        <TextField
                            style={{ margin: 18, width: '50vw' }} required  label="Price"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("price")}
                        />                        <br/>
                   
 
                   <TextField
                            style={{ margin: 18, width: '50vw' }}    label="Url"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("socialUrl")}
                        />                        <br/>
                   
 
                        <input name="exampleRequired" type="file" required onChange={handleImageUpload}/>
                        <br/>
                       

                       

                        <button className='viewMoreButtonHoverBanner' variant="contained" type="submit" style={{
                        marginTop: '2%', padding: '15px 44px', color: 'white',
                        fontWeight: '300',
                        fontSize: '20px',
                        background: "#2db6a3",
                        
                        borderRadius: '4px'
                    }}>Submit</button>
                        </form>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;