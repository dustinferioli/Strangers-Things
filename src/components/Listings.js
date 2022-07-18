import React, { useState } from "react";
import SinglePost from './SinglePost';
import { Link } from "react-router-dom";


// const [searchedPosts, setSearchedPosts] = useState([]);
// const [searchTerm, setSearchTerm] = useState('')

// const postMatches = (post, text) => {
//     const { title, description, location } = post;
//     const searchThrough = [description, location, title];
//     for (let i = 0; i < searchThrough.length; i++){
//         if (searchThrough[i].includes(text)){
//             return true;
//         }
//     }
// }

// const Searchbar = () => {
//     return (
//         <div className="search-bar">
//             <input type="text" placeholder="Search for posts" value={searchTerm}
//                 onChange={(evt) => {
//                     setSearchTerm(evt.target.value)
//                 }} />
//         </div>
//     )
// }

// const filteredPosts = posts.fiter(post => postMatches(post, searchTerm));
// const postsToDisplay = searchTerm.length ? filteredPosts : posts;

const Listings = (props) => {
    const { allPosts, isLoggedIn } = props;
    const { posts } = allPosts;

    return (
        <>
        <div className="all-listings">
            {
                // potentially add a button that sorts posts by when its added? using .reverse()
                posts ? posts.map((singlePost, key) => {
                    return (<SinglePost singlePost={singlePost} key={key} isLoggedIn={isLoggedIn}/>)
                }) : <div>No posts found.</div>
            } 
        </div>
        </>
    )

}

export default Listings;