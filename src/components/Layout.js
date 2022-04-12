import * as React from 'react';
import Navbar from "./Navbar";
import '../styles/global.css'
import {graphql, Link, useStaticQuery} from "gatsby";
import {FaTwitter} from "react-icons/all";
import {HiOutlineMail} from 'react-icons/hi'
import styled from "styled-components";
import HelmetComponent from "./Helmet";
import {Helmet} from "react-helmet";



const Layout = ({ pageTitle, pageContent,children }) => {

    const data = useStaticQuery(graphql`
      query SiteInfo2 {
        site {
          siteMetadata {
            contact
          }
        }
      }
    `)

    const copy =  () => {
        // console.log(email)
        navigator.clipboard.writeText(data.site.siteMetadata.contact);
        alert('Email address copied');
    }
    // console.log(data)

    return (
        <div className={"layout"}>
            <HelmetComponent
                title={pageTitle}
                content={pageContent}
            />
            <Navbar/>
            <div className={"content"}>
                {children}
            </div>
            <footer>
                    <div className={"footer-links-left"}>
                        <Link to={"/join"} style={{color: "white"}}>
                            Join
                        </Link>
                    </div>
                    <div className={"footer-links-right"}>
                        <EmailButton title = "Click to copy email"
                                     aria-label={"Email OAHU Button"}
                                     onClick={()=>copy()} >
                            {<HiOutlineMail/>}
                        </EmailButton>
                        <EmailButton
                            aria-label={"OAHU Twitter Button"}
                            url={"https://twitter.com/ocean_affinity"}
                            style={{color: "white"}}>
                            {<FaTwitter/>}
                        </EmailButton>

                    </div>
            </footer>
        </div>
    )
}
export default Layout

const EmailButton = styled.button`
  background-color: rgba(0,0,0,0);
  //width: 5vw;
  font-size: 1.5em;
  border: none;
  margin: auto;
  color: white;
  //border-right: 2px solid #828282
  //display: inline-block;
  //vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    //content: attr(title);
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
    
  }
  &:hover:before {
    opacity: 1;
    visibility: visible;
  }

  &:hover{
    font-weight: bolder;
    transition: 0.5s;
    //color: purple;
    -webkit-transform: scale(1.3) translateZ(0);
    transform: scale(1.3) translateZ(0);
  }

  @media screen and (max-width: 900px) {
    font-size: 1.5em;
    //margin: 1vh;
  }
`