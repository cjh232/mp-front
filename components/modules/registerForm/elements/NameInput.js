import {
    Flex, 
    FormControl,
    Input,
    Spacer
} from '@chakra-ui/react';


export default function NameInput () {

    return (
        <Flex w="100%" >
            <FormControl w="12rem">
                <Input 
                    placeholder="First name"
                    variant="login"
                    />
            </FormControl>

            <Spacer />

            <FormControl w="12rem">
                <Input 
                    placeholder="Last name"
                    variant="login"
                />
            </FormControl>
        </Flex>
    )
}