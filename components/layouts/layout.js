import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Navbar from '../modules/navbar'
import Footer from '../modules/footer'

const name = 'Christian Hunter'
export const siteTitle = 'Next.js Sample Website'
import { Box, Flex } from '@chakra-ui/react';

export default function Layout({ children, login }) {

  const containerClassName = login ? `${styles.container} ${styles.login_background}` : styles.container;
  const contentClassName = login ? `${styles.content} ${styles.content_login}` : styles.content

  return (
    <Flex 
      direction="column"
      className={containerClassName}
      bg={!login ? "background" : ""}
    >
      {!login &&  <Navbar />}
      <Flex 
        direction="column"
        className={contentClassName}
        mt={login ? '0': '65px'}
        w={{sm: 400, md: "80%", lg: 1140, xl: 1440}}
      >
        {children}
      </Flex>
      {login && <Footer />}
    </Flex>
    
  )
}