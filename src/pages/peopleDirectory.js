import * as React from 'react';
import styled from "styled-components";
import PeopleCard from "../components/PeopleCard";

export default function PeopleDirectory({data}){
    //
    // const [dirFilter, setDirFilter] = React.useState('people')
    // const [emailFilter, setEmailFilter] = React.useState(false)
    // const setFilter = () => setDirFilter ((dirFilter) => dirFilter === 'people' ? 'programs' : 'people')
    // const toggleEmailFilter = () => setEmailFilter((emailFitler) => emailFilter === true? false: true)
    //


    return (
        <DirectoryGrid>
            {data.nodes.map((node) =>{
                    return (
                        <li className={"card"} key={node.id}>
                            <PeopleCard
                                name={node.data.Name}
                                title={node.data.Title}
                                employer={node.data.University_Institute}
                                image={node.data.Image}
                                readMore={node.data.slug}
                                id={node.id}
                                email={node.data.Email}
                            >
                            </PeopleCard>
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

// const DirectorySection = styled.div`
//   display: flex;
//   flex-flow: column wrap;
//   padding-top: 2vh;
//   //align-content: center;
//   //justify-content: center;
//   height: auto;
//   min-height: 100vh;
//   margin-top: var(--screen-nav-bar-height);
//
//   @media screen and (max-width: 900px){
//     margin-top: var(--phone-nav-bar-height);
//     padding-top: 2vh;
//   }
//
//     `

const DirectoryGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  //align-items: auto;
  //align-content: center;
  .item{
    flex-basis: 10vw | auto;
  } 
  
  @media screen and (max-width: 900px){
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
  }
  
  .item {
    //flex-basis: auto;
  }
`
