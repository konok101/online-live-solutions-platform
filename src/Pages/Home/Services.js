import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ambulance from '../../images/car2.jpg';
import note from '../../images/note4.jpg';
import injection from '../../images/injection5.jpg';

function Services() {
  return (
    <Container style={{ marginTop:'5%', paddingBottom:'4%' ,borderBottom:  "2px solid #472ca7"}}>
    <div  style={{ textAlign: "center", marginBottom:'2%',marginTop:'3%'}}>
    <h3 style={{color:'#2f08aa'}}><span  style={{backgroundColor:'#e5ca95'}}>Our S</span><span>ervices</span></h3>

    <h1 style={{color:'#6f55cb',fontWeight:'700',}}>Our Special Services For You</h1>

    <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu.<br></br> Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
    </div>
        




        <Grid container spacing={{ xs: 2, md: 3 }} 
        direction="row"
        justifyContent="center"
        alignItems="center"   
        textAlign= "center" m='2%' style={{paddingLeft:'5%', paddingRight:'5%'}}>
       
        <Grid item xs={12} sm={12} md={4}>
        
        <img style={{borderRadius:'100%'}}  src={injection}></img>
        <h4 style={{color:'#472ca7'}}>Online Emergency</h4>
        <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
       
        </Grid>
        
        <Grid item xs={12} sm={12} md={4}>
       
        <img style={{borderRadius:'90%'}} src={ambulance} ></img>
        <h4 style={{color:'#472ca7'}}>Medication Service</h4>
        <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
        
        </Grid>
        
        <Grid item xs={12} sm={12} md={4}>
        
        <img style={{borderRadius:'90%', }} src={note}></img>
        <h4 style={{color:'#472ca7'}}>24h Health Program</h4>
        <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.
        </p>
       
        </Grid>
        </Grid>
        
        
    </Container>
  )
}


export default Services;