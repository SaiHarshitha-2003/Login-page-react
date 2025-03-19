// frontend/src/components/Home.js
import React from 'react';
import image from '../components/image.png';

function Home() {
    return (
        <div>
            <center>
            <h2>Home Page</h2>
            <h3>Welcome to My Login Page.</h3>
            <img src={image} alt='Login'/>
            </center>
        </div>
    );
}
export default Home;