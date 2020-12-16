import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { HeroContainer } from "styles/styles";

function Hero() {
  return (
    <HeroContainer fluid className="vh-100 text-white p-5 mx-auto">
      <div>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col>
            <img className='mr-auto' src='https://ca.slack-edge.com/TL77KG802-ULG4SK5Q9-a5e3db5965c6-512' alt='' />
          </Col>
          <Col>
            <Container>
              <div className='my-3'>
                <h3>About Me</h3>
                <p>
                  I'm a Raleigh based Web Developer. I graduated from Coding
                  Bootcamp of UNC Chapel Hill in 2020. I am currently looking for an
                  entry level web developer role.
            </p>
              </div>
              <h3>Contact Details</h3>
              <ListGroup>
                <ListGroupItem>David Ho</ListGroupItem>
                <ListGroupItem>4241 Tristone Falls Avenue #1G</ListGroupItem>
                <ListGroupItem>Raleigh, NC, 27616</ListGroupItem>
                <ListGroupItem>919-306-0509</ListGroupItem>
                <ListGroupItem>davidchanho.dev@gmail.com</ListGroupItem>
              </ListGroup>
            </Container>
          </Col>
        </Row>
      </div>
    </HeroContainer>
  );
}

export default Hero;
