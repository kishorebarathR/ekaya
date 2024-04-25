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
                <NavDropdown className='text-light mt-4' title="OurProject" id="basic-nav-dropdown">
                  <Row className='row d-flex flex-colum '>
                    <Col sm={12}>
                    <div className='d-flex flex-row'>

                      <div>
                      <NavDropdown.Item href="#action/3.1">Ongoing Projects</NavDropdown.Item>
                      <hr/>
                    <NavDropdown.Item href="#action/3.2" className="wbg-green">Goa - Dona Paula</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">- Vista Do Mar</NavDropdown.Item>
                    <NavDropdown.Item className="wbg-green" href="#action/3.2">Bangalore</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">- Takshavi</NavDropdown.Item>
                      </div>
                      <div className="wbg-light">
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
                <NavDropdown className='text-light mt-4' title="AboutEkaya" id="basic-nav-dropdown"
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
              <Image src="/images/Group 49397 (1).svg" className="img-fluid  mt-4" alt="..." />
            </Col>
            <Col lg={4}>
              <Button className="rounded-5 bg-white mt-4 float-end me-5 text-success border-0">INQUIRE</Button>
            </Col> 
          </Row>
        </Container>
      </Container>


      {/* <Container>
        <Row>
          <Col className='mt-3' sm={2} lg={2}>
          <nav className="navbar navbar-expand-lg bg-light">
              <div className="">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-light">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownup" data-bs-toggle="dropdown" aria-expanded="false">
                        Our Project
                      </a>
                      <ul className="dropdown-menu tetx-bg-info" aria-labelledby="navbarDropdownup">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Col>
          
          <Col className='mt-3' sm={12} lg={2}>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-light">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownup" data-bs-toggle="dropdown" aria-expanded="false">
                        Our Project
                      </a>
                      <ul className="dropdown-menu tetx-bg-info" aria-labelledby="navbarDropdownup">
                        <li><a className="dropdown-item" href="#">Service 1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2</a></li>
                        <li><a className="dropdown-item" href="#">Service 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Col>
          <Col sm={2} lg={4}>
            <img src="/images/Group 49397 (1).svg" className="img-fluid bg-dark mt-4 float-end" alt="..." />
          </Col>
          <Col sm={2} lg={4}>
            <button className="btn btn-outline-dark w-25 p-2 mt-4 rounded-5 bg-white btn-color float-end">INQUIRE</button>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Headerpage;
