module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        // Url to query from
        url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
        // HTTP headers
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.TAKESHAPE_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    'gatsby-plugin-offline',
  ],
}
