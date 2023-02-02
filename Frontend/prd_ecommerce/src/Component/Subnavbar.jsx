import { Flex, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react"


function Subnavbar(){

    return(
        <>
          <Flex justifyContent="space-between" h="40px" color="white" bg="#353535">
            <Menu>
                <MenuButton color="white">Mobiles & Tablets</MenuButton>
                <MenuList display="flex" color="white" bg="black">
                    <MenuGroup title="Mobile">
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
                    
                    <MenuGroup title="Tablets">
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
            </Menu>
            <Menu>
                <MenuButton color="white">
                    Television
                </MenuButton>
                <MenuList display="flex">

                </MenuList>
            </Menu>
            <Menu>
                <MenuButton color="white">
                    Laptops
                </MenuButton>
                <MenuList display="flex">

                </MenuList>
            </Menu>
            <Menu>
                <MenuButton>
                    Air Conditioners
                </MenuButton>
                <MenuList display="flex">

                </MenuList>
            </Menu>
            <Menu>
                <MenuButton>
                    Refrigerator
                </MenuButton>
                <MenuList display="flex">

                </MenuList>
            </Menu>
            <Menu>
                <MenuButton>
                    Washing Machine
                </MenuButton>
                <MenuList display="flex">

                </MenuList>
            </Menu>
            <Menu>
                <MenuButton color="white">
                    Wearables
                </MenuButton>
                <MenuList display="flex">

                </MenuList>
            </Menu>
          </Flex>
        </>
    )
}
export {Subnavbar}