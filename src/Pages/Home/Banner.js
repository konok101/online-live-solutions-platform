import React from 'react';
import bgImg from '../../images/HeaderImgOne.webp';
// import { Container, } from '@mui/material';
// import { Translate } from '@mui/icons-material';

function Banner() {
    const backgroundStyle = {
        position: 'relative',
        backgroundImage: `url(${bgImg}) no repeat center`,
        backgroundSize: 'cover',
        height: '100vh',
        // overflow: 'hidden'
    }

    const fontStyle={
        position:'absolute',
        top: '40%',
        left: '10%',
        // transform: 'translate(-50%, -50%)',
        // textAlign:'center',
        // color:'white',
        fontWeight:'700',
       

    }
    return (
        <>
            <div style={backgroundStyle}>
                <div style={fontStyle}>
                    <h2 style={{fontSize:'30px'}}>STUDY OVERSEAS GLOBAL</h2>
                    <h1  style={{fontSize:'60px'}}>EDUCATION FAIR</h1>
                    <button>Learn More</button>

                    
                    
                </div>
            </div>

        </>
    )
}

export default Banner