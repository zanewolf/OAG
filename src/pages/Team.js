import React from 'react'
import Layout from "../components/Layout";
import {teamData} from "../data/TeamData";

import styled from "styled-components";


export default function Team(){

    console.log(teamData)

    return (
        <Layout pageTitle={"Team"}>
            <TeamPage>
                {teamData.map((teamMember,i)=>{
                    return(
                        <TeamMember className={'teamBlock'}>
                            <TeamPicture src={teamMember.image} alt={teamMember.name}/>
                            {/*</TeamPicture>*/}
                            <TeamMemberInfo>
                                <TeamName>{teamMember.name}</TeamName>
                                <h4>{teamMember.title}</h4>
                                <p> {teamMember.about}</p>
                            </TeamMemberInfo>
                        </TeamMember>
                    )
                })}
            </TeamPage>





        </Layout>

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
  margin-top: var(--screen-nav-bar-height);
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5vw;



  @media screen and (max-width: 900px){
    margin-top: var(--phone-nav-bar-height);
    padding-top: 2vh;
  }
`
const TeamMember = styled.div`
  margin-top: var(--screen-nav-bar-height);
  height: 60vh;
  width: 70vw;
  //background-color: aquamarine;
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-between;

  @media screen and (max-width: 886px){
    flex-flow: column wrap;
    width: 90vw;
    align-content: center;
    align-items: center;
  }

  //.teamBlock:nth-child(2n){
  //  flex-direction:row-reverse;
  //  background-color: #acacac;
  //}
  


  
`

const TeamPicture = styled.img`
  object-fit: cover;
  //display: flex;
  //justify-content: center;
  width: 30vw;
  //max-width: 30vw;
  //max-width: 40vw;
  //margin-right: 1vw;
  //margin-left: 1vw;

  @media screen and (max-width: 900px){
    height: 40vh;
    align-content: center;
    
  }
`

const TeamMemberInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30vw;
  align-content: center;
  justify-content: center;

  @media screen and (max-width: 900px){
    width: 80vw;
    flex-flow: column wrap;

    text-align: center;
  }
`

const TeamName = styled.h3`
  font-size: 4em;
`