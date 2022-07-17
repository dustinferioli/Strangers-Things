import React from "react";
import SinglePost from './SinglePost';
import { Link } from "react-router-dom";

const Listings = (props) => {
    // console.log(props);
    // const { allPosts } = props;
    // const { posts } = allPosts;
    const { posts } = props.allPosts;
    // console.log(posts);
    // console.log(posts);
    return (
        <>
        {/* <Link className="addpost-button" to="/addpost">+ Add Post</Link> */}
        <div className="all-listings">
            {
                // potentially add a button that sorts posts by when its added? using .reverse()
                posts ? posts.map((singlePost, key) => {
                    return <SinglePost singlePost={singlePost} key={key}/>
                }) : <div>No posts found.</div>
            } 
        </div>
        </>
    )

}

export default Listings;