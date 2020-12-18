import React from "react";
import { Nav, Navbar as BsNavbar } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar expand="lg" bg="light" className="fixed-top">
      <Nav className="mx-auto">
        <Nav.Link href="/#about">About</Nav.Link>
        <Nav.Link href="/#education">Education</Nav.Link>
        <Nav.Link href="/#work">Work</Nav.Link>
        <Nav.Link href="/#projects">Projects</Nav.Link>
        <Nav.Link href="/#tech">Favorite Tech</Nav.Link>
        <Nav.Link href="/#contacts">Contact Me</Nav.Link>
      </Nav>
    </BsNavbar>
  );
}

export default Navbar;
