import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavLink = styled(Link)`
 cursor: pointer;
 margin-right: 15px;
`;

function NavLinks() {
    return (
        <div className="ml-auto" >
            <NavLink activeClass="active" to="about" spy={true} hashSpy={true} smooth={true} duration={500}>
                About
            </NavLink>
            <NavLink activeClass="active" to="projects" spy={true} hashSpy={true} smooth={true} duration={500}>
                Projects
            </NavLink>
            <NavLink activeClass="active" to="contactForm" spy={true} hashSpy={true} smooth={true} offset={-200} duration={500}>
                Contact Me
            </NavLink>
        </div>
    )
}

export default NavLinks
