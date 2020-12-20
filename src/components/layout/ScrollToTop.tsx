import NavLink from 'components/layout/NavLink';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { RiArrowDropUpLine } from 'react-icons/ri';
interface IScrollToTop {
    scrollpos: number;
    visible: boolean;
}

function ScrollToTop() {
    const [state, setState] = useState<IScrollToTop>({
        scrollpos: window.pageYOffset,
        visible: false
    })
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = currentScrollPos > 250;

            setState({
                scrollpos: currentScrollPos,
                visible
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <span className='ml-auto' >
            {state.visible && <NavLink link='about' name={<Button><RiArrowDropUpLine size={32} /></Button>} />}
        </span>
    )
}

export default ScrollToTop
