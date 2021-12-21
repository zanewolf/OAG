import * as React from 'react';
import { Link } from "gatsby";
import styled from "styled-components";
import {Button} from "../components/Button";
import ProgramCard from "../components/ProgramCard";

export default function ProgramDirectory({data}){

    // const [emailFilter, setEmailFilter] = React.useState(false)



    console.log(data)
    return (
        <DirectoryGrid>
            {data.nodes.map((node) =>{
                    console.log(node)
                    return (
                        <li className={"card"} key={node.id}>
                            <ProgramCard
                                header={node.data.Name}
                                subheader = {node.data.Title + " at " + node.data.University_Institute}
                                image={node.data.Image}
                            >
                                <ul className={"card-list"}>
                                    <li>
                                        <Link to={"/directory/" + node.data.slug} key={node.id}>
                                            <Button >
                                                Read More
                                            </Button>
                                        </Link>

                                    </li>
                                </ul>
                            </ProgramCard>
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
//    query ProgramDirectoryData{
//     programs: allAirtable(filter: {data: {}, table: {eq: "Programs"}}) {
//       nodes {
//         data {
//           Image
//           Name
//           Location_Name__from_Locations_
//           Specializations
//           Website
//           Acronym
//         }
//       }
//     }
//     }
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