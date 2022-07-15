import React, { useState, useEffect } from "react";
import SinglePost from './SinglePost';

const Listings = (props) => {
    // console.log(props);
    const { allPosts } = props;
    const { posts } = allPosts;

    return (
        <div>
            <a href="/addpost">Add A Listing</a>
            {
                // potentially add a button that sorts posts by when its added? using .reverse()
                posts ? posts.reverse().map((singlePost, index) => {
                    return <SinglePost singlePost={singlePost} index={index}/>
                }) : <div>No posts found.</div>
            } 
        </div>
    )

}

export default Listings;