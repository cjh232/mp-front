import React from 'react'

import { 
    Text, 
    Flex, 
    Image,
    HStack
  } from '@chakra-ui/react';

export default function Carousel() {

    const images = [
        "/images/photos/Nike_main.jfif",
        "/images/photos/Nike_2.jfif",
        "/images/photos/Nike_3.jfif",
        "/images/photos/Nike_4.jfif",
        "/images/photos/Nike_5.jfif",
    ]

    const [ activeIndex, setActiveIndex ] = React.useState(0)


    return (
        <Flex direction="column" justify="center">
            <Image 
                objectFit="contain"
                w="650px" 
                h="400px" 
                src={images[activeIndex]} 
                border=".5px solid #D1DBE0"
                bg="#F5F5F5" 
                />
            <HStack mt="16px">
                {
                    images.map((src, i) => {
                        if(i !== activeIndex) {
                            return (
                                <Image 
                                    boxSize="100px"
                                    border=".5px solid #D1DBE0"
                                    src={src} 
                                    _hover={{
                                        cursor: "pointer",
                                        borderColor: "pink_secondary"
                                    }}
                                    onClick={() => setActiveIndex(i)}/>
                                )
                        }
                    })
                }
            </HStack>
        </Flex>
    )
}
