import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"



function BrandCrousel(){
const brand=[
    {
      src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664867038/Croma%20Assets/CMS/CAtegory/Televisions/DESIGN_OCT/Desktop/shop%20by%20brand/4split_TVPCP_shopbybrand_oneplus_26sep2022_wsnlmn.png/mxw_1440,f_auto",
      name:"OnePlus"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1674033793/Croma%20Assets/CMS/CAtegory/Televisions/180123/4split_TVPCP_shopbybrand_samsung_17jan2023_g4gxiz.png/mxw_1440,f_auto",
        name:"Samsung"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664867039/Croma%20Assets/CMS/CAtegory/Televisions/DESIGN_OCT/Desktop/shop%20by%20brand/4split_TVPCP_shopbybrand_sony_26sep2022_nttkvj.png/mxw_1920,f_auto",
        name:"Sony"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664867039/Croma%20Assets/CMS/CAtegory/Televisions/DESIGN_OCT/Desktop/shop%20by%20brand/4split_TVPCP_shopbybrand_Mi_26sep2022_e8h5lg.png/mxw_1170,f_auto",
        name:"Mi"
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
                    <Link to={`/product/Mobile/b ${ele.name}`}>
                    <Image src={ele.src} borderRadius="10px" />
                    </Link>
                ))}
                {/* <Text>Appe</Text> */}
                {/* <Text>Samsung</Text> */}
            {/* </Flex> */}

        </SimpleGrid>
    </Box>
)

}
export {BrandCrousel}
