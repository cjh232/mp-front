import React from 'react'
import {
    Flex,
    Text,
} from '@chakra-ui/react';

import { HiX } from 'react-icons/hi';


export const FilterOption = ({toggle, option, isActive, ...props}) => {
    return (
        <Flex 
            align="center" 
            justify="space-between" 
            h="40px"
            borderWidth=".5px"
            borderRadius="5px"
            padding="8px"
            w="90%"
            fontSize="12px"
            fontWeight={isActive ? "600" : "400"}
            color={isActive ? "heading" : "text_mute"}
            _hover={{ 
                    cursor: "pointer",
                    fontWeight: "600",
                    color: "heading"
                }} 
            onClick={() => toggle(option)}
            >
            <Text isTruncated w="140px">{option}</Text>
            {isActive && <HiX size="14px" />}
            
        </Flex>
    )
}
