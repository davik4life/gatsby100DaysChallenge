module.exports = {
  siteMetadata: {
    title: "GatsbyV1",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "ZHk5Tusabn8NWQImr4pb5KD-xvIrqn5WvuTTwB6fOnY",
        spaceId: "idn2uc3bkd3u",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
