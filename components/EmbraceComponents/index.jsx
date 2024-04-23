import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import EmbraceBanner from './EmbraceBanner'
import Modern from './Modern'
import Specifications from './Specifications'
import Features from './Features'
import Amenities from './Amenities'

const index = () => {
  return (
    <>
      <Header />
            <EmbraceBanner />
            <Modern />
            <Specifications />
            <Features />
            <Amenities/>
           
         
    <Footer />
    </>
  )
}

export default index