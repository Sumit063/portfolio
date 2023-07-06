import React from 'react'
import '../styles/home.css'

import Header from './Header'
import SampleText from './SampleText'
import Main from './Main'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='scroll-snapper'>
    <Header />
    <Main />
    <Footer />
    </div>
  )
}

export default Home