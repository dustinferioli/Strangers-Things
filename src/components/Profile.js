import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
// import { getUserData } from '../api/index'
let timeAgo = require('node-time-ago');
import { getUserData }  from '../api/index'
import SinglePostProfile from "./SinglePostProfile";

const Profile = (props) => {

    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
        getUserData()
            .then(userProfile => {
                setUserProfile(userProfile);
            })
            .catch (error => {
                console.error(error);
            });
    }, [userProfile])

    const { 
        // thisuserProfile, 
        isLoggedIn 
    } = props;

    if (!isLoggedIn){
        return <h1>Login to view profile</h1>
    } else {
        // console.log(userProfile);
        // console.log(posts);
        const { messages, posts, username } = userProfile
        // console.log(posts);
        return(
            <div className="profile"> 
            <h1>Welcome, {username}</h1>
            <div style={{ border: "1px solid white" }} className="profile-messages">
                {
                    !messages ? null : 
                    <>
                    <h2>Messages ({messages.length})</h2>
                   { messages.map((message, index) => {
                        const { content, fromUser, post } = message;
                        const { username } = fromUser;
                        const { title } = post
                        return(
                            <div key={index}className="messages-container">
                                <h3>For: {title}</h3>
                                <p>{username}: {content}</p>
                            </div>
                        )
                    })}
                    </>
                }
                {/* {
                    messages.map((message, index) => {
                        const { content, fromUser, post } = message;
                        const { username } = fromUser;
                        const { title } = post
                        return(
                            <div key={index}className="messages-container">
                                <h3>For: {title}</h3>
                                <p>{username}: {content}</p>
                            </div>
                        )
                    })
                } */}
            </div>
            <h1>Your Posts</h1>
            <div className="profile-listings">
                {
                    posts ? posts.map((singlePost, key) => {
                        return <SinglePostProfile singlePost={singlePost} key={key}/>
                    }) : <div>No posts found.</div>
                } 
            </div>
            
            </div>   
        )
    }
}

export default Profile;