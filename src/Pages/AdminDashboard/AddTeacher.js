import React, { useContext, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert, Container, Divider, Autocomplete, Grid, Box } from "@mui/material";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useSnackbar } from "notistack";


const AddTeacher = ({ course, setCourse }) => {
    const { user } = useContext(AuthContext);

    const { enqueueSnackbar } = useSnackbar();

/*     const [email, setEmail] = useState('');
 */    const [price, setPrice] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

 /*    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleOnBlurTwo = e => {
        setPrice(e.target.value);
    } */

    const [allUser, setAllUser] = useState([]);

    

    useEffect(() => {
        const url = `http://localhost:5000/users`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUser(data));
    }, []);

    

    const [email, setTeacherEmail] = useState('')
    const [teacherName, setTeacherName] = useState('')

    const handleTeacherEmail = (value) => {
        setTeacherEmail(value?.email)
        setTeacherName(value?.displayName)
    }


    const handleTeacherSubmit = e => {
        const user = { email, price };
       

        console.log('tttt 11', user);
        fetch('http://localhost:5000/users/addTeacher', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data data', data)
                if(data.modifiedCount) {
                     enqueueSnackbar(`${teacherName} is  add a teacher `, { variant: 'success' })                

                  
                }
                else{
 
                    enqueueSnackbar("Wrong Information here", { variant: 'warning' })                

                }

            })
        e.preventDefault()
    }


    

    return (
        <>
         
            <Container style={{ height: '45vh', marginLeft: '18%' }}>
                <h2 style={{ marginTop: '8%', textAlign: 'center' }}>Add Teacher </h2>

                <div>

                </div>
            
              {/*       <TextField
                        sx={{ width: '60vw' }}
                        label="Email"
                        type='email'
                        name='email'
                        required
                        onBlur={handleOnBlur}
                        variant="standard" /> */} <br/>



                        
<Grid item xs={12} sm={12} md={12}  sx={{ width: '60vw' }} >
                                        <small style={{fontWeight:'bold',marginBottom:'2%'}}>Select Teacher Name </small><br />
                                        <Autocomplete
                                            onChange={(event, value) => handleTeacherEmail(value)}
                                            size='small'
                                            disablePortal
                                            id="combo-box-demo"
                                            getOptionLabel={(allUser) => `${allUser?.displayName}`}
                                            options={allUser}
                                            renderOption={(props, deptData) => (
                                                <Box  {...props} >
                                                    <ul style={{ listStyleType: 'none' }}>
                                                        <li ><strong>{deptData?.displayName}</strong></li>
                                                        <li ><p>{deptData?.email}</p></li>
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

 
 
                    <Button onClick={handleTeacherSubmit} type='submit' variant='contained' style={{
                        fontWeight: '400',
                        marginTop:'10px',
                        background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
                        borderRadius: '15px'
                    }}>Add Teacher</Button>
             
{/*                 {success && <Alert severity="success"  >Add Teacher successfully!!! </Alert>}
                {error && <Alert severity="warning"  > Already  Teacher  Added!!! </Alert>} */}
                <br></br>


            </Container>
      
        </>
    );
};
export default AddTeacher;







