import React from 'react'

import { 
    Text, 
    Flex, 
    Image,
    HStack
  } from '@chakra-ui/react';

// const sizes = ["S", "M", "L", "XL"]

export default function ProductSizes({sizes, ...props}) {

    const [ activeIndex, setActiveIndex ] = React.useState(0)

    return (
        <HStack mt="24px" {...props}>
            {
                sizes.map((size, i) => {
                    return (
                        <ProductSizeOption 
                            onClick={setActiveIndex}
                            idx={i}
                            size={size} 
                            isActive={i == activeIndex}
                        />
                    )
                })
            }
        </HStack>
    )
}

function ProductSizeOption({size, isActive, idx, onClick}) {
    return (
        <Flex 
            h="45px"
            minW="45px" 
            p={1}
            borderWidth=".5px"
            borderColor="#D1DBE0"
            justify="center"
            align="center"
            onClick={() => onClick(idx)}
            cursor="pointer"
            _hover={{bg: "#FFD7E2"}}
            bg={isActive ? "white" : ""}
        >
            <Text 
                fontSize="16px" 
                fontWeight={isActive ? "600" : "400"}
                color={isActive ? "heading": "sub_heading"}>{size}</Text>
        </Flex>
    )
}
