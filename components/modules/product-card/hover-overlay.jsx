import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';

export const HoverOverlay = ({ imgHeight }) => {


    return (
        <Box
            zIndex="2"
            h={imgHeight}
            position="absolute"
            w="100%"
            className="hover"
            opacity="0"
            _hover={{
                opacity: "1",
                cursor: "pointer"
            }}
        >
            <ViewProduct/>
        </Box>
)
}

const ViewProduct = () => {
    return (
        <Flex
        zIndex="2"
        position="absolute"
        bottom="0"
        h="45px"
        w="100%"
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

