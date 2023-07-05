import { Grid } from '@mui/material';
import React from 'react';

const ReviewRow = ({review}) => {
    return (
       
                <Grid   item xs={12} sm={6} md={3.7} style={{marginTop:'40px'}}  >
        <p>{review?.rating}</p>
            <img src={review?.teacherList?.imageURL}  width="300px" alt="" />

            </Grid>
    
    );
};

export default ReviewRow;