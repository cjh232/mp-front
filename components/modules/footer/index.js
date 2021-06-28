import React from 'react';
import { Box, HStack, Flex, Text, Center, Link, StackDivider, Spacer  } from '@chakra-ui/react';
import { FaReact, FaPython } from 'react-icons/fa'
import { SiRedux, SiDjango, SiJavascript, SiNextDotJs } from 'react-icons/si'

import styles from './styles/footer.module.css'



export default function Footer() {

    return (
        <Flex 
        px={4}
        className={styles.footer}
        flexDirection="row" 
        justify="space-between"
        align="center"
        bg="primary"
        color="white">
        
            <FooterTools />
            <Text fontSize="14px">Want to see what's available?</Text>
        
        </Flex>
    )

}


function FooterTools () {

    const tools = ["React", "Django", "Redux", "Python", "Javascript", "NextJS"];

    return (
        <HStack spacing={3}>
            {tools.map(toolString => {
                return (
                    <Flex align="center" key={toolString}>
                        <Box w="25px">
                            <ToolIcon toolString={toolString} />
                        </Box>
                        <Spacer />
                        <Box>
                            <Text fontSize="14px">{toolString}</Text>
                        </Box>
                    </Flex> 
                )
            })}     
        </HStack>
    )
}


function ToolIcon ({toolString}) {
    switch(toolString) {
        case "React":
            return <FaReact/>
        case "Django":
            return <SiDjango/>
        case "Redux":
            return <SiRedux/>
        case "Python":
            return <FaPython/>
        case "Javascript":
            return <SiJavascript/>
        case "NextJS":
            return <SiNextDotJs />
        default:
            return <div></div>
    }
}