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
import MyEnrollmentRow from '../../UserDashboard/MyEnrollment/MyEnrollMentRow';
import Footer from '../../Shared/Footer';
import CircularProgress from '@mui/material/CircularProgress';
import Navigation from '../../Shared/Navigation';
import { Box, Grid } from '@mui/material';

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
    const { user , loading } = useContext(AuthContext);

     const [myCourses, setMycourses] = useState([]);
    console.log('myCourses', myCourses);
             const email = user?.email;
            useEffect(() => {
                const url = `https://educational-live-solutions-sever.vercel.app/myCourse?email=${email}`;
                fetch(url)
                    .then((res) => res.json())
                    .then((data) => setMycourses(data));
        
            }, []);

            if(myCourses || loading){
                <CircularProgress />
            }
    return (
        <>
            <Navigation />

             <Container style={{width:"90%", margin: 'auto', marginTop:"70px" }}>
         
                <Paper style={{  height:"700px"}} sx={{ overflowX: 'hidden',   }}>
                {
                    myCourses?.length > 0 &&
                    
                    
                   <div style={{marginLeft:"100px"}}>
                     <Grid container direction="row"
                    justifyContent="space-around"
                    alignItems="center"   >
                   
                      
                        <Grid >
                           
                            {
                                myCourses?.map((regStudent, index) => <MyEnrollmentRow
                                    key={regStudent._id}
                                    regStudent={regStudent}
                                    index={index}
                                    StyledTableRow={StyledTableRow}
                                    StyledTableCell={StyledTableCell}

                                ></MyEnrollmentRow>)
                            }
                        </Grid>
                        
                   
                </Grid>
                   </div> 

                }

                {
                     !myCourses?.length >0  &&                 <div style={{width:"550px", margin:"auto", padding:"40px", fontSize:"50px"}}>No enroll course</div>
                }
                </Paper>
            </Container>

            <Footer/>
        </>
    )
}

export default MyEnrollment