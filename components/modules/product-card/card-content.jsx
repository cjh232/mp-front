import React from 'react'
import { VStack, Flex, Text, Box } from '@chakra-ui/react'

import { HiOutlineDotsHorizontal } from 'react-icons/hi';

export const CardContent = ({ title, brand, ...props}) => {
    return (
        <VStack {...props} spacing>
            <Flex 
                direction="row" 
                align="center"
                justify="space-between"
                w="100%"
                >
                <Text
                    fontSize="12px"
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
