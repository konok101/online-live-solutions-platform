import React from 'react'
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import bgImg from '../../../images/b1.jpg';

function LearnMore() {

  const backgroundStyle = {
    // position: 'relative',
    // backgroundColor:'blue',
    backgroundImage: `url(${bgImg})`,

    // backgroundImage: `url(${bgImg}) no repeat center`,
    backgroundSize: 'cover',
    // center,
    // height: '85vh',
    height: '100%',
    width:'100%',
    // overflow: 'hidden'
}

  return (
    <>
    <Navigation/>

    <div style={backgroundStyle}>

    <h1 style={{ paddingTop: '15%',paddingBottom: '25%', textAlign: 'center' }}>Learn More About Our Site.</h1>
    
    


    </div>
    


    <Footer/>
    </>
  );
};

export default LearnMore;