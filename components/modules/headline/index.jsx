import React from 'react'
import { SimpleGrid, Image, Box, GridItem, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

export const Headline = (props) => {
    return (
        <SimpleGrid 
            spacing={4}
            display={{sm: "none", lg: "flex"}} 
            {...props}>
                        
            <HeadingCard imgSrc={'shirts.jpg'} title="Tops" />
            <HeadingCard imgSrc={'stuff.jpg'} title="Accessories"/>
            <HeadingCard imgSrc={'shoes_1.jpg'} title="Shoes"/>
            <HeadingCard imgSrc={'bottoms.jpg'} title="Bottoms"/>
            
        </SimpleGrid>
    )
}

function HeadingCard ({imgSrc, title,}) {
    return (
        <LinkBox  
            w="350px" 
            position="relative"
            textAlign="center"
            h="200px" >
            <LinkOverlay href={`/shop/${title.toLowerCase()}`}>
                <Image w="100%" h="100%" src={`/images/${imgSrc}`} borderRadius="5px" opacity=".85"/>
                <Text 
                    zIndex="4"
                    color="white" 
                    position="absolute" 
                    top="8px" 
                    left="16px"
                    fontSize="28px"
                    fontWeight="500"
                    >{title}</Text>

                <Box 
                    position="absolute" 
                    w="100%"
                    top="0" 
                    h="100%" 
                    opacity=".25"
                    borderRadius="5px"
                    bg="blackAlpha.800"
                />
            </LinkOverlay>
        </LinkBox>
    )
}
