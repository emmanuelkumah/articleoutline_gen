import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import "../../../src/App.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="app">
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
