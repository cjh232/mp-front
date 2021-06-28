import Layout from '../components/layouts/layout'
import styles from '../styles/login.module.css'
import LoginForm from '../components/modules/loginForm'

import { Center, HStack, StackDivider, Box, Text, Container } from '@chakra-ui/react'


export default function Login() {
    return (
        <Layout login>
            <Center className={styles.login_container}>
                <HStack height="425px" divider={<StackDivider />}>
                    <Slogan />
                    <LoginForm ml="3rem" />
                </HStack>
            </Center>
        </Layout>
    )
}


function Slogan () {
    return (
        <Center h="100%" w="550px">
            <Container centerContent textAlign="center">
                <Text 
                    fontWeight="700"
                    fontSize="82px"
                    color="grey_dark"
                >Work it, Girl!</Text>
                <Container w="100%">
                    <Text fontSize="32px" color="grey_dark">Free Clothes for Working Women.</Text>
                </Container>
            </Container>
        </Center>
    )
}