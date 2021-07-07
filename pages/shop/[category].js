import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/layouts/layout';
import Head from 'next/head'

import {
    Flex,
    Divider,
    Text,
    Skeleton,
    Select
} from '@chakra-ui/react';

// Components
import { ProductGallery } from '../../components/modules/product-gallery'
import Filter from '../../components/modules/product-filters'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, getCategoryDetails } from '../../redux/store/store.actions';

import { Headline } from '../../components/modules/headline';

export default function Shop () {
    const router = useRouter();
    const dispatch = useDispatch();
    const { category } = router.query;
    const parentCategory = useSelector(state => state.categories).parent
    const products = useSelector(state => state.productList).products
    const loading = useSelector(state => state.productList).loading

    React.useEffect(() => {
        // useRouter is async, category may be undefined for a brief moment
        if (category !== undefined) {
            dispatch(listProducts(category))
            dispatch(getCategoryDetails(category))
        }
    }, [category])

    return (
        <Layout>
            <Head>
                <title>Work it, Girl: {category}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Flex w="100%" direction="column">
                <Headline mt="32px"/>
                <Flex w="100%" align="baseline" justify="space-between" mt="32px">
                    <Text fontSize="48px" fontWeight="600" casing="capitalize">{category}</Text>
                    <Flex w="250px" align="center" justify="space-between">
                        <Select fontSize="12px" w="150px" size="sm">
                            <option>Newest First</option>
                            <option>Oldest First</option>
                        </Select>
                    <Text fontSize="14px" color="text_mute">{products.length} product(s)</Text>
                    </Flex>
                </Flex>
                <Divider orientation="horizontal" />
            </Flex>
            <Flex 
                w="100%" 
                mt="48px"
                h="750px"
                align="start"
                justify="space-between"

            >
                    <Filter currrentCategory={category} parentCategory={parentCategory}/>
                    <Skeleton w="100%" isLoaded={!loading}>
                        <ProductGallery products={products}/>
                    </Skeleton>

                    

            </Flex>
        </Layout>
    )
}