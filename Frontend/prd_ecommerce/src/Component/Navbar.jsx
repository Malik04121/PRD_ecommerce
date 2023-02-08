import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Modal, Popover, Text, VStack } from "@chakra-ui/react"
import {ChevronDownIcon, PhoneIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons"
import {BiSearch} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {BsCart2} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import logo from "../Assets/logo2_resize.png"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { Subnavbar } from "./Subnavbar"
import { AuthContext } from "./Context/appcontext"

const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Smith" },
  { id: 4, name: "Jackie Chan" }
];

function Navbar(){
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen,setIsOpen]=useState(false)
  const [results, setResults] = useState([]);
  const { googleSignIn,user,logOut,userName} = useContext(AuthContext)

  console.log(userName,"user is this")
  if(user==undefined){
    console.log("udefined user")
  }
  

  const getsearchdata=()=>{
    console.log(searchTerm)
    fetch(`http://localhost:3200/product`)
     .then(res=>res.json())
     .then(res=>setResults(res))
     .catch((err)=>(
        console.log(err)
     ))
  }

  const logouthandler=()=>{
    logOut()
  }

  const handleChange =(e)=> {
    console.log("eloo")
    setSearchTerm(e.target.value);
    getsearchdata()
    const filteredResults = data.filter(item =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
    setIsOpen(true)
  };

    return(
        <>
          <Flex  h="80px" alignItems="center" pl="100px" pr="100px" bg="black" justifyContent="space-between" position="sticky" top="0px" zIndex="1000">
            <Flex gap="40px">
               <Box h="60px" w="200px">
                <Link to="/"> <Image src={logo} h="100%" w="100%"/></Link>
               </Box>
               <Flex alignItems="center" color="white" w="350px">
                 {/* <Input placeholder="Search for anything" color="white" /> */}
                 
                 <InputGroup>
                 <Input placeholder="Search" type="text" value={searchTerm} onFocus={()=>setIsOpen(true)} onBlur={()=>setIsOpen(false)} onChange={handleChange}/>
                 <InputRightElement children={<SearchIcon color="gray.300" borderRadius="16px" />}/>
                 </InputGroup>
                 {isOpen && (
        <Box position="fixed" top="60px" bg="#131212" color="white" w="350px" p="10px" >
          {results.map(item => (
            <Text key={item.id} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" mt="5px">{item.name}</Text>
          ))}
        </Box>
      )}
                 
                 {/* {/* <Menu>
        {/* <MenuButton > */}
          {/* <Input  type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search"  color="white" bg="yellow" /> */}
          {/* </MenuButton> */}
        {/* <MenuList> */}
          {/* {results.map(item => ( */}
            {/* // <MenuItem key={item.id} >{item.name}</MenuItem> */}
          {/* // ))} */}
        {/* </MenuList> */}
      {/* </Menu> */}  
                 
                 {/* <Flex h="40px" w="30px"  alignItems="center" bg="black" border="1px solid white"><BiSearch fontSize="50px"/></Flex> */}
               </Flex>
            </Flex>
            
            <Flex gap="30px">
                <Flex alignItems="center" gap="7px">
                    <FiHeart color="white" size="1.2rem"/>
                    <Text color="white" fontSize="xl">Wishlist</Text>
                </Flex>
                <Flex alignItems="center" color="white" gap="7px">
                  <FaUserAlt size="1.3rem"/>
                  
                  <Menu bg="black">
                    <MenuButton>{user?user.displayName:userName?userName:"Login"}</MenuButton>
                    <MenuList bg="black" p="5px" ml="-50px"  >
                      {user?
                      // <Box w="70%"  m="auto">
                      <Button  w="100%" bg="#353535" onClick={logouthandler}><Link to="/" >Logout</Link></Button>
                      // </Box>:
                      :
                       userName?
                      <Button  w="100%" bg="#353535" onClick={logouthandler}><Link to="/" >Logout</Link></Button>
                       :
                      <Box>
                      <Box w="70%"  m="auto">
                      <Button  w="100%" bg="#353535"><Link to="/login">SignIn</Link></Button>
                      </Box>
                      <Flex gap="10px">
                        <Text>New Customer?</Text>
                        <Text color="red"><Link to="/register">SignUp</Link></Text>
                      </Flex>
                      </Box>
                        }
                      
                    </MenuList>
                  </Menu>  
                  
                  {/* <Button>Login</Button> */}
                  {/* <Text fontSize="xl">Login</Text> */}
                </Flex>
                <Flex alignItems="center" color="white" gap="7px">
                    <BsCart2 size="1.3rem"/>
                    <Text fontSize="xl">Cart</Text>
                </Flex>
            </Flex>
          </Flex>
          <Subnavbar/>
        </>
    )

}
export {Navbar}