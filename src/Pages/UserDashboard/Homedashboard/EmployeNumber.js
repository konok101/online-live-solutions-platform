import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
function EmployeNumber() {

    const { user, admin, teacher } = useContext(AuthContext);

    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/users`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUser(data));
  
    }, []);
  
   
      let teacherList = allUser?.filter((user)=>{
          if(user?.role === "teacher"){
              return user;
          }
      }) 

      const [reviews, setReviews] = useState([]);
      useEffect(() => {
          const url = `http://localhost:5000/courseRating`;
          fetch(url)
              .then((res) => res.json())
              .then((data) => setReviews(data));
  
      }, []);


      const [totalPrice, setTotalPrice] = useState([]);
      useEffect(() => {
          const url = `http://localhost:5000/courseSubmit`;
          fetch(url)
              .then((res) => res.json())
              .then((data) => setTotalPrice(data));
  
      }, []);
 

      const total =(totalPrice?.reduce((total, currentItem) => total = total + parseInt(currentItem?.price || 0), 0));

    
    return (
        <>
            <Container >
            <h1 style={{color:'#08558b', marginTop:'5%', textAlign:'center'}}>Educational Live S<span style={{color:'#c7c91e'}}>olutions platform</span> </h1>
                <Grid container  justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}  spacing={{ xs: 4, md: 3}} 
                 style={{marginTop:'2%', textAlign:'right'}}
                
                >
                
                    <Grid item  xs={3} sm={3} md={3}  >
                        <Paper elevation={0}style={{background: 'linear-gradient(to right, rgba(116,34,200, 0.5), rgba(232,92,222, 0.5))',padding:'15%',color:'#08558b'}}> 
                        <h1>{allUser?.length}+</h1>
                        <h1>Students</h1>
                        </Paper>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3}>
                        <Paper elevation={3} style={{background: 'linear-gradient(to right,  rgba(201,40,23,0.5), rgba(236,63,133,0.5))',padding:'15%',color:'#08558b'}}>  
                        <h1>{teacherList?.length}+</h1>
                        <h1>Teachers </h1>
                        </Paper>
                    </Grid>

                   {admin &&  <Grid item xs={3} sm={3} md={3}>
                        <Paper elevation={3} style={{background: 'linear-gradient(to right, rgba(10,85,27, 0.5), rgba(16,174,157, 0.5))',padding:'15%',color:'#08558b'}}> 
                        <h1>{total}+</h1>
                        <h1>earn</h1>
                        </Paper>
                    </Grid>}

                    <Grid item xs={3} sm={3} md={3}>
                        <Paper elevation={3} style={{background: 'linear-gradient(to right, rgba(6,12,133, 0.5), rgba(19,124,219, 0.5))',padding:'15%',color:'#08558b'}}> 
                        <h1>{reviews?.length}+</h1>
                        <h1>Reviews</h1>
                        </Paper>
                    </Grid>


                </Grid>
            </Container>
        </>
    )
}

export default EmployeNumber