import {
    Text, 
    Flex,
    Divider,
    Link,
    Button,
    HStack,
    VStack,
    Progress,
    useToast
} from '@chakra-ui/react';

import FormInput from '../../elements/FromInput'

/** Redux */
import { registerRequested } from '../../../redux/auth/auth.actions'
import { useDispatch, useSelector } from 'react-redux';

// CSS
import styles from './registerForm.module.css';

import { 
    HiOutlinePhone, 
    HiOutlineMail, 
    HiOutlineKey,
    HiOutlineUser, 
} from 'react-icons/hi';

// FORM VALIDATION
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React from 'react';


export default function RegisterForm () {


    const registerState = useSelector(state => state.userRegister)
    const loading = registerState.loading;
    const dispatch = useDispatch();
    const toast = useToast();

    const errorToast = (errorMsg) => {
        return toast({
            title: 'Oops, we hit a snag.',
            description: errorMsg,
            status: "error",
            duration: null,
            position: "top",
            isClosable: true,
        })
    }
    
    const successToast = () => {
        return toast({
            title: 'Account successfully created!',
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
        if(registerState.error) {
            if(registerState.error !== null && registerState.error.detail) {
                errorToast(registerState.error.detail);
            }
            
        } else if(registerState.ok) {
            successToast()
        }

    }, [loading])

    const completionProgress = (dirtyFields, errors) => {

        let numCorrect = 0;

        for( const [key, value] of Object.entries(dirtyFields)) {
            if(!errors[key]) {
                numCorrect+=1
            }
        }
        
        return (numCorrect / 6) * 100;
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter a valid email please.')
            .required('Uh oh, you\'re missing your email...'),
        first_name: Yup.string()
            .required('First name is required'),
        last_name: Yup.string()
            .required('Last name is required'),
        password: Yup.string().required('Password is required.'),
        passwordVerify: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match.'),
        phone: Yup.string()
            .matches(new RegExp('[0-9]{10}'), 'Enter a valid phone number please. Excluding letters and special characters.')
            .min(10, 'Number must be 10 digits in length, excluding area code.')
            .max(10, 'Number must be 10 digits in length, excluding area code.')
    })

    const initialValues = {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        passwordVerify: '',
        phone: '',
    }

    const { register, handleSubmit, getValues, formState: { errors, touchedFields, dirtyFields } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues,
    })

    const onSubmit = (values) => {
        console.log(values)

        dispatch(registerRequested(values));
    }

    return (
        <Flex
            w="55rem"
            h="700px"
            borderRadius="7px"
            shadow="xl"
            border="1px solid #dddddd"
            position="relative"
            bg="#FFFFFF"
            direction="column"
            padding="3rem"
            align="center"
            justify="start"
        >
            <Header/>

            <form 
            className={styles.register_form} 
            id="register"
            onSubmit={handleSubmit(onSubmit)}>

                <HStack spacing="2rem" h="100%">

                    <VStack 
                        className="left" 
                        w="24rem" 
                        h="100%" 
                        spacing="3rem"
                    >

                        <NameSection register={register} errors={errors} />

                        <PhoneSection register={register} errors={errors}/>

                        <EmailSection register={register} errors={errors}/>
                    
                    </VStack>

                    <Divider orientation="vertical" />
                    
                    <VStack 
                        className="right" 
                        w="24rem" 
                        h="100%" 
                    >
                        <PasswordSection register={register} errors={errors}/>
                    </VStack>
                
                </HStack>

                <ProgressSection progress={completionProgress(dirtyFields, errors)}/>

                <HelpSection />
                
                

            </form>

            <Button
            fontWeight="600"
            isLoading={loading}
            loadingText="Putting it all together..."
            color="white"
            bg="primary"
            h="3rem"
            type="submit"
            form="register"
            w="100%"
            isDisabled={completionProgress(dirtyFields, errors) === 100 ? false : true}
            position="absolute"
            bottom="0"
            borderRadius="0px 0px 5px 5px" 
            _hover={{filter: "brightness(110%)"}}
        >Join now</Button>
            
        </Flex>
    )

    
}

function ProgressSection ({progress}) {

    const progressText = () => {
        if(progress == 100) {
            return "All done!"
        }
        if(progress >= 60) {
            return  "Almost there..."
        }

        return "Just a few steps...";

    }

    return (
        <React.Fragment>
            <Text 
                mt="1rem" 
                fontSize="14px" 
                color={progress == 100 ? "sub_heading" : "text_mute"} 
                fontStyle="italic"
            >{progressText()}</Text>
            <Progress 
                borderRadius="5px" 
                height="12px" 
                hasStripe 
                value={progress} 
                w="100%" 
                bg="grey_secondary"
                colorScheme="pink"
                isAnimated
            />
        </React.Fragment>
    )
}
 
function Header () {
    return (
        <Flex 
            direction="column"
            align="center"
            justify="center"
            h="6rem"
            w="100%"
            bg="#F7F7F7"
            textAlign="center"
            position="absolute"
            borderRadius="5px 5px 0px 0px" 
            borderBottom="1px solid #E2E8F0"  
            top="0"
        >
            <Text 
                fontSize="32px" 
                fontWeight="600"
                color="heading"
                >Welcome aboard!</Text>
            <Text
                fontWeight="300"
                fontSize="14px"
                color="sub_heading"
            >You're a few steps away from joining a blossoming community.</Text>
        </Flex>
    )
}


function HelpSection() {
    return (
        <Flex mt="1rem" direction="column" color="sub_heading">
            <Text fontSize="14px" mt=".25rem">
                Already have an account?
                <Link 
                    ml=".25rem" 
                    fontWeight="600"
                    color="pink_primary" href="/login">Sign In</Link>
            </Text>
        </Flex>
    )
}

function NameSection({register, errors, ...props}) {
    return (
        <HStack w="100%" spacing="2rem" {...props}>

            <FormInput 
                w="10rem"
                placeholder="First name"
                id="first_name"
                error={errors.fname}
                register={register}
                leftIcon={<HiOutlineUser size="17px" />}
            />

            <FormInput 
                w="10rem" 
                placeholder="Last name"
                id="last_name"
                error={errors.lname}
                register={register}
                leftIcon={<HiOutlineUser size="17px" />}
            />
        
        </HStack>
    )
}

function EmailSection({register, errors, ...props}) {
    return (
        <FormInput 
            mt="1.5rem"
            w="100%" 
            placeholder="Email address"
            helpText="We'll also never share your email."
            id="email"
            error={errors.email}
            register={register}
            {...props}
            leftIcon={<HiOutlineMail size="16px" />}
        />
    )
}

function PhoneSection({register, errors, ...props}) {
    return (
        <FormInput 
            w="100%"
            placeholder="Phone number"
            helpText="We'll never share your number."
            id="phone"
            error={errors.phone}
            register={register}
            {...props}
            leftIcon={<HiOutlinePhone size="16px" />}
        />
    )
}


function PasswordSection ({register, errors, ...props}) {
    return (
        <VStack 
            w="100%"  
            h="100%"
            spacing="3rem"
            {...props}
            >
        
            <FormInput 
                w="100%"
                placeholder="Password"
                id="password"
                error={errors.password}
                isPassword
                register={register}
                leftIcon={<HiOutlineKey size="17px" />}
            />


            <FormInput 
                w="100%"
                placeholder="Verify password"
                id="passwordVerify"
                error={errors.passwordVerify}
                isPassword
                register={register}
                leftIcon={<HiOutlineKey size="17px" />}
            />
        
        </VStack>
    )
}