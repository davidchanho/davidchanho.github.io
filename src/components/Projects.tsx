import SectionHeader from "components/layout/SectionHeader";
import ProjectCard from "components/ProjectCard";
import React from "react";
import { CardColumns, Container } from "react-bootstrap";

const list = [
  {
    title: 'Slack',
    desc: 'A team chatting app',
    frontend: "React Native",
    styling: "Styled-Components",
    ui: "React-Native-Elements",
    backend: "Firebase",
    dataStorage: "Firestore",
    stateManager: "React Context",
    auth: 'Firebase Auth',
    hosting: 'Firebase Hosting',
    github: 'https://github.com/davidchanho/react-native-slack',
    link: ''
  },
  {
    title: 'Spotify',
    desc: 'A music app',
    frontend: "React",
    styling: "",
    ui: "",
    backend: "Laravel (PHP)",
    dataStorage: "SQL",
    stateManager: "",
    auth: '',
    hosting: '',
    github: '',
    link: ''
  },
  {
    title: 'Medium',
    desc: 'An article publishing site',
    frontend: "",
    styling: "",
    ui: "",
    backend: "Node.js",
    dataStorage: "MongoDB",
    stateManager: "",
    auth: '',
    hosting: '',
    github: 'https://github.com/davidchanho/mediumClone',
    link: ''
  },
  {
    title: 'Jira',
    desc: 'A project management system',
    frontend: "",
    styling: "",
    ui: "",
    backend: "Django (Python)",
    dataStorage: "SQL",
    stateManager: "",
    auth: '',
    hosting: '',
    github: 'https://github.com/davidchanho/react-jira-clone',
    link: ''
  },
  {
    title: 'Amazon',
    desc: 'An e-commerce site',
    frontend: "",
    styling: "",
    ui: "",
    backend: "Spring (Java)",
    dataStorage: "",
    stateManager: "",
    auth: '',
    hosting: '',
    github: '',
    link: ''
  },
  {
    title: 'React Portfolio Template',
    desc: 'A portfolio template',
    frontend: "",
    styling: "Styled-Components",
    ui: "Bootstrap",
    backend: "Aws Lambda",
    dataStorage: "local storage",
    stateManager: "n/a",
    auth: 'n/a',
    hosting: 'Github Pages',
    github: '',
    link: ''
  },
]

function Projects() {
  return (
    <div className="my-5">
      <SectionHeader header='Projects' />
      <Container>
      <CardColumns className='mx-auto'>
        {list.map((l) =>
          <ProjectCard key={l.title} {...l} />
        )}
      </CardColumns>
      </Container>
    </div>
  );
}

export default Projects;
