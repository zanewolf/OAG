import React from "react"
import {Link, graphql} from 'gatsby'
import Layout from "../../components/Layout"
import {portfolio,projectCard } from '../../styles/projects.module.css'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'


export default function Projects({data}) {

  console.log(data)
  const projects = data.projects.nodes
  // const contact = data.contact.siteMetadata.contact

  return (
    <Layout pageTitle={"Portfolio"}>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projectCard}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={"image"}/>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
