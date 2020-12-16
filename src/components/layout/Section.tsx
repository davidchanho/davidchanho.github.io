import SectionHeader from 'components/layout/SectionHeader'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionProps } from 'types/types'

function Section({ header, children }: SectionProps) {
    return (
        <Container className='my-5 d-flex flex-column justify-content-center'>
            <Row>
                <Col sm={3} className='border-right'>
                    <SectionHeader header={header} />
                </Col>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default Section
