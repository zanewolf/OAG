import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/project-details.modules.css"
import { graphql } from "gatsby"

export default function EventsDetails({ data }){
    console.log(data)
    const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg)
    const { html } = data.markdownRemark
    const { title,date } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={"details"}>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <div className={"featured"}>
                    <GatsbyImage image={featuredImage} alt="Banner" />
                </div>
                <div className={"htmlStyle"} dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query EventsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, AVIF]
              quality: 90
            )
          }
        }
      }
    }
  }
`