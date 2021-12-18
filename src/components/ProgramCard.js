import * as React from 'react'
import * as style from "../styles/card.module.css";
import nullProfilePic from '../images/Null2.png';
import TagSection from "./TagSection";

import styled from "styled-components";



export default function ProgramCard({header, subheader, image, buttonText, buttonLink, tags,children}){

    const [buttonToggle, setButtonToggle] = React.useState(false)
    let toggleToggle = () => setButtonToggle((buttonToggle) => buttonToggle === true? false : true)

    let imageSrc = image === null ? nullProfilePic : image

    return (
        <div className={style.card}>
            <div className={'usercolor'}></div>
            <img src={imageSrc} alt={header}/>
            <h1>{header}</h1>
            <h3> {subheader}</h3>
            {children}

            {/*<button*/}
            {/*    type={"button"}*/}
            {/*    onClick={toggleToggle}*/}
            {/*    className = {style.cardContact}*/}
            {/*>*/}
            {/*    {buttonToggle ===false ? buttonText : buttonLink}*/}
            {/*</button>*/}
            {/*<TagSection*/}
            {/*    tags={tags}/>*/}

        </div>

    )
}

const UserImage = styled.img`
  border-radius: 50%;
`