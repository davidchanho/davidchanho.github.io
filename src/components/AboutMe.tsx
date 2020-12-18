import { data } from 'model/data'
import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { AboutMeContainer } from 'styles/styles'

function AboutMe() {
    const { about } = data.about

    return (
        <AboutMeContainer>
            <h3>About Me</h3>
            <ListGroupItem>
                {about}
            </ListGroupItem>
        </AboutMeContainer>
    )
}

export default AboutMe
