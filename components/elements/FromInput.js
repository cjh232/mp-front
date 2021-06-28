import {
    Flex,
    FormControl,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Center,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react';
import React from 'react';
import { useBoolean } from "@chakra-ui/react"

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


export default function FormInput({
                                leftIcon, 
                                isPassword,
                                helpText,
                                placeholder, 
                                id, 
                                error, 
                                register, 
                                ...props}) {
    
    const renderError = (msg) => {

        return (
            <FormErrorMessage fontSize="12px" position="absolute">
                {msg}
            </FormErrorMessage>
        )
    }

    return (
        <Flex {...props} >
            <FormControl
                id={id}
                isInvalid={error}
                w="100%"
            >

                <InputGroup
                    border="2px"
                    borderRadius="7px"
                    borderColor={error ? '#E53E3E' : '#D1DBE0'}
                >

                    <InputLeftAddon 
                        bg="#D1DBE0"
                        h="3rem"
                        color="sub_heading"
                        borderRadius="5px 0px 0px 5px"
                        children={leftIcon} 
                    />

                    {!isPassword && <StandardInput register={register} placeholder={placeholder} id={id}/>}

                    {isPassword && <PasswordInput register={register} placeholder={placeholder} id={id} />}
                    
                    

                </InputGroup>
                <FormHelperText fontSize="12px">{helpText}</FormHelperText>

                {error && renderError(error.message)}
            </FormControl>
        </Flex>
    )
}

function StandardInput ({register, placeholder, id}) {
    return (
        <Input 
            id={id}
            placeholder={placeholder}
            type="text"
            variant="login"
            w="100%"
            borderRadius="0px 5px 5px 0px"
            {...register(id)}
            />
    )
}

function PasswordInput({register, placeholder, id}) {

    const [showPassword, setShowPassword] = useBoolean(false);

    return (
        <React.Fragment>
            <Input 
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            variant="login"
            w="100%"
            borderRadius="0px 5px 5px 0px"
            {...register(id)}
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
        </React.Fragment>
    )
}

