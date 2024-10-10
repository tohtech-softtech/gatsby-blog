import * as React from "react";

const Head = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <>
      <html lang="ja"></html>
      {frontmatter.title === "東北工業大学 ソフトウェア技術研究会" 
        ? <title>{frontmatter.title}</title> 
        : <title>{frontmatter.title} | ソフトウェア技術研究会</title>
      }
      <meta name="description" content={frontmatter.description || frontmatter.excerpt} />
    </>
  );
};

export default Head;