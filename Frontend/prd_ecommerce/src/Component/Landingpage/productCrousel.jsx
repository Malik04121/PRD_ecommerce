import { Box, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
// import { Box, Image, Carousel, CarouselControl, CarouselIndicators, CarouselCaption } from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
// import "./ProductCarousel.css";
import "react-multi-carousel/lib/styles.css";
import { ItemDetails1 } from './productcrouseldata';


// const items = [
//     {
//       src: 'https://via.placeholder.com/600x400',
//       altText: 'Slide 1',
//       caption: 'Slide 1'
//     },
//     {
//       src: 'https://via.placeholder.com/600x400',
//       altText: 'Slide 2',
//       caption: 'Slide 2'
//     },
//     {
//       src: 'https://via.placeholder.com/600x400',
//       altText: 'Slide 3',
//       caption: 'Slide 3'
//     }
//   ];

function Craousel(){

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
        
return(
    <>
    
    <Carousel responsive={responsive}
     autoPlay={true}
     infinite={true}
     h="500px"
     bg="#353535"
     
     >
       {ItemDetails1.map((ele)=>(
    <Box bg="#353535"  >
      <Image src={ele.img}/>  
    </Box>
  ))}
  
</Carousel>
    
  


    
    </>
)


}
export {Craousel}