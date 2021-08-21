import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import * as styles from '../styles/global.css'
import {FaBars} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import SideMenu from "./SideMenu";
import styled from "styled-components";
import {Button} from "./Button";

let activeStyle = {
    color: 'rgb(255,255,255)',
    fontWeight: 700,
    borderBottom: `1px solid #fff`
}

export default function Navbar() {

    const [sideMenu, setSideMenu] = React.useState(false)

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


    if (sideMenu === false){
        return (
            // <div className={}>
            <nav>
                <Link className={"website-title"} to={"/"}>{title}</Link>
                <Link className={"website-title-small"} to={"/"}>OAG</Link>
                <MenuButtons>
                    <MenuLinks>
                        {menuData.map((item, index)=>(
                            <NavLink to={item.link} key={index} activeStyle={activeStyle}>{item.title}</NavLink>
                        ))}
                    </MenuLinks>
                    <NavBtn>
                        <Button primary>Join Now</Button>
                    </NavBtn>
                </MenuButtons>
                <button onClick={toggleSideMenu} className={"burger-bars"}><FaBars/></button>
            </nav>
        )
        // </div>
    } else {
        return (
            <SideMenu
                toggleSideMenu={toggleSideMenu}
                title={title}
            />
        )
    }
}

const MenuButtons = styled.div`
  display: flex;
  width: auto;
  flex-flow: row nowrap;
  text-transform: uppercase;
  justify-content: space-evenly;
  
  @media screen and (max-width: 1096px){
    display: inline-flex;
    justify-content: center;
  }
`
const MenuLinks = styled.div`
  display: flex;
  //flex-flow: row nowrap;
  position: relative;
  //margin-right: 1vw;

  
  @media screen and (max-width: 860px){
    display: none;
  }

`

const NavLink = styled(Link)`
  color: #ddddde;
  text-align: center;
  margin: auto 0.5vw;
  z-index: 1000;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    transition: 0.5s;
    font-weight: 700;
  }

`
const NavBtn=styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: auto;
  margin: auto;
  
  @media screen and (max-width: 1096px){
    display: flex;
    justify-content: center;
    align-content: center;
    width: auto;
  }
`


