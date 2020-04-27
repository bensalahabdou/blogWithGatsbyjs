import React from "react"

import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => {
  const results = data.allMarkdownRemark.edges
  return (
    
  <Layout>
    <SEO title="Blog" />
    <h1>Articles</h1>
    {results.map(result => {
      return (
      <div key={result.node.id}>
        <h2>{result.node.frontmatter.title}</h2>
        <p>{result.node.excerpt}</p>
        <h4>posted by {result.node.frontmatter.author} on {result.node.frontmatter.date}</h4>
        <p><Link to={result.node.frontmatter.path} style={{textDecoration:'underline'}}>read more</Link></p>
        <br/>
        <br/>
        <hr/>
      </div>
        )
    })}
    
  </Layout>
)
}

export default BlogPage

export const QueryPage = graphql`
query indexBlogPage 
{
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date(formatString: "DD MMMM YYYY")
              author
            }
            excerpt
          }
        }
      }
  }
`