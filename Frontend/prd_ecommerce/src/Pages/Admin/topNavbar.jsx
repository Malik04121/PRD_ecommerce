import { Box, Flex, Image, Text } from "@chakra-ui/react"
import {BiBell,BiUserCircle} from "react-icons/bi"


function TopNavbar(){


    return(
        <>
        <Flex h="60px" position="sticky" top="0" bg="red" alignItems="center">
            <Box>
                <Image src=""/>
            </Box>
            <Flex>
                <Text><BiBell/></Text>
                <Flex>
                    <Text><BiUserCircle/></Text>
                    <Text>UserName</Text>
                </Flex>
            </Flex>
        </Flex>
        </>
    )
}
export {TopNavbar}