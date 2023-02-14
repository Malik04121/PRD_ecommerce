import { Box, Checkbox, CheckboxGroup, Input, Stack, Text } from "@chakra-ui/react";



function MobileFilter({checkbox,setcheckbox,filter}){

const checkboxhandler1=(e)=>{
    setcheckbox(e.target.value)
    filter("category")
}
const checkboxhandler2=(e)=>{
    setcheckbox("")
    setcheckbox(e.target.value)
    filter("brand")
}

return(
    <>
     <Box>
        <Box color="white" >
            <Box bg="#353535"p="10px" >
            <Text fontSize="xl" as="b">Category</Text>
            
            <CheckboxGroup colorScheme='green' defaultValue={checkbox} >
                <Stack spacing={[1, 5]} direction={['column', 'column']} mt="1rem">
                  <Checkbox value='iPhone' onChange={checkboxhandler1}>iPhone</Checkbox>
                   <Checkbox value='Android' onChange={checkboxhandler1}>Android</Checkbox>
                  <Checkbox value='Feature' onChange={checkboxhandler1} >Feature</Checkbox>
                </Stack>
            </CheckboxGroup>
            </Box>
            <Box bg="#353535"p="10px" mt="20px">
           <Text fontSize="xl" as="b">Brand</Text>
           <CheckboxGroup colorScheme='green' defaultValue={checkbox}>
                <Stack spacing={[1, 5]} direction={['column', 'column']} mt="1rem">
                  <Checkbox value='Apple' onChange={checkboxhandler2}>Apple</Checkbox>
                   <Checkbox value='Vivo' onChange={checkboxhandler2}>Vivo</Checkbox>
                  <Checkbox value='Mi' onChange={checkboxhandler2} >Xiomi</Checkbox>
                  <Checkbox value='Samsung' onChange={checkboxhandler2} >Samsung</Checkbox>
                </Stack>
            </CheckboxGroup>
            </Box>

           

        </Box>
     </Box>
    </>
)


}
export {MobileFilter}