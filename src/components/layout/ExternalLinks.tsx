import  React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


function ExternalLinks() {
    return (
        <div>
            <a className='mr-3' href='https://github.com/davidchanho' target="_blank" rel='noreferrer' ><AiFillGithub size={32} /></a>
            <a href='https://www.linkedin.com/in/david-ho-8603aba7/' target="_blank" rel='noreferrer' >
                <AiFillLinkedin size={32} />
            </a>
        </div>
    )
}

export default ExternalLinks
