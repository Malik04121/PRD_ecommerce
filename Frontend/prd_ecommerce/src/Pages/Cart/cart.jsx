import { Box, Button, Flex, Image, Input, Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useContext } from "react"
import { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Component/Context/appcontext"


function Cart(){
    const [cartdata,setCartdata]=useState([])
    const [cartTotal,setCartTotal]=useState(0)
    const isAuth=useSelector((store)=>store.isAuth)
    const id=useSelector((store)=>store.id)

    const navigate=useNavigate()
    const toast = useToast();



const getcartdetail=async()=>{
  // console.log(userName,"username us")

  try{
    await axios.get(`https://red-houndstooth.cyclic.app/user?_id=${id}`)
    .then((res)=>{
      setCartdata(res.data[0].cart)
      
      console.log("before")
    })
  }
  catch(err){
    console.log(err,"error is")
    toast({
      position: "top",
      title: "User is not logged in please Login First!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/login")
  }
    

    
}
// console.log(cartTotal)

// console.log(cartdata,"cartdata")

useEffect(()=>{
    setCartTotal(0)
    getcartdetail()
   
    console.log("after")
},[])
useEffect(()=>{
  cartdata.map((ele)=>{
    console.log(ele,"2 ele")
    setCartTotal(cartTotal=>cartTotal+ele.price)
})
},[cartdata])

return(
    <Box bg="#1B1B1B" pb="30px">
      <Flex   w="80%"m="auto" color="white" gap="30px" display={{base:"grid",md:"flex"}}>
        <Box w="70%" >
           <Box mt="30px">
             <Flex  justifyContent="space-between">
                <Text fontSize="xl" as="b">Order Details</Text>
                <Flex gap="10px" textAlign="center" alignItems="center">
                    <Text>Deliver</Text>
                    <Text >To</Text>
                    <Input placeholder="Pin code"/>
                </Flex>
             </Flex>
           </Box>

           <Box bg="black" border="0.5px solid white" mt="20px" p="10px" borderRadius="20px">

           {cartdata?.map((item)=>(
                <Flex  color="white"  mt="30px">
                     
                        <Box  w="50%" mt="-20px">
                        <Image src={item.image1} w="100%"/>
                        </Box>

                        <Box mr="30px" ml="10px" w="60%" >
                          <Text>{item.name}</Text>
                          <Flex mt="30px">
                              <Text>Discounted Price &nbsp;</Text>
                              <Text as="b">{item.price}</Text>
                              <Text></Text>
                          </Flex>
                        </Box>
                        
                        <Box w="40%">
                       <Text>Free Delivery</Text>
                       <Text fontSize="sm">Delivery in 1 to 3 days</Text>
                       <Text>(T&C apply)</Text>
                         </Box>
                     
                  
                </Flex>
           ))}
             </Box>
                       
           
        </Box>

        <Box mt="30px" bg="black" p="20px" w="30%" border="0.7px solid white" borderRadius="20px">
            <Box textAlign="Center"><Text as="b">Price Details</Text>
              </Box>
            <Box mt="30px">
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Price</Text>
                    <Text fontSize="lg" as="b">{cartTotal}</Text>
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
            <Box justifyContent="flex-end" w="100%" mt="20px">
              <Link to="/checkout">
              <Button color="#353535" bg="#33FF83" w="100%" >Procede to Buy</Button>
              </Link>
           </Box>

        </Box>
      </Flex>
    
    </Box>
)


}
export {Cart}