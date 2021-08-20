module.exports = {
  siteMetadata: {
    title: "Ocean Affinity Group",
    contact: 'rzanewolf@gmail.com'
  },
  plugins: [`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
    "gatsby-remark-images",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyH1uWAGqbjwVCEJ`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appBngSMuE2MPsDEE`,
            tableName: `Programs`,
            separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false // boolean, default is false, see the documentation on using markdown and attachments for more information
            // tableLinks: [`Locations`]
          },
          // },
          {
            baseId: `appBngSMuE2MPsDEE`,
            tableName: `People`
          },
        ]
      }
    }
  ]
}
