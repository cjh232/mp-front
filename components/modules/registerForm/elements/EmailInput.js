import {
    Flex,
    FormControl,
    Input,
    InputGroup,
    InputLeftAddon
} from '@chakra-ui/react';

import { HiOutlineMail } from 'react-icons/hi';

export default function EmailInput (props) {
    return (
        <Flex {...props} >
            <FormControl w="100%">

                <InputGroup
                    border="2px"
                    borderRadius="7px"
                    borderColor='#D1DBE0'
                >

                    <InputLeftAddon 
                    bg="#D1DBE0"
                    h="3rem"
                    color="sub_heading"
                    borderRadius="5px 0px 0px 5px"
                    children={<HiOutlineMail size="16px"/>} 
                    />

                    <Input 
                        placeholder="Email address"
                        variant="login"
                        w="100%"
                        />

                </InputGroup>
            </FormControl>
        </Flex>
    )
}