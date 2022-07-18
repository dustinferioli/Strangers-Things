import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
let timeAgo = require('node-time-ago');


const Profile = (props) => {
    const { userProfile, isLoggedIn } = props;
    if (!isLoggedIn){
        return <h1>Login to view profile</h1>
    } else {
        console.log(userProfile);
        const { messages, posts, username } = userProfile
        return(
            <> 
            <h1>Welcome, {username}</h1>
            <div style={{ border: "1px solid white" }} className="profile-messages">
                <h2>Messages ({messages.length})</h2>
                {
                    messages.map((message, index) => {
                        const { content, fromUser, post } = message;
                        const { username } = fromUser;
                        const { title } = post
                        return(
                            <div key={index}className="messages-container">
                                <h4>For: {title}</h4>
                                <p>{username}: {content}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="profile-listings">
                {
                    posts ? posts.map((singlePost, key) => {
                        return <SinglePost singlePost={singlePost} key={key}/>
                    }) : <div>No posts found.</div>
                } 
            </div>
            
            </>   
        )
    }
}

export default Profile;