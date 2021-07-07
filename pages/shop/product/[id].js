import React from 'react'
import Layout from '../../../components/layouts/layout';
import { useRouter } from 'next/router';

import { 
    Text, 
    Flex, 
    Image, 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Button
  } from '@chakra-ui/react';

import { HiHeart } from 'react-icons/hi'

// Redux
import { getProductDetails } from '../../../redux/store/store.actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Product() {
    const router = useRouter();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetails).product

    const {id} = router.query;

    React.useEffect(() => {
        if (id !== undefined) {
            console.log(id)
            dispatch(getProductDetails(id))
        }
    }, [id])

    return (
        <Layout>
            <Flex w="100%" mt="64px" align="center" justify="center" direction="column">
                <Flex 
                    direction="row" 
                    w="80%" 
                    justify="space-between" 
                    align="start"
                >
                    <Image w="50%" h="500px"/>
                    <ProductDetails 
                        w="50%"
                        h="600px"
                        p="32px"
                        category={product.category_name}
                        sub_category={product.sub_category_name}
                        title={product.title} 
                        details={product.details}/>
                </Flex>

                <MetaTabs 
                    colors={product.available_colors} 
                    sub_category={product.sub_category_name}
                    category={product.category_name} />
            </Flex>
        </Layout>
    )
}

function ProductDetails({title, category, sub_category, details, ...props}) {
    return (
        <Flex 
            direction="column" 
            {...props}
            align="start" 
            justify="flex-start"
        >
            <Text fontSize="28px" fontWeight="600">{title}</Text>
            <Breadcrumb fontSize="14px" color="text_mute" >
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/shop/${category.toLowerCase()}`}>{category}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/shop/${sub_category.toLowerCase()}`}>{sub_category}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Text mt="64px" whiteSpace="pre-line" textAlign="justify" fontSize="16px">{details}</Text>

            <Button mt="64px" isFullWidth rightIcon={<HiHeart />}>Add to Favorites</Button>
        </Flex>
    )
}

function MetaTabs({colors, category, sub_category, id, brand}) {
    return (
        <Tabs w="80%">
            <TabList>
                <Tab>Colors</Tab>
                <Tab>Sizes</Tab>
                <Tab>Meta</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    {
                        colors.map(color => {
                            return (
                                <Text>{color}</Text>
                            )
                        })
                    }
                </TabPanel>
                <TabPanel>
                    <Text>Coming soon...</Text>
                </TabPanel>
                <TabPanel>
                    <Text><b>Category: </b>{category}</Text>
                    <Text><b>Sub Category: </b>{sub_category}</Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
