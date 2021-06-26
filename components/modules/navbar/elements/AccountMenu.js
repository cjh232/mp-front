import { 
    Menu, 
    MenuButton,
    MenuList,
    MenuDivider,
    MenuItem,
    MenuGroup, 
    Text,
  } from '@chakra-ui/react';

  import { 
     HiMenu,
     HiOutlineMailOpen,
     HiOutlineUserCircle,
     HiOutlineShoppingCart,
     HiOutlineLogout
     } from 'react-icons/hi';

export default function AccountMenu (props) {
    return (
        <Menu>
            <MenuButton 
                w="27px"
                h="27px" 
                transition="all 0.2s"
                color="gray.500"
                _hover={{cursor: 'pointer'}}
                ><HiMenu size="20px"/></MenuButton>
            <MenuList>
            <MenuGroup   title={`Hey, ${props.firstName}!`}>
                <MenuDivider />
                <MenuItem icon={<HiOutlineMailOpen size="18px"/>}>
                    <Text fontSize="14px">Messages (3)</Text>
                </MenuItem>

                <MenuItem icon={<HiOutlineUserCircle size="18px"/>}>
                    <Text fontSize="14px">Profile</Text>
                </MenuItem>

                <MenuItem icon={<HiOutlineShoppingCart size="18px"/>}>
                    <Text fontSize="14px">Cart (2)</Text>
                </MenuItem>

                <MenuDivider />

                <MenuItem icon={<HiOutlineLogout size="18px"/>} onClick={() => props.onLogout()}>
                    <Text fontSize="14px">Log Out</Text>
                </MenuItem>
            </MenuGroup>
            </MenuList>
        </Menu>
    )
}