import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Navbar from '../modules/navbar'
import Footer from '../modules/footer'

const name = 'Christian Hunter'
export const siteTitle = 'Next.js Sample Website'
import { Box } from '@chakra-ui/react';

export default function Layout({ children, login }) {

  const containerClassName = login ? `${styles.container} ${styles.login_background}` : styles.container;
  const contentClassName = login ? `${styles.content} ${styles.content_login}` : styles.content

  return (
    <Box 
      className={containerClassName}
      bg={!login ? "background" : ""}
    >
      {!login &&  <Navbar />}
      <Box 
        className={contentClassName}
        w={[1140, 1280]}
      >
        {children}
      </Box>
      {login && <Footer />}
    </Box>
    
  )
}