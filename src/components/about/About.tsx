import { AboutContainer } from "components/about/About.styles";
import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <AboutContainer name="about">
      <Container fluid className="vh-100 text-white px-5 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex align-items-end justify-content-center">
          <div>
            <img className='mr-4' src="https://ca.slack-edge.com/TL77KG802-ULG4SK5Q9-a5e3db5965c6-512" alt='' />
          </div>
          <div>
            <h1>Hello, I am David Ho</h1>
          </div>
        </div>

        <div className='ml-5'>
          <p>
            I'm a Raleigh based Web Developer.
          </p>
          <p>
            I graduated from Coding
            Bootcamp of UNC Chapel Hill in 2020.
          </p>
          <p>
            I am currently looking for an
            entry level web developer role.
          </p>
        </div>
      </Container>
    </AboutContainer>
  );
}

export default About;
