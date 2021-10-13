import React from 'react'
import Layout from "../components/Layout";
import {teamData} from "../data/TeamData";
import ocean3 from '../images/ocean3.jpg';

import styled from "styled-components";


export default function Team(){

    console.log(teamData)

    return (
        <Layout pageTitle={"Team"}>
            <TeamPage image={ocean3}>
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
  padding-top: var(--screen-nav-bar-height);
  top: 0;
  left: 0;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 5vw;
  //padding-bottom: 10vw;
  background: url(${({image})=>(image ? image : null)});
  background-repeat: no-repeat;
  background-attachment: fixed;



  @media screen and (max-width: 900px){
    margin-top: 13vh;
    padding-top: 2vh;
  }
`
const TeamMember = styled.div`
  margin-top: var(--screen-nav-bar-height);
  height: 60vh;
  width: 70vw;
  //background-color: aquamarine;
  display: flex;
  border-radius: 5pt;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 7vh;
  background: rgba(0,0,0,0.7);

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
  border-radius: 5pt 0 0 5pt;
  width: 30vw;
  height: 60vh;
  //max-width: 3
  // 0vw;
  //max-width: 40vw;
  //margin-right: 1vw;
  //margin-left: 1vw;

  @media screen and (max-width: 900px){
    height: 40vh;
    align-content: center;

    border-radius: 5pt;
    
  }
`

const TeamMemberInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30vw;
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
  font-size: 4em;
  margin-bottom: 1vw;
`

const TeamTitle = styled.h3`
  font-size: 2.5em;
  margin-bottom: 1vw;
`