import * as React from 'react'
import * as style from "../styles/teammember.module.css"





export default function TeamCard({teamMember,children}){


    // const tagItems = tags.map((tag)=>{{tag}})

    // console.log(tagItems)

    return (
        <div className={style.card}>
            {/*<img src={imageSrc} alt = {header} />*/}
            {/*<h1>{header}</h1>*/}
            {/*<h3> {subheader}</h3>*/}
            {children}

            {/*<button*/}
            {/*    type={"button"}*/}
            {/*    onClick={toggleToggle}*/}
            {/*    className = {style.cardContact}*/}
            {/*>*/}
            {/*    {buttonToggle ===false ? buttonText : buttonLink}*/}
            {/*</button>*/}

            {/*<TagDiv>*/}
            {/*    {tags.map((tag)=>{*/}
            {/*        <li>*/}
            {/*            {tag.toLocaleString()}*/}
            {/*        </li>*/}
            {/*    })}*/}
            {/*</TagDiv>*/}


        </div>

    )
}
