import React from "react";
import {Link, graphql, useStaticQuery} from 'gatsby';
import {FaBars, FaTimes} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import styled from "styled-components";
import {Button} from "./Button";

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
                    <NavTitleSmall className={"website-title-small"} to={"/"}>OAG</NavTitleSmall>
                    {/*<NavInput type={"checkbox"} name={""} id={"check"}/>*/}

                    <MenuWrapper >
                        <MenuLinks  className={sideMenu === true? "sideMenu": ""}>
                            {menuData.map((item, index)=>(
                                <NavLink className={sideMenu === true? "sideMenu": ""} to={item.link} key={index} onClick = {sideMenu === true? toggleSideMenu: null} activeStyle={activeStyle}>{item.title}</NavLink>
                            ))}
                        </MenuLinks>
                        <NavBurger>
                            <Button navburger fontBig onClick={toggleSideMenu}>
                                {sideMenu === true? <FaTimes/>: <FaBars/>}
                                {/*<NavBars/>*/}
                            </Button>
                        </NavBurger>
                    </MenuWrapper>

                    {/*<div className={sideMenu===true? "sideBar": ""}>*/}
                    {/*    <MenuLinks>*/}
                    {/*        {menuData.map((item, index)=>(*/}
                    {/*            <NavLink to={item.link} key={index} activeStyle={activeStyle}>{item.title}</NavLink>*/}
                    {/*        ))}*/}
                    {/*    </MenuLinks>*/}
                    {/*</div>*/}
                    {/*<button onClick={toggleSideMenu} className={"burger-bars"} id ="burgar-btns"><FaBars/></button>*/}
                </NavWrapper>

        )
        // </div>
    // } else {
    //     return (
    //         <div>
    //             <NavWrapper>
    //                 {/*<Link className={"website-title"} to={"/"}>{title}</Link>*/}
    //                 <NavTitleSmall className={"website-title-small"} to={"/"}>OAG</NavTitleSmall>
    //                     <JoinButton>
    //                         <Button primary onClick={(e)=>{
    //                             e.preventDefault();
    //                             window.open(airTableForm);
    //                         }}>
    //                             Join Now
    //                         </Button>
    //                     </JoinButton>
    //                 <button onClick={toggleSideMenu} className={"burger-bars"}><FaTimes/></button>
    //             </NavWrapper>
    //             <SideMenu toggleSideMenu={toggleSideMenu}>
    //                 <MenuLinks>
    //                     {menuData.map((item, index)=>(
    //                         <NavLink to={item.link} key={index} activeStyle={activeStyle}>{item.title}</NavLink>
    //                     ))}
    //                 </MenuLinks>
    //             </SideMenu>
    //         </div>
    //     )
    // }
}

const NavWrapper= styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: auto;
  padding:0.5rem 0.8rem;
  background: rgba(0,0,0,0.4);
  
  @media screen and (max-width: 940px){
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

  @media screen and (max-width: 1024px) {
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
  
  
  @media screen and (max-width: 1024px){
    display: flex;
    margin: auto 2vw;
    
  }
`


