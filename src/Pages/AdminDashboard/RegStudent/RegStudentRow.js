import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button , Alert } from '@mui/material';
import { useSnackbar } from "notistack";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const RegStudentRow = ({regStudent,regStudents, setRegStudent, index,StyledTableRow,StyledTableCell}) => {
    const {name, email, phnNumber,TrxID,courseTeacher,subject,  _id, approveData} = regStudent;
    const {user, token} = useContext(AuthContext);
    const [approveSucces,  setaApproveSucces] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
console.log('regStudent', regStudent);

    const handleDelete = (id) => {
      console.log('id',id);
        fetch(`https://educational-live-solutions-sever.vercel.app/myCourse/${id}`,{
            method:'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount){
               
                enqueueSnackbar("Course delete Success", { variant: 'warning' }); 
                setRegStudent(regStudents?.filter((item)=> item?._id !== id))

            }
            
        })
       
    }


    const handleApprove = (id) => {
      fetch(`https://educational-live-solutions-sever.vercel.app/myCourse/${id}`, {
          method: 'PUT',
          headers: {
              'authorization': `Bearer ${token}`,
              'content-type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.modifiedCount){
            setaApproveSucces(true);
            enqueueSnackbar("Course approve Success", { variant: 'success' })   
              //setRegStudent(regStudents?.filter((item)=> item?._id !== id))
         
          }
      })
  }


   

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
          {courseTeacher}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {email}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {TrxID}
        
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {phnNumber}
        </StyledTableCell>
      
        <StyledTableCell component="th" scope="row">
          {subject}
        </StyledTableCell>
        <StyledTableCell style={{display:"flex"}}><Button onClick={()=>handleDelete(_id)} variant="contained" size="small" style={{fontWeight: '400',
        background: 'linear-gradient(to right,  rgb(198,42,66), rgb(198,105,42))',
        borderRadius: '15px'}}>Remove </Button>
        
         { approveData !=='approve' && <Button onClick={()=>handleApprove(_id)} variant="contained" size="small" style={{fontWeight: '400',marginLeft:"10px",
        background: 'MediumSeaGreen',
        borderRadius: '15px'}}>Approve </Button>

         }
        
        </StyledTableCell>

        </StyledTableRow>

        {approveSucces && <Alert severity="success"  >{regStudent?.name} is Approve !!...</Alert>}
 
        
       
        
         </>
     
       
    );
};

export default RegStudentRow;