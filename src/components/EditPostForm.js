import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
    APIURL,
} from "../api";
import axios from "axios";

// Ultimately what I need to do is link to the url APIURL/posts/postID/edit,
// That page will bring up this form
// I want this form to already be pre-populated with the existing info
// How to get info:

const EditPostForm = () => {

    const { postID } = useParams();

    async function editPost() {
        try {
            await fetch(`${APIURL}/posts/${_id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.userToken}`
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                        location,
                        willDeliver
                    }
                })
            }).then(response => response.json())
              .then(result => {
                console.log(result);
              })
        } catch (error) {
            console.error('Could not edit post:', error)
        }
    }


    return (
        <div>
            <h1>Not ready yet ☹️</h1>
        </div>
    )
    // return(
    //     <div className="edit-post-form">
    //     <h1>New Post Form</h1>
    //     <small>* = required</small>
    //     <form onSubmit={editPost}>
    //         <label>Title*: </label>
    //         <br></br>
    //         <input type="text" required value={title} onChange={(evt) => setTitle(evt.target.value)}></input>
    //         <br></br>
    //         <label>Description*: </label>
    //         <br></br>
    //         <input type="text" required value={description} width="100px" height="100px" onChange={(evt) => setDescription(evt.target.value)}></input>
    //         <br></br>
    //         <label>Price*: </label>
    //         <br></br>
    //         <input type="text" required value={price} onChange={(evt) => setPrice(evt.target.value)}></input>
    //         <br></br>
    //         <label>Location: </label>
    //         <br></br>
    //         <input type="text" value={location} onChange={(evt) => setLocation(evt.target.value)}></input>

    //         <br></br>
    //         {/* 
    //         - required, but either "On Request" or a specific location
    //         - potentially use a checkbox for "On Request" if unchecked, shows a text input
    //         for entering a specific location
    //         */}
    //         <label>Will Deliver: </label>
    //         <input type="checkbox" value={willDeliver} onChange={(evt) => setWillDeliver(evt.target.checked)}></input>
    //         <br></br>
    //         <button type="submit">Submit</button>
    //         {/* On submit, I want to be brought back to the listings. import useNavigate */}
    //     </form>
    // </div>
    // )
}

export default EditPostForm;