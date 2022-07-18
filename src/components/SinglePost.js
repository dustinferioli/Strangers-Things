import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    APIURL,
    // deletePost,
    // addMessage 
} from "../api";
import axios from "axios";
let timeAgo = require('node-time-ago');
const SinglePost = (props) => {
    let navigate = useNavigate();
    const { singlePost, index, isLoggedIn } = props;
    // console.log(isLoggedIn);
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

    const [singlePostState, setSinglePostState] = useState([])
    const [messageContent, setMessageContent] = useState('');


    async function deletePost() {
        try {
            const { data } = await axios.delete(`${APIURL}/posts/${_id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.userToken}`
                }});
            console.log(data);
            alert(`Deleting post...`)
        } catch (error) {
            console.error('Failed to delete post: ', error)
        }
    }

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

    async function addMessage (evt) {
        evt.preventDefault();
        try {
            fetch (`${APIURL}/posts/${_id}/messages`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.userToken}`
                },
                body: JSON.stringify({
                    message: {
                        content: messageContent
                    }
                })
            }).then(response => response.json())
              .then(result => {
                console.log(result);
                return result;
              })
              .catch(console.error)
        } catch (error) {
            console.error('Error adding a reply:', error)
        }
    }

    return (
        <div className="single-post">
            <div key={_id} style={{border: "2px solid white"}}>
                <h4>{title}</h4>
                {/* Find a way to link title to a page that shows the individual post */}
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p>
                <p>By: {author.username}</p>
                {
                    willDeliver ? <p>Will Deliver</p> : null
                    // use 
                }
                {
                    active ? <div>Still Active</div> : <div>No Longer Active</div>
                }
                <p>Posted {timeAgo(createdAt)}</p>
                {
                    createdAt !== updatedAt ? <p>Updated {timeAgo(updatedAt)}</p> : null
                }
                
                {!!isAuthor ?
                    <>
                    <div>
                    {
                        messages.length === 1 ? <p>{messages.length} reply</p> : <p>{messages.length} replies</p>
                    }
                    </div> 
                    
                    <button onClick={deletePost}>Delete</button> 
                    {/* <button onClick={navigate(`/posts/edit/${_id}`)}>Edit</button> */}
                    <Link to={`./edit/${_id}`}>Edit</Link>
                    </>
                    : null
                }
                {
                    !isAuthor && isLoggedIn ?
                    <form onSubmit={addMessage}>
                        <input type="text" required value={messageContent} onChange={(evt) => setMessageContent(evt.target.value)}></input>
                        <button type="submit">Reply</button>
                    </form>
                    : null
                }
                
                
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