import { HStack, Divider } from '@chakra-ui/react';
import React from 'react';

import NavItem from './NavItem';
import AccountMenu from './AccountMenu'

export default function Nav(props) {

  const isLoggedIn = false;

  return (
    <HStack spacing="1.2rem" h="20px">

        <NavItem icon="home" title="Home" href="/home"/>

        <NavItem icon="shop" title="Shop" href="/shop"/>
        
        <NavItem icon="news" title="News" href="/news"/>
        
        <Divider orientation="vertical" colorScheme="gray" />


        {isLoggedIn && <AccountMenu />}
        {!isLoggedIn && <AuthOptions />}

    </HStack>
  )
}

function AuthOptions() {
  return (
      <React.Fragment>
          <NavItem icon="signup" title="Sign Up" href="#"/>
          <NavItem icon="login" title="Log In" href="/login" />
      </React.Fragment>
  )
}