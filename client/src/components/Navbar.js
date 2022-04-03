import React from 'react'
import './Form.css'
import { } from 'react-router-dom';

const Navbar = () => {
    return(
    <div >
       <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Register">Signup </a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/Profile">Profile</a>
         </li></ul>
    </div>
    );
}

export default Navbar
