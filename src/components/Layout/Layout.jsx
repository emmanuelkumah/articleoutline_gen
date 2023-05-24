import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../../App.css";

const Layout = ({ children }) => {
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

export default Layout;
