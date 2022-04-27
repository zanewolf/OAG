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
  z-index: 999999;
  width: 100vw;
  //overflow-x: hidden;
  height: auto;
  padding:0.5rem 0.8rem;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  
  @media screen and (max-width: 1045px){
    height: var(--phone-nav-bar-height);
    min-height: 80px;
  }
  
  @media screen and (max-width: 400px){
    min-height: 80px;
  }
  

  @media (orientation:landscape){
    min-height: 28px;
    padding: 1vh;
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
  font-size: var(--size-64);
  font-weight: 700;
  color: white;
  cursor: pointer;
  align-content: center;
  text-align: center;
  
  @media screen and (max-width: 940px){
    display: block;
    font-size: var(--size-56);

  }
  
  @media screen and (max-height: 785px){
    font-size: var(--size-56);
  }
  
  @media (orientation: landscape) and (max-width: 915px) and (max-height: 412px){
    font-size: var(--size-28);
  }

  //@media screen and (max-width: 540px){
  //  display: block;
  //  font-size: 3em;
  //
  //
  //}

  //@media (orientation:landscape) and (max-width: 940px){
  //  display: block;
  //  font-size: 1em;
  //}

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
  z-index: 999999;

  @media screen and (max-width: 1045px) {
    display: none;
  }

  &.sideMenu {
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    font-size: var(--size-32);
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


    @media (orientation: landscape) {
      margin-top: 5vh;
    }

    
  }

`
const NavLink = styled(Link)`
  color: #ddddde;
  text-align: center;
  margin: auto 0.5vw;
  z-index: 1000;
  cursor: pointer;
  font-weight: 500;
  font-size: var(--size-20);

  &:hover {
    transition: 0.5s;
    font-weight: 700;
  }
  
  &.sideMenu{
    margin: 4vw;
    font-size: var(--size-32);

    @media screen and (max-width: 940px) {
      font-size: var(--size-32);
    }

    @media screen and (max-width: 420px) {
      font-size: var(--size-24);
    }


    @media (orientation: landscape) {
      font-size: var(--size-20);
      margin: 1vh;
    }
    
    
  }

`



const NavBurger = styled.div`
  display: none;
  color: #fff;
  font-size:var(--size-32);
  
  
  @media screen and (max-width: 1045px){
    display: flex;
    margin: auto 2vw;
    
  }

  @media screen and (max-width: 900px){
    font-size: var(--size-24);

  }

  @media (orientation: landscape) and (max-height: 500px){
    font-size: var(--size-16);
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

