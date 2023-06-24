import React, { useContext } from 'react'
import Navigation from '../../Shared/Navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

function OurTeachers() {
    const [allUser, setAllUser] = useState([]);
    const { user } = useContext(AuthContext);
    

    const role = user?.role === 'teacher';
    console.log('role', role);
    useEffect(() => {
        const url = `http://localhost:5000/users?role=${role}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllUser(data)); 
    },[]);

    let teacherList = allUser?.filter((user)=>{
        if(user?.role =="teacher"){
            return user;
        }
    }) 
    console.log("teacherList",teacherList)


   
    
    




    return (
        <>

            <Navigation />
            <h1 style={{ marginTop: '5%', textAlign: 'center' }}>Our Teachers</h1>

            



        </>
    )
}

export default OurTeachers