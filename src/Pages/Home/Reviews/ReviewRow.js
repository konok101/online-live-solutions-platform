import React from 'react';

const ReviewRow = ({review}) => {
    return (
        <div>
        <p>{review?.rating}</p>
            <img src={review?.teacherList?.imageURL} alt="" />
        </div>
    );
};

export default ReviewRow;