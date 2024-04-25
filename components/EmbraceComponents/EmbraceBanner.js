import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const EmbraceBanner = () => {
    const bgImage = {
        url: '/images/Embrace-banner.jpg'
      }
    return (
        <>
 <BannerAllPageComponents backgroundImage={bgImage} />
         

        </>
    )
}

export default EmbraceBanner