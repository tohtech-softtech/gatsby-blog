import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <StaticImage
        alt="ソフトウェア技術研究会"
        height={55}
        quality={90}
        src="../images/logo.svg"
      />
    </Link>
    <nav>
      <ul
        style={{
          display: `flex`,
          listStyle: `none`,
          margin: 0,
          alignContent: `center`,
        }}
      >
        <li>
          <Link
            to="/works"
            style={{
              margin: `0 var(--space-3)`,
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
            }}
          >
            制作物
          </Link>
        </li>
        <li>
          <Link
            to="/article"
            style={{
              margin: `0 var(--space-3)`,
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
            }}
          >
            ブログ
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              margin: `0 var(--space-3)`,
              fontSize: `var(--font-sm)`,
              textDecoration: `none`,
            }}
          >
            入部・お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
