import SectionHeader from 'components/layout/SectionHeader'
import ProjectCard from 'components/ProjectCard'
import React from 'react'
import { CardColumns, Container } from 'react-bootstrap'


function Work() {
    return (
        <div className="my-5">
            <SectionHeader header='Work' />
            <Container>
                <CardColumns className='mx-auto'>
                    <ProjectCard title="Crazy Fire Mongolian Grill" desc='' github='' link='' />
                    <ProjectCard title="Meet at Knightdale" desc='' github='' link='' />
                </CardColumns>
            </Container>
        </div>
    )
}

export default Work
