import axios from 'axios';
// const axios = require('axios').default;
export const cohortName = '2206-FTB-ET-WEB-FT-B'
export const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`


// POST /api/COHORT-NAME/users/me
// Used to register a new user
export async function registerUser() {
    try {
        const { user }  = await axios.post(`${APIURL}/users/register`, {
            username, password
        });
        // console.log(user);
        return user;
    } catch (error) {
        console.error('Failed to register user: ', error)
    }
}
// console.log(registerUser())

// POST /api/COHORT-NAME/users/login
// Used for logging into an existing account
export async function userLogin() {
    try {
        const { user } = await axios.post(`${APIURL}/users/login`, {
            username, password
        });
        // console.log(user);
        return user;
    } catch (error) {
        console.error('Failed to login: ', error)
    }
}
// console.log(userLogin());

// GET /api/COHORT-NAME/users/me
// For getting a logged-in user's data
export async function getUserData() {
    try {

    } catch (error) {
        console.error('Failed to get user data: ', error)
    }
}

// GET /api/COHORT-NAME/posts
// for displaying posts 
export async function getPosts() {
    try {
        const { data }  = await axios.get(`${APIURL}/posts`);
        // console.log(data.data);
        return data.data;
    } catch (error) {
        console.error('Failed to get posts: ', error)
    }
    // getPosts();
}




// POST /api/COHORT-NAME/posts
// for creating a post
export async function createPost() {
    try {
        
    } catch (error) {
        console.error('Failed to create post: ', error)
    }
}

// PATCH /api/COHORT-NAME/posts/POST_ID
// for editing a post
export async function editPost() {
    try {
        
    } catch (error) {
        console.error('Failed to edit post: ', error)
    }
}

// DELETE /api/COHORT-NAME/posts/POST_ID
// for deleting a post
export async function deletePost() {
    try {
        
    } catch (error) {
        console.error('Failed to delete post: ', error)
    }
}

// POST /api/COHORT-NAME/posts/POST_ID/messages
// for creating 
export async function createMessage() {
    try {
        
    } catch (error) {
        console.error('Failed to create message: ', error)
    }
}