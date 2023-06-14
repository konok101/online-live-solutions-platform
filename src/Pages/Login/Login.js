import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React, { useContext, useState } from "react";
import Link from '@mui/material/Link';
import loginImg from "../../images/loginImg.jpg";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";
import { useLocation, useNavigate } from "react-router";
// import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Pages/Login/Firebase/firebase.init'
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useSnackbar } from "notistack";





const Login = () => {

    const [loginData, setLoginData] = useState({})

    // const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { signIn, authError,signInWithGoogle, resetPassword } = useContext(AuthContext);

    const { enqueueSnackbar } = useSnackbar();

     const handleSignInWithGoogle = () => {
        signInWithGoogle()
          .then(() => {
            navigate(from, { replace: true })
          })
      }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        signIn(loginData.email, loginData.password,navigate)
        // .then(({loginData}) => {
        //     navigate(from, { replace: true })
        //   })
          enqueueSnackbar("Login Success", { variant: 'success' })   
        e.preventDefault();
    }

    // if(!loginData.email){
    //     navigate(from, { replace: false })
    // }

    // const saveUser = 

    const handleForgetPassword = () => {
        resetPassword(loginData.email);
    }
    const imgStyle = {
        borderRadius: 400,
        width: '40%',


    }

 
    return (
        <div style={{ background: 'rgb(112,242,226)', textAlign: 'center' }} >


            <Navigation></Navigation>
            <Container>
                <Grid container justifyContent={'center'} spacing={2} >
                    <Grid item xs={12} md={12} sx={{ mt: 10 }}>
                        <img style={imgStyle} src={loginImg} alt="" />
                    </Grid>
                    <Grid item sx={{ mt: 5, mb: 10 }} xs={12} md={8}>
                        <Typography variant="h4" gutterBottom >
                            Login
                        </Typography>
                        <form
                            onSubmit={handleLoginSubmit}
                        >
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onChange={handleOnChange}
                                variant="standard" />
                            {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Student Id"
                            name="email"

                            onChange={handleOnChange}
                            variant="standard" /> */}
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                onChange={handleOnChange}
                                variant="standard" />
                            <br></br>

                            <Button sx={{ width: '75%', m: 3 }}
                                type="submit" style={{ backgroundColor: '#0d4ef2' }} variant="contained">Login
                            </Button>
                            <br></br>
                            <Button variant="link" sx={{}}
                                onClick={handleForgetPassword}
                            >Forgotten Password?</Button>


                            <Link style={{ textDecoration: 'none' }} href='/register'>
                                <Button variant="text" sx={{ ml: '14%', color: 'black' }} >Create New account</Button>
                            </Link>
                            <br></br><br></br>

                            {/*
                            {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success"  >Login successfully!!! </Alert>} */}

                        
                            {authError && <Alert severity="error">{authError}</Alert>}
                            {/* <p>--------------------------------------</p> */} <br></br>


                            <Button
                                onClick={handleSignInWithGoogle}
                                sx={{ ml: 8, p: 1 }} variant="contained" style={{ width: '45%', alignItems: 'center', backgroundColor: '#b30d52' }}>Login with Google</Button><br></br>
                        </form>
                    </Grid>
                </Grid>
            </Container>

            <Footer></Footer>
        </div>
    );
};
export default Login;