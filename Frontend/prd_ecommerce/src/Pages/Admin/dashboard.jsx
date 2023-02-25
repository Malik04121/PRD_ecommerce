import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderMenu, resetState } from "../../Component/Redux/adminreducer/action"
import { userData } from "../../Component/Redux/userreducer/action"
import {BiSearch} from "react-icons/bi"
import {BiDollarCircle} from "react-icons/bi"
import {BsBasket,BsBag} from "react-icons/bs"


function Dashboard(){
    const order=useSelector((store)=>store.menuReducer.data)
    const productData=useSelector((store)=>store.userReducer.data)
    const isLoading=useSelector((store)=>store.menuReducer.isLoading)
    const [ordersDetail,setOrderDetail]=useState([])
    const [cartTotal,setCartTotal]=useState(0)
    const [totalProduct,setTotalProduct]=useState(0)
    let total=0
    

    const dispatch=useDispatch()


   const getOrder=()=>{
    try{
     dispatch(orderMenu())
     dispatch(userData())
    }
    catch(err){
        console.log(err)
    }
   }

  useEffect(()=>{
      getOrder()
  },[])

  useEffect(()=>{
    if(order){
    order.reverse()
    setOrderDetail(order) 
    for(let i=0;i<ordersDetail.length;i++){
        if(ordersDetail[i].total){
            total=total+ordersDetail[i].total
            console.log(ordersDetail[i].total,"totlafanshbfwa")
        }
        console.log(ordersDetail[i].total,"klkkkmmjj",i)

    }
    console.log(total,"is jaks")
    }
  },[order])
  useEffect(()=>{
       if(productData){
        setTotalProduct(productData.length)

       }
  },[productData])

    return(
        <>

        <Box bg="silver" position="fixed" left="200px"  h="1500px" pl="15px" pr="5px" w="85%">
             <Flex p="2%" gap="5%">
                <Box bg="white" w="30%" p="1%">
                    <Flex gap="0.8rem" >
                        <Text ><BiDollarCircle fontSize="30px"/></Text>
                        <Box>
                            <Text>Total Sales</Text>
                            {order&&<Text>73990</Text>}
                        </Box>
                    </Flex>
                </Box>
                <Box bg="white" w="30%" p="1%">
                    <Flex  gap="0.8rem">
                        <Text><BsBag fontSize="30px"/></Text>
                        <Box>
                            <Text>Total Orders</Text>
                            {ordersDetail&&<Text>{ordersDetail.length}</Text>}
                        </Box>
                    </Flex>
                </Box>
                <Box w="30%" bg="white" p="1%">
                    <Flex  gap="0.8rem">
                        <Text><BsBasket fontSize="30px"/></Text>
                        <Box>
                            <Text>Total Products</Text>
                            <Text>{totalProduct}</Text>
                        </Box>
                    </Flex>
                </Box>
             </Flex>
            <Box>
            <Text fontSize="xl" as="b" ml="30px" mt="30px">Recent Orders</Text>
            <TableContainer p="2%" overflow="auto">
       <Table variant='simple' bg="white"  size="sm" >
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
            <Td>{order.total}</Td>
            <Td >{order.paymentStatus}</Td>
            <Td >{order.payment}</Td>
          </Tr>
        ))}
      
     
    </Tbody>
     }
   
  </Table>
</TableContainer>
          </Box>
          </Box>
        </>
    )


}
export {Dashboard}