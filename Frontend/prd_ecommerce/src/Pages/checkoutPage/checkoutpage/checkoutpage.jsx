import { Box, Button, Flex, Heading, Text ,Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input,FormLabel,FormControl, useDisclosure} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeliveryAddress } from "./deliveryaddress"
import { LoginBox } from "./loginbox"
import { OrderSummary } from "./ordersummary"
import { PaymentOption } from "./paymentpage"
import {AiOutlineCheck} from "react-icons/ai"
import { loginUserData } from "../../../Component/Redux/userreducer/action"


function CheckoutPage(){
    const dispatch=useDispatch()

    const [isOrder,setIsOrder]=useState(false)
    const [isAddress,setIsAddress]=useState(true)
    const [isPayment,setIsPayment]=useState(false)
    const [initialStyle,setInitialStyle]=useState(true)
    const [total,setTotal]=useState(0)
    
    const [isLogin,setIsLogin]=useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userData,setUserData]=useState({})
    const user=useSelector((store)=>store.userReducer.userData)
   const loading=useSelector((store)=>store.userReducer.isLoading)


    const initialRef = useRef(null)
    const finalRef = useRef(null)


    useEffect(()=>{
       dispatch(loginUserData())
    },[])


    useEffect(()=>{
         setUserData(user)
         const totalPrice = user?.cart.reduce((total, item) =>{
          if (user.cart.length> 0) { // check if cart is not empty
            return total + item.price;
          } else {
            return total;
          }
        },0)
        setTotal(totalPrice);
    },[user])

    useEffect(()=>{
          console.log("loading is this",loading)
    },[loading])

return(
    <Box bg="#1B1B1B" pb="40px">
       <Flex w="90%" m="auto" gap="5%">
         <Box w="60%" mt="30px">
            <Box p="2%" bg="black">
              <LoginBox/>
            </Box>

           <Box mt="20px" >
            <Flex bg={isAddress?"#33FF83":"black"} color="white" p="2%" gap="5px" justifyContent="space-between">
                
                <Flex gap="15px">
                <Box bg="silver" color="black" h="100%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">2</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color={isAddress?"black":"white"}>Delivery Address</Heading>
                <Text display={isAddress&&"none"}><AiOutlineCheck bg="green" color="green" mt="5px" fontSize="xxl" fontWeight="bold"/></Text> 
                </Flex>
                
                <Button bg="red" display={isAddress&&"none"} onClick={()=>{
                    setIsAddress(true);setInitialStyle(true);setIsOrder(false)}}>Change</Button>

            </Flex>
           {isAddress&&<DeliveryAddress setOrder={setIsOrder} userdata={userData?.address} setAddressStatus={setIsAddress} setInitialStyle={setInitialStyle} total={total}/>}

           </Box>
             
             <Box mt="20px">
           {initialStyle? <Flex bg="grey" color="white" p="2%" gap="5px" justifyContent="space-between">
                
                <Flex gap="15px">
                <Box bg="silver" color="black" h="100%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">3</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color="white">Order Summary</Heading>
                </Flex>

            </Flex>: <Flex bg={isOrder?"#33FF83":"black"} color="white" p="2%" gap="5px" justifyContent="space-between">
                
                <Flex gap="15px">
                <Box bg="silver" color="black" h="70%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">3</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color={isAddress?"black":"white"}>Order Summary</Heading>
                <Text display={isOrder&&"none"}><AiOutlineCheck bg="green" color="green" mt="5px" fontSize="xxl" fontWeight="bold"/></Text> 
                </Flex>
                
                <Button bg="red" display={isOrder&&"none"} onClick={()=>{setIsOrder(true);setInitialStyle(false);setIsPayment(false)}}>Change</Button>

            </Flex>}

           {/* <Box mt="20px">
           <Flex bg={isOrder?"#33FF83":"grey"} color="white" p="2%" gap="5px">
                <Box bg="silver" color="black" h="40%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">3</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color="black">Order Summary</Heading>
            </Flex> */}
            {isOrder&&
              <>
             <OrderSummary Order={isOrder} userdata={userData.cart}/>
            {/* } */}
           <Flex bg="black" color="white" p="2%" justifyContent="space-between">
            <Text>Order confirmation email will be sent to emailaddress</Text>
            <Button bg="#33FF83" color="black" onClick={()=>{setIsOrder(false) ;setIsPayment(true)}}>Continue</Button>
           </Flex>
           </>
            }

           </Box>

           {/* <Modal
                    
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent  border="1px solid white">
                      <ModalHeader>Enter Your Delivery Address</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <Flex gap="20px">
                        <FormControl>
                          <FormLabel fontSize="md" fontWeight="normal" >Full Name</FormLabel>
                          <Input ref={initialRef} placeholder='Full name' isRequired />
                        </FormControl>
            
                        <FormControl >
                          <FormLabel fontSize="md" fontWeight="normal" >Mobile Number</FormLabel>
                          <Input placeholder='Mobile Number' type="number" />
                        </FormControl>
                        </Flex>
            
                        <Flex gap="20px" mt="10px">
                        <FormControl>
                          <FormLabel fontSize="md" fontWeight="normal" >PinCode</FormLabel>
                          <Input ref={initialRef} placeholder='Pin Code' type="number" />
                        </FormControl>
            
                        <FormControl >
                          <FormLabel fontSize="md" fontWeight="normal" >Locality</FormLabel>
                          <Input placeholder='Locality'  />
                        </FormControl>
                        </Flex>
                        <FormControl mt="10px">
                          <FormLabel fontSize="md" fontWeight="normal" >Address</FormLabel>
                          <Input placeholder='Address (Area and Street)' h="80px" />
                        </FormControl>
            
                        <Flex gap="20px" mt="10px">
                        <FormControl>
                          <FormLabel fontSize="md" fontWeight="normal" >City/District/Town</FormLabel>
                          <Input ref={initialRef} placeholder='City/District/town' />
                        </FormControl>
            
                        <FormControl >
                          <FormLabel fontSize="md" fontWeight="normal" >State</FormLabel>
                          <Input placeholder='State'  />
                        </FormControl>
                        </Flex>
                        
                      </ModalBody>
            
                      <ModalFooter>
                        <Button  bg="#33FF83" mr={3} onClick={addAddress}>
                          Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal> */}

           <Box mt="20px">
           <Flex bg={isPayment?"#33FF83":"grey"} color="white" p="2%" gap="5px">
                <Box bg="silver" color="black" h="40%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">4</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color="black">Payment Options</Heading>
            </Flex>
            
            {isPayment&&<PaymentOption paymentStatus={isPayment} total={total}/>}
             

           </Box>
          
         </Box>
       

       <Box mt="30px" bg="black" p="20px" h="80%" w="30%" border="0.7px solid white" borderRadius="20px" color="white">
            <Box textAlign="Center"><Text as="b">Price Details</Text>
              </Box>
            <Box mt="30px">
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Price</Text>
                    <Text fontSize="lg" as="b">{total}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Delivery Charges</Text>
                    <Text fontSize="lg" as="b">Free</Text>
                </Flex>
            </Box>
            <Box mt="30px">
                 <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Total Amount</Text>
                    <Text fontSize="lg" as="b">{total}</Text>
                </Flex>
                
            </Box>
            <Box>
                <Text fontSize="sm" >You will save ₹34,400 on this order</Text>
            </Box>
            <Box justifyContent="flex-end" w="100%" mt="20px">
              <Button color="#353535" bg="#33FF83" w="100%">Procede to Buy</Button>
           </Box>

        </Box>
       </Flex>
    </Box>
)

}
export {CheckoutPage}