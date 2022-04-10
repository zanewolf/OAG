import React from "react";
import {Link, graphql, useStaticQuery} from 'gatsby';
import {FaBars, FaTimes} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import styled from "styled-components";

// import * as styles from '../styles/global.css'

let activeStyle = {
    color: 'rgb(255,255,255)',
    fontWeight: 700,
    // borderBottom: `1px solid #fff`
}



export default function Navbar() {

    const [sideMenu, setSideMenu] = React.useState(false)
    // console.log(sideMenu)

    const toggleSideMenu = () => setSideMenu((sideMenu) => sideMenu === true? false: true)

    //can only use useSQ hook once inside component
    const data = useStaticQuery(graphql`
      query SiteInfo {
        site {
          siteMetadata {
            title
           
          }
        }
      }
    `)

    const { title } = data.site.siteMetadata



    // if (sideMenu === false){
        return (
            // <div>
                <NavWrapper>
                    <NavTitle className={"website-title"} to={"/"}>{title}</NavTitle>
                    <NavTitleSmall className={"website-title-small"} to={"/"}>OAHU</NavTitleSmall>
                    {/*<NavInput type={"checkbox"} name={""} id={"check"}/>*/}

                    <MenuWrapper >
                        <MenuLinks  className={sideMenu === true? "sideMenu": ""}>
                            {menuData.map((item, index)=>(
                                <NavLink
                                    className={sideMenu === true? "sideMenu": ""}
                                    to={item.link} key={index}
                                    onClick = {sideMenu === true? toggleSideMenu: null}
                                    activeStyle={activeStyle}>{item.title}
                                </NavLink>
                            ))}
                        </MenuLinks>
                        <NavBurger>
                            <NavButton navburger fontBig onClick={toggleSideMenu} aria-label={"Navigation Menu Button"} >
                                {sideMenu === true? <FaTimes/>: <FaBars/>}
                                {/*<NavBars/>*/}
                            </NavButton>
                        </NavBurger>
                    </MenuWrapper>
                </NavWrapper>

        )
}

const NavWrapper= styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  padding:0.5rem 0.8rem;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  
  @media screen and (max-width: 1045px){
    height: var(--phone-nav-bar-height);
  }
`
const NavTitle=styled(Link)`
  display: flex;
  font-size: 2em;
  font-weight: 800;
  color: white;
  align-content: center;
  align-items: flex-start;
  margin: auto 2vw;
  cursor: pointer;
  
  @media screen and (max-width: 940px){
    display: none;
    //content: "OAG";

    
  }
`
const NavTitleSmall = styled(Link)`
  display: none;
  font-size: 4em;
  font-weight: 700;
  color: white;
  cursor: pointer;
  align-content: center;
  text-align: center;
  
  @media screen and (max-width: 940px){
    display: block;

  }

  @media screen and (max-width: 540px){
    display: block;
    font-size: 3em;


  }

  //@media screen and (max-width: 360px){
  //  display: block;
  //  font-size: 3em;
  //}
`

const MenuWrapper = styled.div`
  display: flex;
  width: auto;
  flex-flow: row nowrap;
  text-transform: uppercase;
  justify-content: space-evenly;
  padding-right: 2vw;

  
  @media screen and (max-width: 1096px){
    display: flex;
    justify-content: space-between;
  }

`
const MenuLinks = styled.div`
  display: flex;
  position: relative;

  @media screen and (max-width: 1045px) {
    display: none;
  }

  &.sideMenu {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2em;
    margin-top: var(--phone-nav-bar-height);
    width: 100vw;
    height: 100vh;
    background-color: #025cee;
    overflow-wrap: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
    
  }

`
const NavLink = styled(Link)`
  color: #ddddde;
  text-align: center;
  margin: auto 0.5vw;
  z-index: 1000;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.25em;

  &:hover {
    transition: 0.5s;
    font-weight: 700;
  }
  
  &.sideMenu{
    margin: 4vw;
    font-size: 2em;

    @media screen and (max-width: 940px) {
      font-size: 2em
    }

    @media screen and (max-width: 420px) {
      font-size: 1.5em
    }
  }

`



const NavBurger = styled.div`
  display: none;
  color: #fff;
  font-size:2em;
  
  
  @media screen and (max-width: 1045px){
    display: flex;
    margin: auto 2vw;
    
  }
`
const NavButton = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 8px;
  white-space: nowrap;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover{
    transition: all 0.3s ease-out;
    transform: scale(1.05) translateZ(0);
  }
`

