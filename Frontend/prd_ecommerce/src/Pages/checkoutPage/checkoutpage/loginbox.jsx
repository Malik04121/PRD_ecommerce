import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import {RiNumber1} from "react-icons/ri"
import {AiOutlineCheck} from "react-icons/ai"
import { useSelector } from "react-redux"

function LoginBox(){
    const user=useSelector((store)=>store.user)

    
    return(
        <Box bg="black" color="white">
            <Flex gap="10px">
                <Box bg="silver" color="black" h="40%" pr="5px" pl="5px" pt="-5px" >
                    <Heading size="md">1</Heading>
                </Box>
                {/* <Text bg="green" h="50%"><RiNumber1 bg="red"/></Text> */}
                <Box>
                    <Flex gap="5px">
                       <Heading as="h6" size="md" fontWeight="semibold">Login</Heading>
                       <Text ><AiOutlineCheck bg="green" color="green" mt="5px" fontSize="xxl" fontWeight="bold"/></Text> 
                    </Flex>
                    <Flex gap="10px">
                        <Text>{user.username}</Text>
                        <Text>9852364561</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )


}
export {LoginBox}