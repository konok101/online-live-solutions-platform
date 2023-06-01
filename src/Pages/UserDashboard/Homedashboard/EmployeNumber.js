import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
function EmployeNumber() {
    // const appBarStyle={
    //     // background: linear-gradient(to top left, #66ffff 0%, #ff99cc 100%),
    //     background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
    //     // background: 'red',
    //     padding:'15%'
    // }
    return (
        <>
            <Container >
            <h1 style={{color:'#08558b', marginTop:'5%', textAlign:'center'}}>Educational Live S<span style={{color:'#c7c91e'}}>olutions platform</span> </h1>
                <Grid container  justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}  spacing={{ xs: 4, md: 3}} 
                // style={{md:{marginTop:'5%', textAlign:'right'}, }}
                style={{marginTop:'2%', textAlign:'right'}}
                // sx={{xs:{mx:5}, sm:{mx:5}, md:{mx:5}}}
                // style={{xs:{px:2}}}
                
                >
                
                    <Grid item  xs={3} sm={3} md={3}  >
                        <Paper elevation={0}style={{background: 'linear-gradient(to right, rgba(116,34,200, 0.5), rgba(232,92,222, 0.5))',padding:'15%',color:'#08558b'}}> 
                        <h1>1,256</h1>
                        <h1>Students</h1>
                        </Paper>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3}>
                        <Paper elevation={3} style={{background: 'linear-gradient(to right,  rgba(201,40,23,0.5), rgba(236,63,133,0.5))',padding:'15%',color:'#08558b'}}>  
                        <h1>338</h1>
                        <h1>Teachers </h1>
                        </Paper>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3}>
                        <Paper elevation={3} style={{background: 'linear-gradient(to right, rgba(10,85,27, 0.5), rgba(16,174,157, 0.5))',padding:'15%',color:'#08558b'}}> 
                        <h1>778</h1>
                        <h1>Staffs</h1>
                        </Paper>
                    </Grid>

                    <Grid item xs={3} sm={3} md={3}>
                        <Paper elevation={3} style={{background: 'linear-gradient(to right, rgba(6,12,133, 0.5), rgba(19,124,219, 0.5))',padding:'15%',color:'#08558b'}}> 
                        <h1>34,700</h1>
                        <h1>Reviews</h1>
                        </Paper>
                    </Grid>


                </Grid>
            </Container>
        </>
    )
}

export default EmployeNumber