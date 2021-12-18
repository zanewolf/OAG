import * as React from 'react'
import * as style from "../styles/card.module.css";
import nullProfilePic from '../images/Null2.png';
import TagSection from "./TagSection";

import styled from "styled-components";
import {Link} from "gatsby";
import {Button} from "./Button";



export default function PeopleCard({name, role, image, readMore,id,email, website, children}) {

    const [buttonToggle, setButtonToggle] = React.useState(false)
    let toggleToggle = () => setButtonToggle((buttonToggle) => buttonToggle === true ? false : true)

    let imageSrc = image === null ? nullProfilePic : image

    return (
        <UserCard className={style.card}>
            {/*<RoleBand */}
            {/*    {role}></RoleBand>*/}
            <UserImage src={imageSrc} alt={'Profile picture of ' + name}/>
            <h3>{name}</h3>
            <h5> {role}</h5>
            <Link to={"/directory/" + readMore} key={id}>
                <Button primary>
                    Read More
                </Button>
            </Link>

        </UserCard>

    )
}

const UserImage = styled.img`
  border-radius: 50%;
`
const UserCard = styled.div`
  width: 20vw;
  
`
// const RoleBand = styled.div`
//     width: 100%;
//     height: 2vh;
//     background: ${({role}) => (primary=='PI'? '#1040d9' : primary=='Graduate Student'? '#7510d9' : '#29aa13')};
//
//
// `