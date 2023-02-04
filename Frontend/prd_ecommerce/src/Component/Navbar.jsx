import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Modal, Popover, Text, VStack } from "@chakra-ui/react"
import {ChevronDownIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons"
import {BiSearch} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {BsCart2} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import logo from "../Assets/logo2_resize.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Subnavbar } from "./Subnavbar"

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

  const getsearchdata=()=>{
    console.log(searchTerm)
    fetch(`http://localhost:3200/product`)
     .then(res=>res.json())
     .then(res=>setResults(res))
     .catch((err)=>(
        console.log(err)
     ))
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
               <Flex alignItems="center" color="white" w="330px">
                 {/* <Input placeholder="Search for anything" color="white" /> */}
                 
                 <Input placeholder="Search" type="text" value={searchTerm} onFocus={()=>setIsOpen(true)} onBlur={()=>setIsOpen(false)} onChange={handleChange}/>
                 {isOpen && (
        <Box position="fixed" top="60px" bg="#131212" color="white" w="300px" p="10px" >
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
                 
                 <Flex h="40px" w="30px"  alignItems="center"><Button bg="red" ><BiSearch fontSize="50px"/></Button></Flex>
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
                    <MenuButton>Login</MenuButton>
                    <MenuList bg="black" p="5px" ml="-50px" >
                      <Button bg="red"><Link to="/login">SignIn</Link></Button>
                      <Flex gap="10px">
                        <Text>New Customer?</Text>
                        <Text color="red"><Link to="/register">SignUp</Link></Text>
                      </Flex>
                      
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