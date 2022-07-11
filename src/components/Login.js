import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { userLogin } from "../api";
import { APIURL } from "../api";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) // for saving a user's data in local storage
    // const history = useHistory();

    
    useEffect(() => {
        const userinLocalStorage = localStorage.getItem("currentUser");
        setCurrentLoggedInUser(JSON.parse(userinLocalStorage))
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await axios.post(APIURL, {
                username: username,
                password: password
            })
            return response;
            // console.log(response);
        } catch {
            console.error(error)
        } finally {
            setUsername(username);
            setPassword(password);
        }
    }

    // const loginUser = (evt) = {
    //     evt.preventDefault();

    //     const theLoggedInUserObj = {
            
    //     }

    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     userLogin()
    //         .then(username, password => {
    //             setUsername(username);
    //             setPassword(password);
    //         })
    //         .catch(error =>
    //             console.error(error));
    // }

    return (
        <div>
            <h1>Log In</h1>

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
        </div>
    )
}

export default Login;