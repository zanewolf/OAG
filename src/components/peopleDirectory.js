import * as React from 'react';
import styled from "styled-components";
import PeopleCard from "./PeopleCard";

const fieldColors={
    'Policy/Economics': '#351431',
    'Communications':'#823c3a',
    'Humanities':'#f5a578',
    'Environmental Sciences': '#002d50',
    'Biological Sciences': '#01778c',
    'Engineering': '#52b69a',
    'Other': '#818588'

}
let fieldColor;


export default function PeopleDirectory({data}){





    return (
        <DirectoryGrid>
            {data && data.nodes.map((node) =>{
                fieldColor = node.data.Primary_Field in fieldColors ? fieldColors[node.data.Primary_Field] : '#818588'
                    return (
                        <li className={"card"} key={node.id}>
                            <PeopleCard
                                name={node.data.Name}
                                title={node.data.Title}
                                employer={node.data.Affiliations}
                                image={node.data.Image_File}
                                readMore={node.data.slug}
                                website={node.data.Website}
                                id={node.id}
                                email={node.data.Email}
                                about={node.data.About}
                                primaryField={node.data.Primary_Field}
                                researchKeywords = {node.data.Research_Keywords}
                                personalKeywords = {node.data.Personal_Keywords}
                                fieldColor = {fieldColor}
                                secondaryFields = {node.data.Secondary_Fields}
                            >
                            </PeopleCard>
                        </li>
                    )
                }
            )}
        </DirectoryGrid>
    )
}

const DirectoryGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  gap: 3vh;
  //gap: 3vw;
  //align-items: auto;
  //align-content: center;
  //.item{
  //  flex-basis: 10vw | auto;
  //} 
  
  @media screen and (max-width: 900px){
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
  }
  //
  //.item {
  //  flex-basis: auto;
  //}
`
