import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function OsCraousel(){

return(
    <>
      <Box>
      <Flex mt={{base:"20px",md:"30px",lg:"50px"}} bg="#1B1B1B">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Best Selling Laptops</Heading>
        </Flex> 
        <Flex w={{base:"92%",md:"85%",lg:"70%"}} m="auto" mt="20px" >
            <Box>
                <Link to="/product/laptop/c Windows">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664865071/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Last%20Update/Desktop/os/pcp_macos_21sept2022_kdib6r.png/mxw_1440,f_auto"/>
                </Link>
            </Box>
            <Box>
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664865071/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Last%20Update/Desktop/os/pcp_windowsos_21sept2022_hc73th.png/mxw_1440,f_auto"/>
            </Box>
            <Box>
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664865071/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Last%20Update/Desktop/os/pcp_chromebookos_21sept2022_thsgto.png/mxw_1440,f_auto"/>
            </Box>
        </Flex>
      </Box>
    </>
)

}
export {OsCraousel}