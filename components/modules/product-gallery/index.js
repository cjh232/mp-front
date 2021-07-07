import React from 'react'
import { Flex, Grid, GridItem, Text, SimpleGrid  } from '@chakra-ui/react';

import ProductCard from '../product-card'
import { HiOutlineEmojiSad } from 'react-icons/hi'

export const ProductGallery = ({products}) => {

    const renderProducts = () => {

        return products.map(product => {
            return (
                <GalleryItem key={product.title} product={product}/>
            )
        })

    }

    const renderIfAvailable = () => {
        if (products.length >= 1) {
            return (
                <SimpleGrid 
                    spacing={{sm: 1, md: 3, lg: 4}}
                    columns={{sm:1, md:2, lg: 3, xl: 4}}
                    w={{sm: "100%", md: "90%", lg: "95%", xl: "95%"}}
                >
                    {renderProducts()}           
                </SimpleGrid>
            )
        } else {
            return (
                <Flex w="600px" align="center" justify="center" color="text_mute">
                    <HiOutlineEmojiSad size="48px"/>
                    <Text ml="12px" fontSize="32px">Uh oh! We're all out...</Text>
                </Flex>
                
            )
        }
    }

    return (
        <Flex 
            minH="600px" 
            w="100%" 
            align={products.length > 0 ? "start" : "center"}
            justify={products.length > 0 ? "flex-end" : "center"}>
            {renderIfAvailable()}
        </Flex>
    )
}


const GalleryItem = ({ product }) => {
    return (
        <GridItem>
            <ProductCard title={product.title} brand={product.brand} id={product.product_id}/>
        </GridItem>
    )
}
