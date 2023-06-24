import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideOneBanner from './SlideOneBanner';
import SlideTwoBanner from './SlideTwoBanner';



const CarouselBanner = () => {
    return (
      <>
      
            <Carousel>
            
                <Carousel.Item> 
                  <SlideOneBanner/>
                </Carousel.Item>

                <Carousel.Item>
                <SlideTwoBanner/>
                </Carousel.Item>


                

            </Carousel>

           
        </>


    )
}

export default CarouselBanner;