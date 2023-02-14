import { Box } from "@chakra-ui/react";
import { BrandCrousel } from "./Brandcrousel";
import { BudegetCrousel } from "./Budgetcrousel";
import { ACCrousel, MobileCrousel, TVCrousel, WMCrousel } from "./washingMachine_crousel";
import { ACType, MobileType, TVType, WMType } from "./Type";


function WMProduct(){
  
    return(
        <Box bg="#1B1B1B">
           <WMCrousel/>
           <WMType/>
           <BrandCrousel/>
           <BudegetCrousel/>
        </Box>
    )



}
export {WMProduct}