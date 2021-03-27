import { useEffect, useState } from "react";

interface Props {
  scrollpos: number;
  visible: boolean;
}

const useScroll = () => {
  const [state, setState] = useState<Props>({
    scrollpos: window.pageYOffset,
    visible: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = currentScrollPos > 250;

      setState({
        scrollpos: currentScrollPos,
        visible,
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { visible: state.visible };
};

export default useScroll;
