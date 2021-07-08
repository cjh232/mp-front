import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

export default function Section ({children, ...props}) {
    return (
        <Flex {...props} justify="center">
            <Flex 
                w={{sm: 400, md: "80%", lg: 1140, xl: 1440}} 
                className="section_content"
                align="center"
            >
                {children}
            </Flex>
        </Flex>
    )
}
