import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../Component/Redux/userreducer/action";
// import { Categorydetails } from './productcrouseldata';

import "./ProductCarousel.css";

function LaptopcategoryCraousel(){
  const dispatch=useDispatch()
    const userdata=useSelector((store)=>store.userReducer.data)
    const loading=useSelector((store)=>store.userReducer.isLoading)
 const [laptopdata,setLaptopdata]=useState([])
 
const getUserData=()=>{
    dispatch(userData())
}

 useEffect(()=>{
     getUserData()
 },[])

 useEffect(()=>{
      setLaptopdata(userdata)
 },[userdata])
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

return(

    <Box>
       <Flex mt="50px" bg="#1B1B1B">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Best Selling Laptops</Heading>
        </Flex> 
    <Box  pr={{base:"15px",md:"40px",lg:"80px"}} pl={{base:"15px",md:"40px",lg:"80px"}} bg="#1B1B1B">
        
       <Carousel responsive={responsive}
    //  autoPlay={true}
     infinite={true}
     >
       {!laptopdata?<Heading color="white">...Loading</Heading>:laptopdata.map((ele)=>(
    <Box   mr="10px" ml="10px"  color="white" bg="#4B4B4B" mt="20px">
        <Box >
          <Image border="none" w="80%" m="auto" mb="-5%"  objectFit="cover" objectPosition="top" src={ele.image1}/>   
          </Box> 
          <Box p="5%" > 
          <Text  whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" mr="10px" >{ele.name}</Text>
          {/* </Box> */}
          <Text >Offer Price: &nbsp; <Text as="b">₹ {ele.price}</Text></Text>
          <Text >M.R.P: &nbsp;<Text as="s"> ₹ {ele.price+ele.price*8/100}</Text></Text>
        </Box>
    </Box>
  ))}
  
     </Carousel>
      
    </Box>
     {/* } */}
    </Box>
)

}
export {LaptopcategoryCraousel}