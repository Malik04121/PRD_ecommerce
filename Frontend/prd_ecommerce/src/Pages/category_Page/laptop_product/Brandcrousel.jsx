import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"



function BrandCrousel(){
const brand=[
    {
      src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669725087/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_apple_29nov2022_pmysiv.png/mxw_1440,f_auto",
      name:"apple"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_HP_29nov2022_sgadrn.png/mxw_1440,f_auto",
        name:"Hp"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669725088/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/2911/pcp_hoponthebrand_asus_29nov2022_r7llux.png/mxw_1440,f_auto",
        name:"Asus"
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
                    <Link to={`/product/laptop/b ${ele.name}`}>
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
