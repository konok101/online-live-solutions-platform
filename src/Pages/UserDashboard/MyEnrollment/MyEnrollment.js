import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 import { Container } from '@mui/system';
 import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import StudentRegisteredRow from '../../TeacherDashboard/StudentRegisted/StudentRegisteredRow';
import Footer from '../../Shared/Footer';

import Navigation from '../../Shared/Navigation';

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




function MyEnrollment() {
    const { user  } = useContext(AuthContext);

     const [myCourses, setMycourses] = useState([]);
    
             const email = user?.email;
            useEffect(() => {
                const url = `http://localhost:5000/myCourse?email=${email}`;
                fetch(url)
                    .then((res) => res.json())
                    .then((data) => setMycourses(data));
        
            }, []);
    return (
        <>
            <Navigation />

             <Container style={{ margin: '4%' }}>
             <h1 style={{width:"250px", margin:"auto", marginBottom:"10px"}}>My Courses</h1>

                <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    <TableContainer sx={{ height: '80vh', width: '80vw' }}>
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Name</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Email</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>TrxID</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Mobile</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Class</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Subject</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Institution</StyledTableCell>
                                    

                                   
                                    <StyledTableCell></StyledTableCell>
                                    
                                    
                                </StyledTableRow>
                            </TableHead>

                            
                            <TableBody>
                                {
                                    myCourses?.map((regStudent, index) => <StudentRegisteredRow
                                        key={regStudent._id}
                                        regStudent={regStudent}
                                        index={index}
                                        StyledTableRow={StyledTableRow}
                                        StyledTableCell={StyledTableCell}

                                    ></StudentRegisteredRow>)
                                }
                            </TableBody>
                            
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>

            <Footer/>
        </>
    )
}

export default MyEnrollment