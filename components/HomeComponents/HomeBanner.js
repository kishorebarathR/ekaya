'use client'
import React from 'react'
import { Row, Col,Container } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const HomeBanner = () => {
  const bgImage = {
    url: '/images/home_banner.jpg'
  }
  return (
    <>

     
        <BannerAllPageComponents backgroundImage={bgImage} />
       
    

    </>
  )
}

export default HomeBanner

