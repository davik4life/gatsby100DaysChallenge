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
				projectId: "6029209a4da96d0001a0d162",
				// Generate a personal access token by going to https://dashboard.formium.io/account#tokens
				accessToken: "OVy3dECb4LXdfCnqNzDfJs2AZC0SSyAeF2wgVIgF2QJZ3YBNeVbuTQYaC6wb2W9f",
			},
		},
	],
};
