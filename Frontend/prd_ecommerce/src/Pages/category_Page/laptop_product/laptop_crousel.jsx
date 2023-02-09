import { Box, Image, Text } from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ItemDetails1 } from '../../Landingpage/productcrouseldata';


function Laptopcrousel(){
 
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
          breakpoint: { max: 1023, min: 464 },
          items: 1
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
     h="5000px"
     bg="#353535"
     
     >
       {ItemDetails1.map((ele)=>(
    <Box bg="#353535" h={{base:"100px",md:"200px",lg:"300px"}} >
      <Image src={ele.img} h="100%"/>  
    </Box>
  ))}
  
</Carousel>
    </>
)

}

export {Laptopcrousel}