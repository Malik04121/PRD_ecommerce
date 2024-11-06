import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function MobileType(){

return(
    <>
      <Box>
      <Flex mt="50px" bg="#1B1B1B">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Mobiles Based on Type</Heading>
        </Flex> 
        <Flex w="80%" m="auto" mt="20px">
            <Box>
                <Link to="/product/Mobile/c iPhone">
                <Image src="https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone-type.webp"/>
                </Link>
            </Box>
            <Box>
               <Link to="/product/Mobile/c Android">
                <Image src="https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone-type.webp"/>
               </Link>
            </Box>
            <Box>
                <Image src="https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone-type.webp"/>
            </Box>
        </Flex>
      </Box>
    </>
)

}
export {MobileType}