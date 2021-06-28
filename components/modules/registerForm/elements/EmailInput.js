import {
    Flex,
    FormControl,
    Input
} from '@chakra-ui/react';

export default function EmailInput (props) {
    return (
        <Flex {...props} >
            <FormControl w="625px">
                <Input 
                    placeholder="Email address"
                    variant="login"
                    />
            </FormControl>
        </Flex>
    )
}