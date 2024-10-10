/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `東北工業大学 ソフトウェア技術研究会`,
    description: `ソフトウェア技術研究会は、東北工業大学公認サークルです。主にプログラミングや3DCGの制作・発表を行っています。`,
    author: `ソフトウェア技術研究会`,
    siteUrl: `https://softtechtohtech.work/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `東北工業大学 ソフトウェア技術研究会`,
        short_name: `ソフトウェア技術研究会`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `@okaryo/gatsby-remark-link-card`,
        ],
      },
    },
  ],
}
