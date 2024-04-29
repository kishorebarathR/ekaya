import React, { useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { FaAngleDown, FaAngleUp, FaArrowRight } from 'react-icons/fa';

const Goa = () => {
  const [isCollapsed, setCollapse] = useState(true);
  const [showTakshaviContent, setShowTakshaviContent] = useState(false);

  const toggleCollapse = () => {
    setCollapse(!isCollapsed);
  };

  const toggleTakshaviContent = () => {
    setShowTakshaviContent(!showTakshaviContent);
  };

  const [isCollapsed1, setCollapse1] = useState(true);

  const toggleCollapse1 = () => {
    setCollapse1(!isCollapsed1);
  };

  return (
    <>
      <Container>
        <Row className='mt-5'>
          <Col className='flex-row-reverse' sm={12} lg={4}>
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <button
                  class="btn btn-dark w-100 rounded-0 p-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                  onClick={toggleCollapse}
                >
                  Upcoming Project
                  <span className='float-end text-white'>{isCollapsed ? <FaAngleDown size={24} className='display-4' /> : <FaAngleUp size={24} className='display-4' />}</span>
                </button>
                <div id="panelsStayOpen-collapseOne" class={`accordion-collapse collapse ${isCollapsed ? '' : 'show'}`}>
                  <div class="accordion-body ">
                    <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&aposs also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>


              <div class="btn-group dropend w-100 mb-3">
                <button type="button" className="btn btn-secondary wbg-dark-green  p-3 rounded-0" onClick={toggleTakshaviContent}>
                  Takshavi <span className='float-end'> <FaArrowRight /></span>
                </button>
              </div>

              <div class="accordion-item">
                <button class="btn btn-dark w-100 rounded-0 p-3" type="button" onClick={toggleCollapse1} data-bs-toggle="collapse" data-bs-target="#open" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Completed Project
                  <span className='float-end text-white'>{isCollapsed1 ? <FaAngleDown size={24} className='display-4' /> : <FaAngleUp size={24} className='display-4' />}</span>
                </button>
                <div id="open" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <strong>This is the first item&aposs accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. it&aposs also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <>
              <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <Image src="/images/carousle.jpg" class="d-block w-100 h-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <Image src="/images/carousel-img.jpg" class="d-block w-100 h-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon bg-dark rounded-5 " aria-hidden="true"></span>
                  <span class="visually-hidden ">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              {showTakshaviContent && (

                <div>
                  <p className='fs-3 mt-4 mx-5'>Takshavi</p>
                  <p className='justify-content-center mx-5 fs-6'>Ekaya Spaces proudly unveils Takshavi, a boutique residential<br></br> enclave nestled in the heart of Frazer Town’s Spencer Road.</p>
                  <button class="btn-outline-dark w-25 p-2 mx-5 btn-color bt">
                    <a href="takshavi" className='nav-link'>Know More</a>
                  </button>
                </div>
              )}

            </>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className='text-center fs-5 mt-5 wbg-green'>LET’S HEAR FROM OUR CLIENTS</p>
        <p className='text-center mx-5 p-4 fs-6  ' style={{ borderBottom: '1px  dotted' }}>“Discovering Ekaya was like finding a hidden gem. The attention to detail and personal touch<br></br> they bring to every aspect of the home-buying experience is truly unparalleled.”</p>
      </Container>
      <Container>
        <div className='text-center mt-4'>
          <Image src="/images/Group 13190.png" class="img-fluid  " alt="..." />
        </div>
      </Container>
    </>
  );
}

export default Goa;

