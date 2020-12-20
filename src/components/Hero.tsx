import AboutMe from "components/AboutMe";
import ContactDetails from "components/ContactDetails";
import MyImage from "components/MyImage";
import React from "react";
import { Container } from "react-bootstrap";
import { HeroContainer } from "styles/styles";

function Hero() {
  return (
    <HeroContainer name="about">
      <Container fluid className="vh-100 text-white p-5 d-flex align-items-center justify-content-center">
      <div>
        <MyImage />
      </div>
      <div className='mt-5'>
        <h1 className='mb-5'>Hello, I am David Ho</h1>
        <AboutMe />
        <ContactDetails />
      </div>
      </Container>
    </HeroContainer>
  );
}

export default Hero;
