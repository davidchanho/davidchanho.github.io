import SectionHeader from "components/layout/SectionHeader";
import ProjectCard from "components/ProjectCard";
import { data } from "model/data";
import React from "react";
import { CardColumns, Container } from "react-bootstrap";

function Projects() {
  return (
    <div className="my-5">
      <SectionHeader header='Projects' />
      <Container>
        <CardColumns className='mx-auto'>
          {data.projects.map((l) =>
            <ProjectCard key={l.title} {...l} />
          )}
        </CardColumns>
      </Container>
    </div>
  );
}

export default Projects;
