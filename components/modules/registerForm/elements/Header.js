import {
    Flex, 
    Text
} from '@chakra-ui/react';



export default function Header () {
    return (
        <Flex 
            direction="column"
            align="center"
        >
            <Text 
                fontSize="64px" 
                fontWeight="600">Welcome aboard!</Text>
            <Text
                fontWeight="300"
                fontSize="16px"
            >You're a few steps away from joining a blossoming community.</Text>
        </Flex>
    )
}