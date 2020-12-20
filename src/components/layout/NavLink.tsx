import React from 'react'
import { NavLinkContainer } from 'styles/styles'
import { NavLinkProps } from 'types/types'

function NavLink({ link, name, ...rest }: NavLinkProps) {
    return (
        <NavLinkContainer
            to={link}
            spy={true}
            smooth={true}
            offset={-90}
            {...rest}
            className='mx-4 click text-capitalize'>{name}
        </NavLinkContainer>
    )
}

export default NavLink
