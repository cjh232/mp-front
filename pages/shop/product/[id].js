import React from 'react'
import ProductLayout from 'components/layouts/product-layout';
import { useRouter } from 'next/router';

import { 
    Text, 
    Flex, 
    Button,
    Select,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Divider
  } from '@chakra-ui/react';

import Section from 'components/layouts/section';
import Carousel from 'components/modules/carousel';
import ProductSizes from 'components/modules/product-sizes';

// Redux
import { getProductDetails } from 'redux/store/store.actions';
import { useDispatch, useSelector } from 'react-redux';

import { getProductSizes } from 'redux/store/store.actions';

export default function Product() {
    const router = useRouter();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetails).product
    const sizes = useSelector(state => state.sizes).sizes

    const {id} = router.query;

    // TODO: Add method to get new sizes available
    const getSizesAvailbleInColor = (value) => {
        if (value) {
            dispatch(getProductSizes({productId: id, color: value}))
        } 
    }

    React.useEffect(() => {
        if (id !== undefined) {
            dispatch(getProductDetails(id))
        }
    }, [id])

    return (
        <ProductLayout>
            <Section 
                w="100%" 
                h="600px"
                borderBottom="1px solid #D1DBE0" 
                bg="#F1F1F1" 
                mt="65px" >
                <Carousel />
                <Flex 
                    direction="column" 
                    position="relative"
                    justify="flex-start"
                    align="start" 
                    h="525px"
                    ml="48px" 
                    >
                    <Text 
                        fontSize="32px" 
                        w="550px" 
                        color="heading" 
                        fontWeight="600">{product.title}</Text>

                    <Breadcrumb fontSize="16px" color="sub_heading" fontWeight="500">
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/shop/${product.category_name.toLowerCase()}`}>{product.category_name}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                        <BreadcrumbLink href={`/shop/${product.sub_category_name.toLowerCase()}`}>{product.sub_category_name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <ProductSizes sizes={sizes} mt="80px"/>
                    <Select 
                        onChange={(e) => getSizesAvailbleInColor(e.target.value)}
                        mt="24px" 
                        defaultValue={product.available_colors[0]}
                        fontSize="14px" 
                        w="150px" 
                        h="40px"
                        variant="filled"
                        bg="white"
                        borderRadius="5px"
                        placeholder="Select a color"
                    >
                        {
                            product.available_colors.map(color => {
                                return <option onSelect={(value) => console.log(value)} value={color}>{color}</option>
                            })
                        }
                    </Select>
                    <Button mt="95px" borderRadius="2px" variant="submit">Add to Favorites</Button>
                </Flex>
            </Section>
            <Section>
            
                <Tabs mt="32px" w="650px" colorScheme="pink">
                    <TabList>
                        {
                            ["Details", "Comments", "Meta"].map(section => {
                                return (
                                    <Tab 
                                        _focus={{boxShadow: "none"}} 
                                        color="heading" 
                                        fontWeight="600">{section}</Tab>
                                )
                            })
                        }
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Text 
                                fontSize="14px" 
                                whiteSpace="pre-line"
                                textAlign="justify"
                                color="sub_heading"
                            >{product.details}</Text>
                        </TabPanel>
                        <TabPanel>
                            <p>Coming soon...</p>
                        </TabPanel>
                        <TabPanel fontSize="14px" >
                            <Text fontWeight="600" >Category:</Text><Text>{product.category_name}</Text>

                            <Text fontWeight="600" >Sub Category:</Text><Text>{product.sub_category_name}</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            
            </Section>
        </ProductLayout>
    )
}







