import React from "react";
import { ListGroup } from "react-bootstrap";
import blog1 from "../../blog/blog_1.md";
import BlogPost from "../blog-post";
import Section from "../section";

function BlogList() {
  return (
    <Section name="blog" header="blog">
      <ListGroup>
        <BlogPost file={blog1} />
      </ListGroup>
    </Section>
  );
}

export default BlogList;
