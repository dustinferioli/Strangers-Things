import React, { useEffect, useState } from "react";
import SinglePost from './SinglePost';
// import { Link } from "react-router-dom";

import { getPosts }  from '../api/index'


// const Searchbar = () => {

//     const [searchedPosts, setSearchedPosts] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const filteredPosts = posts.fiter(post => postMatches(post, searchTerm));
//     const postsToDisplay = searchTerm.length ? filteredPosts : posts;

//     const postMatches = (post, text) => {
//     const { title, description, location } = post;
//     const searchThrough = [description, location, title];
//     for (let i = 0; i < searchThrough.length; i++){
//         if (searchThrough[i].includes(text)){
//             return true;
//         }
//     }
// }
//     return (
//         <div className="search-bar">
//             <input type="text" placeholder="Search for posts" value={searchTerm}
//                 onChange={(evt) => {
//                     setSearchTerm(evt.target.value)
//                 }}> </input>
//         </div>
//         // <h1>Placeholder</h1>
//     )
    
// }



const Listings = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        getPosts()
                .then(allPosts => {
                // console.log(posts)
                setAllPosts(allPosts);
                })
                .catch(error => {
                console.error(error);
                });
  })
        

    const { isLoggedIn } = props;
    const { posts } = allPosts;

    return (
        <>
        {/* <Searchbar /> */}
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