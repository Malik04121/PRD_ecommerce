import { Box, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { Categorydetails } from './productcrouseldata';
import "./ProductCarousel.css";


function CategoryCarousel(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
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
    <Box className="categorycrausel">
       <Carousel responsive={responsive}
    //  autoPlay={true}
     infinite={true}

     >
       {Categorydetails.map((ele)=>(
    <Box mt="50px"  mr="0px" ml="0px" bg="grey">
        <Box >
          <Image border="none" w="100%"  bg="black" objectFit="cover" objectPosition="top" src={ele.img}/>     
        </Box>
    </Box>
  ))}
  
     </Carousel>
      
    </Box>
)


}
export {CategoryCarousel}