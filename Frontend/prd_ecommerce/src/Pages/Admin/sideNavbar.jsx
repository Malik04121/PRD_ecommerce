import { Box, Flex, Text } from "@chakra-ui/react"
import {BsTruck,BiUserCircle} from "react-icons/bs"
import {MdOutlineDashboard,MdSupervisedUserCircle} from "react-icons/md"
import {AiOutlineFileText} from "react-icons/ai"
import {IoMdAddCircle} from "react-icons/io"
import {FcDoughnutChart,FcShop} from "react-icons/fc"
import { menuRequest, menuSuccess } from "../../Component/Redux/adminreducer/action"
import { useDispatch } from "react-redux"





let navMenu=[
   {
    name:"Dashboard",
    icon:FcDoughnutChart,
    payload:"dashboard"
   },
   {
    name:"Customers",
    icon:MdSupervisedUserCircle,
    payload:"customer"
   },
   {
    name:"Orders",
    icon:AiOutlineFileText,
    payload:"orders"
   },
   {
    name:"Add Product",
    icon:IoMdAddCircle,
    payload:"add product"
   },
   {
    name:"Brands",
    icon:FcShop,
    payload:"brands"
   },
   {
    name:"Product",
    icon:BsTruck,
    payload:"product"
   }
]
function SideNavbar(){
   const dispatch=useDispatch()

  const changeMenu=(payload)=>{
    dispatch(menuRequest())
    dispatch(menuSuccess(payload))
    
    // console.log(payload)
  }

    return(
        <>
          <Box bg="#1A0D61" position="fixed" left="0" w="200px" p="20px" h="100%">
            {navMenu.map((menu)=>(
                <Flex onClick={()=>changeMenu(menu.payload)} gap="10px" alignItems="center" mt="15px">
                    <Box fontSize="20px" color="white"><menu.icon/></Box>
                    <Text fontSize="lg" fontWeight="semibold" color="white">{menu.name}</Text>
                </Flex>
            ))}

          </Box>
        </>
    )
}
export {SideNavbar}
