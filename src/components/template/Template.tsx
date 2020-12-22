import Navbar from "components/navbar/Navbar";
import React, { PropsWithChildren } from "react";

function Template({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Template;
