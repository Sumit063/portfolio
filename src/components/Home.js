import React from 'react'
import '../styles/home.css'

import Header from './Header'
import SampleText from './SampleText'
import Main from './Main'

const Home = () => {
  return (
    <div className='scroll-snapper'>
    <Header />
    <Main />
    </div>
  )
}

export default Home