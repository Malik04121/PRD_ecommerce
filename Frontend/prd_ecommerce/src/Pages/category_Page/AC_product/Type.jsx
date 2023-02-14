import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function ACType(){

return(
    <>
      <Box>
      <Flex mt="50px" bg="#1B1B1B">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Air Conditioner based on Type</Heading>
        </Flex> 
        <Flex w="80%" m="auto" mt="20px">
            <Box>
                <Link to="/product/AC/c Window">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671425819/Croma%20Assets/CMS/CAtegory/AC%20PCP%20-%20C46/UPDATED%20BANNERS/desktop/uses/PCP_AC_NC_uses_windowAC_13dec2022_dmtqle.png/mxw_1920,f_auto"/>
                </Link>
            </Box>
            <Box>
               <Link to="/product/AC/c Split">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671425818/Croma%20Assets/CMS/CAtegory/AC%20PCP%20-%20C46/UPDATED%20BANNERS/desktop/uses/PCP_AC_NC_uses_splitAC_13dec2022_rjkaqy.png/mxw_1920,f_auto"/>
               </Link>
            </Box>
            <Box>
               <Link to="/product/AC/c Hot&Cold AC">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671425818/Croma%20Assets/CMS/CAtegory/AC%20PCP%20-%20C46/UPDATED%20BANNERS/desktop/uses/PCP_AC_NC_uses_H_CAC_13dec2022_z3kejf.png/mxw_1920,f_auto"/>
               </Link>
            </Box>
        </Flex>
      </Box>
    </>
)

}
export {ACType}