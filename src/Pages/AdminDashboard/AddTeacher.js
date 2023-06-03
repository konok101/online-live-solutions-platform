import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert, Container, Divider } from "@mui/material";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const AddTeacher = ({ course, setCourse }) => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // const handleDoctorSubmit = e => {
    //     const user = { email };
    //     fetch('http://localhost:5000/users/addDoctor', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount) {
    //                 setSuccess(true);
    //             }
    //         })
    //     e.preventDefault()
    // }

    return (
        <>
            <Navigation />
            <Container style={{ height: '45vh', marginLeft: '8%' }}>
                <h2 style={{ marginTop: '8%', textAlign: 'center' }}>Add Teacher </h2>
                <form
                    // onSubmit={handleTeacherSubmit}
                    style={{ marginTop: '8%' }}>
                    <TextField
                        sx={{ width: '60vw' }}
                        label="Email"
                        type='email'
                        name='email'
                        required
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button type='submit' variant='contained' style={{
                        fontWeight: '400',
                        background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
                        borderRadius: '15px'
                    }}>Add Teacher</Button>
                </form>
                {success && <Alert severity="success"  >Add Teacher successfully!!! </Alert>}
                <br></br>


            </Container>
            <Footer />
        </>
    );
};
export default AddTeacher;






