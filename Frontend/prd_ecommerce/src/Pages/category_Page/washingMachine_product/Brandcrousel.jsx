import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"



function BrandCrousel(){
const brand=[
    {
      src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666255900/Croma%20Assets/CMS/CAtegory/Washing%20Machine%20-%20C48/New%20Theme/Desktop/BRAND%20WAGON/D_4split_289x256_WM_samsung_12OCT2022_w0fqn5.png/mxw_1920,f_auto",
      name:"Samsung"
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1666255900/Croma%20Assets/CMS/CAtegory/Washing%20Machine%20-%20C48/New%20Theme/Desktop/BRAND%20WAGON/D_4split_289x256_WM_whirlpool_12OCT2022_fa7rze.png/mxw_1920,f_auto",
        name:"Whirlpool"
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
