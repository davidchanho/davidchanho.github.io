import SectionHeader from "components/layout/SectionHeader";
import { data } from "model/data";
import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Element } from 'react-scroll';

function FavoriteTechnology() {
  return (
    <Element name='tech' className='mt-5'>
      <SectionHeader header='Favorite Technology' />
      <Container>
        <ListGroup>
          {data.favoriteTech.map((el, index) => (
            <ListGroupItem className='border-0 mb-3' key={`favorite-tech-${index}`}>
              <Row>
                <Col xs={3}>
                  <img alt='' src={el.src} />
                </Col>
                <Col xs={6}>
                  {el.text}
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </Element>
  );
}

export default FavoriteTechnology;
