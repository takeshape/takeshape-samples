require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Shape Portfolio"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Shape Portfolio",
        short_name: "portfolio",
        start_url: "/",
        background_color: "#5439D2",
        theme_color: "#5EDEB3",
        display: "minimal-ui",
        icon: "src/images/takeshape-icon.png"
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        url: `https://api.takeshape.io/project/${
          process.env.TAKESHAPE_PROJECT
        }/graphql`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    "gatsby-plugin-offline"
  ]
};
