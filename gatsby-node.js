exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@fullpage/,
            use: loaders.null(),
          },
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

/** Example on how to use scrollHorizontally extension 
 * 
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
      exclude: 'fullpage.scrollHorizontally.min.js'
    })
  }
};
*/


const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {

  const { data } = await graphql(`
    query PageData {
      articles: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    
      people: allAirtable(
        filter: {table: {eq: "People"}}
        sort: {fields: data___Name}
        ) {
          nodes {
            data {
              Image
              Name
              Research_Keywords
              Personal_Keywords
              Main_Research_Focus
              About
              Website
              University_Institute
              Email
              Title
              slug
            }
          }
        }
    }
  `)

  // const { people } = await graphql(`
  //   query People {
  //     allAirtable(
  //       filter: {table: {eq: "People"}}
  //       sort: {fields: data___Name}
  //     ) {
  //       nodes {
  //         data {
  //           Image
  //           Name
  //           Location_Name__from_Locations_
  //         }
  //       }
  //    }
  //   }`)


  data.articles.nodes.forEach(node => {
    actions.createPage({
      path: '/projects/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })
  //
  data.articles.nodes.forEach(node => {
    actions.createPage({
      path: '/events/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/events-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })
  //
  data.people.nodes.forEach(node => {
    actions.createPage({
      path: '/directory/'+ node.data.slug,
      component: path.resolve('./src/templates/people-details.js'),
      context: { slug: node.data.slug }
    })
  })

}
//
// exports.createPages = async ({graphql, actions}) => {
//
//   const { data } = await graphql(`
//     query Articles {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `)
//
//
//
//
// }
// function getCurrentDate() {
//   const d = new Date();
//   let month = (d.getMonth() + 1).toString();
//   if (month.length < 2) {
//     month = `0${month}`;
//   }
//   let day = d.getDate().toString();
//   if (day.length < 2) {
//     day = `0${day}`;
//   }
//   return `${d.getFullYear()}-${month}-${day}`;
// }

// exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
//   actions.createTypes([
//     schema.buildObjectType({
//       name: 'markdownRemark',
//       interfaces: ['Node'],
//       fields: {
//         isFuture: {
//           type: 'Boolean!',
//           resolve: source => new Date(source.date) > new Date(),
//         },
//         // ...declare other fields here...
//       },
//     }),
//   ]);
// };

// exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
//   actions.createTypes([
//     schema.buildObjectType({
//       name: 'MarkdownRemark',
//       interfaces: ['Node'],
//       fields: {
//         isFuture: {
//           type: 'Boolean!',
//           resolve: (s) => new Date(s.frontmatter.date) > new Date(),
//         },
//       },
//     }),
//   ])
// }

// const get = require("lodash.get")
//
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes, createFieldExtension } = actions
//
//   const isFuture = (fieldName) => (source) => {
//     const date = get(source, fieldName)
//     return new Date(date) > new Date()
//   }
//
//   createFieldExtension({
//     name: "isFuture",
//     args: {
//       fieldName: "String!",
//     },
//     extend({ fieldName }) {
//       return {
//         resolve: isFuture(fieldName),
//       }
//     },
//   })
//
//   createTypes(`
//     type MarkdownRemark implements Node {
//       isFuture: Boolean! @isFuture(fieldName: "frontmatter.date")
//     }
//   `)
// }