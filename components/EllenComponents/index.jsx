import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import EllenBanner from './EllenBanner'
import EllenPage from './EllenPage'
import SpecificationEllen from './SpecificationEllen'
import EllenMap from './EllenMap'

const index = () => {
  return (
    <>
      <Header />
            <EllenBanner />
            <EllenPage />
            <SpecificationEllen/>
            <EllenMap/>    


           
         
    <Footer />
    </>
  )
}

export default index