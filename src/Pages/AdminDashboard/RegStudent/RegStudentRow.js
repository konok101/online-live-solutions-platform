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


const RegStudentRow = ({regStudent, index,StyledTableRow,StyledTableCell}) => {
    const {name, email, phnNumber,TrxID,classes,subject,institution, _id, approveData} = regStudent;
    const {user, token} = useContext(AuthContext);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleDelete = (id) => {
      console.log('id',id);
        fetch(`http://localhost:5000/myCourse/${id}`,{
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
                setDeleteSuccess(true);
            }
        })

    }


    const handleApprove = (id) => {
      fetch(`http://localhost:5000/myCourse/${id}`, {
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
              /* setAdminSuccess(true); */
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

        {deleteSuccess && <Alert severity="success"  >{regStudent.displayName} is deleted!!...</Alert>}

        
       
        
         </>
     
       
    );
};

export default RegStudentRow;