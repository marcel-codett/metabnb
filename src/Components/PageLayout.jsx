import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = ({ setNavShow, setShow }) => {
  return (
    <div>
      <Navbar setNavShow={setNavShow} setShow={setShow} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
