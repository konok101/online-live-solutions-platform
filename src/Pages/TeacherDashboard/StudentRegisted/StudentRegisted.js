import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentRegisteredRow from './StudentRegisteredRow';
import { Container } from '@mui/system';
import Footer from '../../Shared/Footer';
import Navigation from '../../Shared/Navigation';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
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




const StudentRegisted = () => {
    const { user  } = useContext(AuthContext);
    const email = user?.email;
    const [regStudent, setRegStudent] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/courseSubmit`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setRegStudent(data));

    }, []);


    let teacherLists = regStudent?.filter((user)=>{
        if(user?.teacherEmail === email){
            return user;
        }
    }) 
   
    const homeStyle={
        width:'99vw',
       overflowX: 'hidden',
       overflowY: 'hidden',
       marginTop:'70px',
       marginLeft:'-100px',
     
     }

    return (
        <div style={homeStyle}>
         
    

          
              <div style={{width:'75%', margin:'auto' , marginBottom:'100px', maxHeight:'800px',  overflowX: 'hidden',
       overflowY: 'hidden', }}>
                 
              <TableContainer sx={{ height: ' ', ml:5 }}>
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    
                                </StyledTableRow>
                            </TableHead>

                            
                          {
                            teacherLists?.length >0 ?   <TableBody>
                            {
                                teacherLists.map((regStudent, index) => <StudentRegisteredRow
                                    key={regStudent._id}
                                    regStudent={regStudent}
                                    index={index}
                                    StyledTableRow={StyledTableRow}
                                    StyledTableCell={StyledTableCell}

                                ></StudentRegisteredRow>)
                            }
                        </TableBody> : <div style={{width:"500px", margin:"auto", fontSize:"50px"}}>" No Student"</div>
                          }
                            
                        </Table>
                    </TableContainer>
               
              </div>
        

            <Footer></Footer>

 
         </div>
    );
};

export default StudentRegisted;