import Header from 'components/header/Header';
import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import { Element } from 'react-scroll';
import styled from 'styled-components';

interface SectionProps {
    name: string;
    header: string;
    children: ReactNode;
}

const SectionContainer = styled(Element)`
    height: 100vh;
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Section({ name, header, children }: SectionProps) {
    return (
        <SectionContainer name={name}>
            <Header header={header} />
            <Container>
                {children}
            </Container>
        </SectionContainer>
    )
}

export default Section
