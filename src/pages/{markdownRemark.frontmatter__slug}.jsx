import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function BlogPostTemplate({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  
  const imageData = frontmatter.thumbnail?.childImageSharp?.gatsbyImageData;

  return (
    <Layout>
      {imageData ? <><GatsbyImage
        image={imageData}
        alt={frontmatter.title} /><br /><br /></> : null}
      
      <h1>{frontmatter.title}</h1>
      {frontmatter.date === null
        ? null 
        : <p style={{opacity: ".7"}}>📅{frontmatter.date}</p>
      }
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 800, height: 400, transformOptions: { cropFocus: CENTER })
          }
        }
      }
    }
  }
`