'use client'
import React, { useState } from 'react';
import { Row, Col, Container, Image, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TakshaviTab = () => {
  const [activeKey, setActiveKey] = useState('home');

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <>  <Container className='mt-5x'>
    <Row>
      <Col lg={12} className='mt-5 ms-lg-5 px-lg-5'>
        <Tabs
          activeKey={activeKey}
          onSelect={handleTabSelect}
          className="mb-3 custom-tab"
          style={{ width: '100%' }}
        >
          <Tab  eventKey="home" title={<span className="tab-title">Floor plan <p className='mb-0'></p>Two Bedroom</span>}>
            <Image src="/images/embrace-img-11.png" className="img-fluid mt-4" alt="" />
          </Tab>

          <Tab eventKey="profile"title={<span className="tab-title">Floor plan <p className='mb-0'></p>Three Bedroom</span>}>
            <Image src="/images/embrace-img-12.png" className="img-fluid mt-4  mt-3" alt="" />
          </Tab>
          
          <Tab eventKey="about1"title={<span className="tab-title">Two BedRoom <p className='mb-0'></p>3D Rendered</span>}>
            <Image src="/images/embrace-img-13.png" className="img-fluid mt-4" alt="3D Rendered Image" />
          </Tab>
          
          <Tab eventKey="about2" title={<span className="tab-title">Three BedRoom <p className='mb-0'></p>3D Rendered</span>}>
            <Image src="/images/embrace-img-14.png" className="img-fluid mt-4  mt-3" alt="3D Rendered Image" />
          </Tab>
           
          <Tab eventKey="about2" title={<span className="tab-title">Three BedRoom <p className='mb-0'></p>3D Rendered</span>}>
            <Image src="/images/embrace-img-15.png" className="img-fluid mt-4  mt-3" alt="3D Rendered Image" />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>

    </>
  );
};

export default TakshaviTab;
