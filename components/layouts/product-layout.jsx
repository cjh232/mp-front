import React from 'react'
import Navbar from 'components/modules/navbar';
import styles from './layout.module.css'

import { Box, Flex } from '@chakra-ui/react';

export default function ProductLayout({children}) {
    return (
        <Flex 
        direction="column"
        className={styles.container}
    >
      <Navbar />
      {children}

    </Flex>
    )
}
