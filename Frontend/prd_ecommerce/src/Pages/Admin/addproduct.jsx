import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../Component/Redux/userreducer/action";
// import { Form } from "react-router-dom";


function AddProduct(){
  const [formData, setFormData] = useState({
    name: "",
    image1: "",
    price: "",
    originalPrice: "",
    rating: "",
    category: "",
    type: "",
    brand: "",
    specification: "",
  });
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const toast=useToast()

  const handleChange = (event) => {
    const {name,value}=event.target

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(formData))
    // .then((res)=>{
      toast({
        position : 'top',
        colorScheme : 'green', 
        status : "success",
        title:"Product Added Successfuly"
      })
      navigate("/admin")
    
    // })
    
    console.log(formData,"form data is tis")
  }

return(
    <>
      <Box bg="#1B1B1B"position="fixed" left="200px" w="85%" p="2%" color="white" overflowY="scroll" maxH="600px">
        <Text as="b" fontSize="lg">Add Product</Text>
        <form onSubmit={handleSubmit}>
        <FormControl mt="10px" isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} placeholder='Product Name' w="90%"/>
       </FormControl>
       <FormControl mt="10px">
            <FormLabel>Product Image URL</FormLabel>
            <Input name="image1" value={formData.image1} onChange={handleChange} placeholder='Product Image URL' w="90%" />
       </FormControl>
        <Flex gap="10%">
          <Box w="40%">
       <FormControl mt="10px" isRequired>
            <FormLabel>Discounted Price</FormLabel>
            <Input name="price" value={formData.price} type="number" onChange={handleChange} placeholder='Discounted Price' />
       </FormControl>
       <FormControl mt="10px" isRequired>
            <FormLabel>Product Price</FormLabel>
            <Input name="originalPrice" value={formData.originalPrice} type="number" onChange={handleChange} placeholder='M.R.P' />
       </FormControl>
       <FormControl mt="10px">
            <FormLabel>Product Rating</FormLabel>
            <Input name="rating" value={formData.rating} onChange={handleChange} placeholder='Rating' />
       </FormControl>
          </Box>
          <Box w="40%">
          <FormControl mt="10px" isRequired>
            <FormLabel>Product Category</FormLabel>
            <Input name="category" value={formData.category} onChange={handleChange} placeholder='Category' />
       </FormControl>
          <FormControl mt="10px" isRequired >
             <FormLabel>Type</FormLabel>
                <Select name="type"  placeholder='Select Type' color="black" onChange={handleChange}>
                 <option value="Washing Machine">Washing Machine</option>
                 <option value="Wearable">Wearable</option>
                 <option value="laptop">laptop</option>
                 <option value="Tab">Tab</option>
                 <option value="TV">TV</option>
                 <option value="AC">AC</option>
                 <option value="Refrigerator">Refrigerator</option>
                </Select>
              </FormControl>
              <FormControl mt="10px" isRequired>
             <FormLabel>Brand</FormLabel>
                <Select name="brand"  placeholder='Select Brand' color="black" onChange={handleChange}>
                 <option value="Hp">Hp</option>
                 <option value="Lenovo">Lenovo</option>
                 <option value="Acer">Acer</option>
                 <option value="Dell">Dell</option>
                 <option value="Oppo">Oppo</option>
                 <option value="Apple">Apple</option>
                 <option value="OnePlus">OnePlus</option>
                 <option value="Samsung">Samsung</option>
                 <option value="Mi">Mi</option>
                 <option value="Voltas">Voltas</option>
                 <option vlaue="LG">LG</option>
                 <option value="BlueStar">BlueStar</option>
                 <option value="Noise">Noise</option>
                 <option value="Whirlpool">Whirlpool</option>
                </Select>
              </FormControl>
          </Box>
        </Flex>
        <FormControl mt="10px">
            <FormLabel>Product Specification</FormLabel>
            <Input name="specification" value={formData.specification} onChange={handleChange} placeholder='Specification' w="90%"/>
       </FormControl>
       <Button mt="20px" bg="green" mb="40px" w="90%" type="Submit">Submit</Button>
       </form>
      </Box>
    </>
)

}
export {AddProduct}