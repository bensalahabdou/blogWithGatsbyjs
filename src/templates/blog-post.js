import React from 'react';
import { Link } from 'gatsby';
import Img from "gatsby-image"
import { graphql } from 'gatsby'

const BlogPost = ({data}) => {
    const Post = data.markdownRemark
    return (
    <div>
        <Link to="/blog-page"> Go back to Blog </Link>
        <hr/>
        <br/>
        <h2>{Post.frontmatter.title}</h2>
        <p>posted by {Post.frontmatter.author} on {Post.frontmatter.date} </p>
        <Img 
        // fluid={Post.frontmatter.image.childImageSharp.fluid}
        fixed={Post.frontmatter.image.childImageSharp.fixed}
        />
        <div dangerouslySetInnerHTML={{ __html: Post.html}}></div>
    </div>
);
}

export default BlogPost;

export const PostQuery = graphql`
 query postIndex($path : String!)
  {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "DD MMMM")
        title
        author
        path
        image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed
              }
              
            }
          }
      }
    }
  }
`