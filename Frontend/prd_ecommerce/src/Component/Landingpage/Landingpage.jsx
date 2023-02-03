import { Box } from "@chakra-ui/react"
import { CategoryCarousel } from "./CategoryCarousel"
import { LaptopcategoryCraousel } from "./Laptopcrousel"
import { Newlyadded } from "./Newlyadded"
import { Craousel } from "./productCrousel"
import { TopBrand } from "./Topbrand"


function Landingpage(){

return(
    <Box bg="#1B1B1B">
      <Craousel />
      <CategoryCarousel />
      <LaptopcategoryCraousel/>
      <Newlyadded/>
      <TopBrand/>
      <Box h="2500px" bg="gray">

      </Box>
    </Box>
)

}
export {Landingpage}