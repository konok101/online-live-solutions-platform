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
import { TextField } from '@mui/material';
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
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/users`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUsers(data));

    }, [allUsers]);


    
    const [nameSearch, setNameSearch] = useState('');
    const [emailSearch, setEmailSearch] = useState('');
   
   

    function filterData(data) {
        return data?.filter((item) => {
            if (nameSearch) {
                return nameSearch?.toLowerCase() === '' ? item :
                    item?.displayName?.toLowerCase().includes(nameSearch?.toLowerCase()) 
       
            }
   
            else if(emailSearch){
               return emailSearch?.toLowerCase() === '' ? item :
               item?.email?.toLowerCase().includes(emailSearch?.toLowerCase()) 
            }
           
         
            return item;
        })
      }
      let allFilterData = filterData(allUsers)


    return (
        <>
            
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
         {/*        <h1 style={{ fontWeight: '700', color: '#13698b' }}>Total Users: {allUser.length} </h1> */}
            </div>


            <Container style={{ marginTop: '10px', marginLeft:'50px', marginBottom:'50px'}}>
                <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden', width:"75vw",  m:"auto"}}>
                    <TableContainer sx={{ height: '80vh', }}>
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>
                                    <TextField
         value={nameSearch}
         onChange={(e)=>setNameSearch(e.target.value)}
          id="standard-search"
          label="Name Search"
          type="search"
          size='sm'
          sx={{maxWidth:'140px'}}
          variant="standard"
        />

                                    </StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>
                                    <TextField
         value={emailSearch}
         onChange={(e)=>setEmailSearch(e.target.value)}
          id="standard-search"
          label="Email Search "
          type="search"
          size='sm'
          sx={{maxWidth:'140px'}}
          variant="standard"
        />
                                    </StyledTableCell>
                                    <StyledTableCell align="center" style={{ fontWeight: '700', color: '#102a34' }}> Action</StyledTableCell>
                                    <StyledTableCell ></StyledTableCell>
                                </StyledTableRow>
                            </TableHead>

                            
                            <TableBody>
                                {
                                    allFilterData.map((allUser, index) => <AllUserRow
                                        key={allUser._id}
                                        allUser={allUser}
                                        allUsers={allUsers}
                                        setAllUsers={setAllUsers}
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


     
        </>
    );
};

export default AllUsers;