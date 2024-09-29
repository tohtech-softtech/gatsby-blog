import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"

const BlogList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const imageData = data.thumbnail?.childImageSharp?.gatsbyImageData;

  return (
    <Layout>
      <h1>ブログ一覧</h1>
      {posts.map(({ node }) => (
        <ul key={node.id} style={{ marginBottom: "20px" }}>
          <Card
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            imageUrl={imageData ? imageData.images.fallback.src : null}
            link={node.frontmatter.slug}
          />
        </ul>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/contents/article/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
            # tags
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default BlogList