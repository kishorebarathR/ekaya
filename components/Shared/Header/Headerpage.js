
"use client"
import React, { useState } from 'react';
import { Row, Col, Container, Image, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRightShort } from "react-icons/bs";

const Headerpage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setShowDropdown(false);
  };

  return (
    <Container fluid className='position-absolute border-bottom border-secondary z-3'>
      <Container>
        <Row className="align-items-center mb-3"> 
          <Col lg={1}>
            <Navbar Navbar expand="lg">
              <NavDropdown className='text-light mt-4 ms-5 fs-6' title="Our Project" id="basic-nav-dropdown">
                <Row className='row d-flex flex-colum '>
                  <Col sm={12} lg={3}>
                    <div className='d-flex flex-row'>

                      <div>
                        <NavDropdown.Item href="#action/3.1 ">Ongoing Projects</NavDropdown.Item>
                        <hr/>
                        <NavDropdown.Item href="Donal" className="wbg-txt-green">Goa - Dona Paula</NavDropdown.Item>
                        <NavDropdown.Item href="vista-do-mar">- Vista Do Mar</NavDropdown.Item>
                        <NavDropdown.Item className="wbg-txt-green" href="#action/3.2">Bangalore</NavDropdown.Item>
                        <NavDropdown.Item href="../takshavi">- Takshavi</NavDropdown.Item>
                      </div>
                      <div className="light-gray m-0 p-0">
                        <NavDropdown.Item href="#action/3.1">Completed Projects</NavDropdown.Item>
                        <hr/>
                        <NavDropdown.Item href="#action/3.2" className="wbg-txt-green">Bangalore</NavDropdown.Item>
                        <NavDropdown.Item href="embrace">- Embrace</NavDropdown.Item>
                        <NavDropdown.Item className="wbg-green" href="ellen">- Ellen</NavDropdown.Item>
                      </div>
                      <div>
                        <NavDropdown.Item href="../takshavi">Ongoing Projects</NavDropdown.Item>
                        <hr/>
                        <NavDropdown.Item href="moira" className="wbg-txt-green">Goa - Moira</NavDropdown.Item>
                        <NavDropdown.Item href="amora">- Amora</NavDropdown.Item>
                     
                      </div>
            
                    </div>
                  </Col>
                  
                </Row>
              </NavDropdown>
            </Navbar>
          </Col>
          <Col lg={1}></Col> 
          <Col>
            <Navbar expand="lg">
              <NavDropdown
                className='text-light mt-4 ms-3 fs-6'
                title="About Ekaya"
                id="basic-nav-dropdown"
                show={showDropdown}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <NavDropdown.Item href="about-us">Our Story</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Why Ekaya</NavDropdown.Item>
                <NavDropdown.Item href="Sustainability">Sustainability</NavDropdown.Item>
              </NavDropdown>
            </Navbar>
          </Col>
          <Col lg={4} className="text-center"> 
            <a href='/'><Image  src="/images/Homepage_logo.svg" className="img-fluid mt-4" alt="..." /></a>
          </Col>
          <Col lg={4} className="text-end"> 
            <Button className="rounded-5 bg-white mt-4 wbg-txt-green border-0 float-end me-5 pt-2">INQUIRE <BsArrowRightShort className='fs-3' /></Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Headerpage;
