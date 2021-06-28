import React from 'react';

import { 
    FormControl,
    FormErrorMessage,
    Input,
    InputLeftAddon,
    InputGroup,

} from '@chakra-ui/react';

import { HiOutlineMail } from 'react-icons/hi';

export default function EmailInput({register, errors}) {

    const renderError = (msg) => {

        return (
            <FormErrorMessage fontSize="12px" position="absolute">
                {msg}
            </FormErrorMessage>
        )
    }
    
    return (
        <FormControl 
            id="email" 
            isRequired
            isInvalid={errors.email}>

            <InputGroup>

                <InputLeftAddon 
                bg="#CFD8DD"
                h="3rem"
                color="grey_emphasize"
                borderRadius="5px 0px 0px 5px"
                children={<HiOutlineMail size="16px"/>} />
                <Input 
                    id="email"
                    type="text"
                    placeholder="Email address"
                    variant="login"
                    {...register("email")}
                />
                
            </InputGroup>
            {errors.email && renderError(errors.email.message)}
            

            

        </FormControl>
    )
}