import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"



function BrandCrousel(){
const brand=[
    {
      src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666000242/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_vivo_27sep2022_knaawj.png/mxw_1440,f_auto",
      name:"apple"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666000242/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_mi_27sep2022_tpwcdb.png/mxw_1440,f_auto",
        name:"xiomi"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666000241/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_oneplus_27sep2022_bdlvsd.png/mxw_1440,f_auto",
        name:"oneplus"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_lenovo_29nov2022_sajwxt.png/mxw_1440,f_auto",
        name:"Lenovo"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669725087/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_acer_29nov2022_yc9687.png/mxw_1440,f_auto",
        name:"Acer"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_dell_29nov2022_blrx8n.png/mxw_1440,f_auto",
        name:"Dell"
    }
]



return(
    <Box>
          <Flex mt="50px">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Top Brand</Heading>
        </Flex> 
        <SimpleGrid columns={3}  gap="20px" w="80%" m="auto" mt="30px">
            {/* <Flex> */}
                {brand.map((ele)=>(
                    <Image src={ele.src} borderRadius="10px" />
                ))}
                {/* <Text>Appe</Text> */}
                {/* <Text>Samsung</Text> */}
            {/* </Flex> */}

        </SimpleGrid>
    </Box>
)

}
export {BrandCrousel}
