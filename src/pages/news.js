import React from 'react'
import Layout from "../components/Layout";
import styled from 'styled-components'
import {graphql} from "gatsby";
import ocean3 from '../images/ocean3.jpg';

export default function News({data}) {

    return (
        <Layout
            pageTitle={"Ocean News"}
            pageContent={"A collection of ocean-related news sources."}
        >
            <NewsPage image={ocean3} >
                <NewsContent>
                    <NewsHeader className="masthead" role="img" aria-label="Image Description">
                            <h1>
                                Get Your Ocean News Here!
                            </h1>
                        <p>
                            For now, we're sharing links of some sites about the ocean at large, places where you can stay up-to-date on ocean-related happenings. The list is always growing - please send us content suggestions.
                        </p>
                    </NewsHeader>
                    <NewsSection>
                        {data && data.allAirtable.nodes.map((node,i)=>{
                            return (
                                <NewsBlock className={"child"} key={i}>
                                    <li key={i}>
                                        <a className= 'button' href={node.data.Link} target="_blank" rel={"noreferrer"}>
                                            <span>{node.data.Source}</span>
                                        </a>
                                    </li>
                                </NewsBlock>
                            )
                        })}
                    </NewsSection>
                </NewsContent>
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
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
     background: ${({image})=>(image ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${image}) center center/cover no-repeat` : 'white')};
    //background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),url(${({image})=>(image ? image : null)});

  @media screen and (max-width: 1045px){
    //height:90vh;
    
  }

`

const NewsContent = styled.div`
  margin-top: var(--screen-nav-bar-height);
  //height: auto;
  //min-height: 80vh;
  height: auto;
  //margin-top: var(--screen-nav-bar-height);

  @media screen and (max-width: 1045px){
    margin-top: var(--phone-nav-bar-height);
  }
  
`

const NewsHeader = styled.section`
    margin-top: -4.6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    height: 30vh; /* if you don't want it to take up the full screen, reduce this number */
    overflow: hidden;
    //margin: 2vw;
    background: rgba(0,0,0,0.3);
    //box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    //border-radius: 20px;
    //border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 1700px){
    margin-top: -0.5vh;
  }

  @media screen and (max-width: 1045px){
    margin-top: -0vh;
  }
  
  h1 {
    font-style: normal;
    font-weight: 700;
    color: #fff;
    font-size: 4em;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);

    @media screen and (max-width: 1400px){
      font-size: 3em;
    }
    @media screen and (max-width: 1045px){
      font-size: 2em;
    }

    @media screen and (max-width: 500px){
      font-size: 1.5em;
    }
    //margin-bottom: 48px;
  }
  
  p{
    padding: 2vh;
    margin-top: 2vh;
    font-style: normal;
    font-size: 1.5em;
    font-weight: 400;
    width: 80vw;
    color: #fff;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    //background: rgba(255,255,255,0.4);
    //box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    //backdrop-filter: blur(4px);
    //-webkit-backdrop-filter: blur(4px);
    //border-radius: 20px;
    //border: 1px solid rgba(255, 255, 255, 0.18);

    @media screen and (max-width: 1400px){
      font-size: 1.5em;
    }
    @media screen and (max-width: 500px){
      font-size: 1em;
    }
  }

`

const NewsSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 4vh 4vh;
  gap: 2vw;
  //margin-top: 3vh;
  //margin-left: 10vw;
  //margin-right:10vw;
  //margin-bottom: 10vw;
  
`

const NewsBlock = styled.div`
  //border-radius: 50px;
  //background: #ffffff;
  //box-shadow: 36px 36px 71px #d9d9d9,
  //  -36px -36px 71px #ffffff;
  //width: 175pt;

  //display: flex;
  //flex-flow: column nowrap;
  //justify-content: center;
  //align-content: center;
  //margin: auto;
  //text-align: center;


  a.button {
    -webkit-appearance: button;
    -moz-appearance: button;
    //appearance: button;
    width: 275pt;
    height: 75pt;
    //margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: auto;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 8px 32px 0 rgba(3, 3, 3, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 20px;
    //border: 1px solid rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease-in-out;
    color: white;

    @media only screen and (max-width: 955px) {
      width: 70vw;
    }


    span {
      display: block;
      margin: auto;
      justify-content: center;
      align-content: center;
      text-align: center;
      line-height: 1em;
      font-size: 1.5em;
      font-weight: 400;


    }

    text-decoration: none;

  }

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
  }

`
