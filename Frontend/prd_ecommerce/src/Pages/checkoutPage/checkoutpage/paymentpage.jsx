import { Box, Text } from "@chakra-ui/react"


function PaymentOption(paymentStatus){

return(
    <>
    <Box bg="black" display={!paymentStatus&&"none"}>
        <Text bg="red">Patment</Text>
    </Box>
    </>
)

}
export {PaymentOption}