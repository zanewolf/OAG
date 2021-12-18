import * as React from 'react'
import * as style from "../styles/card.module.css";
import nullProfilePic from '../images/Null2.png';
import TagSection from "./TagSection";
import {FaExternalLinkAlt} from "react-icons/all";

import styled from "styled-components";



export default function OppsCard({name, propLevel, type, Website}) {

    const [buttonToggle, setButtonToggle] = React.useState(false)
    let toggleToggle = () => setButtonToggle((buttonToggle) => buttonToggle === true ? false : true)

    // let imageSrc = image === null ? nullProfilePic : image

    return (
        <OppCard>
            {/*<RoleBand */}
            {/*    {role}></RoleBand>*/}
            {/*<UserImage src={imageSrc} alt={'Profile picture of ' + name}/>*/}
            <h3>{name}</h3>
            <ul>
                <li>
                    {propLevel}
                </li>
                <li>
                    {type}
                </li>
                <li>
                    <a href={Website}>
                        <FaExternalLinkAlt/>
                    </a>
                </li>
            </ul>
            {/*<h3> {role}</h3>*/}

        </OppCard>

    )
}
const OppCard = styled.div`
  width: 90vw;
  font-weight: 700;
  height: auto;
  min-height: 20vh;
  /*min-width: 400px;*/
  position: relative;
  border-radius: 5%;
  padding: 20px;
  box-shadow: 2px 2px 2px 2px grey;
  
`
const UserImage = styled.img`
  border-radius: 50%;
`

// const RoleBand = styled.div`
//     width: 100%;
//     height: 2vh;
//     background: ${({role}) => (primary=='PI'? '#1040d9' : primary=='Graduate Student'? '#7510d9' : '#29aa13')};
//
//
// `