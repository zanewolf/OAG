import * as React from 'react';
import Layout from "../components/Layout";
import { Link,graphql } from "gatsby";
import Card from "../components/Card";
import { FaMapMarker, FaExternalLinkAlt } from 'react-icons/fa';
import styled from "styled-components";
import {Button} from "../components/Button";
import PeopleCard from "../components/PeopleCard";
import OppsCard from "../components/OppsCard";

export default function OppsDirectory({data}){
    //
    // const [dirFilter, setDirFilter] = React.useState('people')
    // const [emailFilter, setEmailFilter] = React.useState(false)
    // const setFilter = () => setDirFilter ((dirFilter) => dirFilter === 'people' ? 'programs' : 'people')
    // const toggleEmailFilter = () => setEmailFilter((emailFitler) => emailFilter === true? false: true)
    //

    // console.log(data)
    return (
        <DirectoryGrid>
            {data.nodes.map((node) =>{
                    // console.log(node)
                    return (
                        <li className={"card"} key={node.id}>
                            <OppsCard
                                name={node.data.Program_Title}
                                propLevel={node.data.Proposal_Level}
                                type={node.data.Grant_type}
                                Website={node.data.Website}
                            >
                            </OppsCard>
                        </li>
                    )
                }
            )}
        </DirectoryGrid>
    )
}

// function isNotNull(value){
//     if (value != null){
//         return true
//     } else {
//         return false
//     }
// }


// export const query = graphql`
//    query PeopleDirectoryData{
//     allAirtable(filter: {table: {eq: "People"}}, sort: {fields: data___Name}) {
//         nodes {
//           data {
//               Name
//               Keywords__csv_
//               Image
//               Email
//               University_Institute
//               Title
//               Website
//               Primary_Field
//               slug
//           }
//         }
//     }
//   }
// `

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
  flex-flow: column nowrap;
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