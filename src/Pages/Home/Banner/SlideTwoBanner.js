import React from 'react';
// import bgImg from '../../images/HeaderImgOne.webp';
import bgImg from '../../../images/b3.jpg';
import BannerPart2 from '../BannerPart2';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import 'aos/dist/aos.css'; 

function SlideTwoBanner() {
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
        // color: 'rgb(34,37,71)',
        fontWeight: '700',


    }
    return (
        <>
            <div style={backgroundStyle}>
                <div style={fontStyle} >
                    <h2 style={{ fontSize: '30px' }}>Educational Live </h2>
                    <h1 style={{ fontSize: '38px' }}>Solutions Platform</h1>
                    <span style={{ color: 'white', fontWeight: 500,fontStyle: 'italic',  fontSize: 28 }}>
                    <Typewriter
                    words={['Welcome here_!!', 'Be DIFFERENT_!! ',
                    'Do the Best ALWAYS_ !']}
                    loop={15}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}  
                  />
                </span><br></br>
                    <Link style={{ textDecoration: 'none' }} to="/learnMore" target="_blank" >
                        <button className='viewMoreButtonHoverBanner' variant="contained" type="submit" style={{
                            marginTop: '2%', padding: '15px 55px', color: 'white',
                            fontWeight: '600',
                            fontSize: '20px',
                            background: "#2db6a3",
                            borderRadius: '25px'
                        }}>LEARN MORE</button>
                    </Link>

                </div>
            </div>

        </>
    )
}

export default SlideTwoBanner;