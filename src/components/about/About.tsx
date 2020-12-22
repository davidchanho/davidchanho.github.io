import AboutImage from "components/about/AboutImage";
import AboutMe from "components/about/AboutMe";
import React from "react";
import { Container } from "react-bootstrap";
import { Element } from 'react-scroll';
import styled from "styled-components";

const AboutContainer = styled(Element)`
  background-color: #202020;
  img {
    width: 150px;
    margin-right: 100px;
  }
`;

function About() {
  return (
    <AboutContainer name="about">
      <Container fluid className="vh-100 text-white p-5 d-flex align-items-center justify-content-center">
        <div>
          <AboutImage />
        </div>
        <div className='mt-5'>
          <h1 className='mb-5'>Hello, I am David Ho</h1>
          <AboutMe />
        </div>
      </Container>
    </AboutContainer>
  );
}

export default About;
