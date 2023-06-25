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
import { Link } from 'react-router-dom';


const StudentRegisteredRow = ({regStudent, index,StyledTableRow,StyledTableCell}) => {
    const {name, email, phnNumber,TrxID,classes,subject,institution, couseName, courseTeacher, approveData, _id} = regStudent;
    const {user, token} = useContext(AuthContext);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

 

    return (
        
        <>
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {index + 1}
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
          {classes}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {subject} {couseName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {institution}
        </StyledTableCell>
        <StyledTableCell align='center' style={{display:"flex"}} component="th" scope="row">
          {approveData && <>Approved</>}
          {!approveData && <>pending</>}
        
          {approveData && <><Button className='buttonHover' color="inherit" sx={{ color: 'black', bgcolor:"gray", width:"110px", ml:'5px' }}>Message</Button></>}
         
     
          {approveData &&
          
          <>              <Link to="/myReview/:_id" style={{ textDecoration: 'none' }}><Button className='buttonHover' color="inherit" sx={{ color: 'black', bgcolor:"gray", width:"110px", ml:'5px' }}>Add review</Button></Link>
          </>}
         
        </StyledTableCell>
        

        
        
        
        </StyledTableRow>

       
        
         </>
     
       
    );
};

export default StudentRegisteredRow;