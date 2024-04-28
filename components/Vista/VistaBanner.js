import React from "react";
import { Row, Col, Container,Button } from "react-bootstrap";

import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'
import { FaArrowRight } from 'react-icons/fa';
const VistaBanner = () => {

  const bgImage = {
    url: '/images/vista_banner.png'
  }




  return (
    <>

      <BannerAllPageComponents backgroundImage={bgImage} />
      <Container>
        <Row>
          <Col className="position-absolute start-0 bottom-0">
            <h1 className=" px-5 ms-5 py-2 text-white display-1 mb-2">
              <b> Vista Do Mar  <p className='mb-0 gray'> by Ekaya Spaces</p></b>
            </h1>
            <h5 className=" px-5 ms-5 py-2 text-white display-6  mb-5">
              Dona Paula l Goa l India
            </h5>
          </Col>
        </Row>
      </Container>


      <Col className="position-absolute end-0 ms-5 me-5 bottom-0  mt-3">

        <Button className=" text-center me-5  p-2 px-5 hover-contact  border-0 rounded-0">
          Contact Us<span className='float-end '> <FaArrowRight /></span>
        </Button>
      </Col>



      <Col className="position-absolute end-0 ms-4  bottom-0 mt-3">

        <Button className=" text-center  bg-white p-2  border-0 rounded-0">
          Contact Us
        </Button>
      </Col>

    </>
  )
};

export default VistaBanner;
