import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideOneStudentReview from './SlideOneStudentReview';
import SlideTwoStudentReview from './SlideTwoStudentReview';
import Navigation from '../../Shared/Navigation';
import Footer from '../../Shared/Footer';
import Contact from '../../Contact/FormContactUs';
import FormContactUs from '../../Contact/FormContactUs';
const CarouselStudentReview = () => {

    
    return (
      <>
      <Navigation />
      <FormContactUs />
            <Carousel>
            
                <Carousel.Item> 
                  <SlideOneStudentReview/>
                </Carousel.Item>

                <Carousel.Item>
                <SlideTwoStudentReview/>
                </Carousel.Item>

            </Carousel>

            <Footer/>
        </>


    )
}

export default CarouselStudentReview;