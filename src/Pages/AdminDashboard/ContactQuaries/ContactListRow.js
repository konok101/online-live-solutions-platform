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

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import StudentReview from './ContactList';


const StudentReviewRow = ({ allReview, index, StyledTableRow, StyledTableCell }) => {
    const { email,name, querie } = allReview;
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
                    {querie}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                </StyledTableCell>
             
            </StyledTableRow>

            


        </>


    );
};

export default StudentReviewRow;