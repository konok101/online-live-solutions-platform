import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';

const ReviewRow = ({review}) => {
  console.log('review review', review);
    return (
      
               <Grid   item xs={12} sm={6} md={3.7} style={{marginTop:'40px'}}  >
       
       <Card style={{ borderBottom: "8px solid #f17917" }} sx={{ maxWidth: 545  }}>
 <Box sx={{height:'300px'}}>
 <CardMedia
     component="img"
     alt="teacher can't supported"
     height="100%"
     image={review?.teacherList?.imageURL} 
   />
 </Box>
 <Box sx={{display:'flex', alignItems:'center', mt:2, ml:2}}>
<h5>{review?.teacherList?.teacherName?.slice(0,22)}</h5>
 <Link href={review?.teacherList?.socialUrl} target="_blank"  color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
           </Link>
</Box>

<h5 style={{marginLeft:'21px'}}>{review?.teacherList?.couseName} {" "} ({review?.teacherList?.teachingArea})</h5>
 

 
 </Card>
     </Grid>
        
    );
};

export default ReviewRow;