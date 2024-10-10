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
        <MenuBarItem
          link="/works"
          text="制作物"
        ></MenuBarItem>

        <MenuBarItem
          link="/article"
          text="ブログ"
        ></MenuBarItem>
  
        <MenuBarItem
          link="/contact"
          text="入部・お問い合わせ"
        ></MenuBarItem>
      </ul>
    </nav>
  </header>
)


const MenuBarItem = ({link, text}) => {
  return (
    <li>
      <Link
        to={link}
        style={{
          margin: `0 var(--space-3)`,
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {text}
      </Link>
    </li>
  );
};

export default Header
