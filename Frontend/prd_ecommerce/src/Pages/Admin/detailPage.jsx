import { Box, Text } from "@chakra-ui/react"
import { shallowEqual, useSelector } from "react-redux"


function MenuDetail(){
    const menuType=useSelector((store)=>store.menuReducer.menu)
    
return(
    <>
    <Box bg="green" position="fixed" left="200px" w="800px" h="1500px">
       <Text>{menuType}</Text>
    </Box>
    </>
)

}
export {MenuDetail}