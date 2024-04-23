import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const EllenMap = () => {
    return (
        <>
            <Container>
                <Row className='my-5 text-center '>
                 <Col lg={6} className=' middle'>
                      <p className='display-5'>HOW TO</p>
                      <p  className='display-5'mx-5> GET THERE</p>
                 </Col>

                 <Col lg={6}>
                 <img src="/images/Group 49550.jpg" className="img-fluid   w-100 h-100 " alt="..."></img>
                 </Col>

                </Row>

            </Container>

</>
)
}

export default EllenMap
