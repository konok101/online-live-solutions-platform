import React, {  useContext } from 'react';
 import { Button ,  Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {    useNavigate } from 'react-router';
import Link from '@mui/material/Link';
import { useSnackbar } from 'notistack';

const StudentRegisteredRow = ({regStudent}) => {
    const {name,  img,subject, _id,   courseTeacher, approveData, courseSerial, isRating} = regStudent;
    const {user, token} = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();
    const navigate= useNavigate();
   
  console.log('isRating isRating', isRating);
    const handleJoinRoom = (value) => {
      console.log('value rom',value);
      navigate(`/room/${value}`);
    };

    const handleMyReviewPage = (courseSerial, _id) =>{
      handleReviewButton(_id)
      navigate(`/myReview/${courseSerial}`)
 
    }
    const handleReviewButton = (_id) => {
      fetch(`http://localhost:5000/myCoursed/${_id}`, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${token}`,
              'content-type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => {
          console.log("ss data",data);
          if(data.modifiedCount){
              
/*               enqueueSnackbar("Course approve 11", { variant: 'success' })   
 */ 

          }
      })
  }





  

 

    return (    
        <>
<Card sx={{ display: 'flex', m:'5px' }}>
<CardMedia
        component="img"
        sx={{ width: 151 }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
       Learn With <span style={{color:"orange"}}>{courseTeacher} </span> and solve your problem....
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
             {subject}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
             {name}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
             <CardActions>
        <Button size="small">         {approveData && <>Approved</>}
          {!approveData && <>pending</>}
         
        
        </Button>
        <Button size="small">           {approveData && <>  <Link onClick={()=>handleJoinRoom(courseSerial)} style={{ textDecoration: 'none' }}><Button variant="contained"> Join Now </Button></Link>
        
        <div>
 

    
    </div>
        
        </>
        
        }
 </Button>
        <Button size="small">  {isRating === true && approveData &&
          
          <>              <Link  onClick={()=>handleMyReviewPage(courseSerial, _id)} style={{ textDecoration: 'none' }}><Button variant="contained">Add review</Button></Link>
          </>}</Button>
      </CardActions> 
       
        </Box>
      </Box>
   
    </Card>





















       
        
         </>
     
       
    );
};

export default StudentRegisteredRow;