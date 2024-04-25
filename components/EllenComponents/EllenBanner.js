import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'
const EllenBanner = () => {
    const bgImage = {
        url: '/images/Ellen-banner.jpg'
      }
    return (
        <>

<BannerAllPageComponents backgroundImage={bgImage} />
           
         

        </>
    )
}

export default EllenBanner