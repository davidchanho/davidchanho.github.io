import { useScrollVisibility } from 'hooks/useScrollVisibility';
import React from 'react';
import { Button } from 'react-bootstrap';
import { RiArrowDropUpLine } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTop() {
    const { scrollToTop } = scroll;

    const { visible } = useScrollVisibility();

    return (
        <span className='ml-auto' >
            {visible &&
                <a onClick={scrollToTop} href='#!'>
                    <Button>
                        <RiArrowDropUpLine size={32} />
                    </Button>
                </a>
            }
        </span>
    )
}

export default ScrollToTop
