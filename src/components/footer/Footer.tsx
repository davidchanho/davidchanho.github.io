import ScrollToTop from 'components/scroll-to-top/ScrollToTop'
import React from 'react'
import { Navbar } from 'react-bootstrap'

function Footer() {
    return (
        <Navbar fixed='bottom'>
            <ScrollToTop />
        </Navbar>
    )
}

export default Footer
