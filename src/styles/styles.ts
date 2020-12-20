import { Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";

export const HeroContainer = styled(Container)`
  background-color: #202020;
  img {
    width: 150px;
    margin-right: 100px;
  }
`;

export const AboutMeContainer = styled.div`
  margin-bottom: 30px;

  .list-group-item {
    background-color: inherit;
  }
`;

export const ContactDetailsContainer = styled(ListGroup)`
 .list-group-item {
    border: none;
    background-color: inherit;
 }
`;

