
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const AboutEkaya = () => {
  return (
    <>

      <Container>

        <p className='text-center fs-5 mt-5 wbg-green'>ABOUT EKAYA</p>
        <p className='text-center mt-3 display-6'>Homes crafted with passion</p>
        <p className='text-center mx-5 p-4 fs-5'>At Ekaya, we don’t just build homes; we craft experiences. Nestled in the heart of Bangalore, Ekaya stands as a beacon of luxury and precision in real estate. Our ethos is woven around the artistry of construction, creating not just buildings, but sanctuaries that resonate with elegance and sophistication.</p>
      </Container>

      <Container>
        <p className='text-center mt-3 fs-5 wbg-green'>PROPERTY OVERVIEW</p>
        <p className='text-center mt-3 display-6'>Strategically located <br></br>masterpieces</p>
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