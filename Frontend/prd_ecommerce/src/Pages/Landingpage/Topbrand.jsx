import { Image } from "@chakra-ui/image"
import { Box, Divider, Flex, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/layout"

function TopBrand(){
let brand=[
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1654848447/Croma%20Assets/CMS/Brand%20Logos/apple_xmf55t.png/mxw_1440,f_auto",
        name:"Apple"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652260853/Croma%20Assets/CMS/Brand%20Logos/samsung_tmmzob.png/mxw_1440,f_auto",
        name:""
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652260851/Croma%20Assets/CMS/Brand%20Logos/hp_co1yuv.png/mxw_1440,f_auto",
        name:""
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1654848446/Croma%20Assets/CMS/Brand%20Logos/dell_nagdmt.png/mxw_1440,f_auto",
        name:""
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652260853/Croma%20Assets/CMS/Brand%20Logos/vivo_sqsnbm.png/mxw_1440,f_auto",
        name:""
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652260851/Croma%20Assets/CMS/Brand%20Logos/jbl_prjtcv.png/mxw_1440,f_auto",
        name:""
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652260851/Croma%20Assets/CMS/Brand%20Logos/Lenovo_dxvgyb.png/mxw_1440,f_auto",
        name:"Lenovo"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652260852/Croma%20Assets/CMS/Brand%20Logos/mi_dtxgef.png/mxw_1440,f_auto",
        name:"Xiomi"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1654848447/Croma%20Assets/CMS/Brand%20Logos/Lg_duygz8.png/mxw_1440,f_auto",
        name:"LG"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1654848448/Croma%20Assets/CMS/Brand%20Logos/sony_fa0aon.png/mxw_1440,f_auto",
        name:"Sony"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1652260853/Croma%20Assets/CMS/Brand%20Logos/panasonic_g5ubsn.png/mxw_1440,f_auto",
        name:"Panasonic"
    },
    {
        src:"",
        name:""
    },

]


return(
    <>
       <Flex mt="50px">
        <Box w="15%"  ml="30px" mr="20px" >
         <Divider orientation="horizontal" borderColor="#33FF83" borderWidth="1.5px" mt="8px" />
         <Divider orientation="horizontal" borderColor="#33FF83" mt="5px" borderWidth="1.5px"/>
        </Box>
         <Heading size="md" color="white" as="h6">Top Brand</Heading>
        </Flex> 
        <SimpleGrid columns={6}  gap="0px" mr="100px" ml="100px" mt="30px">
            {/* <Flex> */}
                {brand.map((ele)=>(
                    <Image src={ele.src}  />
                ))}
                {/* <Text>Appe</Text> */}
                {/* <Text>Samsung</Text> */}
            {/* </Flex> */}

        </SimpleGrid>
    </>
)

}
export {TopBrand}