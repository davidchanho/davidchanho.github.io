import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


function ExternalLinks() {
    return (
        <div className='ml-3 d-flex align-items-center'>
            <a className='mr-3' href='https://github.com/davidchanho' target="_blank" rel='noreferrer' ><AiFillGithub size={32} /></a>
            <a href='https://www.linkedin.com/in/david-ho-8603aba7/' target="_blank" rel='noreferrer' >
                <AiFillLinkedin size={32} />
            </a>
            <a className='ml-3 font-weight-bold' href='https://docs.google.com/document/d/1nbkwwengFyqKdw5elYSCLsAaqh5r6FvQC9yi0BHg-dw/edit?usp=sharing' target="_blank" rel='noreferrer' >
                RESUME
            </a>
        </div>
    )
}

export default ExternalLinks
