import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { RiArrowDropUpLine } from 'react-icons/ri';
import Scroll from 'react-scroll';

interface IScrollToTop {
    scrollpos: number;
    visible: boolean;
}

function ScrollToTop() {
    const [state, setState] = useState<IScrollToTop>({
        scrollpos: window.pageYOffset,
        visible: false
    })

    const scroll = Scroll.animateScroll;

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

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

    const { visible } = state

    return (
        <span className='ml-auto' >
            {visible &&
                <a onClick={scrollToTop} href='#!'>
                    <Button>
                        <RiArrowDropUpLine size={32} />
                    </Button></a>}
        </span>
    )
}

export default ScrollToTop
