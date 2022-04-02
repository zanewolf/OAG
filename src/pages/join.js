import React from 'react'
import Layout from "../components/Layout";
import ocean3 from "../images/ocean3.jpg";
import {teamData} from "../data/TeamData";
import styled from "styled-components";
import {BsPlusCircleFill} from "react-icons/bs";
import {Link} from 'gatsby';
import guide from '../documents/primary_field_guide.pdf'

let airTableForm = "https://airtable.com/shrZtj5uOH8Ncc9zC";
let airtableDataForm = "https://airtable.com/shrlU4ivGTFhQn6vb"

export default function JoinPage() {
    return (
        <Layout pageTitle={"Join"}>
            <JoinDiv image={ocean3}>
                <JoinButtons>
                    <JoinBox>
                        <BoxTitle>
                           <h3>
                               Affiliate
                           </h3>
                        </BoxTitle>
                        <JoinButton as={'a'} onClick={(e)=>{
                            e.preventDefault()
                            window.open(airTableForm);}}>
                            <BsPlusCircleFill/>
                        </JoinButton>
                    </JoinBox>
                    <JoinBox>
                        <BoxTitle>
                            <h3>
                                Data
                            </h3>
                        </BoxTitle>
                        <JoinButton as={'a'} onClick={(e)=>{
                            e.preventDefault()
                            window.open(airtableDataForm);}}>
                            <BsPlusCircleFill/>
                        </JoinButton>
                    </JoinBox>
                </JoinButtons>
                <JoinAbout>
                    <p>
                        Welcome! As you fill out these forms, we ask that you think about how you and your work aligns with broad areas of work, which we call "primary fields": Environmental Sciences, Biological Sciences, Engineering, Humanities, Policy/Economics, Communications, and Cross-Cutting Fields. You might feel your specific disciplines, or sub-fields, intersect two or more primary fields, or that you fit into none of them. That's totally okay (and awesome)! Select the primary field you think is best. If you'd like to see some examples or edge-cases, check out our awesome guide.
                    </p>
                    <DocButton href={guide} target={"_blank"}>
                        Primary Field Guide
                    </DocButton>
                </JoinAbout>

            </JoinDiv>






        </Layout>
    )
}

const DocButton = styled.a`
  font-size: 1.5em;
  color: white;
  margin: auto;
  margin-top: 5vw;
  text-align: center;
  background: none;
  min-width: 10vw;
  width: auto;
  padding: 1vh;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  //border-radius: 20px;
  //border: 3px solid rgba(255,255,255,1);

  :hover {
    //-webkit-transform: translateZ(0);
    //transform: translateZ(0);
    //-webkit-transition-duration: 0.3s;
    //transition-duration: 0.3s;
    //-webkit-transition-property: transform;
    //transition-property: transform;
    //-webkit-transition-timing-function: ease-out;
    //transition-timing-function: ease-out;
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    color: blue;
  }
`

const JoinDiv = styled.div`
  padding-top: var(--screen-nav-bar-height);
  top: 0;
  left: 0;
  height: 95vh;
  //height: auto;
  display: flex;
  flex-flow: column nowrap;
  color: white;
  //padding-bottom: 10vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),url(${({image})=>(image ? image : null)});




  @media screen and (max-width: 1200px){
    padding-top: var(--phone-nav-bar-height);
    display: flex;
    flex-flow: column wrap;
    height:auto;
    min-height: 95vh;
    align-content: space-evenly;
  }
`

const JoinAbout = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  //text-align: center;
  font-size: 1.15em;
  letter-spacing: 1px;
  line-height: 1.5em;
  width: 100vw;
  margin: auto;
  padding-left: 10vh;
  padding-right: 10vh;

  @media screen and (max-width: 1200px) {
    padding: 2vh;
    font-size: 0.75em;
    //text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 0 8px 32px 0 rgba(5, 5, 5, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    //border-radius: 20px;
    //border: 1px solid rgba(255, 255, 255, 0.18);
  }

`

const JoinButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 5vw;
  width: 100vw;
  margin-top: 5vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  justify-content: space-evenly;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-flow: column nowrap;
    width: 50vw;
    height: 40vh;
    justify-content: space-evenly;
    margin-top: 0vh;
    padding-bottom: 2vh;
    //margin-bottom: 2vh;
    //padding-top: 2vh;
  }
`

const JoinBox=styled.div`
  margin-top: 2vh;
  width: 20vw;
  height: 30vh;
  //border: 2pt solid black;
  //border-radius: 15pt;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(5, 5, 5, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: space-evenly;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-flow: column wrap;
    width: 50vw;
    height: 15vh;
    justify-content: space-evenly;
    margin-bottom: 5vh;
    //padding-top: 2vh;
  }
`

const BoxTitle = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-size: 2em;
  text-transform: uppercase;
  margin: auto;

  @media screen and (max-width: 1100px){
    padding-top: 2vh;
    font-size: 1em;
  }
  
`

const JoinButton = styled.button`
  margin: auto;
  color: white;
  font-size: 6em;
  //display: inline-block;
  //color: palevioletred;
  //font-size: 1em;
  //margin: 1em;
  //padding: 0.25em 1em;
  //border: 2px solid palevioletred;
  //border-radius: 3px;
  //display: block;

  :hover {
    //-webkit-transform: translateZ(0);
    //transform: translateZ(0);
    //-webkit-transition-duration: 0.3s;
    //transition-duration: 0.3s;
    //-webkit-transition-property: transform;
    //transition-property: transform;
    //-webkit-transition-timing-function: ease-out;
    //transition-timing-function: ease-out;
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    //color: blue;
    }

  @media screen and (max-width: 1200px){
    font-size: 3em;  
  }
  
`