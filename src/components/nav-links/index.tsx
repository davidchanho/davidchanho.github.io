import React from "react";
import styled from "styled-components";
import {useLocation} from 'react-router-dom'

const NavLink = styled.a`
  cursor: pointer;
  margin-right: 15px;
  color: black;

  &:hover, &:focus, &.active {
    color: black;
    text-decoration: none;
    border-bottom: 3px solid black;
  }
`;

function NavLinks() {
    
  return (
    <div className="ml-auto">
      <NavLink href="/#projects">projects</NavLink>
      <NavLink href="/#work">work</NavLink>
      <NavLink href="/#contactForm">contact</NavLink>
    </div>
  );
}

export default NavLinks;
