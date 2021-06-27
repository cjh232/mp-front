import React from 'react';
import { useBoolean } from "@chakra-ui/react"
import { useRouter } from 'next/router'

// FORM VALIDATION
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


import { 
    FormControl,
    FormErrorMessage,
    Link,
    Input,
    Box,
    Text,
    Flex,
    InputRightElement, 
    Switch,
    FormLabel,
    Center,
    useToast,
} from '@chakra-ui/react';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

/** Redux */
import { logInRequested } from '../../../redux/auth/actions'
import { useDispatch, useSelector } from 'react-redux';

import styles from './loginForm.module.css';

const inputStyles = {
    bg:"#DCE6EB",
    h:"3rem",
    color:"#505564",
    fontSize:"14px",
    focusBorderColor:"#FB4AA5",
}

export default function LoginForm (props) {

    const [showPassword, setShowPassword] = useBoolean(false)
    
    const authReducer = useSelector(state => state.auth)
    const storedUser = authReducer.storedUser
    const authError = authReducer.error
    
    const dispatch = useDispatch();
    const router = useRouter();
    const toast = useToast();

    const authErrorToast = (errorMsg) => {
        return toast({
            title: 'Login Failure',
            description: errorMsg,
            status: "error",
            duration: null,
            position: "top",
            isClosable: true,
        })
    }

    React.useEffect(() => {
        if(authError !== null) {
            if(authError.detail) {
                authErrorToast(authError.detail);
            }
            
        }
    }, [authError])

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email please.').required('Uh oh, you\'re missing your email...'),
        password: Yup.string().required('You\'re missing your password...'),
        rememberUser: Yup.boolean().default(false),
    })
    
    const initialValues = {
        email: storedUser,
        password: "",
        rememberUser: true,
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues,
    })

    const onSubmit = (values) => {

        const payload = {
            email: values.email,
            password: values.password,
            rememberUser: values.rememberUser,
            router: router
        }

        dispatch(logInRequested(payload))

    }

    const renderError = (msg) => {

        return (
            <FormErrorMessage fontSize="12px" position="absolute">
                {msg}
            </FormErrorMessage>
        )
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
                <Text color="#505564" fontSize="20px" fontWeight="500">Welcome Back!</Text>
            </Flex>
    
            <form 
                id="login" 
                onSubmit={handleSubmit(onSubmit)} 
                className={styles.login_form}
            >

                <EmailInput register={register} errors={errors} renderError={renderError}/>
    
                <PasswordInput 
                    register={register} 
                    showPassword={showPassword}
                    togglePasswordShow={setShowPassword.toggle}
                    errors={errors}
                    renderError={renderError}
                />
    
                <StoreUserSwitch register={register}/>
                
                <HelpSection/>
                
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
                flex="1"
                bottom="0"
                border="0px outset #dddddd"
                borderRadius="0px 0px 10px 10px" 
                _hover={{filter: "brightness(110%)"}}
            >
                
                <Text>Log In</Text>
            </Box>

        
        </Box>
    
    )

}

function EmailInput({register, errors, renderError}) {

    
    return (
        <FormControl 
            id="email" 
            isRequired
            isInvalid={errors.email}>
            
            <Input 
                id="email"
                type="text"
                placeholder="Email"
                variant="login"
                {...register("email")}
            />
            {errors.email && renderError(errors.email.message)}

        </FormControl>
    )
}

function PasswordInput({register, showPassword, togglePasswordShow, errors, renderError}) {

    
    return (
        <FormControl 
            mt="2rem"
            id="password"
            isRequired
            isInvalid={errors.password}
        >
            <Input 
                id="password"
                placeholder="Password"
                variant="login"
                type={showPassword ? "text" : "password"}
                {...register("password")}
            /> 
            {errors.password && renderError(errors.password.message)}

            <InputRightElement 
                width="4.5rem" 
                _focus={{boxShadow: "none"}}
                _hover={{cursor: "pointer"}}
            >
                <Center h="3rem" onClick={togglePasswordShow}>
                    {showPassword && <AiFillEye color="#4F5463" />}
                    {!showPassword && <AiFillEyeInvisible color="#4F5463" />}
                </Center>
            </InputRightElement>

        </FormControl>
    )
}

function StoreUserSwitch({register}) {
    return (
        <FormControl 
            display="flex" 
            alignItems="center" 
            mt="2rem"
            color="#828790"
        >
            <Switch 
                name="rememberUser"
                {...register("rememberUser")}
                colorScheme="pink"
                defaultChecked
                size="sm"/>
            <FormLabel ml=".5rem" mb="0" fontSize="13px" fontWeight="600">
                Remember me?
            </FormLabel>
        </FormControl>
    )
}

function HelpSection() {
    return (
        <Flex mt=".75rem" direction="column" color="#828790">
            <Link fontSize="13px">Forgot your password?</Link>
            <Text fontSize="13px" mt=".25rem">
                Don't have an account?
                <Link ml=".25rem" color="#D53F8C" fontWeight="600">Sign Up</Link>
            </Text>
        </Flex>
    )
}


