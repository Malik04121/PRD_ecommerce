import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input , Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react"
import axios from "axios"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addressUpdate } from "../../../Component/Redux/userreducer/action"

const address={
    "name":"",
    "phone":0,
    "pincode":0,
    "locality":"",
    "fulladdress":"",
    "city":"",
    "state":""
}

function DeliveryAddress({setOrder,userdata,setAddressStatus,setInitialStyle}){
   const [userAddress,setUserAddress]=useState(address)
   const Id=useSelector((store)=>store.authReducer.id)
   const loading=useSelector((store)=>store.userReducer.isLoading)
   const toast = useToast();
   const { isOpen, onOpen, onClose } = useDisclosure()
   const Token=useSelector((store)=>store.authReducer.token)
   const dispatch=useDispatch()

   const user=useSelector((store)=>store.authReducer.user)


   const initialRef = useRef(null)
   const finalRef = useRef(null)

   const selectAddress=()=>{
    setOrder(true)
    setAddressStatus(false)
    setInitialStyle(false) 
   }

   const addAddress=(e)=>{
      e.preventDefault()
      dispatch(addressUpdate(userAddress))
      toast({
        position: "top",
        title: "Address is successfully Added",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
       setOrder(true)
       setAddressStatus(false)
       setInitialStyle(false)
       onClose()
    }

    const inputHandler=(e)=>{
        const {name,value}=e.target
        setUserAddress({...userAddress,[name]:value})
    }
    

    return(
        <>
          <Box color="white" bg="black"  >
            
                {userdata?.map((ele)=>(
                     <Flex gap="25px" p="2%" >
                     {/* <Input onChange={inputHandler} type="checkbox"/> */}
                     <Checkbox defaultChecked colorScheme="green" gap="20px">
                        <Box>
                          <Flex gap="10px">
                           <Text>{ele.name}</Text>
                           <Text>{ele.phone}</Text>
                          </Flex>
                          <Flex>
                            <Text noOfLines={1}>{ele.fulladdress}</Text>
                          </Flex>

                        </Box>
                        <Button bg="red" size="xs" onClick={selectAddress}>Deliver Here</Button>
                     </Checkbox>
                     
                  </Flex>
                ))
            }
             
           {/* </Box> */}
           {/* :<></> */}
            {/* } */}
            
             <Box>
                {/* <Flex onClick={onOpen} cursor="pointer" bg="#33FF83"> */}
                <Flex bg="#33FF83" color="black" pl="2%" pr="2%" pt="1%" pb="1%" gap="5px" onClick={onOpen} cursor="pointer">
                    <Heading size="md">+</Heading>
                <Heading as="h7" size="sm" fontWeight="semibold" color="black">Add a new address</Heading>
                  {/* </Flex> */}
                    
                    <Modal
                    
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
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
              <FormLabel fontSize="md" fontWeight="normal"  >Full Name</FormLabel>
              <Input onChange={inputHandler}  placeholder='Full name' name="name" value={userAddress.name} isRequired />
            </FormControl>

            <FormControl >
              <FormLabel fontSize="md" fontWeight="normal" >Mobile Number</FormLabel>
              <Input onChange={inputHandler} placeholder='Mobile Number' type="number" name="phone" value={userAddress.phone} />
            </FormControl>
            </Flex>

            <Flex gap="20px" mt="10px">
            <FormControl>
              <FormLabel fontSize="md" fontWeight="normal">PinCode</FormLabel>
              <Input onChange={inputHandler}  placeholder='Pin Code' type="number"  name="pincode" value={userAddress.pincode}/>
            </FormControl>

            <FormControl >
              <FormLabel fontSize="md" fontWeight="normal" >Locality</FormLabel>
              <Input onChange={inputHandler} placeholder='Locality'  name="locality" value={userAddress.locality} />
            </FormControl>
            </Flex>
            <FormControl mt="10px">
              <FormLabel fontSize="md" fontWeight="normal" >Address</FormLabel>
              <Input onChange={inputHandler} placeholder='Address (Area and Street)' h="80px"  name="fulladdress" value={userAddress.fulladdress} />
            </FormControl>

            <Flex gap="20px" mt="10px">
            <FormControl>
              <FormLabel fontSize="md" fontWeight="normal" >City/District/Town</FormLabel>
              <Input onChange={inputHandler}  placeholder='City/District/town'  name="city" value={userAddress.city}/>
            </FormControl>

            <FormControl >
              <FormLabel fontSize="md" fontWeight="normal" >State</FormLabel>
              <Input onChange={inputHandler} placeholder='State'  name="state" value={userAddress.state} />
            </FormControl>
            </Flex>
            
          </ModalBody>

          <ModalFooter>
            <Button  bg="#33FF83" mr={3} onClick={addAddress} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                </Flex>
             </Box>
          </Box>




     
          
        </>
    )
}
export {DeliveryAddress}