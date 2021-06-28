import React from 'react';

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
import { HiOutlineLockClosed } from 'react-icons/hi';


export default function PasswordInput({register, showPassword, togglePasswordShow, errors}) {

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
            <InputGroup>
                <InputLeftAddon 
                bg="grey_secondary"
                h="3rem"
                color="grey_emphasize"
                borderRadius="5px 0px 0px 5px"
                children={<HiOutlineLockClosed size="16px"/>} />
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
                    <Center h="3rem" onClick={togglePasswordShow} className="center" color="grey_emphasize">
                        {showPassword && <AiFillEye size="1rem" />}
                        {!showPassword && <AiFillEyeInvisible size="1rem" />}
                    </Center>
                </InputRightElement>
                
            </InputGroup>

            {errors.password && renderError(errors.password.message)}
            

        </FormControl>
    )
}