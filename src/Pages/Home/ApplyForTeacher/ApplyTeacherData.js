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
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
 
import ApplyTeacherDataRow from '../../Home/ApplyForTeacher/ApplyTeacherDataRow';


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
    const [applyTeachers, setApplyTeachers] = useState([]);
    useEffect(() => {
        const url = `https://educational-live-solutions-sever.vercel.app/applyTeacherList`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setApplyTeachers(data));

    }, []);
     const dashboardHomeStyle = {
        marginLeft: '-90px',
        marginRight:'100px',
        width: '100vw'
    }

    return (
        <div style={{dashboardHomeStyle}}>
        <div style={{margin:'auto', width:'100%', minHeight:'400px', marginLeft:'250px', marginTop:'80px'}}>
        <Paper >
                    <TableContainer   >
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>No</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Name</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Email</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>teaching Area</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Qualifications</StyledTableCell>
 
                                     <StyledTableCell align='center' style={{ fontWeight: '700', color: '#102a34' }}>Actions</StyledTableCell>
                                    

                                     
                                    
                                </StyledTableRow>
                            </TableHead>

                            
                            <TableBody>
                                {
                                    applyTeachers.map((applyTeacher, index) => <ApplyTeacherDataRow
                                        key={applyTeacher._id}
                                        applyTeacher={applyTeacher}
                                        applyTeachers={applyTeachers}
                                        index={index}
                                        StyledTableRow={StyledTableRow}
                                        StyledTableCell={StyledTableCell}
                                        setApplyTeachers={setApplyTeachers}

                                    ></ApplyTeacherDataRow>)
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