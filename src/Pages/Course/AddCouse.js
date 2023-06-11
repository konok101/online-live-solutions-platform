import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Navigation from '../Shared/Navigation';
import { Box, TextField } from '@mui/material';

const AddCourse = () => {
    const { user, admin, teacher, logOut } = useContext(AuthContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            teacherName      : data?.teacherName,
            imageURL  : imageURL,
            couseName     : data?.couseName,
            hours   : data?.hours,
            price   : data?.price,
            socialUrl   : data?.socialUrl
        };
        const url = `http://localhost:5000/addCourse`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response',res))
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
                    <Box sx={{ml:5 }}>
               <h2>Admin: {user?.displayName} !!! .</h2> 
                         <h5 style={{width:"250px", margin:"0", fontSize:'30px'}}>Added Course</h5>
                    </Box>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            style={{ margin: 18, width: '50vw' }}   label="Teacher Name"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("teacherName")}
                        />                        <br/>
                            <TextField
                            style={{ margin: 18, width: '50vw' }}   label="Couse Name"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("couseName")}
                        />                        <br/>

<TextField
                            style={{ margin: 18, width: '50vw' }}   label="Hours"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("hours")}
                        />    
                                            <br/>
                        
                        
                        <TextField
                            style={{ margin: 18, width: '50vw' }}   label="Price"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("price")}
                        />                        <br/>
                   
 
                   <TextField
                            style={{ margin: 18, width: '50vw' }}   label="Url"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("socialUrl")}
                        />                        <br/>
                   
 
                        <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
                        <br/>
                       

                        <button type="submit" className="btn btn-light">Save</button>
                        </form>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;