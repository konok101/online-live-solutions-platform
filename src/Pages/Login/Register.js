import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useContext } from "react";
import * as React from 'react';
// import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import useAuth from "../../../hooks/useAuth";
import loginImg from "../../images/loginImg.jpg";
import Navigation from "../Shared/Navigation";
import Footer from "../Shared/Footer";
import Link from '@mui/material/Link';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

// import useAuth from "../../hooks/useAuth";
// import { Link, NavLink } from "react-router-dom";
// import Navigation from "../../shared/Navigation/Navigation";
// import Footer from "../../shared/Footer/Footer";


const Register = () => {

    const history = useNavigate();
    const [loginData, setLoginData] = useState({})
    const [error, setError] = useState('');
    const { registerUser, authError, loading, user, updateUser, verifyEmail } = useContext(AuthContext);


    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    //     createUser(loginData.email, loginData.password)
    //         .then(result => {
    //             verifyEmail();
    //             const user = result.user;
    //             console.log(user);
    //             const userInfo = {
    //                 displayName: loginData.name
    //             }
    //             updateUser(userInfo)
    //             .then(() => {
    //                 // saveUser();
    //             })
    //             .catch(err => console.log(err));   
    //             // console.log(loginData);
    //         })
    //     .catch (error => console.log(error));
    //     // console.log(newLoginData);
    //     }


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }










    //     const saveUser = (name, email) =>{
    //         const user = {name,email};
    //         fetch('http://localhost:5000/users',{

    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then()
    // }


    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     fetch('http://localhost:5000/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }











    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password.length < 6) {
            setError('Password Must be at least 6 characters long');
            return;
        }

        if (!/((?=.*\d)(?=.*[a-zA-Z])(?=(.*\W){2}).{8,})/.test(loginData.password)) {
            setError('Password Must contain 1 digit,1 alphabet,2 special character & 8 characters long');
            return;
        }

        if (loginData.password !== loginData.conpassword) {
            alert("your password didn't match!!!");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);


    }

    const imgStyle = {
        borderRadius: 400,
        width: '40%',

    }

    return (
        <div style={{ backgroundColor: 'linear-gradient(to right,rgb(228,231,234), rgb(201,230,235))', textAlign: 'center' }} >


            <Navigation></Navigation>
            <Container >
                <Grid container justifyContent={'center'} spacing={2} >

                    <Grid item xs={12} md={12} sx={{ mt: 10 }}>
                        <img style={imgStyle} src={loginImg} alt="" />

                    </Grid>

                    <Grid item sx={{ mt: 5, mb: 10 }} xs={12} md={8} >
                        <Typography variant="h4" gutterBottom >
                            Register
                        </Typography>

                        {/*{!isLoading && */}
                        <form
                            onSubmit={handleRegisterSubmit}
                        >
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Confirm Password"
                                type="password"
                                name="conpassword"
                                required
                                onBlur={handleOnBlur}
                                variant="standard" />



                            <Button sx={{ width: '75%', m: 3 }}
                                type="submit" style={{ backgroundColor: '#b30d52' }} variant="contained">Register
                            </Button>


                            <Box style={{ color: 'red', textAlign: 'center' }}>
                                {error}
                            </Box>


                            {/* <NavLink
                                style={{ textDecoration: 'none' }}
                                 to='/login'>
                                <Button variant="text" sx={{ml:11}}>Already Registered? Please Login</Button>
     </NavLink> */}




                            <Link href="/login" color="inherit" style={{ textDecoration: 'none', fontWeight: 425 }}>
                                <Button variant="text" sx={{ ml: 11 }}>Already Registered? Please Login</Button>
                            </Link><br></br>
                        </form>
                        {/*
                    }
                    */}

                        {loading && <CircularProgress />}

                        {user?.email && <Alert severity="success">Registered successfully!!! </Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}




                    </Grid>


                </Grid>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Register;