import React from "react";

interface Props {
  header: string;
}

function Header({ header }: Props) {
  return (
    <h3 className="text-center text-capitalize mb-5">
      <u>{header}</u>
    </h3>
  );
}

export default Header;
