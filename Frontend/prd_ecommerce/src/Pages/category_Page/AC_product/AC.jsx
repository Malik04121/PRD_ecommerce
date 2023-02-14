import { Box } from "@chakra-ui/react";
import { BrandCrousel } from "./Brandcrousel";
import { BudegetCrousel } from "./Budgetcrousel";
import { ACCrousel, MobileCrousel, TVCrousel } from "./AC_crousel";
import { ACType, MobileType, TVType } from "./Type";


function ACProduct(){
  
    return(
        <Box bg="#1B1B1B">
           <ACCrousel/>
           <ACType/>
           <BrandCrousel/>
           <BudegetCrousel/>
        </Box>
    )



}
export {ACProduct}