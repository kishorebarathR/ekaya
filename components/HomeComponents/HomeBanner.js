'use client'
import React from 'react'
import { Row, Col,Container ,Image} from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const HomeBanner = () => {
  const bgImage = {
    url: '/images/Homebanner1.jpg'
  }
  return (
    <>

     
        <BannerAllPageComponents backgroundImage={bgImage} />
     
    

    </>
  )
}

export default HomeBanner

