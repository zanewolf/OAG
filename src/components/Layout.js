import * as React from 'react'
import {useStaticQuery, graphql, Link } from 'gatsby'
import * as styles from '../styles/global.css'
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {

    return (
        <div className={"layout"}>
            <Navbar/>
            <div className={"content"}>
                {children}
            </div>
            <footer>
                <p> Copyright 2021 Zane Wolf</p>
            </footer>
        </div>
    )
}
export default Layout