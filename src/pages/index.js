import * as React from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ocean3 from '../images/ocean3.jpg';
import {useEffect} from "react";
import {Link} from 'gatsby'
import ocean3_gradient from '../images/ocean3_gradient.jpg';
import ocean3_gradient2 from '../images/ocean3_gradient_subwidth.jpg';
import oceanfloor from '../images/ocean_floor.jpg';
import Team from "../components/team";
import styled from "styled-components";
import {useWindowSize} from '../components/useWindowSize'
import HelmetComponent from "../components/Helmet";

let section2Image;

export default function IndexPage() {

    const size=useWindowSize();

    useEffect(()=>{
        section2Image = size.width > 1650 ? ocean3_gradient2 : ocean3_gradient
        return (section2Image)

    },[size])

        return (
            <Layout
                pageTitle={"OAHU Homepage"}
                pageContent={"Ocean Affinity @ Harvard University aims to bring together people in the community whose work touches on the ocean, to foster interdisciplinary collaborations, and to catalyze ideas into projects through grant support."}
            >
                <div>
                    <Hero
                        title={"Ocean Affinity @ Harvard University"}
                        size={"100vh"}
                        image={ocean3}
                        id={"hero1"}
                        position={'center'}
                        position2={'center'}>
                        <JoinButton to={'/join'} aria-label={'Join Button'}>
                                Join
                        </JoinButton>
                    </Hero>
                    <Hero
                        size={"100vh"}
                        image={ section2Image}
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
                        titlepos={"top"}
                        size={"100vh"}
                        // image={ocean4}
                        color={"rgb(0,5,10)"}
                        id={"hero3"}
                        position={'center'}
                        position2={'center'}
                    >
                        <Team/>
                    </Hero>
                    <Hero
                        titlepos={"top"}
                        size={"100vh"}
                        image={oceanfloor}
                        // color={"black"}
                        id={"hero4"}
                        position={'center'}
                        position2={'left'}
                    >
                    </Hero>

                </div>
            </Layout>
        );
    // }
};


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
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  :hover {
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    color: blue;
  }
`
