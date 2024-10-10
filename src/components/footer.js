import *as React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: `var(--color-text)`,
        color: `var(--color-bg)`,
        fontSize: `var(--font-sm)`,
        marginTop: `var(--space-5)`,
        textAlign: `center`,
      }}
    >
    © {new Date().getFullYear()} ソフトウェア技術研究会
    </footer>
  );
};

export default Footer;