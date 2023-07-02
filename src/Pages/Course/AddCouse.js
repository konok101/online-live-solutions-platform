import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Navigation from '../Shared/Navigation';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useSnackbar } from "notistack";


const AddCourse = () => {
    const { user, admin, teacher, logOut } = useContext(AuthContext);
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [imageURL,setImageURL] = useState(null);
    const { enqueueSnackbar } = useSnackbar();
    const [teacherEmail, setTeacherEmail]=useState('')
    const [teacherName, setTeacherName]=useState('')

    const generateAddSerial = () => {
        let randomNumber = Math.floor(
            Math.random() * (9 - 0) + 0
        );

        let randomNumbertwo = Math.floor(
            Math.random() * (9 - 0) + randomNumber
        );

        let twoAdd= randomNumber + randomNumbertwo -1


        let serial = randomNumber + twoAdd+ "course"   + randomNumber + randomNumbertwo;
        return serial;
    }


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            teacherName      : teacherName,
            teacherEmail      : teacherEmail,
            imageURL  : imageURL,
            couseName     : data?.couseName,
            hours   : data?.hours,
            price   : data?.price,
            teachingArea   : data?.teachingArea,
            socialUrl   : data?.socialUrl,
            serial:generateAddSerial()
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
        .then(res =>  res.json())
        .then(datas=>{
            console.log('datas', datas);
            enqueueSnackbar("Course added Success", { variant: 'success' })   
            reset();
        })
        
         
    };

    
    const [allUser, setAllUser] = useState([]);
    const role = user?.role === 'teacher';
 
    useEffect(() => {
        const url = `http://localhost:5000/users?role=${role}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUser(data)); 
    },[]);

    let teacherList = allUser?.filter((user)=>{
        if(user?.role === "teacher"){
            return user;
        }
    }) 
 


    const handleDept = (value) => {
        setTeacherEmail(value?.email)
        setTeacherName(value?.displayName)
        
    }



    console.log('121 teacherListt teacherListt', teacherEmail , teacherName);



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
               <h2> Add by Admin: {user?.displayName} !!! .</h2> 
                         <h5 style={{maxWidth:"50%", margin:"auto", fontSize:'30px'}}> Course Details</h5>
                    </Box>
                    <Box>
                        <form onSubmit={handleSubmit(onSubmit)}>


<Autocomplete

onChange={(event, value) => handleDept(value)}
                                                            size='small'
                                                            disablePortal
                                                            id="combo-box-demo"
                                                            getOptionLabel={(teacherList) => `${teacherList?.displayName}`}
                                                            options={teacherList}
                                                            sx={{width: '50vw' ,mt:5 }}
                                                            renderOption={(props, deptData) => (
                                                                <Box  {...props} >
                                                                    <ul style={{ listStyleType: 'none' }}>
                                                                        <li ><strong>{deptData?.displayName}</strong></li>
                                                                    </ul>

                                                                </Box>
                                                            )}
                                                            renderInput={(params) =>

                                                                <TextField
                                                                    style={{ width: '50vw' , mt: 5, margin: 18 }}
                                                                    color="success"
                                                                    variant="filled"  {...params} placeholder="Select Teacher Name" />}
                                                                    />

                                                                    <br />

                                                   
                            <TextField
                            style={{ margin: 18, width: '50vw' }} required   label="Couse Name"  id="standard-basic"  name='name'
                             textColor="white" variant="standard"  {...register("couseName")}
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