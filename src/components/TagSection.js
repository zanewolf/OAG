import React from 'react'
import styled from "styled-components";
import * as styles from "../styles/tags.module.css"

export default function TagSection({tags}) {

    let tagItems = tags.map((tag,i)=>{
        return (
            <span className={"tagItem"}>{tag}</span>
        )
        // return (
        //     <li>
        //         {tag}
        //     </li>
        // )
    })
    return (
        <KeywordSection>
                {tagItems}
        </KeywordSection>

    )
}

const KeywordSection=styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: space-evenly;
  
  
  & span{
    background: aqua;
    padding: 2pt 10pt;
    border-radius: 10pt;
    font-size: 0.75em;
    margin: 2pt;
  }
  
`