import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";
import ExternalLinks from "../external-links";
import NavLinks from "../nav-links";

function Navbar() {
  return (
    <BsNavbar expand="lg" bg="light">
      <BsNavbar.Brand href="/" className="d-flex align-items-center">
        David Chan Ho <ExternalLinks />
      </BsNavbar.Brand>
      <BsNavbar.Toggle className="ml-auto" />
      <BsNavbar.Collapse>
        <NavLinks />
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
