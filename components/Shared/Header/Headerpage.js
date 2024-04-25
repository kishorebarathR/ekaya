"use client"
import React from 'react';
import { Row, Col, Container, Image, Navbar, Nav, NavDropdown,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Headerpage = () => {
  return (
    <>
      <Container fluid className='position-absolute z-index-100'>
        <Container>
          <Row>
            <Col lg={2}>
              <Navbar expand="lg">
                <NavDropdown className='text-light mt-4' title="AboutEkaya" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Our Story</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Why Ekaya</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Sustainability</NavDropdown.Item>
                </NavDropdown>
              </Navbar>
            </Col>
            <Col lg={2}>
              <Navbar expand="lg">
                <NavDropdown className='text-light mt-4' title="OurProject" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Ongoing Project</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Navbar>
            </Col>
            <Col lg={4}>
              <Image src="/images/Group 49397 (1).svg" className="img-fluid  mt-4" alt="..." />
            </Col>
            <Col lg={4}><button type="button" class="btn-color-home rounded-5 border-0 float-end p-2 me-3 mt-4">INQUIRE&#8594;</button>
             
            </Col> 
          </Row>
        </Container>
      </Container>

    </>
  );
};

export default Headerpage;
