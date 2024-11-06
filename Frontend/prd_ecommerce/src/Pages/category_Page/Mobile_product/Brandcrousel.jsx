import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"



function BrandCrousel(){
const brand=[
    {
              src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/mi_brand_phone.webp",
     
      name:"Apple"
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/mi_brand_phone.webp",
        name:"Mi"
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/mi_brand_phone.webp",

        name:"Samsung"
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/mi_brand_phone.webp",

                name:"Lenovo"
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/mi_brand_phone.webp",

        name:"Acer"
    },
    {

        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/mi_brand_phone.webp",

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
         <Heading size="md" color="white" as="h6">Select Your Range</Heading>
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
