import React from "react";
import { Button } from "react-bootstrap";
import { RiArrowDropUpLine } from "react-icons/ri";
import useScroll from "./useScroll";

function ScrollToTop() {
  const { visible, scrollTop } = useScroll();

  return (
    <span className="ml-auto">
      <Button className={visible ? "visible" : "invisible"} onClick={scrollTop}>
        <RiArrowDropUpLine size={32} />
      </Button>
    </span>
  );
}

export default ScrollToTop;
