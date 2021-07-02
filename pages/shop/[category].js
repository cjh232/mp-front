import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/layouts/layout';

import {
    HStack,
    Flex
} from '@chakra-ui/react';

// Components
import ProductCard from '../../components/modules/productCard';
import Filter from '../../components/modules/Filters'

export default function Shop () {
    const router = useRouter()
    const { category } = router.query;

    React.useEffect(() => {
        // useRouter is async, category may be undefined for a brief moment
        if (category !== undefined) {
            console.log(category)
        }
    }, [category])

    return (
        <Layout>
            <Flex 
                w="100%" 
                align="center" 
                justify="space-between" 
                h="750px"
                direction="column">
                    <Filter/>
            </Flex>
        </Layout>
    )
}