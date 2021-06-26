import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Navbar from '../modules/navbar'
import Footer from '../modules/footer'

const name = 'Christian Hunter'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, login }) {

  const containerClassName = login ? `${styles.container} ${styles.login_background}` : styles.container;
  const contentClassName = login ? `${styles.content} ${styles.content_login}` : styles.content

  return (
    <div className={containerClassName}>
      {!login &&  <Navbar />}
      <div className={contentClassName}>
        {children}
      </div>
      {login && <Footer />}
    </div>
    
  )
}