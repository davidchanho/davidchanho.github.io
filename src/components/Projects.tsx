import SectionHeader from "components/layout/SectionHeader";
import Project from "components/Project";
import { data } from "model/data";
import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Element } from 'react-scroll';

function Projects() {
  return (
    <Element name='projects'>
      <SectionHeader header='Projects' />
      <Container>
        <ListGroup className='mx-auto'>
          {data.projects.map((l) =>
            <Project key={l.title} {...l} />
          )}
        </ListGroup>
      </Container>
    </Element>
  );
}

export default Projects;
