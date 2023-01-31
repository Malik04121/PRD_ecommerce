import { Flex, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react"


function Subnavbar(){

    return(
        <>
          <Flex bg="black" justifyContent="space-between">
            <Menu>
                <MenuButton color="white">Mobiles & Tablets</MenuButton>
                <MenuList display="flex">
                    <MenuGroup title="Mobile">
                        <Flex>
                        <MenuGroup title="Type">
                          <MenuItem>Iphone</MenuItem>
                          <MenuItem>Android</MenuItem>
                          <MenuItem>Feature Phone</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Brand">
                          <MenuItem>Apple</MenuItem>
                          <MenuItem>Samsung</MenuItem>
                          <MenuItem>Oneplus</MenuItem>
                          <MenuItem>Xiomi</MenuItem>
                        </MenuGroup>
                        </Flex>
                    </MenuGroup>
                    
                    <MenuGroup title="Tablets">
                        <Flex>
                        <MenuGroup title="Type">
                          <MenuItem>Apple Ipad</MenuItem>
                          <MenuItem>Android</MenuItem>
                          <MenuItem>Windows</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Brand">
                          <MenuItem>Apple</MenuItem>
                          <MenuItem>Samsung</MenuItem>
                          <MenuItem>Lenovo</MenuItem>
                          <MenuItem>Microsoft</MenuItem>
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