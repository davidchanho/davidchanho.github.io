import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  margin-bottom: 30px;
  width: 600px;
  .list-group-item {
    background-color: inherit;
    width: 500px;
  }
`;

function AboutMe() {
    return (
        <AboutMeContainer>
            I'm a Raleigh based Web Developer. I graduated from Coding
            Bootcamp of UNC Chapel Hill in 2020. I am currently looking for an
            entry level web developer role.
        </AboutMeContainer>
    )
}

export default AboutMe
