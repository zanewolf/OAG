import React from 'react'
import Layout from "../components/Layout";
import styled from 'styled-components'
import {graphql} from "gatsby";
import ocean from "../images/ocean3.jpg";
import ocean2 from '../images/ocean5.png'
import waves from '../images/waves.png'

export default function News({data}) {

    console.log({data})
    return (
        <Layout>
            <NewsPage >
                <NewsContent>
                    <NewsHeader className="masthead" role="img" aria-label="Image Description">
                            <h1>
                                Oceanic News Sources
                            </h1>
                        <p>
                            This is a collection of ocean-related news organizations, so you can stay up-to-date on what's happening around the globe.
                        </p>
                    </NewsHeader>
                    <NewsSection>
                        {data && data.allAirtable.nodes.map((node,i)=>{
                            return (
                                <NewsBlock className={"child"}>
                                    <li key={i}>
                                        <a href={node.data.Link}>{node.data.Source}</a>
                                    </li>
                                </NewsBlock>
                            )
                        })}
                    </NewsSection>
                </NewsContent>
                <WavesImage image={waves}></WavesImage>
            </NewsPage>
        </Layout>
    )
}

export const query = graphql`
    query NewsSources {
        allAirtable(filter: {table: {eq: "News"}}) {
            nodes {
                data {
                    Link
                    Source
                }   
            }
        }
    }
`

const NewsPage = styled.div`
    //position: absolute;
    width: 100vw;
    min-height: 100vh;
    ////min-height: 98vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
  
`

const NewsContent = styled.div`
  //margin-top: var(--screen-nav-bar-height);
  //height: auto;
  //min-height: 80vh;
`

const NewsHeader = styled.section`
  //margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    height: 30vh; /* if you don't want it to take up the full screen, reduce this number */
    overflow: hidden;
    margin: 2vw;
  
  h1 {
    font-style: normal;
    font-weight: 700;
    color: #000;
    font-size: 5em;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    //margin-bottom: 48px;
  }
  
  p{
    padding: 2vh;
    font-style: normal;
    font-size: 1.5em;
    font-weight: 100;
  }

`

const NewsSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 2vw;
  margin-top: 3vh;
  margin-left: 10vw;
  margin-right:10vw;
  
  .child {
    flex: 1 0 21%;
    z-index: 10000;
  }
  
`

const NewsBlock = styled.div`
  width: 175pt;
  max-width: 175pt;
  height: 75pt;
  background: #005D86;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  margin: auto;
  text-align: center;


  a {
    font-size: 1.5em;
    color: white;
    font-weight: 200;
  }
  
  :hover{
    background: #40b325;
  }

`

const WavesImage = styled.div`
  width: 100%;
  height: 40vh;
  background: ${({image})=>(`url(${image}) center center/cover no-repeat`)};
  bottom: 0;
  position: absolute;
  z-index: -1000;
`

