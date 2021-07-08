import {
    Flex,
    HStack,
    Text,
    Box,
    Icon
} from '@chakra-ui/react';

// components
import NavLinks from './nav-links'
import Tools from './tools-section';

import { HiMenu } from 'react-icons/hi'

import styles from './search.module.css';

export default function Navbar (props) {

    const backgroundColor = "#ffffff"

    return (
        <Flex
        zIndex="sticky"
        position="fixed"
        wrap="wrap"
        bg={backgroundColor}
        as="nav"
        align="center"
        justify="center"
        p={3}
        w="100%"
        h="65px"
        borderBottom="1px solid #E2E8F0"        
        >
            <Container 
                justify="space-between" 
                w={{sm: 400, md: "80%", lg: 1140, xl: 1440}} 
                align="center"> 
                <Logo />

                <Icon as={HiMenu} display={{ md: "none"}} boxSize="25px" />
                <NavLinks 
                    display={{sm:"none", md: "flex"}}
                />
                <Tools 
                    display={{sm:"none", md: "flex"}}
                />
            </Container>
        </Flex>
    )
}

function Container ({children, ...props}) {
    return (
        <Flex {...props}>
            {children}
        </Flex>
    )
}

function Logo () {
    return (
        <HStack spacing=".5rem" align="center" h="100%" _hover={{cursor: "pointer"}}>
            <Text>Logo</Text>
        </HStack>
    )
  }
