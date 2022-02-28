import React from 'react'
import Layout from "../components/Layout";
import styled from 'styled-components'
import {graphql} from "gatsby";
import ocean from "../images/ocean3.jpg";
import ocean2 from '../images/ocean5.png'

export default function News({data}) {

    console.log({data})
    return (
        <Layout>
            <NewsPage image={ocean2}>
                <NewsContent>
                    <NewsHeader><h1> Oceanic News</h1></NewsHeader>
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
    background: ${({image})=>(`url(${image}) center center/cover no-repeat`)};
    position: absolute;
    width: 100%;
    height: 96vh;
    ////min-height: 98vh;
    //height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
  
`

const NewsContent = styled.div`
  margin-top: var(--screen-nav-bar-height);
`

const NewsHeader = styled.h1`
  margin-top: 5vh;
  color: white;
  -webkit-text-stroke-color: black;
`

const NewsSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 2vw;
  
  .child {
    flex: 1 0 21%;
  }
  
`

const NewsBlock = styled.div`
  width: 150pt;
  max-width: 150pt;
  height: 50pt;
  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  margin: auto;

  
  a {
    font-size: 1.5em;
    color: white;
    font-weight: 200;
  }
  
`

