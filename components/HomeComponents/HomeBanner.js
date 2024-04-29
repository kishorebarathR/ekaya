import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa';

const HomeBanner = () => {
  return (
    <Container fluid className='p-0' style={{ position: 'relative' }}>
      <div id="carouselExampleFade" className="carousel slide carousel-fade z-0 p-0">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src="/images/Homebanner1.jpg" className="d-block w-100 p-0" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src="/images/Embrace-banner.jpg" className="d-block w-100 p-0" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-5" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      
        <Col className="position-absolute end-0 ms-5 me-5 bottom-0  mt-3 z-3">

                <Button className=" text-center me-5  p-2 px-5 hover-contact  border-0 rounded-0">
                    Contact Us<span className='float-end '> <FaArrowRight /></span>
                </Button>
            </Col>



            <Col className="position-absolute end-0 ms-4  bottom-0 mt-3 z-3">

                <Button className=" text-center  bg-white p-2  border-0 rounded-0">
                    Contact Us
                </Button>
            </Col>
      </div>
    </Container>
  )
}

export default HomeBanner
