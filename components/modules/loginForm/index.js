import React from 'react';
import { useBoolean } from "@chakra-ui/react"
import { useRouter } from 'next/router'

// FORM VALIDATION
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// CHAKRA 
import { 
    FormControl,
    Link,
    Box,
    Text,
    Flex,
    Switch,
    FormLabel,
    useToast,
    Button
} from '@chakra-ui/react';


/** Redux */
import { logInRequested } from '../../../redux/auth/actions'
import { useDispatch, useSelector } from 'react-redux';

import styles from './loginForm.module.css';

// ELEMENTS
import EmailInput from './elements/EmailInput';
import PasswordInput from './elements/PasswordInput';

export default function LoginForm (props) {

    const [showPassword, setShowPassword] = useBoolean(false)
    
    const authReducer = useSelector(state => state.auth)
    const storedUser = authReducer.storedUser
    const authError = authReducer.error
    const loginRequestActive = authReducer.requestActive
    
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

    return (

        <Box
            w="22rem"
            h="100%"
            borderRadius="7px"
            shadow="lg"
            border="1px solid #dddddd"
            position="relative"
            bg="#FFFFFF"
            {...props}
        >
    
            <WelcomeText />
    
            <form id="login" onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>

                <EmailInput register={register} errors={errors}/>
    
                <PasswordInput 
                    register={register} 
                    showPassword={showPassword}
                    togglePasswordShow={setShowPassword.toggle}
                    errors={errors}
                />
    
                <StoreUserSwitch register={register}/>
                
                <HelpSection/>
                
            </form>

            <SubmitButton loginRequestActive={loginRequestActive}/>

        
        </Box>
    
    )

}

function SubmitButton ({loginRequestActive}) {
    return (
        <Button
            fontWeight="400"
            isLoading={loginRequestActive}
            loadingText="Logging In..."
            color="white"
            bg="primary"
            h="3rem"
            type="submit"
            form="login"
            w="100%"
            position="absolute"
            bottom="0"
            borderRadius="0px 0px 5px 5px" 
            _hover={{filter: "brightness(110%)"}}
        >Log In</Button>
    )
}

function WelcomeText() {
    return (
        <Flex 
            w="100%" 
            padding=".5rem 0rem 0rem 1.5rem"
            justify="start"
            align="center"
            h="50px">
            <Text color="#505564" fontSize="20px" fontWeight="600">Welcome Back!</Text>
        </Flex>
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
        <Flex mt=".75rem" direction="column" color="grey_mute">
            <Link fontSize="13px">Forgot your password?</Link>
            <Text fontSize="13px" mt=".25rem">
                Don't have an account?
                <Link ml=".25rem" color="pink_emphasize">Sign Up</Link>
            </Text>
        </Flex>
    )
}


