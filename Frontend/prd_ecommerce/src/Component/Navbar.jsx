// import { Box, Flex, Image, InputGroup, Text, VStack } from "@chakra-ui/react"
// function Navbar(){

//     return(
//         <>
//           <Flex>
//              <Box>
//                 <Image src=""/>
//              </Box>
//              <VStack className="inputBox">
//             <InputGroup>
//               {/* <Input value={searchText} className='searchBox' placeholder='Search for Products' onChange={(e) => changeHandler(e)} />
//                             <InputRightElement children={<SearchIcon color='black.500' />} /> */}
//               <Autocomplete
//                 className="searchBox"
//                 options={options}
//                 result={[]}
//                 placeholder="Search for Product"
//                 onChange={(e) => changeHandler(e, options)}
//                 pl="10px"
//                 h="40px"
//                 w="300px"
//                 outline="1px solid grey"
//                 borderRadius="10px"
//               />
//               <InputRightElement
//                   pointerEvents='none'
//                   bg="#008BCF"
//                   borderRightRadius="20%"
//                   children={<Search2Icon color='white'  />}
//               />
//             {/* //   <InputRightElement children={<SearchIcon color="black.500" bg="blue" />} /> */}
//             </InputGroup>
//           </VStack>
//             <Flex>
//                 <Box>
//                     <Text>Wishlist</Text>
//                 </Box>
//                 <Box>
//                     <Text>User</Text>
//                 </Box>
//                 <Box>
//                     <Text>Cart</Text>
//                 </Box>
//             </Flex>
//           </Flex>
//         </>
//     )

// }
// export {Navbar}