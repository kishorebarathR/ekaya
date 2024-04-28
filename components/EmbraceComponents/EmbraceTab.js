'use client'
import React, { useState } from 'react';
import { Row, Col, Container, Image, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const EmbraceTab = () => {
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
              className="mb-3 custom-tabs border-0 rounded-0"
              style={{ width: '100%' }}
            >
              <Tab  eventKey="home" title={<span className="tab-title">3D rendered</span>}>
                <Image src="/images/Tab_IMG.png" className="img-fluid mt-4" alt="3D Rendered Image" />
              </Tab>

              <Tab eventKey="profile" title="Floor plan parking">
                <Image src="/images/Footer_logo.svg" className="img-fluid mt-4 w-25 mt-3" alt="Floor plan parking" />
              </Tab>
              
              <Tab eventKey="about1" title="Floor plan-3 floors">
                <Image src="/images/Tab_IMG.png" className="img-fluid mt-4" alt="3D Rendered Image" />
              </Tab>
              
              <Tab eventKey="about2" title="Unit floor plan design layout">
                <Image src="/images/Footer_logo.svg" className="img-fluid mt-4 w-25 mt-3" alt="Floor plan parking" />
              </Tab>
              
              <Tab eventKey="about3" title="Features">
                <Image src="/images/Tab_IMG.png" className="img-fluid mt-4" alt="3D Rendered Image" />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmbraceTab;
