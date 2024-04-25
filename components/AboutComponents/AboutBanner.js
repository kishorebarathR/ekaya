
import React from 'react'
import { Row,Col ,Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const AboutBanner = () => {
  const bgImage = {
    url: '/images/Ourstory.jpg'
  }
  return (
    <>
  <BannerAllPageComponents backgroundImage={bgImage} />
    
    <Row>

    </Row>

    </>
  )
}

export default AboutBanner