import {
    Box, 
    Flex, 
    Text, 
    Image,
    VStack
} from '@chakra-ui/react';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';

export default function ProductCard (props) {

    const testTitle = "King Ice Black Mamba Number 24 Necklace"
    const testBrand = "King Ice"

    const imgHeight = "300px"

    return (
        <Box 
            w="240px" 
            h="360px"  
        >

            <VStack spacing={0}>
                <Image 
                    w="100%" 
                    bg="gray"
                    h={imgHeight} 
                    src="gibbresh.png" 
                    borderRadius="5px"
                    fallbackSrc="https://via.placeholder.com/240x300"  
                    _hover={{
                        cursor: "pointer"
                    }}
                />

                <Box
                    zIndex="60"
                    h={imgHeight}
                    position="absolute"
                    w="240px"
                    opacity="0"
                    _hover={{
                        opacity: "1",
                        cursor: "pointer"
                    }}
                >
                    <ViewProduct/>
                </Box>
                

                <ContentSection 
                    title={testTitle}
                    brand={testBrand}
                    w="100%"
                    className="content_section" 
                    pt="8px"
                    h="60px"/>

            </VStack>
            
        </Box>
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