import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button , Alert } from '@mui/material';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {    useNavigate } from 'react-router';
import Link from '@mui/material/Link';

const StudentRegisteredRow = ({regStudent, index,StyledTableRow,StyledTableCell}) => {
    const {name, email, phnNumber,TrxID,classes,subject,institution, couseName, courseTeacher, approveData, courseSerial} = regStudent;
    const {user, token} = useContext(AuthContext);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const navigate= useNavigate();

    const handleMyReviewPage = courseSerial =>{
      navigate(`/myReview/${courseSerial}`)
 
    }
 

    return (
        
        <>
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {index + 1}{courseSerial}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {name} 
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {email}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {courseTeacher}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {TrxID}
        
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {phnNumber}
        </StyledTableCell>
   
        <StyledTableCell component="th" scope="row">
          {subject} {couseName}
        </StyledTableCell>
    
        <StyledTableCell align='center' style={{display:"flex"}} component="th" scope="row">
          {approveData && <>Approved</>}
          {!approveData && <>pending</>}
        
          {approveData && <><Button className='buttonHover' color="inherit" sx={{ color: 'black', bgcolor:"gray", width:"110px", ml:'5px' }}>Message</Button></>}
         
     
          {approveData &&
          
          <>              <Link  onClick={()=>handleMyReviewPage(courseSerial)} style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black', bgcolor:"gray", width:"110px", ml:'5px' }}>Add review</Button></Link>
          </>}
         
        </StyledTableCell>
        

        
        
        
        </StyledTableRow>

       
        
         </>
     
       
    );
};

export default StudentRegisteredRow;