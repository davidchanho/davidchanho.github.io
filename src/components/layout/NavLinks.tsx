import NavLink from "components/layout/NavLink";
import React from 'react';

const links = [
    { link: 'about', name: 'About' },
    { link: 'education', name: 'Education' },
    // { link: 'work', name: 'Work' },
    // { link: 'contributions', name: 'Contributions' },
    { link: 'projects', name: 'Projects' },
    { link: 'tech', name: 'Favorite Tech' },
    { link: "contacts", name: 'Contact Me' }
]

function NavLinks() {
    return (
        <div className="ml-auto" >
            {links.map(({ link, name }, index) => (
                <NavLink key={`nav-link-${index}`} link={link} name={name} />
            ))}
        </div>
    )
}

export default NavLinks
