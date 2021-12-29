import React from 'react'
import Layout from "../components/Layout";
import ocean3 from "../images/ocean3.jpg";
import {teamData} from "../data/TeamData";
import styled from "styled-components";
import {BsPlusCircleFill} from "react-icons/bs";

let airTableForm = "https://airtable.com/shrZtj5uOH8Ncc9zC"

export default function JoinPage() {
    return (
        <Layout pageTitle={"Join"}>
            <JoinDiv image={ocean3}>
                <JoinBox>
                    <BoxTitle>
                       <h3>
                           Person
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
                            Program
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
                            Opportunity
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
                            Cruise
                        </h3>
                    </BoxTitle>
                    <JoinButton as={'a'} onClick={(e)=>{
                        e.preventDefault()
                        window.open(airTableForm);}}>
                        <BsPlusCircleFill/>
                    </JoinButton>
                </JoinBox>
            </JoinDiv>





        </Layout>
    )
}

const JoinDiv = styled.div`
  padding-top: var(--screen-nav-bar-height);
  top: 0;
  left: 0;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 5vw;
  //padding-bottom: 10vw;
  background: url(${({image})=>(image ? image : null)});
  background-repeat: no-repeat;
  background-attachment: fixed;
  justify-content: space-evenly;



  @media screen and (max-width: 1200px){
    padding-top: var(--phone-nav-bar-height);
    display: flex;
    flex-flow: column wrap;
    //width: 60vw;
    //height: 40vh;
    align-content: space-evenly;
    //padding-top: 2vh;
  }
`

const JoinBox=styled.div`
  margin-top: 2vh;
  width: 20vw;
  height: 30vh;
  //border: 2pt solid black;
  border-radius: 15pt;
  background: rgba(0,0,0,0.3);
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: space-evenly;

  @media screen and (max-width: 1200px){
    display: flex;
    flex-flow: column wrap;
    width: 70vw;
    height: 20vh;
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

  @media screen and (max-width: 1200px){
    font-size: 3em;  }
  
`