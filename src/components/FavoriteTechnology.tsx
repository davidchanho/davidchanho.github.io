import Section from "components/layout/Section";
import { data } from "model/data";
import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function FavoriteTechnology() {
  return (
    <Section header='Favorite Technology'>
      <ListGroup>
        {data.favoriteTech.map((el, index) => (
          <ListGroupItem key={`favorite-tech-${index}`}>
            <img alt='' src={el.src} /> {el.text}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Section>
  );
}

export default FavoriteTechnology;
