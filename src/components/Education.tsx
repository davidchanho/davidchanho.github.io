import Section from "components/layout/Section";
import SectionItem from "components/layout/SectionItem";
import SectionSubtitle from "components/layout/SectionSubtitle";
import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

function Education() {
  return (
    <Section header="Education">
      <ListGroup>
        <Row>
          <Col>
            <SectionSubtitle subtitle="University" />
            <SectionItem title="Johnson & Wales University &middot; 2012" subtitle="Bachelors in Accounting" />
          </Col>
          <Col>
            <SectionSubtitle subtitle="Certifications" />
            <SectionItem title="Coding Bootcamp of UNC Chapel Hill &middot; 2020" subtitle="Bachelors in Accounting" />
            <SectionItem title="Coursera IBM Data Science &middot; 2020" subtitle="Bachelors in Accounting" />
          </Col>
        </Row>
      </ListGroup>
    </Section >
  );
}

export default Education;
