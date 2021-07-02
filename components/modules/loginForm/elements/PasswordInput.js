import React from 'react';
import { useBoolean } from "@chakra-ui/react"

import { 
    FormControl,
    FormErrorMessage,
    Input,
    InputRightElement, 
    InputLeftAddon,
    Center,
    InputGroup,
} from '@chakra-ui/react';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { HiOutlineKey } from 'react-icons/hi';


export default function PasswordInput({register, errors}) {

    const [showPassword, setShowPassword] = useBoolean(false)

    const renderError = (msg) => {

        return (
            <FormErrorMessage fontSize="12px" position="absolute">
                {msg}
            </FormErrorMessage>
        )
    }


    return (
        <FormControl 
            mt="2rem"
            id="password"
            isRequired
            isInvalid={errors.password}
        >
            <InputGroup
                    border="2px"
                    borderRadius="7px"
                    borderColor={errors.password ? '#E53E3E' : '#D1DBE0'}
            >
                <InputLeftAddon 
                bg="#D1DBE0"
                h="3rem"
                color="grey_emphasize"
                borderRadius="5px 0px 0px 5px"
                children={<HiOutlineKey size="16px"/>} />
                <Input 
                    id="password"
                    placeholder="Password"
                    variant="login"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                /> 
                
                <InputRightElement 
                    width="4rem" 
                    h="100%"
                    _focus={{boxShadow: "none"}}
                    _hover={{cursor: "pointer"}}
                >
                    <Center h="3rem" onClick={setShowPassword.toggle} className="center" color="grey_emphasize">
                        {showPassword && <AiFillEye size="1rem" />}
                        {!showPassword && <AiFillEyeInvisible size="1rem" />}
                    </Center>
                </InputRightElement>
                
            </InputGroup>

            {errors.password && renderError(errors.password.message)}
            

        </FormControl>
    )
}