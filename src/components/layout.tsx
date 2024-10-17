import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import { Header } from "./header";
import { Footer } from "./footer";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <div>
    {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
        backgroundColor: `var(--color-bg)`,
      }}
    >
    <main>{children}</main>
    </div>
    <Footer />
  </div>
  
}
