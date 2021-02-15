require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: "GatsbyV1",
	},
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			},
		},
		"@chakra-ui/gatsby-plugin",
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-transformer-sharp",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-formium",
			options: {
				// Get your projectId from https://dashboard.formium.io
				projectId: process.env.GATSBY_FORMIUM_PROJECTID,
				// Generate a personal access token by going to https://dashboard.formium.io/account#tokens
				accessToken: process.env.FORMIUM_TOKEN,
			},
		},
	],
};
