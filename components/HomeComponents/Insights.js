import React from 'react';
import { Container,Row, Col, Image } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const Insights = () => {
    return (
        <>
            <Container>
                <p className='text-center mt-3 display-6'>Insights</p>

                <p className='text-center mx-5 p-4 fs-5'>Gain valuable insights into the world of luxury real estate and what makes an Ekaya home <br></br>the right choice for discerning buyers.</p>

                <div className='d-flex flex-row mx-5 '>

                    <div className=" " >
                        <div className="mt-3 ">
                            <Image src="/images/Mask Group 35.jpg" className="card-img-top w-100 h-50" alt="..." />
                            <div className='p-3'>
                                <div>Spaces that connect inside and outside</div>
                                <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 " >
                        <div className="mt-3 ">
                            <Image src="/images/Mask Group 34.jpg" className="card-img-top w-100 h-50" alt="..." />
                            <div className='p-3 '>
                                <div>Spaces that connect inside and outside</div>
                                <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</div>
                            </div>
                        </div>
                        <div className='text-center me-3'>
                            <Image src="/images/Group 49322.svg" className=" " alt="..." />
                        </div>
                    </div>

                    <div className="mt-5 " >
                        <div className="mt-3 ">
                            <Image src="/images/Mask Group 33.jpg" className="card-img-top w-100 h-50" alt="..." />
                            <div className='p-3 '>
                                <div>Spaces that connect inside and outside</div>
                                <div className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Image src="/images/Group 49562.jpg " className="w-100" alt="..." />

            <Container>
               
            
            </Container>
        </>
    );
};

export default Insights;
