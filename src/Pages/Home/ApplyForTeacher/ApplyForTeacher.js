import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Box, Container, Grid, TextField } from '@mui/material';
import { useSnackbar } from "notistack";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';

const ApplyForTeacher = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const { enqueueSnackbar } = useSnackbar();


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            teacherName: data?.teacherName,
            email: data?.email,
            imageURL: imageURL,
            teachingArea: data?.teachingArea,
            socialUrl: data?.socialUrl,
            aboutTeacher: data?.qulification
        };
        const url = `http://localhost:5000/applyForTeacher`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
            .then(datas => {
                enqueueSnackbar("Application submit Success", { variant: 'success' })
                reset();
            })



    };


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
        // background: '#f2f1f2'
        // background: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))'
    }
    return (
        <div style={homeStyle} >
            <Navigation />
            <div
            // style={{ paddingBottom: "100px" }} 
            >

                <div style={{
                    marginTop: "70px", marginBottom: '10%',
                    // maxWidth: "50%", margin: "auto", marginTop: "50px" 
                }} >

                    <Box sx={{ maxWidth: "80%", paddingBottom: '2%',paddingTop:'2%', margin: "auto", textAlign: 'center' }} >
                        <h2 style={{fontWeight:'bold', }}>  Apply {user?.displayName} for teacher role!!! .</h2>
                    </Box>

                    {/*<Box sx={{ maxWidth: "80%", margin: "auto", }}>
                        <h2>  Apply {user?.displayName} for teacher role!!! .</h2>
                        <h5 style={{ maxWidth: "50%", margin: "auto", fontSize: '30px' }}> Biodata</h5>
            </Box>*/}

                    <Container style={{
                        
                        // backgroundColor:'#99b7ee', 
                        background:'linear-gradient(to right,rgb(110,156,236), rgb(230,225,227)',
                        
                        borderRadius:'50px',
                        paddingTop: '4%', paddingBottom: '4%'
                    }}>
                        <Box style={{ maxWidth: "80%", marginLeft: "13%", }}>
                            <h5 style={{fontWeight:'bold', fontSize: '30px' }}>Biodata</h5>
                        </Box>
                        <Container style={{
                            width: '80%',

                        }}>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container direction="row"
                                    justifyContent="space-around"
                                    alignItems="center" >

                                    <Grid item xs={12} sm={12} md={6} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Name </small><br />
                                        <TextField
                                        style={{width: '90%',marginBottom: '2%',marginTop:'1%' }} variant="outlined"
                                            // label=" Name"
                                             name='name'
                                            textColor="white"  required  {...register("teacherName")}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Email</small><br />
                                        <TextField
                                        style={{width: '90%',marginBottom: '2%' ,marginTop:'1%',color:'white'}}
                                         variant="outlined" required 
                                        // label="Email" 
                                         name='email'
                                            textColor="white"   {...register("email")}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Teaching Area</small><br />
                                        <TextField
                                        style={{width: '90%',marginBottom: '2%',marginTop:'1%' }} variant="outlined" required 
                                        // label="Teaching Area" 
                                        name='name'
                                            textColor="white"   {...register("teachingArea")}
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={12} md={6} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Qulification</small><br />
                                        <TextField
                                        style={{width: '90%',marginBottom: '2%' ,marginTop:'1%'}} variant="outlined" required 
                                        // label="Qulification"  
                                        name='name'
                                            textColor="white"  {...register("qulification")}
                                        />   
                                        </Grid>                    




                                        <Grid item xs={12} sm={12} md={6} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Social Url</small><br />
                                        <TextField
                                        style={{width: '90%',marginBottom: '2%',marginTop:'1%' }} variant="outlined" 
                                        // label="Social Url"  
                                        name='name'
                                            textColor="white"   {...register("socialUrl")}
                                        />                        
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={6} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Picture </small><br />
                                        <input name="exampleRequired" type="file" 
                                        style={{ width: '80%', marginBottom: '2%',marginTop:'1%' }}
                                        required onChange={handleImageUpload} />
                                        </Grid>



                                        <Grid item xs={12} sm={12} md={12} >
                                        
                                        <button className='viewMoreButtonHoverBanner' variant="contained" type="submit" style={{
                                            marginTop: '2%', padding: '5px 34px', color: 'white',
                                            fontWeight: '300',
                                            fontSize: '20px',
                                            backgroundColor: "rgb(17,63,144)",
                                            // background: "#2db6a3",

                                            borderRadius: '14px'
                                        }}>Submit</button></Grid>
                                    </Grid>
                            </form>
                        </Container>

                    </Container>
                </div>
            </div>


            <Footer />
        </div >
    );
};

export default ApplyForTeacher;