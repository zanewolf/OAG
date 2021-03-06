require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "Ocean Affinity",
    contact: 'oceans@fas.harvard.edu'
  },
  plugins: [`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
    "gatsby-remark-images",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `events`,
        path: `${__dirname}/src/events`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/documents/`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_TABLE_ID,
            tableName: `People`,
            mapping: { ImageAttachment: `fileNode` }// tableLinks: [`Locations`]
          },
          // },
          {
            baseId: process.env.GATSBY_AIRTABLE_TABLE_ID,
            tableName: `Data`
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_TABLE_ID,
            tableName: `News`
          }
        ]
      }
    },
  ]
}
