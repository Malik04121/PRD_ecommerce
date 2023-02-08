import { Box } from "@chakra-ui/react"
import { BrandCrousel } from "./Brandcrousel"
import { BudegetCrousel } from "./Budgetcrousel"
import { Laptopcrousel } from "./laptop_crousel"
import { OsCraousel } from "./Oscrousel"


function LaptopProduct(){

return(
    <Box bg="#1B1B1B">
      <Laptopcrousel/>
      <OsCraousel/>
      <BrandCrousel/>
      <BudegetCrousel/>
    </Box>
)

}
export {LaptopProduct}