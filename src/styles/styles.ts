import { ListGroup } from "react-bootstrap";
import { Element, Link } from "react-scroll";
import styled from "styled-components";

export const HeroContainer = styled(Element)`
  background-color: #202020;
  img {
    width: 150px;
    margin-right: 100px;
  }
`;

export const AboutMeContainer = styled.div`
  margin-bottom: 30px;
  width: 600px;
  .list-group-item {
    background-color: inherit;
    width: 500px;
  }
`;

export const ContactDetailsContainer = styled(ListGroup)`
  .list-group-item {
    border: none;
    background-color: inherit;
  }
`;

export const NavLinkContainer = styled(Link)`
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;
