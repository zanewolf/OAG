import React from 'react'
import Layout from "../components/Layout";
import {teamData} from "../data/TeamData";
import ocean3 from '../images/ocean3.jpg';

import styled from "styled-components";


export default function Team(){

    console.log(teamData)

    return (
        // <Layout pageTitle={"Team"}>

            <TeamPage>
                <TeamPageHeader>
                    Meet the Team
                </TeamPageHeader>
                <TeamMembers>
                    {teamData.map((teamMember,i)=>{
                        return(
                            <TeamMember className={'teamBlock'}>
                                <TeamPicture src={teamMember.image} alt={teamMember.name}/>
                                {/*</TeamPicture>*/}
                                <TeamMemberInfo>
                                    <TeamName>{teamMember.name}</TeamName>
                                    <TeamTitle>{teamMember.title}</TeamTitle>
                                    <p> {teamMember.about}</p>
                                </TeamMemberInfo>
                            </TeamMember>
                        )
                    })}
                </TeamMembers>
            </TeamPage>





        // </Layout>

    )
}
// const Team =(fullpageProps)=> (
//         <Layout pageTitle="Team">
//             <ReactFullpage
//                 navigation
//                 // scrollBar={true}
//                 // fitToSectionDelay={500}
//                 scrollOverflow={true}
//                 // normalScrollElements={"#eventsSection"}
//                 // autoScrolling={false}
//                 bigSectionDestination={"top"}
//                 {...fullpageProps}
//                 render={({ state, fullpageApi }) => {
//                     console.log("render prop change", state); // eslint-disable-line no-console
//
//                     if (state.callback === "onLeave") {
//                         if (state.direction === "down") {
//                             console.log("going down..." + state.origin.index);
//                         }
//                     }
//                     return (
//                         <div id="fullpage-wrapper">
//                             <div className="section section1" data-menuanchor={"Home"}>
//                                 <Hero
//                                     title={"Connecting Oceans, Connecting People"}
//                                     size={"100vh"}
//                                     image={ocean3}
//                                     darkened
//                                     id={"hero1"}
//
//                                 />
//                             </div>
//                         </div>
//                     );
//                 }}
//             />
//         </Layout>
//     )
//
// export default Team

const TeamPage = styled.div`
  //margin-top: var(--screen-nav-bar-height);
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  justify-content: start;
  //background-color: black;
  justify-content: center;
  align-content: center;
  
  @media screen and (max-width: 1100px) {
    //margin-top: 35vh;
  }
  //justify-content: space-between;
  //align-content: center;
  

`

const TeamPageHeader = styled.h1`
  font-size: 3em;
  color: white;
  margin: auto;
  padding: 3vw;

  @media screen and (max-width: 420px) {
    font-size: 2.5em;
  }
  
`

const TeamMembers = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-content: center;
  width: 100vw;
  padding-top: 10pt;
  margin: auto;
  //border: 1px solid white;

  @media screen and (max-width: 1100px){
    flex-flow: column wrap;
    width: 90vw;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10vh;
  }
  
`
const TeamMember = styled.div`
  height: 60vh;
  width: 30vw;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 7vh;
  //background: rgba(250,250,250,0.1);
  text-align: center;

  @media screen and (max-width: 1100px){
    flex-flow: column wrap;
    height: auto;
    width: 70vw;
    align-content: center;
    align-items: center;
    //margin-bottom: 3vh;
  }

  //.teamBlock:nth-child(2n){
  //  flex-direction:row-reverse;
  //  background-color: #acacac;
  //}
  


  
`

const TeamPicture = styled.img`
  border: 4px solid white;
  max-width: 20vh;
  width: auto;
  height: 20vh;
  min-height: 20vh;
  object-fit: contain;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  //padding: 7px;
`

const TeamMemberInfo = styled.div`
  color: white;
  width: 25vw;
  margin-left: auto;
  margin-right: auto;
  //margin: auto;

  @media screen and (max-width: 1100px){
    width: 70vw;
    flex-flow: column wrap;

    text-align: center;
  }
`

const TeamName = styled.h2`
  font-size: 2em;
  padding: 1vw;
  margin: auto;
  text-align: center;
  top: 0;
`

const TeamTitle = styled.h3`
  font-size: 1em;
  margin-bottom: 1vw;
`