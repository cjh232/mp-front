import { 
    Menu, 
    MenuButton,
    MenuList,
    MenuDivider,
    MenuItem,
    MenuGroup, 
    Text,
    Avatar
  } from '@chakra-ui/react';

  import { 
     HiMenu,
     HiOutlineMailOpen,
     HiOutlineUserCircle,
     HiOutlineShoppingCart,
     HiOutlineLogout,
     HiUserAdd,
     HiLogin,
     } from 'react-icons/hi';

     import { useRouter } from 'next/router'

import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth.actions'

export default function MenuDropdown ({ displayName, isAuthenticated }) {

    const dispatch = useDispatch();
    const router = useRouter()

    const handleLogout = () => {
        console.log("logging out...")
        dispatch(logout())
    }

    const renderMenuGroup = () => {
        if(isAuthenticated) {
            return (<AuthenticatedMenuGroup 
                        firstName={displayName.split(' ')[0]}
                        handleLogout={handleLogout}
                        handleMenuItemClick={handleMenuItemClick}
                    />)
        } else {
            return <UnAuthenticatedMenuGroup handleMenuItemClick={handleMenuItemClick} />
        }
    }

    const handleMenuItemClick = (href) => {
        router.push(href)
    }

    return (
        <Menu placement="bottom" matchWidth closeOnBlur>
            <MenuButton 
                transition="all 0.2s"
                color="header"
                _hover={{cursor: 'pointer'}}
                ><Avatar name={displayName} size="sm"/></MenuButton>
            <MenuList mt="24px" zIndex="3">
                { renderMenuGroup() }
            </MenuList>
        </Menu>
    )
}

function AuthenticatedMenuGroup ({ firstName, handleMenuItemClick, handleLogout }) {

    const headerText = `Hey, ${firstName}!`

    return (
        <MenuGroup   title={headerText} >
            <MenuDivider />
            <MenuItem 
                iconSpacing="8px" 
                color="text_mute"
                icon={<HiOutlineMailOpen size="20px"/>}
            >
                <Text color="heading" fontSize="14px">Messages (3)</Text>
            </MenuItem>

            <MenuItem 
                iconSpacing="8px" 
                color="text_mute"
                icon={<HiOutlineUserCircle size="20px"/>}
            >
                <Text color="heading" fontSize="14px">Profile</Text>
            </MenuItem>

            <MenuItem  
                iconSpacing="8px" 
                color="text_mute"
                icon={<HiOutlineShoppingCart size="20px"/>}
            >
                <Text color="heading" fontSize="14px">Cart (2)</Text>
            </MenuItem>

            <MenuDivider />

            <MenuItem 
                iconSpacing="8px" 
                color="text_mute"
                icon={<HiOutlineLogout size="20px"/>} 
                onClick={handleLogout}
            >
                <Text color="heading" fontSize="14px">Log Out</Text>
            </MenuItem>
        </MenuGroup>
    )
}

function UnAuthenticatedMenuGroup ({handleMenuItemClick}) {
    
    return (
        <MenuGroup>
            <MenuItem 
                icon={<HiUserAdd size="20px"/>}
                iconSpacing="8px"
                onClick={() => handleMenuItemClick("/register")} 
                color="text_mute">
                <Text 
                    fontSize="14px"
                    color="heading"
                    href="/register"
                >Sign Up</Text>
            </MenuItem>

            <MenuItem 
                icon={<HiLogin size="20px"/>}
                iconSpacing="8px"
                onClick={() => handleMenuItemClick("/login")} 
                color="text_mute">
                <Text 
                    fontSize="14px" 
                    color="heading"
                    href="/login"
                >Login</Text>
            </MenuItem>
        </MenuGroup>
    )
}