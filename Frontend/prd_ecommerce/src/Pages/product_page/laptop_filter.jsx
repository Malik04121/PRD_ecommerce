import { Box, Checkbox, CheckboxGroup, Input, Stack, Text } from "@chakra-ui/react";



function LaptopFilter({checkbox,setcheckbox,filter}){

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
            <Text fontSize="xl" as="b" >Category</Text>
            
            <CheckboxGroup colorScheme='green' defaultValue={checkbox} >
                <Stack spacing={[1, 5]} direction={['column', 'column']} mt="1rem">
                  <Checkbox value='MacOs' onChange={checkboxhandler1}>MacOS</Checkbox>
                   <Checkbox value='Windows' onChange={checkboxhandler1}>Windows</Checkbox>
                  <Checkbox value='Chrome OS' onChange={checkboxhandler1} >Chrome OS</Checkbox>
                </Stack>
            </CheckboxGroup>
            </Box>
            <Box bg="#353535"p="10px" mt="20px">
           <Text fontSize="xl" as="b">Brand</Text>
           <CheckboxGroup colorScheme='green' defaultValue={checkbox}>
                <Stack spacing={[1, 5]} direction={['column', 'column']} mt="1rem">
                  <Checkbox value='Apple' onChange={checkboxhandler2}>Apple</Checkbox>
                   <Checkbox value='Hp' onChange={checkboxhandler2}>HP</Checkbox>
                  <Checkbox value='Lenovo' onChange={checkboxhandler2} >Lenovo</Checkbox>
                  <Checkbox value='Asus' onChange={checkboxhandler2} >Asus</Checkbox>
                </Stack>
            </CheckboxGroup>
            </Box>

           

        </Box>
     </Box>
    </>
)


}
export {LaptopFilter}