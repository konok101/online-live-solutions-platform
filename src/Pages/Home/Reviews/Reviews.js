import React, { useContext } from 'react'
import Navigation from '../../Shared/Navigation';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

function Reviews() {
  const {user, token} = useContext(AuthContext);
  const {courseSerial}=useParams();
const [serialData, setSerialData]=useState([]);

useEffect(() => {
  const url = `http://localhost:5000/addCourse`;
  fetch(url)
      .then((res) => res.json())
      .then((data) => setSerialData(data));

}, []);

let teacherList = serialData?.filter((user)=>{
  if(user?.serial ==courseSerial) {
      return user;
  }
}) 


console.log('serial data is', teacherList)



 
 

  return (
    <>
    
    <Navigation/>
    <h1 style={{ marginTop: '5%', textAlign: 'center' }}>my Reviews {courseSerial} a</h1>
    
    </>
  )
}

export default Reviews