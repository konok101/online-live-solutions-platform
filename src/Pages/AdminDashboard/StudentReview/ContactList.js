import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentReviewRow from './ContactListRow';
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




const StudentReview = () => {
  const [allReview, setAllReview] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/contact`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllReview(data));

  }, []);


  return (
    <>
      <Navigation />
      <div style={{ textAlign: 'center', marginTop: '70px' }}>
{/*         <h1 style={{ fontWeight: '700', color: '#13698b' }}>Total Quearies: {allReview.length} </h1>
 */}      </div>


      <Container >
        <Paper >
          <TableContainer sx={{ width: '80vw', margin:'0' }}>
            <Table  
              position="static">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell  style={{ fontWeight: '700', color: '#102a34' }}>No</StyledTableCell>
                  <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}> Name</StyledTableCell>
                  <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Email</StyledTableCell>
                  <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}> Quearies</StyledTableCell>
                  <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}> action</StyledTableCell>
                 
                </StyledTableRow>
              </TableHead>


              <TableBody>
                {
                  allReview.map((allReview, index) => <StudentReviewRow
                    key={allReview._id}
                    allReview={allReview}
                    index={index}
                    StyledTableRow={StyledTableRow}
                    StyledTableCell={StyledTableCell}

                  ></StudentReviewRow>)
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

export default StudentReview;