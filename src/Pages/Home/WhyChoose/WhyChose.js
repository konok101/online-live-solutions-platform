import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Stack } from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Tooltip from '@mui/material/Tooltip';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const WhyChose = () => {

    return (
       <div  style={{ marginTop:'5%', paddingTop:"2%", paddingBottom:'4%', backgroundColor:"#FFFFFF", overflow:'hidden'}}>
      <Box style={{maxWidth:"80%", margin:"auto"}}>
    <h1 style={{maxWidth:"400px", margin:"auto", marginTop:"30px" }}> WHY CHOOSE US</h1>
    <h5 style={{maxWidth:"600px", margin:"auto", marginTop:"3px" }}> Are you thinking about completing a higher education programme?</h5>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4} >
  <Box sx={{ width: '100%' }}>
      <Stack spacing={5}>

 
 <Grid sx={{display:'flex' , alignItems:"center" }}>
 <Box  >
             Meals Provided  
     </Box>
       <Tooltip title=" Provided tip Meals tip Meals Provided tip" 
       ____
       placement="left" sx={{mt:5}}>
            <Button> 
            <Box sx={{ml:2, borderRadius: '50%',    ":hover": {
      bgcolor: "#2db6a3",
      color: "white"
    },
     border:"2px solid #2db6a3"}}     > 
          <DinnerDiningIcon  sx={{fontSize:70,  borderRadius: '50%'}} />
       </Box>
            </Button>
            </Tooltip>
 </Grid>

 <Grid sx={{display:'flex' , alignItems:"center" }}>
 <Box  >
             Meals Provided  
     </Box>
       <Tooltip title=" Provided tip Meals tip Meals Provided tip" 
       ____
       placement="left" sx={{mt:5}}>
            <Button> 
            <Box sx={{ml:2, borderRadius: '50%',    ":hover": {
      bgcolor: "#2db6a3",
      color: "white"
    },
     border:"2px solid #2db6a3"}}     > 
          <DinnerDiningIcon  sx={{fontSize:70,  borderRadius: '50%'}} />
       </Box>
            </Button>
            </Tooltip>
 </Grid>

 <Grid sx={{display:'flex' , alignItems:"center" }}>
 <Box  >
             Meals Provided  
     </Box>
       <Tooltip title=" Provided tip Meals tip Meals Provided tip" 
       ____
       placement="left" sx={{mt:5}}>
            <Button> 
            <Box sx={{ml:2, borderRadius: '50%',    ":hover": {
      bgcolor: "#2db6a3",
      color: "white"
    },
     border:"2px solid #2db6a3"}}     > 
          <DinnerDiningIcon  sx={{fontSize:70,  borderRadius: '50%'}} />
       </Box>
            </Button>
            </Tooltip>
 </Grid>
      </Stack>
    </Box>
      </Grid>
        <Grid item xs={12}  sm={12} md={6} lg={4} sx={{marginTop:"20px"}}>      
          <img src="https://htmldemo.net/educan/educan/images/choose/1.png" alt="" />
        </Grid>
     <Grid item xs={12}  lg={4}  sm={12} md={6}>
        <Stack spacing={5}>
        <Grid sx={{display:'flex' , alignItems:"center"}} style={{marginLeft:"120px"}}>

<Tooltip title=" Provided tip Meals tip Meals Provided tip" 
____
placement="right" sx={{mt:5}}>
     <Button> 
     <Box sx={{ml:2, borderRadius: '50%',    ":hover": {
bgcolor: "#2db6a3",
color: "white"
},
border:"2px solid #2db6a3"}}     > 
   <DinnerDiningIcon  sx={{fontSize:70,  borderRadius: '50%'}} />
</Box>
     </Button>
     </Tooltip>

     <Box  >
      Meals Provided   
</Box>
       </Grid>
 
<Grid sx={{display:'flex' , alignItems:"center"}} style={{marginLeft:"120px"}}>

<Tooltip title=" Provided tip Meals tip Meals Provided tip" 
____
placement="right" sx={{mt:5}}>
     <Button> 
     <Box sx={{ml:2, borderRadius: '50%',    ":hover": {
bgcolor: "#2db6a3",
color: "white"
},
border:"2px solid #2db6a3"}}     > 
   <DinnerDiningIcon  sx={{fontSize:70,  borderRadius: '50%'}} />
</Box>
     </Button>
     </Tooltip>

     <Box  >
      Meals Provided    
</Box>
</Grid>




<Grid sx={{display:'flex' , alignItems:"center", ml:5 }} style={{marginLeft:"120px"}}>

      <Tooltip title=" Provided tip Meals tip Meals Provided tip" 
      ____
      placement="right" sx={{mt:5}}>
           <Button> 
           <Box sx={{ml:2, borderRadius: '50%',    ":hover": {
     bgcolor: "#2db6a3",
     color: "white"
   },
    border:"2px solid #2db6a3"}}     > 
         <DinnerDiningIcon  sx={{fontSize:70,  borderRadius: '50%'}} />
      </Box>
           </Button>
           </Tooltip>
           <Box  >
            Meals Provided  
    </Box>
</Grid>

     </Stack>       
      </Grid>
      </Grid>
    </Box>
 
 
 
         </div>
    );
};

export default WhyChose;