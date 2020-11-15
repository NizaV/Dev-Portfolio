/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    description: "Personal page of Niza Vera",
    locale: "en",
    title: "Niza Vera",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/resume",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "warm-red",
      },
    },
  ],
}
