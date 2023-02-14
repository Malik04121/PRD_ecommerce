import { Flex, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function Subnavbar(){

    return(
        <>
          <Flex justifyContent="space-between" h="40px" color="white" bg="#353535" pl="30px" pr="30px" display={{base:"none",md:"flex"}}>
            <Menu>
                <MenuButton color="white" >Mobiles & Tablets</MenuButton>
                <Link to="/mobile">
                <MenuList display="flex" color="white" bg="black" gap="50px">
                    <MenuGroup title="Mobile" textAlign="center" textDecoration="underline" textDecorationThickness="2px" >
                        <Flex>
                        <MenuGroup title="Type" color="white" bg="black">
                          <MenuItem bg="black">Iphone</MenuItem>
                          <MenuItem bg="black">Android</MenuItem>
                          <MenuItem bg="black">Feature Phone</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Brand">
                          <MenuItem bg="black">Apple</MenuItem>
                          <MenuItem bg="black">Samsung</MenuItem>
                          <MenuItem bg="black">Oneplus</MenuItem>
                          <MenuItem bg="black">Xiomi</MenuItem>
                        </MenuGroup>
                        </Flex>
                    </MenuGroup>
                    
                    <MenuGroup title="Tablets" textAlign="center" textDecoration="underline" textDecorationThickness="2px">
                        <Flex>
                        <MenuGroup title="Type" bg="black">
                          <MenuItem bg="black">Apple Ipad</MenuItem>
                          <MenuItem bg="black">Android</MenuItem>
                          <MenuItem bg="black">Windows</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Brand">
                          <MenuItem bg="black">Apple</MenuItem>
                          <MenuItem bg="black">Samsung</MenuItem>
                          <MenuItem bg="black">Lenovo</MenuItem>
                          <MenuItem bg="black">Microsoft</MenuItem>
                        </MenuGroup>
                        </Flex>
                    </MenuGroup>

                </MenuList>
                </Link>
            </Menu>
            <Menu>
                <MenuButton color="white">
                    Television
                </MenuButton>
                <Link to="/television">
                <MenuList display="flex" bg="black" gap="60px">
                <MenuGroup title="Television" textAlign="center" textDecoration="underline" textDecorationThickness="2px">
                        <Flex>
                        <MenuGroup title="Type" color="white" bg="black">
                          <MenuItem bg="black">LED</MenuItem>
                          <MenuItem bg="black">QLED TVs</MenuItem>
                          <MenuItem bg="black">OLED TVs</MenuItem>
                          <MenuItem bg="black">4K UHD TVs</MenuItem>
                          <MenuItem bg="black">8K UHD TVs</MenuItem>
                          <MenuItem bg="black">Smart TVs</MenuItem>
                          <MenuItem bg="black">Android Smart TVs</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Screen Size">
                          <MenuItem bg="black">Small Screen</MenuItem>
                          <MenuItem bg="black">Medium Screen</MenuItem>
                          <MenuItem bg="black">Large Screen</MenuItem>
                        </MenuGroup>
                        </Flex>
                    </MenuGroup>
                    
                    <MenuGroup title="TV Accessories" textAlign="center" textDecoration="underline" textDecorationThickness="2px">
                          <MenuItem bg="black">TV Stand</MenuItem>
                          <MenuItem bg="black">Cable and Connectors</MenuItem>
                          <MenuItem bg="black">TV mount</MenuItem>
                          <MenuItem bg="black">TV Remote</MenuItem>
                    </MenuGroup>
                </MenuList>
                </Link>
            </Menu>
            <Menu>
                <MenuButton color="white">
                    Laptops
                </MenuButton>
                <Link to="/laptop">
                <MenuList display="flex" bg="black" gap="60px">
                <MenuGroup title="Laptop" textAlign="center" textDecoration="underline" textDecorationThickness="2px" >
                        <Flex>
                        <MenuGroup title="OS" color="white" bg="black">
                          <MenuItem bg="black">MacOs</MenuItem>
                          <MenuItem bg="black">Windows</MenuItem>
                          <MenuItem bg="black">Chrome OS</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Brand">
                          <MenuItem bg="black">Apple</MenuItem>
                          <MenuItem bg="black">HP</MenuItem>
                          <MenuItem bg="black">Acer</MenuItem>
                          <MenuItem bg="black">Lenovo</MenuItem>
                          <MenuItem bg="black">Asus</MenuItem>
                        </MenuGroup>
                        </Flex>
                    </MenuGroup>
                    
                    <MenuGroup title="Accessories" textAlign="center" textDecoration="underline" textDecorationThickness="2px">
                        <Flex>
                        <MenuGroup title="Hardware" bg="black">
                          <MenuItem bg="black">Keyboard</MenuItem>
                          <MenuItem bg="black">Mouse</MenuItem>
                          <MenuItem bg="black">Laptop bag</MenuItem>
                          <MenuItem bg="black">Batteries</MenuItem>
                          <MenuItem bg="black">Adapter</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Software">
                          <MenuItem bg="black">OS</MenuItem>
                          <MenuItem bg="black">Office</MenuItem>
                          <MenuItem bg="black">Antivirus</MenuItem>
                        </MenuGroup>
                        </Flex>
                    </MenuGroup>
                </MenuList>
                </Link>
            </Menu>
            <Menu>
                <MenuButton>
                    Air Conditioners
                </MenuButton>

                <Link to="/Ac">
                <MenuList display="flex" bg="black" gap="60px">
                <MenuGroup title="Category" textAlign="center" textDecoration="underline" textDecorationThickness="2px" >
                          <MenuItem bg="black">Window AC</MenuItem>
                          <MenuItem bg="black">Split AC</MenuItem>
                          <MenuItem bg="black">Portable AC</MenuItem>
                          <MenuItem bg="black">Hot & Cold AC</MenuItem>
                    </MenuGroup>
        
                    
                    <MenuGroup title="Brand" textAlign="center" textDecoration="underline" textDecorationThickness="2px">
                        
                          <MenuItem bg="black">Samsung</MenuItem>
                          <MenuItem bg="black">Whirlpool</MenuItem>
                          <MenuItem bg="black">BlueStar</MenuItem>
                          <MenuItem bg="black">LG</MenuItem>
                          <MenuItem bg="black">Voltas</MenuItem>
                       
                    </MenuGroup>
                </MenuList>
                </Link>
            </Menu>
            <Menu>
                <MenuButton>
                    Refrigerator
                </MenuButton>
                <Link to="refrigerator">
                <MenuList display="flex" bg="black" gap="60px">
                <MenuGroup title="Category" textAlign="center" textDecoration="underline" textDecorationThickness="2px" >
                          <MenuItem bg="black">Single Door</MenuItem>
                          <MenuItem bg="black">Double Door</MenuItem>
                          <MenuItem bg="black">Side by Side </MenuItem>
                          <MenuItem bg="black">French Door</MenuItem>
                    </MenuGroup>
        
                    
                    <MenuGroup title="Brand" textAlign="center" textDecoration="underline" textDecorationThickness="2px">
                        
                          <MenuItem bg="black">Samsung</MenuItem>
                          <MenuItem bg="black">Whirlpool</MenuItem>
                          <MenuItem bg="black">Bosch</MenuItem>
                          <MenuItem bg="black">LG</MenuItem>
                       
                    </MenuGroup>
                </MenuList>
                </Link>
            </Menu>
            <Menu>
                <MenuButton>
                    Washing Machine
                </MenuButton>
                <Link to="WashingMachine">
                <MenuList display="flex" bg="black" gap="60px">
                <MenuGroup title="Category" textAlign="center" textDecoration="underline" textDecorationThickness="2px" >
                          <MenuItem bg="black">Semi Automatic</MenuItem>
                          <MenuItem bg="black">Top Load fully Automatic</MenuItem>
                          <MenuItem bg="black">Front Loaded</MenuItem>
                          <MenuItem bg="black">Fully Automatic</MenuItem>
                    </MenuGroup>
        
                    
                    <MenuGroup title="Brand" textAlign="center" textDecoration="underline" textDecorationThickness="2px">
                        
                          <MenuItem bg="black">Samsung</MenuItem>
                          <MenuItem bg="black">Whirlpool</MenuItem>
                          <MenuItem bg="black">Bosch</MenuItem>
                          <MenuItem bg="black">LG</MenuItem>
                       
                    </MenuGroup>
                </MenuList>
                </Link>
            </Menu>
            {/* <Menu>
                <MenuButton color="white">
                    Wearables
                </MenuButton>
                <MenuList display="flex">

                </MenuList>
            </Menu> */}
          </Flex>
        </>
    )
}
export {Subnavbar}