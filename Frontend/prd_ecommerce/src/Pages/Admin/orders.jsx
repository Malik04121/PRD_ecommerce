import { Box, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderMenu, resetState } from "../../Component/Redux/adminreducer/action"


function Orders(){
    const order=useSelector((store)=>store.menuReducer.data)
    const isLoading=useSelector((store)=>store.menuReducer.isLoading)
    const [ordersDetail,setOrderDetail]=useState([])

    const dispatch=useDispatch()


   const getOrder=async()=>{
    try{
    await dispatch(orderMenu())
    }
    catch(err){
        console.log(err)
    }
   }

  useEffect(()=>{
      getOrder()
  },[])

  useEffect(()=>{
      setOrderDetail(order)
  },[order])


    return(
        <>
          <Box bg="silver" position="fixed" left="200px"  h="1500px" pl="15px" pr="5px" w="85%">
            <Text fontSize="xl" as="b" ml="30px" mt="30px">Orders</Text>
            <TableContainer p="2%" overflow="auto">
       <Table variant='simple' bg="white" mt="20px" size="sm" >
        <Thead>
         <Tr>
        <Th>Order ID</Th>
        <Th>Biling Name</Th>
        <Th>Date</Th>
        <Th>Total</Th>
        <Th>Payment Status</Th>
        <Th>Payment Method</Th>
        <Th>View Details</Th>

      </Tr>
    </Thead>
    {isLoading?<Text>...Loading</Text>:
    <Tbody>
        
        {ordersDetail?.map((order)=>(

            <Tr>
            <Td>{order._id}</Td>
            <Td>{order.user.username}</Td>
            <Td >{new Date(order.updateOn).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</Td>
            <Td>Total</Td>
            <Td >{order.paymentStatus}</Td>
            <Td >{order.payment}</Td>
          </Tr>
        ))}
      
     
    </Tbody>
     }
   
  </Table>
</TableContainer>
          </Box>
        </>
    )
    
}
export {Orders}