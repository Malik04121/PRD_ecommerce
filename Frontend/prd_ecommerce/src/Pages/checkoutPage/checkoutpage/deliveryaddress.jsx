import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"


function DeliveryAddress({setOrder,userdata}){
   const [addressBox,setAddressBox]=useState(false)
   const { isOpen, onOpen, onClose } = useDisclosure()
   const user=useSelector((store)=>store.user)


   const initialRef = useRef(null)
   const finalRef = useRef(null)

   const addAddress=()=>{
    //   console.log(setOrder)

       setOrder(true)
       onClose()
    }

    return(
        <>
          <Box color="white" bg="black" >
             {user.address?
              <Box p="2%">
                {user.address.map((ele)=>{
                     <Flex gap="15px">
                     {/* <Input type="checkbox"/> */}
                     <Checkbox defaultChecked colorScheme="green">
                        <Box>
                          <Flex gap="10px">
                           <Text>{ele.name}</Text>
                           <Text>{ele.phone}</Text>
                          </Flex>
                          <Flex>
                            <Text noOfLines={1}>{ele.address}</Text>
                          </Flex>
                        </Box>
                     </Checkbox>
                     
                  </Flex>
                })
            }
             
           </Box>:<></>
            }
            
             <Box>
                {/* <Flex onClick={onOpen} cursor="pointer" bg="#33FF83"> */}
                <Flex bg="#33FF83" color="black" pl="2%" pr="2%" pt="1%" pb="1%" gap="5px" onClick={onOpen} cursor="pointer">
                    <Heading size="md">+</Heading>
                <Heading as="h7" size="sm" fontWeight="semibold" color="black">Add a new address</Heading>
                  {/* </Flex> */}
                    
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
                </Flex>
             </Box>
          </Box>




     
          
        </>
    )
}
export {DeliveryAddress}