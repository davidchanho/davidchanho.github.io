import Section from "components/layout/Section";
import SectionItem from "components/layout/SectionItem";
import SectionSubtitle from "components/layout/SectionSubtitle";
import { data } from "model/data";
import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

function Education() {
  const school = data.education.school
  const certifications = data.education.certifications

  return (
    <div id='education'>
      <Section header="Education">
        <ListGroup>
          <Row>
            <Col>
              <SectionSubtitle subtitle="University" />
              {school.map((item) =>
                <SectionItem key={item.title} title={item.title} subtitle={item.subtitle} />
              )}
            </Col>
            <Col>
              <SectionSubtitle subtitle="Certifications" />
              {certifications.map((item) =>
                <SectionItem key={item.title} title={item.title} />
              )}
            </Col>
          </Row>
        </ListGroup>
      </Section >
    </div>
  );
}

export default Education;
