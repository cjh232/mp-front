import Layout from '../components/layouts/layout'
import styles from '../styles/login.module.css'
import LoginForm from '../components/modules/loginForm'

import { Center, HStack, StackDivider, Box, Text, Container, Stack } from '@chakra-ui/react'


export default function Login() {
    return (
        <Layout login>
            <Center className={styles.login_container}>
                <Stack 
                    direction={{sm: "column", md: "column", lg: "row", xl: "row"}}
                    height={{sm: "500px", md: "525px", lg: "425px", xl: "425px"}}
                    align="center" 
                    divider={<StackDivider display={{sm: "none", md:"none", lg: "flex"}} />}>
                    <Slogan display={{sm: "flex", md:"flex", lg: "flex"}}/>
                    <LoginForm 
                        ml={{sm: "0rem", md: "0rem", lg: "3rem", xl: "3rem"}} 
                        w={{sm: "400px", md: "400px"}} 
                    />
                </Stack>
            </Center>
        </Layout>
    )
}

function ResponsiveDivider (props) {
    return (
        <StackDivider />
    )
} 


function Slogan (props) {
    return (
        <Center 
            height={{sm: "50px", md: "75px", lg: "425px", xl: "425px"}}
            mb={{sm: "8px", md: "16px", lg: "0rem", xl: "0rem"}} 
            {...props}
        >
            <Container centerContent textAlign="center">
                <Text 
                    fontWeight="600"
                    fontSize={{sm: "48px", md: "48px", lg: "82px", xl: "82px"}}
                    color="grey_dark"
                >Work it, Girl!</Text>
                <Container w="100%">
                    <Text 
                        fontSize="32px" 
                        color="grey_dark"
                        fontSize={{sm: "0px", md: "16px", lg: "32px", xl: "32px"}}
                    >Free Clothes for Working Women.</Text>
                </Container>
            </Container>
        </Center>
    )
}