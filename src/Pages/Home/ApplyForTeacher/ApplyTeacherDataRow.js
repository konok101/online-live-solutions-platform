import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button , Alert, Link, CardMedia, Box, Typography, Modal } from '@mui/material';
import { useSnackbar } from "notistack";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

 
const RegStudentRow = ({applyTeacher,  applyTeachers, setApplyTeachers, index,StyledTableRow,StyledTableCell}) => {
    const { teachingArea, teacherName, aboutTeacher, imageURL, _id, } = applyTeacher;
    const {user, token} = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
 
    const handleDelete = (id) => {
      console.log('id',id);
        fetch(`http://localhost:5000/applyForTeacher/${id}`,{
            method:'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=> {
            console.log("12ss",data);
            if(data.deletedCount){
               
                enqueueSnackbar("Delete Success", { variant: 'error' }); 
                setApplyTeachers(applyTeachers?.filter((item)=> item?._id !== id))

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
       
      
       
        <StyledTableCell style={{display:"flex" }}> 
            
        <CardMedia
        component="img"
        alt="green iguana"
        height="30px"
        width="30px"
        image={imageURL}
        style={{height:'12vh',backgroundSize: 'cover', position: 'relative',}}
      />
         
 
        </StyledTableCell>


        <StyledTableCell component="th" scope="row">
    {/*    <Button onClick={()=>handleDelete(_id)}>
        Delete
       </Button> */}


 

       <Button onClick={handleClickOpen} variant="outlined" sx={{color:'red'}} startIcon={<DeleteIcon />}>
  Delete
</Button>
 
        
        </StyledTableCell>

        </StyledTableRow>

        

      
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
           Are you sure you want to delete ?
        </DialogTitle>
      
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>No</Button>
          <Button variant="contained"   onClick={()=>handleDelete(_id)} autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
         </>

     
       
    );
};

export default RegStudentRow;