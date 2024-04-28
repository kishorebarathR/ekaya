'use client'
import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Insights = () => {
    
    return (
        <Container>
            <p className='text-center mt-3 display-5'>Insights</p>
            <p className='text-center fs-5'>Gain valuable insights into the world of luxury real estate and what makes an Ekaya home <br />the right choice for discerning buyers.</p>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <Row>
                            <Col sm={4} className='p-0'>
                                <Image src="/images/Mask Group 35.jpg" className="d-block w-100" alt="First slide" />
                                <div className='p-4 mx-3'>
                                    <p className='fs-5'>Spaces that connect inside and outside</p>
                                    <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </Col>
                            <Col sm={4} className='p-0'>
                                <Image src="/images/Mask Group 34.jpg" className="d-block w-100 mt-3" alt="Second slide" />
                                <div className='p-4 mx-3'>
                                    <p className='fs-5'>Spaces that connect inside and outside</p>
                                    <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </Col>
                            <Col sm={4} className='p-0'>
                                <Image src="/images/Mask Group 33.jpg" className="d-block w-100 mt-5" alt="Third slide" />
                                <div className='p-4 mx-3'>
                                    <p className='fs-5'>Spaces that connect inside and outside</p>
                                    <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div class="carousel-item ">
                        <Row>
                            <Col sm={4} className='p-0'>
                                <Image src="/images/Mask Group 35.jpg" className="d-block w-100" alt="First slide" />
                                <div className='p-4 mx-3'>
                                    <p className='fs-5'>Spaces that connect inside and outside</p>
                                    <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </Col>
                            <Col sm={4} className='p-0'>
                                <Image src="/images/Mask Group 34.jpg" className="d-block w-100 mt-3" alt="Second slide" />
                                <div className='p-4 mx-3'>
                                    <p className='fs-5'>Spaces that connect inside and outside</p>
                                    <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </Col>
                            <Col sm={4} className='p-0'>
                                <Image src="/images/Mask Group 33.jpg" className="d-block w-100 mt-5" alt="Third slide" />
                                <div className='p-4 mx-3'>
                                    <p className='fs-5'>Spaces that connect inside and outside</p>
                                    <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
<center>            
        <button type="button" data-bs-target="#demo" data-bs-slide="prev" className='rounded-circle btn btn-outline-success fs-4 me-2'>
        <FaArrowLeft className=''/>
                </button>
                <button type="button" data-bs-target="#demo" data-bs-slide="next"  className='rounded-circle btn btn-outline-success fs-4'>
                <FaArrowRight />
                </button>
                </center>



            </div>
            <Image src="/images/Group 49562.jpg" className="w-100 mt-3" alt="Additional Image" />

            <Container>
                {/* Additional content goes here */}
            </Container>
        </Container>
    );
};

export default Insights;
