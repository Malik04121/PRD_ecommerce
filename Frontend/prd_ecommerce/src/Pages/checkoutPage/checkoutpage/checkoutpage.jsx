import { Box, Button, Flex, Heading, Text ,Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input,FormLabel,FormControl, useDisclosure} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { DeliveryAddress } from "./deliveryaddress"
import { LoginBox } from "./loginbox"
import { OrderSummary } from "./ordersummary"

function CheckoutPage(){
    const [isLogin,setIsLogin]=useState(true)
    const [isAddress,setIsAddress]=useState(false)
    const [isOrder,setIsOrder]=useState(true)
    const [isPayment,setIsPayment]=useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userData,setUserData]=useState({})
    const id=useSelector((store)=>store.id)


    const initialRef = useRef(null)
    const finalRef = useRef(null)

    useEffect(()=>{
         axios.get(`https://red-houndstooth.cyclic.app/user?_id=${id}`)
        .then(res=>setUserData(res.data[0].cart))

    },[])

    const addAddress=()=>{
        onClose()
    }

return(
    <Box bg="#1B1B1B" pb="40px">
       <Flex w="90%" m="auto" gap="5%">
         <Box w="60%" mt="30px">
            <Box p="2%" bg="black">
              <LoginBox/>
            </Box>

           <Box mt="20px" >
            <Flex bg="#33FF83" color="white" p="2%" gap="5px">
                <Box bg="silver" color="black" h="40%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">2</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color="black">Delivery Address</Heading>
            </Flex>
           <DeliveryAddress setOrder={setIsOrder} userdata={userData}/>

           </Box>

           <Box mt="20px">
           <Flex bg="#33FF83" color="white" p="2%" gap="5px">
                <Box bg="silver" color="black" h="40%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">3</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color="black">Order Summary</Heading>
            </Flex>
             {isOrder?<OrderSummary Order={isOrder} userdata={userData}/>:console.log("not getting")}
           <Flex bg="black" color="white" p="2%" justifyContent="space-between">
            <Text>Order confirmation email will be sent to emailaddress</Text>
            <Button bg="#33FF83" color="black" onClick={onOpen}>Continue</Button>
           </Flex>

           </Box>

           <Modal
                    
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
                  </Modal>

           <Box mt="20px">
           <Flex bg="#33FF83" color="white" p="2%" gap="5px">
                <Box bg="silver" color="black" h="40%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">4</Heading>
                </Box>
                <Heading as="h6" size="md" fontWeight="bold" color="black">Payment Options</Heading>
            </Flex>
             

           </Box>
          
         </Box>
       

       <Box mt="30px" bg="black" p="20px" h="80%" w="30%" border="0.7px solid white" borderRadius="20px" color="white">
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
                    {/* <Text fontSize="lg" as="b">{cartTotal}</Text> */}
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