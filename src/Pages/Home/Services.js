import { Card, Grid} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ambulance from '../../images/service-1.png';
import note from '../../images/service-2.png';
import injection from '../../images/service-3.png';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <Container style={{ marginTop:'5%', paddingBottom:'4%' ,borderBottom:  "2px solid #472ca7"}}>
    <div  style={{ textAlign: "center", marginBottom:'2%',marginTop:'3%'}}>
    <h3 style={{color:'rgb(34,37,71)'}}><span  style={{backgroundColor:'#e5ca95'}}>Our S</span><span>ervices</span></h3>

    <h1 style={{color:'rgb(34,37,71)',fontWeight:'700',}}>Our Special Services For You</h1>

    <p>Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu.<br></br> Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
    </div>
        

        <Grid container spacing={{ xs: 2, md: 5 }} 
        direction="row"
        justifyContent="center"
        alignItems="center"   
        textAlign= "center" m='2%' style={{paddingLeft:'1%', paddingRight:'1%'}}>
       
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{background: 'linear-gradient(to right,  rgb(34,37,71), rgb(34,37,71))',color: '#dfe3e2', padding:'5%', boxShadow:' 19px 10px 10px black', }}>
        <img  width="120px" style={{paddingTop:'6%'}}  src={injection}></img>
        <h4 >Live Solutions</h4>
        <p style={{paddingLeft:'2%', paddingRight:'2%'}}>Online live solutions enable education to be accessible from anywhere, Learners can participate in classes from the comfort of their own homes or any location with an internet connection. </p>
        <Link style={{ textDecoration: 'none' }} to="/liveSolution" target="_blank"  >
        <button variant="outlined" className='readMoreButtonHoverBanner' type="submit" style={{
         
          padding: '8px 35px',  
         fontWeight: '600',
         fontSize: '18px',
         borderRadius: '4px',marginBottom:'3%', paddingBottom:'3%'
          }}>READ MORE</button></Link>
        </Card>
        
        
        </Grid>
        
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{background: 'linear-gradient(to right,  rgb(34,37,71), rgb(34,37,71))',color: '#dfe3e2', boxShadow:' 19px 10px 10px black'}}>
        <img  width="100px" style={{paddingTop:'7%'}} src={ambulance} ></img>
        <h4 >Problem Solving</h4>
        <p style={{paddingLeft:'2%', paddingRight:'2%'}}>problem-solving skills features like video conferencing, chat, and screen sharing, learners can work together on problem-solving activities, discuss ideas, and share their thought processes. </p>
        <Link style={{ textDecoration: 'none' }} 
        to="/problemSolving" target="_blank">
        <button variant="outlined" className='readMoreButtonHoverBanner' type="submit" style={{
          padding: '8px 35px',  
          fontWeight: '600',
          fontSize: '18px',
          borderRadius: '4px',marginBottom:'8%'
           }}>READ MORE</button></Link>
        </Card>
        </Grid>
        
        
        <Grid item xs={12} sm={12} md={4}>
        <Card style={{background: 'linear-gradient(to right,  rgb(34,37,71), rgb(34,37,71))',color: '#dfe3e2', boxShadow:' 19px 10px 10px black'}}>
        <img  width="135px" height='160px' style={{paddingTop:'3%'}} src={note}></img>
        <h4 > 24h supports</h4>
        <p style={{paddingLeft:'2%', paddingRight:'2%'}}>24-hour support means learners can have their issues resolved quickly, ensuring that they can continue with their coursework or participate in live sessions without significant delays or interruptions.  
        </p>

        <Link style={{ textDecoration: 'none' }} to="/24hSupport" target="_blank">
        <button variant="outlined" className='readMoreButtonHoverBanner' type="submit" style={{
           padding: '8px 35px',  
          fontWeight: '600',
          fontSize: '18px',
          borderRadius: '4px',marginBottom:'8%'
           }}>READ MORE</button></Link>
        </Card>
        </Grid>
        
        </Grid>
        
        
    </Container>
  )
}


export default Services;