import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect,useState } from "react"


function Cart(){
    const [cartdata,setCartdata]=useState([])
    const [cartTotal,setCartTotal]=useState(0)



const getcartdetail=()=>{
    axios.get("https://red-houndstooth.cyclic.app/cart")
    .then(res=>setCartdata(res.data))

    cartdata.map((ele)=>{
    
        setCartTotal(cartTotal=>cartTotal+ele.price)
    })
}



useEffect(()=>{
    getcartdetail()
},[])

return(
    <Box bg="#1B1B1B" >
      <Flex   w="80%"m="auto" color="white" gap="30px" display={{base:"grid",md:"flex"}}>
        <Box w="60%" >
           <Box mt="30px">
             <Flex  justifyContent="space-between">
                <Text>Order Details</Text>
                <Flex gap="10px">
                    <Text>Deliver to</Text>
                    <Input placeholder="Pin code"/>
                </Flex>
             </Flex>
           </Box>

           <Box bg="#353535" mt="50px" p="10px" >

           {cartdata.map((item)=>(
                <Flex bg="#353535" color="white"  mt="30px">
                     
                        <Box w="80%" >
                        <Image src={item.image1}/>
                        </Box>

                        <Box mr="30px" ml="10px">
                          <Text>{item.name}</Text>
                          <Flex mt="30px">
                              <Text>Discounted Price</Text>
                              <Text>{item.price}</Text>
                              <Text></Text>
                          </Flex>
                        </Box>
                        
                        <Box w="80%">
                       <Text>Free Delivery</Text>
                       <Text fontSize="sm">Delivery in 1 to 3 days</Text>
                       <Text>(T&C apply)</Text>
                         </Box>
                     
                  
                </Flex>
           ))}
             </Box>
                       
           <Box justifyContent="flex-end">
              <Button color="#353535">Procede to Buy</Button>
           </Box>
        </Box>

        <Box mt="30px" bg="#353535" p="20px" w="30%">
            <Box textAlign="Center"><Text as="b">Price Details</Text>
              </Box>
            <Box mt="30px">
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Price</Text>
                    <Text fontSize="lg" as="b">95000</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Delivery Charges</Text>
                    <Text fontSize="lg" as="b">Free</Text>
                </Flex>
            </Box>
            <Box mt="30px">
                 <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Total Amount</Text>
                    <Text fontSize="lg" as="b">{cartTotal}</Text>
                </Flex>
            </Box>
            <Box>
                <Text fontSize="sm" >You will save ₹34,400 on this order</Text>
            </Box>

        </Box>
      </Flex>
    
    </Box>
)


}
export {Cart}