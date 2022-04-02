import * as React from 'react';
import Navbar from "./Navbar";
import '../styles/global.css'
import {Link} from "gatsby";
import {FaExternalLinkAlt,FaInstagram,FaTwitter} from "react-icons/all";

const Layout = ({ pageTitle, children }) => {

    return (
        <div className={"layout"}>
            <Navbar/>
            <div className={"content"}>
                {children}
            </div>
            {/*<div className={"portal"}>*/}
            {/*</div>*/}
            {/*<hr/>*/}
            <footer>

                {/*<div className={"footer-wrapper"} style={{color: "white"}}>*/}
                    <div className={"footer-links-left"}>
                        <Link to={"/contactus"} style={{color: "white"}}>
                            Contact Us
                        </Link>
                        <Link to={"/join"} style={{color: "white"}}>
                            Join
                        </Link>
                    </div>
                    <div className={"footer-links-right"}>
                        <a href={"www.google.com"} style={{color: "white"}}>
                            {<FaInstagram/>}
                        </a>
                        <a href={"www.google.com"} style={{color: "white"}}>
                            {<FaTwitter/>}
                        </a>

                    </div>
                {/*</div>*/}
            </footer>
        </div>
    )
}
export default Layout

