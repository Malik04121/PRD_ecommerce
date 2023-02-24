import { Box, Flex, Image, Input, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import {BiBell,BiUserCircle} from "react-icons/bi"
import { useSelector } from "react-redux"
import logo from "../../Assets/logo2_resize.png"


function TopNavbar(){
    const username=useSelector((store)=>store.authReducer.adminusername)
    console.log(username,"is this")


    return(
        <>
        <Flex h="75px" position="sticky" top="0"  bg="whitesmoke" alignItems="center">
            <Box overflow="hidden" >
                <Image src={logo} objectFit="contain"  w="200px"/>
            </Box>
            <Flex  alignItems="center" gap="20px"  w="81%" ml="2%" mr="2%"  justifyContent="space-between">
                <Box w="40%" >
                    <Input placeholder="Item" variant="black"/>
                </Box>
                <Flex alignItems="center" gap="10px" fontSize="xl">
                    <Text><BiBell size="40px"/></Text>
                    <Text><BiUserCircle size="40px"/></Text>
                    <Text>{username}</Text>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}
export {TopNavbar}