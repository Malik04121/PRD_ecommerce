import { Box } from "@chakra-ui/react";
import { BrandCrousel } from "./Brandcrousel";
import { BudegetCrousel } from "./Budgetcrousel";
import { MobileCrousel } from "./Mobile_crousel";
import { MobileType } from "./Type";


function MobileProduct(){
  
    return(
        <Box bg="#1B1B1B">
           <MobileCrousel/>
           <MobileType/>
           <BrandCrousel/>
           <BudegetCrousel/>
        </Box>
    )



}
export {MobileProduct}