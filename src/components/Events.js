import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from "./Layout"
import {portfolio,projectCard } from '../styles/projects.module.css'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

export default function Events() {
    
    const data = useStaticQuery(graphql`
        query Events2{
            allMarkdownRemark(limit: 3,
                filter: {frontmatter: {tag: {eq: "pastEvent"}}}) {
                nodes {
                  frontmatter {
                    title
                    slug
                    thumb {
                        childImageSharp {
                          gatsbyImageData(
                            quality: 90
                            )
                        }
                      }
                    date(formatString: "DD MMMM YYYY")
                  }
                  id
                  html
                }
              }
        }
    `)

    console.log(data)
    const events = data.allMarkdownRemark.nodes
    console.log(events)
    // const contact = data.contact.siteMetadata.contact

    return (
        // <Layout pageTitle={"Events"}>
            <div className={"portfolio"}>
                <h2>Recent Events</h2>
                <div className={"projectCard"}>
                    {events.map(event => (
                        <Link to={"/events/" + event.frontmatter.slug} key={event.id}>
                            <div>
                                <GatsbyImage image={getImage(event.frontmatter.thumb)} alt={"image"}/>
                                <h3>{ event.frontmatter.title }</h3>
                                <p>{ event.frontmatter.date }</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        // </Layout>
    )
}

// export const query = graphql`
// query blogDate2 {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         nodes {
//             frontmatter {
//                 date(formatString: "MMMM D, YYYY")
//                 title
//             }
//             id
//             slug
//         }
//     }
// }
// `




