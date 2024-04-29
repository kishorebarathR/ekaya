import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Footerpage = () => {
    return (
        <>
        
            <Container>
                <Row className=' mt-5 '>
                    <Col lg={12} sm={12} className='d-flex flex-row text-center '>
                        <a href="#" className="  w-100 p-2 fs-6  color-footer border">Facebook &#129125;</a>
                        <a href="#" className="  w-100 p-2 fs-6 color-footer border">LinkedIn &#129125;</a>
                        <a href="#" className="  w-100 p-2 fs-6 color-footer border">YouTube &#129125;</a></Col>
                </Row>
            </Container>
            <Container fluid className='p-0 light-gray'>

            
                <Container>
                    <Image src="/images/Footer_logo.svg" className="  w-25 mt-3" alt="..." />
                </Container>  <hr></hr>


                <Container>
                    <Row className=''>
                        <Col className='' sm={12} lg={4}>
                            <p className='fs-5'><b>Contact Details</b></p>
                            <p className='fs-6'>#36,4th Cross,Nandidurg Road,<br></br>Jayamahal,Bengaluru 560046</p>
                            <p className='fs-6 '><b>phone:</b>+91 98452 47374</p>
                            <div className='ms-4'>
                                <p className='ms-5 fs-6 ms-3'>+91 98440 32022</p>
                            </div>
                            <a href="#" className="text-decoration-none text-dark fs-6"><b>Email:</b>contact@ekaya</a>
                        </Col>

                        <Col className='d-flex flex-column' sm={12} lg={4}>
                            <p className='fs-5'><b>Our Project</b></p>
                            <div className=" fs-6 w-75 rounded-0">
                                {/* <label htmlFor="project" className="form-label"></label> */}
                                <select className="form-select fs-6" id="project" name="project" >
                                    <option value="Project A">Project in  Bangalore</option>
                                    <option value="Project B">Project B</option>
                                    <option value="Project C">Project C</option>
                                </select>
                            </div>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 mx-2">Embrace</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 mx-2">Ellen</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 mx-2">Takshavi</a>

                            <div className="mb-3  w-75 border-rounded-0">
                                
                                <select className="form-select fs-6" id="project" name="project" >
                                    <option value="Project A">Project in Goa</option>
                                    <option value="Project B">Project B</option>
                                    <option value="Project C">Project C</option>
                                </select>
                            </div>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 mx-2 wbg-green">Dona paula</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 mx-2">Vista</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1 mx-2">Moira</a>
                        </Col>

                        <Col className=' d-flex flex-column' sm={12} lg={4}>
                            <p className='fs-5'><b>About Ekaya</b></p>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1">Our Story</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1">Our Team</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1"> Why Ekaya</a>
                            <a href="#" className="text-decoration-none text-dark fs-6 mt-1">Sustainability</a>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <p className='border-bottom'></p>

                    <a href="#" className="text-decoration-none text-dark fs-6 mt-1">@2024 Ekaya.All Rights Reserved</a>
                    <div className='float-end'>
                        <a href="#" className="text-decoration-none text-dark fs-6 mt-1 px-1">Teams of Use</a> <div className='vr'></div>
                        <a href="#" className="text-decoration-none text-dark fs-6 mt-1 px-1">Privacy Policy</a><div className='vr'></div>

                        <a href="#" className="text-decoration-none text-dark fs-6 mt-1 px-1">Disclaimer</a>
                    </div>
                    <p className='border-bottom'></p>

                </Container>

            
            </Container>
        </>


    )
}

export default Footerpage
