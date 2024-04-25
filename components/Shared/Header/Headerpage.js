"use client"
import React from 'react';
import { Row, Col, Container, Image, Navbar, Nav, NavDropdown,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const Headerpage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setShowDropdown(false);
  };
  return (
    <>
      <Container fluid className='position-absolute'>
        <Container>
          <Row> 
            <Col>
              <Navbar expand="lg">
                <NavDropdown className='text-light mt-4 fs-5' title="OurProject" id="basic-nav-dropdown">
                  <Row className='row d-flex flex-colum '>
                    <Col sm={12}>
                    <div className='d-flex flex-row'>

                      <div>
                      <NavDropdown.Item href="#action/3.1 ">Ongoing Projects</NavDropdown.Item>
                      <hr/>
                    <NavDropdown.Item href="#action/3.2" className="wbg-txt-green">Goa - Dona Paula</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">- Vista Do Mar</NavDropdown.Item>
                    <NavDropdown.Item className="wbg-green" href="#action/3.2">Bangalore</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">- Takshavi</NavDropdown.Item>
                      </div>
                      <div className="light-gray m-0 p-0">
                      <NavDropdown.Item href="#action/3.1">Completed Projects</NavDropdown.Item>
                      <hr/>
                    <NavDropdown.Item href="#action/3.2" className="wbg-green">Bangalore</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">- Embrace</NavDropdown.Item>
                    <NavDropdown.Item className="wbg-green" href="#action/3.2">- Ellen</NavDropdown.Item>
                      </div>
                      <div>
                      <NavDropdown.Item href="#action/3.1">Ongoing Projects</NavDropdown.Item>
                      <hr/>
                    <NavDropdown.Item href="#action/3.2" className="wbg-green">Goa - Dona Paula</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">- Vista Do Mar</NavDropdown.Item>
                    <NavDropdown.Item className="wbg-green" href="#action/3.2">Bangalore</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">- Takshavi</NavDropdown.Item>
                      </div>
            
                    </div>
                    </Col>
                  </Row>
                </NavDropdown>
              </Navbar>
            </Col>
            <Col lg={2}>
              <Navbar expand="lg">
                <NavDropdown className='text-light mt-4 fs-5' title="AboutEkaya" id="basic-nav-dropdown"
                show={showDropdown}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                  <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Why Ekaya</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Sustainability</NavDropdown.Item>
                </NavDropdown>
              </Navbar>
            </Col>
            <Col lg={4}>
              <Image src="/images/Homepage_logo.svg" className="img-fluid  mt-4" alt="..." />
            </Col>
            <Col lg={4}>
              <Button className="rounded-5 bg-white mt-4  text-success float-end border-0 me-5">INQUIRE&#8594;</Button>
            </Col> 
          </Row>
        </Container>
      </Container>

    </>
  );
};

export default Headerpage;
