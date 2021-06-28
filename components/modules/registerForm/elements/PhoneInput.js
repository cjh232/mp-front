import {
    Flex,
    FormControl,
    Input
} from '@chakra-ui/react';

export default function PhoneInput (props) {
    return (
        <Flex {...props} >
            <FormControl w="300px">
                <Input 
                    placeholder="Phone number"
                    variant="login"
                    />
            </FormControl>
        </Flex>
    )
}