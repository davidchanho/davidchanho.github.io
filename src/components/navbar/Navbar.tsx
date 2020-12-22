import ExternalLinks from "components/navbar/ExternalLinks";
import NavLinks from "components/navbar/NavLinks";
import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar expand="lg" bg="light" className="fixed-top">
      <BsNavbar.Brand href='/' className='d-flex align-items-center'>
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
