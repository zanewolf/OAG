import * as React from 'react';
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {

    return (
        <div className={"layout"}>
            <Navbar/>
            <div className={"content"}>
                {children}
            </div>
            {/*<footer>*/}
            {/*    <p> Copyright 2021 Zane Wolf</p>*/}
            {/*</footer>*/}
        </div>
    )
}
export default Layout