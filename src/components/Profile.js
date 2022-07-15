import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
// import {
//     getUserData,
// } from './api'

const Profile = (props) => {
    const { userProfile } = props;
    // console.log(userProfile);
    const { messages, posts, username } = userProfile

    return(
        <div>
            <h1>{username}</h1>
            {
                // potentially add a button that sorts posts by when its added? using .reverse()
                posts ? posts.reverse().map((singlePost, index) => {
                    return <SinglePost singlePost={singlePost} index={index}/>
                }) : <div>No posts found.</div>
            } 
            {/* Messages are probably going to be an array, so you'll want to map over the messages to have them displayed; look above for what direction to go in */}
        </div>
    )
}

export default Profile;