import {
    Box, 
    Text, 
    VStack,
    Flex, 
    Link
} from '@chakra-ui/react'

import { useBoolean } from '@chakra-ui/hooks';

import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

export default function Filter () {

    


    return (
        <Box 
            w="250px" 
            h="600px"
        >
        
            <Categories />
            <Categories mt="24px"/>
        </Box>
    )
}

function Categories (props) {

    const [isOpen, setIsOpen] = useBoolean(false)

    const dummyCategories = [
        "All",
        "Intimates and Lounge",
        "Beauty",
        "Accessories",
        "Bottoms",
        "Shoes",
        "Tops"
    ]

    const openButton = () => {
        return (
            <Box 
                onClick={setIsOpen.toggle}
                _hover={{
                    cursor: "pointer"
                }}
            >
                <HiOutlineChevronDown />
            </Box>
        )
    }

    const closeButton = () => {
        return (
            <Box 
                onClick={setIsOpen.toggle}
                _hover={{
                    cursor: "pointer"
                }}
            >
                <HiOutlineChevronUp />
            </Box>
        )
    }

    

    return (
        <Box w="100%" {...props}>
        
            <Flex w="100%" align="center" justify="space-between">
            
                <Text color="heading" fontWeight="600" fontSize="16px">Browse by:</Text>

                {isOpen && closeButton()}
                {!isOpen && openButton()}
            
            </Flex>
            
            <Box 
                paddingLeft="12px" 
                mt="12px"
                h={isOpen ? "auto" : "0"}
                overflowX="hidden"
            >
            
                <VStack
                    borderLeft="1px"
                    borderColor="text_mute"
                    color="sub_heading"
                    paddingLeft="16px"
                    fontSize="14px"
                    align="start"
                >
                    {dummyCategories.map((category) => {
                        return (
                            <Link textAlign="left" href={`/shop/${category.toLowerCase()}`}>{category}</Link>
                        )
                    })}
                
                
                </VStack>
                
            </Box>

        </Box>
    )
}