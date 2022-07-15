import React from "react";
import { Link } from "react-router-dom";
import { APIURL } from "../api";
import axios from "axios";
import { isPlainObject } from "@mui/utils";

const SinglePost = (props) => {
    
    const { singlePost, index } = props;
    // console.log(props);
    const { author, 
        description, 
        isAuthor, 
        location, 
        messages, 
        price, 
        title,
        willDeliver,
        active,
        createdAt,
        updatedAt,
        _id  
    } = singlePost 


    async function deletePost() {
        try {
            const { data } = await axios.delete(`${APIURL}/posts/${_id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.userToken}`
                }});
            console.log(data);
        } catch (error) {
            console.error('Failed to delete post: ', error)
        }
    }

    // create a function that links individual post to message/reply page
    // console.log(isAuthor);
    return (
        <div>
            <div key={index} style={{border: "2px solid white"}}>
                <h2><a href="">{title}</a></h2>
                {/* Find a way to link title to a page that shows the individual post */}
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>{location}</p>
                <p>{author.username}</p>
                {
                    willDeliver ? <p>Will Deliver</p> : null
                    // use 
                }
                {
                    active ? <div>Still Active</div> : <div>No Longer Active</div>
                }
                <p>{createdAt}</p>
                <p>{updatedAt}</p>
                <p>{messages}</p>
                {!!isAuthor ? 
                    <button onClick={deletePost}>Delete</button> 
                    : null}
                {/* Add a button that allows for deleting! */}
                


                {/* For creating an edit/delete button (focus on deleting first, then editing) */}
                {/* Add a button that allows for editing or deleting;
                add onClick handlers that fetch PATCH for edit and DELETE for deleting
                Clicking on EDIT should:
                    bring me to the PostForm; modify the NewPostForm so that it can handle editing,
                        and display EDIT POST instead of ADD NEW POST
                        ALSO, since we are editing an already existing post, populate the default values
                        inside the form with the post information. This might be tough but its definitely doable.
                */}
            </div>
        </div>
    )
}

export default SinglePost;