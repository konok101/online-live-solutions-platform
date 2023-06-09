import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentReviewRow from './StudentReviewRow';
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
    const url = `http://localhost:5000/review`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllReview(data));

  }, []);


  return (
    <>
      <Navigation />
      <div style={{ textAlign: 'center', marginTop: '2%' }}>
        <h1 style={{ fontWeight: '700', color: '#13698b' }}>Total Review: {allReview.length} </h1>
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
                  <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Review</StyledTableCell>
                 
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