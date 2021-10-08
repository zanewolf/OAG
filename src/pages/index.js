import * as React from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ocean3 from '../images/ocean3.jpg';
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";


const anchors = ["Home", "Mission", "Past Events"]

const fullpageOptions = {
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    sectionsColor: ['#282c34', '#ff5f45', '#0798ec'],
    callbacks: ['onLeave', 'afterLoad'],
}

const IndexPage = (fullpageProps) => (
    <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {

            return (
                <div id="fullpage-wrapper">
                    <div className="section section1">
                        <h3>Section 1</h3>
                        <button onClick={() => {fullpageApi.moveSectionDown()}}>
                            Move down
                        </button>
                    </div>
                    <div className="section section2">
                        <h3>Section 1</h3>
                        <button onClick={() => {fullpageApi.moveSectionUp()}}>
                            Move Up
                        </button>
                    </div>
                </div>
            )
        }}
    />
)


export default IndexPage;

// const IndexPage = ({fullpageProps}) => (
//
//     <Layout pageTitle="Home">
//         <ReactFullpage
//             navigation
//             scrollOverflow={true}
//             navigationTooltips={anchors}
//             bigSectionDestination={"top"}
//             {...fullpageProps}
//             render={({ state }) => {
//                 console.log("render prop change", state); // eslint-disable-line no-console
//
//                 // if (state.callback === "onLeave") {
//                 //     if (state.direction === "down") {
//                 //         console.log("going down..." + state.origin.index);
//                 //     }
//                 // }
//                 return (
//                     <div id="fullpage-wrapper">
//                         <div className="section section1" data-menuanchor={"Home"}>
//                             <Hero
//                                 title={"Connecting Oceans, Connecting People"}
//                                 size={"100vh"}
//                                 image={ocean3}
//                                 darkened
//                                 id={"hero1"}
//
//                             />
//                         </div>
//                         <div className="section" data-menuanchor={"Mission"}>
//                             <MissionSection>
//                                 <SectionHeader> We're all in this together</SectionHeader>
//                                 <MissionDesc>
//                                     <p>Our mission is to bring together people, span programs, and highlight resources within the oceanic sciences community. Beyond simply compiling a list of people, places, and grants, we also orchestrate cross-department as seminars and workshops.</p>
//                                     <p>By joining OAG, you'll be contributing to and receiving support from a broad network of scientists, policy makers, environmentalists, communicators, and general ocean-enthusiasts. This network only works because of the people that join and participate. </p>
//                                 </MissionDesc>
//                             </MissionSection>
//                         </div>
//                     </div>
//                 );
//             }}
//         />
//     </Layout>
// );
//
// export default IndexPage
// export default function IndexPage({data}){
//
//
//     return (
//         <Layout pageTitle="Home Page">
//             {/*<section ref={scrollRef}>*/}
//                 <Hero
//                     title={"Connecting Oceans, Connecting People"}
//                     size={"100vh"}
//                     image={ocean3}
//                     darkened
//                     id={"hero1"}
//
//                 >
//                     {/*<div className={"hero-btns"}>*/}
//                     {/*    <Button fontBig big primary> Join Now</Button>*/}
//                     {/*</div>*/}
//                 </Hero>
//                 <MissionSection>
//                     <SectionHeader> We're all in this together</SectionHeader>
//                     <MissionDesc>Our mission is to bring together people, span programs, and highlight resources within the oceanic sciences community. Beyond simply compiling a list of people, places, and grants, we also orchestrate cross-department as seminars and workshops.
//                     </MissionDesc>
//                 {/*<Hero*/}
//                 {/*    title={"Bringing People Together"}*/}
//                 {/*    size={"90vh"}*/}
//                 {/*    id={"hero2"}*/}
//                 {/*>*/}
//                 {/*    /!*<div className={"hero-btns"}>*!/*/}
//                 {/*    /!*    <Button fontBig big primary> Join Now</Button>*!/*/}
//                 {/*    /!*</div>*!/*/}
//                 {/*</Hero>*/}
//                 </MissionSection>
//             {/*</section>*/}
//         </Layout>
//     )
// }

// const MissionSection=styled.div`
//   //margin-top: 6vh;
//   height: 100vh;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-evenly;
//   align-items: center;
//   //align-content: center;
//   padding: 2em 2em;
//   margin: auto;
//   background: linear-gradient(to bottom, rgb(0, 36, 73), rgba(0, 0, 0, 1));
//   color: #fff;
//
//   @media screen and (max-width: 768px) {
//     height: 100vh;
//     flex-flow: column wrap;
//     justify-content: space-evenly;
//   }
// `
//
// const SectionHeader=styled.h2`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   font-size: 3em;
//   font-weight: bold;
//   max-width: 30vw;
//
//   @media screen and (max-width: 768px){
//     text-align: center;
//     justify-content: center;
//   }
//
// `
//
// const MissionDesc=styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   //align-content: center;
//   max-width: 50vw;
//   line-height: 1.6;
//   height: auto;
//
//
//   @media screen and (max-width: 768px){
//     max-width: 80vw;
//     text-align: center;
//   }
//
// `
//
// const EventsSection = styled.div`
//   background: black;
//   color: #fff;
//   height: auto;
//   min-height: 100vh;
//   padding-bottom: 5vh;
//   padding-top: var(--phone-nav-bar-height)
// `