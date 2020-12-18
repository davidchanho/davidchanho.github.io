import Section from "components/layout/Section";
import { data } from "model/data";
import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function FavoriteTechnology() {
  return (
    <Section header='Favorite Technology'>
      <ListGroup>
        {data.favoriteTech.map((el, index) => (
          <ListGroupItem className='border-0' key={`favorite-tech-${index}`}>
            <Row>
              <Col xs={3}>
                <img alt='' src={el.src} />
              </Col>
              <Col>
                {el.text}
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Section>
  );
}

export default FavoriteTechnology;
