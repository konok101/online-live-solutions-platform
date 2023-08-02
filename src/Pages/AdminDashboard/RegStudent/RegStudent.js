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
import { Box, FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
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

    }, [regStudents]);
    const dashboardHomeStyle = {
        marginLeft: '-90px',
        marginRight:'100px',
       // width: '100vw'
    }

    const [nameSearch, setNameSearch] = useState('');
    const [teacherNameSearch, setTeacherNameSearch] = useState('');
    const [emailSearch, setEmailSearch] = useState('');
    const [trXidSearch, setTrXidSearch] = useState('');
    const [phnSearch, setPhnSearch] = useState('');

    const handleSearchName = (e) => {
        setNameSearch(e.target.value);
    }
    const handleTeacherSearchName = (e) => {
        setTeacherNameSearch(e.target.value);
    }

    function filterData(data) {
     return data?.filter((item) => {
         if (nameSearch) {
             return nameSearch?.toLowerCase() === '' ? item :
                 item?.name?.toLowerCase().includes(nameSearch?.toLowerCase()) 
    
         }

         else if(teacherNameSearch){
            return teacherNameSearch?.toLowerCase() === '' ? item :
            item?.courseTeacher?.toLowerCase().includes(teacherNameSearch?.toLowerCase()) 
         }
         else if(emailSearch){
            return emailSearch?.toLowerCase() === '' ? item :
            item?.email?.toLowerCase().includes(emailSearch?.toLowerCase()) 

         }
         else if(trXidSearch){
            return trXidSearch?.toLowerCase() === '' ? item :
            item?.TrxID?.toLowerCase().includes(trXidSearch?.toLowerCase()) 

         }
         else if(phnSearch){
            return phnSearch?.toLowerCase() === '' ? item :
            item?.phnNumber?.toLowerCase().includes(phnSearch?.toLowerCase()) 

         }
      
         return item;
     })
   }
   let allFilterData = filterData(regStudents)
   
   
   
    return (
        <div style={{dashboardHomeStyle}}>
        <div style={{margin:'auto', width:'80vw',   marginLeft:'70px', marginTop:'60px', paddingBottom:"70px"}}>
        <Box style={{width:'50%', margin:'auto', marginBottom:'10px'}}>
                  

 

                    </Box>
        <Paper >
                    <TableContainer sx={{ height: '80vh', }}  >
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>No</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>
                                    <TextField
         value={nameSearch}
         onChange={handleSearchName}
          id="standard-search"
          label="Name Search  "
          type="search"
          size='sm'
          sx={{maxWidth:'140px'}}
          variant="standard"
        />
                                    </StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>

                                    <TextField
         value={teacherNameSearch}
         onChange={handleTeacherSearchName}
          id="standard-search"
          label="Teacher Search "
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
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>

                                    <TextField
         value={trXidSearch}
         onChange={(e)=>setTrXidSearch(e.target.value)}
          id="standard-search"
          label="TrxID Search "
          type="search"
          size='sm'
          sx={{maxWidth:'140px'}}
          variant="standard"
        />
                                    </StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>
                               

        <TextField
         value={phnSearch}
         onChange={(e)=>setPhnSearch(e.target.value)}
          id="standard-search"
          label="Number search"
          type="search"
          variant="standard"
        />
                                    </StyledTableCell>
                                     <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Subject</StyledTableCell>
                                     <StyledTableCell align='center' style={{ fontWeight: '700', color: '#102a34' }}>Actions</StyledTableCell>
                                   
                                </StyledTableRow>
                            </TableHead>

                            
                            <TableBody>
                                {
                                    allFilterData?.map((regStudent, index) => <RegStudentRow
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