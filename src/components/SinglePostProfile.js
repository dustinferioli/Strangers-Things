import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
    APIURL,
    deletePost,
    // addMessage 
} from "../api";
import axios from "axios";
let timeAgo = require('node-time-ago');
const SinglePostProfile = (props) => {
    // let navigate = useNavigate();
    const { singlePost } = props;
    // console.log(isLoggedIn);
    const { 
        active,
        createdAt,
        description,
        location,
        price,
        title,
        updatedAt,
        willDeliver,
        _id
    } = singlePost 

    // const [singlePostState, setSinglePostState] = useState([])
    // const [messageContent, setMessageContent] = useState('');


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

    return (
        <div className="single-post">
            <div key={_id} style={{border: "2px solid white"}}>
                <h3>{title}</h3>
                {/* Find a way to link title to a page that shows the individual post */}
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p>
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
                {
                active ?  <button onSubmit={deletePost}>Delete</button> : null
                }
            </div>
        </div>
    )
}

export default SinglePostProfile;