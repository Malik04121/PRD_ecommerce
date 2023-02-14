import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function WMType(){

return(
    <>
      <Box>
      <Flex mt="50px" bg="#1B1B1B">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Washing Machine Based on Type</Heading>
        </Flex> 
        <Flex w="80%" m="auto" mt="20px">
            <Box>
                <Link to="/product/Washing Machine/c Semi Automatic">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666699008/Croma%20Assets/CMS/CAtegory/Washing%20Machine%20-%20C48/New%20Theme/Desktop/RIGHT%20TYPE%20DESKTOP/PNGS/Group_129_b4lren.png/mxw_1920,f_auto"/>
                </Link>
            </Box>
            <Box>
               <Link to="/product/Washing Machine/c Front Loaded">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1674034569/Croma%20Assets/CMS/CAtegory/48/180123/D_4split_righttype_WM_fl_12jan2023_e01m80.png/mxw_1920,f_auto"/>
               </Link>
            </Box>
            <Box>
               <Link to="/product/AC/c Semi Automatic">
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666699007/Croma%20Assets/CMS/CAtegory/Washing%20Machine%20-%20C48/New%20Theme/Desktop/RIGHT%20TYPE%20DESKTOP/PNGS/Group_128_b9vb3n.png/mxw_1920,f_auto"/>
               </Link>
            </Box>
        </Flex>
      </Box>
    </>
)

}
export {WMType}