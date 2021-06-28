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
                colorScheme="pink"  
                w="100%"
                h="3rem"
                type="submit"
                form="login"
                isFullWidth
            >Join Now!</Button>

            <Text mt="1rem">
                Already have an account?
                <Link 
                    ml=".5rem" 
                    color="primary"
                    fontWeight="600"
                >Log In</Link>
            </Text>

        </Flex>
    )
}