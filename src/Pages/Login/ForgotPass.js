import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert, CardContent, CardActions, Card, CardMedia } from "@mui/material";
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
import { NavLink } from 'react-router-dom';






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

 

    const handleForgetPassword = (e) => {
       
        resetPassword(loginData.email) 
            enqueueSnackbar("Check your email", { variant: 'success' })   
            e.preventDefault();
 
    }

    const imgStyle = {
        borderRadius: 400,
        width: '40%',


    }

 
    return (
        <div style={{ background: 'rgb(112,242,226)', textAlign: 'center'}} >


            <Navigation></Navigation>
            <Container>
                <Grid style={{height:"500px"}} sx={{marginTop:'100px'}} container justifyContent={'center'} spacing={2} >
                 
                    <Grid item sx={{ mt: 5, mb: 10 }} xs={12} md={8}>
                        <Typography variant="h4" gutterBottom >
                        Forgot Password

                        </Typography>
                        <form
                            onSubmit={handleForgetPassword}
                        >
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Enter your email"
                                name="email"
                                type="email"
                                required
                                onChange={handleOnChange}
                                variant="standard" />

 
                         
                     

                            
                            <br></br>

                            <Button sx={{ width: '75%', m: 3 }} type="submit"   
                                 style={{ backgroundColor: '#0d4ef2' }} variant="contained">Next
                            </Button>
                    

        
                        
                            <br></br><br></br>

                            {/*
                            {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success"  >Login successfully!!! </Alert>} */}

                        
                            {authError && <Alert severity="error">{authError}</Alert>}
                            {/* <p>--------------------------------------</p> */} <br></br>


                        </form>
                    </Grid>
                </Grid>
            </Container>

            <Footer></Footer>
        </div>
    );
};
export default Login;