import { data } from "model/data";
import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { HeroContainer } from "styles/styles";

function Hero() {
  const { name, img, about, address, city, state, zipcode, phone, email } = data.about

  return (
    <HeroContainer fluid className="vh-100 text-white p-5 mx-auto">
      <div>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col>
            <img className='mr-auto' src={img} alt='' />
          </Col>
          <Col>
            <Container>
              <div className='my-3'>
                <h3>About Me</h3>
                <p>
                  {about}
                </p>
              </div>
              <h3>Contact Details</h3>
              <ListGroup className='bg-black'>
                <ListGroupItem className='text-capitalize'>{name}</ListGroupItem>
                <ListGroupItem>{address}</ListGroupItem>
                <ListGroupItem>{city}, {state}, {zipcode}</ListGroupItem>
                <ListGroupItem>{phone}</ListGroupItem>
                <ListGroupItem>{email}</ListGroupItem>
              </ListGroup>
            </Container>
          </Col>
        </Row>
      </div>
    </HeroContainer>
  );
}

export default Hero;
