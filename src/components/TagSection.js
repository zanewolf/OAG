import React from 'react';
import styled from "styled-components";

export default function TagSection({tags}) {

    if (tags) {

        tags = tags.split(',');

        console.log(tags ? 'yes' : 'no')

        let tagItems = tags.map((tag, i) => {
            return (
                <span className={"tagItem"} key={i}>{tag}</span>
            )
            // return (
            //     <li>
            //         {tag}
            //     </li>
            // )
        })

        return (
            <KeywordSection >
                {tagItems}
            </KeywordSection>
        )
    } else {
        return (<> <p> No Keywords Given</p></>)
    }

}

const KeywordSection=styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: space-evenly;


  & span {
    background: #7c08cd;
    padding: 2pt 10pt;
    border-radius: 10pt;
    font-size: 0.75em;
    margin: 2pt;
  }

`