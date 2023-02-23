import { Box, Button, Checkbox, Flex, Input, Spinner, Text, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUser } from "../../../Component/Redux/adminreducer/action"


function PaymentOption(paymentStatus){
    const [checkBox,setCheckBox]=useState("")
    const dispatch=useDispatch()
    const toast=useToast()
    const navigate=useNavigate()
    const userdata=useSelector((store)=>store.userReducer.userData)
    const loading=useSelector((store)=>store.menuReducer.isLoading)

    const checkboxhandler1=(e)=>{
        setCheckBox(e.target.value)
    }
    const paymentStatus2=(data)=>{
            const paymentDetail={
                user:userdata,
                payment:data,
                paymentStatus:data=="COD"?"unPaid":"paid"
            }
            dispatch(addUser(paymentDetail))
            .then(res=>{
                toast({
                    position : 'top',
                    colorScheme : 'green', 
                    status : "success",
                    title:"Your Order is Successfully Placed"
                  })
                  navigate("/")
            })
        console.log(paymentDetail)
    }


return(
    <>
    <Box bg="black" color="white" display={!paymentStatus&&"none"} p="2%">
        {loading? <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />:
        <Box>
            <Box colorScheme="green" gap="20px" ml="20px">
                           <Text fontSize="md" mb="10px" as="b">Payment through UPI </Text>
                           <Flex gap="10px" mt="10px">
                              <Input placeholder="Enter UPI ID"/>
                              <Button bg="green" onClick={()=>paymentStatus2("UPI")}>Continue</Button>
                           </Flex>
            </Box>
            {/* <Checkbox defaultChecked colorScheme="green" gap="20px" mt="20px" > */}
            <Box colorScheme="green" gap="20px" ml="20px" mt="20px">

                           <Text fontSize="md" mb="10px" as="b">Card Payment </Text>
                             <Flex mt="10px">
                              <Input placeholder="Enter Card Number" w="90%"/>
                             </Flex>
                             <Flex gap="10px" mt="10px">
                             <Input placeholder="Expiry" w="30%"/>
                             <Input placeholder="Enter CVV" w="26%"/>
                             <Button bg="green" w="30%"onClick={()=>paymentStatus2("Card Payment")}>Continue</Button>
                             </Flex>
  
                           {/* </Flex> */}
            </Box>
            <Box colorScheme="green" gap="20px" ml="20px" mt="20px">
            {/* <Checkbox defaultChecked colorScheme="green" gap="20px" mt="20px" > */}
                 <Flex gap="10px" mt="10px" textAlign="center">
                     <Text fontSize="md" mb="10px" as="b">Cash on Delivery</Text>
                    <Button bg="green" onClick={()=>paymentStatus2("COD")}>Confirm Order</Button>
                </Flex>
                </Box>
        </Box>
        }
    </Box>
    </>
)

}
export {PaymentOption}