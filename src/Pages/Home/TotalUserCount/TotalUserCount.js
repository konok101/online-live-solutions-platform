import { Box, Grid } from '@mui/material';
import React from 'react';
 
const TotalUserCount = () => {

    return (
        <Grid sx={{backgroundColor:'#747474', p:5}} >
              <Box sx={{ flexGrow: 1,p:5 }} style={{width:"80%", margin:"auto"}}>
      <Grid container spacing={2}>
        <Grid item xs={3} >
           <h3 style={{width:"70px", margin:"auto"}}> Students</h3>
        </Grid>
        <Grid item xs={3} >
        <h3 style={{width:"70px", margin:"auto"}}>  Teachers</h3>

        </Grid>
        <Grid item xs={3}>
        <h3 style={{width:"250px", margin:"auto"}}>  Succesfully complete</h3>
        </Grid>
        <Grid item xs={3}>
        <h3 style={{width:"170px", margin:"auto"}}> Total couses </h3>
        </Grid>
      </Grid>
    </Box> 
        </Grid>
    );
};

export default TotalUserCount;