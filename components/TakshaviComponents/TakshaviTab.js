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
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={12} className='mt-5'>
            <Tabs
              activeKey={activeKey}
              onSelect={handleTabSelect}
              className="mb-3 custom-tab"
              style={{ width: '100%' }}
            >
              <Tab  eventKey="home" title={<span className="tab-title">Floor plan1</span>}>
                <Image src="/images/Tab_IMG.png" className="img-fluid mt-4" alt="3D Rendered Image" />
              </Tab>

              <Tab eventKey="profile" title="Floor plan2">
                <Image src="/images/Footer_logo.svg" className="img-fluid mt-4 w-25 mt-3" alt="Floor plan parking" />
              </Tab>
              
              <Tab eventKey="about1" title="3D Design1">
                <Image src="/images/Tab_IMG.png" className="img-fluid mt-4" alt="3D Rendered Image" />
              </Tab>
              
              <Tab eventKey="about2" title="3D Design2">
                <Image src="/images/Footer_logo.svg" className="img-fluid mt-4 w-25 mt-3" alt="Floor plan parking" />
              </Tab>
              
             
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TakshaviTab;
