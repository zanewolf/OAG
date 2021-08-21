import * as React from 'react'
// import {useRef} from 'react'
// import { Link } from 'gatsby'
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ocean from '../images/ocean2.jpg';
import {Button} from "../components/Button";
import styled from "styled-components";

export default function IndexPage({data}){


    return (
        <Layout pageTitle="Home Page">
            {/*<section ref={scrollRef}>*/}
                <Hero
                    title={"Connecting Oceans, Connecting People"}
                    size={"100vh"}
                    image={ocean}
                    darkened
                    id={"hero1"}

                >
                    <div className={"hero-btns"}>
                        <Button fontBig big primary> Join Now</Button>
                    </div>
                </Hero>
                <MissionSection>
                    <SectionHeader> We're all in this together</SectionHeader>
                    <MissionDesc>Our mission is to bring together people, span programs, and highlight resources within the oceanic sciences community. Beyond simply compiling a list of people, places, and grants, we also orchestrate cross-department as seminars and workshops.
                    </MissionDesc>
                {/*<Hero*/}
                {/*    title={"Bringing People Together"}*/}
                {/*    size={"90vh"}*/}
                {/*    id={"hero2"}*/}
                {/*>*/}
                {/*    /!*<div className={"hero-btns"}>*!/*/}
                {/*    /!*    <Button fontBig big primary> Join Now</Button>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</Hero>*/}
                </MissionSection>
            {/*</section>*/}
        </Layout>
    )
}

const MissionSection=styled.div`
  //margin-top: 6vh;
  height: 50vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  //align-content: center;
  padding: 2em 2em;
  margin: auto;

  @media screen and (max-width: 768px){
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
    max-width: 80vw;
    text-align: center;
    justify-content: center;
  }

`

const MissionDesc=styled.p`
  display: flex;
  justify-content: right;
  align-content: center;
  flex-wrap: wrap;
  max-width: 50vw;

  @media screen and (max-width: 768px){
    max-width: 80vw;

    text-align: center;
  }

`