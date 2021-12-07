import React from 'react';
import { graphql } from 'gatsby';

export default ({data}) => {
    console.log(data);
    return (
        <div>
            <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
        </div>
    );
}


export const query = graphql`
  query {
    allContentfulBlogPost {
        edges {
          node {
            title
          }
        }
      }
  }
`