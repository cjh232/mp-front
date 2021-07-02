import React from 'react';
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
import { logInRequested } from '../../../redux/auth/auth.actions'
import { useDispatch, useSelector } from 'react-redux';

import styles from './loginForm.module.css';

// ELEMENTS
import FormInput from '../../elements/FromInput';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';

export default function LoginForm (props) {
   
    const auth = useSelector(state => state.auth)
    const storedEmail = auth.storedEmail
    const loading = auth.loading
    
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

    const successToast = () => {
        return toast({
            title: 'Login Success',
            description: "Redirecting...",
            status: "success",
            duration: 1000,
            position: "top",
        })
    }

    React.useEffect(() => {
        // Request Status changes twice, once when request starts
        // and once when it ends. Want to pick up only the ending change.
        if(loading) {
            return
        }

        if(auth.error) {
            if(auth.error !== null && auth.error.detail) {
                authErrorToast(auth.error.detail);
            }
            
        } else if(auth.user !== null){
            successToast();
        }

    }, [loading])


    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email please.').required('Uh oh, you\'re missing your email...'),
        password: Yup.string().required('You\'re missing your password...'),
        rememberUser: Yup.boolean().default(false),
    })
    
    const initialValues = {
        email: storedEmail,
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

        console.log(payload)

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
                
                <FormInput 
                    placeholder="Email address"
                    id="email"
                    register={register}
                    error={errors.email}
                    leftIcon={<HiOutlineMail size="16px" />}
                />

                <FormInput 
                    mt="2rem"
                    placeholder="Password"
                    id="password"
                    isPassword
                    register={register}
                    error={errors.password}
                    leftIcon={<HiOutlineKey size="16px" />}
                />
        
                <StoreUserSwitch register={register}/>
                
                <HelpSection/>
                
            </form>

            <SubmitButton isloading={loading}/>

        
        </Box>
    
    )

}

function SubmitButton ({isloading}) {
    return (
        <Button
            fontWeight="400"
            isLoading={isloading}
            loadingText="Logging in..."
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
        >Sign In</Button>
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
            <Text color="heading" fontSize="20px" fontWeight="600">Welcome back!</Text>
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
            <FormLabel 
                ml=".5rem" 
                mb="0" 
                color="sub_heading"
                fontSize="13px" 
                fontWeight="600">
                Remember me?
            </FormLabel>
        </FormControl>
    )
}

function HelpSection() {
    return (
        <Flex mt=".75rem" direction="column" color="text_mute">
            <Link fontSize="13px">Forgot your password?</Link>
            <Text fontSize="13px" mt=".25rem">
                Don't have an account?
                <Link 
                    ml=".25rem" 
                    fontWeight="600"
                    color="primary" href="/register">Sign Up</Link>
            </Text>
        </Flex>
    )
}


