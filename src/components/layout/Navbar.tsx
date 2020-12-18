import React from "react";
import { Nav, Navbar as BsNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar expand="lg" bg="light" className="fixed-top">
      <BsNavbar.Toggle className="ml-auto" />
      <BsNavbar.Collapse className="justify-content-end">
        <Nav.Link href="/#about">About</Nav.Link>
        <Nav.Link href="/#education">Education</Nav.Link>
        <Nav.Link href="/#education">Work</Nav.Link>
        <Nav.Link href="/#projects">Projects</Nav.Link>
        <Nav.Link href="/#tech">Favorite Tech</Nav.Link>
        <Nav.Link href="/#contacts">Contact Me</Nav.Link>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
