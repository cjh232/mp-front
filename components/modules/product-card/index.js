import {
    Box, 
    Flex, 
    Text, 
    Image,
    VStack,
    LinkOverlay,
    LinkBox
} from '@chakra-ui/react';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';

import {HoverOverlay } from './hover-overlay';
import { CardContent } from './card-content';


export default function ProductCard ({title, brand, id}) {

    const imgHeight = "400px"
    const placeholderImageSrc = "https://via.placeholder.com/274x400/E6558C/FFFFFF?text=Mitzys+People"

    // {<HoverOverlay imgHeight={imgHeight} />}

    return (
        <LinkBox 
            h="480px"  
        >
            <LinkOverlay href={`/shop/product/${id}`}> 
                <VStack spacing={0}>
                    <Image 
                        w="100%" 
                        bg="gray"
                        h={imgHeight} 
                        src="/images/boots.jpg" 
                        borderRadius="5px"
                        fallbackSrc={placeholderImageSrc} 
                        _hover={{
                            cursor: "pointer"
                        }}
                    />

                    <CardContent title={title} brand={brand} pt="8px" h="60px" w="100%"/>
                    
                </VStack>
            </LinkOverlay>
        </LinkBox>
    )
}

function ViewProduct () {
    return (
        <Flex
            zIndex="54"
            position="absolute"
            bottom="0"
            h="45px"
            w="240px"
            bg="rgba(245, 248, 250, 0.5)"
            color="sub_heading"
            align="center"
            borderRadius="0px 0px 5px 5px"

            justify="center"
        >
            <Text
                fontSize="14px"
            
            >View Product</Text>
        </Flex>
    )
}

function ContentSection ({title, brand, ...props}) {

    return (
        <VStack {...props} spacing>
            <Flex 
                direction="row" 
                align="center"
                justify="space-between"
                w="100%"
             >
                <Text
                    fontSize="14px"
                    w="200px"
                    isTruncated
                    color="sub_heading"
                    fontWeight="600"
                >{title}</Text>
                <Box
                    color="sub_heading" 
                    _hover={{
                        cursor: "pointer"
                    }}
                >
                    <HiOutlineDotsHorizontal/>
                </Box>
            </Flex>
            <Box w="100%">
                <Text fontSize="12px" color="text_mute">{brand}</Text>
            </Box>

        </VStack>
    )

}