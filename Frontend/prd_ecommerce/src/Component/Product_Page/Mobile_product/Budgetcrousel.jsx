import { Box, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"


function BudegetCrousel(){

   const price=[
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995685/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%201/Budget/pcp_budget_1_21sept2022_q1pfov.png/mxw_1440,f_auto",
        min:0,
        max:30000
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995685/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%201/Budget/pcp_budget_2_21sept2022_p8vvgl.png/mxw_1440,f_auto",
        min:30001,
        max:50000
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995685/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%201/Budget/pcp_budget_3_21sept2022_xurvxu.png/mxw_1440,f_auto",
        min:50001,
        max:75000
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663995685/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/UAT%20TESTING%20BANNER/Desktop/PART%201/Budget/pcp_budget_4_21sept2022_qls4qi.png/mxw_1440,f_auto",
        min:75001,
        max:100000
    },
    {
        src:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1671022684/Croma%20Assets/CMS/CAtegory/Laptop%20PCP%2020/4_hdxhmw.png/mxw_1440,f_auto",
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