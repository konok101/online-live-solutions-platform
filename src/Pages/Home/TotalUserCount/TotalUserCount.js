import { Box, Grid } from '@mui/material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';



const TotalUserCount = () => {

    return (
        <Grid sx={{backgroundColor:'#747474', p:5}} >
              <Box sx={{ flexGrow: 1,p:5 }} style={{width:"80%", margin:"auto"}}>
      <Grid container spacing={2}>
        <Grid item xs={3} sx={{color:'wheat'}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 9812+</h3>

           <h3 style={{width:"70px", margin:"auto"}}> Students</h3>


        </Grid>
        <Grid item xs={3} sx={{color:'wheat'}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 82+</h3>

           <h3 style={{width:"70px", margin:"auto"}}> Teachers</h3>


        </Grid>
        <Grid item xs={3} sx={{color:'wheat'}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 98%</h3>

           <h3 style={{width:"270px", margin:"auto"}}>   Succesfully complete</h3>


        </Grid>

        <Grid item xs={3} sx={{color:'wheat'}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 98+</h3>

           <h3 style={{width:"160px", margin:"auto"}}> Total couses</h3>


        </Grid>
        
      </Grid>
    </Box> 
        </Grid>
    );
};

export default TotalUserCount;