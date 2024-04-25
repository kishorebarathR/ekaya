import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BannerAllPageComponents from "../PropsComponents/BannerAllPageComponents";

const AmoraBanner = () => {
  const bgImage ={
    url : '/images/AmoraBanner.png'
  }

  return (
    <>
      <BannerAllPageComponents backgroundImage={bgImage} />
      {/* <div
        className="p-0 w-100 position-relative"
        style={{
          backgroundImage: 'url("/images/AmoraBanner.png")',
          height: "1000px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start text-white px-5">
          <h1 style={{ fontSize: "100px" }}>Amora</h1>
          <h1 style={{ color: "#BBC6C9", fontSize: "100px" }}>By Ekaya Spaces</h1>
          <div className="d-flex flex-row gap-2">
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-white fs-1">Moira</h2>
            </div>
            <div className="border-start border-5 px-2 d-flex flex-column justify-content-center">
              <h2 className="mb-0 text-white fs-1">Goa</h2>
            </div>
            <div className="border-start border-5 px-2 d-flex flex-column justify-content-center">
              <h2 className="mb-0 text-white fs-1">India</h2>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AmoraBanner;
