import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BiLinkExternal } from 'react-icons/bi'
import { BsCode } from 'react-icons/bs'
import { IProject } from 'types/types'

function ProjectCard({ title, desc, backend, dataStorage, stateManager, hosting, github, link }: IProject) {
    return (
        <Card key={title}>
            <Card.Header >
                <Card.Title className='d-flex align-items-center'>
                    <div>{title}</div> <div className="ml-auto"><a className='mr-2' href={github}><BsCode />
                    </a> <a href={link}><BiLinkExternal /></a></div>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col sm={4}>
                        <Card.Text>Description</Card.Text>
                        <Card.Text>Backend</Card.Text>
                        <Card.Text>Data Storage</Card.Text>
                        <Card.Text>State Manager</Card.Text>
                        <Card.Text>Hosting</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>{desc}</Card.Text>
                        <Card.Text>{backend}</Card.Text>
                        <Card.Text>{dataStorage}</Card.Text>
                        <Card.Text>{stateManager}</Card.Text>
                        <Card.Text>{hosting}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
