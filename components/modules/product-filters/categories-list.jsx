import React from 'react';
import {
    Flex,
    Box, 
    Text,
    VStack,
    Link

} from '@chakra-ui/react';

export default function Categories ({parentCategory, currrentCategory, categories, ...props}) {

    return (
        <Box w="100%" {...props}>
            <Box paddingLeft="12px" mt="12px">
                <VStack
                    borderLeft="1px"
                    borderColor="text_mute"
                    color="sub_heading"
                    paddingLeft="16px"
                    fontSize="14px"
                    fontWeight="500"
                    align="start"
                >
                    {categories.map((category) => {
                        return (
                            <Link key={category.name} textAlign="left" fontSize="14px" href={`/shop/${category.name.toLowerCase()}`}>{category.name}</Link>
                        )
                    })}

                    {currrentCategory !== 'all' && <Link href={`/shop/${parentCategory.toLowerCase()}`}>...</Link>}

                </VStack>
            </Box>
        </Box>
    )
}