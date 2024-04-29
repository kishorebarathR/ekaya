import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import EllinBanner from './EllinBanner'
import EllinPage from './EllinPage'
import SpecificationEllin from './SpecificationEllin'
import EllinMap from './EllinMap'
import EllinTab from './EllinTab'
import Form from './Form'

const index = () => {
  return (
    <>
      <Header />
            <EllinBanner />
            <EllinPage />
            <SpecificationEllin/>
            <EllinMap/>  
            <EllinTab/>
            <Form/> 


           
         
    <Footer />
    </>
  )
}

export default index