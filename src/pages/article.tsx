import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Card } from "../components/card"

const BlogList: React.FC = ({ data }: any) => {
  const posts = data.allMarkdownRemark.edges
  const imageData = data.thumbnail?.childImageSharp?.gatsbyImageData;

  return <Layout>
    <h1>ブログ一覧</h1>
    {posts.map(({ node }: any) => (
      <ul key={node.id} style={{ marginBottom: "20px" }}>
        <Card
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          link={node.frontmatter.slug}
          imageData={imageData ? imageData.images.fallback.src : null}/>
      </ul>
    ))}
  </Layout>
  
}

export function Head() {
  return (
    <>
      <html lang="ja" />
      <title>ブログ記事一覧 | ソフトウェア技術研究会</title>
      <meta name="description" content="ブログ記事一覧" />
    </>
  );
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
