import { Box, Flex, Image, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react"
import {ChevronDownIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons"
import {BiSearch} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {BsCart2} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import logo from "../Assets/logo2_resize.png"

function Navbar(){

    return(
        <>
          <Flex  h="80px" alignItems="center" pl="100px" pr="100px" bg="black" justifyContent="space-between" position="sticky">
            <Flex gap="40px">
               <Box h="60px" w="200px">
                 <Image src={logo} h="100%" w="100%"/>
               </Box>
               <Flex alignItems="center" color="white" w="330px">
                 <Input placeholder="Search for anything" color="white"/>
                 <Box bg="red" h="40px" w="30px" alignItems="center"><BiSearch m="auto"/></Box>
               </Flex>
            </Flex>
            
            <Flex gap="30px">
                <Flex alignItems="center" gap="7px">
                    <FiHeart color="white" size="1.2rem"/>
                    <Text color="white" fontSize="xl">Wishlist</Text>
                </Flex>
                <Flex alignItems="center" color="white" gap="7px">
                  <FaUserAlt size="1.3rem"/>
                  <Text fontSize="xl">Login</Text>
                </Flex>
                <Flex alignItems="center" color="white" gap="7px">
                    <BsCart2 size="1.3rem"/>
                    <Text fontSize="xl">Cart</Text>
                </Flex>
            </Flex>
          </Flex>
        </>
    )

}
export {Navbar}