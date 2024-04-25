import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const Specificy2 = () => {
  return (
    <>
      <Container
        fluid
        className="text-dark p-5"
        style={{ backgroundColor: "#ABD2D3" }}
      >
        <div className="border-bottom-white "></div>
        <Container className="px-lg-5">
          <Row className="border-bottom-white">
            <Col>
              <p className="fs-5 p-3">
                <b>SANITARY & PLUMBING</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-5 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>CP Fittings: Kohler</li>
                    <li>Ceramic Fittings: Kohler</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col>
              <p className="fs-5 p-3">
                <b>ELECTRICAL</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-5 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>
                      All Products such as switch & accessories, PVC conduit,
                      Switchgear, wiring cable etc., are of reputed make &
                      confirming to ISI standards. Brands such as Le grand or
                      equivalent would used. GM Modular Switches
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col>
              <p className="fs-5 p-3">
                <b>AIR CONDITIONG</b>
              </p>
            </Col>

            <Col className="d-flex flex-column fs-5 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>Provision for Electrical conduit,</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col>
              <p className="fs-5 p-3">
                <b>TELEPHONE POINTS</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-5 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>In Living Room and in all Bedrooms.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="border-bottom-white">
            <Col>
              <p className="fs-5 p-3">
                <b>D.G. KIRLOSKAR MAKE</b>
              </p>
            </Col>

            <Col className="d-flex flex-column fs-5 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>For common area lighting, lifts and pumps.</li>
                    <li>6 Kva power back-up for each unit</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className=" border-bottom-white">
            <Col>
              <p className="fs-5 p-3">
                <b>ELEVATORS</b>
              </p>
            </Col>

            <Col className="d-flex flex-column fs-5 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>Lifts - Make Schindler or equivalent. 12 Passenger.</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="">
            <Col>
              <p className="fs-5 p-3">
                <b>SECURITY</b>
              </p>
            </Col>
            <Col className="d-flex flex-column fs-5 p-3">
              <div className="d-flex flex-row justify-content-start align-items-start ">
                <div>
                  <ul>
                    <li>
                      Round with clock security with CCTV & intercom facility
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Specificy2;
