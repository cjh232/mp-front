import {
    Flex,
    FormControl,
    Input,
    InputGroup,
    InputLeftAddon
} from '@chakra-ui/react';
import { HiOutlinePhone } from 'react-icons/hi';


export default function PhoneInput (props) {
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
                    children={<HiOutlinePhone size="16px"/>} />
                    <Input 
                        placeholder="Phone number"
                        variant="login"
                        w="100%"
                        />
                </InputGroup>

                
            </FormControl>
        </Flex>
    )
}