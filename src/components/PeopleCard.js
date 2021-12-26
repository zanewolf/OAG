import * as React from 'react'
import * as style from "../styles/card.module.css";
import nullProfilePic from '../images/Null2.png';

import styled from "styled-components";
import {Link} from "gatsby";
import {Button} from "./Button";
import {FaBuilding,FaExternalLinkAlt,FaEllipsisH} from 'react-icons/fa'
import {IoEllipsisHorizontalCircleSharp} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import Avatar from "boring-avatars";

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


export default function PeopleCard({name, title,employer, main,image, readMore, about,id,email, website, children}) {

    // const [buttonToggle, setButtonToggle] = React.useState(false)
    // let toggleToggle = () => setButtonToggle((buttonToggle) => buttonToggle === true ? false : true)

    let imageSrc = image === null ? <Avatar size={40}
                                            variant="marble"
                                            colors={["#351431","#002d50","#01778c","#53a7b0","#fdfcfb","#f5a578","#bbd2d5","#823c3a"]
                                            }/>
                                    : image

    let roleColor = roleColors[title]


    const copy =  (email) => {
        console.log(email)
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }
    return (
        <UserCard className={style.card} bandColor={roleColor} >
            {/*<UserImage src={imageSrc} alt={'Profile picture of ' + name} bandColor={roleColor} />*/}
            {image === null?  <Avatar
                    size={100}
                    name={name}
                    variant="beam"
                    colors={["#d9ed92","#b5e48c","#99d98c","#76c893","#52b69a","#34a0a4","#168aad","#1a759f","#1e6091","#184e77"]}
            /> :
                <UserImage src={image} alt={'Profile picture of ' + name} bandColor={roleColor} />
                }
            <UserName>{name}</UserName>
            <UserRole bandColor={roleColor}> {title}
            </UserRole>
            <UserRole>
                {employer}
            </UserRole>
            <UserRole>
                {main}
            </UserRole>
            <UserAbout>
                {about}
            </UserAbout>

            <CardFooter className = {"card-footer"} bandColor={roleColor}>

                <UserWebsite title = "Personal Website" href={website} >
                    {/*<Button primary>*/}
                    {/*    <button>*/}
                    {<FaExternalLinkAlt/>}
                    {/*</button>*/}
                    {/*</Button>*/}
                </UserWebsite>
                <MyHr />
                <EmailButton title = "Click to copy email" onClick={()=>copy(email)} >
                    {/*<Button primary>*/}
                    {/*    <button>*/}
                    {<HiOutlineMail/>}
                    {/*</button>*/}
                    {/*</Button>*/}
                </EmailButton>
                <MyHr />
                <ReadMoreLink title = "See full profile" to={"/directory/" + readMore} >
                    {/*<Button primary>*/}
                    {/*    <button>*/}
                    {<FaEllipsisH/>}
                    {/*</button>*/}
                    {/*</Button>*/}
                </ReadMoreLink>
            </CardFooter>

            {children}


        </UserCard>
    )
}

const UserAbout = styled.p` 
  padding-top: 1vh;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
     //white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // max-width: 100ch;
    font-size: 0.75em;
    font-weight: lighter;
  
`
const MyHr = styled.hr`
  min-height: 100%;
  max-height: 100vh;
  margin: 0;
  border: solid #ffffff;
`
const UserWebsite = styled.a`
  //font-size: 0.75em;
  margin: auto;
  //border-right: 2px solid #828282
  font-size: 1.5em;
  border: none;
  font-weight: normal;
  
  &:before {
    //content: attr(title);
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }
    
  &:hover{
    font-weight: bolder;
    transition: 0.5s;
    color: purple;
  }
`
const ReadMoreLink = styled(Link)`
  //font-size: 0.75em;
  margin: auto;
  font-size: 2em;
  border: none;
  color: black;

  &:before {
    //content: attr(title);
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:hover{
    font-weight: bolder;
    transition: 0.5s;
    color: purple;
  }
`
const EmailButton = styled.button`
  background-color: rgba(0,0,0,0);
  //width: 5vw;
  font-size: 2em;
  border: none;
  margin: auto;
  //border-right: 2px solid #828282

  &:before {
    //content: attr(title);
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:hover{
    font-weight: bolder;
    transition: 0.5s;
    color: purple;
  }
`
const CardFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 15%;
  //font-size: 2em;
  align-content: center;
  background-color: ${props => props.bandColor || "#575757"};
  //padding: 0.75rem 1.25rem;
  //background-color: rgba(0, 0, 0, 0.5);
  //border-top: 2px solid rgba(0, 0, 0, 0.125);
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
  font-size: 0.75rem;
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