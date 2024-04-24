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
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Navbar>
            </Col>
            <Col lg={2}>
              <Navbar expand="lg">
                <NavDropdown className='text-light mt-4' title="OurProject" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
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
