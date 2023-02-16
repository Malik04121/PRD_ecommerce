import { Box, Button, Flex, Grid, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Modal, Popover, Stack, Text, useDisclosure, VStack } from "@chakra-ui/react"
import {ChevronDownIcon, CloseIcon, HamburgerIcon, PhoneIcon, Search2Icon, SearchIcon} from "@chakra-ui/icons"
import {BiSearch} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {BsCart2} from "react-icons/bs"
import {FaUserAlt} from "react-icons/fa"
import logo from "../Assets/logo2_resize.png"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { Subnavbar } from "./Subnavbar"
import { AuthContext } from "./Context/appcontext"
import { useDispatch, useSelector } from "react-redux"
import { logoutSuccess } from "./Redux/authreducer/action"

const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Smith" },
  { id: 4, name: "Jackie Chan" }
];

function Navbar(){
  const [searchTerm, setSearchTerm] = useState("");
  const isAuth=useSelector((store)=>store.isAuth)
  const user=useSelector((store)=>store.user)
  const dispatch=useDispatch()


  const [isopen,setIsOpen]=useState(false)
  const [results, setResults] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { googleSignIn,user,logOut,userName} = useContext(AuthContext)

  
  const getsearchdata=()=>{
    // console.log(searchTerm)
    fetch(`https://red-houndstooth.cyclic.app/product`)
     .then(res=>res.json())
     .then(res=>setResults(res))
     .catch((err)=>(
        console.log(err)
     ))
  }
 console.log(isAuth,'coditin of isauth')
  const logouthandler=()=>{
    // isAuth=false
     dispatch(logoutSuccess())
      // console.log(isAuth,"2nd is auth")
  }

  const handleChange =(e)=> {
    // console.log("eloo")
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
{/* //new navbar */}

          <Flex gap="10%" bg="black" pt="15px" pb="15px" pr="3%" pl="6%" display={{base:"none",md:"flex"}} position="sticky" top="0px" zIndex="1000">
            <Flex gap="10%" w="60%"  >
               <Box h="60px" w="40%">
                <Link to="/"> <Image src={logo} h="100%" w="100%"/></Link>
               </Box>
               <Flex alignItems="center" color="white" w="50%">
                 {/* <Input placeholder="Search for anything" color="white" /> */}
                 
                 <InputGroup>
                 <Input placeholder="Search" type="text" value={searchTerm} onFocus={()=>setIsOpen(true)} onBlur={()=>setIsOpen(false)} onChange={handleChange}/>
                 <InputRightElement children={<SearchIcon color="gray.300" borderRadius="16px" />}/>
                 </InputGroup>
                 {isopen && (
        <Box position="fixed" top="60px" bg="#131212" color="white" w="350px" p="10px" >
          {results.map(item => (
            <Text key={item.id} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" mt="5px">{item.name}</Text>
          ))}
        </Box>
      )}
                 
               </Flex>
            </Flex>
            <Flex gap="8%" w="26%">
                <Flex alignItems="center" gap="7px">
                    <FiHeart color="white" size="1.2rem"/>
                    <Text color="white" fontSize="xl">Wishlist</Text>
                </Flex>
                <Flex alignItems="center" color="white" gap="7px">
                  <FaUserAlt size="1.3rem"/>
                  <Menu bg="black">
                    <MenuButton>{isAuth?user.username:"Login"}</MenuButton>
                    <MenuList bg="black" p="5px" ml="-50px"  >
                      {isAuth?
                      // <Box w="70%"  m="auto">
                      <Button  w="100%" bg="#353535" onClick={logouthandler}><Link to="/" >Logout</Link></Button>
                      // </Box>:
                      :
                      //  userName?
                      // <Button  w="100%" bg="#353535" onClick={logouthandler}><Link to="/" >Logout</Link></Button>
                      //  :
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
                    <Link to="/cart">
                    <Text fontSize="xl">Cart</Text>
                    </Link>
                </Flex>
            </Flex>
          </Flex>
         <Subnavbar />

          <Grid display={{base:"Grid",md:"none",lg:"none"}} column={2} bg="black" gap="10px" >
          <Flex justifyContent="space-between">
               <Box h="50px" w="40%">
                <Link to="/"> <Image src={logo} h="100%" w="100%"/></Link>
               </Box>

               {/* <Flex> */}
                 
                  
                  {/* <Button>Login</Button> */}
                  {/* <Text fontSize="xl">Login</Text> */}
                  <Flex gap="20px" pr="7%">
                <Flex alignItems="center" gap="7px">
                    <FiHeart color="white" size="1.2rem"/>
                    {/* <Text color="white" fontSize="xl">Wishlist</Text> */}
                </Flex>

                <Flex alignItems="center" color="white" gap="7px">
                    <Link to="/cart">
                    <BsCart2 size="1.3rem"/>

                    {/* <Text fontSize="xl">Cart</Text> */}
                    </Link>
                </Flex>

                <Flex alignItems="center" color="white" gap="7px">
                  <FaUserAlt size="1.3rem"/>
                  <Menu bg="black" >
                    <MenuButton>log</MenuButton>
                    {/* <MenuButton>{isAuth?user.displayName:userName?userName:"Login"}</MenuButton> */}
                    <MenuList bg="black" p="5px" ml="-30px"   >
                      {isAuth?
                      // <Box w="70%"  m="auto">
                      <Button  w="100%" bg="#353535" onClick={logouthandler}><Link to="/" >Logout</Link></Button>
                      // </Box>:
                      :
                      //  userName?
                      // <Button  w="100%" bg="#353535" onClick={logouthandler}><Link to="/" >Logout</Link></Button>
                      //  :
                      <Box>
                      <Box w="70%"  m="auto">
                      <Button  w="100%" bg="#353535" size="sm"><Link to="/login">SignIn</Link></Button>
                      </Box>
                      <Flex gap="10px" fontSize="sm">
                        <Text>New Customer?</Text>
                        <Text color="red"><Link to="/register">SignUp</Link></Text>
                      </Flex>
                      </Box>
                        }
                      
                    </MenuList>
                  </Menu>
                </Flex> 

            {/* </Flex> */}
                </Flex>
            </Flex>

            <Flex justifyContent="space-between" mb="10px">
            <IconButton color='white' size='md' bg='black' icon={isOpen ? <CloseIcon color="white"/> : <HamburgerIcon fontSize='40px' color="white"/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} ml="3%"/>
              {/* <HamburgerIcon fontSize='30px' color="white"/> */}
             

              <Flex alignItems="center" color="white" w="70%" mr="7%">
                 {/* <Input placeholder="Search for anything" color="white" /> */}
                 
                 <InputGroup>
                 <InputLeftElement children={<SearchIcon color="gray.300" borderRadius="16px" />}/>
                 <Input placeholder="Search" type="text" value={searchTerm} onFocus={()=>setIsOpen(true)} onBlur={()=>setIsOpen(false)} onChange={handleChange}/>
                 <InputRightElement children={<CloseIcon color="grey.300"/>} onClick={()=>{setIsOpen(false); setSearchTerm("")}}/>
                 </InputGroup>
                 
                 
              
              </Flex>
            </Flex>
           

            {/* <Text>Column 2</Text> */}
          </Grid>

          {isopen && (
        <Box display={{md:"none"}} bg="#131212" color="white" w="70%" p="10px" alignContent="flex-end" ml="22%" >
          {results.map(item => (
            <Text key={item.id} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" mt="5px">{item.name}</Text>
          ))}
        </Box>
      )}

          {isOpen?(
                 <Box bg="#353535" w="50%">
                    <Stack color="white" as={"nav"} p="20px" >
                      <Link to="/product/laptop"><Text>Mobiles & Tablets</Text></Link>
                      <Link to="/product/laptop"><Text>Television</Text></Link>
                      <Link to="/product/laptop"><Text>Laptop</Text></Link>
                      <Link to="/product/laptop"><Text>Air Conditioner</Text></Link>
                      <Link to="/product/laptop"><Text>Wearable</Text></Link>
                    </Stack>
                 </Box>
              ):null}
          {/* <Subnavbar/> */}
        </>
    )

}
export {Navbar}