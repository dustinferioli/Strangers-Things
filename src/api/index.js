import axios from 'axios';
// const axios = require('axios').default;
// export const cohortName = '2206-FTB-ET-WEB-FT-B'
export const APIURL = `https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B`


// TEST ME
export async function testMe() {
    try {
        const { data } = await axios.get(`${APIURL}/test/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.userToken}`
            }});
            return data.success;
    } catch (error) {
        console.error(error)
    }
}


// POST /api/COHORT-NAME/users/me
// Used to register a new user
export async function registerUser() {
    try {
        const { data }  = await axios.post(`${APIURL}/users/register`);
        console.log(data);
        // return data;
    } catch (error) {
        console.error('Failed to register user: ', error)
    }
}
// console.log(registerUser()); 

// POST /api/COHORT-NAME/users/login
// Used for logging into an existing account
// export async function userLogin() {
//     try {
//         const { data } = await axios.post(`${APIURL}/users/login`,{
//             username: username, 
//             password: password
//         });
//         // const { username, password } = data
//         // console.log(username);
//         return data;
//     } catch (error) {
//         console.error('Failed to login: ', error)
//     }
// }
// console.log(userLogin())

// GET /api/COHORT-NAME/users/me
// For getting a logged-in user's data

// export async function getUserData() {
//     try {
        // await fetch(`${APIURL}/users/me`, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${localStorage.userToken}`
        //     },
//         }).then(response => response.json())
//         //   .then(result => {
//         //     // console.log(result);
//         //     // console.log(result.data);
//         //     // return result.data;
//         //   })
//           .catch(console.error)
//     } catch (error) {
//         console.error('Failed to get user data: ', error)
//     }
// }
// getUserData();

export async function getUserData(){
    try {
        const { data } = await axios.get(`${APIURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.userToken}`
            }});
            // console.log(data.data)
            return data.data;
    } catch (error) {
        console.error('Failed to get user data: ', error)
    }
}

// GET /api/COHORT-NAME/posts
// for displaying posts 
export async function getPosts() {
    try {
        const { data }  = await axios.get(`${APIURL}/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.userToken}`
            }});
        // console.log(data.data);
        return data.data;
    } catch (error) {
        console.error('Failed to get posts: ', error)
    }
    // getPosts();
}




// POST /api/COHORT-NAME/posts
// for creating a post
// export async function createPost() {
//     try {
        
//     } catch (error) {
//         console.error('Failed to create post: ', error)
//     }
// }

// PATCH /api/COHORT-NAME/posts/POST_ID
// for editing a post
// export async function editPost() {
//     try {
        
//     } catch (error) {
//         console.error('Failed to edit post: ', error)
//     }
// }



// DELETE /api/COHORT-NAME/posts/POST_ID
// for deleting a post
// export async function deletePost() {
//     try {
//         const { data } = await axios.delete(`${APIURL}/posts/${}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.userToken}`
//             }});
//         console.log(data);
//     } catch (error) {
//         console.error('Failed to delete post: ', error)
//     }
// }


// POST /api/COHORT-NAME/posts/POST_ID/messages
// for creating 
export async function createMessage() {
    try {
        
    } catch (error) {
        console.error('Failed to create message: ', error)
    }
}