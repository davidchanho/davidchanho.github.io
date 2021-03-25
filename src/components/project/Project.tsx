import { IProject } from "components/project/Project.types";
import React from "react";
import { ListGroupItem, NavLink } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Project({ title, github, link, description }: IProject) {
  return (
    <ListGroupItem className="d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <NavLink href="/id">{title}</NavLink>
        </div>
        <div className="ml-auto d-flex align-items-center">
          <a className="mr-3" target="_blank" rel="noreferrer" href={github}>
            <AiFillGithub size={22} />
          </a>
          <a target="_blank" rel="noreferrer" href={link}>
            Live Demo
          </a>
        </div>
      </div>

      <div>{description}</div>
    </ListGroupItem>
  );
}

export default Project;
