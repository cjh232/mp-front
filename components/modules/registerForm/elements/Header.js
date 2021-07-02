import {
    Flex, 
    Text
} from '@chakra-ui/react';



export default function Header () {
    return (
        <Flex 
            direction="column"
            align="center"
            textAlign="center"
        >
            <Text 
                fontSize="32px" 
                fontWeight="600"
                color="heading"
                >Welcome aboard!</Text>
            <Text
                fontWeight="300"
                fontSize="14px"
                color="sub_heading"
            >You're a few steps away from joining a blossoming community.</Text>
        </Flex>
    )
}