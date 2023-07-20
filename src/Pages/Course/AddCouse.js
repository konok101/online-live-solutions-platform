import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Navigation from '../Shared/Navigation';
import Footer from '../Shared/Footer';
import { Autocomplete, Box, Container, Grid, TextField } from '@mui/material';
import { useSnackbar } from "notistack";


const AddCourse = () => {
    const { user, admin, teacher, logOut } = useContext(AuthContext);
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const { enqueueSnackbar } = useSnackbar();
    const [teacherEmail, setTeacherEmail] = useState('')
    const [teacherName, setTeacherName] = useState('')

    const generateAddSerial = () => {
        let randomNumber = Math.floor(
            Math.random() * (9 - 0) + 0
        );
        let randomNumbertwo = Math.floor(
            Math.random() * (9 - 0) + randomNumber
        );
        let twoAdd = randomNumber + randomNumbertwo - 1
        let serial = randomNumber + twoAdd + "course" + randomNumber + randomNumbertwo;
        return serial;
    }


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            teacherName: teacherName,
            teacherEmail: teacherEmail,
            imageURL: imageURL,
            couseName: data?.couseName,
            hours: data?.hours,
            price: data?.price,
            teachingArea: data?.teachingArea,
            socialUrl: data?.socialUrl,
            serial: generateAddSerial()
        };
        const url = `http://localhost:5000/addCourse`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(datas => {
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
    }, []);

    let teacherList = allUser?.filter((user) => {
        if (user?.role === "teacher") {
            return user;
        }
    })



    const handleDept = (value) => {
        setTeacherEmail(value?.email)
        setTeacherName(value?.displayName)
    }



    console.log('121 teacherListt teacherListt', teacherEmail, teacherName);



    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'b349a25b12d1cf8ea35b3bbbf5e43501');
        imageData.append('image', event.target.files[0]);
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
        // background: '#f2f1f2',
        borderRadius:'50px'
        // marginLeft:'100px'
        // background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))'
    }
    return (
        <div style={homeStyle} >
           
            <div  >
                <div style={{
                    marginTop: "70px", marginBottom: '10%', width:'85vw'
                }} >
                
                    <Box sx={{ maxWidth: "70%", paddingBottom: '2%',paddingTop:'2%', margin: "auto", textAlign: 'center' }}>
                        <h2 style={{fontWeight:'bold', }}>Course Added by Admin: {user?.displayName} !!!</h2>
                    </Box>

                    <Container style={{
                        // backgroundColor: '#DEDCEE',
                        background:'linear-gradient(to right,rgb(110,156,236), rgb(230,225,227)',
                        
                        borderRadius:'50px',
                        paddingTop: '4%', paddingBottom: '4%'
                    }}>

                        <Box style={{ maxWidth: "80%", marginLeft: "13%", }}>

                            <h5 style={{fontWeight:'bold', fontSize: '30px' }}>
                                Add Course
                            </h5>
                        </Box>
                        <Container style={{
                            width: '80%',

                        }}>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <Grid container direction="row"
                                    justifyContent="space-around"
                                    alignItems="center" >

                                    <Grid item xs={12} sm={12} md={12} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Select Teacher Name </small><br />
                                        <Autocomplete
                                            onChange={(event, value) => handleDept(value)}
                                            size='small'
                                            disablePortal
                                            id="combo-box-demo"
                                            getOptionLabel={(teacherList) => `${teacherList?.displayName}`}
                                            options={teacherList}
                                            renderOption={(props, deptData) => (
                                                <Box  {...props} >
                                                    <ul style={{ listStyleType: 'none' }}>
                                                        <li ><strong>{deptData?.displayName}</strong></li>
                                                    </ul>
                                                </Box>
                                            )}
                                            renderInput={(params) =>



                                                <TextField
                                                    style={{
                                                        width: '90%',
                                                        marginBottom: '2%'
                                                    }}
                                                    // color="success"
                                                    variant="outlined"
                                                    // variant="filled"  
                                                    {...params} placeholder="Select Teacher Name" />}
                                        />

                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6}>
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Course Name </small><br />
                                        <TextField
                                            style={{
                                                width: '80%', marginBottom: '4%'
                                            }} required 
                                            // label="Course Name" 
                                            name='name'
                                            textColor="white" variant="outlined"  {...register("couseName")}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Teaching Area </small><br />
                                        <TextField
                                            style={{
                                                width: '80%', marginBottom: '4%'
                                            }} required 
                                            // label="Teaching Area" 
                                            name='name'
                                            textColor="white" variant="outlined"  {...register("teachingArea")}
                                        />                        </Grid>

                                    <Grid item xs={12} sm={6} md={6}>
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Class Duration </small><br />
                                        <TextField
                                            style={{ width: '80%', marginBottom: '4%', }} required 
                                            // label="Hours" 
                                            name='name'
                                            textColor="white" variant="outlined"  {...register("hours")}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6}>
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Price </small><br />
                                        <TextField
                                            style={{ width: '80%', marginBottom: '4%' }} required 
                                            // label="Price" 
                                            name='name'
                                            textColor="white" variant="outlined"  {...register("price")}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={6}>
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>LinkedIn </small><br />
                                        <TextField
                                            style={{ width: '80%', marginBottom: '2%' }} 
                                            // label="Url" 
                                            name='name'
                                            textColor="white" variant="outlined"  {...register("socialUrl")}
                                        />                        </Grid>

                                    <Grid item xs={12} sm={6} md={6}>
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Image </small><br />
                                        <input name="exampleRequired" type="file"

                                            style={{ width: '80%', marginBottom: '2%' }}
                                            required onChange={handleImageUpload} />
                                    </Grid>



                                    <Grid item xs={12} sm={6} md={12}>
                                        <button className='viewMoreButtonHoverBanner' variant="contained" type="submit" style={{
                                            marginTop: '2%',
                                            padding: '5px 34px',
                                            //  padding: '15px 44px',
                                            color: 'white',
                                            fontWeight: '300',
                                            fontSize: '20px',
                                            backgroundColor: "rgb(17,63,144)",

                                            borderRadius: '14px'
                                        }}>Submit</button> </Grid>
                                </Grid>
                            </form>
                        </Container>
                    </Container>
                </div>
            </div>
      
        </div>
    );
};

export default AddCourse;