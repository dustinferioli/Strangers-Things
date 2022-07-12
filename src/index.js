import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';
  

import {
    getPosts,
} from './api'

import { 
    Register,
    Listings,
    Login,
    // Home
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
        {/* <Home /> */}
        {/* <Listings allPosts={allPosts} setAllPosts={setAllPosts} /> */}
        {/* <Register /> */}
        <Login />

        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);