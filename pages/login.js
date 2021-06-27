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
                    <LoginForm ml="3.5rem" />
                </HStack>
            </Center>
        </Layout>
    )
}


function Slogan () {
    return (
        <Center h="100%" w="500px">
            <Container centerContent textAlign="center">
                <Text 
                    fontWeight="600"
                    fontSize="72px"
                >Work it, Girl!</Text>
                <Container>
                    <Text fontSize="32px">Free Clothes for Working Women.</Text>
                </Container>
            </Container>
        </Center>
    )
}