import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text,Form, FormLabel, Toast, useToast } from "@chakra-ui/react"
// import { Box, Flex, Text } from "@chakra-ui/layout"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, loginError, loginRequest, loginSuccess } from '../../Component/Redux/authreducer/action';


import { AuthContext } from "../../Component/Context/appcontext";
import axios from "axios"
import { useContext, useState } from "react"
import { setUserId } from "firebase/analytics"
import { login } from "../../Component/Redux/authreducer/action"
import {googleSignIn, signInWithGoogle} from "../../Component/Firebase_config"

function AdminLogin(){
  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const isAuth=useSelector((store)=>store.isAuth)

  const toast=useToast()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { userLogin,setId,setToken} = useContext(AuthContext)
  
 
  const submitHandler=()=>{
      const payload={
        username,
        password
      }
        dispatch(adminLogin(payload)).then((res)=>{
          toast({
            position : 'top',
            colorScheme : 'green', 
            status : "success",
            title:"Login Successfuly"
          })
          navigate("/admin")
        })

       
    };

return(
  <Box border="1px solid black"  bg="black" pb="30px">  
  <Box w={{base:"70%",md:"50%",lg:"30%"}} m="auto" mt={{base:"30px",md:"50px",lg:"70px"}} borderRadius="10px" bg="white" mb="95px" color="black" p="25px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <Box>
        <Flex justifyContent="center" >
            <Text fontSize="lg" as="b">ADMIN LOGIN</Text>
        </Flex>
    </Box>
    <Input mt="40px" borderBottom="1px solid black" placeholder="UserName " onChange={(e)=>setUserName(e.target.value)}  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" />
    <Input mt="10px" borderBottom="1px solid black" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" />
    <Button mt="30px" w="100%" bg="red" color="white" _hover={{bg:"green"}} onClick={submitHandler}>CONTINUE</Button>
        {/* <FcGoogle size="25px"/> */}
   
    </Box>
  </Box>
)

}
export {AdminLogin}