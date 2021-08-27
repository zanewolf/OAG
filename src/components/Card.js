import * as React from 'react'
import * as style from "../styles/card.module.css"
import Directory from "../pages/Directory";
import nullProfilePic from '../images/nullProfile.png'




export default function Card({header, subheader, image, buttonText, buttonLink, children}){

    const [buttonToggle, setButtonToggle] = React.useState(false)
    let toggleToggle = () => setButtonToggle((buttonToggle) => buttonToggle === true? false : true)

    let imageSrc = image === undefined ? nullProfilePic : image

    return (
        <div className={style.card}>
            <img src={imageSrc} alt = {header} />
            <h1>{header}</h1>
            <h3> {subheader}</h3>
            {children}
            <button
                type={"button"}
                onClick={toggleToggle}
                // className = {style.cardContact}
            >
                {buttonToggle ===false ? buttonText : buttonLink}
            </button>


        </div>

    )
}