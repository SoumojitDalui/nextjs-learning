import React from 'react'
import Prenavbar from '../components/Prenavbar'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Prenavbar />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
