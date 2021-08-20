import React from "react"
import {Link, graphql, useStaticQuery} from 'gatsby'
import * as styles from '../styles/global.css'
import {FaBars} from 'react-icons/fa'
import {menuData} from '../data/MenuData'
import SideMenu from "./SideMenu";
import styled from "styled-components";

let activeStyle = {
    color: 'rgb(255,255,255)',
    fontWeight: 'bold'
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
                <div className={"links"}>
                    {menuData.map((item, index)=>(
                        <Link to={item.link} className={"menu-links"} key={index} activeStyle={activeStyle}>{item.title}</Link>
                    ))}
                </div>
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
