import * as React from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ocean3 from '../images/ocean3.jpg';
import {useState,useEffect} from "react";
import {Link} from 'gatsby'

import ocean3_gradient from '../images/ocean3_gradient.jpg';
import ocean3_gradient2 from '../images/ocean3_gradient_subwidth.jpg';
import oceanfloor from '../images/ocean_floor.jpg';
import ocean4 from '../images/ocean4.jpg'
import Team from "./team";
import styled from "styled-components";

let section2Image;


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default function IndexPage() {

    const size=useWindowSize();

    // console.log(size);

    useEffect(()=>{
        // console.log(size.width)
        section2Image = size.width > 1650 ? ocean3_gradient2 : ocean3_gradient
        // console.log(section2Image);
        return (section2Image)

    },[size])

        return (
            <Layout>
                <div>
                    <Hero
                        title={"Ocean Affinity @ Harvard University"}
                        size={"100vh"}
                        image={ocean3}
                        id={"hero1"}
                        position={'center'}>
                        <JoinButton to={'/join'}>
                            {/*<Link*/}
                            {/*    to={'/join'}*/}
                            {/*>*/}
                                Join
                            {/*</Link>*/}
                        </JoinButton>
                    </Hero>
                    <Hero
                        size={"100vh"}
                        image={ section2Image}
                        id={"hero2"}
                        position={'center'}

                    >
                        <MissionSection>
                            <SectionHeader> Connecting Oceans, Connecting People</SectionHeader>
                            <MissionDesc>
                                <p>Our mission is to bring together people, span programs, and highlight resources within the oceanic sciences community. Our goal is to catalyze connections between people from different fields or schools, break boundaries, and facilitate cross-disciplinary discussions, events, and grants.</p>
                                <p>By joining OAHU, you'll be contributing to and receiving support from a broad network of scientists, policy makers, humanitarians, historians, environmentalists, communicators, and general ocean-enthusiasts. This network only works because of the people that join and participate. </p>
                            </MissionDesc>
                        </MissionSection>
                    </Hero>

                    <Hero
                        titlepos={"top"}
                        size={"100vh"}
                        // image={ocean4}
                        color={"rgb(0,5,10)"}
                        id={"hero3"}
                        position={'center'}
                    >
                        <Team/>

                        {/*<div className="step" styles={{color: "white"}} data-step="a"> Hi</div>*/}
                        {/*<div className="step" data-step="b"> Hey</div>*/}
                        {/*<div className="step" data-step="c"> Holas</div>*/}
                        {/*{<Team/>}*/}


                    </Hero>
                    <Hero
                        titlepos={"top"}
                        size={"100vh"}
                        image={oceanfloor}
                        // color={"black"}
                        id={"hero4"}
                        position={'center'}
                    >
                        {/*<Contactus/>*/}

                        {/*<Team/>*/}

                        {/*<div className="step" styles={{color: "white"}} data-step="a"> Hi</div>*/}
                        {/*<div className="step" data-step="b"> Hey</div>*/}
                        {/*<div className="step" data-step="c"> Holas</div>*/}
                        {/*{<Team/>}*/}


                    </Hero>

                </div>
            </Layout>
        );
    // }
};

// export default IndexPage;

// const IndexPage = (fullpageProps) => (
//     <Layout>
//         <ReactFullpage
//             {...fullpageOptions}
//             render={({ state, fullpageApi }) => {
//
//                 return (
//                     <div id="fullpage-wrapper">
//                         <div className="section section1">
//                             <h3>Section 1</h3>
//                             <button onClick={() => {fullpageApi.moveSectionDown()}}>
//                                 Move down
//                             </button>
//                         </div>
//                         <div className="section section2">
//                             <h3>Section 1</h3>
//                             <button onClick={() => {fullpageApi.moveSectionUp()}}>
//                                 Move Up
//                             </button>
//                         </div>
//                         {/*<div id="fullpage-wrapper">*/}
//                         {/*<div className="section section1" data-menuanchor={"Home"}>*/}
//                         {/*    <Hero*/}
//                         {/*        title={"Connecting Oceans, Connecting People"}*/}
//                         {/*        size={"100vh"}*/}
//                         {/*        image={ocean3}*/}
//                         {/*        darkened*/}
//                         {/*        id={"hero1"}*/}
//
//                         {/*    />*/}
//                         {/*</div>*/}
//                         {/*<div className="section" data-menuanchor={"Mission"}>*/}
//                         {/*    <MissionSection>*/}
//                         {/*        <SectionHeader> We're all in this together</SectionHeader>*/}
//                         {/*        <MissionDesc>*/}
//                         {/*            <p>Our mission is to bring together people, span programs, and highlight resources within the oceanic sciences community. Beyond simply compiling a list of people, places, and grants, we also orchestrate cross-department as seminars and workshops.</p>*/}
//                         {/*            <p>By joining OAG, you'll be contributing to and receiving support from a broad network of scientists, policy makers, environmentalists, communicators, and general ocean-enthusiasts. This network only works because of the people that join and participate. </p>*/}
//                         {/*        </MissionDesc>*/}
//                         {/*    </MissionSection>*/}
//                         {/*</div>*/}
//                     {/*</div>*/}
//
//                     </div>
//                 )
//             }}
//         />
//     </Layout>
// )
//
//
// export default IndexPage;

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

const MissionSection=styled.div`
  //margin-top: 6vh;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  //align-content: center;
  //padding: 2em 2em;
  margin: auto;
  //background: linear-gradient(to bottom, rgb(0, 36, 73), rgba(0, 0, 0, 1));
  color: #fff;

  @media screen and (max-width: 768px) {
    height: 100vh;
    flex-flow: column wrap;
    justify-content: space-evenly;
  }
`

const SectionHeader=styled.h2`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3em;
  font-weight: bold;
  max-width: 30vw;

  @media screen and (max-width: 768px){
    text-align: center;
    justify-content: center;
  }

`

const MissionDesc=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  //align-content: center;
  max-width: 50vw;
  line-height: 1.6;
  height: 40vh;


  @media screen and (max-width: 768px){
    max-width: 80vw;
    text-align: center;
  }

`

const JoinButton = styled(Link)`
  font-size: 2em;
  color: white;
  margin: auto;
  margin-top: 5vw;
  text-align: center;
  background: none;
  min-width: 10vw;
  width: auto;
  padding: 1vh;
  background: rgba(255, 255, 255, 0.4);
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

// const EventsSection = styled.div`
//   background: black;
//   color: #fff;
//   height: auto;
//   min-height: 100vh;
//   padding-bottom: 5vh;
//   padding-top: var(--phone-nav-bar-height)
// `