import { Box, Text } from "@chakra-ui/react"
import { shallowEqual, useSelector } from "react-redux"
import { AddProduct } from "./addproduct"
import { Customer } from "./customer"
import { Dashboard } from "./dashboard"
import { Orders } from "./orders"


function MenuDetail(){
    const menuType=useSelector((store)=>store.menuReducer.menu)

    if(menuType=="orders"){
        return(
            <Box>
                
            <Orders/>
            </Box>
        )
    }
    if(menuType=="customer"){
        return(
            <Box bg="red">
            <Customer/>
            </Box>
        )
    }
    if(menuType=="add product"){
        return(
            <Box >
            <AddProduct/>
            </Box>
        )
    }
    if(menuType=="dashboard"){
        return(
            <Box>
                <Dashboard/>
            </Box>
        )
    }
    
    
// return(
//     <>
//     <Box bg="green" position="fixed" left="200px" w="800px" h="1500px">
//        {/* <Text>{menuType}</Text> */}
//     </Box>
//     </>
// )

}
export {MenuDetail}