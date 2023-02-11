import {
    Box,
    SimpleGrid,
    Image,
    Button,
    Heading,
    Text,
    Flex,
    Divider,
    Icon,
    Slider,
    Input,
    Checkbox,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    useToast,
    Menu,
    MenuButton,
    MenuList,
  } from "@chakra-ui/react";
  import { Link, useParams } from "react-router-dom";
  import axios from "axios";
  import { useContext, useEffect, useState } from "react";
  import { CiFilter } from "react-icons/ci";
  import { AiOutlineClose } from "react-icons/ai";
import { LaptopFilter } from "./laptop_filter";
//   import { CityContext } from "../../Context/CityContext";
//   import Subnavbar from "./Subnavbar";
  import "./category.css";
  
  function Product() {
    // const { city } = useContext(CityContext);
    const { param } = useParams();
    const { para } = useParams();
    const { id } = useParams();
    const [proddata, setProddata] = useState([]);
    const [catData, setCatData] = useState([]);
    const [item, setItem] = useState({});
    const [filtertype,setFiltertype]=useState("")
    // const [toggle,setToggle]=useState(true)
    const [sliderValue, setSliderValue] = useState(6);
    const [checkboxvalue, setCheckboxvalue] = useState(para.slice(2));
    const toast = useToast();
    console.log(para,"para is")
    const labelStyles = {
      mt: "2",
      ml: "-2.5",
      fontSize: "sm",
    };
  
    // const getCat = () => {
    //   axios
    //     .get(`http://localhost:8080/category_${param}`)
    //     .then((res) => setCatData(res.data))
    //     .catch((e) => console.log(e));
    // };
    const getProd = () => {
        if(para[0]=="c" || filtertype=="category"){
            axios
        .get(`https://red-houndstooth.cyclic.app/product?type=laptop&category=${checkboxvalue}`)
        .then((res) => setProddata(res.data));
        }
        else if(para[0]=="b" || filtertype=="brand"){
            axios
        .get(`https://red-houndstooth.cyclic.app/product?type=laptop&brand=${checkboxvalue}`)
        .then((res) => setProddata(res.data));
        }


    };
  
    const checkboxhandler = (e, index) => {
      console.log(index);
      setCheckboxvalue(e.target.value);
      // console.log(e.target.value);
    };
  
    const Carthandler = (prod) => {
      // axios
      //   .get(`http://localhost:8080/furniture/${id}`)
      //   .then((res) => setItem(res.data));
      // setItem(prod)
      // console.log(prod)
  
      toast({
        position: "top",
        title: "Item successfully Added to Cart",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
  
      axios
        .post(`https://red-houndstooth.cyclic.app/cart/post`, prod)
        .then((res) => console.log(res.data));
    };
    useEffect(() => {
    //   getCat();
      getProd();
    }, [checkboxvalue]);

    console.log(proddata[0])
    return (
      <>
      <Box bg="#1B1B1B" display={["none","block","block"]} pb="30px" >
        <Flex pr="8%" pl="8%" gap="3%">
          <Box w="30%" h="200px" >
            <Flex mt="1rem" mb="1rem" justifyContent="space-between" color="white">
              <Flex>
                <CiFilter size="30px" />
                <Text size="lg">Filters</Text>
              </Flex>
              <Button border="1px solid #e6e6e6" bg="none" onClick={()=>setCheckboxvalue({para}.slice(2))}>
                Reset
              </Button>
            </Flex>
  
            {/* <Box border="1px solid #e6e6e6" p="8%">
              <Text>CHOOSE RENTAL TENURE</Text>
              <Slider
                aria-label="slider-ex-6"
                min={3}
                max={12}
                onChange={(val) => setSliderValue(val)}
              >
                <SliderMark value={3} {...labelStyles}>
                  3+
                </SliderMark>
                <SliderMark value={6} {...labelStyles}>
                  6+
                </SliderMark>
                <SliderMark value={9} {...labelStyles}>
                  9+
                </SliderMark>
                <SliderMark value={12} {...labelStyles}>
                  12+
                </SliderMark>
                {/* <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}
                      </SliderMark> */}
                {/* <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box> */}
  
            {/* <Box border="1px solid #e6e6e6" p="8%" mt="2rem">
              <Text fontSize="lg" mb="1rem">
                PRODUCT TYPE
              </Text>
              {catData.map((ele, index) => (
                <Flex mt="1rem">
                  {/* <Input type="radio"/> */}
                  {/* <Checkbox
                    textTransform="capitalize"
                    onChange={(e) => checkboxhandler(e, index)}
                    value={ele.name}
                  >
                    {ele.name}
                  </Checkbox>
                </Flex>
              ))} */}
            {param=="laptop"?
              <LaptopFilter checkbox={checkboxvalue} setcheckbox={setCheckboxvalue} filter={setFiltertype}/>
            :console.log("not")}
            </Box>

  
            {/* <Box p="8%" border="1px solid #e6e6e6" mt="2rem">
              <Text fontSize="lg">AVAILABILITY</Text>
  
              <Checkbox mt="1rem" defaultChecked value="Out of Stock">
                Out of Stock
              </Checkbox>
            </Box>
          </Box>  */} 


          <Box w="100%" mb="250px" >
            <Box p="0.8%" w="16%" mt="1rem" mb="1rem" bg="#FAFAFA">
              <Flex justifyContent="space-between">
                <Text fontSize="lg" textTransform="capitalize">
                  {para}
                </Text>
                {/* <Link to={`/${city}/${param}`}> */}
                  {/* <AiOutlineClose size="25px" /> */}
                {/* </Link> */}
              </Flex>
            </Box>
            <SimpleGrid columns={[2, 2, 2]} columnGap="5%" rowGap="1%" >
              {proddata.map((prod) => (
                <Box
                  bg="#353535"
                  className="hoverproductbox"
                  color="white"
                  borderRadius="10px"
                >
                  {/* <Link to={`/${city}/${param}/${para}/${prod.id}`}> */}
                    <Box h="270px"  mt="20px">
                      <Image
                        src={prod.image1}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      ></Image>
                    </Box>
                    <Box p="5%">
                      <Text fontSize="lg" textOverflow="ellipsis">
                        {prod.name}
                      </Text>
                      <Divider
                        mt="3%"
                        mb="3%"
                        orientation="horizontal"
                        bg="red"
                      />
                      <Flex justifyContent="space-between">
                        <Text fontSize="lg">Price:-₹{prod.price}</Text>
                        <Text>{prod.discount} </Text>
                      </Flex>
                    </Box>
                  {/* </Link> */}
                  <Box className="hoverCartbutton" m="15px">
                    <Button
                      w="100%"
                      borderRadius="15px"
                      onClick={() => Carthandler(prod)}
                      bg="none"
                      border="1px solid skyblue"
                      color="skyblue"
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>

      <Box display={{base:"block",lg:"none"}} bg="#1B1B1B" color="white">
        <Flex justifyContent="space-between">
          <Button color="#1B1B1B">Sort</Button>
          <Menu>
            <MenuButton>Filter</MenuButton>
            <MenuList>
            </MenuList>
          </Menu>

        </Flex>
        <Box>
           <SimpleGrid gap="10px">
            {proddata.map((item)=>(
                 <Flex  gap="20px">
                 <Box  w="40%" justifyContent="center">
                   <Image w="100%" src={item.image1}/>
                   <Button color="#1B1B1B"  size="sm" mr="20px" ml="20px" onClick={() => Carthandler(item)}>Add To Cart</Button>
                 </Box>
                 <Box w="80%">
                   <Text>{item.name}</Text>
                   <Flex>
                    <Text>₹{item.price}</Text>
                    <Text>₹{item.discount}</Text>
                    <Text>₹{item.discount}</Text>
                    <Text>Discount percentage</Text>
                   </Flex>
                 </Box>
               </Flex>
            ))

            }
             

           </SimpleGrid>
        </Box>
      </Box>
      </>
    );
  }
  export default Product;
  