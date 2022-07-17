import React, { useState } from "react";
import { APIURL } from "../api";
import { useNavigate } from "react-router-dom";

const NewPostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [location, setLocation] = useState('')
    const navigate = useNavigate();


    // console.log(localStorage.userToken)
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await fetch(`${APIURL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.userToken}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: willDeliver,
                    location: location,
                }
            })
        }).then(response => response.json())
            .then(result => {
                // console.log(result);
                setTitle(title);
                setDescription(description);
                setPrice(price);
                setWillDeliver(willDeliver);
                setLocation(location)
            })
            .catch(console.error)
            setTimeout(alert('Adding post...'), 1000);
            navigate("/profile", { replace: true });
            
    }

    return (
        <div className="new-post-form">
            <h1>New Post Form</h1>
            <small>* = required</small>
            <form onSubmit={handleSubmit}>
                <label>Title*: </label>
                <br></br>
                <input type="text" required value={title} onChange={(evt) => setTitle(evt.target.value)}></input>
                <br></br>
                <label>Description*: </label>
                <br></br>
                <input type="text" required value={description} width="100px" height="100px" onChange={(evt) => setDescription(evt.target.value)}></input>
                <br></br>
                <label>Price*: </label>
                <br></br>
                <input type="text" required value={price} onChange={(evt) => setPrice(evt.target.value)}></input>
                <br></br>
                <label>Location: </label>
                <br></br>
                <input type="text" value={location} onChange={(evt) => setLocation(evt.target.value)}></input>

                <br></br>
                {/* 
                - required, but either "On Request" or a specific location
                - potentially use a checkbox for "On Request" if unchecked, shows a text input
                for entering a specific location
                */}
                <label>Will Deliver: </label>
                <input type="checkbox" value={willDeliver} onChange={(evt) => setWillDeliver(evt.target.checked)}></input>
                <br></br>
                <button type="submit">Submit</button>
                {/* On submit, I want to be brought back to the listings. import useNavigate */}
            </form>
        </div>
    )
}

export default NewPostForm;