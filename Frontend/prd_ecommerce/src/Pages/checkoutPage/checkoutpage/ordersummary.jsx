import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"


function OrderSummary({Order,userdata}){
  console.log(userdata,'userdata is this')
  const user=useSelector((store)=>store.user)
  
return(
    <>
      <Box color="white" bg="black" p="2%">
        {userdata.map((ele)=>(

<Flex gap="20px">
<Box  w="40%">
    <Image src={ele.image1} alt="image"/>
</Box>
<Box>
    <Text>{ele.name}</Text>
    <Flex>
        <Text as="s">{ele.originalPrice}</Text> &nbsp;
        <Text>{ele.price}</Text>
        {/* <Text>Discount</Text> */}
    </Flex>
    <Text>3 offer applied</Text>
    <Button bg="red" size="xs" borderRadius="5px" >Remove</Button>
</Box>
</Flex>
))}
        
     </Box>
     {/* : */}
     <Box>
         <Text color="white">Cart is Empty</Text>
     </Box>
     {/* } */}
      
    </>
)

}
export {OrderSummary}