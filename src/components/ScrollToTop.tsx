import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from "react-scroll";

function ScrollToTop() {
    return (
        <Navbar fixed='bottom'><Link activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} className='ml-auto'>
            <Button>^</Button></Link>
        </Navbar>
    )
}

export default ScrollToTop
