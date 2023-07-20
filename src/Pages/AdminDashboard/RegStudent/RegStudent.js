import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RegStudentRow from './RegStudentRow';
import { Container } from '@mui/system';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import AdminDashboard from '../AdminDashboard';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#5bbce3',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




const RegStudent = () => {
    const [regStudents, setRegStudent] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/courseSubmit`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setRegStudent(data));

    }, []);
    const dashboardHomeStyle = {
        marginLeft: '-90px',
        marginRight:'100px',
       // width: '100vw'
    }

    return (
        <div style={{dashboardHomeStyle}}>
        <div style={{margin:'auto', width:'80vw', minHeight:'400px', marginLeft:'100px', marginTop:'80px'}}>
        <Paper >
                    <TableContainer   >
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>No</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Name</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Teacher</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Email</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>TrxID</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Mobile</StyledTableCell>
                                     <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Subject</StyledTableCell>
                                     <StyledTableCell align='center' style={{ fontWeight: '700', color: '#102a34' }}>Actions</StyledTableCell>
                                    
                                     <StyledTableCell ></StyledTableCell>
                                    

                                     
                                    
                                </StyledTableRow>
                            </TableHead>

                            
                            <TableBody>
                                {
                                    regStudents.map((regStudent, index) => <RegStudentRow
                                        key={regStudent._id}
                                        regStudent={regStudent}
                                        regStudents={regStudents}
                                        index={index}
                                        StyledTableRow={StyledTableRow}
                                        StyledTableCell={StyledTableCell}
                                        setRegStudent={setRegStudent}

                                    ></RegStudentRow>)
                                }
                            </TableBody>
                            
                        </Table>
                    </TableContainer>
                </Paper>
        </div>
        </div>
    );
};

export default RegStudent;