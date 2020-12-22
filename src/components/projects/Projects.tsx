import Project from "components/projects/Project";
import Section from "components/section/Section";
import React from "react";
import { ListGroup } from "react-bootstrap";

function Projects() {
  return (
    <Section name='projects' header='projects'>
      <ListGroup className='mx-auto'>
        <Project title="Slack" github="https://github.com/davidchanho/react-native-slack" link="https://react-firebase-chat-23479.firebaseapp.com/" />
        <Project title="Medium" github="https://github.com/davidchanho/mediumClone" link="" />
      </ListGroup>
    </Section>
  );
}

export default Projects;
