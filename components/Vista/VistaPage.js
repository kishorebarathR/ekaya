import React from "react";
import { Row, Col, Container, Image, Carousel } from "react-bootstrap";
import VistaDoMar from "./VistaJson";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const VistaPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="justify-content-center mx-lg-4 mt-5 fs-3 wbg-green">
              ABOUT THE PLOT
            </p>
          </Col>
          <Col>
            <p className="mx-lg-4 mt-5 fs-3 wbg-green arrow">CONTACT US</p>
          </Col>
        </Row>

        <p className="justify-content-center mx-4 display-6">
          Alvit and Esmeralda’s Journey
        </p>
        <p className=" fs-5 mx-4 mt-3">
          In the vibrant city of Dar es Salaam, nestled in East Africa, Alvit
          and Esmeralda began their life together. Over the span of five years,
          their family blossomed with the arrival of two daughters, Siandra and
          Jennifer. However, as the tumultuous East African revolution unfolded
          in 1965, the family migrated to Bangalore, India.
        </p>
        <p className=" fs-5 mx-4 mt-3">
          In Bangalore, amidst the bustling streets and new beginnings, Alvit
          and Esmeralda found themselves embracing fresh opportunities. When an
          enticing offer came from Oman, they eagerly seized it. Alvit was
          tasked with spearheading the establishment of the modern Marine patrol
          police division, while Esmeralda took on the responsibility of
          landscaping the vast Royal Oman Police establishments across the
          country.
        </p>
        <p className=" fs-5 mx-4 mt-3">
          A decade of dedication and success later, Alvit and Esmeralda returned
          to Bangalore, their hearts filled with memories of Oman’s beauty and
          prosperity. It was then that Alvit began to dream of building their
          dream villa in Dona Paula, a picturesque coastal town. Meanwhile,
          Siandra embarked on her own journey, finding employment in the
          enchanting state of Goa.
        </p>
        <p className=" fs-5 mx-4 mt-3">
          When the time came for Siandra’s wedding, her parents asked her what
          she desired as a gift. Without hesitation, Siandra expressed her wish
          for a plot of land in Goa.
        </p>
        <p className=" fs-5 mx-4 mt-3">
          Throughout the years, whenever Alvit and Esmeralda visited Goa, they
          would drive from Loutolim, Esmeralda’s grandmother’s home, to Dona
          Paula. Standing on a particular spot overlooking the majestic Marmagoa
          harbor, Alvit would declare, “One day, I will build a house here!”
        </p>
        <p className=" fs-5 mx-4 mt-3">
          Fate intervened, and Alvit finally found three plots in Dona Paula.
          One was gifted to Siandra, another was designated as an orchard, and
          the third became the site of their dream home, named Vista do Mar,
          meaning “views of the sea” in Portuguese.
        </p>
        <p className=" fs-5 mx-4 mt-3">
          Today, the villa still stands proudly as a symbol of Alvit’s vision
          and determination. Ekaya Spaces has collaborated with the family to
          develop a luxury apartment project, aptly named Vista do Mar, ensuring
          that Alvit’s legacy lives on, even though he may no longer be with us.
        </p>
      </Container>

      <Container>
      
          <Row className="g-4">
            <Col lg={6}>
              <img className="w-100" src="/images/vista_group-1.png" />
            </Col>
            <Col lg={6}>
              <img className="w-100" src="/images/vista_group-2.png"/>
            </Col>
          </Row>
       
      <Row className="justify-content-center mt-3">
        <Col className="text-centers">
        <IoIosArrowDropleftCircle className="h-25 fs-3 w-25 p-0 left-arrow mb-0 mr-2" />
        </Col>
        <Col className="text-center">
        <IoIosArrowDroprightCircle className="h-25 w-25 p-0 right-arrow mb-0" />
        </Col>
        </Row>
    </Container>
      <Container>
        <p className="justify-content-center mx-4 mt-5 display-6 text-center">
          Luxurious Amenities at Oceanfront Apartments
        </p>
        <p className="fs-5 mx-4 mt-3 text-center">
          Indulge in the ultimate luxury living experience with a comprehensive
          array of amenities designed to exceed your expectations:
        </p>
      </Container>
      <Container>
        <Row className="p-5 d-flex flex-grow-1">
          {VistaDoMar.map((items, index) => (
            <>
              <Col lg={4} className="mb-5">
                <img src={items.svg} />
                <h3 className="mt-3">{items.title}</h3>
                <p className="fs-6">{items.text}</p>
              </Col>
            </>
          ))}
        </Row>
        <p className="wbg-green fs-2 text-center">
          Experience the epitome of luxury living at our oceanfront paradise,
          where every detail is crafted to perfection.
        </p>
      </Container>
    </>
  );
};

export default VistaPage;
