import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Propertiesoverview = () => {
  return (
    <>
      <Container>
        <Row className='mt-5 '>
          <Col className='  flex-row-reverse' sm={12} lg={4}>
            <div className="dropup-center dropup">
              <button className="btn btn-dark dropdown-toggle w-100 rounded-0 p-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Upcoming Project
              </button>
              <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Action two</a></li>
                <li><a className="dropdown-item" href="#">Action three</a></li>
              </ul>
            </div>

            <div class="btn-group dropend w-100 ">
              <button type="button" className="btn btn-secondary dropdown-toggle p-3 rounded-0" data-bs-toggle="dropdown" aria-expanded="false">
                Takshavi
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
                <li><a className="dropdown-item" href="#">Menu item</a></li>
              </ul>
            </div>

            <div class="dropdown mt-3">
              <button className="btn btn-dark dropdown-toggle w-100 rounded-0 p-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Completed Project
              </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>

          </Col>

          <Col sm={12} lg={8}>


          <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src="/images/carousle.jpg" class="d-block w-100 h-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <Image src="/images/carousel-img.jpg" class="d-block w-100 h-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <p className=' fs-4 mt-4 mx-5 '>Takshavi</p>
            <p className='justify-content-center mx-5 fs-5'>Ekaya Spaces proudly unveils Takshavi, a boutique residential<br></br> enclave nestled in the heart of Frazer Town’s Spencer Road.</p>
            <button class=" btn-outline-dark w-25 p-2 mx-5 btn-color bt">Know More</button>
          </Col>

        </Row>

      </Container>
      <Container>

        <p className='text-center fs-5 mt-5 wbg-green'>LET’S HEAR FROM OUR CLIENTS</p>
        <p className='text-center mx-5 p-4 fs-5  ' style={{ borderBottom: '1px  dotted' }}>“Discovering Ekaya was like finding a hidden gem. The attention to detail and personal touch<br></br> they bring to every aspect of the home-buying experience is truly unparalleled.”</p>

      </Container>

      <Container>
        <div className='text-center mt-4'>
          <Image src="/images/Group 13190.png" class="img-fluid  " alt="..." />
        </div>
      </Container>

    </>
  )
}

export default Propertiesoverview