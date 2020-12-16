import React from "react";
import { Nav, Navbar as BsNavbar } from "react-bootstrap";

function Navbar(props: any) {
  const { location } = props;

  return (
    <BsNavbar expand="lg" bg="light" className="fixed-top">
      <Nav className="mx-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="/">Education</Nav.Link>
        <Nav.Link href="/">Contributions</Nav.Link>
        <Nav.Link href="/">Work</Nav.Link>
        <Nav.Link href="/">Projects</Nav.Link>
        <Nav.Link href="/">Contact Me</Nav.Link>
      </Nav>
    </BsNavbar>
  );
}

export default Navbar;
