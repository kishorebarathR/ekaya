import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const SustainabilityBanner = () => {
    const bgImage = {
        url: '/images/Sustainability-banner.png'
      }
    return (
        <>

          
<BannerAllPageComponents backgroundImage={bgImage} />
           
        

        </>
    )
}

export default SustainabilityBanner