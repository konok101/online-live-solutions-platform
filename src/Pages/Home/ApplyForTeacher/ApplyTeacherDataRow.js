import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button , Alert, Link, CardMedia } from '@mui/material';
import { useSnackbar } from "notistack";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';


const RegStudentRow = ({applyTeacher,  applyTeachers, setApplyTeachers, index,StyledTableRow,StyledTableCell}) => {
    const { teachingArea, teacherName, aboutTeacher, imageURL, _id, } = applyTeacher;
    const {user, token} = useContext(AuthContext);
 
 
 


  

   

    return (
        
        <>
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {teacherName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {teacherName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {teachingArea}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {aboutTeacher}
        
        </StyledTableCell>
       
      
       
        <StyledTableCell style={{display:"flex"}}> 
            
        <CardMedia
        component="img"
        alt="green iguana"
        height="10px"
        width="10px"
        image={imageURL}
        style={{height:'32vh',backgroundSize: 'cover', position: 'relative',}}
      />
        
        </StyledTableCell>

        </StyledTableRow>

      
        
         </>
     
       
    );
};

export default RegStudentRow;