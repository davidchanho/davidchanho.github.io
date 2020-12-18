import ContactDetails from "components/ContactDetails";
import { data } from "model/data";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeroContainer } from "styles/styles";

function Hero() {
  const { img, about } = data.about

  return (
    <HeroContainer fluid className="vh-100 text-white p-5 mx-auto">
      <div>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col>
            <img className='flex-end' src={img} alt='' />
          </Col>
          <Col>
            <Container>
              <div className='my-3 py-4'>
                <h3>About Me</h3>
                <p>
                  {about}
                </p>
              </div>
              <h3>Contact Details</h3>
              <ContactDetails />
            </Container>
          </Col>
        </Row>
      </div>
    </HeroContainer>
  );
}

export default Hero;
