import {
    Flex, 
    FormControl,
    Input,
    Spacer
} from '@chakra-ui/react';


export default function NameInput () {

    return (
        <Flex w="625px" >
            <FormControl w="300px">
                <Input 
                    placeholder="First name"
                    variant="login"
                    />
            </FormControl>

            <Spacer />

            <FormControl w="300px">
                <Input 
                    placeholder="Last name"
                    variant="login"
                />
            </FormControl>
        </Flex>
    )
}