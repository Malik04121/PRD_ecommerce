import { Box, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { Categorydetails } from './productcrouseldata';
import "./ProductCarousel.css";
import { Link } from "react-router-dom";


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
          breakpoint: { max: 1023, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

return(
    <Box className="categorycrausel" bg="#131212">
       <Carousel responsive={responsive}
    //  autoPlay={true}
     infinite={true}

     >
       {Categorydetails.map((ele)=>(
    <Box mt="50px"  mr="0px" ml="0px">
        <Box >
          <Link to={ele.caption}>
          <Image border="none" w="100%"    bg="#131212 " objectFit="cover" objectPosition="top" h="100%" src={ele.img}/>     
          </Link>
        </Box>
    </Box>
  ))}
  
     </Carousel>
      
    </Box>
)


}
export {CategoryCarousel}