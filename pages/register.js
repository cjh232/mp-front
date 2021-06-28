import RegisterForm from "../components/modules/registerForm"
import Layout from "../components/layouts/layout"

import { Center } from '@chakra-ui/react';

export default function Register() {
    return (
        <Layout login>
            <Center w="100%" h="100%">
                <RegisterForm />
            </Center>
        </Layout>
    )
}