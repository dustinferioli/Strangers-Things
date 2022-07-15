import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
    const { isLoggedIn } = props;
    return (
        <div className="nav-bar">
            <div className="site-name">
                Stranger's Things
            </div>
            <div className="nav-links">
                {/* <a href="/">Home</a> <br></br>
                <a href="/posts">Posts</a> <br></br>
                <a href ="/login">Login/Signup</a> */}
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                {/* <Link to="/login">Login</Link> */}
                {
                    !isLoggedIn ? <Link to="/login">Login</Link> : <div> <a>Logout</a> <Link to="/profile">Profile</Link> </div>
                }
                
            </div>
        </div>
    )
}

export default NavBar;
