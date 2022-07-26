import axios from "axios";
import React, { useState, useEffect } from "react";
import { APIURL } from "../api";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) // for saving a user's data in local storage
    const [token, setToken] = useState()

    
    // useEffect(() => {
    //     const userInLocalStorage = localStorage.getItem("currentUser");
    //     // console.log(userInLocalStorage)
    //     setCurrentLoggedInUser(JSON.parse(userInLocalStorage));
        
    // }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await fetch(`${APIURL}/users/register`, {
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
            const { token } = result.data;
            setToken(token)
            localStorage.setItem("userToken", token);
            alert(`You are now registered!`);
            alert(`Directing you to login page...`);
            navigate("/login", { replace: true });
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
                <input type="password" required value={password} minLength="8" onChange={(evt) => setPassword(evt.target.value)}></input>
                <br></br>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;