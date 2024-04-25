import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BannerAllPageComponents from "../PropsComponents/BannerAllPageComponents";

const AmoraBanner = () => {
  const bgImage ={
    url : '/images/AmoraBanner.png'
  }

  return (
    <>
      {/* <div className="position-relative p-0"> */}
<BannerAllPageComponents backgroundImage={bgImage} />
{/* <div className="position-absolute ms-lg-5 top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start text-white">
          <h1 className="ms-lg-5 px-lg-5" style={{ fontSize: "100px" }}>Amora</h1>
          <h1 className="ms-lg-5 px-lg-5" style={{ color: "#BBC6C9", fontSize: "50px" }}>by Ekaya Spaces</h1>
          <div className="d-flex flex-row gap-2 mt-3 ms-lg-5 px-lg-5">
            <div className="d-flex flex-column justify-content-center ">
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
