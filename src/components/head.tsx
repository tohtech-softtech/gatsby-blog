import * as React from "react";

export const Head = ({ data }: any) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <div>
      <html lang="ja"></html>
      {frontmatter.title === "東北工業大学 ソフトウェア技術研究会" 
        ? <title>{frontmatter.title}</title> 
        : <title>{frontmatter.title} | ソフトウェア技術研究会</title>
      }
      <meta name="description" content={frontmatter.description || frontmatter.excerpt} />
    </div>
  );
};
