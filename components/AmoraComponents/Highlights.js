import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const Highlights = () => {
  return (
    <>
      <h2 className="p-5 ms-lg-5 fs-1">Location Highlights</h2>
      <Container className="p-5">
        <Row>
          <Col lg={3} className="mb-3">
            <div className="text-center talkbubble w-100 p-5 fs-5 h-100">
              Hotels & Resorts
            </div>
          </Col>
          <Col lg={5}>
            <ul className="ms-5">
              <li> Storii by ITC Hotels : 1.9 Km</li>
              <li> The Westin Anjuna: 13Km • Le</li>
              <li>Le Meridian Calangute: 13 Km</li>
              <li>W Hotel, Vegivore: 14km </li>
              <li>Hilton, Candolim: 15 km </li>
              <li>Taj Fort Aguada: 17 Km </li>
              <li>Taj Holiday Village: 17 Km </li>
              <li>Amritara Aura, Mandrim: 21 Km</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={3} className="mb-3">
            <div className="text-center justify-content-center talkbubble w-100 p-5 h-100 fs-5">
              Beaches & Popular Areas
            </div>
          </Col>
          <Col lg={5}>
            <ul className="ms-5">
              <li>Mapusa: 4.6 Km Dona Paula : 1.9 KM</li>
              <li> Assagao: 8Km </li>
              <li>Arpora: 12 Km </li>
              <li>Calangute: 13 Km</li>
              <li>Candolim : 23 Km</li>
              <li>Baga: 14 Km</li>
              <li>Anjuna: 14 Km</li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul className="ms-5">
              <li> Vagator: 14 Km</li>
              <li>Candolim: 15 Km </li>
              <li>Panjim: 17Km </li>
              <li>Morjim: 19 Km </li>
              <li>Miramar: 20 Km </li>
              <li>Ashwem: 20 Km</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col lg={3} className="mb-3">
            <div className="text-center talkbubble w-100 p-4 fs-5 h-100">
              Hospitals
            </div>
          </Col>
          <Col lg={5}>
            <ul className="ms-5">
              <li> Manipal Hospital : 25 Km</li>
              <li> Goa Medical College Hospital : 20 Km</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col lg={3} className="mb-3">
            <div className="text-center talkbubble w-100 h-100 p-4 fs-5">
              Schools
            </div>
          </Col>
          <Col lg={5}>
            <ul className="ms-5">
              <li> Sharada Mandir School,Miramar: 21 Km </li>
              <li>The Ardee School, Porvorim : 9.8 Km</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col lg={3} className="mb-3">
            <div className="text-center talkbubble w-100 h-100 p-4 fs-5">
              Airports
            </div>
          </Col>
          <Col lg={5}>
            <ul className="ms-5">
              <li>MOPA : 23 Km </li>
              <li>Dabolim : 42 Km </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col lg={3} className="mb-3">
            <div className="text-center talkbubble w-100 h-100 p-4 fs-5">
              Railway Stations
            </div>
          </Col>
          <Col lg={5}>
            <ul className="ms-5">
              <li>Thivim: 13Km </li>
              <li> Pernem: 14 Km</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Highlights;
