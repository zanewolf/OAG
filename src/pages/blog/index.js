import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../../components/Layout";
import { Link, graphql } from "gatsby";
import Hero from "../../components/Hero";


const Blog = ({data}) => {
    console.log( data)
    return (
        <Layout pageTitle="Blog Posts">
            {/*<Hero>*/}
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
            {/*</Hero>*/}
        </Layout>
    )
}

export const query = graphql`
        query blogDate {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
              nodes {
                frontmatter {
                  date(formatString: "MMMM D, YYYY")
                  title
                }
                id
                slug
              }
            }
        }
       `

export default Blog;