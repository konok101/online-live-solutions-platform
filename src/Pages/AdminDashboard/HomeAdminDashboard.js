import { Grid } from "@mui/material";
import React from "react";
import Calender from "../UserDashboard/Homedashboard/Calender";
import EmployeNumber from "../UserDashboard/Homedashboard/EmployeNumber";
import GrowthChart from "../UserDashboard/Homedashboard/GrowthChart";
const HomeAdminDashboard = () => {


    const dashboardHomeStyle = {
        marginLeft: '-90px',
        width: '100vw'
    }

    return (
        <div style={dashboardHomeStyle}>
            <EmployeNumber></EmployeNumber>

            <Grid container spacing={15} style={{ margin: '8%', textAlign: 'center' }}>


            <Grid style={{ height: '100%' }}>
                <GrowthChart></GrowthChart>
            </Grid>
            <Grid style={{ margin: '5%', height: '80%', alignItems:'center' }}>
                <Calender></Calender>
            </Grid>
        </Grid>



        </div>
    );
};
export default HomeAdminDashboard;