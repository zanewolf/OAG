import * as React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";
import {FaExternalLinkAlt, FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Avatar from "boring-avatars";
import Modal from 'react-modal'
import TagSection from "./TagSection";
import nullProfile from '../images/Null2.png'

let paletteColors=['#351431','#823c3a','#f5a578',
    '#002d50', '#01778c', '#52b69a']
const fieldColors={
    'Policy/Economics': paletteColors[0],
    'Communications':paletteColors[1],
    'Humanities':paletteColors[2],
    'Environmental Sciences': paletteColors[3],
    'Biological Sciences': paletteColors[4],
    'Engineering': paletteColors[5]

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


export default function PeopleCard({name, title,employer, primaryField,image, about,email, website, children, personalKeywords, researchKeywords, fieldColor,secondaryFields}) {

    const [modalState, setModalState] = React.useState(false)
    // console.log(image)

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


    let colors = paletteColors.filter(d=>d!==fieldColor)
    // console.log(colors)


    let avatarColors=[colors[Math.floor(Math.random() * colors.length)],colors[Math.floor(Math.random() * colors.length)]]


    return (
        <>
            <UserCard
                bandColor={fieldColor}
            >
                <UserHeader>
                    {image === null?
                        <UserAvatar bandColor={fieldColor}>
                            <Avatar
                                size={'11vh'}
                                name={name}
                                variant="beam"
                                colors={avatarColors}
                            />
                        </UserAvatar> :
                        <UserImage src={image[0].url}
                                   alt={'Profile picture of ' + name}
                                   bandColor={fieldColor}
                                   maxWidth={'15vw'}
                                   maxHeight={'15vh'}
                                   onError={({ currentTarget }) => {
                                       currentTarget.onerror = null; // prevents looping
                                       currentTarget.src= {nullProfile};
                                   }}/>
                    }
                    <UserName>{name}</UserName>
                </UserHeader>
                {/*<UserImage src={imageSrc} alt={'Profile picture of ' + name} bandColor={roleColor} />*/}


                <UserInfo>
                    <UserEmployment>
                        <UserEmployer bandColor={fieldColor}>
                            {employer && employer.split(',')[0]}
                        </UserEmployer>
                        <UserRole bandColor={fieldColor}>
                            {title && title}
                        </UserRole>
                    </UserEmployment>
                    <UserFields>
                        <h4>{primaryField}</h4>
                        <hr style={{color: fieldColor}}/>
                        <ul>
                            {secondaryFields.split(',').map((d,i)=>{
                                return(
                                    <li key={i}>
                                        <h6>{d}</h6>
                                    </li>
                                )
                            })}
                        </ul>
                    </UserFields>
                </UserInfo>

                <CardFooter className = {"card-footer"} bandColor={fieldColor}>
                    <UserWebsite title = "Personal Website" onClick={()=> openWebsite(website)} >
                        {<FaExternalLinkAlt/>}
                    </UserWebsite>
                    <MyHr />
                    <EmailButton title = "Click to copy email" onClick={()=>copy(email)} >
                        {<HiOutlineMail/>}
                    </EmailButton>
                    <MyHr />
                    <EmailButton title = "Open Profile"
                        onClick = {()=>setModalState(true)}
                        >
                            Bio
                    </EmailButton>
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
                                <Avatar
                                    size={'50%'}
                                    name={name}
                                    variant="beam"
                                    colors={["#d9ed92","#b5e48c","#99d98c","#76c893","#52b69a","#34a0a4","#168aad","#1a759f","#1e6091","#184e77"]}
                                />:
                            <TeamPicture className = {'modalImage'} src={image[0].url} alt={'Profile picture of ' + name} bandColor={fieldColor} />
                        }
                        <TeamName>{name}</TeamName>
                        <TeamTitle>{title}</TeamTitle>
                        <h3>{employer}</h3>
                    </LeftBlock>
                    <RightBlock>
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
                    </RightBlock>
                </PersonBlock>
            </Modal>
        </>
    )
}

// card styling
const UserCard = styled.div`
  //width: 20vw;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  //margin: 10px 0;
  width: 250px;
  //padding: 20px;
  //background-color: blue;
  height: 400px;
  font-weight: 700;
  border-radius: 15pt;
  position: relative;
  //background-color: #222831;
  //color: white;
  //border
  background-image: linear-gradient(180deg, ${props => props.bandColor || "#a70bea"} 20%, white 20%);
  // border-top-width: 5px;
   border-top-color: ${props => props.bandColor || "#a70bea"};

  @media screen and (max-width: 900px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    width: 80vw;
    height: 40vh;
  }

  @media screen and (max-width: 400px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
  }
  
`
const UserHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1vh;
  //background-color: black;
  //border-radius: 15pt 15pt 0pt 0pt;
  
`
const UserAvatar = styled.div`
   // border: 4px solid ${props => props.bandColor || "#a70bea"};
  border: 3px solid white;
  margin: auto;
  margin-top: 10pt;
  max-width: 12vh;
  max-height: 12vh;
  //width: auto;
  //height: auto;
  overflow: hidden;
  //height: 15vh;
  //height: 12vh;
  //object-fit: fill;
  //display: flex;
  //justify-content: center;
  border-radius: 50%;
  //padding: 7px;
`
const UserImage = styled.img`
  //border-radius: 50%;
  //border-radius: 50%;
  //border: 5px solid #272133;
  margin-top: 10pt;
  border:3px solid white;
  max-width: 12vh;
  width: auto;
  height: 12vh;
  object-fit: cover;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  //border: 2px solid #03BFCB;
  border-radius: 50%;
  //padding: 7px;
  
`
const MyHr = styled.hr`
  min-height: 100%;
  max-height: 100vh;
  margin: 0;
  border: solid #ffffff;
`
const UserInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-content: center;
  height: 40%;
`
const UserWebsite = styled.a`
  //font-size: 0.75em;
  margin: auto;
  //border-right: 2px solid #828282
  font-size: 1.5em;
  border: none;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  
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
    //color: purple;
    -webkit-transform: scale(1.3) translateZ(0);
    transform: scale(1.3) translateZ(0);
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
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

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
    //color: purple;
    -webkit-transform: scale(1.3) translateZ(0);
    transform: scale(1.3) translateZ(0);
  }
`
const CardFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 15%;
  //font-size: 2em;
  background-color: ${props => props.bandColor || "#575757"};
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  border-radius: 0 0 15pt 15pt;
  color: white;
  border-top: solid 0px #fff;
  
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
  text-align: center;
  hyphens: manual;
`

const UserEmployment = styled.div`
  display:flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: center;
`
const UserRole = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: 0.85em;
  font-weight: lighter;
`
const UserEmployer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: 1em;
  font-weight: lighter;
`
const UserFields = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-self: flex-end;
  text-align: center;
  margin: auto;
  
  h4{
    text-transform: uppercase;
    color: rgba(0,0,0,0.5);
  }
  h6{
    font-size: 0.85em;
  }
`


// modal styling
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