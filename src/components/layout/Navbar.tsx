import ExternalLinks from "components/layout/ExternalLinks";
import NavLinks from "components/layout/NavLinks";
import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar expand="lg" bg="light" className="fixed-top">
      <BsNavbar.Toggle className="ml-auto" />
      <BsNavbar.Collapse className='justify-content-between'>
        <ExternalLinks />
        <NavLinks />
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
