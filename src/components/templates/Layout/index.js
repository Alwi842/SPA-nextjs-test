import React from "react";
import Footer from "@/components/organism/Footer";
import Nav from "@/components/organism/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
