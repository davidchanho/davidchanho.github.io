import { useEffect, useState } from "react";

interface IScrollToTop {
    scrollpos: number;
    visible: boolean;
}

export const useScrollVisibility = () => {
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

    const { visible } = state

    return {visible}
}