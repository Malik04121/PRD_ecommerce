import { Box, Flex, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react"
import {ChevronDownIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons"
import {BiSearch} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {BsCart2} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import logo from "../Assets/logo2_resize.png"
import { useState } from "react"

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

  const handleChange =(e)=> {
    console.log("eloo")
    setSearchTerm(e.target.value);
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
    setIsOpen(true)
  };

    return(
        <>
          <Flex  h="80px" alignItems="center" pl="100px" pr="100px" bg="black" justifyContent="space-between" position="sticky">
            <Flex gap="40px">
               <Box h="60px" w="200px">
                 <Image src={logo} h="100%" w="100%"/>
               </Box>
               <Flex alignItems="center" color="white" w="330px">
                 {/* <Input placeholder="Search for anything" color="white" /> */}
                 
                 <Input placeholder="Search" type="text" value={searchTerm} onFocus={()=>setIsOpen(true)} onBlur={()=>setIsOpen(false)} onChange={handleChange}/>
                 {isOpen && (
        <Box position="fixed" top="60px" bg="red" color="yellow" w="300px" zIndex={"999"}  >
          {results.map(item => (
            <Text key={item.id}>{item.name}</Text>
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