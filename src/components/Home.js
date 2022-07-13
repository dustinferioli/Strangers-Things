import React from "react";

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Stranger's Things</h1>
            
        </div>
    )
}

export default Home;

// I want to add a conditional where:
// If the user is not logged in, they get a message displayed on home asking if they want to sign up or log in
// If the user IS logged in, display "Welcome to Stranger's Things {username}"