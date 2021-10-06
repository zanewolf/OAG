import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/project-details.modules.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }){
  const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg)
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={"details"}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={"featured"}>
          <GatsbyImage image={featuredImage} alt="Banner" />
        </div>
        <div className={"htmlStyle"} dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, AVIF]
            )
          }
        }
      }
    }
  }
`