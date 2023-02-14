import { Box } from "@chakra-ui/react";
import { BrandCrousel } from "./Brandcrousel";
import { BudegetCrousel } from "./Budgetcrousel";
import { MobileCrousel, TVCrousel } from "./TV_crousel";
import { MobileType, TVType } from "./Type";


function TVProduct(){
  
    return(
        <Box bg="#1B1B1B">
           <TVCrousel/>
           <TVType/>
           <BrandCrousel/>
           <BudegetCrousel/>
        </Box>
    )



}
export {TVProduct}