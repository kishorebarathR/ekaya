'use client'
import React from 'react'
import { Row, Col, Container, Image, Carousel } from 'react-bootstrap'
import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

// const HomeBanner = () => {
//   const bgImages = [
//     { url: '/images/Homebanner1.jpg' },
//     { url: '/images/Homebanner1.jpg' },
//     { url: '/images/Homebanner1.jpg' }
//     // Add more images as needed
//   ];

//   return (
//     <Container className='p-0 w-100' fluid>
//       <Row>
//         <Col>
//           <Carousel>
//             {bgImages.map((image, index) => (
//               <Carousel.Item key={index}>
//                 <BannerAllPageComponents  backgroundImage={image} />
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

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
