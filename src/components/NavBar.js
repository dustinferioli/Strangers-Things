import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
    const { isLoggedIn, setIsLoggedIn, currentLoggedInUser, setCurrentLoggedInUser, username } = props;

    function logOut(){
        setTimeout(alert(`Logging you out...`), 1000);
        localStorage.clear();
        setIsLoggedIn(false);
        setCurrentLoggedInUser({});
    }

    return (
        <div className="nav-bar">
            <div className="site-name">
                Stranger's Things
            </div>
            <div className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/posts/">Posts</Link>
                {/* <Link to="/login">Login</Link> */}
                {
                    !isLoggedIn ? <Link to="/login">Login</Link> 
                    : <div> 
                        <Link className="addpost-button" to="/addpost">+ Add Post</Link>
                        <Link to="/profile">Profile</Link> 
                        <a onClick={logOut} className="logout">Logout</a>  
                      </div>
                }
                
            </div>
        </div>
    )
}

export default NavBar;
