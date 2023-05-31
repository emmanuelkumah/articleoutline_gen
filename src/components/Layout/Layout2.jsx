import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer2";
import "../../App.css";

const Layout2 = ({ children }) => {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout2;
