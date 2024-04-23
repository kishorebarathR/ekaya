
import React from 'react'
import { Row,Col } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'
import { url } from 'inspector'
const HomeBanner = () => {

  const bgImage = {
    url:'/images/home_banner.jpg'
  }
  return (
    <>

    {/* <img src="/images/Mask Group 100.jpg  " className="img-fluid w-100 h-100 " alt="..."></img> */}
    <BannerAllPageComponents backgroundImage={bgImage} />
    <Row>

    </Row>

    </>
  )
}

export default HomeBanner

