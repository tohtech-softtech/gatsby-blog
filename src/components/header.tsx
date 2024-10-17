import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const Header = () => (
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
        <MenuBarItem link="/works" text="制作物" />
        <MenuBarItem link="/article" text="ブログ" />
        <MenuBarItem link="/contact" text="入部・お問い合わせ" />
      </ul>
    </nav>
  </header>
)


const MenuBarItem = (props: {link: string, text: string}) => {
  return (
    <li>
      <Link
        to={props.link}
        style={{
          margin: `0 var(--space-3)`,
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {props.text}
      </Link>
    </li>
  );
};
