import SectionHeader from "components/layout/SectionHeader";
import SectionItem from "components/layout/SectionItem";
import SectionSubtitle from "components/layout/SectionSubtitle";
import { data } from "model/data";
import React from "react";
import { Card, Container } from "react-bootstrap";
import { Element } from 'react-scroll';

function Education() {
  const school = data.education.school
  const certifications = data.education.certifications

  return (
    <Element name="education">
      <Container className='my-5 mx-auto'>
        <SectionHeader header='Education' />
        <Card>
          <SectionSubtitle subtitle="University" />
          {school.map((item) =>
            <SectionItem key={item.title} title={item.title} subtitle={item.subtitle} />
          )}
        </Card>
        <Card>
          <SectionSubtitle subtitle="Certifications" />
          {certifications.map((item) =>
            <SectionItem key={item.title} title={item.title} />
          )}
        </Card>
      </Container>
    </Element>
  );
}

export default Education;
