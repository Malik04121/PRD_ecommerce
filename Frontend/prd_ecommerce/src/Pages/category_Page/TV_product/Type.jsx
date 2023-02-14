import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function TVType(){

return(
    <>
      <Box>
      <Flex mt="50px" bg="#1B1B1B">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Television Based on Screen Quality</Heading>
        </Flex> 
        <Flex w="80%" m="auto" mt="20px">
            <Box>
                <Link to="/product/TV/c HD">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671637355/Croma%20Assets/CMS/CAtegory/Televisions/2112/desk/resolution/PCP_TV_NC_resolution_HDready_14dec2022_vpsthy.png/mxw_1440,f_auto"/>
                </Link>
            </Box>
            <Box>
               <Link to="/product/TV/c FullHD">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671637355/Croma%20Assets/CMS/CAtegory/Televisions/2112/desk/resolution/PCP_TV_NC_resolution_FullHD_14dec2022_gmitfc.png/mxw_1440,f_auto"/>
               </Link>
            </Box>
            <Box>
               <Link to="/product/TV/c FullHD">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671637355/Croma%20Assets/CMS/CAtegory/Televisions/2112/desk/resolution/PCP_TV_NC_resolution_4kultra_14dec2022_sesvjp.png/mxw_1440,f_auto"/>
               </Link>
            </Box>
        </Flex>
      </Box>
    </>
)

}
export {TVType}