import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'
const MoiraBanner = () => {
    const bgImage = {
        url: '/images/Moira-banner.jpg '
      }
    return (
        <>

<BannerAllPageComponents backgroundImage={bgImage} />
           
         

        </>
    )
}

export default MoiraBanner