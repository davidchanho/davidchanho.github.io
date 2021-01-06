import { NavLink } from 'components/nav-links/NavLinks.styles';
import React from 'react';

function NavLinks() {
    return (
        <div className="ml-auto" >
            <NavLink activeClass="active" to="about" spy={true} hashSpy={true} smooth={true} duration={500}>
                About
            </NavLink>
            <NavLink activeClass="active" to="projects" spy={true} hashSpy={true} smooth={true} duration={500}>
                Projects
            </NavLink>
            <NavLink activeClass="active" to="blog" spy={true} hashSpy={true} smooth={true} duration={500}>
                Blog
            </NavLink>
            <NavLink activeClass="active" to="contactForm" spy={true} hashSpy={true} smooth={true} offset={-200} duration={500}>
                Contact Me
            </NavLink>
        </div>
    )
}

export default NavLinks
