import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import BannerAllPageComponents from '../PropsComponents/BannerAllPageComponents'

const VistaBanner = () => {

  const bgImage ={
    url : '/images/vista_banner.png'
  }




  return (
    <>

    <BannerAllPageComponents backgroundImage={bgImage} />
      {/* <div className="p-0 w-100" fluid style={{backgroundImage:'url("/images/img-1.png")',height:"1000px",backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <h1 className="text-white ms-lg-5" style={{fontSize:"100px"}}>Vista Do Mar</h1>
        <h1 style={{color:"#BBC6C9", fontSize:"100px"}} className="ms-lg-5">By Ekaya Spaces</h1>
        <div className="d-flex flex-row gap-2">
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-white ms-5 fs-1">Dona Paula</h2>
            </div>
            <div className="border-start border-5 px-2 d-flex flex-column justify-content-center">
              <h2 className="mb-0 text-white fs-1">Goa</h2>
              
            </div>
            <div className="border-start border-5 px-2 d-flex flex-column justify-content-center">
              <h2 className="mb-0 text-white fs-1">India</h2>
            </div>
          </div>
      </div> */}
    </>
  )
};

export default VistaBanner;
