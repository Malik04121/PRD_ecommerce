import { Box } from "@chakra-ui/react"
import { CategoryCarousel } from "./CategoryCarousel"
import { LaptopcategoryCraousel } from "./Laptopcrousel"
import { Craousel } from "./productCrousel"


function Landingpage(){

return(
    <Box bg="grey">
      <Craousel />
      <CategoryCarousel />
      <LaptopcategoryCraousel/>
      <Box h="2500px" bg="gray">

      </Box>
    </Box>
)

}
export {Landingpage}