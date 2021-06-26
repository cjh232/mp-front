import {
    Link, 
    Tooltip, 
    Icon, 
  } from '@chakra-ui/react';

import { 
    HiOutlineHome, 
    HiOutlineShoppingBag,
    HiOutlineNewspaper, 
    HiOutlineLogin, 
    HiUserAdd, 
} from 'react-icons/hi';

function getIcon(iconString) {
    switch(iconString) {
        case "home":
            return HiOutlineHome
        case "shop":
            return HiOutlineShoppingBag
        case "news":
            return HiOutlineNewspaper
        case "login":
            return HiOutlineLogin
        case "signup":
            return HiUserAdd
    }
}

export default function NavItem({icon, title, href}) {

    let navIcon = getIcon(icon)


    return (
        <Tooltip label={title} aria-label={title}>
            <Link 
                _hover={{ color: "pink.400" }} 
                color="gray.500"
                href={href}
                _focus={{boxShadow: "none"}}
                ><Icon as={navIcon} w={4} h={5}/></Link>
        </Tooltip>

    )
}