
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const AboutEkaya = () => {
  return (
    <>

      <Container>

        <p className='text-center fs-5 mt-5 wbg-green'>ABOUT EKAYA</p>
        <p className='text-center mt-4 display-5'>Homes crafted with passion</p>
        <p className='text-center  fs-5'>At Ekaya, we don’t just build homes; we craft experiences. Nestled in the heart of Bangalore, <p className='mb-0'></p>Ekaya stands as a beacon of luxury and precision in real estate. Our ethos is woven around the<p className='mb-0'></p> artistry of construction, creating not just buildings, but sanctuaries that resonate with<p className='mb-0'></p> elegance and sophistication.</p>
      </Container>

      <Container>
        <p className='text-center mt-3 fs-5 wbg-green'>PROPERTY OVERVIEW</p>
        <p className='text-center mt-4 display-5'>Strategically located <br></br>masterpieces</p>
        <Row>
          <div className=' d-flex flex-row  '>
            <Col className='d-flex flex-row-reverse ' sm={12} lg={6}>
              <button  class="  btn-colors  w-25 p-3 rounded-0 ">Bengalore</button></Col>

            <Col sm={12} lg={6}><button  class="btns-colors w-25 p-3 rounded-0">Goa</button>
            </Col>
          </div>
        </Row>

      </Container>


    </>
  )
}

export default AboutEkaya