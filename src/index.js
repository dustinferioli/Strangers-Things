import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
  

import {
    getPosts,
    getUserData,
    testMe
} from './api'

import { 
    NavBar,
    Register,
    Listings,
    Login,
    Home,
    NewPostForm,
    Profile
} from './components';

const App = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) 
    const [token, setToken] = useState('');
    const [userProfile, setUserProfile] = useState({})
    // const [me, setMe] = useState({})

    useEffect(() => {
        getPosts()
            .then(allPosts => {
                // console.log(posts)
                setAllPosts(allPosts);
            })
            .catch(error => {
                console.error(error);
            });
        getUserData()
            .then(userProfile => {
                // console.log(userProfile)
                setUserProfile(userProfile);
            })
            .catch (error => {
                console.error(error);
            });
        testMe()
            .then(isLoggedIn => {
                setIsLoggedIn(isLoggedIn);
                // console.log(isLoggedIn);
            } )
    }, []);


    return (
        <div className="app">
            <Router>
                <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />}>

                </Route>
                <Route path="/posts" element={<Listings allPosts={allPosts} setAllPosts={setAllPosts} />} />
                <Route path="/login" element={<Login 
                    username={username} 
                    setUsername={setUsername} 
                    password={password}
                    setPassword={setPassword}
                    currentLoggedInUser={currentLoggedInUser}
                    setCurrentLoggedInUser={setCurrentLoggedInUser}
                    token={token}
                    setToken={setToken}
                    /> } />
                <Route path="/register" element={<Register />} />
                <Route path="/addpost" element={<NewPostForm />} />
                <Route path="/profile" element={<Profile userProfile={userProfile} setUserProfile={setUserProfile} />} />
                {/* Take care of routes that don't exist with path="*" */}
            </Routes>
            </Router>
        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);