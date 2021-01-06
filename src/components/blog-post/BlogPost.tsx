import { BlogPostProps } from 'components/blog-post/BlogPost.types';
import React, { useEffect, useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

function BlogPost({ file }: BlogPostProps) {
    const [state, setState] = useState({ markdown: "" });

    useEffect(() => {
        fetch(file)
            .then((res) => res.text())
            .then((text) => setState({ markdown: text }));
    }, [file]);

    const { markdown } = state;

    return (
        <ListGroupItem className='border-0'>
            <ReactMarkdown
                plugins={[gfm]} source={markdown} />
        </ListGroupItem>
    )
}

export default BlogPost
