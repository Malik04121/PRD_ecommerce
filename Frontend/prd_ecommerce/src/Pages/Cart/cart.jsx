import { Box, Button, Flex, Image, Input, Text, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useContext } from "react"
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Component/Context/appcontext"
import { loginUserData } from "../../Component/Redux/userreducer/action"


function Cart(){
    const [cartdata,setCartdata]=useState([])
    const [cartTotal,setCartTotal]=useState(0)
    const isAuth=useSelector((store)=>store.authReducer.isAuth)
    const id=useSelector((store)=>store.authReducer.id)
    const Loading=useSelector((store)=>store.userReducer.isLoading)
    const userData=useSelector((store)=>store.userReducer.userData)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const toast = useToast();

    // const cartTotal = useSelector(store => {
    //   return store.userReducer.userData.cart.reduce((total, item) => total + item.price, 0);
    // });



const getcartdetail=()=>{
  // console.log(userName,"username us")
     dispatch(loginUserData())
    //  .then((res)=>console.log(res.data,"res in cart"))
    //   console.log("logindata is this")
    
    // .then((res)=>console.log(res,"res is this in cart"))
    // .catch((err)=>{
    //   console.log(err,"error in catch")
    //   toast({
    //     position: "top",
    //     title: "User is not logged in please Login First!",
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    //   navigate("/login")
    // })
  // try{
  //   await axios.get(`https://sangria-crocodile-tux.cyclic.app/user?_id=${id}`)
  //   .then((res)=>{
  //     setCartdata(res.data[0].cart)
      
  //     console.log("before")
  //   })
  // }
  // catch(err){
  //   console.log(err,"error is")
    
  
    

    
}


useEffect(()=>{
    dispatch(loginUserData())
},[])

useEffect(()=>{
  if(userData){
    setCartdata(userData.cart)
  const totalPrice = userData.cart?.reduce((total, item) => total + item.price, 0);
 setCartTotal(totalPrice);
  }
  
},[userData])


if(Loading){
  return <Text>...Loading</Text>
  // console.log(Loading,"loading is this",userData)
}


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
            
            {!userData?<Text color="white">...Loading</Text>:
           <Box bg="black" border="0.5px solid white" mt="20px" p="10px" borderRadius="20px">
           
           {cartdata.map((item)=>(
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
            }
                       
           
        </Box>

        <Box mt="30px" bg="black" p="20px" w="30%" border="0.7px solid white" borderRadius="20px" h="40%">
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