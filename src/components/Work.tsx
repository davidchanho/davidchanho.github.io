import Section from 'components/layout/Section'
import SectionItem from 'components/layout/SectionItem'
import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'

function Work() {
    return (
        <div id='work'>
            <Section header="Work">
                <ListGroup>
                    <Row>
                        <Col>
                            <SectionItem title="Crazy Fire Mongolian Grill &middot; 2008 - 2010" subtitle="Assistant Manager" />
                        </Col>
                        <Col>
                            <SectionItem title="CRD of America &middot; 2010 - current" subtitle="Accountant" />
                        </Col>
                    </Row>
                </ListGroup>
            </Section>
        </div>
    )
}

export default Work
