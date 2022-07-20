import axios from "axios";
import React, { useState, useEffect } from "react";
// import { userLogin } from "../api";
import { APIURL } from "../api";

import { useNavigate, Link } from "react-router-dom";
const Login = (props) => {
    
    const { isLoggedIn, setIsLoggedIn } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) 
    const [token, setToken] = useState('');

    
    useEffect(() => {
        const userinLocalStorage = localStorage.getItem("currentUser");
        userinLocalStorage ? setCurrentLoggedInUser(JSON.parse(userinLocalStorage))
                            : null
    }, [])


    // set token to local storage
    // localStorage method - setItem
    // grab token from response and set it to localStorage
    // window.localStorage.getItem to retreive the item I set
    // token determines logged in state
    // if token exists, display certain info
    const handleSubmit = async (evt) => {
        // let navigate = useNavigate();
        evt.preventDefault();
        await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${localStorage.userToken}`
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
        .then(result => {
            // console.log(result.data.token);
            let { token } = result.data;
            // console.log(token);
            localStorage.setItem("userToken", token);
            setToken(token);
            // console.log(token);
            // console.log(localStorage.userToken);
        })
        .catch(console.error)

        const loggedInUser = {
            username: username,
            password: password
        }

        localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
        setCurrentLoggedInUser(loggedInUser);
        setUsername(username);
        setPassword(password);
        setIsLoggedIn(true);
        // setTimeout(alert(`Logging you in, ${username}`), 3000);
        // navigate("/profile", { replace: true });
        

        // console.log(`This is our new localStorage: ${localStorage.currentUser}`)
    }

    return (
        <div className="login-form">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <br></br>
                <input type="text" required value={username} onChange={(evt) => setUsername(evt.target.value)}></input>
                <br></br>

                <label>Password: </label>
                <br></br>
                <input type="password" required value={password} onChange={(evt) => setPassword(evt.target.value)}></input>
                <br></br>

                <button type="submit">Login</button>
            </form>

            <div>
                {
                    currentLoggedInUser.username && currentLoggedInUser.password ? 
                    <div>You are logged in, {currentLoggedInUser.username}</div> :
                    <div>You are currently logged out!</div>
                }
            </div>
            <div>Don't have an account? <Link to="/register">Register for an account</Link></div>
        </div>
    )
}

export default Login;