import axios from "axios";
import React, { useState, useEffect } from "react";
// import { userLogin } from "../api";
import { APIURL } from "../api";

const Login = (props) => {

    const { currentLoggedInUser, setCurrentLoggedInUser } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) 
    const [token, setToken] = useState('');

    
    useEffect(() => {
        const userInLocalStorage = localStorage.getItem("currentUser");
        // console.log(userInLocalStorage)
        setCurrentLoggedInUser(JSON.parse(userInLocalStorage));
    }, [])


    // set token to local storage
    // localStorage method - setItem
    // grab token from response and set it to localStorage
    // window.localStorage.getItem to retreive the item I set
    // token determines logged in state
    // if token exists, display certain info
    const handleSubmit = async (evt) => {
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
            localStorage.setItem("userToken", result.data.token);

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
        console.log(`This is our new localStorage: ${localStorage.currentUser}`)
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
            <div>Don't have an account? <a href="/register">Register for an account</a></div>
        </div>
    )
}

export default Login;