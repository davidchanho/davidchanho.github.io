import React, { PropsWithChildren } from 'react'
import { Navbar } from 'react-bootstrap'

function Footer({ children }: PropsWithChildren<{}>) {
    return (
        <Navbar fixed='bottom'>
            {children}
        </Navbar>
    )
}

export default Footer
