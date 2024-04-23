
import React from 'react'
import { Row, Col, Container,Image } from 'react-bootstrap'

const AboutDonalBanner = () => {
  return (
    <>

      <Image src="/images/Mask Group 98.jpg  " className="img-fluid  w-100 h-100 " alt="..."/>

      <Container>
        <p className=' fs-5 mx-4 mt-5'>Nestled along the picturesque coastline of Goa, Dona Paula stands as a testament to the region’s timeless allure and natural beauty. Named after Dona Paula de Menezes, a historical figure enveloped in folklore, this iconic locale captivates visitors with its panoramic vistas of the Arabian Sea and verdant landscapes.</p>
        <p className=' fs-5 mx-4 mt-5'>Renowned as the “Lover’s Paradise,” Dona Paula beckons romantics and adventurers alike to bask in its romantic ambiance and witness the breathtaking confluence of the Mandovi and Zuari rivers. The famed Dona Paula Viewpoint offers a serene retreat, where one can immerse themselves in the tranquil atmosphere and marvel at the scenic splendor that surrounds them.</p>
      </Container>


      <Row className='mt-5'>

        <Col className='' sm={12} lg={6}>
          <Image src="/images/Mask Group 98.jpg  " className="img-fluid w-100 h-100 mt-5  " alt="..."/>
        </Col>

        <Col className='mt-5  ' sm={12} lg={5}>
          <p className='fs-5 px-3 mt-5 p-4'>Dona Paula boasts a rich historical tapestry, with tales dating back to the colonial era of Portuguese rule in Goa. Legend has it that Dona Paula de Menezes, a noblewoman of Portuguese descent, tragically fell in love with a local fisherman, only to meet her demise by plunging into the Arabian Sea from the precipice now known as the Dona Paula Viewpoint. Her love story has since become the subject of folklore and continues to intrigue visitors to this day.</p>
        </Col>
      </Row>

      <Row className='mt-5'>

        <Col className='mt-5' sm={12} lg={6}>
          <p className='fs-5 px-5 p-5 mt-5'>Furthermore, Dona Paula’s strategic location along the coast made it a significant port during the colonial era, facilitating trade and commerce between Portugal and other parts of Asia. The remnants of this maritime heritage can still be seen in the quaint fishing villages and historic landmarks that dot the coastline.</p>
        </Col>

        <Col className='mt-5  ' sm={12} lg={6}>
          <Image src="/images/Mask Group 98.jpg  " className="img-fluid w-100 h-100 mt-5  " alt="..." />
        </Col>
      </Row>

      <Row className='mt-5'>

        <Col className='' sm={12} lg={6}>
          <Image src="/images/Mask Group 98.jpg  " className="img-fluid w-100 h-100 mt-5  " alt="..." />
        </Col>

        <Col className='mt-5  ' sm={12} lg={5}>
          <p className='fs-5 px-3 mt-5 p-4'>Rich in cultural heritage, Dona Paula boasts landmarks such as the Cabo Raj Bhavan, once a Portuguese fort and now the official residence of the Governor of Goa. Its vibrant markets and proximity to renowned beaches like Miramar and Vainguinim further elevate its charm, offering a perfect blend of relaxation and exploration.</p>
        </Col>
      </Row>

      <Row className='mt-5'>

        <Col className='mt-5' sm={12} lg={6}>
          <p className='fs-5 px-5 py-5 p-5 mt-5'>With its timeless beauty, affluent ambiance, and enchanting coastal vistas, Dona Paula continues to enchant visitors and residents alike, promising an unforgettable experience amidst the wealth and luxury of Goa’s coastal paradise.</p>
        </Col>

        <Col className='mt-5  ' sm={12} lg={6}>
          <Image src="/images/Mask Group 98.jpg  " className="img-fluid w-100 h-100 mt-5  " alt="..." />
        </Col>
      </Row>





    </>
  )
}

export default AboutDonalBanner