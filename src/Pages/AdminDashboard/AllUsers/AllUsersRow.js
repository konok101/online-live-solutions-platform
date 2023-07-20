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


const AllUserRow = ({allUser,setAllUsers, allUsers, index,StyledTableRow,StyledTableCell}) => {
    const {email,role,displayName} = allUser;
    const {user, token} = useContext(AuthContext);
    const [adminSuccess, setAdminSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleDelete = () => {
        fetch(`http://localhost:5000/users/${email}`,{
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
                setAllUsers(allUsers?.filter((item)=> item?.email !== email))

            }
        })

    }

    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
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
          {displayName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {email}
        </StyledTableCell>



         <StyledTableCell >{role !=='admin' && <Button onClick={makeAdmin} variant="contained" size="small" style={{fontWeight: '400',
         background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
         borderRadius: '15px'}}>Make Admin</Button>}</StyledTableCell>

        
        
        <StyledTableCell ><Button onClick={handleDelete} variant="contained" size="small" style={{fontWeight: '400',
        background: 'linear-gradient(to right,  rgb(198,42,66), rgb(198,105,42))',
        borderRadius: '15px'}}><DeleteIcon/></Button></StyledTableCell>
        </StyledTableRow>

        {deleteSuccess && <Alert severity="success"  >{allUser.displayName} is deleted!!...</Alert>}

        {adminSuccess && <Alert severity="success"  >{allUser.displayName} is Admin now!!...</Alert>}
           
       
        
         </>
     
       
    );
};

export default AllUserRow;