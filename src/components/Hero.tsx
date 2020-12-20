import AboutMe from "components/AboutMe";
import ContactDetails from "components/ContactDetails";
import MyImage from "components/MyImage";
import React from "react";
import { HeroContainer } from "styles/styles";

function Hero() {
  return (
    <HeroContainer fluid className="vh-100 text-white p-5 d-flex align-items-center justify-content-center">
      <div>
        <MyImage />
      </div>
      <div>
        <AboutMe />
        <ContactDetails />
      </div>
    </HeroContainer>
  );
}

export default Hero;
