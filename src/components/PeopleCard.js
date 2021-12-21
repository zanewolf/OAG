import * as React from 'react'
import * as style from "../styles/card.module.css";
import nullProfilePic from '../images/Null2.png';

import styled from "styled-components";
import {Link} from "gatsby";
import {Button} from "./Button";
import {FaBuilding} from 'react-icons/fa'
import {IoEllipsisHorizontalCircleSharp} from 'react-icons/io5'

const roleColors={
    'Principle Investigator': '#d9ed92',
    'Graduate Student': '#99d98c',
    'Engineer': '#52b69a',
    'Professor': '#168aad',
    'Research Scientist':'#1e6091',
    'Administrator':'#184e77'
}
//
// "d9ed92","b5e48c","99d98c","76c893","52b69a","34a0a4","168aad","1a759f","1e6091","184e77"


export default function PeopleCard({name, title,employer, image, readMore,id,email, website, children}) {

    // const [buttonToggle, setButtonToggle] = React.useState(false)
    // let toggleToggle = () => setButtonToggle((buttonToggle) => buttonToggle === true ? false : true)

    let imageSrc = image === null ? nullProfilePic : image

    let roleColor = roleColors[title]

    console.log(roleColor)

    return (
        <>
        <UserCard className={style.card} bandColor={roleColor} >
            <UserImage src={imageSrc} alt={'Profile picture of ' + name} bandColor={roleColor} />
            <UserName>{name}</UserName>
            <UserRole bandColor={roleColor}> <FaBuilding /> {title} at {employer}</UserRole>

            <CardFooter className = {"card-footer"} bandColor={roleColor}>
                <Link to={"/directory/" + readMore} >
                    {/*<Button primary>*/}
                    {/*    <button>*/}
                            {<IoEllipsisHorizontalCircleSharp/>}
                        {/*</button>*/}
                    {/*</Button>*/}
                </Link>
                <a href={website} >
                    {/*<Button primary>*/}
                    {/*    <button>*/}
                    {<IoEllipsisHorizontalCircleSharp/>}
                    {/*</button>*/}
                    {/*</Button>*/}
                </a>
                <button >
                    {/*<Button primary>*/}
                    {/*    <button>*/}
                    {<IoEllipsisHorizontalCircleSharp/>}
                    {/*</button>*/}
                    {/*</Button>*/}
                </button>
            </CardFooter>

            {children}


        </UserCard>


        </>



    )
}

const CardFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;  
  width: 100%;
  height: 15%;
  background-color: ${props => props.bandColor || "#575757"};
  //padding: 0.75rem 1.25rem;
  //background-color: rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  border-radius: 0 0 15pt 15pt;
`
const UserName = styled.h1`
 display: flex;
  justify-content: center;
  margin: auto;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 5px;
`

const UserRole = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: lighter;
`
const UserImage = styled.img`
  //border-radius: 50%;
  //border-radius: 50%;
  //border: 5px solid #272133;
  //margin-top: ;
  border: 4px solid ${props => props.bandColor || "#a70bea"}; 
  // box-shadow: 0 10px 20px ${props => props.bandColor || "#a70bea"};
  //filter: drop-shadow(10px 5px 2px #4444dd);
  //background-color: #8f8f90;
  //width: auto;
  max-width: 15vh;
  width: auto;
  height: 15vh;
  object-fit: contain;
  //margin: 0 auto;
  //display: block;
  /*max-height: 10em;*/
  /*min-height: 10em;*/
  ///*min-height: 8em;*/
  //object-fit: fill;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  //border: 2px solid #03BFCB;
  border-radius: 50%;
  padding: 7px;
`
const UserCard = styled.div`
  width: 20vw;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  margin: 10px 0;
  width: 300px;
  padding: 20px;
  background-color: white;
  height: 50vh;
  //background-color: #222831;
  //color: white;
  //border
  //background-image: linear-gradient(180deg, ${props => props.bandColor || "#a70bea"} 10%, white 10%)
  // border-top-width: 5px;
  // border-top-color: ${props => props.bandColor || "#a70bea"}

  @media screen and (max-width: 900px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    //width: 40vw;
    width: 300px;
  }

  @media screen and (max-width: 400px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    //width: 90vw;
    width: 300px;
  }
  
`