import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { userLogin } from "../api";
import { APIURL } from "../api";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) // for saving a user's data in local storage


    
    useEffect(() => {
        const userInLocalStorage = localStorage.getItem("currentUser");
        // console.log(userInLocalStorage)
        setCurrentLoggedInUser(JSON.parse(userInLocalStorage))
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
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
        // console.log(`This is our new localStorage: ${localStorage}`)
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" required value={username} onChange={(evt) => setUsername(evt.target.value)}></input>

                <label>Password: </label>
                <input type="password" required value={password} onChange={(evt) => setPassword(evt.target.value)}></input>

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