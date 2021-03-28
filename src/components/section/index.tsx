import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../header";

interface Props {
  name: string;
  header: string;
  children: ReactNode;
}

const SectionContainer = styled.div`
  height: 100vh;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Section({ name, header, children }: Props) {
  return (
    <SectionContainer id={name}>
      <Header header={header} />
      <Container>{children}</Container>
    </SectionContainer>
  );
}

export default Section;
