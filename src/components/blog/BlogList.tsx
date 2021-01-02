import BlogPost from 'components/blog/BlogPost'
import Section from 'components/section/Section'
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import blog1 from '../../blog/blog_1.md'

function BlogList() {
    return (
        <Section name='blog' header='blog'>
            <ListGroup>
                <BlogPost file={blog1} />
            </ListGroup>
        </Section>
    )
}

export default BlogList
