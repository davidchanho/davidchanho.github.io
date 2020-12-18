import NavLink from 'components/layout/NavLink';
import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

function ScrollToTop() {
    return (
        <Navbar fixed='bottom'>
            <span className='ml-auto'>
                <NavLink link='about' name={<Button>^</Button>} />
            </span>
        </Navbar>
    )
}

export default ScrollToTop
