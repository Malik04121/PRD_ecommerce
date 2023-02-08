import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, Text,Form, FormLabel, Toast, useToast } from "@chakra-ui/react"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
// import {auth,provider} from "../../Pages/Firebase_config"
// import { signInWithPopup } from "firebase/auth"
// import { Form } from "react-router-dom"
import { AuthContext } from "../../Component/Context/appcontext";
import axios from "axios"

const formdata={
    "username":"",
    "email":"",
    "password":"",
    "mobile":""
}
function Register(){
    const [userdata,setUserdata]=useState(formdata)
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
             axios.post("https://redhoundstooth.cyclic.app/user/login",login_payload).then((res)=>{
                
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


const RegisterHandler=(e)=>{
    e.preventDefault()
    fetch("https://red-houndstooth.cyclic.app/user/signup",{
        method:"POST",
        body:JSON.stringify(userdata),
        // mode: 'cors',
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res)
        toast({
            title:res.msg
          })
          if(res.status===200){
            navigate("/login")
          }
        //   else {
        //     toast({
        //       title:"Please Signup with correct credentials"
        //     })
        //   }
    })
    .catch(err=>console.log(err))
}
const inputhandler=(e)=>{
    const {name,value}=e.target
    setUserdata({...userdata,[name]:value})
}
// const googleauth=()=>{
//      alert("google")
//      signInWithPopup(auth,provider).then((data)=>{

//      })
// }


return(
    <>
       <Box border="1px solid black"  bg="black" >  
  <Box w="30%" m="auto" mt="70px" borderRadius="10px" bg="white" mb="95px" color="black" p="25px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
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
        <Text color="red">Login</Text>
    </Flex>
    </Box>
  </Box>
    </>
)

}
export {Register}