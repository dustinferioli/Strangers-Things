import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ErrorPage = () => {
    const navigate = useNavigate(); 
    return (
        <div>
            <p>This page does not exist</p>
        </div>
    )
}

export default ErrorPage; 