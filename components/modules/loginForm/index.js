import React from 'react';
import { useBoolean } from "@chakra-ui/react"
import { useRouter } from 'next/router'

import { 
    FormControl,
    Link,
    Input,
    Box,
    Text,
    Flex,
    InputRightElement, 
    Center
} from '@chakra-ui/react';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

/** Redux */
import { logInRequested } from '../../../redux/auth/actions'
import { useDispatch } from 'react-redux';

import styles from './loginForm.module.css';


export default function LoginForm (props) {

    const [showPassword, setShowPassword] = useBoolean(false)

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const dispatch = useDispatch();
    const router = useRouter();

    const updatePassword = (value) => {
        setPassword(value)
    }

    const updateEmail = (value) => {
        setEmail(value)
    }

    const submit = (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: password,
            router: router
        }

        dispatch(logInRequested(payload))
    }

    return (

        <Box
            w="22rem"
            h="100%"
            borderRadius="13px"
            shadow="lg"
            border="1px solid #dddddd"
            position="relative"
            bg="#FFFFFF"
            {...props}
        >

            <Flex 
                w="100%" 
                padding="2rem 0rem 0rem 2rem"
                justify="start"
                align="center"
                h="50px">
                <Text 
                    color="#505564"
                    fontSize="20px"
                    fontWeight="500"
                >Welcome Back!</Text>
            </Flex>

            <form 
                id="login" 
                onSubmit={(e) => submit(e)} 
                className={styles.login_form}
            >
                <FormControl>
                    <Input 
                        bg="#DCE6EB" 
                        h="3rem"
                        color="#505564" 
                        borderRadius="5px"
                        fontSize="14px"
                        className={styles.input}
                        focusBorderColor="#FB4AA5"
                        onChange={(e) => updateEmail(e.target.value)}
                        placeholder="Email"/>
                </FormControl>

                <FormControl mt="2rem">
                    <Input 
                        bg="#DCE6EB" 
                        h="3rem"
                        color="#505564" 
                        borderRadius="5px"
                        fontSize="14px"
                        className={styles.input}
                        focusBorderColor="#FB4AA5"
                        onChange={(e) => updatePassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"/>
                        <InputRightElement 
                            width="4.5rem" 
                            _focus={{boxShadow: "none"}}
                            _hover={{cursor: "pointer"}}
                        >
                            <Center h="3rem" onClick={setShowPassword.toggle}>
                                {showPassword && <AiFillEye color="#4F5463" />}
                                {!showPassword && <AiFillEyeInvisible color="#4F5463" />}
                            </Center>
                        </InputRightElement>
                </FormControl>

                <Flex mt="1rem" direction="column" color="#828790">
                    <Link fontSize="13px">Forgot your password?</Link>
                    <Text fontSize="13px" mt=".5rem">
                        Don't have an account?
                        <Link  
                            ml=".25rem" 
                            color="#D53F8C" 
                            fontWeight="600"
                        >Sign Up</Link>
                    </Text>
                </Flex>
            
            </form>

            


            <Box
            as="button"
            bg="#D53F8C"
            color="white"
            w="100%"
            h="3rem"
            type="submit"
            form="login"
            position="absolute"
            bottom="0"
            border="0px outset #dddddd"
            borderRadius="0px 0px 10px 10px" 
            >
                <Text>Log In</Text>
            </Box>
        
        
        </Box>

    )
}
