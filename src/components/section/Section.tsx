import Header from 'components/header/Header';
import { SectionContainer } from 'components/section/Section.styles';
import { SectionProps } from 'components/section/Section.types';
import React from 'react';
import { Container } from 'react-bootstrap';

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
