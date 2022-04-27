import React from 'react'
import Layout from "../components/Layout";
import styled from 'styled-components';
import oceanpic from '../images/rocky-shore-of-the-island-of-tenerife-aerial-dron-2021-08-27-09-58-20-utc.jpg'



export default function UndergradPage() {

    return (
        <Layout
            pageTitle={'For Undergrads'}
            pageContent={'Information about how undergraduate students can become involved in marine science research at Harvard.'}

        >
            <ContentPage image={oceanpic}>
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

const ContentPage = styled.div`
  width: 100%;
  min-height: 95vh;
  height: auto;
  padding-top: var(--screen-nav-bar-height);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: ${({image})=>(image ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${image}) center center/cover no-repeat` : 'white')};

`
const Content = styled.div`
  //margin-top: var(--screen-nav-bar-height);
  margin-left: auto;
  margin-right: 5vw;
  margin-top: 10vh;
  display: flex;
  height: 70vh;
  width: 45vw;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(3, 3, 3, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
`
const ContentHeader = styled.h1`
  color: white;
  margin: 5vh 0 10vh 0;
  
`

const ContentParagraph = styled.p`
  color: white;
  width: 40vw;
  margin-bottom: 5vh;
  line-height: 1.6;
  
`

