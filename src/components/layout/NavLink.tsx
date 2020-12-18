import React from 'react'
import { Link } from 'react-scroll'
import { NavLinkProps } from 'types/types'

function NavLink({ link, name }: NavLinkProps) {
    return (
        <Link activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} className='mr-3 click text-capitalize'>{name}
        </Link>
    )
}

export default NavLink
