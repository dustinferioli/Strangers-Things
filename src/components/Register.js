import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { userLogin } from "../api";
import { APIURL } from "../api";

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) // for saving a user's data in local storage
    const [token, setToken] = useState()
    // const history = useHistory();

    
    useEffect(() => {
        const userinLocalStorage = localStorage.getItem("currentUser");
        setCurrentLoggedInUser(JSON.parse(userinLocalStorage))
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        fetch(`${APIURL}/users/register`, {
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
            // return result;
            // return result.data.token;
            localStorage.setItem("userToken", result.data.token);
            
        })
        .catch(console.error)
    }

    
    return (
        <div className="registration-form">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <br></br>
                <input type="text" required value={username} onChange={(evt) => setUsername(evt.target.value)}></input>
                <br></br>
                <label>Password: </label>
                <br></br>
                <input type="password" required value={password} onChange={(evt) => setPassword(evt.target.value)}></input>
                <br></br>
                <button type="submit">Register</button>
            </form>

            <div>
                {
                    currentLoggedInUser.username && currentLoggedInUser.password ? 
                    <div>You are logged in, {currentLoggedInUser.username}</div> :
                    <div>You are currently logged out!</div>
                }
            </div>
        </div>
    )
}

export default Register;