import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import UpdateCourseRow from './UpdateCourseRow'


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


const UpdateCourse = () => {

    const [courseLists, setCourseLists] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/addCourse`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCourseLists(data));

    }, [courseLists]);

    console.log('courseListscourseLists', courseLists);

    return (
        <div>
             <div style={{margin:'auto', width:'80vw',   marginLeft:'70px', marginTop:'80px', paddingBottom:"70px"}}>
        <Paper >
                    <TableContainer sx={{ height: '80vh', }}  >
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>No</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Name</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Email</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Subject</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Price</StyledTableCell>
                                    <StyledTableCell align='right' style={{ fontWeight: '700', color: '#102a34', marginLeft:'100px' }}>Actions</StyledTableCell>
                                    <StyledTableCell  ></StyledTableCell>

                                </StyledTableRow>
                            </TableHead>

                            
                            <TableBody>
                                {
                                    courseLists.map((courseList, index) => <UpdateCourseRow
                                        key={courseList._id}
                                        courseList={courseList}
                                        courseLists={courseLists}
                                        index={index}
                                        StyledTableRow={StyledTableRow}
                                        StyledTableCell={StyledTableCell}
                                        setCourseLists={setCourseLists}

                                    ></UpdateCourseRow>)
                                }
                            </TableBody>
                            
                        </Table>
                    </TableContainer>
                </Paper>
        </div>
        </div>
    );
};

export default UpdateCourse;