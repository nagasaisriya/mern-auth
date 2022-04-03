
import {React,useState} from 'react'
import './Form.css'
import axios from 'axios';
const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        gender:"",
        age:"",
        password:"",
        profilepic:"",
    });
     let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }
    const imageupload = ((event) =>{
        setUser({...user,profilepic: event.target.files[0]});
    });
    const handleSubmit=async(e) =>{
        e.preventDefault()
        console.log("user",user);
        const formData = new FormData();
        formData.append('name', user.name)
        formData.append('email', user.email)
        formData.append('gender', user.gender)
        formData.append('age', user.age)
        formData.append('password', user.password)
        formData.append('profilepic', user.profilepic)
        console.log("name",formData.get("profilepic"));
        console.log("trying to reach backend");
        await axios.post("http://localhost:5000/register", formData).then(res => {
            console.log(res);
            window.alert("Registration  Successful");
        }).catch((err)=>{
            console.log("Failed to reach bacheend")
             console.error(err.response.data);
        })
    }

    return(
    <>
    <section className='register'>
        
        <div className='container'>
        <center>
            <form method="POST" encType="multipart/form-data">
            <input type="text" name="name" id="name" placeholder='Username' value={user.name} onChange={handleInput}></input><br></br>
            <input type="email" name="email" id="email" placeholder='Email' value={user.email} onChange={handleInput}></input><br></br>
            <input type="text" name="gender" id="gender" placeholder='Gender' value={user.gender} onChange={handleInput}></input><br></br>
            <input type="number" name="age" id="age" placeholder='Age' value={user.age} onChange={handleInput}></input><br></br>
            <input type="password" name="password" id="password" placeholder='Password' value={user.password} onChange={handleInput}></input><br></br>
            <input type="file" name="profilepic" id="profilepic" placeholder='Profilepic' onChange={imageupload}></input><br></br>
            <input type="submit" name="Register" id="Register" value="Register" placeholder='Register'onClick={handleSubmit} ></input>
            </form>
            </center>
        </div>
        
    </section>
        
    </>
    )}

export default Register
