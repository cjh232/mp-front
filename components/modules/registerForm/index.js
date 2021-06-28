import {
    Text, 
    Flex,
    FormControl,
    Input,
    Spacer,
    Divider,
    Link
} from '@chakra-ui/react';

import PhoneInput from './elements/PhoneInput';
import NameInput from './elements/NameInput';
import EmailInput from './elements/EmailInput';
import SubmitButton from './elements/SubmitButton';
import Header from './elements/Header';

// CSS
import styles from './registerForm.module.css';

export default function RegisterForm () {
    return (
        <Flex
            w="45rem"
            h="700px"
            borderRadius="12px"
            shadow="lg"
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
                <NameInput />
                <PhoneInput mt="2rem" />
                <EmailInput mt="2rem" />

                <SubmitButton mt="2rem" w="625px"/>

            </form>
            
        </Flex>
    )
}
 


