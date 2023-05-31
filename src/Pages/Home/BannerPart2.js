import { Button, Grid } from '@mui/material'
import React from 'react'

function BannerPart2() {
  return (
    <div style={{
      width: '100vw', height: '50vh',
      backgroundColor:'#94e4eb',
      color:'#16255d'
    }}>

      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center" spacing={{ xs: 2, md: 3 }} style={{ paddingTop: '2%' }}>
        <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}>
          <h2  >REQUEST A BROCHURE</h2>
          <p>Entry level, degree, format, language, campus...</p>
          <button variant="outlined" className='viewMoreButtonHover' type="submit" style={{
            marginTop: '2%', padding: '8px 35px', color: '#16255d',
            fontWeight: '600',
            fontSize: '18px',
            borderRadius: '4px'
          }}>VIEW MORE</button>

        </Grid>

        <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}>
          <h2>CHOOSE A PROGRAMME</h2>
          <p>Entry level, degree, format, language, campus...</p>
          <button variant="outlined" className='viewMoreButtonHover' type="submit" style={{
            marginTop: '2%', padding: '8px 35px', color: '#16255d',
            fontWeight: '600',
            fontSize: '18px',
            borderRadius: '4px'
          }}>VIEW MORE</button>
        </Grid>

        <Grid item xs={12} sm={12} md={4} style={{ textAlign: 'center' }}>
          <h2>SCHOLARSHIPS</h2>
          <p>Our commitment to excellence and diversity</p>
          <button variant="outlined" className='viewMoreButtonHover' type="submit" style={{
            marginTop: '2%', padding: '8px 35px', color: '#16255d',
            fontWeight: '600',
            fontSize: '18px',
            borderRadius: '4px'
          }}>VIEW MORE</button>
        </Grid>

      </Grid>
    </div>
  )
}

export default BannerPart2