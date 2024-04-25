import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'
const TakshaviBanner = () => {
        const bgImage = {
            url: '/images/Takshavi-banner.jpg'
          }
    return (
        <>

<BannerAllPageComponents backgroundImage={bgImage} />
         

        </>
    )
}

export default TakshaviBanner