import NavLink from "components/layout/NavLink";
import React from "react";
import { Navbar as BsNavbar } from "react-bootstrap";

const links = [
  { link: 'about', name: 'About' }, 
  { link: 'education', name: 'Education' }, 
  { link: 'education', name: 'Work' }, 
  { link: 'projects', name: 'projects' }, 
  { link: 'tech', name: 'Favorite Tech' }, 
  { link: "contacts", name: 'Contact Me' }
]

function Navbar() {
  return (
    <BsNavbar expand="lg" bg="light" className="fixed-top">
      <BsNavbar.Toggle className="ml-auto" />
      <BsNavbar.Collapse className="justify-content-end">
        {links.map(({ link, name }, index) => <NavLink key={`nav-link-${index}`} link={link} name={name} />)}
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
