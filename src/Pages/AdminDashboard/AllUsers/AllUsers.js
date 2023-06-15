import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AllUserRow from './AllUsersRow';
import { Container } from '@mui/system';
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




const AllUsers = () => {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        const url = `https://educational-live-solutions-sever.vercel.app/users`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUser(data));

    }, []);


    return (
        <>
            <Navigation />
            <div style={{ textAlign: 'center', marginTop: '2%' }}>
                <h1 style={{ fontWeight: '700', color: '#13698b' }}>Total Users: {allUser.length} </h1>
            </div>


            <Container style={{ margin: '4%' }}>
                <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    <TableContainer sx={{ height: '80vh', width: '80vw' }}>
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>User Name</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>User Email</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                    <StyledTableCell ></StyledTableCell>
                                </StyledTableRow>
                            </TableHead>

                            
                            <TableBody>
                                {
                                    allUser.map((allUser, index) => <AllUserRow
                                        key={allUser._id}
                                        allUser={allUser}
                                        index={index}
                                        StyledTableRow={StyledTableRow}
                                        StyledTableCell={StyledTableCell}

                                    ></AllUserRow>)
                                }
                            </TableBody>
                            
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>


            <Footer />
        </>
    );
};

export default AllUsers;