import {
    Flex,
    HStack,
    Text
} from '@chakra-ui/react';

// components
import NavLinks from './elements/NavLinks'
import Tools from './elements/Tools';

export default function Navbar () {

    const backgroundColor = "#ffffff"

    return (
        <Flex
        zIndex="fixed"
        wrap="wrap"
        bg={backgroundColor}
        as="nav"
        align="center"
        justify="center"
        p={3}
        w="100%"
        h="72px"
        borderBottom="1px solid #E2E8F0"        
        >
            <Container justify="space-between" w={[1140, 1280]} align="center"> 
                <Logo />
                <NavLinks />
                <Tools />
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
        <HStack spacing=".5rem">
            <Text>Logo</Text>
        </HStack>
    )
  }