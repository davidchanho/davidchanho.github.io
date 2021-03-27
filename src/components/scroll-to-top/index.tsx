import React from "react";
import { Button } from "react-bootstrap";
import { RiArrowDropUpLine } from "react-icons/ri";
import useScroll from "./useScroll";

function ScrollToTop() {
  const { visible, scrollTop } = useScroll();
  
  return (
    <span className="ml-auto">
      <a
        className={visible ? "visible" : "hidden"}
        onClick={scrollTop}
        href="#!"
      >
        <Button>
          <RiArrowDropUpLine size={32} />
        </Button>
      </a>
    </span>
  );
}

export default ScrollToTop;
