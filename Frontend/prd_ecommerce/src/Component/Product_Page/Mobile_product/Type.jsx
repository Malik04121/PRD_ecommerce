import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react"


function MobileType(){

return(
    <>
      <Box>
      <Flex mt="50px" bg="#1B1B1B">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Best Selling Laptops</Heading>
        </Flex> 
        <Flex w="80%" m="auto" mt="20px">
            <Box>
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665484097/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Desktop/right%20type/3split_PCP_righttype_iphones_27sep2022_b0dg4d.png/mxw_1440,f_auto"/>
            </Box>
            <Box>
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665484097/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Desktop/right%20type/3split_PCP_righttype_androidphones_27sep2022_zfagid.png/mxw_1440,f_auto"/>
            </Box>
            <Box>
                <Image src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665999756/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/3split_PCP_righttype_featurephones_27sep2022_ublpxk.png/mxw_1440,f_auto"/>
            </Box>
        </Flex>
      </Box>
    </>
)

}
export {MobileType}