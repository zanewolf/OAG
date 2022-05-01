import * as React from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import ocean3 from '../images/ocean3.jpg';
import {useEffect} from "react";
import {Link,graphql, useStaticQuery} from 'gatsby'
// import ocean3_gradient from '../images/ocean3_gradient.jpg';
// import ocean3_gradient2 from '../images/ocean3_gradient_subwidth.jpg';
// import oceanfloor from '../images/ocean_floor.jpg';
import Team from "../components/team";
import styled from "styled-components";
import {useWindowSize} from '../components/useWindowSize'
import HelmetComponent from "../components/Helmet";

let section2Image;

export default function IndexPage() {

    const size=useWindowSize();

    const {
        ocean3,
        ocean3_gradient,
        ocean3_gradient2,
        oceanfloor,
        blackbg
    } = useStaticQuery(
        graphql`
      query {
        ocean3: file(relativePath: { eq: "ocean3.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ocean3_gradient: file(
          relativePath: { eq: "ocean3_gradient.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ocean3_gradient2: file(
          relativePath: { eq: "ocean3_gradient_subwidth.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        oceanfloor: file(
          relativePath: { eq: "ocean_floor.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }  
        blackbg: file(
          relativePath: { eq: "blackbg.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }        
      }
    `
    )
    //
    // const imageData = ocean3_gradient2.childImageSharp.fluid
    console.log(ocean3_gradient, ocean3_gradient2)




    useEffect(()=>{
        section2Image = size.width > 1100 ? ocean3_gradient2.childImageSharp.fluid : ocean3_gradient.childImageSharp.fluid
        return (section2Image)

    },[size])

        return (
            <Layout
                pageTitle={"OAHU Homepage"}
                pageContent={"Ocean Affinity @ Harvard University aims to bring together people in the community whose work touches on the ocean, to foster interdisciplinary collaborations, and to catalyze ideas into projects through grant support."}
            >
                <div>
                    <Hero
                        // title={"Ocean Affinity @ Harvard University"}
                        size={"100vh"}
                        image={ocean3.childImageSharp.fluid}
                        id={"hero1"}
                        position={'center'}
                        position2={'center'}
                    >
                        <LandingScreen>
                            <HeroH1> Ocean Affinity @ Harvard University</HeroH1>
                            <JoinButton to={'/join'} aria-label={'Join Button'}>
                                Join
                            </JoinButton>
                        </LandingScreen>
                    </Hero>
                    <Hero
                        size={"100vh"}
                        image={ ocean3_gradient2.childImageSharp.fluid}
                        id={"hero2"}
                        position={'center'}
                        position2={'center'}
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
                        // image={blackbg.childImageSharp.fluid}
                        image={oceanfloor.childImageSharp.fluid}
                        size={"100vh"}
                        // color={"rgb(0,5,10)"}
                        id={"hero3"}
                        position={'center'}
                        position2={'left'}
                    >
                        <Team/>
                    </Hero>
                    {/*<Hero*/}
                    {/*    size={"100vh"}*/}
                    {/*    image={oceanfloor.childImageSharp.fluid}*/}
                    {/*    // color={"black"}*/}
                    {/*    id={"hero4"}*/}
                    {/*    position={'center'}*/}
                    {/*    position2={'left'}*/}
                    {/*>*/}
                    {/*</Hero>*/}

                </div>
            </Layout>
        );
    // }
};
const LandingScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  color: #fff;

  @media screen and (max-width: 768px) {
    //height: 100vh;
    flex-flow: column nowrap;
    justify-content: center;
  }
`
const HeroH1 = styled.h1`
  //background-color: #0a6699;
  font-size:var(--size-48);
  margin: auto 2vw;
  text-align: center;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  
`
const MissionSection=styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
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
  font-size: var(--size-50);
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
  font-size: var(--size-32);
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
  z-index: 10;

  :hover {
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    //color: blue;
  }
`
