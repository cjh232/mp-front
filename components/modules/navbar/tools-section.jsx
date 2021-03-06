import { HStack } from '@chakra-ui/react';
import { HiSearch } from 'react-icons/hi'
import { useSelector } from 'react-redux';
import MenuDropdown from './menu-dropdown'

//TODO: Add search functionality

export default function Tools (props) {

    const auth = useSelector(state => state.auth)
    const user = auth.user

    let displayName = ''

    if (auth.isAuthenticated) {
      displayName = `${user.first_name} ${user.last_name}`
    }

    return (
      <HStack w="80px" spacing="24px" color="heading" {...props}>
        <HiSearch size="20px"/>
        <MenuDropdown displayName={displayName} isAuthenticated={auth.isAuthenticated}/>
      </HStack>  
    )
}

