import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SQMC India</title>
        <meta name="description" content="SQMC India Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
