import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import Card from "../components/Card";
import * as style from "../styles/directory.module.css";
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import Hero from "../components/Hero";
import styled from "styled-components";
import {Button} from "../components/Button";

export default function Directory({data}){

    const [dirFilter, setDirFilter] = React.useState('people')
    const [emailFilter, setEmailFilter] = React.useState(false)
    const setFilter = () => setDirFilter ((dirFilter) => dirFilter === 'people' ? 'programs' : 'people')
    const toggleEmailFilter = () => setEmailFilter((emailFitler) => emailFilter === true? false: true)

    console.log( data)
    return (
        <Layout pageTitle="Directory">
            {/*<Hero>*/}
            {/*    <button>Join Us</button>*/}
            {/*</Hero>*/}

            <DirectorySection>
                <Button
                    onClick = {setFilter}
                    fontBig
                    big
                    primary
                >
                    {dirFilter === 'people' ? "Programs" : "People"}

                </Button>
                <DirectoryGrid>
                    {data[dirFilter].nodes.map((node) => {

                        console.log(node)

                        if (dirFilter==='programs'){
                            return (

                                <li className={"card"} key={node.id}>
                                    <Card
                                        header={node.data.Name}
                                        image={node.data.Image}
                                    >
                                        <ul className={"card-list"}>
                                            <li>
                                                <FaStar/>
                                                {node.data[dirFilter]}
                                            </li>
                                        </ul>
                                    </Card>
                                </li>
                            )}
                            else {
                                return (
                                    <li className={"card"} key={node.id}>
                                        <Card
                                            header={node.data.Name}
                                            subheader = {node.data.Title + " at " + node.data.University_Institute}
                                            image={node.data.Image}
                                            buttonText = "Contact"
                                            buttonLink = {node.data.Email}
                                        >
                                            <ul className={"card-list"}>
                                                <li>
                                                    <FaStar/>
                                                    {node.data.Email}
                                                </li>
                                            </ul>

                                        </Card>
                                    </li>
                                )
                            }
                    })}
                </DirectoryGrid>
            </DirectorySection>
        </Layout>
    )
}

export const query = graphql`
   query DirectoryData {
    programs: allAirtable(filter: {data: {}, table: {eq: "Programs"}}) {
      nodes {
        data {
          Image
          Name
        }
      }
    }
    people: allAirtable(filter: {table: {eq: "People"}}, sort: {fields: data___Name}) {
    nodes {
      data {
        Name
        Title
        University_Institute
        Email
        Keywords
      }
    }
  }
}
`

const DirectorySection = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  margin-top: 6vh;

  @media screen and (max-width: 768px){
    margin-top: 9vh;
  }
  
    `

const DirectoryGrid = styled.div`
  display: flex;
  flex-grow: 4;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: auto;
  align-content: flex-start;
  .item{
    flex-basis: 10vw | auto;
  }
  
  @media screen and (max-width: 768px){
    flex-flow: column nowrap
  }
`

