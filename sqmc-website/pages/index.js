import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Herohome from '../components/Herohome'
import Whyhome from '../components/Whyhome'
import Teamhome from '../components/Teamhome'
import Statshome from '../components/Statshome'
import Contacthomeform from '../components/Contacthomeform'

export default function Home() {
  const parent = {
    visible: {
      scale: 1,
      opacity: 1
    },
    hidden: {
      scale: 0.9,
      opacity: 0
    }
  }

  const child = {
    visible: {
      scale: 1,
      opacity: 1
    },
    hidden: {
      scale: 0.9,
      opacity: 0
    }
  }

  const down = {
    visible: {
      y: [0, -5, 0],
      transition: {
        delay: 10,
        type: "spring",
        repeat: Infinity
      }
    },
    hidden: {
      y: 0
    }
  }

  return (
    <div className='motion-reduce:transition-none motion-reduce:hover:transform-none'>
      <Head>
        <title>SQMC India</title>
        <meta name="description" content="SQMC India Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Element */}
        <Herohome />

        {/* Why Element */}
        <Whyhome />

        {/* Team Element */}
        <Teamhome />

        {/* Stats Element */}
        <Statshome />

        { /* Contact Form Element */ }
        <Contacthomeform />
      </main>
    </div>
  )
}
