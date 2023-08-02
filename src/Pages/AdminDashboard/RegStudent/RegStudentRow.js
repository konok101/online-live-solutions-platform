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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const RegStudentRow = ({regStudent,regStudents, setRegStudent, index,StyledTableRow,StyledTableCell}) => {
    const {name, email, phnNumber,TrxID,courseTeacher,subject,  _id, approveData} = regStudent;
    const {user, token} = useContext(AuthContext);
    const [approveSucces,  setaApproveSucces] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = React.useState(false);
    const [openForDelete, setOpenForDelete] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpenForDelete = () => {
      setOpenForDelete(true);
    };
  
    const handleCloseForDelete= () => {
      setOpenForDelete(false);
    };
 
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
               
                enqueueSnackbar("Course delete Success", { variant: 'error' }); 
                setRegStudent(regStudents?.filter((item)=> item?._id !== id))

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
            setaApproveSucces(true);
            enqueueSnackbar("Course approve Success", { variant: 'success' })   
            //setRegStudent(regStudents?.filter((item)=> item?._id !== id))
         
          }
      })

      handleClose()
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
        <StyledTableCell component="th" scope="row"  style={{display:"flex"}}><Button onClick={handleClickOpenForDelete} variant="contained" size="small" style={{fontWeight: '400',
        background: 'linear-gradient(to right,  rgb(198,42,66), rgb(198,105,42))',
        borderRadius: '15px'}}>Remove </Button>
        
         { approveData !=='approve' && <Button onClick={handleClickOpen} variant="contained" size="small" style={{fontWeight: '400',marginLeft:"10px",
        background: 'MediumSeaGreen',
        borderRadius: '15px'}}>Approve </Button>

         }
        
        </StyledTableCell>
  
        </StyledTableRow>


        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Are you sure  Approve this <span style={{color:'orange'}}>{name} </span> ?
        </DialogTitle>
      
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>No</Button>
          <Button variant="contained"   onClick={()=>handleApprove(_id)} autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>



      <Dialog
        open={openForDelete}
        onClose={handleCloseForDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Are you sure want to delete ?
        </DialogTitle>
      
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseForDelete}>No</Button>
          <Button variant="contained"   onClick={()=>handleDelete(_id)} autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
        
       
        
         </>
     
       
    );
};

export default RegStudentRow;