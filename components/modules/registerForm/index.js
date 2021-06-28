import {
    Text, 
    Flex,
    FormControl,
    Input,
    Spacer,
    Divider,
    Link,
    Button,
} from '@chakra-ui/react';

import FormInput from '../../elements/FromInput'
import SubmitButton from './elements/SubmitButton';

// CSS
import styles from './registerForm.module.css';

import { HiOutlinePhone, HiOutlineMail, HiOutlineUser } from 'react-icons/hi';

export default function RegisterForm () {

    // TODO: Replace with form validation register function.
    function spoofRegister() {
        return;
    }
    return (
        <Flex
            w="30rem"
            h="575px"
            borderRadius="12px"
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

            <form className={styles.register_form}>

                <Flex w="100%">

                    <FormInput 
                        w="12rem"
                        placeholder="First name"
                        id="fname"
                        register={spoofRegister}
                        leftIcon={<HiOutlineUser size="17px" />}
                    />

                    <Spacer />

                    <FormInput 
                        w="12rem" 
                        placeholder="Last name"
                        id="lname"
                        register={spoofRegister}
                        leftIcon={<HiOutlineUser size="17px" />}
                    />
                
                </Flex>

                <FormInput 
                    mt="2rem" 
                    placeholder="Phone number"
                    helpText="We'll never share your number."
                    id="phone"
                    register={spoofRegister}
                    leftIcon={<HiOutlinePhone size="16px" />}
                />

                <FormInput 
                    mt="1.5rem" 
                    placeholder="Email address"
                    helpText="We'll also never share your email."
                    id="email"
                    register={spoofRegister}
                    leftIcon={<HiOutlineMail size="16px" />}
                />

                <HelpSection />

            </form>

            <Button
            fontWeight="400"
            isLoading={false}
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
        >Join now</Button>
            
        </Flex>
    )
}
 
function Header () {
    return (
        <Flex 
            direction="column"
            align="center"
            textAlign="center"
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
        <Flex mt=".75rem" direction="column" color="text_mute">
            <Text fontSize="14px" mt=".25rem">
                Already have an account?
                <Link ml=".25rem" color="pink_emphasize" href="/login">Sign In</Link>
            </Text>
        </Flex>
    )
}
