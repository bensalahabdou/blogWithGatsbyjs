const path = require('path')

exports.createPages =  ({ actions, graphql }) => {
  
const { createPage } = actions
  
const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  
const result =  graphql(`
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
          html
        }
      }
    }
}
`).then(res => {
    if (res.errors) {
        return  Promise.reject(res.errors)
        
    }

res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
    })
  })
  
})
}