import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="nav-bar">
            <div className="site-name">
                Stranger's Things
            </div>
            <div className="nav-links">
                <a href="/">Home</a> <br></br>
                <a href="/posts">Posts</a> <br></br>
                <a href ="/login">Login/Signup</a>
            </div>
        </div>
    )
}

export default NavBar;