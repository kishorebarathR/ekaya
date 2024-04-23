import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import TakshaviBanner from './TakshaviBanner'
import TakshaviPage from './TakshaviPage'
import SpecificationTakshavi from './SpecificationTakshavi'
import FeaturesTakshavi from './FeaturesTakshavi'


const index = () => {
  return (
    <>
      <Header />
      <TakshaviBanner />
      <TakshaviPage />
      <SpecificationTakshavi />
    <FeaturesTakshavi/>



      <Footer />
    </>
  )
}

export default index