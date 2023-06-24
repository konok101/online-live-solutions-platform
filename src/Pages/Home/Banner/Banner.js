import React from 'react';
// import bgImg from '../../images/HeaderImgOne.webp';
import bgImg from '../../../images/b8.jpg';
import BannerPart2 from '../BannerPart2';
import { Link } from 'react-router-dom';

function Banner() {
    const backgroundStyle = {
        position: 'relative',
        // backgroundColor:'blue',
        backgroundImage: `url(${bgImg})`,

        // backgroundImage: `url(${bgImg}) no repeat center`,
        backgroundSize: 'cover',
        // center,
        // height: '85vh',
        height: '95vh',
        // overflow: 'hidden'
    }

    const fontStyle = {
        // position: 'absolute',
        paddingTop: '15%',
        alignItems:'center' ,
        // left: '20%',
        margin: 'auto',
        // transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        // color: '',
        fontWeight: '700',


    }
    return (
        <>
            <div style={backgroundStyle}>
                <div style={fontStyle}>
                    <h2 style={{ fontSize: '30px' }}>STUDY OVERSEAS GLOBAL</h2>
                    <h1 style={{ fontSize: '60px' }}>EDUCATION FAIR</h1>

                    <Link style={{ textDecoration: 'none' }} to="/learnMore" target="_blank" >
                        <button className='viewMoreButtonHoverBanner' variant="contained" type="submit" style={{
                            marginTop: '2%', padding: '15px 55px', color: 'white',
                            fontWeight: '600',
                            fontSize: '20px',
                            background: "#2db6a3",
                            borderRadius: '4px'
                        }}>LEARN MORE</button>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default Banner