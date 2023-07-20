import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PeopleIcon from '@mui/icons-material/People';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import img from '../../../images/sir.png'
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
const TotalUserCount = () => {

  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
      const url = `http://localhost:5000/users`;
      fetch(url)
          .then((res) => res.json())
          .then((data) => setAllUser(data));

  }, []);

 
    let teacherList = allUser?.filter((user)=>{
        if(user?.role =="teacher"){
            return user;
        }
    }) 
   
   const homeStyle = {
    background: 'linear-gradient(to right,rgb(2,4,34), rgb(153,153,160))',
    width: "100vW", textAlign:'center', 
    padding:'5%'
  }
  return (
    
      // <Box sx={{ flexGrow: 1, p: 5 }} style={homeStyle}>
      <Grid container direction="row"
      justifyContent="space-around"
      alignItems="center" style={homeStyle} >
       {/* <Grid container spacing={0} > */}
          <Grid item xs={12} sm={6} md={3} sx={{ color: '#FDFDFF', }} >
            <h6 style={{ width: "70px", margin: "auto" }}>
              <Diversity3Icon sx={{ fontSize: 90, ml: -2, borderRadius: '50%' }} />
            </h6>
            <h3 style={{ width: "100%", margin: "auto" }}> {allUser.length}+</h3>

            <h3 style={{ width: "100%", margin: "auto",paddingBottom:'8%',borderBottom:  "2px solid #e7dcd9" }}> Students</h3>


          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ color: '#FDFDFF' }} >
            <h6 style={{ width: "70px", margin: "auto" }}>
              <PeopleIcon sx={{ fontSize: 90, ml: -2, borderRadius: '50%' }} />

             
              
            </h6>
            <h3 style={{ width: "100%", margin: "auto" }}> {teacherList?.length}+</h3>
           
            <h3 style={{ width: "100%", margin: "auto" ,paddingBottom:'8%',borderBottom:  "2px solid #e7dcd9"}}> Teachers</h3>


          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ color: '#FDFDFF', textAlign: 'center', }} >
            <h6 style={{ width: "70px", margin: "auto" }}>
              <AddTaskIcon sx={{ fontSize: 90, ml: -2, borderRadius: '50%' }} />
            </h6>
            <h3 style={{ width: "100%", margin: "auto" }}> 98%</h3>

            <h3 style={{ width: "100%", margin: "auto" ,paddingBottom:'8%',borderBottom:  "2px solid #e7dcd9"}}>Succesfully complete</h3>


          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ color: '#FDFDFF' }} >
            <h6 style={{ width: "70px", margin: "auto" }}>
              <SettingsRemoteIcon sx={{ fontSize: 90, ml: -2, borderRadius: '50%' }} />
            </h6>
            <h3 style={{ width: "100%", margin: "auto" }}> 100+</h3>

            <h3 style={{ width: "100%", margin: "auto" ,paddingBottom:'8%',borderBottom:  "2px solid #e7dcd9"}}> Total services</h3>


          </Grid>

        {/*</Grid>*/}
      </Grid>
    
  );
};

export default TotalUserCount;