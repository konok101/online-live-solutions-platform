import React from 'react';
import bgImg from '../../images/HeaderImgOne.webp';
import BannerPart2 from './BannerPart2';
// import { Container, } from '@mui/material';
// import { Translate } from '@mui/icons-material';

function Banner() {
    const backgroundStyle = {
        position: 'relative',
        // backgroundColor:'blue',
        backgroundImage: `url(${bgImg})`,

        // backgroundImage: `url(${bgImg}) no repeat center`,
        backgroundSize: 'cover',
        height: '100vh',
        // overflow: 'hidden'
    }

    const fontStyle = {
        position: 'absolute',
        top: '20%',
        left: '10%',
        // transform: 'translate(-50%, -50%)',
        // textAlign:'center',
        color: 'white',
        fontWeight: '700',


    }
    return (
        <>
            <div style={backgroundStyle}>
                <div style={fontStyle}>
                    <h2 style={{ fontSize: '30px' }}>STUDY OVERSEAS GLOBAL</h2>
                    <h1 style={{ fontSize: '60px' }}>EDUCATION FAIR</h1>


                    <button variant="contained" type="submit" style={{
                        marginTop: '2%', padding: '15px 55px', color: 'white',
                        fontWeight: '600',
                        fontSize: '20px',
                        background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
                        borderRadius: '4px'
                    }}>LEARN MORE</button>

                </div>
            </div>
            <BannerPart2 />
        </>
    )
}

export default Banner