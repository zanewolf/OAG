import * as React from 'react';
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Card from "../components/Card";
import { FaMapMarker, FaExternalLinkAlt } from 'react-icons/fa';
import styled from "styled-components";
import {Button} from "../components/Button";

export default function Directory({data}){

    const [dirFilter, setDirFilter] = React.useState('people')
    const [emailFilter, setEmailFilter] = React.useState(false)
    const setFilter = () => setDirFilter ((dirFilter) => dirFilter === 'people' ? 'programs' : 'people')
    const toggleEmailFilter = () => setEmailFilter((emailFitler) => emailFilter === true? false: true)


    console.log(data)
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

                        if (dirFilter==='programs'){
                            return (

                                <li className={"card"} key={node.id}>
                                    <Card
                                        header={node.data.Name}
                                        // subheader={node.data.Acronym}
                                        image={node.data.Image}
                                        tags={node.data.Specializations}
                                    >
                                        <ul className={"card-list"}>
                                            <li key={node.id}>
                                                <FaMapMarker/>
                                                {node.data["Location_Name__from_Locations_"][0]}
                                            </li>
                                            <li>
                                                <FaExternalLinkAlt/>
                                                <a href={node.data.Website}>Website</a>
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
                                            tags={node.data.Keywords}
                                        >


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

// function isNotNull(value){
//     if (value != null){
//         return true
//     } else {
//         return false
//     }
// }


export const query = graphql`
   query DirectoryData {
    programs: allAirtable(filter: {data: {}, table: {eq: "Programs"}}) {
      nodes {
        data {
          Image
          Name       
          Location_Name__from_Locations_
          Specializations
          Website
          Acronym
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
  padding-top: 2vh;
  //align-content: center;
  //justify-content: center;
  height: auto;
  min-height: 100vh;
  margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 900px){
    margin-top: var(--phone-nav-bar-height);
    padding-top: 2vh;
  }
  
    `

const DirectoryGrid = styled.div`
  display: flex;
  //flex-grow: 4;
  flex-flow: row wrap;
  justify-content: center;
  //align-items: auto;
  //align-content: center;
  //.item{
  //  flex-basis: 10vw | auto;
  //} 
  
  @media screen and (max-width: 900px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
  }
  
  .item {
    //flex-basis: auto;
  }
`

