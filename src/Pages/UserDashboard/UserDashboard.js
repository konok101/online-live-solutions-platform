import React from 'react';
import MyEnrollment from './MyEnrollment/MyEnrollment';

const UserDashboard = () => {
  const homeStyle={
     width:'99vw',
    overflowX: 'hidden',
    overflowY: 'hidden',
  }
  return (
    <div style={homeStyle}>
      <MyEnrollment/>
    </div>
  );
};

export default UserDashboard;