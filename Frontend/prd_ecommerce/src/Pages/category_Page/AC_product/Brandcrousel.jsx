import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"



function BrandCrousel(){
const brand=[
    {
      src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665655835/Croma%20Assets/CMS/CAtegory/AC%20PCP%20-%20C46/New%20Theme/Desk/shop%20by%20brand/ACPCP_brands_voltas_26sept2022_km86ih.png/mxw_1920,f_auto",
      name:"Voltas"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665655845/Croma%20Assets/CMS/CAtegory/AC%20PCP%20-%20C46/New%20Theme/Desk/shop%20by%20brand/ACPCP_brands_samsung_26sept2022_jzvyru.png/mxw_1920,f_auto",
        name:"Samsung"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664867039/Croma%20Assets/CMS/CAtegory/Televisions/DESIGN_OCT/Desktop/shop%20by%20brand/4split_TVPCP_shopbybrand_sony_26sep2022_nttkvj.png/mxw_1920,f_auto",
        name:"Sony"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1665655844/Croma%20Assets/CMS/CAtegory/AC%20PCP%20-%20C46/New%20Theme/Desk/shop%20by%20brand/ACPCP_brands_lg_26sept2022_zqtwrq.png/mxw_1920,f_auto",
        name:"LG"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671425817/Croma%20Assets/CMS/CAtegory/AC%20PCP%20-%20C46/UPDATED%20BANNERS/desktop/brands/PCP_AC_NC_brands_bluestar_13dec2022_ycqsng.png/mxw_1920,f_auto",
        name:"BlueStar"
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
                    <Link to={`/product/AC/b ${ele.name}`}>
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
