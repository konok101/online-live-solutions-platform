import { Button, Grid } from '@mui/material'
import React from 'react'
import Link  from '@mui/material/Link';

function BannerPart2() {
  return (
    <div style={{
      width: '100vw', 
      paddingBottom:'4%',
      backgroundColor:'#2db6a3',
      color:'#16255d',
      paddingTop:'3%'
    }}>

      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center" spacing={{ xs: 2, md: 3 }} style={{ paddingTop: '2%' }}>
        <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center', color:'#fff',borderRight:  "2px solid #e7dcd9", }}>
          <h2  >REQUEST A BROCHURE</h2>
          <p>Entry level, degree, format, language, campus...</p>

          <Link style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/konok-majamder/'>

          <button variant="outlined" className='viewMoreButtonHoverBanner' type="submit" style={{
            marginTop: '2%', padding: '8px 35px',  
            fontWeight: '600',
            fontSize: '18px',
            borderRadius: '4px',
             }}>VIEW MORE</button>

             </Link>

        </Grid>

        <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' , color:'#fff',borderRight:  "2px solid #e7dcd9"}}>
          <h2>CHOOSE A PROGRAMME</h2>
          <p>Entry level, degree, format, language, campus...</p>
          <Link style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/konok-majamder/'>
          <button variant="outlined" className='viewMoreButtonHoverBanner' type="submit" style={{
            marginTop: '2%', padding: '8px 35px',  
            fontWeight: '600',
            fontSize: '18px',
            borderRadius: '4px'
          }}>VIEW MORE</button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center', color:'#fff' }}>
          <h2>SCHOLARSHIPS</h2>
          <p>Our commitment to excellence and diversity</p>
          <Link style={{ textDecoration: 'none' }} href='https://www.linkedin.com/in/konok-majamder/'>
          <button variant="outlined" className='viewMoreButtonHoverBanner' type="submit" style={{
            marginTop: '2%', padding: '8px 35px',  
            fontWeight: '600',
            fontSize: '18px',
            borderRadius: '4px'
          }}>VIEW MORE</button>
          </Link>
        </Grid>

      </Grid>
    </div>
  )
}

export default BannerPart2