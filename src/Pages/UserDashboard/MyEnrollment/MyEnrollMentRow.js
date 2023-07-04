import React, { useState,  useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
 import { Button ,  Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {    useNavigate } from 'react-router';
import Link from '@mui/material/Link';

const StudentRegisteredRow = ({regStudent, index,StyledTableRow,StyledTableCell}) => {
    const {name, email, phnNumber,TrxID, img,subject,institution, couseName, courseTeacher, approveData, courseSerial} = regStudent;
    const {user, token} = useContext(AuthContext);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const navigate= useNavigate();

    const handleMyReviewPage = courseSerial =>{
      navigate(`/myReview/${courseSerial}`)
 
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
        <Button size="small">           {approveData && <><Button variant="contained">Message</Button></>}
 </Button>
        <Button size="small">  {approveData &&
          
          <>              <Link  onClick={()=>handleMyReviewPage(courseSerial)} style={{ textDecoration: 'none' }}><Button variant="contained">Add review</Button></Link>
          </>}</Button>
      </CardActions> 
       
        </Box>
      </Box>
   
    </Card>





















       
        
         </>
     
       
    );
};

export default StudentRegisteredRow;