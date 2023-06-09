import { Box, Grid } from '@mui/material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';


const TotalUserCount = () => {
  const homeStyle = {
    background: 'linear-gradient(to right,rgb(2,4,34), rgb(153,153,160))',
    width:"90%", margin:"auto"
  }
    return (
        // <Grid sx={{ p:5, }} style={} >
              <Box sx={{ flexGrow: 1,p:5 }} style={homeStyle}>
      <Grid container spacing={0}>
        <Grid item xs={3} sx={{color:'#FDFDFF',}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 9812+</h3>

           <h3 style={{width:"70px", margin:"auto"}}> Students</h3>


        </Grid>
        <Grid item xs={3} sx={{color:'#FDFDFF'}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 82+</h3>

           <h3 style={{width:"70px", margin:"auto"}}> Teachers</h3>


        </Grid>
        <Grid item xs={3} sx={{color:'#FDFDFF',textAlign:'center'}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 98%</h3>

           <h3 style={{width:"270px", margin:"auto"}}>Succesfully<br/> complete</h3>


        </Grid>

        <Grid item xs={3} sx={{color:'#FDFDFF'}} >
          <h6 style={{width:"70px", margin:"auto"}}> 
            <PeopleIcon  sx={{fontSize:90, ml:-2, borderRadius: '50%'}} />
          </h6>
          <h3 style={{width:"70px", margin:"auto"}}> 98+</h3>

           <h3 style={{width:"160px", margin:"auto"}}> Total couses</h3>


        </Grid>
        
      </Grid>
    </Box> 
        // </Grid>
    );
};

export default TotalUserCount;