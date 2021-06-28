import {
    Flex,
    Button,
    Link,
    Text
} from '@chakra-ui/react';

export default function SubmitButton (props) {
    return (
        <Flex 
            {...props} 
            direction="column"
            align="center"
        >
            <Button
                bg="primary"
                color="white"
                _hover={{filter: "brightness(110%)"}}
                borderRadius="5px"
                fontWeight="400"
                w="100%"
                h="3rem"
                type="submit"
                form="login"
                isFullWidth
            >Join Now!</Button>

            <Text mt="1rem" fontSize="16px" color="text_mute">
                Already have an account?
                <Link ml=".5rem" color="primary">Log In</Link>
            </Text>

        </Flex>
    )
}