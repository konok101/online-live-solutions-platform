import React from "react";
import TextField from '@mui/material/TextField';
import { Box, height } from "@mui/system";
import { Button, Typography, Alert, Container, Grid } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useSnackbar } from "notistack";




const bannerBackground = {

    borderRadius: '15px',
    borderWidth: 3,
    // textAlign: 'center',
    // width: '100vw',
    // height: '50vh',
    marginTop: '100px',
    marginBottom:'5%'
   
}

const ContactUsForm = () => {

    // const { user } = useContext(AuthContext);
  
    const { enqueueSnackbar } = useSnackbar();

    const [userInfo, setUserInfo] = useState();

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setUserInfo(newInfo);
    }


    const handleContactUs = e => {
        // collect data
        const ContactUs = {
            ...userInfo,
        }

        // send to the server
        fetch('https://educational-live-solutions-sever.vercel.app/contact', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
         },
            body: JSON.stringify(ContactUs)
        })
        .then(res => res.json())
        .then(data => {
        console.log("11",data);
        if (data.insertedId) {
            // setSuccess(true);
            enqueueSnackbar("Message added Success", { variant: 'success' })
            e?.target?.reset();

        }
    });

    e.preventDefault();
   // enqueueSnackbar("Contact submit Success", { variant: 'success' })   

    }

    return (
        <>

            <Container style={bannerBackground}  >
                <Box container justifyContent='center' alignItems='center' style={{  
                    background:'linear-gradient(to right,rgb(149,179,222), rgb(230,225,227)', 
                    borderRadius:'50px',
                    // background:'linear-gradient(to right,rgb(110,156,236), rgb(230,225,227)', 
                    paddingTop: '5%', borderBottom: "5px solid #472ca7",
                    borderTop: "5px solid #472ca7",
                    paddingBottom: '5%' }}>

                    <Typography variant="h4" style={{textAlign: 'center', margin: 15, color: '#062253', fontWeight:'bold' }}>GET IN TOUCH</Typography>
                    <h4 style={{color: '#062253', textAlign:'center'}}>Feel free to drop us a line below!</h4>

                    <form
                    onSubmit={handleContactUs}
                    >
                    
                        <small style={{fontWeight:'bold',marginBottom:'2%', marginLeft:'5%'}}>Name</small><br />
                        <TextField
                        style={{ marginLeft: '5%', width: '90%', marginBottom:'2%',marginTop:'1%',  }}
                            // label="Name"
                            variant="outlined" required 
                            name='name'
                            onBlur={handleOnBlur} 
                            textColor="white"
                            
                        />

                        <br></br>
                        <small style={{fontWeight:'bold',marginBottom:'2%', marginLeft:'5%'}}>Email</small><br />
                        <TextField
                        style={{ marginLeft: '5%', width: '90%', marginBottom:'2%',marginTop:'1%',  }}
                            // label="Email"
                            name='email'
                            variant="outlined" required 
                            
                            onBlur={handleOnBlur} 
                        />
                        <br></br>

                        <small style={{fontWeight:'bold',marginBottom:'4%', marginLeft:'5%'}}>Queries</small>
                        <TextField
                        variant="outlined" required rows={4} id="outlined-multiline-static" multiline
                            style={{ marginLeft: '5%', width: '90%', marginTop:'1%',  }}
                            label="let write about your queries
                            "
                            name='querie'
                            onBlur={handleOnBlur} 
                            
                        />

                        <br></br>

                        
                       
                        <Button className='viewMoreButtonHoverBanner' variant="contained" type="submit" style={{
                            marginTop: '2%',
                            marginLeft:'45%', 
                           
                            padding: '15px 55px', color: 'white',
                            fontWeight: '400',
                            backgroundColor: "rgb(17,63,144)",
                            // background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
                            borderRadius: '15px'
                        }}>Submit</Button> <br></br>
                       
                    </form>
                </Box>
            </Container>


        </>

    );
};
export default ContactUsForm;