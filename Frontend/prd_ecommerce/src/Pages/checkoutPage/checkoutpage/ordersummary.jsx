import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useSelector } from "react-redux"


function OrderSummary({Order,userdata}){
  console.log(userdata,'userdata is this')
  const [orderState,setOrderState]=useState(false)
  const user=useSelector((store)=>store.authReducer.user)
  
return(
    <>
    {userdata.length>0?
       <Box color="white"  p="2%" display={!Order&&"none"} >
       {userdata?.map((ele)=>(

<Flex gap="20px" mt="10px">
<Flex  w="40%"  h="150px" justifyContent="center" >
  <Image src={ele.image1} alt="image" h="100%"/>
</Flex>
<Box w="50%">
  <Text>{ele.name}</Text>
  <Flex>
      <Text fontSize="md" as="s">{ele.originalPrice}</Text> &nbsp;
      <Text>{ele.price}</Text>
      
      {/* <Text>{ele.price/ele.originalPrice}*100</Text> */}
</Flex>
  <Text>3 offer applied</Text>
  {/* <Button bg="red" size="xs" borderRadius="5px" >Remove</Button> */}
</Box>
</Flex>
))} 
      
   </Box> :
      <Box>
         <Text color="white">Cart is Empty</Text>
     </Box> 
     
   }
      
      
     </>
 ) 

 } 
export {OrderSummary}


      