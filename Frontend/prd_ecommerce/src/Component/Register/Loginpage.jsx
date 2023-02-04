import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text } from "@chakra-ui/layout"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"

function Login(){

return(
  <Box border="1px solid black"  bg="black" >  
  <Box w="30%" m="auto" mt="70px" borderRadius="10px" bg="white" mb="95px" color="black" p="25px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <Box>
        <Flex justifyContent="space-between">
            <Text fontSize="lg" as="b">LOGIN</Text>
            <Text color="red">SIGN UP</Text>
        </Flex>
        <Text fontSize="sm" color="grey">Get access to your account</Text>
    </Box>
    <Input mt="40px" borderBottom="1px solid black" placeholder="Email or Mobile Number"  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" />
    <Button mt="30px" w="100%" bg="red" color="white" _hover={{bg:"green"}}>CONTINUE</Button>
    <Flex justifyContent="center"  mt="30px">
        <Text mr="10px">OR Login Using</Text>
        <Flex justifyContent="space-between" gap="10px">
        <BsFacebook size="25px" color="navy"/>
        <FcGoogle size="25px"/>
        </Flex>
      
    </Flex>
    <Flex mt="40px" justifyContent="center" gap="5px">
        <Text>New to TechHunt?</Text>
        <Text color="red">Create Account</Text>
    </Flex>
    </Box>
  </Box>
)

}
export {Login}