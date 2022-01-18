import * as React from 'react';
import Navbar from "./Navbar";
import '../styles/global.css'

const Layout = ({ pageTitle, children }) => {

    return (
        <div className={"layout"}>
            <Navbar/>
            <div className={"content"}>
                {children}
            </div>
            {/*<div className={"portal"}>*/}
            {/*</div>*/}
            {/*<footer>*/}
            {/*    <p> Copyright 2021 Zane Wolf</p>*/}
            {/*</footer>*/}
        </div>
    )
}
export default Layout