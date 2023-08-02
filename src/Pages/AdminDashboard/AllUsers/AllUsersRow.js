import React, { useState, useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button , Alert } from '@mui/material';
import userEvent from '@testing-library/user-event';
import AllUsers from './AllUsers';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from "notistack";

 

const AllUserRow = ({allUser,setAllUsers, allUsers, index,StyledTableRow,StyledTableCell}) => {
    const {email,role,displayName,_id} = allUser;
    const {user, token} = useContext(AuthContext);
    const [adminSuccess, setAdminSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openForDelete, setOpenForDelete] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();


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
        console.log('deleteee', id);
        fetch(`http://localhost:5000/users/${id}`,{
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
                setAllUsers(allUsers?.filter((item)=> item?._id !== id))
                enqueueSnackbar("Delete  Success", { variant: 'error' }); 

            }
        })

    }

    const makeAdmin = (id) => {
        console.log('make admin id', id);
        fetch(`http://localhost:5000/users/admin/${id}`, {
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
                setAdminSuccess(true);
                 //setAllUsers(allUsers?.filter((item)=> item?._id !== id))
                 enqueueSnackbar("Make admin Success", { variant: 'success' }); 

            }
        })
        handleClose();
    }

    return (
        
        <>
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {displayName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {email}
        </StyledTableCell>



         <StyledTableCell >{role !=='admin' && <Button onClick={handleClickOpen} variant="contained" size="small" style={{fontWeight: '400',
         background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
         borderRadius: '15px'}}>Make Admin</Button>}</StyledTableCell>

        
        
        <StyledTableCell ><Button onClick={handleClickOpenForDelete} variant="contained" size="small" style={{fontWeight: '400',
        background: 'linear-gradient(to right,  rgb(198,42,66), rgb(198,105,42))',
        borderRadius: '15px'}}><DeleteIcon/></Button></StyledTableCell>
        </StyledTableRow>

    {/*     {deleteSuccess && <Alert severity="success"  >{allUser.displayName} is deleted!!...</Alert>}

        {adminSuccess && <Alert severity="success"  >{allUser.displayName} is Admin now!!...</Alert>} */}
           
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Are you sure now admin  is <span style={{color:'orange'}}>{displayName}</span> ?
        </DialogTitle>
      
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>No</Button>
          <Button variant="contained"   onClick={()=>makeAdmin(_id)} autoFocus>
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
        Are you sure you want to delete ?
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

export default AllUserRow;