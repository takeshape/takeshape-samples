import React from "react";
import PropTypes from "prop-types";

import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import "./default.css";

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Shape Portfolio" />
    <div className="container">
      <Menu />
      <div className="main">{children}</div>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
