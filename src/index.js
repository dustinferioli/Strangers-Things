import React, { useEffect, useState } from "react";
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
    Profile,
    EditPostForm,
    ErrorPage
} from './components';

const App = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({}) 
    const [token, setToken] = useState('');
    const [userProfile, setUserProfile] = useState({})

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
                <NavBar 
                    isLoggedIn={isLoggedIn} 
                    setIsLoggedIn={setIsLoggedIn}
                    currentLoggedInUser={currentLoggedInUser}
                    setCurrentLoggedInUser={setCurrentLoggedInUser}
                    username={username}
                    />
            <Routes>
                <Route path="/" element={<Home />}>

                </Route>
                <Route path="/posts" element={<Listings 
                    allPosts={allPosts} 
                    setAllPosts={setAllPosts} 
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    />} />
                <Route path={`posts/edit/:postID`} element={<EditPostForm />} />
                <Route path="/login" element={<Login 
                    username={username} 
                    setUsername={setUsername} 
                    password={password}
                    setPassword={setPassword}
                    currentLoggedInUser={currentLoggedInUser}
                    setCurrentLoggedInUser={setCurrentLoggedInUser}
                    token={token}
                    setToken={setToken}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    /> } />
                <Route path="/register" element={<Register />} />
                <Route path="/addpost" element={<NewPostForm 
                                        isLoggedIn={isLoggedIn}
                                        setIsLoggedIn={setIsLoggedIn}
                                            />} />
                <Route path="/profile" element={<Profile 
                                    userProfile={userProfile} 
                                    setUserProfile={setUserProfile} 
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                    />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            </Router>
        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);