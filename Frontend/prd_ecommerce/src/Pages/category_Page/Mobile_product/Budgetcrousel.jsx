import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"


function BudegetCrousel(){

   const price=[
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone_below5000.webp",
        min:0,
        max:30000
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone_below5000.webp",
        min:30001,
        max:50000
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone_below5000.webp",
        min:50001,
        max:75000
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone_below5000.webp",
        min:75001,
        max:100000
    },
    {
        src:"https://techhunt-project-assets.s3.ap-south-1.amazonaws.com/product-page/phone_below5000.webp",
        min:100001,
        max:200000
    }
   ]

    return (
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
              {price.map((ele)=>(
                  <Image src={ele.src} borderRadius="10px" />
              ))}
              {/* <Text>Appe</Text> */}
              {/* <Text>Samsung</Text> */}
          {/* </Flex> */}

        </SimpleGrid>
       </Box>
    )

}
export {BudegetCrousel}