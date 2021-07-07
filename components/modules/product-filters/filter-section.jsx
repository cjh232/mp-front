import React from 'react';
import {
    Flex,
    Box, 
    Text,
    VStack,

} from '@chakra-ui/react';
import { useBoolean } from '@chakra-ui/hooks';
import { HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi';

import { FilterOption } from './filter-option';
import styles from './filters.module.css';

export default function FilterSection ({name, options, toggle, set, ...props}) {

    
    const [isOpen, setIsOpen] = useBoolean(false)

    const numToggled = set.size > 0 ? `- (${set.size})` : ''
    const title = `${name}`

    const renderOptions = () => {
        const rendered = options.map(option => {
            return <FilterOption key={option} toggle={toggle} option={option} isActive={set.has(option)}/>
        })
        return rendered
    }

    const renderSizeTypes = () => {
        const rendered = Object.keys(options).map((key) => {
            return (
                <SizeType 
                    type={key}
                    options={options[key]}
                    toggle={toggle}
                    set={set}
                />
            )
        })
        return rendered
    }

    return (
        <Box w="100%" {...props}>
        
            <Flex 
                w="100%" 
                align="center" 
                justify="space-between"
                _hover={{ cursor: "pointer"}}
                onClick={setIsOpen.toggle}>
            
                <Flex className="title_section" align="center">
                    <Text color="sub_heading" fontWeight="500" fontSize="16px">{title}</Text>
                    <Text 
                        ml="8px"
                        color="text_mute" 
                        fontSize="14px">{numToggled}</Text>
                </Flex>

                <Box>
                    {isOpen && <HiOutlineChevronUp size="14px"/>}
                    {!isOpen && <HiOutlineChevronDown size="14px"/>}
                </Box>
                
            
            </Flex>
            
            <Box 
                paddingLeft="12px" 
                mt="8px"
                maxH={isOpen ? "250px" : "0"}
                overflowX="hidden"
                w="100%"
                className={styles.custom_scrollbar}
            >
            
                <VStack
                    borderLeftWidth=".5px"
                    color="sub_heading"
                    paddingLeft="16px"
                    fontSize="14px"
                    align="start"
                    
                >

                    {name.toLowerCase() != "size" && renderOptions()}
                    {name.toLowerCase() == 'size' && renderSizeTypes()}
                
                </VStack>
                
            </Box>

        </Box>
    )
}

function SizeType ({type, options, toggle, set}) {
    return (
        <Flex direction="column" w="100%" justify="flex-start" align="flex-start">
            <Text mb="12px" fontSize="12px">{type}</Text>
            <VStack w="100%" align="start">
                {
                    options.map(option => {
                        return <FilterOption key={option} toggle={toggle} option={option} isActive={set.has(option)}/>
                    })
                }
            </VStack>
        </Flex>
    )
}




