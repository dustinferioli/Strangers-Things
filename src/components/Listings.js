import React, { useState, useEffect } from "react";
import SinglePost from './SinglePost';

const Listings = (props) => {
    // console.log(props);

    const { allPosts } = props;
    // console.log(allPosts);
    const { posts } = allPosts;
    // console.log(posts);
    // const { author, 
    //     description, 
    //     isAuthor, 
    //     location, 
    //     message, 
    //     price, 
    //     title,
    //     willDeliver,
    //     active,
    //     createdAt,
    //     updatedAt,  
    // } = posts 
    // console.log(posts);



    

    return (
        <div>
            {
                posts ? posts.map((singlePost, index) => {
                    return <SinglePost singlePost={singlePost} index={index}/>
                }) : <div>No posts found.</div>
            } 
        </div>
    )

}

export default Listings;