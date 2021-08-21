import React from 'react'
import {menuData} from "../data/MenuData";
import {Link} from "gatsby";
import {FaBars} from "react-icons/fa";
import '../styles/global.css'

let activeStyle = {
    color: 'rgb(255,255,255)',
    fontWeight: 'bold'
}

export default function SideMenu({toggleSideMenu, title}){
    return (
        <nav>
            {/*<label className={"website-title"} to={"/"}>{title}</label>*/}
            {/*<Link className={"website-title-small"} to={"/"}>OAG</Link>*/}
            <div className={"sideMenuLinks"}>
                {menuData.map((item, index)=>(
                    <Link to={item.link} key={index} activeStyle={activeStyle}>{item.title}</Link>
                ))}
            </div>
            <button onClick={toggleSideMenu} className={"burger-bars"}><FaBars/></button>
        </nav>
    )

}