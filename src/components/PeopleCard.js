import * as React from 'react'
import * as style from "../styles/card.module.css";
import nullProfilePic from '../images/Null2.png';
import {PortalWithState} from 'react-portal'

import styled from "styled-components";
import {Link} from "gatsby";
import {Button} from "./Button";
import {FaBuilding,FaExternalLinkAlt,FaEllipsisH, FaTimes} from 'react-icons/fa'
import {IoEllipsisHorizontalCircleSharp} from 'react-icons/io5'
import {HiOutlineMail} from 'react-icons/hi'
import Avatar from "boring-avatars";
import Modal from 'react-modal'
import TagSection from "./TagSection";

const roleColors2={
    'Principal Investigator': '#d9ed92',
    'Graduate Student': '#99d98c',
    'Engineer': '#52b69a',
    'Professor': '#168aad',
    'Research Scientist':'#1e6091',
    'Administrator':'#184e77'
}

const roleColors={
    'Principal Investigator': '#351431',
    'Professor': '#002d50',
    'Graduate Student': '#01778c',
    'Engineer': '#52b69a',
    'Research Scientist':'#823c3a',
    'Administrator':'#f5a578' //'#53a7b0'
}


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#01778c',
        marginTop: `var( --screen-nav-bar-height)`,
        height: 'auto',
        // overflow: 'scroll'
    },
};
//
// "d9ed92","b5e48c","99d98c","76c893","52b69a","34a0a4","168aad","1a759f","1e6091","184e77"


export default function PeopleCard({name, title,employer, main,image, readMore, about,id,email, website, children, personalKeywords, researchKeywords}) {

    // const [buttonToggle, setButtonToggle] = React.useState(false)
    // let toggleToggle = () => setButtonToggle((buttonToggle) => buttonToggle === true ? false : true)

    const [modalState, setModalState] = React.useState(false)

    //
    // let imageSrc = image === null ? <Avatar size={40}
    //                                         variant="marble"
    //                                         colors={["#351431","#002d50","#01778c","#53a7b0","#fdfcfb","#f5a578","#bbd2d5","#823c3a"]
    //                                         }/>
    //                                 : image

    let roleColor = title in roleColors ? roleColors[title] : '#f5a578'

    const copy =  (email) => {
        console.log(email)
        navigator.clipboard.writeText(email);
        alert('Email address copied');
    }

    const openWebsite = (href) => {
        href != null ?
            window.open(website, "_blank")
            :
            alert('No website provided. Sorry!')
    }


    return (
        <>
            <UserCard
                className={style.card}
                bandColor={roleColor}
            >
                {/*<UserHeader>*/}
                    {image === null?
                        <UserAvatar bandColor={roleColor}>
                            <Avatar
                                size={'12vh'}
                                name={name}
                                variant="beam"
                                colors={["#351431","#002d50","#01778c","#53a7b0","#fdfcfb","#f5a578","#bbd2d5","#823c3a"]}
                            />
                        </UserAvatar> :
                        <UserImage src={image} alt={'Profile picture of ' + name} bandColor={roleColor} maxWidth={'15vh'} maxHeight={'15vh'}/>
                    }
                    <UserName>{name}</UserName>
                {/*</UserHeader>*/}
                {/*<UserImage src={imageSrc} alt={'Profile picture of ' + name} bandColor={roleColor} />*/}

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

                    <UserWebsite title = "Personal Website" onClick={()=> openWebsite(website)} >
                        {<FaExternalLinkAlt/>}
                    </UserWebsite>
                    <MyHr />
                    <EmailButton title = "Click to copy email" onClick={()=>copy(email)} >
                        {<HiOutlineMail/>}
                    </EmailButton>
                    <MyHr />
                    <EmailButton
                        onClick = {()=>setModalState(true)}
                        >

                            {<FaEllipsisH/>}
                    </EmailButton>
                    {/*<ReadMoreLink title = "See full profile" to={"/directory/" + readMore} >*/}
                    {/*    /!*<Button primary>*!/*/}
                    {/*    /!*    <button>*!/*/}
                    {/*    {<FaEllipsisH/>}*/}
                    {/*    /!*</button>*!/*/}
                    {/*    /!*</Button>*!/*/}
                    {/*</ReadMoreLink>*/}
                </CardFooter>

                {children}


            </UserCard>
            <Modal
                isOpen={modalState}
                onRequestClose={()=>setModalState(false)}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                preventScroll={false}
            >
                <button
                    onClick={()=>setModalState(false)}
                >
                    <FaTimes/>
                </button>
                <PersonBlock>
                    <LeftBlock>
                        {image === null?
                            // <UserAvatar bandColor={roleColor}>
                                <Avatar
                                    size={'50%'}
                                    name={name}
                                    variant="beam"
                                    colors={["#d9ed92","#b5e48c","#99d98c","#76c893","#52b69a","#34a0a4","#168aad","#1a759f","#1e6091","#184e77"]}
                                />:
                            <TeamPicture className = {'modalImage'} src={image} alt={'Profile picture of ' + name} bandColor={roleColor} />
                        }
                        <TeamName>{name}</TeamName>
                        <TeamTitle>{title}</TeamTitle>
                        <h3>{employer}</h3>
                    </LeftBlock>
                    <RightBlock>
                        {/*<TeamMemberInfo>*/}

                        <ModalAbout>
                            <h2>About</h2>
                            <AboutP> {about}</AboutP>
                        </ModalAbout>

                        <KeywordsSection>
                            <h4> Research Keywords</h4>
                            <TagSection tags={researchKeywords}></TagSection>
                                <h4> Personal Keywords</h4>
                                <TagSection tags={personalKeywords}></TagSection>
                        </KeywordsSection>

                        {/*</TeamMemberInfo>*/}
                    </RightBlock>


                    {/*<TeamPicture src={personData.Image === null ? nullProfilePic : personData.Image} alt={personData.Name}/>*/}
                    {/*</TeamPicture>*/}


                </PersonBlock>



            </Modal>


        </>
    )
}

const UserHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  
`
const UserAvatar = styled.div`
  border: 4px solid ${props => props.bandColor || "#a70bea"};
  max-width: 15vh;
  width: auto;
  height: auto;
  //height: 15vh;
  //height: 12vh;
  object-fit: contain;
  display: flex;
  justify-content: center;
  margin: auto;
  border-radius: 50%;
  padding: 7px;
`
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
  color: white;

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
  color: white;
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
  color: white;
  
`
const UserName = styled.h1`
 display: flex;
  justify-content: center;
  margin: auto;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 5px;
  //word-break: break-all;
  overflow-wrap: break-word;
  hyphens: manual;
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
  //width: 20vw;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  //margin: 10px 0;
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
  }

  @media screen and (max-width: 400px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
  }
  
`
const PersonBlock = styled.div`
  //margin-top: var(--screen-nav-bar-height);
  //height: auto;
  //width: 70vw;
  //background-color: aquamarine;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  //align-content: center;
  max-width: 90vw;
  min-width: 60vw;
  height: auto;
  margin: auto;
  border-radius: 5pt;

  //margin-bottom: 7vh;
  padding: 2vh;

  //row-gap: 1vw;
  //background: rgba(31, 31, 31, 0.7);

  @media screen and (max-width: 886px) {
    flex-flow: column wrap;
    width: 90vw;
    align-content: center;
    align-items: center;
  }

  //.teamBlock:nth-child(2n){
  //  flex-direction:row-reverse;
  //  background-color: #acacac;
  // 
`

const LeftBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 40%;
`

const RightBlock = styled.div`
  //min-height: 50vh;
  width: 60%;
  height: auto;
  //min-height: 20vw;
  display: flex;
  flex-flow: column nowrap;
  color: white;
  justify-content: space-between;
  align-content: flex-start;

`
const TeamPicture = styled.img`
  object-fit: contain;
  //display: flex;
  //align-content: flex-start;
  //position: relative;
  //border-radius: 5pt 0 0 5pt;
  max-width: 30vw;
  max-height: 30vh;
  //margin-left: 0;
  //max-width: 3
  // 0vw;
  //max-width: 40vw;
  //margin-right: 1vw;
  //margin-left: 1vw;

  @media screen and (max-width: 900px){
    height: 40vh;
    //align-content: center;

    //border-radius: 5pt;
    
  }
`

const TeamMemberInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  //width: 30vw;
  align-content: center;
  justify-content: center;
  color: white;
  margin: auto auto;
  //text-justify: center;

  @media screen and (max-width: 900px){
    width: 80vw;
    flex-flow: column wrap;

    text-align: center;
  }
`

const TeamName = styled.h2`
  font-size: 3em;
  margin-bottom: 1vw;
`

const TeamTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 1vw;
`

const ModalAbout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const AboutP = styled.p`
  overflow: hidden;
  //display: -webkit-box;
  //-webkit-line-clamp: 20;
  //-webkit-box-orient: vertical;
  //white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // max-width: 100ch;
  //font-size: 0.75em;
  //font-weight: lighter;
`

const KeywordsSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-end;
`