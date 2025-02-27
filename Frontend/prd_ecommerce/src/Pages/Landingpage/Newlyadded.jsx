
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userData } from "../../Component/Redux/userreducer/action";
// import { Categorydetails } from './productcrouseldata';

import "./ProductCarousel.css";

function Newlyadded(){
  const dispatch=useDispatch()
    const userdata=useSelector((store)=>store.userReducer.data)
 const [laptopdata,setLaptopdata]=useState([])
 
  const getProductdata=()=>{
    dispatch(userData())
  }

 useEffect(()=>{
    getProductdata()
 },[])

 useEffect(()=>{
     setLaptopdata(userdata)  
    //  laptopdata.slice(15)
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

    <Box bg="#1B1B1B">
       <Flex mt="50px">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">New at TechHunt</Heading>
        </Flex> 
        <Box  pr={{base:"15px",md:"40px",lg:"80px"}} pl={{base:"15px",md:"40px",lg:"80px"}} bg="#1B1B1B">
        
        <Carousel responsive={responsive}
     //  autoPlay={true}
      infinite={true}
      >
        {!laptopdata?<Heading color="white">...Loading</Heading>:laptopdata.slice(25).map((ele)=>(
     <Link to="/product/Mobile/c Android">
     <Box   mr="10px" ml="10px"  color="white" bg="#4B4B4B" mt="20px">
         <Box >
           <Image border="none" w="80%" m="auto" mb="-5%"  objectFit="cover" objectPosition="top" src={ele.image1} onError={(e) => {
        e.target.onerror = null; // Prevents looping in case fallback fails
        e.target.src = "https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/home_page/samsung-phone.jpeg"}}/>   
           </Box> 
           <Box p="5%" > 
           <Text  whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" mr="10px" >{ele.name}</Text>
           {/* </Box> */}
           <Text >Offer Price: &nbsp; <Text as="b">₹ {ele.price}</Text></Text>
           <Text >M.R.P: &nbsp;<Text as="s"> ₹ {ele.price+ele.price*8/100}</Text></Text>
         </Box>
     </Box>
     </Link>
   ))}
   
      </Carousel>
       
     </Box>
    </Box>
)

}
export {Newlyadded}