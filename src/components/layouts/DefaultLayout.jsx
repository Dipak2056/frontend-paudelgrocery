import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
