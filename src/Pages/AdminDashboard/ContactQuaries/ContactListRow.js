import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Alert } from '@mui/material';
import userEvent from '@testing-library/user-event';
import { useSnackbar } from "notistack";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import StudentReview from './ContactList';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';


const StudentReviewRow = ({ allReview, index,setAllReview, allReviews, StyledTableRow, StyledTableCell }) => {
    const { email,name, querie, _id } = allReview;
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const {user, token} = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleDelete = (id) => {
        console.log('id',id);
          fetch(`http://localhost:5000/contactList/${id}`,{
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
                  setAllReview(allReviews?.filter((item)=> item?._id !== id))
  
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
                    {querie}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
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

export default StudentReviewRow;