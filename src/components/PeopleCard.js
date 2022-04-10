import * as React from 'react'
import styled from "styled-components";
import {Link} from "gatsby";
import {FaExternalLinkAlt, FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Avatar from "boring-avatars";
import Modal from 'react-modal'
import TagSection from "./TagSection";
import nullProfile from '../images/Null2.png'
import '../styles/directory.module.css'
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";

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
let fieldColorProfile;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        marginTop: `var( --screen-nav-bar-height)`,
        height: '85vh',
        borderRadius: '15px',
        maxWidth: '95vw',
        minWidth: '70vw',
        width: 'auto'
        // overflow: 'scroll'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};


export default function PeopleCard({name, title,employer, primaryField,image, about,email, activeFieldSites,website, children, personalKeywords, researchKeywords, fieldColor,secondaryFields}) {

    const [modalState, setModalState] = React.useState(false)

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

    // let avatarColors=[colors[Math.floor(Math.random() * colors.length)],colors[Math.floor(Math.random() * colors.length)]]

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
                                colors={colors}
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
                    <BioButton title = "Open Profile"
                        onClick = {()=>setModalState(true)}
                        >
                            Bio
                    </BioButton>
                </CardFooter>
                {children}
            </UserCard>
            <Modal
                isOpen={modalState}
                // onHide={handleClose}
                onRequestClose={()=>setModalState(false)}
                style={customStyles}
                contentLabel="Profile Modal"
                ariaHideApp={false}
                preventScroll={false}
                backdropClassName={'modal-backdrop'}
                overlayClassName="Overlay"
            >
                <ButtonDiv>
                    <button
                        onClick={()=>setModalState(false)}
                    >
                        <FaTimes/>
                    </button>
                </ButtonDiv>
                <PersonBlock>
                    <LeftBlock>
                        <UserHeaderModal bandColor={fieldColor}>
                            {image === null?
                                <UserAvatarModal bandColor={fieldColor}>
                                    <Avatar
                                        size={'20vh'}
                                        name={name}
                                        variant="beam"
                                        colors={colors}
                                    />
                                </UserAvatarModal> :
                                <UserImageModal src={image[0].url}
                                           alt={'Profile picture of ' + name}
                                           bandColor={fieldColor}
                                           maxWidth={'30vw'}
                                           maxHeight={'30vh'}
                                           onError={({ currentTarget }) => {
                                               currentTarget.onerror = null; // prevents looping
                                               currentTarget.src= {nullProfile};
                                           }}/>
                            }
                        </UserHeaderModal>
                        <UserInfoModal>
                            <UserNameModal>{name}</UserNameModal>
                            <UserEmploymentModal>
                                <UserEmployerModal bandColor={fieldColor}>
                                    {employer && employer.split(',')[0]}
                                </UserEmployerModal>
                                <UserRoleModal bandColor={fieldColor}>
                                    {title && title}
                                </UserRoleModal>
                            </UserEmploymentModal>
                            <UserFieldsModal>
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
                            </UserFieldsModal>
                        </UserInfoModal>
                        <ContactButtons className = {"card-footer"} bandColor={fieldColor}>
                            <ModalButton bandColor={fieldColor} title = "Personal Website" onClick={()=> openWebsite(website)} >
                                {<FaExternalLinkAlt/>}
                            </ModalButton>
                            <ModalButton bandColor={fieldColor} title = "Click to copy email" onClick={()=>copy(email)} >
                                {<HiOutlineMail/>}
                            </ModalButton>
                        </ContactButtons>
                    </LeftBlock>
                    <RightBlock>
                        <ModalAbout>
                            <h2>About</h2>
                            <AboutP> {about}</AboutP>
                        </ModalAbout>
                        <ModalAccordions>
                            {employer && employer.includes(',') && <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    All AFFILIATIONS
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TagSection tags={employer} color={fieldColor}></TagSection>
                                </AccordionDetails>
                            </Accordion>
                            }
                            {activeFieldSites && <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    ACTIVE FIELD SITES
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TagSection tags={activeFieldSites} color={fieldColor}></TagSection>
                                </AccordionDetails>
                            </Accordion>
                            }
                            {researchKeywords && <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    RESEARCH KEYWORDS
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TagSection tags={researchKeywords} color={fieldColor}></TagSection>
                                </AccordionDetails>
                            </Accordion>
                            }
                            {personalKeywords && <Accordion>

                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    PERSONAL KEYWORDS
                                </AccordionSummary>

                                <AccordionDetails>
                                    <TagSection tags={personalKeywords} color={fieldColor}></TagSection>
                                </AccordionDetails>

                            </Accordion>
                            }
                        </ModalAccordions>
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

  @media screen and (max-width: 400px){
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    width: 80vw;
    height: 40vh;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
  }

  @media screen and (max-width: 400px){
  }
  
`
const UserHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1vh;
  
`
const UserAvatar = styled.div`
  border: 3px solid white;
  margin: auto;
  margin-top: 10pt;
  max-width: 12vh;
  max-height: 12vh;
  overflow: hidden;
  border-radius: 50%;
`
const UserImage = styled.img`
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
  padding-top: 4px;
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
  padding-top: 4px;
  color: white;
  //border-right: 2px solid #828282
  display: inline-block;
  vertical-align: middle;
  //-webkit-transform: perspective(1px) translateZ(0);
  //transform: perspective(1px) translateZ(0);
  //box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  //-webkit-transition-duration: 0.3s;
  //transition-duration: 0.3s;

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
    -webkit-transform: scale(1.1) translateZ(0);
    transform: scale(1.1) translateZ(0);
  }
`
const BioButton = styled.button`
  background-color: rgba(0,0,0,0);
  //width: 5vw;
  font-size: 2em;
  border: none;
  margin: auto;
  //padding-top: 5px;
  color: white;
  //border-right: 2px solid #828282
  display: inline-block;
  vertical-align: middle;
  //-webkit-transform: perspective(1px) translateZ(0);
  //transform: perspective(1px) translateZ(0);
  //box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  //-webkit-transition-duration: 0.3s;
  //transition-duration: 0.3s;

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
    -webkit-transform: scale(1.1) translateZ(0);
    transform: scale(1.1) translateZ(0);
  }
`
const CardFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10%;
  //font-size: 2em;
  background-color: ${props => props.bandColor || "#575757"};
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  border-radius: 0 0 15pt 15pt;
  color: white;
  border-top: solid 0px #fff;


  @media screen and (max-width: 500px) {
    height: 12%;
  }
  
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-width: 90vw;
  min-width: 60vw;
  min-height: 60vh;
  height: auto;
  margin: auto;
  border-radius: 5pt;
  padding: 2vh;

  @media screen and (max-width: 1200px) {
    flex-flow: column nowrap;
    max-width: 90vw;
    width: auto;
    align-items: center;
    align-content: center;
  }

  @media screen and (max-width: 500px) {
    flex-flow: column nowrap;
    max-width: 100vw;
    width: auto;
    align-items: center;
    align-content: center;
  }

  //.teamBlock:nth-child(2n){
  //  flex-direction:row-reverse;
  //  background-color: #acacac;
  // 
`
const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
  
  button{
    background: none;
    border: none;
    font-size: 2em;

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
      -webkit-transform: scale(1.1) translateZ(0);
      transform: scale(1.1) translateZ(0);
    }
  }
`
const LeftBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 40%;
  margin-right: 3vh;
  max-height: 65vh;

  @media screen and (max-width: 1200px) {
    flex-flow: column nowrap;
    margin: auto;
    justify-content: center;
    align-content: center;
    width: auto;
  }

  @media screen and (max-width: 500px) {
    flex-flow: column nowrap;
    max-width: 90vw;
    min-height: 75vh;
    height: auto;
    align-items: center;
    align-content: center;
    maring-bottom: 5vh;
  }
`
const UserHeaderModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  justify-content: center;
  align-content: center;
  
  
`
const UserAvatarModal = styled.div`
  border: 8px solid ${props => props.bandColor || "#ba0f0f"};;
  margin: auto;
  //margin-top: 10pt;
  max-width: 40vh;
  max-height: 40vh;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
`
const UserImageModal = styled.img`
  //margin-top: 10pt;
  border: 8px solid ${props => props.bandColor || "#ffffff"};;
  max-width: 30vh;
  width: auto;
  height: auto;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
  //border: 2px solid #03BFCB;
  border-radius: 50%;
`
const UserNameModal = styled.h1`
  display: flex;
  justify-content: center;
  margin: auto;
  font-size: 2em;
  text-transform: uppercase;
  //word-break: break-all;
  overflow-wrap: break-word;
  text-align: center;
  hyphens: manual;
`
const UserInfoModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: center;
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin: auto;
  height: 90%;

  @media screen and (max-width: 500px) {
    justify-content: space-evenly;
    height: auto;
  }

`
const UserEmploymentModal = styled.div`
  display:flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: center;
  margin: auto;
  padding: 5px;
`
const UserRoleModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: 1em;
  font-weight: lighter;
  padding: 5px;
`
const UserEmployerModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-size: 1.2em;
  font-weight: normal;
  padding: 5px;
`
const UserFieldsModal = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  align-self: flex-end;
  text-align: center;
  margin: auto;
  
  h4{
    text-transform: uppercase;
    color: rgba(0,0,0,0.5);
    font-size: 1.3em;
  }
  h6{
    font-size: 1em;
  }
`
const ContactButtons = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-bottom: 3vh;
`
const ModalButton = styled.button`
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  padding: 9px 5px 5px 5px;
  border: none;
  font-size: 3em;
  color: #fff;
  background-color: ${props => props.bandColor || "#000000"}
  

`
const RightBlock = styled.div`
  //min-height: 50vh;
  width: 60%;
  //min-height: 20vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-content: flex-start;

  @media screen and (max-width: 1200px) {
    flex-flow: column wrap;
    width: auto;
    height: auto;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }

`
const ModalAbout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`
const AboutP = styled.p`
  overflow: hidden;
  margin-bottom: 2vh;
`
const ModalAccordions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: auto;
  bottom: 0;
  
  @media screen and (max-width: 1200px) {
    margin-top: 3vh;
    width: 100%;
  }
`