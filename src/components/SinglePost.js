import React from "react";

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
    } = singlePost 
    // console.log(singlePost);

    // create a function that links individual post to message/reply page

    return (
        <div>
            <div key={index} style={{border: "2px solid black"}}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                <p>{location}</p>
                {
                    willDeliver ? <p>Will Deliver</p> : null
                    // use 
                }
                <p>{createdAt}</p>
            </div>
        </div>
    )
}

export default SinglePost;