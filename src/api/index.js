import axios from 'axios';
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

// deleting posts
export async function deletePost() {
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

