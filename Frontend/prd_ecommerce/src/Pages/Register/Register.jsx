import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text,Form, FormLabel, Toast, useToast } from "@chakra-ui/react"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import {auth,provider} from "../../Pages/Firebase_config"
// import { signInWithPopup } from "firebase/auth"
// import { Form } from "react-router-dom"
import { AuthContext } from "../../Component/Context/appcontext";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { login, register, userRegister } from "../../Component/Redux/authreducer/action"


const formdata={
    "username":"",
    "email":"",
    "password":"",
    "mobile":""
}
function Register(){
    const [userdata,setUserdata]=useState(formdata)
    const registerData=useSelector((store)=>store.authReducer.msg)
    const registerStatus=useSelector((store)=>store.authReducer.status)
    
    const toast=useToast()
    const navigate=useNavigate()
    const { googleSignIn} = useContext(AuthContext)
    const dispatch=useDispatch()

    const googleauth=async(e)=>{
        e.preventDefault();
        try {
       const user= await googleSignIn();
       console.log("from signup",user);
       if(user.user.email!==undefined){
        let login_payload={
                email:user.user.email,
            password:`${user.user.displayName.split(" ")[0]}@byme`
               }
        const payload={
          username:user.user.displayName,
          email:user.user.email,
          password:`${user.user.displayName.split(" ")[0]}@byme`
        }
        dispatch(userRegister(payload))
        // axios.post("https://red-houndstooth.cyclic.app/user/signup",payload).then((res)=>{
        //   console.log(res.data)
        //     if(res.status===409){
        //      const  login_payload={
        //       email:user.user.email,
        //   password:`${user.user.displayName.split(" ")[0]}@byme`
        //      }
        //      dispatch(login(login_payload))
        //     }
        //   })
      }
      
          
        } catch (error) {
          console.log(error.message);
        }
      }


const RegisterHandler=(e)=>{
    e.preventDefault()
    dispatch(userRegister(userdata))
    // fetch("https://red-houndstooth.cyclic.app/user/signup",{
    //     method:"POST",
    //     body:JSON.stringify(userdata),
    //     headers:{
    //         "Content-type":"application/json"
    //     }
    // })
    // .then(res=>res.json())
    // .then((res)=>{
    //       const payload={
    //         email:userdata.email,
    //         password:userdata.password
    //       }
    //         dispatch(login(payload)).then((res)=>{
    //           toast({
    //             position : 'top',
    //             colorScheme : 'green', 
    //             status : "success",
    //             title:"register Successfuly"
    //           })
    //           navigate("/")
    //         })
    // })
    // .catch(err=>console.log(err))
}
const inputhandler=(e)=>{
    const {name,value}=e.target
    setUserdata({...userdata,[name]:value})
}

useEffect(()=>{
   if(registerStatus==409){
                toast({
                  position : 'top',
                  colorScheme : 'red', 
                  status : "success",
                  title:"User Already Registered please login"
                })
                navigate("/login")
   }
   if(registerStatus==200){
    const loginPayload={
      email:userdata.email,
      password:userdata.password
    }
    dispatch(login(loginPayload))
    toast({
      position : 'top',
      colorScheme : 'green', 
      status : "success",
      title:"User Registered Successfully"
    })
    navigate("/")
   }
     console.log(registerStatus,"register status is this")
},[registerStatus])

return(
    <>
       <Box border="1px solid black"  bg="black" pb="30px">  
  <Box w={{base:"70%",md:"50%",lg:"30%"}} m="auto" mt={{base:"30px",md:"50px",lg:"70px"}} borderRadius="10px" bg="white" mb="95px" color="black" p="25px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <Box>
        <Flex justifyContent="space-between">
            <Text fontSize="lg" as="b">SIGN UP</Text>
        </Flex>
        <Text fontSize="sm" color="grey">With your Emai ID or Mobile Number to get started</Text>
    </Box>
    <form onSubmit={RegisterHandler}>
    <Input type="text" mt="30px" name="username"  borderBottom="1px solid black" placeholder="User Name"  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" value={userdata.username} onChange={inputhandler} />
    <Input mt="10px" type="email" name="email" borderBottom="1px solid black" placeholder="Email"  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" value={userdata.email} onChange={inputhandler} />
    <Input mt="10px" type="number" name="phone" borderBottom="1px solid black" placeholder="Phone Number"  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden" 
    value={userdata.phone} onChange={inputhandler} />
    <Input mt="10px" type="password" name="password" borderBottom="1px solid black" placeholder="Password"  borderRadius="none" borderTopStyle="hidden"borderRightStyle="hidden" borderLeftStyle="hidden"
    value={userdata.password} onChange={inputhandler}  />
    <Text mt="20px">By continuing you agree to TechHunt Terms of Use and Privacy Policy</Text>
    <Input type="Submit" placeholder="Signup" mt="30px" w="100%" bg="red" color="white" _hover={{bg:"green"}} />
   

    </form>
   <Flex justifyContent="center"  mt="30px">
        <Text mr="10px">OR Login Using</Text>
        <Flex justifyContent="space-between" gap="10px">
        <BsFacebook size="25px" color="navy"/>
        <FcGoogle size="25px" onClick={googleauth}/>
        </Flex>
      
    </Flex>
    <Flex mt="20px" justifyContent="center" gap="5px">
        <Text>Existing User?</Text>
        <Link to="/login">
        <Text color="red">Login</Text>
        </Link>
    </Flex>
    </Box>
  </Box>
    </>
)

}
export {Register}