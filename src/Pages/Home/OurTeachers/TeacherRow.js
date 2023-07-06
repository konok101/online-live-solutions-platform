import { Card, CardMedia, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const TeacherRow = ({course}) => {
    return (
        <>
              <Grid   item xs={12} sm={6} md={3.7} style={{marginTop:'40px'}}  >
       
       <Card style={{ borderBottom: "8px solid #f17917" }} sx={{ maxWidth: 545  }}>
 <Box sx={{height:'300px'}}>
 <CardMedia
     component="img"
     alt="teacher can't supported"
     height="100%"
     image={course?.imageURL}
   />
 </Box>
<Box sx={{display:'flex', alignItems:'center', mt:2, ml:2}}>
<h5>{course?.teacherName?.slice(0,22)}</h5>
 <Link href={course?.socialUrl} color="inherit">
                        <LinkedInIcon
                          style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                        />
           </Link>
</Box>

<h5 style={{marginLeft:'21px'}}>{course?.couseName} {" "} ({course?.teachingArea})</h5>
 
 </Card>
     </Grid>

        </>
    );
};

export default TeacherRow;