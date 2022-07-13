import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Redirect,
    Link,
    BrowserRouter,
  } from 'react-router-dom';
  

import {
    getPosts,
} from './api'

import { 
    NavBar,
    Register,
    Listings,
    Login,
    Home
} from './components';

const App = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then(allPosts => {
                // console.log(posts)
                setAllPosts(allPosts);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);


    return (
        <div className="app">
                <NavBar />
            <BrowserRouter>
            <Routes>
                {/* <Home /> */}
                <Route path="/" element={<Home />}>

                </Route>
                <Route path="/posts" element={<Listings allPosts={allPosts} setAllPosts={setAllPosts} />}>

                </Route>
                <Route path="/login" element={<Login /> }>

                </Route>
                <Route path="/register" element={<Register />}>
                    
                </Route>
                {/* <Listings allPosts={allPosts} setAllPosts={setAllPosts} /> */}
                {/* <Register /> */}
                {/* <Login /> */}
            </Routes>
            </BrowserRouter>
        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);