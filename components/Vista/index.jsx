import React from "react";

import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import VistaBanner from "./VistaBanner";
import VistaPage from "./VistaPage";
import SpecificationVista from "./SpecificationsVista";
import Specify2 from "./Specify2"
import Highlights from "./Highlights"
import Form from "../HomeComponents/Form"


const index = () => {
  return (
    <>
      <Header />
      <VistaBanner />
      <VistaPage />
      <SpecificationVista/>
      <Specify2/>
      <Highlights/>
      <Form/>
        <Footer />
    </>
  );
};

export default index;
