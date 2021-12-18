import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles/project-details.modules.css"
import { graphql } from "gatsby"
import styled from "styled-components";
import ocean3 from "../images/ocean3.jpg";
import nullImage from '../images/nullProfile.png'
import nullProfilePic from "../images/Null2.png";

export default function PeopleDetails({ data }){
    console.log(data)
    let personData=data.airtable.data
    // const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg)
    // const { html } = data.markdownRemark
    // const { title,date } = data.markdownRemark.frontmatter
    return (
        <Layout>

            <PersonPage image={ocean3} className={"details"}>
                <PersonBlock>
                    {personData.Image != null ?
                        <TeamPicture src={personData.Image}/>
                        :
                        null}

                     {/*<TeamPicture src={personData.Image === null ? nullProfilePic : personData.Image} alt={personData.Name}/>*/}
                    {/*</TeamPicture>*/}
                    <TeamMemberInfo>
                        <TeamName>{personData.Name}</TeamName>
                        <TeamTitle>{personData.Title}</TeamTitle>
                        <h3>{personData.University_Institute}</h3>
                        <p> {personData.About}</p>
                    </TeamMemberInfo>

                </PersonBlock>


                {/*    <h3>{date}</h3>*/}
                {/*    <div className={"featured"}>*/}
                {/*        <GatsbyImage image={featuredImage} alt="Banner" />*/}
                {/*    </div>*/}
                {/*    <div className={"htmlStyle"} dangerouslySetInnerHTML={{__html: html}} />*/}
            </PersonPage>
        </Layout>
    )
}

export const query = graphql`
  query People($slug: String) {
    airtable(data: { slug: { eq: $slug } }) {
        data {
          Name
          Keywords__csv_
          Image
          Email
          University_Institute
          Title
          Website
          Research_Focus
          About
        }
    }
  }
`

const PersonPage = styled.div`
  padding-top: var(--screen-nav-bar-height);
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 5vw;
  //padding-bottom: 10vw;
  background: url(${({image})=>(image ? image : null)});
  background-repeat: no-repeat;
  background-attachment: fixed;



  @media screen and (max-width: 900px){
    margin-top: 13vh;
    padding-top: 2vh;
  }
`

const PersonBlock = styled.div`
  margin-top: var(--screen-nav-bar-height);
  height: 60vh;
  width: 70vw;
  //background-color: aquamarine;
  display: flex;
  border-radius: 5pt;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 7vh;
  background: rgba(0,0,0,0.7);

  @media screen and (max-width: 886px){
    flex-flow: column wrap;
    width: 90vw;
    align-content: center;
    align-items: center;
  }

  //.teamBlock:nth-child(2n){
  //  flex-direction:row-reverse;
  //  background-color: #acacac;
  // 
`

const TeamPicture = styled.img`
  object-fit: cover;
  //display: flex;
  //justify-content: center;
  border-radius: 5pt 0 0 5pt;
  width: 30vw;
  height: 60vh;
  //max-width: 3
  // 0vw;
  //max-width: 40vw;
  //margin-right: 1vw;
  //margin-left: 1vw;

  @media screen and (max-width: 900px){
    height: 40vh;
    align-content: center;

    border-radius: 5pt;
    
  }
`

const TeamMemberInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30vw;
  align-content: center;
  justify-content: center;
  color: white;
  margin: auto auto;
  //text-justify: center;

  @media screen and (max-width: 900px){
    width: 80vw;
    flex-flow: column wrap;

    text-align: center;
  }
`

const TeamName = styled.h2`
  font-size: 4em;
  margin-bottom: 1vw;
`

const TeamTitle = styled.h3`
  font-size: 2.5em;
  margin-bottom: 1vw;
`