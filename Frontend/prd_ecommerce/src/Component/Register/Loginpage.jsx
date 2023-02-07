import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text,Form, FormLabel, Toast, useToast } from "@chakra-ui/react"
// import { Box, Flex, Text } from "@chakra-ui/layout"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from "../Context/appcontext";
import axios from "axios"
import { useContext } from "react"

function Login(){
  const toast=useToast()
  const navigate=useNavigate()
  const { googleSignIn} = useContext(AuthContext)

  const googleauth=async(e)=>{
    e.preventDefault();
    try {
   const user= await googleSignIn();
   console.log("from signup",user);
   if(user.user.email!==undefined){
    const payload={
      username:user.user.displayName,
      email:user.user.email,
      password:`${user.user.displayName.split(" ")[0]}@byme`
    }
    axios.post("https://red-houndstooth.cyclic.app/user/signup",payload).then((res)=>{
      console.log(res.data)
        if(res.status===200){
         const  login_payload={
          email:user.user.email,
      password:`${user.user.displayName.split(" ")[0]}@byme`
         }
          axios.post("https://red-houndstooth.cyclic.app/user/login",login_payload).then((res)=>{
            
          })
        }
      })
  }
  navigate("/");
   toast({
      position : 'top',
      colorScheme : 'green', 
      status : "success",
      title:"Login sucessfully "
  })
      
    } catch (error) {
      console.log(error.message);
    }
  }

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
    <Input mt="40px" borderBottom="1px solid black" placeholder="Email "  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" />
    <Input mt="10px" borderBottom="1px solid black" placeholder="Password"  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" />
    <Button mt="30px" w="100%" bg="red" color="white" _hover={{bg:"green"}}>CONTINUE</Button>
    <Button mt="10px" w="100%" bg="navy" color="white" _hover={{bg:"green"}}>Login Using OTP</Button>
        {/* <FcGoogle size="25px"/> */}
    <Button mt="10px" w="100%" bg="navy" color="white" _hover={{bg:"green"}} onClick={googleauth}><FcGoogle size="25px"/> Login Using Google</Button>
    {/* <Flex justifyContent="center"  mt="30px">
        <Text mr="10px">OR Login Using</Text>
        <Flex justifyContent="space-between" gap="10px">
        {/* <BsFacebook size="25px" color="navy"/> */}
        {/* <FcGoogle size="25px"/> */}
        {/* </Flex> */} 
      
    {/* </Flex> */}
    <Flex mt="40px" justifyContent="center" gap="5px">
        <Text>New to TechHunt?</Text>
        <Text color="red"><Link to="/register"> Create Account</Link></Text>
    </Flex>
    </Box>
  </Box>
)

}
export {Login}