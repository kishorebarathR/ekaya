import React from "react";

import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import AmoraBanner from "../AmoraComponents/AmoraBanner"
import AmoraPage from "../AmoraComponents/AmoraPage"
import Highlights from "../AmoraComponents/Highlights"
import Form from "../HomeComponents/Form";


const index = () => {
  return (
    <>
      <Header />
      <AmoraBanner />
      <AmoraPage/>

      <Highlights/>
      <Form />
      <Footer />
    </>
  );
};

export default index;
