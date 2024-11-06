import { Image } from "@chakra-ui/image"
import { Box, Divider, Flex, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/layout"
import { Link } from "react-router-dom"

function TopBrand(){
let brand=[
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Apple"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Samsung"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Hp"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Dell"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Vivo"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"JBL"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Lenovo"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Mi"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"LG"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
        name:"Sony"
    },
    {
        src:"https://rameshcorporation.com/wp-content/uploads/2022/08/mxw_2048f_auto-5-1.png",
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
        <SimpleGrid columns={{base:3,md:4,lg:6}}  gap="0px" mr={{base:"30px",md:"50px",lg:"100px"}} ml={{base:"30px",md:"50px",lg:"100px"}}  mt="30px">
            {/* <Flex> */}
                {brand.map((ele)=>(
                    <Link to={`/product/Mobile/b ${ele.name}`}>
                    <Image src={ele.src}  />
                    </Link>
                ))}
                {/* <Text>Appe</Text> */}
                {/* <Text>Samsung</Text> */}
            {/* </Flex> */}

        </SimpleGrid>
    </>
)

}
export {TopBrand}