import React, { useEffect, useState } from 'react';
import Register from './Register';
const axios = require('axios');
const Profile = () => {
    const [userData, setuserData] = useState({});
    const[imagepath,setpath] = useState();
    const callAboutPage = async () =>{
        try{
            const res = await fetch('/profile',{
                method:"GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setuserData(data);
            setpath('../public/uploads/')
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
            else{
                window.alert("Login successfull");
            }
            
        }catch (err) {
            console.log(err);
            return(
                <h1>Welcome</h1>
            )
        }
    }
    useEffect(() =>{
        callAboutPage();
    }, [])
    return(
    <>
    <center>
            <h1>We are in profile</h1>
            <form method='GET'>
                <p>Your name is : { userData.name }</p>
                <p>Your age is : {userData.age}</p>
                <p>Your email is : {userData.email}</p>
                <p>Your profile picture name is : {userData.profilepic}</p>
                <img src={`./public/uploads/${userData.profilepic}`}></img><br></br>
                <input type="submit" name="Logout" id="Logout" value="Logout" placeholder='Logout' onClick="window.location.href='Home.js'" ></input>
           
        </form>
        </center>
    </>
    )}

export default Profile
