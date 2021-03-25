import Project from "components/project/Project";
import Section from "components/section/Section";
import React from "react";
import { ListGroup } from "react-bootstrap";

function Work() {
  return (
    <Section name="work" header="work">
      <ListGroup className="mx-auto">
        <Project
          title="American Game Machine"
          github="https://github.com/davidchanho/american-game-machine"
          link="https://www.americangamemachine.com/"
        />
        <Project
          title="Crazy Fire Mongolian Grill"
          github="https://github.com/davidchanho/crazyfire2"
          link="https://crazyfire-1hlzpsarm-davidhocrd.vercel.app/"
        />
      </ListGroup>
    </Section>
  );
}

export default Work;
