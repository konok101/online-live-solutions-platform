import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { Box, height } from "@mui/system";
import { Button, Typography, Alert, Container } from "@mui/material";
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





    const { _id } = useParams();
    const [fruitsInfo, setFruitsInfo] = useState({});
 
   
 
    useEffect(() => {
       const url = `http://localhost:5000/myCourse/${_id}`;
 
       fetch(url)
          .then(res => res.json())
          .then(data => setFruitsInfo(data))
    }, []);










    // const { user } = useContext(AuthContext);
    const initialInfo = {  name:'', email:'' }
    const { enqueueSnackbar } = useSnackbar();

    const [userInfo, setUserInfo] = useState(initialInfo);

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
        fetch('http://localhost:5000/review', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
         },
            body: JSON.stringify(ContactUs)
        })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if (data.insertedId) {
            // setSuccess(true);
        }
    });

    e.preventDefault();
    enqueueSnackbar("Review submit Success", { variant: 'success' })   

    }

     

    const [regStudent, setRegStudent] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/courseRating`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setRegStudent(data));

    }, []);

    console.log('regStudent',regStudent);

    return (
        <>
 <Navigation/>
            <Container style={bannerBackground} sx={{ height: '100vh' }} >
                <Box container justifyContent='center' style={{ textAlign: 'center', paddingTop: '5%', borderBottom: "2px solid #472ca7", paddingBottom: '5%' }}>

                    <Typography variant="h4" style={{ margin: 15, color: '#160254' }}><span style={{ backgroundColor: '#e1e1f1' }}> Submit Review</span></Typography>


                    {
                                    regStudent.map((regStudent, index) => <ReviewRow
                                        key={regStudent._id}
                                        review={regStudent}
                                        index={ index}
                                      

                                    ></ReviewRow>)

                    }
                    
                </Box>
            </Container>


        </>

    );
};
export default AddReview;