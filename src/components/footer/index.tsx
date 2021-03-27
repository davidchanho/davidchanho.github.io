import React from "react";
import { Navbar } from "react-bootstrap";
import ScrollToTop from "../scroll-to-top";

function Footer() {
  return (
    <Navbar fixed="bottom">
      <ScrollToTop />
    </Navbar>
  );
}

export default Footer;
