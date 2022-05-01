import React from 'react'
import Layout from "../components/Layout";
import styled from 'styled-components';
import oceanpic from '../images/rocky-shore-of-the-island-of-tenerife-aerial-dron-2021-08-27-09-58-20-utc.jpg'
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from "gatsby";


export default function UndergradPage() {

    const data = useStaticQuery(
        graphql`
          query {
            desktop: file(relativePath: { eq: "rocky-shore-of-the-island-of-tenerife-aerial-dron-2021-08-27-09-58-20-utc.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
    )

    // Set ImageData.
    const imageData = data.desktop.childImageSharp.fluid
    // console.log(data)

    return (
        <Layout
            pageTitle={'For Undergrads'}
            pageContent={'Information about how undergraduate students can become involved in marine science research at Harvard.'}

        >
            <ContentPage fluid={imageData} >
                <Content>
                    <ContentHeader>
                        Information for Undergraduate Students
                    </ContentHeader>
                    <ContentParagraph>
                        Undergraduate students are vital members of our research community. Classes like Deep Sea Biology (OEB 119) and Marine Biology (OEB ) show that the appetite for opportunities in marine sciences is high. We want to ensure that undergraduates are able to connect with scholars in these fields and start conducting meaningful research.
                    </ContentParagraph>
                    <ContentParagraph>
                        To help undergraduates understand marine science research and begin acquiring research skills, we will begin offering a workshop at the beginning of each semester, starting Fall 2022. In this workshop, we will address common questions and concerns regarding research, and outline several ways to find and join labs that pique your interest.
                    </ContentParagraph>
                    <ContentParagraph>
                        We will continue to develop promising opportunities for undergraduates, including creating a semester-long Marine Science Research course where students can learn essential skills and conduct a small research project of their own.
                    </ContentParagraph>
                </Content>

            </ContentPage>
        </Layout>
    )
}

const ContentPage = styled(BackgroundImage)`
  width: 100%;
  min-height: 95vh;
  height: auto;
  padding-top: var(--screen-nav-bar-height);
  background-repeat: no-repeat;
  background-attachment: fixed;
  
`
const Content = styled.div`
  //margin-top: var(--screen-nav-bar-height);
  margin-left: auto;
  margin-right: 5vw;
  margin-top: 10vh;
  margin-bottom: auto;
  display: flex;
  height: 70vh;
  width: 45vw;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 8px 32px 0 rgba(3, 3, 3, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  padding-bottom: 2vh;
  
  @media screen and (max-width: 1600px){
    width: 60vw;
  }

  @media screen and (max-width: 1200px){
    width: 70vw;
    height: auto;
  }


  @media screen and (max-width: 600px){
    width: 90vw;
  }
`
const ContentHeader = styled.h1`
  color: white;
  margin: 5vh 0 10vh 0;
  
  @media screen and (max-width: 1050px){
    margin: 5vh;
    tex-align: center;
    
  }
  
`

const ContentParagraph = styled.p`
  color: white;
  //width: 40vw;
  width: 90%;
  margin-bottom: 5vh;
  line-height: 1.6;
  
`

